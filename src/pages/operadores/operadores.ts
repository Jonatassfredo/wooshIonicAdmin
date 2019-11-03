import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OperadorModel } from '../../app/models/operadorModel';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { HttpResultModel } from '../../app/models/HttpResultModel';
import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
  selector: 'page-operadores',
  templateUrl: 'operadores.html',
})
export class OperadoresPage {

  operadores: OperadorModel;
  lista: Array<OperadorModel> = new Array<OperadorModel>();
  // url: string = `${ConfigHelper.Url}usuario`;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider) {
  }


  private async GetAllOperadores(): Promise<HttpResultModel> {
    try {
      let operadoresResult = await this.http.get(`${ConfigHelper.Url}operador`);
      if (operadoresResult.success) {
        this.lista = <Array<OperadorModel>>operadoresResult.data;
        console.log(this.lista);
        return operadoresResult;
      }
    } catch (error) {
      console.log('Problema ao carregar os pedidos, motivo: ', error);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperadoresPage');
    this.GetAllOperadores();
  }

  addOrEdit(model?: OperadorModel): void {
    this.navCtrl.push('AdmOperadorPage', { _operador: model });
    console.log("model", model);
  }

}
