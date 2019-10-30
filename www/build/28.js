webpackJsonp([28],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEnderecosEntregaPageModule", function() { return ListEnderecosEntregaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_enderecos_entrega__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListEnderecosEntregaPageModule = /** @class */ (function () {
    function ListEnderecosEntregaPageModule() {
    }
    ListEnderecosEntregaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_enderecos_entrega__["a" /* ListEnderecosEntregaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_enderecos_entrega__["a" /* ListEnderecosEntregaPage */]),
            ],
        })
    ], ListEnderecosEntregaPageModule);
    return ListEnderecosEntregaPageModule;
}());

//# sourceMappingURL=list-enderecos-entrega.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListEnderecosEntregaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_endereco_endereco__ = __webpack_require__(221);
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



var ListEnderecosEntregaPage = /** @class */ (function () {
    function ListEnderecosEntregaPage(navCtrl, navParams, enderecoSrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.enderecoSrv = enderecoSrv;
        this.lista = new Array();
        this._loadData();
    }
    ListEnderecosEntregaPage.prototype._loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var enderecoResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.enderecoSrv.get()];
                    case 1:
                        enderecoResult = _a.sent();
                        if (enderecoResult.success) {
                            this.lista = enderecoResult.data;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ListEnderecosEntregaPage.prototype.addOrEdit = function (model) {
        this.navCtrl.push("CadEnderecoEntregaPage", { _endereco: model });
    };
    ListEnderecosEntregaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-list-enderecos-entrega",template:/*ion-inline-start:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\pages\list-enderecos-entrega\list-enderecos-entrega.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Endereços de Entrega</ion-title>\n        <ion-buttons right>\n            <button ion-button icon-only (click)="addOrEdit({})">\n        <ion-icon name="add"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n    <ion-list lines>\n        <ion-item text-wrap *ngIf="lista.length == 0">\n            Você não possui endereço de entrega cadastrado.\n        </ion-item>\n        <ion-item *ngFor="let item of lista" text-wrap (click)="addOrEdit(item)">\n            Rua {{item.rua}}, {{item.numero}}, Bairro {{item.bairro}}\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\pages\list-enderecos-entrega\list-enderecos-entrega.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_endereco_endereco__["a" /* EnderecoEntregaProvider */]])
    ], ListEnderecosEntregaPage);
    return ListEnderecosEntregaPage;
}());

//# sourceMappingURL=list-enderecos-entrega.js.map

/***/ })

});
//# sourceMappingURL=28.js.map