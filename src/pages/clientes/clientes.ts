import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioModel } from '../../app/models/usuarioModel';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { HttpResultModel } from '../../app/models/HttpResultModel';
import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {
  clientes: UsuarioModel;
  lista: Array<UsuarioModel> = new Array<UsuarioModel>();
  // url: string = `${ConfigHelper.Url}usuario`;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider) {
  }


  private async GetAllClientes(): Promise<HttpResultModel> {
    try {
      let usuariosResult = await this.http.get(`${ConfigHelper.Url}usuario`);
      if (usuariosResult.success) {
        this.lista = <Array<UsuarioModel>>usuariosResult.data;
        console.log(this.lista);
        return usuariosResult;
      }
    } catch (error) {
      console.log('Problema ao carregar os pedidos, motivo: ', error);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesPage');
    this.GetAllClientes();
  }

  addOrEdit(model?: UsuarioModel): void {
    this.navCtrl.push('AdmClientePage', { _cliente: model });
    console.log("model", model);
  }

}
