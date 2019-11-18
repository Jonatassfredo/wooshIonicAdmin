webpackJsonp([4],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmOperadorPageModule", function() { return AdmOperadorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adm_operador__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdmOperadorPageModule = /** @class */ (function () {
    function AdmOperadorPageModule() {
    }
    AdmOperadorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adm_operador__["a" /* AdmOperadorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adm_operador__["a" /* AdmOperadorPage */]),
            ],
        })
    ], AdmOperadorPageModule);
    return AdmOperadorPageModule;
}());

//# sourceMappingURL=adm-operador.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmOperadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_operadorModel__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(108);
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





var AdmOperadorPage = /** @class */ (function () {
    function AdmOperadorPage(navCtrl, navParams, usuarioSrv, alertSrv, operadorSrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioSrv = usuarioSrv;
        this.alertSrv = alertSrv;
        this.operadorSrv = operadorSrv;
        var _cli = this.navParams.get('_operador');
        console.log("teste item", _cli);
        if (_cli && _cli._id) {
            this.operador = _cli;
        }
        else
            this.operador = new __WEBPACK_IMPORTED_MODULE_2__app_models_operadorModel__["a" /* OperadorModel */]();
    }
    AdmOperadorPage.prototype.excluir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.alertSrv.confirm('Excluir?', "Deseja realmente excluir o operador " + this.operador.nome + "?", function () { return __awaiter(_this, void 0, void 0, function () {
                        var excluirResult;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.operadorSrv.delete(this.operador._id)];
                                case 1:
                                    excluirResult = _a.sent();
                                    if (excluirResult.success) {
                                        this.alertSrv.toast('Produto excluído com sucesso!', 'bottom');
                                        this.navCtrl.push('OperadoresPage');
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                catch (error) {
                    console.log('Erro ao excluir', error);
                }
                return [2 /*return*/];
            });
        });
    };
    AdmOperadorPage.prototype.salvar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sucesso, cadastroResult, updateResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sucesso = false;
                        if (!!this.operador._id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.usuarioSrv.post(this.operador)];
                    case 1:
                        cadastroResult = _a.sent();
                        sucesso = cadastroResult.success;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.usuarioSrv.put(this.operador._id, this.operador)];
                    case 3:
                        updateResult = _a.sent();
                        console.log("put operador", this.operador);
                        sucesso = updateResult.success;
                        _a.label = 4;
                    case 4:
                        if (sucesso) {
                            this.alertSrv.toast('Produto salvo com sucesso!', 'bottom');
                            this.navCtrl.push('OperadoresPage');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AdmOperadorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdmOperadorPage');
    };
    AdmOperadorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adm-operador',template:/*ion-inline-start:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\pages\adm-operador\adm-operador.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Operadores</ion-title>\n    <ion-buttons right>\n      <button ion-button clear (click)="salvar()">\n        Salvar\n      </button>\n      <button *ngIf="operador._id" ion-button icon-only (click)="excluir()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-list no-lines>\n    <ion-item>\n      <ion-label floating>Nome do Operador </ion-label>\n      <ion-input [(ngModel)]="operador.nome" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Senha</ion-label>\n      <ion-input [(ngModel)]="operador.senha" type="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Senha Confirmação</ion-label>\n      <ion-input [(ngModel)]="operador.senhaConfirmacao" type="password"></ion-input>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label>Ativo</ion-label>\n      <ion-toggle [(ngModel)]="operador.ativo"></ion-toggle>\n    </ion-item> -->\n    <ion-item text-center>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\pages\adm-operador\adm-operador.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_operador_operador__["a" /* OperadorProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_operador_operador__["a" /* OperadorProvider */]])
    ], AdmOperadorPage);
    return AdmOperadorPage;
}());

//# sourceMappingURL=adm-operador.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperadorModel; });
var OperadorModel = /** @class */ (function () {
    function OperadorModel() {
    }
    return OperadorModel;
}());

//# sourceMappingURL=operadorModel.js.map

/***/ })

});
//# sourceMappingURL=4.js.map