import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Content } from "ionic-angular";
import { UsuarioModel } from "./../../app/models/usuarioModel";
import * as firebase from "firebase";
import { UsuarioProvider } from "../../providers/usuario/usuario";
import { PedidosPage } from './../pedidos/pedidos';

@IonicPage()
@Component({
  selector: "page-mensagens",
  templateUrl: "mensagens.html"
})
export class MensagensPage {
  @ViewChild(Content) content: Content;
  dataSala = { nome: "" };
  nicknameModel: UsuarioModel = new UsuarioModel();
  ref = firebase.database().ref("salas/" + this.nicknameModel._id);
  dataNick = { nickname: "" };
  data = { type: "", nickname: "", mensagem: "" };
  chats = [];
  key: string;
  nickname: string = "";
  offStatus: boolean = false;
  salas = [];
  messageType = "userMessage";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.key = this.navParams.get("key") as string;
    // this.nickname = this.navParams.get("nickname") as string;
    // this.data.type = "mensagem";

    //this.data.nickname = toString();
    //5d5bf8a4ccb14a24c081b981

    //console.log(UsuarioProvider.GetUsuario());
    this.nicknameModel = UsuarioProvider.GetUsuario();

    this.ref.on("value", resp => {
      this.salas = [];
      this.salas = snapshotToArray(resp);
      console.log(this.salas);
    });

    console.log("id do cara", this.nicknameModel._id);

    firebase
      .database()
      .ref("chats/mensagens/" + this.nicknameModel._id)
      .on("value", resp => {
        this.chats = [];
        this.chats = snapshotToArray(resp);
        setTimeout(() => {
          if (this.offStatus === false) {
            this.content.scrollToBottom(300);
          }
        }, 1000);
      });
    console.log("mensagens", this.chats);
  }


  enviarMensagem() {
    if (this.data.mensagem === "") {
      console.log("mensagen vazia");
      return;
    }
    let newData = firebase
      .database()
      .ref("chats/mensagens/" + this.nicknameModel._id)
      .push();
    newData.set({
      type: this.messageType,
      user: this.nicknameModel.nome,
      userID: this.nicknameModel._id,
      mensagem: this.data.mensagem,
      sendDate: Date()
    });
    this.data.mensagem = "";
  }

  sair() {
    this.navCtrl.setRoot(PedidosPage);
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
