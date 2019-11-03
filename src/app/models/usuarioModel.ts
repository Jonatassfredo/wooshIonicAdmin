import { EnderecoEntregaModel } from "./enderecoModel";

export class UsuarioModel {
  _id: string;
  nome: string;
  email: string;
  cpf: string;
  foto: string;
  telefone: number = 0;
  ativo: string;
  enderecosEntrega: Array<EnderecoEntregaModel>;

  constructor() {
    this.enderecosEntrega = new Array<EnderecoEntregaModel>();
  }
}
