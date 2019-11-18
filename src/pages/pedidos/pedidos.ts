import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ListaPedidosModel } from '../../app/models/ListaPedidosModel';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { HttpProvider } from "./../../providers/http/http";
import { HttpResultModel } from "../../app/models/HttpResultModel";
import { Component } from "@angular/core";
import { ProdutoModel } from '../../app/models/produtoModel';
import { AlertProvider } from '../../providers/alert/alert';
import { EnderecoEntregaModel } from './../../app/models/enderecoModel';

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
    let pedidosResult = this.http.put(`${ConfigHelper.Url}pedido/${model._id}`, model)
    console.log(pedidosResult);
    console.log(model);
    console.log("teste");
    return pedidosResult;
  };

  aceitar(model?: ListaPedidosModel): Promise<HttpResultModel> {
    model.status = "Pedido Aceito";
    let pedidosResult = this.http.put(`${ConfigHelper.Url}pedido/${model._id}`, model)
    return pedidosResult;
  };

  recusar(model?: ListaPedidosModel): Promise<HttpResultModel> {
    model.status = "Pedido Recusado";
    let pedidosResult = this.http.put(`${ConfigHelper.Url}pedido/${model._id}`, model)
    return pedidosResult;
  };

  saiuEntrega(model?: ListaPedidosModel): Promise<HttpResultModel> {
    model.status = "Saiu para Entrega";
    let pedidosResult = this.http.put(`${ConfigHelper.Url}pedido/${model._id}`, model)
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
}
