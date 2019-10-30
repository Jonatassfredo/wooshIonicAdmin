webpackJsonp([18],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPedidosModel; });
var ListaPedidosModel = /** @class */ (function () {
    function ListaPedidosModel() {
        this.itensGeral = new Array();
    }
    ListaPedidosModel.getTotalItens = function (itens) {
        try {
            var _itens = JSON.parse(itens);
            return _itens.length;
        }
        catch (error) {
            return 0;
        }
    };
    return ListaPedidosModel;
}());

//# sourceMappingURL=ListaPedidosModel.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function() { return PedidosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos__ = __webpack_require__(353);
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

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_models_ListaPedidosModel__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
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





// import { ProdutoModel } from './../../app/models/produtoModel';
var PedidosPage = /** @class */ (function () {
    function PedidosPage(navCtrl, navParams, actionSheetCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.lista = new Array();
    }
    PedidosPage.prototype.ionViewDidLoad = function () {
        this.GetAllPedidos();
        console.log(this.produtos);
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
                { text: "Cancelar", handler: function () { }, role: "destructive" }
            ]
        });
        action.present();
    };
    PedidosPage.prototype.gerenciarCategoria = function () {
        this.navCtrl.push("AdmCategoriasPage");
    };
    PedidosPage.prototype.gerenciarProduto = function () {
        this.navCtrl.push("AdmProdutosPage");
    };
    PedidosPage.prototype.GetAllPedidos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pedidosResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "pedido/getAll")];
                    case 1:
                        pedidosResult = _a.sent();
                        if (pedidosResult.success) {
                            this.lista = pedidosResult.data;
                            this.produtos = pedidosResult.data;
                            console.log(pedidosResult);
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
    PedidosPage.prototype.contaItem = function (item) {
        // console.log(JSON.parse(item.itens));
        return __WEBPACK_IMPORTED_MODULE_1__app_models_ListaPedidosModel__["a" /* ListaPedidosModel */].getTotalItens(item.itens);
    };
    PedidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'meus-pedidos',template:/*ion-inline-start:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\pages\pedidos\pedidos.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Pedidos</ion-title>\n    <button ion-button icon-only clear color="light" (click)="adminOptions()">\n      <ion-icon name="settings"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-card *ngFor="let item of lista" style="border-radius: 10px;">\n    <ion-card-header icon-left>\n      <!-- <ion-icon name="cart"></ion-icon> -->\n      Pedido realizado em {{ item.dataPedido | date:\'dd/MM/yyyy, HH:mm\' }}\n    </ion-card-header>\n    <ion-card-content>\n      {{item.itens}}\n      <!-- {{item.itensGeral}} -->\n\n      {{item.usuarioId}}\n      <p>Status: {{item.status}}</p>\n      <p>Quantidade Total itens: {{ contaItem(item) }}</p>\n      <p>Valor total: <strong> {{ item.valorTotal }}</strong></p>\n    </ion-card-content>\n  </ion-card>\n  <div>\n    <ion-item no-lines style="background-color: transparent !important;"></ion-item>\n    <ion-item no-lines style="background-color: transparent !important;"></ion-item>\n  </div>\n</ion-content>\n<!-- <tab [pagina]="\'Pedidos\'"></tab> -->'/*ion-inline-end:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\pages\pedidos\pedidos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */]])
    ], PedidosPage);
    return PedidosPage;
}());

//# sourceMappingURL=pedidos.js.map

/***/ })

});
//# sourceMappingURL=18.js.map