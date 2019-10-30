import { ProdutoModel } from './produtoModel';

export class ListaPedidosModel {
  _id: string;
  dataPedido: string;
  valorTotal: number;
  itens: string;
  itensGeral: Array<ProdutoModel>;
  usuarioId: string;
  operadorId: string;
  status: string;
  observacoes: string;
  tempoEntrega: string;
  aceito: string;
  dataPedidoAceito: Date;
  formaPagamento: string;
  enderecoEntregaId: string;

  constructor() {
    this.itensGeral = new Array<ProdutoModel>();
  }

  public static getTotalItens(itens: string): number {
    try {
      let _itens = JSON.parse(itens);
      return _itens.length;
    } catch (error) {
      return 0;
    }
  }
}
