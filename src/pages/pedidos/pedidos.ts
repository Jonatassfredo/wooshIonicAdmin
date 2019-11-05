import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ListaPedidosModel } from '../../app/models/ListaPedidosModel';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { HttpProvider } from "./../../providers/http/http";
import { HttpResultModel } from "../../app/models/HttpResultModel";
import { Component } from "@angular/core";
import { ProdutoModel } from '../../app/models/produtoModel';
import { AlertProvider } from '../../providers/alert/alert';
import { UsuarioModel } from '../../app/models/usuarioModel';
// import { ProdutoModel } from './../../app/models/produtoModel';

@IonicPage()
@Component({
  selector: 'meus-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {
  produtos: ProdutoModel;
  pedidos: Array<ListaPedidosModel> = new Array<ListaPedidosModel>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public http: HttpProvider,
    private alertSrv: AlertProvider) {

  }
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

  clienteInfo(model?: UsuarioModel): void {
    this.navCtrl.push('AdmClientePage', { _cliente: model });
    console.log("model", model);
  }

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


        // for (let i = 0; i = this.pedidos.length; i++) {
        //   console.log("teste prod", this.pedidos[i]);
        // }

        let teste = this.pedidos;
        console.log("sadjhsadkjas", teste);



        // let prod = this._carrinho.itens.filter(x => x.Produto._id == item._id)[0];
        // if (prod) return prod.Quantidade;

        console.log(pedidosResult.data);
        return pedidosResult;
      }
    } catch (error) {
      console.log('Problema ao carregar os pedidos, motivo: ', error);
    }
  }

  public contaItem(item: ListaPedidosModel): number {
    // console.log(JSON.parse(item.itens));
    return ListaPedidosModel.getTotalItens(item.itens);
  }
}
