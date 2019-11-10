import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";

//statusbar import
import { StatusBar } from "@ionic-native/status-bar";

//camera
import { Camera } from "@ionic-native/camera";

//push notifications
import { OneSignal } from "@ionic-native/onesignal";
import { MyApp } from "./app.component";

//animação loading
import { SpinnerProvider } from "../providers/spinner/spinner";

//Mensagem Alerta
import { AlertProvider } from "../providers/alert/alert";

//imports para internet, rodar no browser e http
import { BrowserModule } from "@angular/platform-browser";
import { Network } from "@ionic-native/network";
import { HttpClientModule } from "../../node_modules/@angular/common/http";

import { HttpProvider } from "../providers/http/http";
import { NetworkProvider } from "../providers/network/network";

import { UsuarioProvider } from "../providers/usuario/usuario";
import { CategoriaProvider } from "../providers/categoria/categoria";
import { CameraProvider } from "../providers/camera/camera";
import { ProdutoProvider } from "../providers/produto/produto";
import { CarrinhoProvider } from "../providers/carrinho/carrinho";
import { EnderecoEntregaProvider } from "../providers/endereco/endereco";
// import { MensagensPage } from "./../pages/mensagens/mensagens";
import { OperadorProvider } from "../providers/operador/operador";

@NgModule({
  declarations: [MyApp,],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp,],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SpinnerProvider,
    AlertProvider,
    HttpProvider,
    NetworkProvider,
    UsuarioProvider,
    CategoriaProvider,
    CameraProvider,
    Camera,
    OneSignal,
    Network,
    ProdutoProvider,
    CarrinhoProvider,
    EnderecoEntregaProvider,
    // MensagensPage,
    OperadorProvider
  ]
})
export class AppModule { }
