import { UsuarioModel } from "./../../app/models/usuarioModel";
import { EnderecoEntregaModel } from "./../../app/models/enderecoModel";
import { AlertProvider } from "./../../providers/alert/alert";
import { CameraProvider } from "./../../providers/camera/camera";
import { ConfigHelper } from "./../../app/helpers/configHelper";
import { UsuarioProvider } from "./../../providers/usuario/usuario";
import { Component } from "@angular/core";
import { MensagensPage } from "../mensagens/mensagens";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController
} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-minha-conta",
  templateUrl: "minha-conta.html"
})
export class MinhaContaPage {
  usuarioLogado: UsuarioModel = new UsuarioModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usuarioSrv: UsuarioProvider,
    private cameraSrv: CameraProvider,
    public actionSheetCtrl: ActionSheetController,
    private alertSrv: AlertProvider
  ) {}

  ionViewDidLoad() {
    this.LoadData();
  }

  mensagens() {
    this.navCtrl.setRoot(MensagensPage);
  }

  sair() {
    try {
      this.alertSrv.confirm(
        "Sair",
        "Deseja realmente sair de sua Conta atual?",
        async () => {
          if (this.alertSrv) {
            localStorage.clear();
            this.navCtrl.setRoot("LoginPage");
          }
        }
      );
    } catch (error) {
      console.log("Erro ao excluir", error);
    }
  }

  mudarFoto(): void {
    let action = this.actionSheetCtrl.create({
      title: "Foto",
      buttons: [
        {
          text: "Remover Foto",
          handler: () => {
            this.usuarioLogado.foto = ConfigHelper.photo;
          }
        },
        {
          text: "Selecionar da Galeria",
          handler: () => {
            this.cameraSrv.getPictureFromGalery(photo => {
              this.usuarioLogado.foto = photo;
            });
          }
        },
        { text: "Cancelar", handler: () => {}, role: "destructive" }
      ]
    });
    action.present();
  }

  async salvar(): Promise<void> {
    try {
      let salvarResult = await this.usuarioSrv.put(
        this.usuarioLogado._id,
        this.usuarioLogado
      );
      if (salvarResult.success) {
        this.alertSrv.toast("Dados atualizados com sucesso!", "bottom");
      }
    } catch (error) {
      console.log("Erro ao atualizar os dados, motivo: " + error);
    }
    console.log("telefone", this.usuarioLogado.telefone);
  }

  async LoadData(): Promise<void> {
    try {
      let user = <UsuarioModel>(
        JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.user))
      );
      let userResult = await this.usuarioSrv.getByUid(user._id);
      if (userResult.success) {
        this.usuarioLogado = <UsuarioModel>userResult.data;
        if (!this.usuarioLogado.foto)
          this.usuarioLogado.foto = ConfigHelper.photo;
      }
    } catch (error) {
      console.log("Problema ao carregar os dados do usuário");
    }
    console.log("telefone", this.usuarioLogado.telefone);
  }

  //fazer tela de cadastro de endereço de entrega
  async adicionarEndereco(model?: EnderecoEntregaModel): Promise<void> {
    this.navCtrl.push("ListEnderecosEntregaPage");
  }
}
