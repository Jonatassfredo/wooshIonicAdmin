import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Platform } from "ionic-angular";
import { EnderecoEntregaModel } from "../../app/models/enderecoModel";
import { EnderecoEntregaProvider } from "../../providers/endereco/endereco";
import { AlertProvider } from "./../../providers/alert/alert";

@IonicPage()
@Component({
  selector: "page-cad-endereco-entrega",
  templateUrl: "cad-endereco-entrega.html"
})
export class CadEnderecoEntregaPage {
  endereco: EnderecoEntregaModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    private enderecoSrv: EnderecoEntregaProvider,
    private alertSrv: AlertProvider
  ) {
    let _ender = this.navParams.get("_endereco");
    if (_ender) this.endereco = <EnderecoEntregaModel>_ender;
    else this.endereco = new EnderecoEntregaModel();
  }

  async excluir(): Promise<void> {
    try {
      this.alertSrv.confirm(
        "Excluir?",
        `Deseja realmente excluir a endereco ${this.endereco.rua}?`,
        async () => {
          let excluirResult = await this.enderecoSrv.delete(this.endereco._id);
          if (excluirResult.success) {
            this.alertSrv.toast("Categoria excluída com sucesso!", "bottom");
            this.navCtrl.setRoot("ListEnderecosEntregaPage");
          }
        }
      );
    } catch (error) {
      console.log("Erro ao excluir", error);
    }
  }

  async salvar(): Promise<void> {
    let sucesso = false;
    if (!this.endereco._id) {
      let cadastroResult = await this.enderecoSrv.post(this.endereco);
      sucesso = cadastroResult.success;
    } else {
      let updateResult = await this.enderecoSrv.put(
        this.endereco._id,
        this.endereco
      );
      sucesso = updateResult.success;
    }
    if (sucesso) {
      this.alertSrv.toast("Endereço salvo com sucesso!", "bottom");
      this.navCtrl.setRoot("ListEnderecosEntregaPage");
    }
  }
}
