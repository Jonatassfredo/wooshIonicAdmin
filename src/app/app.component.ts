import { UsuarioProvider } from "./../providers/usuario/usuario";
import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { OneSignal } from "@ionic-native/onesignal";
import { ConfigHelper } from "./helpers/configHelper";

import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyDlsbsgr1kvkrZndhbRmfA6dMYpW8i1-HM",
  authDomain: "fir-chat-e7621.firebaseapp.com",
  databaseURL: "https://fir-chat-e7621.firebaseio.com",
  projectId: "fir-chat-e7621",
  storageBucket: "fir-chat-e7621.appspot.com",
  messagingSenderId: "543438022590",
  appId: "1:543438022590:web:990a639cbc269175"
};

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = UsuarioProvider.IsLogado ? "CategoriaPage" : "LoginPage";

  constructor(
    private platform: Platform,
    // private oneSignal: OneSignal,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      // this._configOneSignal();
    });
    firebase.initializeApp(config);
  }

  // private _configOneSignal(): void {
  //   if (this.platform.is("cordova")) {
  //     this.oneSignal.startInit("00e9d794-3770-45e8-9f93-49e05d7a004e");
  //     this.oneSignal.inFocusDisplaying(
  //       this.oneSignal.OSInFocusDisplayOption.Notification
  //     );

  //     this.oneSignal.handleNotificationReceived().subscribe(data => {
  //       console.log("NotificacaoRecebida", data);
  //     });

  //     this.oneSignal.handleNotificationOpened().subscribe(data => {
  //       console.log("NotificacaoAberta", data);
  //     });

  //     this.oneSignal.getIds().then(result => {
  //       localStorage.setItem(
  //         ConfigHelper.storageKeys.oneSignalUid,
  //         result.userId
  //       );
  //       console.log("OneSignal", JSON.stringify(result));
  //     });

  //     this.oneSignal.endInit();
  //   }
  // }
}
