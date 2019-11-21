import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OperadorModel } from '../../app/models/operadorModel';
import { AlertProvider } from '../../providers/alert/alert';
import { OperadorProvider } from '../../providers/operador/operador';

@IonicPage()
@Component({
  selector: 'page-adm-operador',
  templateUrl: 'adm-operador.html',
})
export class AdmOperadorPage {
  operador: OperadorModel

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private usuarioSrv: OperadorProvider,
    private alertSrv: AlertProvider,
    private operadorSrv: OperadorProvider) {
    let _cli = this.navParams.get('_operador');
    console.log("teste item", _cli);

    if (_cli && _cli._id) {
      this.operador = <OperadorModel>_cli;
    }
    else
      this.operador = new OperadorModel();
  }

  async excluir(): Promise<void> {
    try {
      this.alertSrv.confirm('Excluir?', `Deseja realmente excluir o operador ${this.operador.nome}?`,
        async () => {
          let excluirResult = await this.operadorSrv.delete(this.operador._id);
          if (excluirResult.success) {
            this.alertSrv.toast('Operador excluído com sucesso!', 'bottom');
            this.navCtrl.setRoot('PedidosPage');
          }
        });
    } catch (error) {
      console.log('Erro ao excluir', error);
    }
  }

  async salvar(): Promise<void> {
    let sucesso = false;
    if (!this.operador._id) {
      let cadastroResult = await this.usuarioSrv.post(this.operador);
      sucesso = cadastroResult.success;
    } else {
      let updateResult = await this.usuarioSrv.put(this.operador._id, this.operador);
      console.log("put operador", this.operador);
      sucesso = updateResult.success;
    }
    if (sucesso) {
      this.alertSrv.toast('Operador salvo com sucesso!', 'bottom');
      this.navCtrl.setRoot('PedidosPage');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmOperadorPage');
  }

}
