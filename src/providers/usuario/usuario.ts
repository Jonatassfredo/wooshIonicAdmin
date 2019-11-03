import { Injectable } from "@angular/core";
import { ProviderBase } from "../../app/base/providerBase";
import { UsuarioModel } from "../../app/models/usuarioModel";
import { HttpProvider } from "../http/http";
import { ConfigHelper } from "../../app/helpers/configHelper";
import { HttpResultModel } from "../../app/models/HttpResultModel";

@Injectable()
export class UsuarioProvider extends ProviderBase<UsuarioModel> {
  url: string = `${ConfigHelper.Url}usuario`;
  static usuario: UsuarioModel;
  static clientes: Array<UsuarioModel>;

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}usuario`, http);
  }

  async autenticate(email: string, senha: string): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/autenticar`, {
      email: email,
      senha: senha
    });
  }

  async register(usuario: UsuarioModel): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/register`, usuario);
  }

  static RegisterLogin(result: any) {
    localStorage.setItem(ConfigHelper.storageKeys.token, result.token);
    localStorage.setItem(
      ConfigHelper.storageKeys.user,
      JSON.stringify(result.usuario)
    );
  }

  // async GetAllUsuarios(): cli {
  //   UsuarioProvider.clientes = Array<UsuarioModel>()
  //   return this.http.get(`${this.url}/usuario`);
  // }

  static GetUsuario(): UsuarioModel {
    if (!UsuarioProvider.usuario) {
      UsuarioProvider.usuario = <UsuarioModel>(
        JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.user))
      );
    }
    return UsuarioProvider.usuario;
  }

  static get GetTokenAccess(): string {
    return localStorage.getItem(ConfigHelper.storageKeys.token);
  }

  static get IsLogado(): boolean {
    return localStorage.getItem(ConfigHelper.storageKeys.token) != undefined;
  }
}
