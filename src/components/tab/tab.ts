import { NavController } from "ionic-angular";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "tab",
  templateUrl: "tab.html"
})
export class TabComponent implements OnInit {
  @Input("pagina") pagina: string;

  tabs: Array<{ icon: string; path: string; label: string; isSelect: boolean }>;

  constructor(private navCtrl: NavController) {}

  ngOnInit(): void {
    this.tabs = [
      {
        icon: "pricetags",
        path: "CategoriaPage",
        label: "Categorias",
        isSelect: this.pagina == "Categorias"
      },
      {
        icon: "menu",
        path: "MeusPedidosPage",
        label: "Pedidos",
        isSelect: this.pagina == "Meus Pedidos"
      },
      {
        icon: "cart",
        path: "CarrinhoPage",
        label: "Carrinho",
        isSelect: this.pagina == "Meu Carrinho"
      },
      {
        icon: "contact",
        path: "MinhaContaPage",
        label: "Conta",
        isSelect: this.pagina == "Minha Conta"
      }
    ];
  }

  selecionarTab(path: string): void {
    this.navCtrl.setRoot(path);
  }
}
