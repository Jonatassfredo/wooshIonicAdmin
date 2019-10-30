import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ListaPedidosModel } from '../../app/models/ListaPedidosModel';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { HttpProvider } from "./../../providers/http/http";
import { HttpResultModel } from "../../app/models/HttpResultModel";
import { Component } from "@angular/core";
import { ProdutoModel } from '../../app/models/produtoModel';
import { AlertProvider } from '../../providers/alert/alert';
// import { ProdutoModel } from './../../app/models/produtoModel';

@IonicPage()
@Component({
  selector: 'meus-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {
  produtos: ProdutoModel;
  lista: Array<ListaPedidosModel> = new Array<ListaPedidosModel>();

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

  sair() {
    try {
      this.alertSrv.confirm(
        "Sair",
        "Deseja realmente sair de sua Conta atual?",
        async () => {
          if (this.alertSrv) {
            localStorage.clear();
            this.navCtrl.setRoot("LoginPage");
          }
        }
      );
    } catch (error) {
      console.log("Erro ao excluir", error);
    }
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
        { text: "Cancelar", handler: () => { }, role: "destructive" }
      ]
    });
    action.present();
  }

  private gerenciarCategoria(): void {
    this.navCtrl.push("AdmCategoriasPage");
  }

  private gerenciarProduto(): void {
    this.navCtrl.push("AdmProdutosPage");
  }

  private gerenciarCliente(): void {
    this.navCtrl.push("ClientesPage");
  }


  private async GetAllPedidos(): Promise<HttpResultModel> {
    try {
      let pedidosResult = await this.http.get(`${ConfigHelper.Url}pedido/getAll`);
      if (pedidosResult.success) {
        this.lista = <Array<ListaPedidosModel>>pedidosResult.data;
        this.produtos = <ProdutoModel>pedidosResult.data
        console.log(pedidosResult);
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
