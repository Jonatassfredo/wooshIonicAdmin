import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioModel } from './../../app/models/usuarioModel';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { AlertProvider } from '../../providers/alert/alert';

@IonicPage()
@Component({
  selector: 'page-adm-cliente',
  templateUrl: 'adm-cliente.html',
})
export class AdmClientePage {

  cliente: UsuarioModel

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private usuarioSrv: UsuarioProvider,
    private alertSrv: AlertProvider) {
    let _cli = this.navParams.get('_cliente');
    console.log("teste item", _cli);

    if (_cli && _cli._id) {
      this.cliente = <UsuarioModel>_cli;
    }
    else
      this.cliente = new UsuarioModel();
  }

  async salvar(): Promise<void> {
    let sucesso = false;
    if (!this.cliente._id) {
      let cadastroResult = await this.usuarioSrv.post(this.cliente);
      sucesso = cadastroResult.success;
    } else {
      let updateResult = await this.usuarioSrv.put(this.cliente._id, this.cliente);
      console.log("put cliente", this.cliente);
      sucesso = updateResult.success;
    }
    if (sucesso) {
      this.alertSrv.toast('Cliente salvo com sucesso!', 'bottom');
      // this.navCtrl.setRoot('ClientesPage');
      this.navCtrl.setRoot('PedidosPage');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmClientePage');
  }

}
