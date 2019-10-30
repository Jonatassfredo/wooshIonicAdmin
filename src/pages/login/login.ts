import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { OperadorProvider } from './../../providers/operador/operador';

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  form: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private operadorSrv: OperadorProvider
  ) { }

  async login(): Promise<void> {
    let result = await this.operadorSrv.autenticate(
      this.form.nome,
      this.form.senha
    );
    if (result.success) {
      OperadorProvider.RegisterLogin(result.data);
      this.navCtrl.setRoot("PedidosPage");
    }
    console.log(result);
  }

  cadastrar(): void {
    this.navCtrl.setRoot("CadastroPage");
  }
}
