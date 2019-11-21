import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ListaPedidosModel } from '../../app/models/ListaPedidosModel';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { HttpProvider } from "./../../providers/http/http";
import { HttpResultModel } from "../../app/models/HttpResultModel";
import { Component } from "@angular/core";
import { ProdutoModel } from '../../app/models/produtoModel';
import { AlertProvider } from '../../providers/alert/alert';
import { EnderecoEntregaModel } from './../../app/models/enderecoModel';
import { OperadorModel } from '../../app/models/operadorModel';
import firebase from 'firebase';
import { OperadorProvider } from '../../providers/operador/operador';

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {
  produtos: ProdutoModel;
  // enderecoEntregaId: any;
  pedidos: Array<ListaPedidosModel> = new Array<ListaPedidosModel>();
  enderecoEntrega = new EnderecoEntregaModel;
  statusPedido: ["Pedido Aceito", "Pedido Recusado", "Saiu para Entrega"];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public http: HttpProvider,
    private alertSrv: AlertProvider) {

  }

  mensagens(model?: ListaPedidosModel): void {
    this.navCtrl.push('MensagensPage', { _pedido: model });
    console.log("model", model);
  }


  salvarPedido(model?: ListaPedidosModel): Promise<HttpResultModel> {
    if (model.tempoEntrega !== "0") {
      this.alertSrv.toast('Tempo de entrega já definido!', 'bottom');
      return;
    }
    let pedidosResult = this.http.put(`${ConfigHelper.Url}pedido/${model._id}`, model)
    this.enviarMensagem(model.usuarioId, `O tempo de entrega para seu pedido é de ${model.tempoEntrega} minutos!`)
    return pedidosResult;
  };

  aceitar(model?: ListaPedidosModel): Promise<HttpResultModel> {
    if (model.status !== "Aguardando") {
      this.alertSrv.toast('Este pedido já foi recusado ou aceito!', 'bottom');
      return;
    }
    model.status = "Pedido Aceito";
    let pedidosResult = this.http.put(`${ConfigHelper.Url}pedido/${model._id}`, model)
    this.enviarMensagem(model.usuarioId, "Woooooooosh! Seu pedido foi aceito, já estamos preparando ele e assim que sair para a entrega te avisamos aqui ;)")
    this.alertSrv.toast('Pedido aceito com sucesso!', 'bottom');
    return pedidosResult;
  };

  recusar(model?: ListaPedidosModel): Promise<HttpResultModel> {
    if (model.status !== "Aguardando") {
      this.alertSrv.toast('Este pedido já foi recusado ou aceito!', 'bottom');
      return;
    }
    model.status = "Pedido Recusado";
    let pedidosResult = this.http.put(`${ConfigHelper.Url}pedido/${model._id}`, model)
    this.enviarMensagem(model.usuarioId, "Lamentamos mas seu pedido foi recusado :(")
    this.alertSrv.toast('Pedido recusado com sucesso!', 'bottom');
    return pedidosResult;
  };

  saiuEntrega(model?: ListaPedidosModel): Promise<HttpResultModel> {
    if (model.status === "Pedido Recusado") {
      this.alertSrv.toast('Este pedido foi recusado!', 'bottom');
      return;
    }
    if (model.status === "Saiu para Entrega") {
      this.alertSrv.toast('Já definido como "Saiu para Entrega"!', 'bottom');
      return;
    }
    model.status = "Saiu para Entrega";
    let pedidosResult = this.http.put(`${ConfigHelper.Url}pedido/${model._id}`, model)
    this.enviarMensagem(model.usuarioId, "Seu pedido saiu para entrega :D")
    this.alertSrv.toast('Definido como "Saiu para entrega" sucesso!', 'bottom');
    return pedidosResult;
  };

  ionViewDidLoad() {
    this.GetAllPedidos();
    console.log(this.produtos);
  }

  adminOptions(): void {
    let action = this.actionSheetCtrl.create({
      title: "Administração",
      buttons: [
        {
          text: "Gerenciar Categorias",
          handler: () => {
            this.gerenciarCategoria();
          }
        },
        {
          text: "Gerenciar Produtos",
          handler: () => {
            this.gerenciarProduto();
          }
        },
        {
          text: "Gerenciar Clientes",
          handler: () => {
            this.gerenciarCliente();
          }
        },
        {
          text: "Gerenciar Operadores",
          handler: () => {
            this.gerenciarOperador();
          }
        },
        {
          text: "Sair da conta",
          handler: () => {
            this.sair();
          }
        },
        { text: "Cancelar", handler: () => { }, role: "destructive" }
      ]
    });
    action.present();
  }

  private gerenciarCategoria(): void {
    this.navCtrl.push("AdmCategoriasPage");
  }

  private gerenciarOperador(): void {
    this.navCtrl.push("OperadoresPage");
  }

  private gerenciarProduto(): void {
    this.navCtrl.push("AdmProdutosPage");
  }

  private gerenciarCliente(): void {
    this.navCtrl.push("ClientesPage");
  }

  // clienteInfo(model?: UsuarioModel): void {
  //   this.navCtrl.push('AdmClientePage', { _cliente: model });
  //   console.log("model", model);
  // }

  sair() {
    try {
      this.alertSrv.confirm(
        "Sair",
        "Deseja realmente sair de sua Conta atual?",
        async () => {
          if (this.alertSrv) {
            localStorage.clear();
            this.navCtrl.push("LoginPage");
          }
        }
      );
    } catch (error) {
      console.log("Erro ao excluir", error);
    }
  }

  private async GetAllPedidos(): Promise<HttpResultModel> {
    try {
      let pedidosResult = await this.http.get(`${ConfigHelper.Url}pedido/getAll`);
      if (pedidosResult.success) {
        this.pedidos = <Array<ListaPedidosModel>>pedidosResult.data;
        console.log(this.pedidos);
        return pedidosResult;
      }
    } catch (error) {
      console.log('Problema ao carregar os pedidos, motivo: ', error);
    }
  }

  enviarMensagem(idUser: string, mensagem: string) {
    let op: OperadorModel = OperadorProvider.GetOperador();
    let newData = firebase
      .database()
      .ref("chats/mensagens/" + idUser)
      .push();
    newData.set({
      type: "operadorMessage",
      user: op.nome,
      userID: null,
      mensagem: mensagem,
      sendDate: Date()
    });
  }
}
