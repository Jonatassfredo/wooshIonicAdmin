webpackJsonp([5],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function() { return PedidosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedidosPageModule = /** @class */ (function () {
    function PedidosPageModule() {
    }
    PedidosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedidos__["a" /* PedidosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedidos__["a" /* PedidosPage */]),
            ],
        })
    ], PedidosPageModule);
    return PedidosPageModule;
}());

//# sourceMappingURL=pedidos.module.js.map

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

/***/ })

});
//# sourceMappingURL=5.js.map