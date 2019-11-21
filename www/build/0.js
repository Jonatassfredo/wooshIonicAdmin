webpackJsonp([0],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinhaContaPageModule", function() { return MinhaContaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__minha_conta__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MinhaContaPageModule = /** @class */ (function () {
    function MinhaContaPageModule() {
    }
    MinhaContaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__minha_conta__["a" /* MinhaContaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__minha_conta__["a" /* MinhaContaPage */]),
            ],
        })
    ], MinhaContaPageModule);
    return MinhaContaPageModule;
}());

//# sourceMappingURL=minha-conta.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers_configHelper__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_models_enderecoModel__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_operador_operador__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var PedidosPage = /** @class */ (function () {
    function PedidosPage(navCtrl, navParams, actionSheetCtrl, http, alertSrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.alertSrv = alertSrv;
        // enderecoEntregaId: any;
        this.pedidos = new Array();
        this.enderecoEntrega = new __WEBPACK_IMPORTED_MODULE_5__app_models_enderecoModel__["a" /* EnderecoEntregaModel */];
        this.statusPedido = "Aguardando";
    }
    PedidosPage.prototype.mensagens = function (model) {
        this.navCtrl.push('MensagensPage', { _pedido: model });
        console.log("model", model);
    };
    PedidosPage.prototype.salvarPedido = function (model) {
        // if (model.tempoEntrega !== "0") {
        //   this.alertSrv.toast('Tempo de entrega já definido!', 'bottom');
        //   return;
        // }
        var pedidosResult = this.http.put(__WEBPACK_IMPORTED_MODULE_1__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "pedido/" + model._id, model);
        this.enviarMensagem(model.usuarioId, "O tempo de entrega para seu pedido \u00E9 de " + model.tempoEntrega + " minutos!");
        this.alertSrv.toast('Definido com sucesso!', 'bottom');
        return pedidosResult;
    };
    ;
    PedidosPage.prototype.aceitar = function (model) {
        if (model.status !== "Aguardando") {
            this.alertSrv.toast('Este pedido já foi recusado ou aceito!', 'bottom');
            return;
        }
        model.status = "Pedido Aceito";
        var pedidosResult = this.http.put(__WEBPACK_IMPORTED_MODULE_1__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "pedido/" + model._id, model);
        this.enviarMensagem(model.usuarioId, "Woooooooosh! Seu pedido foi aceito, já estamos preparando ele e assim que sair para a entrega te avisamos aqui ;)");
        this.alertSrv.toast('Pedido aceito com sucesso!', 'bottom');
        return pedidosResult;
    };
    ;
    PedidosPage.prototype.recusar = function (model) {
        if (model.status !== "Aguardando") {
            this.alertSrv.toast('Este pedido já foi recusado ou aceito!', 'bottom');
            return;
        }
        model.status = "Pedido Recusado";
        var pedidosResult = this.http.put(__WEBPACK_IMPORTED_MODULE_1__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "pedido/" + model._id, model);
        this.enviarMensagem(model.usuarioId, "Lamentamos mas seu pedido foi recusado :(");
        this.alertSrv.toast('Pedido recusado com sucesso!', 'bottom');
        return pedidosResult;
    };
    ;
    PedidosPage.prototype.saiuEntrega = function (model) {
        if (model.status === "Pedido Recusado") {
            this.alertSrv.toast('Este pedido foi recusado!', 'bottom');
            return;
        }
        if (model.status === "Saiu para Entrega") {
            this.alertSrv.toast('Já definido como "Saiu para Entrega"!', 'bottom');
            return;
        }
        model.status = "Saiu para Entrega";
        var pedidosResult = this.http.put(__WEBPACK_IMPORTED_MODULE_1__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "pedido/" + model._id, model);
        this.enviarMensagem(model.usuarioId, "Seu pedido saiu para entrega :D");
        this.alertSrv.toast('Definido como "Saiu para entrega" sucesso!', 'bottom');
        return pedidosResult;
    };
    ;
    PedidosPage.prototype.ionViewDidLoad = function () {
        this.GetAllPedidos();
        console.log(this.produtos);
        // this.statusPedido = "Pedido"
    };
    PedidosPage.prototype.adminOptions = function () {
        var _this = this;
        var action = this.actionSheetCtrl.create({
            title: "Administração",
            buttons: [
                {
                    text: "Gerenciar Categorias",
                    handler: function () {
                        _this.gerenciarCategoria();
                    }
                },
                {
                    text: "Gerenciar Produtos",
                    handler: function () {
                        _this.gerenciarProduto();
                    }
                },
                {
                    text: "Gerenciar Clientes",
                    handler: function () {
                        _this.gerenciarCliente();
                    }
                },
                {
                    text: "Gerenciar Operadores",
                    handler: function () {
                        _this.gerenciarOperador();
                    }
                },
                {
                    text: "Sair da conta",
                    handler: function () {
                        _this.sair();
                    }
                },
                { text: "Cancelar", handler: function () { }, role: "destructive" }
            ]
        });
        action.present();
    };
    PedidosPage.prototype.gerenciarCategoria = function () {
        this.navCtrl.push("AdmCategoriasPage");
    };
    PedidosPage.prototype.gerenciarOperador = function () {
        this.navCtrl.push("OperadoresPage");
    };
    PedidosPage.prototype.gerenciarProduto = function () {
        this.navCtrl.push("AdmProdutosPage");
    };
    PedidosPage.prototype.gerenciarCliente = function () {
        this.navCtrl.push("ClientesPage");
    };
    // clienteInfo(model?: UsuarioModel): void {
    //   this.navCtrl.push('AdmClientePage', { _cliente: model });
    //   console.log("model", model);
    // }
    PedidosPage.prototype.sair = function () {
        var _this = this;
        try {
            this.alertSrv.confirm("Sair", "Deseja realmente sair de sua Conta atual?", function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.alertSrv) {
                        localStorage.clear();
                        this.navCtrl.push("LoginPage");
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        catch (error) {
            console.log("Erro ao excluir", error);
        }
    };
    PedidosPage.prototype.GetAllPedidos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pedidosResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_1__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "pedido/getAll")];
                    case 1:
                        pedidosResult = _a.sent();
                        if (pedidosResult.success) {
                            this.pedidos = pedidosResult.data;
                            console.log(this.pedidos);
                            return [2 /*return*/, pedidosResult];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log('Problema ao carregar os pedidos, motivo: ', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PedidosPage.prototype.enviarMensagem = function (idUser, mensagem) {
        var op = __WEBPACK_IMPORTED_MODULE_7__providers_operador_operador__["a" /* OperadorProvider */].GetOperador();
        var newData = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a
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
    };
    PedidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-pedidos',template:/*ion-inline-start:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\pages\pedidos\pedidos.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button icon-only clear color="light" (click)="adminOptions()">\n      <ion-icon style="margin-bottom:10px ;" name="settings"></ion-icon>\n    </button>\n    <ion-title style="width: 85%; display: inline-flex; margin-bottom: -10px;">Pedidos Aceitos</ion-title>\n    <!-- <div class="botoesHeader">\n      <button class="botoesHeader1" ion-button color="secondary">Aguardando</button>\n      <button class="botoesHeader2" ion-button color="secondary">Recusados</button>\n    </div> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <div padding>\n    <ion-segment [(ngModel)]="statusPedido" class="switch">\n      <ion-segment-button value="Aguardando">\n        Aguardando\n      </ion-segment-button>\n      <ion-segment-button value="Pedido Aceito">\n        Aceito\n      </ion-segment-button>\n      <ion-segment-button value="Pedido Recusado">\n        Recusado\n      </ion-segment-button>\n      <ion-segment-button value="Saiu para Entrega">\n        Entrega\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div *ngFor="let pedido of pedidos">\n\n    <div [ngSwitch]="statusPedido">\n      <div *ngSwitchCase="\'Aguardando\'">\n        <ion-card *ngIf="pedido.status === \'Aguardando\'" style="border-radius: 10px;">\n          <ion-card-header icon-left>\n            <ion-icon name="cart"></ion-icon>\n            Pedido realizado em <strong>{{ pedido.dataPedido | date:\'dd/MM/yyyy, HH:mm\' }}</strong>\n          </ion-card-header>\n          <ion-card-content>\n            <table class="tabela">\n              <tr>\n                <th>Qtd.</th>\n                <th>Produto</th>\n                <th>Observações</th>\n              </tr>\n              <tr *ngFor="let produto of pedido.itens">\n                <td>{{produto.quantidade}}</td>\n                <td>{{produto.nomeProd}}</td>\n                <td>{{produto.observacoes}}</td>\n                <!-- <strong>Nome Produto: <strong>{{produto.nomeProd}}</strong></{{produto.quantidade}},> -->\n                <!-- <strong>Quantidade: <strong>{{produto.quantidade}}</strong></p> -->\n                <!-- <p>Produto ID: <strong>{{produto.produtoId}}</strong></p> -->\n                <!-- <strong>Observaçoes: <strong>{{produto.observacoes}}</strong></p> -->\n              </tr>\n            </table>\n            <!-- <p>Usuário ID: <strong>{{pedido.usuarioId}}</strong></p> -->\n            <!-- <strong>Aceito: <strong> {{ pedido.aceito }}</strong></p> -->\n            <p>Status: <strong>{{pedido.status}}</strong></p>\n            <!-- <strong>Quantidade Total itens: <strong>{{ contaItem(produtos) }}</strong></p> -->\n            <p>Valor total: <strong> {{ pedido.valorTotal }}</strong></p>\n            <p>Forma de Pagamento: <strong>{{pedido.formaPagamento}}</strong></p>\n            <p>Tempo entrega: <strong> {{ pedido.tempoEntrega }}</strong></p>\n            <p>Cliente: <strong> {{ pedido.usuarioNome }}</strong></p>\n            <div class="enderecoEntrega">\n              <p><strong>Endereço de Entrega</strong></p>\n              <p>Rua: <strong> {{ pedido.enderecoEntrega.rua }}</strong> Nº: <strong>\n                  {{pedido.enderecoEntrega.numero }}</strong> Bairro:\n                <strong> {{pedido.enderecoEntrega.bairro }}</strong></p>\n              <p>Cidade: <strong> {{pedido.enderecoEntrega.cidade }}</strong> Estado: <strong>\n                  {{pedido.enderecoEntrega.uf }}</strong>\n                Cep: <strong> {{pedido.enderecoEntrega.cep }}</strong></p>\n              <p>Ponto Ref.: <strong> {{pedido.enderecoEntrega.pontoReferencia }}</strong></p>\n              <p>Orientações: <strong> {{pedido.enderecoEntrega.orientacoes }}</strong></p>\n            </div>\n            <div>\n              <ion-row class="botoes">\n                <button ion-button (click)="aceitar(pedido)">Aceitar</button>\n                <button ion-button (click)="recusar(pedido)">Recusar</button>\n                <button ion-button (click)="saiuEntrega(pedido)">Saiu p/ Entrega</button>\n                <div>\n                  <button (click)="salvarPedido(pedido)" ion-button>Definir</button>\n                  <button ion-button style="width: 200px;">\n                    <ion-select [(ngModel)]="pedido.tempoEntrega" interface="popover">\n                      <ion-label>Tempo</ion-label>\n                      <ion-option value="15">15 min</ion-option>\n                      <ion-option value="30">30 min</ion-option>\n                      <ion-option value="45">45 min</ion-option>\n                      <ion-option value="60">60 min</ion-option>\n                    </ion-select>\n                  </button>\n                </div>\n                <button ion-button (click)="mensagens(pedido)">Chat</button>\n                <button ion-button>Imprimir</button>\n              </ion-row>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n\n\n      <div *ngSwitchCase="\'Pedido Aceito\'">\n        <ion-card *ngIf="pedido.status === \'Pedido Aceito\'" style="border-radius: 10px;">\n          <ion-card-header icon-left>\n            <ion-icon name="cart"></ion-icon>\n            Pedido realizado em <strong>{{ pedido.dataPedido | date:\'dd/MM/yyyy, HH:mm\' }}</strong>\n          </ion-card-header>\n          <ion-card-content>\n            <table class="tabela">\n              <tr>\n                <th>Qtd.</th>\n                <th>Produto</th>\n                <th>Observações</th>\n              </tr>\n              <tr *ngFor="let produto of pedido.itens">\n                <td>{{produto.quantidade}}</td>\n                <td>{{produto.nomeProd}}</td>\n                <td>{{produto.observacoes}}</td>\n                <!-- <strong>Nome Produto: <strong>{{produto.nomeProd}}</strong></{{produto.quantidade}},> -->\n                <!-- <strong>Quantidade: <strong>{{produto.quantidade}}</strong></p> -->\n                <!-- <p>Produto ID: <strong>{{produto.produtoId}}</strong></p> -->\n                <!-- <strong>Observaçoes: <strong>{{produto.observacoes}}</strong></p> -->\n              </tr>\n            </table>\n            <!-- <p>Usuário ID: <strong>{{pedido.usuarioId}}</strong></p> -->\n            <!-- <strong>Aceito: <strong> {{ pedido.aceito }}</strong></p> -->\n            <p>Status: <strong>{{pedido.status}}</strong></p>\n            <!-- <strong>Quantidade Total itens: <strong>{{ contaItem(produtos) }}</strong></p> -->\n            <p>Valor total: <strong> {{ pedido.valorTotal }}</strong></p>\n            <p>Forma de Pagamento: <strong>{{pedido.formaPagamento}}</strong></p>\n            <p>Tempo entrega: <strong> {{ pedido.tempoEntrega }}</strong></p>\n            <p>Cliente: <strong> {{ pedido.usuarioNome }}</strong></p>\n            <div class="enderecoEntrega">\n              <p><strong>Endereço de Entrega</strong></p>\n              <p>Rua: <strong> {{ pedido.enderecoEntrega.rua }}</strong> Nº: <strong>\n                  {{pedido.enderecoEntrega.numero }}</strong> Bairro:\n                <strong> {{pedido.enderecoEntrega.bairro }}</strong></p>\n              <p>Cidade: <strong> {{pedido.enderecoEntrega.cidade }}</strong> Estado: <strong>\n                  {{pedido.enderecoEntrega.uf }}</strong>\n                Cep: <strong> {{pedido.enderecoEntrega.cep }}</strong></p>\n              <p>Ponto Ref.: <strong> {{pedido.enderecoEntrega.pontoReferencia }}</strong></p>\n              <p>Orientações: <strong> {{pedido.enderecoEntrega.orientacoes }}</strong></p>\n            </div>\n            <div>\n              <ion-row class="botoes">\n                <button ion-button (click)="aceitar(pedido)">Aceitar</button>\n                <button ion-button (click)="recusar(pedido)">Recusar</button>\n                <button ion-button (click)="saiuEntrega(pedido)">Saiu p/ Entrega</button>\n                <div>\n                  <button (click)="salvarPedido(pedido)" ion-button>Definir</button>\n                  <button ion-button style="width: 200px;">\n                    <ion-select [(ngModel)]="pedido.tempoEntrega" interface="popover">\n                      <ion-label>Tempo</ion-label>\n                      <ion-option value="15">15 min</ion-option>\n                      <ion-option value="30">30 min</ion-option>\n                      <ion-option value="45">45 min</ion-option>\n                      <ion-option value="60">60 min</ion-option>\n                    </ion-select>\n                  </button>\n                </div>\n                <button ion-button (click)="mensagens(pedido)">Chat</button>\n                <button ion-button>Imprimir</button>\n              </ion-row>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n\n\n      <div *ngSwitchCase="\'Pedido Recusado\'">\n        <ion-card *ngIf="pedido.status === \'Pedido Recusado\'" style="border-radius: 10px;">\n          <ion-card-header icon-left>\n            <ion-icon name="cart"></ion-icon>\n            Pedido realizado em <strong>{{ pedido.dataPedido | date:\'dd/MM/yyyy, HH:mm\' }}</strong>\n          </ion-card-header>\n          <ion-card-content>\n            <table class="tabela">\n              <tr>\n                <th>Qtd.</th>\n                <th>Produto</th>\n                <th>Observações</th>\n              </tr>\n              <tr *ngFor="let produto of pedido.itens">\n                <td>{{produto.quantidade}}</td>\n                <td>{{produto.nomeProd}}</td>\n                <td>{{produto.observacoes}}</td>\n                <!-- <strong>Nome Produto: <strong>{{produto.nomeProd}}</strong></{{produto.quantidade}},> -->\n                <!-- <strong>Quantidade: <strong>{{produto.quantidade}}</strong></p> -->\n                <!-- <p>Produto ID: <strong>{{produto.produtoId}}</strong></p> -->\n                <!-- <strong>Observaçoes: <strong>{{produto.observacoes}}</strong></p> -->\n              </tr>\n            </table>\n            <!-- <p>Usuário ID: <strong>{{pedido.usuarioId}}</strong></p> -->\n            <!-- <strong>Aceito: <strong> {{ pedido.aceito }}</strong></p> -->\n            <p>Status: <strong>{{pedido.status}}</strong></p>\n            <!-- <strong>Quantidade Total itens: <strong>{{ contaItem(produtos) }}</strong></p> -->\n            <p>Valor total: <strong> {{ pedido.valorTotal }}</strong></p>\n            <p>Forma de Pagamento: <strong>{{pedido.formaPagamento}}</strong></p>\n            <p>Tempo entrega: <strong> {{ pedido.tempoEntrega }}</strong></p>\n            <p>Cliente: <strong> {{ pedido.usuarioNome }}</strong></p>\n            <div class="enderecoEntrega">\n              <p><strong>Endereço de Entrega</strong></p>\n              <p>Rua: <strong> {{ pedido.enderecoEntrega.rua }}</strong> Nº: <strong>\n                  {{pedido.enderecoEntrega.numero }}</strong> Bairro:\n                <strong> {{pedido.enderecoEntrega.bairro }}</strong></p>\n              <p>Cidade: <strong> {{pedido.enderecoEntrega.cidade }}</strong> Estado: <strong>\n                  {{pedido.enderecoEntrega.uf }}</strong>\n                Cep: <strong> {{pedido.enderecoEntrega.cep }}</strong></p>\n              <p>Ponto Ref.: <strong> {{pedido.enderecoEntrega.pontoReferencia }}</strong></p>\n              <p>Orientações: <strong> {{pedido.enderecoEntrega.orientacoes }}</strong></p>\n            </div>\n            <div>\n              <ion-row class="botoes">\n                <button ion-button (click)="aceitar(pedido)">Aceitar</button>\n                <button ion-button (click)="recusar(pedido)">Recusar</button>\n                <button ion-button (click)="saiuEntrega(pedido)">Saiu p/ Entrega</button>\n                <div>\n                  <button (click)="salvarPedido(pedido)" ion-button>Definir</button>\n                  <button ion-button style="width: 200px;">\n                    <ion-select [(ngModel)]="pedido.tempoEntrega" interface="popover">\n                      <ion-label>Tempo</ion-label>\n                      <ion-option value="15">15 min</ion-option>\n                      <ion-option value="30">30 min</ion-option>\n                      <ion-option value="45">45 min</ion-option>\n                      <ion-option value="60">60 min</ion-option>\n                    </ion-select>\n                  </button>\n                </div>\n                <button ion-button (click)="mensagens(pedido)">Chat</button>\n                <button ion-button>Imprimir</button>\n              </ion-row>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n\n\n\n\n      <div *ngSwitchCase="\'Saiu para Entrega\'">\n        <ion-card *ngIf="pedido.status === \'Saiu para Entrega\'" style="border-radius: 10px;">\n          <ion-card-header icon-left>\n            <ion-icon name="cart"></ion-icon>\n            Pedido realizado em <strong>{{ pedido.dataPedido | date:\'dd/MM/yyyy, HH:mm\' }}</strong>\n          </ion-card-header>\n          <ion-card-content>\n            <table class="tabela">\n              <tr>\n                <th>Qtd.</th>\n                <th>Produto</th>\n                <th>Observações</th>\n              </tr>\n              <tr *ngFor="let produto of pedido.itens">\n                <td>{{produto.quantidade}}</td>\n                <td>{{produto.nomeProd}}</td>\n                <td>{{produto.observacoes}}</td>\n                <!-- <strong>Nome Produto: <strong>{{produto.nomeProd}}</strong></{{produto.quantidade}},> -->\n                <!-- <strong>Quantidade: <strong>{{produto.quantidade}}</strong></p> -->\n                <!-- <p>Produto ID: <strong>{{produto.produtoId}}</strong></p> -->\n                <!-- <strong>Observaçoes: <strong>{{produto.observacoes}}</strong></p> -->\n              </tr>\n            </table>\n            <!-- <p>Usuário ID: <strong>{{pedido.usuarioId}}</strong></p> -->\n            <!-- <strong>Aceito: <strong> {{ pedido.aceito }}</strong></p> -->\n            <p>Status: <strong>{{pedido.status}}</strong></p>\n            <!-- <strong>Quantidade Total itens: <strong>{{ contaItem(produtos) }}</strong></p> -->\n            <p>Valor total: <strong> {{ pedido.valorTotal }}</strong></p>\n            <p>Forma de Pagamento: <strong>{{pedido.formaPagamento}}</strong></p>\n            <p>Tempo entrega: <strong> {{ pedido.tempoEntrega }}</strong></p>\n            <p>Cliente: <strong> {{ pedido.usuarioNome }}</strong></p>\n            <div class="enderecoEntrega">\n              <p><strong>Endereço de Entrega</strong></p>\n              <p>Rua: <strong> {{ pedido.enderecoEntrega.rua }}</strong> Nº: <strong>\n                  {{pedido.enderecoEntrega.numero }}</strong> Bairro:\n                <strong> {{pedido.enderecoEntrega.bairro }}</strong></p>\n              <p>Cidade: <strong> {{pedido.enderecoEntrega.cidade }}</strong> Estado: <strong>\n                  {{pedido.enderecoEntrega.uf }}</strong>\n                Cep: <strong> {{pedido.enderecoEntrega.cep }}</strong></p>\n              <p>Ponto Ref.: <strong> {{pedido.enderecoEntrega.pontoReferencia }}</strong></p>\n              <p>Orientações: <strong> {{pedido.enderecoEntrega.orientacoes }}</strong></p>\n            </div>\n            <div>\n              <ion-row class="botoes">\n                <button ion-button (click)="aceitar(pedido)">Aceitar</button>\n                <button ion-button (click)="recusar(pedido)">Recusar</button>\n                <button ion-button (click)="saiuEntrega(pedido)">Saiu p/ Entrega</button>\n                <div>\n                  <button (click)="salvarPedido(pedido)" ion-button>Definir</button>\n                  <button ion-button style="width: 200px;">\n                    <ion-select [(ngModel)]="pedido.tempoEntrega" interface="popover">\n                      <ion-label>Tempo</ion-label>\n                      <ion-option value="15">15 min</ion-option>\n                      <ion-option value="30">30 min</ion-option>\n                      <ion-option value="45">45 min</ion-option>\n                      <ion-option value="60">60 min</ion-option>\n                    </ion-select>\n                  </button>\n                </div>\n                <button ion-button (click)="mensagens(pedido)">Chat</button>\n                <button ion-button>Imprimir</button>\n              </ion-row>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n\n\n\n\n\n\n\n      <!-- <div>\n        <ion-item no-lines style="background-color: transparent !important;"></ion-item>\n        <ion-item no-lines style="background-color: transparent !important;"></ion-item>\n      </div> -->\n      <!-- </ion-content> -->'/*ion-inline-end:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\pages\pedidos\pedidos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */]])
    ], PedidosPage);
    return PedidosPage;
}());

//# sourceMappingURL=pedidos.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnderecoEntregaModel; });
var EnderecoEntregaModel = /** @class */ (function () {
    function EnderecoEntregaModel() {
    }
    return EnderecoEntregaModel;
}());

//# sourceMappingURL=enderecoModel.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioModel; });
var UsuarioModel = /** @class */ (function () {
    function UsuarioModel() {
        this.telefone = 0;
        this.enderecosEntrega = new Array();
    }
    return UsuarioModel;
}());

//# sourceMappingURL=usuarioModel.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoModel; });
var ProdutoModel = /** @class */ (function () {
    function ProdutoModel() {
    }
    return ProdutoModel;
}());

//# sourceMappingURL=produtoModel.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensagensPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pedidos_pedidos__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_operador_operador__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MensagensPage = /** @class */ (function () {
    function MensagensPage(navCtrl, navParams) {
        // this.key = this.navParams.get("key") as string;
        // this.nickname = this.navParams.get("nickname") as string;
        // this.data.type = "mensagem";
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataSala = { nome: "" };
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("salas/" + this.nicknameModel);
        this.dataNick = { nickname: "" };
        this.data = { type: "", nickname: "", mensagem: "" };
        this.chats = [];
        this.nickname = "";
        this.offStatus = false;
        this.salas = [];
        this.messageType = "operadorMessage";
        //this.data.nickname = toString();
        //5d5bf8a4ccb14a24c081b981
        // console.log("teste op", OperadorProvider.GetOperador());
        var _ped = this.navParams.get('_pedido');
        this.pedido = _ped;
        this.pedido.usuarioId = _ped.usuarioId;
        this.nicknameModel = this.pedido.usuarioId;
        // console.log("teste item", this.pedido.usuarioId);
        this.ref.on("value", function (resp) {
            _this.salas = [];
            _this.salas = snapshotToArray(resp);
            console.log(_this.salas);
        });
        // console.log("id do cara", this.nicknameModel);
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]()
            .ref("chats/mensagens/" + this.nicknameModel)
            .on("value", function (resp) {
            _this.chats = [];
            _this.chats = snapshotToArray(resp);
            setTimeout(function () {
                if (_this.offStatus === false) {
                    _this.content.scrollToBottom(300);
                }
            }, 1000);
        });
        console.log("mensagens", this.chats);
    }
    MensagensPage.prototype.enviarMensagem = function () {
        var op = __WEBPACK_IMPORTED_MODULE_4__providers_operador_operador__["a" /* OperadorProvider */].GetOperador();
        console.log("testeeee", op.nome);
        if (this.data.mensagem === "") {
            console.log("mensagen vazia");
            return;
        }
        var newData = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]()
            .ref("chats/mensagens/" + this.nicknameModel)
            .push();
        newData.set({
            type: this.messageType,
            user: op.nome,
            userID: this.nicknameModel,
            mensagem: this.data.mensagem,
            sendDate: Date()
        });
        this.data.mensagem = "";
        console.log("msg", this.data);
    };
    MensagensPage.prototype.sair = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pedidos_pedidos__["a" /* PedidosPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], MensagensPage.prototype, "content", void 0);
    MensagensPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-mensagens",template:/*ion-inline-start:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\pages\mensagens\mensagens.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Mensagens</ion-title>\n        <ion-buttons end>\n            <!-- <button ion-button icon-only (click)="sair()">\n                <ion-icon name="exit"></ion-icon>\n            </button> -->\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor="let chat of chats" no-lines>\n            <div class="chat-status" text-center *ngIf="chat.mensagentype===\'join\'||chat.type===\'sair\';else message">\n                <span class="chat-date">{{chat.sendDate | date:\'short\'}}</span>\n                <span class="chat-content-center">{{chat.mensagem}}</span>\n            </div>\n            <ng-template #message>\n                <div class="alinhaMsg">\n                    <ion-card class="myMessage" text-right *ngIf="chat.type === \'userMessage\'">\n                        <ion-card-header>\n                            <span class="msg-name">\n                                <strong>Cliente</strong>\n                                em\n                            </span>\n                            <span class="msg-date">{{chat.sendDate | date:\'dd/MM/yyyy, HH:mm\'}}</span>\n                        </ion-card-header>\n                        <ion-card-content>\n                            <div class="chat-message" text-right>\n                                <div class="right-bubble">\n                                    <p class="msg-text" text-wrap>\n                                        {{chat.mensagem}}\n                                    </p>\n                                </div>\n                            </div>\n                        </ion-card-content>\n                    </ion-card>\n                </div>\n                <div class="alinhaMsgOp">\n                    <ion-card class="opMessage" text-left *ngIf="chat.type === \'operadorMessage\'">\n                        <ion-card-header>\n                            <span class="msg-name">\n                                <strong>Operador</strong>\n                                em\n                            </span>\n                            <span class="msg-date">{{chat.sendDate | date:\'dd/MM/yyyy, HH:mm\'}}</span>\n                        </ion-card-header>\n                        <ion-card-content>\n                            <div class="chat-message" text-left>\n                                <div class="right-bubble">\n                                    <p class="msg-text" text-wrap>\n                                        {{chat.mensagem}}\n                                    </p>\n                                </div>\n                            </div>\n                        </ion-card-content>\n                    </ion-card>\n                </div>\n\n\n\n\n\n                <!-- <div class="alinhaMsg"></div> -->\n                <!-- <ion-card text-left *ngIf="messageType === \'operadorMessage\'">\n                    <ion-card-header>\n                        <span class="msg-name">\n                            <strong>Atendente</strong>\n                            em\n                        </span>\n                        <span class="msg-date">\n                            {{chat.sendDate | date:\'dd/MM/yyyy hh:mm\' }}\n                        </span>\n                    </ion-card-header>\n                    <ion-card-content>\n                        <div class="chat-message" text-left>\n                            <div class="left-bubble">\n                                <p>{{chat.mensagem}}</p>\n                            </div>\n                        </div>\n                    </ion-card-content>\n                </ion-card> -->\n            </ng-template>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<ion-footer>\n    <ion-grid>\n        <ion-row>\n            <ion-col col-10>\n                <ion-input type="text" placeholder="Escreva uma mensagem" [(ngModel)]="data.mensagem" name="mensagem"\n                    class="fontsize">\n                </ion-input>\n            </ion-col>\n            <ion-col col-2 (click)="enviarMensagem()" class="iconeMsg">\n                <div>\n                    <ion-icon color="primary" name="paper-plane"></ion-icon>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\pages\mensagens\mensagens.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MensagensPage);
    return MensagensPage;
}());

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=mensagens.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantidade_quantidade__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_tab__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__quantidade_quantidade__["a" /* QuantidadeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__tab_tab__["a" /* TabComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__quantidade_quantidade__["a" /* QuantidadeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__tab_tab__["a" /* TabComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantidadeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_models_produtoModel__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carrinho_carrinho__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_enums_AcaoCarrinhoEnum__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_helpers_configHelper__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuantidadeComponent = /** @class */ (function () {
    function QuantidadeComponent(carrinhoSrv, evt) {
        this.carrinhoSrv = carrinhoSrv;
        this.evt = evt;
        this.numero = 0;
        this.quantidadeAlterada = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */]();
    }
    QuantidadeComponent.prototype._registerEvent = function () {
        var _this = this;
        this.evt.subscribe(__WEBPACK_IMPORTED_MODULE_5__app_helpers_configHelper__["a" /* ConfigHelper */].Events.atualizaoQuantidadeProduto, function () {
            _this._atualizarQuantidade();
        });
    };
    QuantidadeComponent.prototype._atualizarQuantidade = function () {
        var quantidadeNoCarrinho = this.carrinhoSrv.getQuantidadeItem(this.produto);
        this.numero = quantidadeNoCarrinho;
    };
    QuantidadeComponent.prototype.ngOnInit = function () {
        this._atualizarQuantidade();
        this._registerEvent();
    };
    QuantidadeComponent.prototype.adicionar = function () {
        this.numero += 1;
        this.quantidadeAlterada.emit({
            quantidade: this.numero,
            acao: __WEBPACK_IMPORTED_MODULE_4__app_enums_AcaoCarrinhoEnum__["a" /* AcaoCarrinhoEnum */].Adicionar
        });
    };
    QuantidadeComponent.prototype.remover = function () {
        var _valorFinal = this.numero -= 1;
        if (_valorFinal <= 0)
            this.numero = 0;
        this.quantidadeAlterada.emit({
            quantidade: this.numero,
            acao: __WEBPACK_IMPORTED_MODULE_4__app_enums_AcaoCarrinhoEnum__["a" /* AcaoCarrinhoEnum */].Remover
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["D" /* Input */])('produto'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_models_produtoModel__["a" /* ProdutoModel */])
    ], QuantidadeComponent.prototype, "produto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], QuantidadeComponent.prototype, "quantidadeAlterada", void 0);
    QuantidadeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'quantidade',template:/*ion-inline-start:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\components\quantidade\quantidade.html"*/'<div>\n  <button round ion-button icon-only color="light" (click)="remover()">\n    -\n  </button>\n  <span class="numero">{{numero}}</span>\n  <button round ion-button icon-only color="dark" (click)="adicionar()">\n    +\n  </button>\n</div>'/*ion-inline-end:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\components\quantidade\quantidade.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_carrinho_carrinho__["a" /* CarrinhoProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* Events */]])
    ], QuantidadeComponent);
    return QuantidadeComponent;
}());

//# sourceMappingURL=quantidade.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcaoCarrinhoEnum; });
var AcaoCarrinhoEnum;
(function (AcaoCarrinhoEnum) {
    AcaoCarrinhoEnum[AcaoCarrinhoEnum["Adicionar"] = 1] = "Adicionar";
    AcaoCarrinhoEnum[AcaoCarrinhoEnum["Remover"] = 2] = "Remover";
})(AcaoCarrinhoEnum || (AcaoCarrinhoEnum = {}));
//# sourceMappingURL=AcaoCarrinhoEnum.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabComponent = /** @class */ (function () {
    function TabComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TabComponent.prototype.ngOnInit = function () {
        this.tabs = [
            {
                icon: "pricetags",
                path: "CategoriaPage",
                label: "Categorias",
                isSelect: this.pagina == "Categorias"
            },
            {
                icon: "menu",
                path: "PedidosPage",
                label: "Pedidos",
                isSelect: this.pagina == "Pedidos"
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
    };
    TabComponent.prototype.selecionarTab = function (path) {
        this.navCtrl.setRoot(path);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])("pagina"),
        __metadata("design:type", String)
    ], TabComponent.prototype, "pagina", void 0);
    TabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "tab",template:/*ion-inline-start:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\components\tab\tab.html"*/'<ion-footer class="tabs">\n  <div class="tab" *ngFor="let item of tabs" [ngClass]="{\'active\': item.isSelect}" (click)="selecionarTab(item.path)">\n    <ion-icon name="{{item.icon}}"></ion-icon>\n    <p>{{item.label}}</p>\n  </div>\n</ion-footer>'/*ion-inline-end:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\components\tab\tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */]])
    ], TabComponent);
    return TabComponent;
}());

//# sourceMappingURL=tab.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaContaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_models_usuarioModel__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_alert_alert__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camera_camera__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mensagens_mensagens__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var MinhaContaPage = /** @class */ (function () {
    function MinhaContaPage(navCtrl, navParams, usuarioSrv, cameraSrv, actionSheetCtrl, alertSrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioSrv = usuarioSrv;
        this.cameraSrv = cameraSrv;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertSrv = alertSrv;
        this.usuarioLogado = new __WEBPACK_IMPORTED_MODULE_0__app_models_usuarioModel__["a" /* UsuarioModel */]();
    }
    MinhaContaPage.prototype.ionViewDidLoad = function () {
        this.LoadData();
    };
    MinhaContaPage.prototype.mensagens = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mensagens_mensagens__["a" /* MensagensPage */]);
    };
    MinhaContaPage.prototype.sair = function () {
        var _this = this;
        try {
            this.alertSrv.confirm("Sair", "Deseja realmente sair de sua Conta atual?", function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.alertSrv) {
                        localStorage.clear();
                        this.navCtrl.setRoot("LoginPage");
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        catch (error) {
            console.log("Erro ao excluir", error);
        }
    };
    MinhaContaPage.prototype.mudarFoto = function () {
        var _this = this;
        var action = this.actionSheetCtrl.create({
            title: "Foto",
            buttons: [
                {
                    text: "Remover Foto",
                    handler: function () {
                        _this.usuarioLogado.foto = __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].photo;
                    }
                },
                {
                    text: "Selecionar da Galeria",
                    handler: function () {
                        _this.cameraSrv.getPictureFromGalery(function (photo) {
                            _this.usuarioLogado.foto = photo;
                        });
                    }
                },
                { text: "Cancelar", handler: function () { }, role: "destructive" }
            ]
        });
        action.present();
    };
    MinhaContaPage.prototype.salvar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var salvarResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.usuarioSrv.put(this.usuarioLogado._id, this.usuarioLogado)];
                    case 1:
                        salvarResult = _a.sent();
                        if (salvarResult.success) {
                            this.alertSrv.toast("Dados atualizados com sucesso!", "bottom");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log("Erro ao atualizar os dados, motivo: " + error_1);
                        return [3 /*break*/, 3];
                    case 3:
                        console.log("telefone", this.usuarioLogado.telefone);
                        return [2 /*return*/];
                }
            });
        });
    };
    MinhaContaPage.prototype.LoadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, userResult, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        user = (JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.user)));
                        return [4 /*yield*/, this.usuarioSrv.getByUid(user._id)];
                    case 1:
                        userResult = _a.sent();
                        if (userResult.success) {
                            this.usuarioLogado = userResult.data;
                            if (!this.usuarioLogado.foto)
                                this.usuarioLogado.foto = __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].photo;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log("Problema ao carregar os dados do usuário");
                        return [3 /*break*/, 3];
                    case 3:
                        console.log("telefone", this.usuarioLogado.telefone);
                        return [2 /*return*/];
                }
            });
        });
    };
    //fazer tela de cadastro de endereço de entrega
    MinhaContaPage.prototype.adicionarEndereco = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push("ListEnderecosEntregaPage");
                return [2 /*return*/];
            });
        });
    };
    MinhaContaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: "page-minha-conta",template:/*ion-inline-start:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\pages\minha-conta\minha-conta.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title class="titulo">Minha Conta</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="sair()">\n        <p class="sair">Sair</p>\n        <ion-icon name="exit"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="imagem" [ngStyle]="{\'background-image\': \'url(\' + usuarioLogado.foto + \')\'}" (click)="mudarFoto()">\n  </div>\n  <div class="formulario">\n    <div class="btnSuporte">\n      <button ion-button round class="btnMsg" (click)="mensagens()">\n        <ion-icon name="chatboxes"></ion-icon>\n      </button>\n      <p class="suporte">Suporte</p>\n    </div>\n    <p>Nome</p>\n    <input type="text" placeholder="Nome" [(ngModel)]="usuarioLogado.nome">\n    <p>E-mail</p>\n    <input type="text" placeholder="Email" [(ngModel)]="usuarioLogado.email">\n    <p>CPF</p>\n    <input type="number" placeholder="CPF" [(ngModel)]="usuarioLogado.cpf" disabled="true">\n    <!-- <P>Telefone</P>\n        <input type="number" placeholder="Telefone" [(ngModel)]="usuarioLogado.telefone"> -->\n\n    <div class="botaoEndereco">\n      <button ion-button outline color="primary" round block (click)="adicionarEndereco()" style="margin-top: 20px;">\n        Endereços de entrega\n      </button>\n    </div>\n    <div class="botao">\n      <button ion-button outline color="primary" round block (click)="salvar()" style="margin-top: 10px;">\n        Salvar os dados\n      </button>\n    </div>\n  </div>\n  <div>\n    <ion-item no-lines style="background-color: transparent !important;"></ion-item>\n    <ion-item no-lines style="background-color: transparent !important;"></ion-item>\n  </div>\n</ion-content>\n<tab [pagina]="\'Minha Conta\'"></tab>\n'/*ion-inline-end:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\pages\minha-conta\minha-conta.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_alert_alert__["a" /* AlertProvider */]])
    ], MinhaContaPage);
    return MinhaContaPage;
}());

//# sourceMappingURL=minha-conta.js.map

/***/ })

});
//# sourceMappingURL=0.js.map