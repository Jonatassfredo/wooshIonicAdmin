import { AlertProvider } from "./../../providers/alert/alert";
import { CarrinhoModel } from "./../../app/models/carrinhoModel";
import { CarrinhoProvider } from "./../../providers/carrinho/carrinho";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AcaoCarrinhoEnum } from "../../app/enums/AcaoCarrinhoEnum";
import { ProdutoModel } from "../../app/models/produtoModel";
import { EnderecoEntregaModel } from "../../app/models/enderecoModel";
import { EnderecoEntregaProvider } from "../../providers/endereco/endereco";
import { MensagensPage } from "../mensagens/mensagens";

@IonicPage()
@Component({
  selector: "page-carrinho",
  templateUrl: "carrinho.html"
})
export class CarrinhoPage {
  usuarioLogado: EnderecoEntregaModel = new EnderecoEntregaModel();
  produtos: any;
  totalProdutos: number = 0.0;
  carrinho: CarrinhoModel = new CarrinhoModel();
  enderecos: Array<EnderecoEntregaModel> = new Array<EnderecoEntregaModel>();
  formaPagamento = ["Dinheiro", "Cartão de Crédito/Débito"];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private carrinhoSrv: CarrinhoProvider,
    private alertSrv: AlertProvider,
    private enderecoSrv: EnderecoEntregaProvider
  ) {
    this.loadData();
  }

  async loadData(): Promise<void> {
    try {
      let enderecoEntregaResult = await this.enderecoSrv.get();
      if (enderecoEntregaResult.success) {
        this.enderecos = <Array<EnderecoEntregaModel>>(
          enderecoEntregaResult.data
        );
        console.log("enderecos", this.enderecos);
      }
    } catch (error) {
      console.log("Erro ao carregar os endereços", error);
    }
  }

  ionViewDidLoad() {
    this.carrinhoSrv.getCarrinho().subscribe(data => {
      this.carrinho = data;
    });
  }

  quantidadeAlterada(produto: ProdutoModel, evt: any): void {
    if (evt.acao == AcaoCarrinhoEnum.Adicionar)
      this.carrinhoSrv.adicionarNovoItem(produto);
    else this.carrinhoSrv.removerItem(produto);
  }

  async finalizarPedido(): Promise<void> {
    try {
      this.alertSrv.confirm(
        "Finalizar pedido",
        "Deseja concluir seu pedido?",
        async () => {
          let pedidoResult = await this.carrinhoSrv.SalvarPedido(this.carrinho);
          console.log("meu carinho", this.carrinho);

          if (pedidoResult.success) {
            this.carrinho.valorTotal = 0;
            this.carrinho.itens = [];
            this.carrinho.enderecoEntregaId = "";
            this.carrinho.formaPagamento = "";
            this.navCtrl.setRoot("MeusPedidosPage");
            this.alertSrv.toast("Pedido realizado com sucesso!", "bottom");
          }
          if (pedidoResult.success) {
            this.navCtrl.setRoot(MensagensPage);
          }
        }
      );
    } catch (error) {
      console.log("Problema ao enviar seu pedido", error);
    }
  }
}
