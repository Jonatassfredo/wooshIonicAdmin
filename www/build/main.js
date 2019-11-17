webpackJsonp([12],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertProvider = /** @class */ (function () {
    function AlertProvider(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    AlertProvider.prototype.toast = function (title, position) {
        var toast = this.toastCtrl.create({ message: title, position: position, duration: 3000 });
        toast.present();
    };
    AlertProvider.prototype.alert = function (title, message) {
        this.alertCtrl.create({
            title: title,
            message: message,
            buttons: ['Ok'],
            enableBackdropDismiss: false
        }).present();
    };
    AlertProvider.prototype.confirm = function (title, message, callback) {
        this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                { text: "Não", role: 'Cancel', handler: function () { console.log('Confirm:Say:No'); } },
                {
                    text: "Sim",
                    handler: function () {
                        callback();
                    }
                }
            ]
        })
            .present();
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adm-categoria/adm-categoria.module": [
		306,
		6
	],
	"../pages/adm-categorias/adm-categorias.module": [
		307,
		11
	],
	"../pages/adm-cliente/adm-cliente.module": [
		308,
		2
	],
	"../pages/adm-operador/adm-operador.module": [
		309,
		4
	],
	"../pages/adm-produto/adm-produto.module": [
		310,
		3
	],
	"../pages/adm-produtos/adm-produtos.module": [
		311,
		10
	],
	"../pages/clientes/clientes.module": [
		312,
		9
	],
	"../pages/login/login.module": [
		313,
		8
	],
	"../pages/mensagens/mensagens.module": [
		314,
		1
	],
	"../pages/minha-conta/minha-conta.module": [
		315,
		0
	],
	"../pages/operadores/operadores.module": [
		316,
		7
	],
	"../pages/pedidos/pedidos.module": [
		317,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerProvider = /** @class */ (function () {
    function SpinnerProvider(loading) {
        this.loading = loading;
        this.spinner = null;
    }
    SpinnerProvider.prototype.Show = function (message) {
        if (this.spinner == null) {
            this.spinner = this.loading.create({ content: (message || 'Carregando...') });
            this.spinner.present();
        }
        else {
            this.spinner.data.content = message;
        }
    };
    SpinnerProvider.prototype.Hide = function () {
        if (this.spinner != null) {
            this.spinner.dismiss();
            this.spinner = null;
        }
    };
    SpinnerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], SpinnerProvider);
    return SpinnerProvider;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
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


var NetworkProvider = /** @class */ (function () {
    function NetworkProvider(platform) {
        this.platform = platform;
    }
    Object.defineProperty(NetworkProvider.prototype, "IsOnline", {
        get: function () {
            if (this.platform.is('cordova')) {
                if (navigator.connection && navigator.connection.type) {
                    return (navigator.connection.type != Connection.UNKKONW && navigator.connection.type != Connection.NONE);
                }
                else
                    return true;
            }
            else {
                return navigator.onLine;
            }
        },
        enumerable: true,
        configurable: true
    });
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Platform */]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_http__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriaProvider = /** @class */ (function (_super) {
    __extends(CategoriaProvider, _super);
    function CategoriaProvider(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "categoria", http) || this;
        _this.http = http;
        _this.url = __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "categoria";
        return _this;
    }
    CategoriaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_http__["a" /* HttpProvider */]])
    ], CategoriaProvider);
    return CategoriaProvider;
}(__WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__["a" /* ProviderBase */]));

//# sourceMappingURL=categoria.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CameraProvider = /** @class */ (function () {
    function CameraProvider(camera, platform) {
        this.camera = camera;
        this.platform = platform;
    }
    CameraProvider.prototype._getPicture = function (source, callback) {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.platform.ready().then(function () {
                try {
                    var options = {
                        quality: 70,
                        destinationType: _this.camera.DestinationType.DATA_URL,
                        sourceType: source,
                        allowEdit: false,
                        encodingType: _this.camera.EncodingType.JPEG,
                        saveToPhotoAlbum: false,
                        correctOrientation: true
                    };
                    _this.camera.getPicture(options).then(function (imgData) {
                        var base64Image = "data:image/jpeg;base64," + imgData;
                        callback(base64Image);
                    }, function (err) {
                        console.log('Problema ao capturar a foto', err);
                    });
                }
                catch (error) {
                    console.log('problema o tirar a foto', error);
                }
            });
        }
        else {
            alert('Funcionalidade disponível somente no device');
        }
    };
    CameraProvider.prototype.getPictureFromGalery = function (callback) {
        this._getPicture(this.camera.PictureSourceType.PHOTOLIBRARY, function (photo) {
            callback(photo);
        });
    };
    CameraProvider.prototype.takePicture = function (callback) {
        this._getPicture(this.camera.PictureSourceType.CAMERA, function (photo) {
            callback(photo);
        });
    };
    CameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */]])
    ], CameraProvider);
    return CameraProvider;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__ = __webpack_require__(31);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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




var UsuarioProvider = /** @class */ (function (_super) {
    __extends(UsuarioProvider, _super);
    function UsuarioProvider(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "usuario", http) || this;
        _this.http = http;
        _this.url = __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "usuario";
        return _this;
    }
    UsuarioProvider_1 = UsuarioProvider;
    UsuarioProvider.prototype.autenticate = function (email, senha) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.post(this.url + "/autenticar", {
                        email: email,
                        senha: senha
                    })];
            });
        });
    };
    UsuarioProvider.prototype.register = function (usuario) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.post(this.url + "/register", usuario)];
            });
        });
    };
    UsuarioProvider.RegisterLogin = function (result) {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.token, result.token);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.user, JSON.stringify(result.usuario));
    };
    // async GetAllUsuarios(): cli {
    //   UsuarioProvider.clientes = Array<UsuarioModel>()
    //   return this.http.get(`${this.url}/usuario`);
    // }
    UsuarioProvider.GetUsuario = function () {
        if (!UsuarioProvider_1.usuario) {
            UsuarioProvider_1.usuario = (JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.user)));
        }
        return UsuarioProvider_1.usuario;
    };
    Object.defineProperty(UsuarioProvider, "GetTokenAccess", {
        get: function () {
            return localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.token);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioProvider, "IsLogado", {
        get: function () {
            return localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.token) != undefined;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioProvider = UsuarioProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_http__["a" /* HttpProvider */]])
    ], UsuarioProvider);
    return UsuarioProvider;
    var UsuarioProvider_1;
}(__WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__["a" /* ProviderBase */]));

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_http__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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




var ProdutoProvider = /** @class */ (function (_super) {
    __extends(ProdutoProvider, _super);
    function ProdutoProvider(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "produto", http) || this;
        _this.http = http;
        _this.url = __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "produto";
        return _this;
    }
    ProdutoProvider.prototype.produtosByCategoriaId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(this.url + "/categoria/" + id)];
            });
        });
    };
    ProdutoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_http__["a" /* HttpProvider */]])
    ], ProdutoProvider);
    return ProdutoProvider;
}(__WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__["a" /* ProviderBase */]));

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_models_CarrinhoItemModel__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_carrinhoModel__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CarrinhoProvider = /** @class */ (function () {
    function CarrinhoProvider(http, evt) {
        var _this = this;
        this.http = http;
        this.evt = evt;
        this._carrinho = new __WEBPACK_IMPORTED_MODULE_4__app_models_carrinhoModel__["a" /* CarrinhoModel */]();
        //Inicializando nosso carrinho
        this._carrinho.datahora = new Date();
        this._carrinho.itens = new Array();
        this._carrinho.valorTotal = 0.0;
        this._carrinho.enderecoEntrega = new Array();
        //Inicializando nosso observable
        this.carrinho = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (obs) {
            _this.carrinhoObservable = obs;
            _this.carrinhoObservable.next(_this._carrinho);
        });
    }
    CarrinhoProvider.prototype.getCarrinho = function () {
        return this.carrinho;
    };
    CarrinhoProvider.prototype.adicionarNovoItem = function (item) {
        var isExiste = false;
        this._carrinho.itens.forEach(function (prod) {
            if (prod.Produto._id == item._id) {
                prod.Quantidade++;
                isExiste = true;
            }
        });
        if (!isExiste) {
            var newProduto = new __WEBPACK_IMPORTED_MODULE_1__app_models_CarrinhoItemModel__["a" /* CarrinhoItemModel */]();
            newProduto.Produto = item;
            newProduto.Quantidade = 1;
            this._carrinho.itens.push(newProduto);
        }
        this._calcularCarrinho();
        this.evt.publish(__WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__["a" /* ConfigHelper */].Events.atualizaoQuantidadeProduto, {});
        this.carrinhoObservable.next(this._carrinho);
    };
    CarrinhoProvider.prototype.removerItem = function (item) {
        for (var index = 0; index < this._carrinho.itens.length; index++) {
            var prod = this._carrinho.itens[index];
            if (prod.Produto._id == item._id) {
                if (prod.Quantidade <= 1) {
                    this._carrinho.itens.splice(index, 1);
                }
                else {
                    this._carrinho.itens[index].Quantidade--;
                }
            }
        }
        this._calcularCarrinho();
        this.evt.publish(__WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__["a" /* ConfigHelper */].Events.atualizaoQuantidadeProduto, {});
        this.carrinhoObservable.next(this._carrinho);
    };
    CarrinhoProvider.prototype.getQuantidadeItem = function (item) {
        var prod = this._carrinho.itens.filter(function (x) { return x.Produto._id == item._id; })[0];
        if (prod)
            return prod.Quantidade;
        else
            return 0;
    };
    CarrinhoProvider.prototype._calcularCarrinho = function () {
        var _this = this;
        this._carrinho.valorTotal = 0;
        this._carrinho.itens.forEach(function (prod) {
            _this._carrinho.valorTotal += prod.Produto.preco * prod.Quantidade;
        });
    };
    CarrinhoProvider.prototype.SalvarPedido = function (pedido) {
        var _pedido = {};
        _pedido.valorTotal = pedido.valorTotal;
        _pedido.itens = [];
        _pedido.formaPagamento = pedido.formaPagamento;
        _pedido.enderecoEntregaId = pedido.enderecoEntregaId;
        _pedido.enderecoEntrega = pedido.enderecoEntrega;
        console.log("endereco inteiro", _pedido.enderecoEntrega);
        // pedido.enderecoEntrega.forEach(ender => {
        //   _pedido.enderecoEntrega.push({
        //     cidade: ender.cidade,
        //     bairro: ender.bairro,
        //     rua: ender.rua,
        //     numero: ender.numero,
        //     cep: ender.cep,
        //     orientacoes: ender.orientacoes,
        //     pontoReferencia: ender.pontoReferencia,
        //     uf: ender.uf
        //   });
        // });
        // _pedido.enderecoEntrega = JSON.stringify(_pedido.enderecoEntrega);
        pedido.itens.forEach(function (prod) {
            _pedido.itens.push({
                quantidade: prod.Quantidade,
                produtoId: prod.Produto._id,
                nomeProd: prod.Produto.nome,
                observacoes: prod.Observacoes
            });
        });
        console.log("pedido", _pedido);
        _pedido.itens = JSON.stringify(_pedido.itens);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "pedido", _pedido);
    };
    CarrinhoProvider.prototype.GetMeusPedidos = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "pedido");
    };
    CarrinhoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* Events */]])
    ], CarrinhoProvider);
    return CarrinhoProvider;
}());

//# sourceMappingURL=carrinho.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_spinner_spinner__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_common_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_http_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_network_network__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_usuario_usuario__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_categoria_categoria__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_camera_camera__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_produto_produto__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_carrinho_carrinho__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_endereco_endereco__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_operador_operador__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//statusbar import

//camera

//push notifications


//animação loading

//Mensagem Alerta

//imports para internet, rodar no browser e http











// import { MensagensPage } from "./../pages/mensagens/mensagens";

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],],
            imports: [__WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_11__node_modules_angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adm-categoria/adm-categoria.module#AdmCategoriaPageModule', name: 'AdmCategoriaPage', segment: 'adm-categoria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adm-categorias/adm-categorias.module#AdmCategoriasPageModule', name: 'AdmCategoriasPage', segment: 'adm-categorias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adm-cliente/adm-cliente.module#AdmClientePageModule', name: 'AdmClientePage', segment: 'adm-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adm-operador/adm-operador.module#AdmOperadorPageModule', name: 'AdmOperadorPage', segment: 'adm-operador', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adm-produto/adm-produto.module#AdmProdutoPageModule', name: 'AdmProdutoPage', segment: 'adm-produto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adm-produtos/adm-produtos.module#AdmProdutosPageModule', name: 'AdmProdutosPage', segment: 'adm-produtos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clientes/clientes.module#ClientesPageModule', name: 'ClientesPage', segment: 'clientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mensagens/mensagens.module#MensagensPageModule', name: 'MensagensPage', segment: 'mensagens', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/minha-conta/minha-conta.module#MinhaContaPageModule', name: 'MinhaContaPage', segment: 'minha-conta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/operadores/operadores.module#OperadoresPageModule', name: 'OperadoresPage', segment: 'operadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedidos/pedidos.module#PedidosPageModule', name: 'PedidosPage', segment: 'pedidos', priority: 'low', defaultHistory: [] }
                    ]
                })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_spinner_spinner__["a" /* SpinnerProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_network_network__["a" /* NetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_categoria_categoria__["a" /* CategoriaProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_camera_camera__["a" /* CameraProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_17__providers_produto_produto__["a" /* ProdutoProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_carrinho_carrinho__["a" /* CarrinhoProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_endereco_endereco__["a" /* EnderecoEntregaProvider */],
                // MensagensPage,
                __WEBPACK_IMPORTED_MODULE_20__providers_operador_operador__["a" /* OperadorProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operador_operador__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinner_spinner__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__network_network__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpProvider = /** @class */ (function () {
    function HttpProvider(http, spinnerSrv, alertSrv, networkSrv) {
        this.http = http;
        this.spinnerSrv = spinnerSrv;
        this.alertSrv = alertSrv;
        this.networkSrv = networkSrv;
    }
    HttpProvider.prototype.createHeader = function (header) {
        if (!header) {
            header = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        }
        header = header.append("Content-Type", "application/json");
        header = header.append("Accept", "application/json");
        var token = __WEBPACK_IMPORTED_MODULE_0__operador_operador__["a" /* OperadorProvider */].GetTokenAccess;
        if (token) {
            header = header.append("x-access-token", token);
        }
        return header;
    };
    HttpProvider.prototype.get = function (url) {
        var _this = this;
        this.spinnerSrv.Show("Carregando os dados...");
        var header = this.createHeader();
        return new Promise(function (resolve) {
            if (_this.networkSrv.IsOnline) {
                _this.http.get(url, { headers: header }).subscribe(function (_res) {
                    _this.spinnerSrv.Hide();
                    resolve({ success: true, data: _res, err: undefined });
                }, function (err) {
                    _this.spinnerSrv.Hide();
                    _this.alertSrv.toast("Não foi possível consultar os dados, verifique sua conexão e tente novamente", "bottom");
                    resolve({ success: false, data: undefined, err: err });
                });
            }
            else {
                _this.alertSrv.toast("Você está Offline, e infelizmente não pode ser carregado os dados!", "bottom");
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider.prototype.post = function (url, model) {
        var _this = this;
        this.spinnerSrv.Show("Salvando informações...");
        var header = this.createHeader();
        return new Promise(function (resolve) {
            if (_this.networkSrv.IsOnline) {
                _this.http.post(url, model, { headers: header }).subscribe(function (_res) {
                    _this.spinnerSrv.Hide();
                    resolve({ success: true, data: _res, err: undefined });
                }, function (err) {
                    _this.spinnerSrv.Hide();
                    console.log(err);
                    if (err.status == 400) {
                        var msg_1 = "";
                        err.error.validation.forEach(function (_err) {
                            msg_1 += "<li>" + _err.message + "</li>";
                        });
                        _this.alertSrv.alert(err.error.message, msg_1);
                    }
                    else if (err.status == 404) {
                        _this.alertSrv.alert("Informação", err.error.message);
                    }
                    else
                        _this.alertSrv.toast("Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente", "bottom");
                    resolve({ success: false, data: undefined, err: err });
                });
            }
            else {
                _this.alertSrv.toast("Você está Offline, e infelizmente não pode ser enviado os dados!", "bottom");
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider.prototype.put = function (url, model) {
        var _this = this;
        this.spinnerSrv.Show("Atualizando informações...");
        var header = this.createHeader();
        return new Promise(function (resolve) {
            if (_this.networkSrv.IsOnline) {
                _this.http.put(url, model, { headers: header }).subscribe(function (_res) {
                    _this.spinnerSrv.Hide();
                    resolve({ success: true, data: _res, err: undefined });
                }, function (err) {
                    _this.spinnerSrv.Hide();
                    console.log(err);
                    if (err.status == 400) {
                        var msg_2 = "";
                        err.error.validation.forEach(function (_err) {
                            msg_2 += "<li>" + _err.message + "</li>";
                        });
                        _this.alertSrv.alert(err.error.message, msg_2);
                    }
                    else if (err.status == 404) {
                        _this.alertSrv.alert("Informação", err.error.message);
                    }
                    else
                        _this.alertSrv.toast("Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente", "bottom");
                    resolve({ success: false, data: undefined, err: err });
                });
            }
            else {
                _this.alertSrv.toast("Você está Offline, e infelizmente não pode ser enviado os dados!", "bottom");
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider.prototype.delete = function (url) {
        var _this = this;
        this.spinnerSrv.Show("Removendo registro...");
        var header = this.createHeader();
        return new Promise(function (resolve) {
            if (_this.networkSrv.IsOnline) {
                _this.http.delete(url, { headers: header }).subscribe(function (_res) {
                    _this.spinnerSrv.Hide();
                    resolve({ success: true, data: _res, err: undefined });
                }, function (err) {
                    _this.spinnerSrv.Hide();
                    _this.alertSrv.toast("Não foi possível realizar a exclusão do registro!", "bottom");
                    resolve({ success: true, data: undefined, err: err });
                });
            }
            else {
                _this.alertSrv.toast("Você está Offline, e infelizmente não pode ser enviado os dados!", "bottom");
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__network_network__["a" /* NetworkProvider */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoItemModel; });
var CarrinhoItemModel = /** @class */ (function () {
    function CarrinhoItemModel() {
        this.Quantidade = 1;
    }
    return CarrinhoItemModel;
}());

//# sourceMappingURL=CarrinhoItemModel.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoModel; });
var CarrinhoModel = /** @class */ (function () {
    function CarrinhoModel() {
        this.valorTotal = 0.0;
        this.itens = new Array();
        this.enderecoEntrega = new Array();
    }
    return CarrinhoModel;
}());

//# sourceMappingURL=carrinhoModel.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_operador_operador__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var config = {
    apiKey: "AIzaSyDlsbsgr1kvkrZndhbRmfA6dMYpW8i1-HM",
    authDomain: "fir-chat-e7621.firebaseapp.com",
    databaseURL: "https://fir-chat-e7621.firebaseio.com",
    projectId: "fir-chat-e7621",
    storageBucket: "fir-chat-e7621.appspot.com",
    messagingSenderId: "543438022590",
    appId: "1:543438022590:web:990a639cbc269175"
};
var MyApp = /** @class */ (function () {
    function MyApp(platform, 
        // private oneSignal: OneSignal,
        statusBar, splashScreen) {
        this.platform = platform;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__providers_operador_operador__["a" /* OperadorProvider */].IsLogado ? "PedidosPage" : "LoginPage";
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            // this._configOneSignal();
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](config);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Desenvolvimento\TCC\1 - Projeto\Web\Ionic\IonicAdminPanel\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnderecoEntregaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_http__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnderecoEntregaProvider = /** @class */ (function (_super) {
    __extends(EnderecoEntregaProvider, _super);
    function EnderecoEntregaProvider(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "enderecoEntrega", http) || this;
        _this.http = http;
        _this.url = __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "enderecoEntrega";
        return _this;
    }
    EnderecoEntregaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_http__["a" /* HttpProvider */]])
    ], EnderecoEntregaProvider);
    return EnderecoEntregaProvider;
}(__WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__["a" /* ProviderBase */]));

//# sourceMappingURL=endereco.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigHelper; });
var ConfigHelper = /** @class */ (function () {
    function ConfigHelper() {
    }
    ConfigHelper.Url = "https://woosh-api.herokuapp.com/api/";
    //public static Url: string = 'http://localhost:3000/api/'
    //public static Url: string = 'http://Woosh-com-br.umbler.net/api/'
    ConfigHelper.photo = "data:image/png;base64,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";
    ConfigHelper.storageKeys = {
        token: "delivery.token",
        user: "delivery.user",
        selectCategory: "Woosh.select.category",
        oneSignalUid: "Woosh.onesignal"
    };
    ConfigHelper.Events = {
        atualizaoQuantidadeProduto: "atualizacao.quantidade.produto"
    };
    return ConfigHelper;
}());

//# sourceMappingURL=configHelper.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderBase; });
var ProviderBase = /** @class */ (function () {
    function ProviderBase(url, http) {
        this.url = url;
        this.http = http;
    }
    ProviderBase.prototype.get = function () {
        return this.http.get(this.url);
    };
    ProviderBase.prototype.getByUid = function (uid) {
        return this.http.get(this.url + "/" + uid);
    };
    ProviderBase.prototype.post = function (model) {
        return this.http.post(this.url, model);
    };
    ProviderBase.prototype.put = function (uid, model) {
        return this.http.put(this.url + "/" + uid, model);
    };
    ProviderBase.prototype.delete = function (uid) {
        return this.http.delete(this.url + "/" + uid);
    };
    return ProviderBase;
}());

//# sourceMappingURL=providerBase.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperadorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__ = __webpack_require__(31);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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




var OperadorProvider = /** @class */ (function (_super) {
    __extends(OperadorProvider, _super);
    function OperadorProvider(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "operador", http) || this;
        _this.http = http;
        _this.url = __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "operador";
        return _this;
    }
    OperadorProvider_1 = OperadorProvider;
    OperadorProvider.prototype.autenticate = function (nome, senha) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.post(this.url + "/autenticar", {
                        nome: nome,
                        senha: senha
                    })];
            });
        });
    };
    OperadorProvider.prototype.register = function (operador) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.post(this.url + "/register", operador)];
            });
        });
    };
    OperadorProvider.RegisterLogin = function (result) {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.token, result.token);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.user, JSON.stringify(result.operador));
    };
    OperadorProvider.GetOperador = function () {
        if (!OperadorProvider_1.operador) {
            OperadorProvider_1.operador = (JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.user)));
        }
        return OperadorProvider_1.operador;
    };
    Object.defineProperty(OperadorProvider, "GetTokenAccess", {
        get: function () {
            return localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.token);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OperadorProvider, "IsLogado", {
        get: function () {
            return localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.token) != undefined;
        },
        enumerable: true,
        configurable: true
    });
    OperadorProvider = OperadorProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_http__["a" /* HttpProvider */]])
    ], OperadorProvider);
    return OperadorProvider;
    var OperadorProvider_1;
}(__WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__["a" /* ProviderBase */]));

//# sourceMappingURL=operador.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map