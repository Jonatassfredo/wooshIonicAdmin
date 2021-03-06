webpackJsonp([2],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmClientePageModule", function() { return AdmClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adm_cliente__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdmClientePageModule = /** @class */ (function () {
    function AdmClientePageModule() {
    }
    AdmClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adm_cliente__["a" /* AdmClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adm_cliente__["a" /* AdmClientePage */]),
            ],
        })
    ], AdmClientePageModule);
    return AdmClientePageModule;
}());

//# sourceMappingURL=adm-cliente.module.js.map

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

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_usuarioModel__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(108);
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





var AdmClientePage = /** @class */ (function () {
    function AdmClientePage(navCtrl, navParams, usuarioSrv, alertSrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioSrv = usuarioSrv;
        this.alertSrv = alertSrv;
        var _cli = this.navParams.get('_cliente');
        console.log("teste item", _cli);
        if (_cli && _cli._id) {
            this.cliente = _cli;
        }
        else
            this.cliente = new __WEBPACK_IMPORTED_MODULE_2__app_models_usuarioModel__["a" /* UsuarioModel */]();
    }
    AdmClientePage.prototype.salvar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sucesso, cadastroResult, updateResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sucesso = false;
                        if (!!this.cliente._id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.usuarioSrv.post(this.cliente)];
                    case 1:
                        cadastroResult = _a.sent();
                        sucesso = cadastroResult.success;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.usuarioSrv.put(this.cliente._id, this.cliente)];
                    case 3:
                        updateResult = _a.sent();
                        console.log("put cliente", this.cliente);
                        sucesso = updateResult.success;
                        _a.label = 4;
                    case 4:
                        if (sucesso) {
                            this.alertSrv.toast('Cliente salvo com sucesso!', 'bottom');
                            // this.navCtrl.setRoot('ClientesPage');
                            this.navCtrl.push('PedidosPage');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AdmClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdmClientePage');
    };
    AdmClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adm-cliente',template:/*ion-inline-start:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\pages\adm-cliente\adm-cliente.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Clientes</ion-title>\n    <ion-buttons right>\n      <button ion-button clear (click)="salvar()">\n        Salvar\n      </button>\n      <button *ngIf="cliente._id" ion-button icon-only>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-list no-lines>\n    <ion-item>\n      <ion-label floating>Nome do Cliente</ion-label>\n      <ion-input disabled [(ngModel)]="cliente.nome" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>CPF</ion-label>\n      <ion-input disabled type="number" [(ngModel)]="cliente.cpf"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input disabled type="email" [(ngModel)]="cliente.email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Ativo</ion-label>\n      <ion-toggle [(ngModel)]="cliente.ativo"></ion-toggle>\n    </ion-item>\n    <ion-item text-center>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\pages\adm-cliente\adm-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */]])
    ], AdmClientePage);
    return AdmClientePage;
}());

//# sourceMappingURL=adm-cliente.js.map

/***/ })

});
//# sourceMappingURL=2.js.map