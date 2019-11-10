import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Content } from "ionic-angular";
import { UsuarioModel } from "./../../app/models/usuarioModel";
import * as firebase from "firebase";
import { UsuarioProvider } from "../../providers/usuario/usuario";
import { PedidosPage } from './../pedidos/pedidos';
import { ListaPedidosModel } from './../../app/models/ListaPedidosModel';
import { OperadorProvider } from './../../providers/operador/operador';
import { OperadorModel } from "../../app/models/operadorModel";

@IonicPage()
@Component({
  selector: "page-mensagens",
  templateUrl: "mensagens.html"
})
export class MensagensPage {
  @ViewChild(Content) content: Content;
  dataSala = { nome: "" };
  // nicknameModel: UsuarioModel = new UsuarioModel();
  nicknameModel: any;
  ref = firebase.database().ref("salas/" + this.nicknameModel);
  dataNick = { nickname: "" };
  data = { type: "", nickname: "", mensagem: "" };
  chats = [];
  key: string;
  nickname: string = "";
  offStatus: boolean = false;
  salas = [];
  messageType = "operadorMessage";
  pedido: ListaPedidosModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.key = this.navParams.get("key") as string;
    // this.nickname = this.navParams.get("nickname") as string;
    // this.data.type = "mensagem";

    //this.data.nickname = toString();
    //5d5bf8a4ccb14a24c081b981

    // console.log("teste op", OperadorProvider.GetOperador());





    let _ped = this.navParams.get('_pedido');
    this.pedido = <ListaPedidosModel>_ped;
    this.pedido.usuarioId = _ped.usuarioId;
    this.nicknameModel = this.pedido.usuarioId;
    // console.log("teste item", this.pedido.usuarioId);

    this.ref.on("value", resp => {
      this.salas = [];
      this.salas = snapshotToArray(resp);
      console.log(this.salas);
    });

    // console.log("id do cara", this.nicknameModel);

    firebase
      .database()
      .ref("chats/mensagens/" + this.nicknameModel)
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
    let op: OperadorModel = OperadorProvider.GetOperador();
    console.log("testeeee", op.nome);

    if (this.data.mensagem === "") {
      console.log("mensagen vazia");
      return;
    }
    let newData = firebase
      .database()
      .ref("chats/mensagens/" + this.nicknameModel)
      .push();
    newData.set({
      type: this.messageType,
      user: op.nome,
      userID: this.nicknameModel,
      mensagem: this.data.mensagem,
      sendDate: Date()
    });

    this.data.mensagem = "";
    console.log("msg", this.data);
  }

  sair() {
    this.navCtrl.push(PedidosPage);
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
