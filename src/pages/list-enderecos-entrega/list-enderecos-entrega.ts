import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EnderecoEntregaModel } from "../../app/models/enderecoModel";
import { EnderecoEntregaProvider } from "../../providers/endereco/endereco";

@IonicPage()
@Component({
  selector: "page-list-enderecos-entrega",
  templateUrl: "list-enderecos-entrega.html"
})
export class ListEnderecosEntregaPage {
  lista: Array<EnderecoEntregaModel> = new Array<EnderecoEntregaModel>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private enderecoSrv: EnderecoEntregaProvider
  ) {
    this._loadData();
  }

  private async _loadData(): Promise<void> {
    let enderecoResult = await this.enderecoSrv.get();
    if (enderecoResult.success) {
      this.lista = <Array<EnderecoEntregaModel>>enderecoResult.data;
    }
  }

  addOrEdit(model?: EnderecoEntregaModel): void {
    this.navCtrl.push("CadEnderecoEntregaPage", { _endereco: model });
  }
}
