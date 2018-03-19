webpackJsonp([21],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Producto; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_categoria__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_models__ = __webpack_require__(36);
/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */


var Producto = (function () {
    function Producto() {
        this.categoria = new __WEBPACK_IMPORTED_MODULE_0__models_categoria__["a" /* Categoria */]();
        this.idModelo = new __WEBPACK_IMPORTED_MODULE_1__models_models__["i" /* Modelo */]();
        this.idMarca = new __WEBPACK_IMPORTED_MODULE_1__models_models__["h" /* Marca */]();
    }
    return Producto;
}());

//# sourceMappingURL=producto.js.map

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/administracion-reportes/administracion-reportes.module": [
		480,
		20
	],
	"../pages/cards/cards.module": [
		481,
		18
	],
	"../pages/content/content.module": [
		482,
		17
	],
	"../pages/item-create/item-create.module": [
		483,
		16
	],
	"../pages/item-detail/item-detail.module": [
		484,
		15
	],
	"../pages/list-master/list-master.module": [
		485,
		14
	],
	"../pages/login/login.module": [
		486,
		13
	],
	"../pages/menu/menu.module": [
		492,
		12
	],
	"../pages/modal-confirmacion-repuesto/modal-confirmacion-repuesto.module": [
		487,
		11
	],
	"../pages/modal-correctivos/modal-correctivos.module": [
		488,
		10
	],
	"../pages/modal-repuestos-seleccionados/modal-repuestos-seleccionados.module": [
		489,
		9
	],
	"../pages/modal-repuestos/modal-repuestos.module": [
		490,
		8
	],
	"../pages/modal-search-cliente/modal-search-cliente.module": [
		491,
		7
	],
	"../pages/modal-search-producto/modal-search-producto.module": [
		493,
		6
	],
	"../pages/reporte-impresoras/reporte-impresoras.module": [
		494,
		19
	],
	"../pages/search/search.module": [
		495,
		5
	],
	"../pages/settings/settings.module": [
		496,
		4
	],
	"../pages/signup/signup.module": [
		497,
		3
	],
	"../pages/tabs/tabs.module": [
		498,
		2
	],
	"../pages/tutorial/tutorial.module": [
		499,
		1
	],
	"../pages/welcome/welcome.module": [
		500,
		0
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
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsuarioProvider = (function () {
    function UsuarioProvider(api) {
        this.api = api;
    }
    UsuarioProvider.prototype.login = function (user, password) {
        return this.api.get('usuariosService/login/' + user + '/' + password);
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* Api */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleCatalogoReporteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpHeaders } from '@angular/common/http';


//import { map, catchError } from 'rxjs/operators';
/*
  Generated class for the DetalleCatalogoReporteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DetalleCatalogoReporteProvider = (function () {
    function DetalleCatalogoReporteProvider(api) {
        this.api = api;
    }
    DetalleCatalogoReporteProvider.prototype.getDetalleCatalogoReporteByCabeceraCodigo = function (codigo) {
        return this.api.get_type('detalleCatalogoReporteService/getDetalleCatalogoReporteByCabeceraCodigo/' + codigo);
    };
    DetalleCatalogoReporteProvider.prototype.getCabeceraCatalogoReportesByTipo = function (tipo) {
        return this.api.get_type('detalleCatalogoReporteService/getCabeceraCatalogoReportesByTipo/' + tipo);
    };
    DetalleCatalogoReporteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */]])
    ], DetalleCatalogoReporteProvider);
    return DetalleCatalogoReporteProvider;
}());

//# sourceMappingURL=detalle-catalogo-reporte.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoVisitaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TipoVisitaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TipoVisitaProvider = (function () {
    function TipoVisitaProvider(api) {
        this.api = api;
    }
    TipoVisitaProvider.prototype.getAllTipoVisitas = function () {
        return this.api.get_type('tipoVisitaService/getAllTipoVisitas/');
    };
    TipoVisitaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* Api */]])
    ], TipoVisitaProvider);
    return TipoVisitaProvider;
}());

//# sourceMappingURL=tipo-visita.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClienteProvider = (function () {
    function ClienteProvider(api, http) {
        this.api = api;
        this.http = http;
        this.apiUrl = 'https://restcountries.eu/rest/v2/all';
    }
    ClienteProvider.prototype.getClientes = function () {
        return this.api.get_type('clienteService/getClientes/');
    };
    ClienteProvider.prototype.getCliente_pipe = function () {
        return this.api.get_pipe('clienteService/getClientes');
    };
    ClienteProvider.prototype.getCountries = function () {
        return this.http.get(this.apiUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    ClienteProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ClienteProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ClienteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ClienteProvider);
    return ClienteProvider;
}());

//# sourceMappingURL=cliente.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(30);
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


/*
  Generated class for the ProductoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductoProvider = (function () {
    function ProductoProvider(api) {
        this.api = api;
    }
    ProductoProvider.prototype.getOnlyProductosByCodigoCategoria = function (codigo) {
        return this.api.get_pipe('productoService/getOnlyProductosByCodigoCategoria/' + codigo);
    };
    ProductoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* Api */]])
    ], ProductoProvider);
    return ProductoProvider;
}());

//# sourceMappingURL=producto.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoRepuestoReporteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(30);
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


/*
  Generated class for the ProductoRepuestoReporteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductoRepuestoReporteProvider = (function () {
    function ProductoRepuestoReporteProvider(api) {
        this.api = api;
    }
    ProductoRepuestoReporteProvider.prototype.getByIdDetalleCatalogoReporteByIdModelo = function (idDetalle, idModelo) {
        return this.api.get_type('productoRepuestoReporteServiceRest/getByIdDetalleCatalogoReporteByIdModelo/' + idDetalle + '/' + idModelo);
    };
    ProductoRepuestoReporteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* Api */]])
    ], ProductoRepuestoReporteProvider);
    return ProductoRepuestoReporteProvider;
}());

//# sourceMappingURL=producto-repuesto-reporte.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(30);
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


/*


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { of } from "rxjs/observable/of";*/
/*
  Generated class for the ReporteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
var ReporteProvider = (function () {
    //url = "http://localhost:8080/connector-1.0/rest/reporteService/user/";
    function ReporteProvider(api) {
        this.api = api;
    }
    ReporteProvider.prototype.reportePdfImpresora = function (idReporte) {
        return this.api.getPdf('/reporteService/descarga/' + idReporte);
    };
    ReporteProvider.prototype.saveAllReporteImpresoras = function (item) {
        console.log('FROM SERVICE  ' + item);
        return this.api.postHttp('reporteService/saveAllReporteImpresoras/', item);
    };
    ReporteProvider.prototype.updateAllReporteImpresoras = function (item) {
        return this.api.putHttp('reporteService/updateAllReporteImpresoras/' + item.reporte.id, item);
    };
    ReporteProvider.prototype.numeroReporte = function (idUsuario, tipo, subtipo) {
        return this.api.get_type('reporteService/numeroReporte/' + idUsuario + '/' + tipo + '/' + subtipo);
    };
    ReporteProvider.prototype.numeroReporteFormateado = function (idUsuario, tipo, subtipo) {
        return this.api.get('reporteService/numeroReporteFormateado/' + idUsuario + '/' + tipo + '/' + subtipo);
    };
    ReporteProvider.prototype.reportesBySubTipo = function (tipo) {
        return this.api.get_pipe('reporteService/reportesBySubTipo/' + tipo);
    };
    ReporteProvider.prototype.reportesById = function (id) {
        return this.api.get_type('reporteService/reporteById/' + id);
    };
    ReporteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* Api */]])
    ], ReporteProvider);
    return ReporteProvider;
}());

//# sourceMappingURL=reporte.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteSucursalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(30);
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


/*
  Generated class for the ClienteSucursalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClienteSucursalProvider = (function () {
    function ClienteSucursalProvider(api) {
        this.api = api;
    }
    ClienteSucursalProvider.prototype.getByIdCliente = function (idcliente) {
        return this.api.get_type('clienteSucursalService/getByIdCliente/' + idcliente);
    };
    ClienteSucursalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* Api */]])
    ], ClienteSucursalProvider);
    return ClienteSucursalProvider;
}());

//# sourceMappingURL=cliente-sucursal.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categoria; });
/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */
var Categoria = (function () {
    function Categoria() {
    }
    return Categoria;
}());

//# sourceMappingURL=categoria.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleCatalogoReporte; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cabeceraCatalogoReporte__ = __webpack_require__(239);

/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */
var DetalleCatalogoReporte = (function () {
    function DetalleCatalogoReporte() {
        this.seleccion = false;
        this.idCabecera = new __WEBPACK_IMPORTED_MODULE_0__cabeceraCatalogoReporte__["a" /* CabeceraCatalogoReporte */]();
    }
    return DetalleCatalogoReporte;
}());

//# sourceMappingURL=detalleCatalogoReporte.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabeceraCatalogoReporte; });
/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */
var CabeceraCatalogoReporte = (function () {
    function CabeceraCatalogoReporte() {
    }
    return CabeceraCatalogoReporte;
}());

//# sourceMappingURL=cabeceraCatalogoReporte.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Marca; });
/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */
var Marca = (function () {
    function Marca() {
    }
    return Marca;
}());

//# sourceMappingURL=marca.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */
var Usuario = (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignacionReparaciones; });
var AsignacionReparaciones = (function () {
    function AsignacionReparaciones() {
    }
    return AsignacionReparaciones;
}());

//# sourceMappingURL=asignacionReparaciones.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoVisitas; });
/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */
var TipoVisitas = (function () {
    function TipoVisitas() {
    }
    return TipoVisitas;
}());

//# sourceMappingURL=TipoVisitas.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_side_menu_redirect_events__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular
 // tslint:disable-line
// Ionic


var InnerMenuOptionModel = (function () {
    function InnerMenuOptionModel() {
    }
    InnerMenuOptionModel.fromMenuOptionModel = function (option, parent) {
        var innerMenuOptionModel = new InnerMenuOptionModel();
        innerMenuOptionModel.id = this.counter++;
        innerMenuOptionModel.iconName = option.iconName;
        innerMenuOptionModel.displayName = option.displayName;
        innerMenuOptionModel.targetOption = option;
        innerMenuOptionModel.parent = parent || null;
        innerMenuOptionModel.selected = option.selected;
        if (option.subItems) {
            innerMenuOptionModel.expanded = false;
            innerMenuOptionModel.subItemsCount = option.subItems.length;
            innerMenuOptionModel.subOptions = [];
            option.subItems.forEach(function (subItem) {
                var innerSubItem = InnerMenuOptionModel.fromMenuOptionModel(subItem, innerMenuOptionModel);
                innerMenuOptionModel.subOptions.push(innerSubItem);
                // Select the parent if any 
                // child option is selected
                if (subItem.selected) {
                    innerSubItem.parent.selected = true;
                    innerSubItem.parent.expanded = true;
                }
            });
        }
        return innerMenuOptionModel;
    };
    InnerMenuOptionModel.counter = 1;
    return InnerMenuOptionModel;
}());
var SideMenuContentComponent = (function () {
    function SideMenuContentComponent(platform, eventsCtrl, cdRef, toastCtrl) {
        var _this = this;
        this.platform = platform;
        this.eventsCtrl = eventsCtrl;
        this.cdRef = cdRef;
        this.toastCtrl = toastCtrl;
        this.collapsableItems = [];
        // Outputs: return the selected option to the caller
        this.selectOption = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // Handle the redirect event
        this.eventsCtrl.subscribe(__WEBPACK_IMPORTED_MODULE_2__models_side_menu_redirect_events__["a" /* SideMenuRedirectEvent */], function (data) {
            _this.updateSelectedOption(data);
        });
    }
    Object.defineProperty(SideMenuContentComponent.prototype, "options", {
        set: function (value) {
            var _this = this;
            if (value) {
                // Keep a reference to the options 
                // sent to this component
                this.menuOptions = value;
                this.collapsableItems = new Array();
                // Map the options to our internal models
                this.menuOptions.forEach(function (option) {
                    var innerMenuOption = InnerMenuOptionModel.fromMenuOptionModel(option);
                    _this.collapsableItems.push(innerMenuOption);
                    // Check if there's any option marked as selected
                    if (option.selected) {
                        _this.selectedOption = innerMenuOption;
                    }
                    else if (innerMenuOption.subItemsCount) {
                        innerMenuOption.subOptions.forEach(function (subItem) {
                            if (subItem.selected) {
                                _this.selectedOption = subItem;
                            }
                        });
                    }
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideMenuContentComponent.prototype, "settings", {
        set: function (value) {
            if (value) {
                this.menuSettings = value;
                this.mergeSettings();
            }
        },
        enumerable: true,
        configurable: true
    });
    SideMenuContentComponent.prototype.ngOnDestroy = function () {
        this.eventsCtrl.unsubscribe(__WEBPACK_IMPORTED_MODULE_2__models_side_menu_redirect_events__["a" /* SideMenuRedirectEvent */]);
    };
    // ---------------------------------------------------
    // PUBLIC methods
    // ---------------------------------------------------
    // Send the selected option to the caller component
    SideMenuContentComponent.prototype.select = function (option) {
        if (this.menuSettings.showSelectedOption) {
            this.setSelectedOption(option);
        }
        // Return the selected option (not our inner option)
        this.selectOption.emit(option.targetOption);
    };
    // Toggle the sub options of the selected item
    SideMenuContentComponent.prototype.toggleItemOptions = function (targetOption) {
        if (!targetOption)
            return;
        // If the accordion mode is set to true, we need
        // to collapse all the other menu options
        if (this.menuSettings.accordionMode) {
            this.collapsableItems.forEach(function (option) {
                if (option.id !== targetOption.id) {
                    option.expanded = false;
                }
            });
        }
        // Toggle the selected option
        targetOption.expanded = !targetOption.expanded;
    };
    // Reset the entire menu
    SideMenuContentComponent.prototype.collapseAllOptions = function () {
        this.collapsableItems.forEach(function (option) {
            if (!option.selected) {
                option.expanded = false;
            }
            if (option.subItemsCount) {
                option.subOptions.forEach(function (subItem) {
                    if (subItem.selected) {
                        // Expand the parent if any of 
                        // its childs is selected
                        subItem.parent.expanded = true;
                    }
                });
            }
        });
        // Update the view since there wasn't
        // any user interaction with it
        this.cdRef.detectChanges();
    };
    Object.defineProperty(SideMenuContentComponent.prototype, "subOptionIndentation", {
        // Get the proper indentation of each option
        get: function () {
            if (this.platform.is('ios'))
                return this.menuSettings.subOptionIndentation.ios;
            if (this.platform.is('windows'))
                return this.menuSettings.subOptionIndentation.wp;
            return this.menuSettings.subOptionIndentation.md;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SideMenuContentComponent.prototype, "itemHeight", {
        // Get the proper height of each option
        get: function () {
            if (this.platform.is('ios'))
                return this.menuSettings.itemHeight.ios;
            if (this.platform.is('windows'))
                return this.menuSettings.itemHeight.wp;
            return this.menuSettings.itemHeight.md;
        },
        enumerable: true,
        configurable: true
    });
    // ---------------------------------------------------
    // PRIVATE methods
    // ---------------------------------------------------
    // Method that set the selected option and its parent
    SideMenuContentComponent.prototype.setSelectedOption = function (option) {
        if (!option.targetOption.component)
            return;
        // Clean the current selected option if any
        if (this.selectedOption) {
            this.selectedOption.selected = false;
            this.selectedOption.targetOption.selected = false;
            if (this.selectedOption.parent) {
                this.selectedOption.parent.selected = false;
                this.selectedOption.parent.expanded = false;
            }
            this.selectedOption = null;
        }
        // Set this option to be the selected
        option.selected = true;
        option.targetOption.selected = true;
        if (option.parent) {
            option.parent.selected = true;
            option.parent.expanded = true;
        }
        // Keep a reference to the selected option
        this.selectedOption = option;
        // Update the view if needed since we may have
        // expanded or collapsed some options
        this.cdRef.detectChanges();
    };
    // Update the selected option
    SideMenuContentComponent.prototype.updateSelectedOption = function (data) {
        if (!data.displayName) {
            return;
        }
        var targetOption;
        this.collapsableItems.forEach(function (option) {
            if (option.displayName.toLowerCase() === data.displayName.toLowerCase()) {
                targetOption = option;
            }
            else if (option.subItemsCount) {
                option.subOptions.forEach(function (subOption) {
                    if (subOption.displayName.toLowerCase() === data.displayName.toLowerCase()) {
                        targetOption = subOption;
                    }
                });
            }
        });
        if (targetOption) {
            this.setSelectedOption(targetOption);
        }
    };
    // Merge the settings received with the default settings
    SideMenuContentComponent.prototype.mergeSettings = function () {
        var defaultSettings = {
            accordionMode: false,
            itemHeight: {
                ios: 50,
                md: 50,
                wp: 50
            },
            arrowIcon: 'ios-arrow-down',
            showSelectedOption: false,
            selectedOptionClass: 'selected-option',
            indentSubOptionsWithoutIcons: false,
            subOptionIndentation: {
                ios: '16px',
                md: '16px',
                wp: '16px'
            }
        };
        if (!this.menuSettings) {
            // Use the default values
            this.menuSettings = defaultSettings;
            return;
        }
        if (!this.menuSettings.itemHeight) {
            this.menuSettings.itemHeight = defaultSettings.itemHeight;
        }
        else {
            this.menuSettings.itemHeight.ios = this.isDefinedAndPositive(this.menuSettings.itemHeight.ios) ? this.menuSettings.itemHeight.ios : defaultSettings.itemHeight.ios;
            this.menuSettings.itemHeight.md = this.isDefinedAndPositive(this.menuSettings.itemHeight.md) ? this.menuSettings.itemHeight.md : defaultSettings.itemHeight.md;
            this.menuSettings.itemHeight.wp = this.isDefinedAndPositive(this.menuSettings.itemHeight.wp) ? this.menuSettings.itemHeight.wp : defaultSettings.itemHeight.wp;
        }
        this.menuSettings.showSelectedOption = this.isDefined(this.menuSettings.showSelectedOption) ? this.menuSettings.showSelectedOption : defaultSettings.showSelectedOption;
        this.menuSettings.accordionMode = this.isDefined(this.menuSettings.accordionMode) ? this.menuSettings.accordionMode : defaultSettings.accordionMode;
        this.menuSettings.arrowIcon = this.isDefined(this.menuSettings.arrowIcon) ? this.menuSettings.arrowIcon : defaultSettings.arrowIcon;
        this.menuSettings.selectedOptionClass = this.isDefined(this.menuSettings.selectedOptionClass) ? this.menuSettings.selectedOptionClass : defaultSettings.selectedOptionClass;
        this.menuSettings.subOptionIndentation = this.isDefined(this.menuSettings.subOptionIndentation) ? this.menuSettings.subOptionIndentation : defaultSettings.subOptionIndentation;
        this.menuSettings.indentSubOptionsWithoutIcons = this.isDefined(this.menuSettings.indentSubOptionsWithoutIcons) ? this.menuSettings.indentSubOptionsWithoutIcons : defaultSettings.indentSubOptionsWithoutIcons;
        if (!this.menuSettings.subOptionIndentation) {
            this.menuSettings.subOptionIndentation = defaultSettings.subOptionIndentation;
        }
        else {
            this.menuSettings.subOptionIndentation.ios = this.isDefined(this.menuSettings.subOptionIndentation.ios) ? this.menuSettings.subOptionIndentation.ios : defaultSettings.subOptionIndentation.ios;
            this.menuSettings.subOptionIndentation.md = this.isDefined(this.menuSettings.subOptionIndentation.md) ? this.menuSettings.subOptionIndentation.md : defaultSettings.subOptionIndentation.md;
            this.menuSettings.subOptionIndentation.wp = this.isDefined(this.menuSettings.subOptionIndentation.wp) ? this.menuSettings.subOptionIndentation.wp : defaultSettings.subOptionIndentation.wp;
        }
    };
    SideMenuContentComponent.prototype.isDefined = function (property) {
        return property !== null && property !== undefined;
    };
    SideMenuContentComponent.prototype.isDefinedAndPositive = function (property) {
        return this.isDefined(property) && !isNaN(property) && property > 0;
    };
    SideMenuContentComponent.prototype.toast = function (msj) {
        var toast = this.toastCtrl.create({
            message: '!*****  ' + msj + '  **********',
            duration: 9000,
            position: 'top'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('options'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SideMenuContentComponent.prototype, "options", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('settings'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SideMenuContentComponent.prototype, "settings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SideMenuContentComponent.prototype, "selectOption", void 0);
    SideMenuContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'side-menu-content',template:/*ion-inline-start:"D:\PROYECTOS\ANGULAR\reportes\src\shared\side-menu-content\side-menu-content.component.html"*/'<ion-list no-margin no-lines>\n\n    <ng-template ngFor let-option [ngForOf]="collapsableItems" let-i="index">\n\n\n\n        <!-- It is a simple option -->\n\n        <ng-template [ngIf]="!option.subItemsCount">\n\n            <ion-item class="option" [ngClass]="menuSettings?.showSelectedOption && option.selected ? menuSettings.selectedOptionClass : null" (tap)="select(option)" tappable>\n\n                <ion-icon *ngIf="option.iconName" [name]="option.iconName" item-left></ion-icon>\n\n                {{ option.displayName }}\n\n            </ion-item>\n\n        </ng-template>\n\n\n\n        <!-- It has nested options -->\n\n        <ng-template [ngIf]="option.subItemsCount">\n\n\n\n            <ion-list no-margin class="accordion-menu">\n\n\n\n                <!-- Header -->\n\n                <ion-item class="header" [ngClass]="menuSettings?.showSelectedOption && option.selected ? menuSettings.selectedOptionClass : null" (tap)="toggleItemOptions(option)" tappable>\n\n                    <ion-icon [class.rotate]="option.expanded" class="header-icon" [name]="option.iconName || menuSettings.arrowIcon" item-left></ion-icon>\n\n                    {{ option.displayName }}\n\n                </ion-item>\n\n\n\n                <!-- Sub items -->\n\n                <div [style.height]="option.expanded ? ((itemHeight + 1) * option.subItemsCount) + \'px\' : \'0px\'" class="options">\n\n                    <ng-template ngFor let-item [ngForOf]="option.subOptions">\n\n                        <ion-item class="sub-option" [style.padding-left]="subOptionIndentation" [class.no-icon]="menuSettings?.indentSubOptionsWithoutIcons && !item.iconName" [ngClass]="menuSettings?.showSelectedOption && item.selected ? menuSettings.selectedOptionClass : null" tappable (tap)="select(item)">\n\n                            <ion-icon *ngIf="item.iconName" [name]="item.iconName" item-left></ion-icon>\n\n                            {{ item.displayName }}\n\n                        </ion-item>\n\n                    </ng-template>\n\n                </div>\n\n            </ion-list>\n\n\n\n        </ng-template>\n\n\n\n    </ng-template>\n\n</ion-list>'/*ion-inline-end:"D:\PROYECTOS\ANGULAR\reportes\src\shared\side-menu-content\side-menu-content.component.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], SideMenuContentComponent);
    return SideMenuContentComponent;
}());

//# sourceMappingURL=side-menu-content.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab3Root; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'LoginPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'ListMasterPage';
var Tab2Root = 'SearchPage';
var Tab3Root = 'SettingsPage';
/*
export const ReporteImpresorasPage = 'ReporteImpresorasPage';
export const CasaPage = 'CasaPage';
*/ 
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_cliente_search_cliente__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_cliente_sort_cliente__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_producto_search_producto__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__search_cliente_search_cliente__["a" /* SearchClientePipe */], __WEBPACK_IMPORTED_MODULE_3__sort_cliente_sort_cliente__["a" /* SortClientePipe */], __WEBPACK_IMPORTED_MODULE_4__search_producto_search_producto__["a" /* SearchProductoPipe */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__search_cliente_search_cliente__["a" /* SearchClientePipe */], __WEBPACK_IMPORTED_MODULE_3__sort_cliente_sort_cliente__["a" /* SortClientePipe */], __WEBPACK_IMPORTED_MODULE_4__search_producto_search_producto__["a" /* SearchProductoPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(297);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_providers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_usuario_usuario__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_side_menu_content_side_menu_content_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_detalle_catalogo_reporte_detalle_catalogo_reporte__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_cliente_cliente__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_reporte_reporte__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_producto_producto__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_tipo_visita_tipo_visita__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_parametros_parametros__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_cliente_sucursal_cliente_sucursal__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_consultas_consultas__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_reporte_impresoras_reporte_impresoras__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_administracion_reportes_administracion_reportes__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_pipes_module__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_producto_repuesto_reporte_producto_repuesto_reporte__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_in_app_browser__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file_opener__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_file__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_signaturepad__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_angular2_signaturepad__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_10__providers_providers__["h" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_23__pages_reporte_impresoras_reporte_impresoras__["a" /* ReporteImpresorasPage */], __WEBPACK_IMPORTED_MODULE_24__pages_administracion_reportes_administracion_reportes__["a" /* AdministracionReportesPage */],
                __WEBPACK_IMPORTED_MODULE_14__shared_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/administracion-reportes/administracion-reportes.module#AdministracionReportesPageModule', name: 'AdministracionReportesPage', segment: 'administracion-reportes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-confirmacion-repuesto/modal-confirmacion-repuesto.module#ModalConfirmacionRepuestoPageModule', name: 'ModalConfirmacionRepuestoPage', segment: 'modal-confirmacion-repuesto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-correctivos/modal-correctivos.module#ModalCorrectivosPageModule', name: 'ModalCorrectivosPage', segment: 'modal-correctivos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-repuestos-seleccionados/modal-repuestos-seleccionados.module#ModalRepuestosSeleccionadosPageModule', name: 'ModalRepuestosSeleccionadosPage', segment: 'modal-repuestos-seleccionados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-repuestos/modal-repuestos.module#ModalRepuestosPageModule', name: 'ModalRepuestosPage', segment: 'modal-repuestos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-search-cliente/modal-search-cliente.module#ModalSearchClientePageModule', name: 'ModalSearchClientePage', segment: 'modal-search-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-search-producto/modal-search-producto.module#ModalSearchProductoPageModule', name: 'ModalSearchProductoPage', segment: 'modal-search-producto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reporte-impresoras/reporte-impresoras.module#ReporteImpresorasPageModule', name: 'ReporteImpresorasPage', segment: 'reporte-impresoras', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_30_angular2_signaturepad__["SignaturePadModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_23__pages_reporte_impresoras_reporte_impresoras__["a" /* ReporteImpresorasPage */], __WEBPACK_IMPORTED_MODULE_24__pages_administracion_reportes_administracion_reportes__["a" /* AdministracionReportesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_29__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_10__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__providers_providers__["h" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_detalle_catalogo_reporte_detalle_catalogo_reporte__["a" /* DetalleCatalogoReporteProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_cliente_cliente__["a" /* ClienteProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_reporte_reporte__["a" /* ReporteProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_producto_producto__["a" /* ProductoProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_tipo_visita_tipo_visita__["a" /* TipoVisitaProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_parametros_parametros__["a" /* ParametrosProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_cliente_sucursal_cliente_sucursal__["a" /* ClienteSucursalProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_consultas_consultas__["a" /* ConsultasProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_producto_repuesto_reporte_producto_repuesto_reporte__["a" /* ProductoRepuestoReporteProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    // url: string = 'http://ser-fafa.7e14.starter-us-west-2.openshiftapps.com/rest';
    function Api(httpClient, http) {
        this.httpClient = httpClient;
        this.http = http;
        this.url = 'http://localhost:8080/connector-1.0/rest';
    }
    Api.prototype.urlServices = function () {
        return this.url;
    };
    Api.prototype.downloadPdfFile = function (urlService, fileName) {
        var req = new XMLHttpRequest();
        req.open("GET", this.url + "/" + urlService, true);
        req.responseType = "blob";
        req.onload = function (event) {
            var blob = req.response;
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName + ".pdf";
            link.click();
        };
        req.send();
    };
    Api.prototype.getPdf = function (service) {
        return this.httpClient.get(this.url + service, {
            responseType: "blob"
        }).map(function (res) {
            return new Blob([res], { type: 'application/pdf' });
        });
    };
    Api.prototype.consola = function (texto) {
        return this.httpClient.get('https://serviciosnode.herokuapp.com/api/consola/' + texto);
    };
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.httpClient.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.get_pipe = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.httpClient.get(this.url + '/' + endpoint, reqOpts)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (customers) {
            return customers;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    /*
    
      private extractData(res: Response) {
        let body = res;
        return body || {};
      }*/
    Api.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* Response */]) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    Api.prototype.get_type = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.httpClient.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post_type = function (endpoint, body, reqOpts) {
        console.log('URL COMPLETA   ' + this.url + '/' + endpoint);
        return this.httpClient.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.postHttp = function (service, item) {
        var hdrs = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        hdrs.append('Content-Type', "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: hdrs });
        return this.http.post(this.url + '/' + service, JSON.stringify(item), options).toPromise();
    };
    Api.prototype.putHttp = function (service, item) {
        var hdrs = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        hdrs.append('Content-Type', "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: hdrs });
        return this.http.put(this.url + '/' + service, JSON.stringify(item), options).toPromise();
    };
    Api.prototype.getHttp = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.putHttpClient = function (endpoint, obj) {
        // const params = new HttpParams().set('id', obj.reporte.id);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('content-type', 'application/json');
        headers.set('responseType', 'text');
        console.log('ENLACE CLIENT  ' + this.url + '/' + endpoint);
        return this.httpClient.put(this.url + '/' + endpoint, obj, {
            headers: headers
            // ,params
        });
    };
    Api.prototype.extractData = function (res) {
        return res.text() ? res.json() : {};
        ;
    };
    /*
     
     post_type<T>(item: any) {
      return this.http.post<T>(`http://replace.with.api/anything`, item);
    }
      put<T>(id: number, item: any) {
        return this.httpClient.put<T>(`http://replace.with.api/anything/${id}`, item);
      }
    
      delete(id: number) {
        return this.httpClient.delete(`http://replace.with.api/anything/${id}`);
      }
    */
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.httpClient.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.httpClient.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.httpClient.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.httpClient.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categoria__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cliente__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalleCatalogoReporte__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__marca__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modelo__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__producto__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tipoProducto__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__usuario__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__productoDetalleReporte__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reporte__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__productoRepuestoReporte__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__clienteSucursal__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__productoClienteReporte__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__datosReporteDTO__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__TipoVisitas__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__asignacionReparaciones__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__detalleInventarioProducto__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__detalleInventario__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__reporteMantenimiento__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__cabeceraCatalogoReporte__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__proyectos__ = __webpack_require__(453);
/* unused harmony reexport Categoria */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__cliente__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__detalleCatalogoReporte__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__marca__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__modelo__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__producto__["a"]; });
/* unused harmony reexport TipoProducto */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_7__usuario__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_9__reporte__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_8__productoDetalleReporte__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10__productoRepuestoReporte__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_14__TipoVisitas__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_15__asignacionReparaciones__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_11__clienteSucursal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_13__datosReporteDTO__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_12__productoClienteReporte__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_16__detalleInventarioProducto__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_17__detalleInventario__["a"]; });
/* unused harmony reexport ReporteMantenimiento */
/* unused harmony reexport CabeceraCatalogoReporte */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_20__proyectos__["a"]; });






















//# sourceMappingURL=models.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */
var Cliente = (function () {
    function Cliente() {
    }
    return Cliente;
}());

//# sourceMappingURL=cliente.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modelo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_marca__ = __webpack_require__(240);
/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */

var Modelo = (function () {
    function Modelo() {
        this.idMarca = new __WEBPACK_IMPORTED_MODULE_0__models_marca__["a" /* Marca */]();
    }
    return Modelo;
}());

//# sourceMappingURL=modelo.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TipoProducto */
/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */
var TipoProducto = (function () {
    function TipoProducto() {
    }
    return TipoProducto;
}());

//# sourceMappingURL=tipoProducto.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoDetalleReporte; });
/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */
var ProductoDetalleReporte = (function () {
    function ProductoDetalleReporte() {
    }
    return ProductoDetalleReporte;
}());

//# sourceMappingURL=productoDetalleReporte.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reporte; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_asignacionReparaciones__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_TipoVisitas__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_usuario__ = __webpack_require__(241);
/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */



var Reporte = (function () {
    function Reporte() {
        this.idAsignacion = new __WEBPACK_IMPORTED_MODULE_0__models_asignacionReparaciones__["a" /* AsignacionReparaciones */]();
        this.idVisita = new __WEBPACK_IMPORTED_MODULE_1__models_TipoVisitas__["a" /* TipoVisitas */]();
        this.idUsuario = new __WEBPACK_IMPORTED_MODULE_2__models_usuario__["a" /* Usuario */]();
    }
    return Reporte;
}());

//# sourceMappingURL=reporte.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoRepuestoReporte; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_producto__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_detalleCatalogoReporte__ = __webpack_require__(238);
/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */


var ProductoRepuestoReporte = (function () {
    function ProductoRepuestoReporte() {
        this.idDetalleCatalogoReporte = new __WEBPACK_IMPORTED_MODULE_1__models_detalleCatalogoReporte__["a" /* DetalleCatalogoReporte */]();
        this.idProducto = new __WEBPACK_IMPORTED_MODULE_0__models_producto__["a" /* Producto */]();
        this.cambiado = false;
        this.solicitar = false;
    }
    return ProductoRepuestoReporte;
}());

//# sourceMappingURL=productoRepuestoReporte.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteSucursal; });
var ClienteSucursal = (function () {
    function ClienteSucursal() {
    }
    return ClienteSucursal;
}());

//# sourceMappingURL=clienteSucursal.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoClienteReporte; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_models__ = __webpack_require__(36);

var ProductoClienteReporte = (function () {
    function ProductoClienteReporte() {
        this.idReporte = new __WEBPACK_IMPORTED_MODULE_0__models_models__["o" /* Reporte */]();
        this.idProductoDetalleReporte = new __WEBPACK_IMPORTED_MODULE_0__models_models__["l" /* ProductoDetalleReporte */]();
        this.idCliente = new __WEBPACK_IMPORTED_MODULE_0__models_models__["b" /* Cliente */]();
        this.idProducto = new __WEBPACK_IMPORTED_MODULE_0__models_models__["j" /* Producto */]();
        this.idProyecto = new __WEBPACK_IMPORTED_MODULE_0__models_models__["n" /* Proyectos */]();
        this.reporteMantenimientoList = new Array();
        this.idDetalleInventarioProducto = new __WEBPACK_IMPORTED_MODULE_0__models_models__["g" /* DetalleInventarioProducto */]();
    }
    return ProductoClienteReporte;
}());

//# sourceMappingURL=productoClienteReporte.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosReporteDTO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_models__ = __webpack_require__(36);

var DatosReporteDTO = (function () {
    function DatosReporteDTO() {
        this.reporte = new __WEBPACK_IMPORTED_MODULE_0__models_models__["o" /* Reporte */]();
        this.cliente = new __WEBPACK_IMPORTED_MODULE_0__models_models__["b" /* Cliente */]();
        this.producto = new __WEBPACK_IMPORTED_MODULE_0__models_models__["j" /* Producto */]();
        this.productoDetalleReporte = new __WEBPACK_IMPORTED_MODULE_0__models_models__["l" /* ProductoDetalleReporte */]();
        this.productoClienteReporte = new __WEBPACK_IMPORTED_MODULE_0__models_models__["k" /* ProductoClienteReporte */]();
        this.asignacionReparacion = new __WEBPACK_IMPORTED_MODULE_0__models_models__["a" /* AsignacionReparaciones */]();
        this.lista1 = new Array();
        this.lista2 = new Array();
        this.lista3 = new Array();
        this.lista4 = new Array();
        this.lista5 = new Array();
        this.lista6 = new Array();
        this.lista7 = new Array();
        this.lista8 = new Array();
        this.lista9 = new Array();
        this.lista10 = new Array();
        this.lista11 = new Array();
        this.lista12 = new Array();
    }
    return DatosReporteDTO;
}());

//# sourceMappingURL=datosReporteDTO.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleInventarioProducto; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_models__ = __webpack_require__(36);
/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */

var DetalleInventarioProducto = (function () {
    function DetalleInventarioProducto() {
        this.idDetalleInventario = new __WEBPACK_IMPORTED_MODULE_0__models_models__["f" /* DetalleInventario */]();
    }
    return DetalleInventarioProducto;
}());

//# sourceMappingURL=detalleInventarioProducto.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleInventario; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_models__ = __webpack_require__(36);
/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */

var DetalleInventario = (function () {
    function DetalleInventario() {
        // CabeceraInventario idCabeceraInventario:;
        this.idProducto = new __WEBPACK_IMPORTED_MODULE_0__models_models__["j" /* Producto */]();
    }
    return DetalleInventario;
}());

//# sourceMappingURL=detalleInventario.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReporteMantenimiento */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_models__ = __webpack_require__(36);

var ReporteMantenimiento = (function () {
    function ReporteMantenimiento() {
        this.idProductoRepuestoReporte = new __WEBPACK_IMPORTED_MODULE_0__models_models__["m" /* ProductoRepuestoReporte */]();
        this.idDetalleCatalogoReporte = new __WEBPACK_IMPORTED_MODULE_0__models_models__["e" /* DetalleCatalogoReporte */]();
    }
    return ReporteMantenimiento;
}());

//# sourceMappingURL=reporteMantenimiento.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Proyectos; });
/**
 * A generic model that our Master-Detail pages list, public create, public and delete.
 *
 * Change "Item" to the noun your app will use. For example, public a "Contact, public" or a
 * "Customer, public" or a "Animal, public" or something like that.
 *
 * The Items service manages creating instances of Item, public so go ahead and rename
 * that something that fits your app as well.
 */
var Proyectos = (function () {
    function Proyectos() {
    }
    return Proyectos;
}());

//# sourceMappingURL=proyectos.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchClientePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchClientePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchClientePipe = (function () {
    function SearchClientePipe() {
    }
    SearchClientePipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.cliente.toLowerCase().includes(terms);
        });
    };
    SearchClientePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'searchCliente',
        })
    ], SearchClientePipe);
    return SearchClientePipe;
}());

//# sourceMappingURL=search-cliente.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortClientePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortClientePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortClientePipe = (function () {
    function SortClientePipe() {
    }
    SortClientePipe.prototype.transform = function (array, args) {
        return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.order;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.order;
            }
            else {
                return 0;
            }
        });
    };
    SortClientePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sortCliente',
        })
    ], SortClientePipe);
    return SortClientePipe;
}());

//# sourceMappingURL=sort-cliente.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProductoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchProductoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SearchProductoPipe = (function () {
    function SearchProductoPipe() {
    }
    SearchProductoPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.codigoFabricante.toLowerCase().includes(terms);
        });
    };
    SearchProductoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'searchProducto',
        })
    ], SearchProductoPipe);
    return SearchProductoPipe;
}());

//# sourceMappingURL=search-producto.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_reporte_impresoras_reporte_impresoras__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_administracion_reportes_administracion_reportes__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_side_menu_content_side_menu_content_component__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(alertCtrl, menuCtrl, translate, 
        /* platform: Platform*/ platform, settings, config, statusBar, splashScreen) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["a" /* FirstRunPage */];
        // Settings for the SideMenuComponent
        this.sideMenuSettings = {
            accordionMode: true,
            showSelectedOption: true,
            selectedOptionClass: 'active-side-menu-option',
            subOptionIndentation: {
                md: '56px',
                ios: '64px',
                wp: '56px'
            }
        };
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_8__pages_administracion_reportes_administracion_reportes__["a" /* AdministracionReportesPage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_8__pages_administracion_reportes_administracion_reportes__["a" /* AdministracionReportesPage */] }
        ];
        this.initTranslate();
        this.initializeApp();
    }
    MyApp.prototype.initializeOptions = function () {
        this.options = new Array();
        // Load simple menu options
        // ------------------------------------------
        this.options.push({
            iconName: 'home',
            displayName: 'Home',
            component: __WEBPACK_IMPORTED_MODULE_5__pages_pages__["b" /* MainPage */],
            // This option is already selected
            selected: true
        });
        // Load options with nested items (with icons)
        // -----------------------------------------------
        this.options.push({
            displayName: 'Reportes',
            subItems: [
                {
                    iconName: 'list-box',
                    displayName: 'Administracion',
                    component: __WEBPACK_IMPORTED_MODULE_8__pages_administracion_reportes_administracion_reportes__["a" /* AdministracionReportesPage */]
                },
                {
                    iconName: 'print',
                    displayName: 'Impresoras',
                    component: __WEBPACK_IMPORTED_MODULE_7__pages_reporte_impresoras_reporte_impresoras__["a" /* ReporteImpresorasPage */]
                    // component: { ReporteImpresorasPage, isEdit: true }
                },
                {
                    iconName: 'qr-scanner',
                    displayName: 'Scanner',
                },
                {
                    iconName: 'desktop',
                    displayName: 'Monitor',
                },
                {
                    iconName: 'bookmark',
                    displayName: 'Destructora',
                },
                {
                    iconName: 'bookmarks',
                    displayName: 'Etiquetadoras',
                },
                {
                    iconName: 'clientes',
                    displayName: 'Etiquetadoras',
                }
            ]
        });
        this.options.push({
            iconName: 'user',
            displayName: 'Clientes',
        });
        // Load special options
        // -----------------------------------------------
        /*this.options.push({
            displayName: 'Special options',
            subItems: [
                {
                    iconName: 'log-in',
                    displayName: 'Login',
                    custom: {
                        isLogin: true
                    }
                },
                {
                    iconName: 'log-out',
                    displayName: 'Logout',
                    custom: {
                        isLogout: true
                    }
                },
                {
                    iconName: 'globe',
                    displayName: 'Open Google',
                    custom: {
                        isExternalLink: true,
                        externalUrl: 'http://www.google.com'
                    }
                }
            ]
        });*/
    };
    MyApp.prototype.selectOption = function (option) {
        var _this = this;
        this.menuCtrl.close().then(function () {
            if (option.custom && option.custom.isLogin) {
                _this.presentAlert('You\'ve clicked the login option!');
            }
            else if (option.custom && option.custom.isLogout) {
                _this.presentAlert('You\'ve clicked the logout option!');
            }
            else if (option.custom && option.custom.isExternalLink) {
                var url = option.custom.externalUrl;
                window.open(url, '_blank');
            }
            else {
                // Redirect to the selected page
                //	this.nav.setRoot(option.component || DetailsPage, { 'title': option.displayName });
                _this.nav.setRoot(option.component, { 'title': option.displayName });
            }
        });
    };
    MyApp.prototype.collapseMenuOptions = function () {
        this.sideMenu.collapseAllOptions();
    };
    MyApp.prototype.presentAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Information',
            message: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
            // Initialize some options
            _this.initializeOptions();
        });
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.menuCtrl.close();
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9__shared_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__shared_side_menu_content_side_menu_content_component__["a" /* SideMenuContentComponent */])
    ], MyApp.prototype, "sideMenu", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\PROYECTOS\ANGULAR\reportes\src\app\app.html"*/'<ion-menu persistent="true" [content]="content" (ionClose)="collapseMenuOptions()">\n\n  <ion-header>\n\n    <ion-toolbar color="primary">\n\n      <ion-title>{{ (sideMenuSettings.accordionMode ? \' \' : \'Default\') + \' Menu\' }}</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <!-- Side Menu -->\n\n    <side-menu-content [settings]="sideMenuSettings" [options]="options" (selectOption)="selectOption($event)"></side-menu-content>\n\n\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n\n\n\n\n\n'/*ion-inline-end:"D:\PROYECTOS\ANGULAR\reportes\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_providers__["h" /* Settings */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuRedirectEvent; });
// SideMenuRedirectEvent constant
var SideMenuRedirectEvent = 'sidemenu:redirect';
//# sourceMappingURL=side-menu-redirect-events.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametrosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
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


/*
  Generated class for the ParametrosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ParametrosProvider = (function () {
    function ParametrosProvider(http) {
        this.http = http;
        console.log('Hello ParametrosProvider Provider');
    }
    ParametrosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ParametrosProvider);
    return ParametrosProvider;
}());

//# sourceMappingURL=parametros.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
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


/*
  Generated class for the ConsultasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConsultasProvider = (function () {
    function ConsultasProvider(http) {
        this.http = http;
        console.log('Hello ConsultasProvider Provider');
    }
    ConsultasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ConsultasProvider);
    return ConsultasProvider;
}());

//# sourceMappingURL=consultas.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_usuario__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_catalogo_reporte_detalle_catalogo_reporte__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tipo_visita_tipo_visita__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cliente_cliente__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__producto_producto__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__producto_repuesto_reporte_producto_repuesto_reporte__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reporte_reporte__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cliente_sucursal_cliente_sucursal__ = __webpack_require__(234);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__usuario_usuario__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__detalle_catalogo_reporte_detalle_catalogo_reporte__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__tipo_visita_tipo_visita__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__cliente_cliente__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__producto_producto__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__producto_repuesto_reporte_producto_repuesto_reporte__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__reporte_reporte__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__cliente_sucursal_cliente_sucursal__["a"]; });











//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministracionReportesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reporte_impresoras_reporte_impresoras__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Cliente, Producto, Modelo, Marca } from '../../models/models';




/**
 * Generated class for the AdministracionReportesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdministracionReportesPage = (function () {
    function AdministracionReportesPage(navCtrl, modalCtrl, navParams, reporteProvider, api, file, loadingCtrl, fileOpener, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.reporteProvider = reporteProvider;
        this.api = api;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.fileOpener = fileOpener;
        this.toastCtrl = toastCtrl;
    }
    AdministracionReportesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.reporteProvider.reportesBySubTipo('REPORTE')
            .subscribe(function (reporte) {
            _this.reportes = reporte;
        }, function (error) { return _this.errorMessage = error; });
    };
    AdministracionReportesPage.prototype.openPdf = function (item) {
        var _this = this;
        this.showLoader();
        var blobPdf;
        this.reporteProvider.reportePdfImpresora(5).subscribe(function (data) {
            blobPdf = data; // Lets store the pdf Blob
            var filedir = _this.file.dataDirectory;
            _this.file.writeFile(//save PDF
            filedir, "reporte.pdf", blobPdf, { replace: true }).then(function () {
                _this.fileOpener.open(//open in native PDF
                filedir + 'reporte.pdf', 'application/pdf').then(function () {
                    //	this.pdfobj.active = false;
                }).catch(function (e) { return console.log('Open error', e); });
            }).catch(function (e) { return console.log('Save error', e); });
        }, function (error) {
            _this.toas(error);
        });
        this.loading.dismiss();
    };
    AdministracionReportesPage.prototype.edit = function (item) {
        var reporteDto = item;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reporte_impresoras_reporte_impresoras__["a" /* ReporteImpresorasPage */], { reporteDto: reporteDto, isEdit: true });
    };
    AdministracionReportesPage.prototype.openItem = function (item) {
        /*  let target = "_system";
          this.inAppBrowser.create(this.api.urlServices() + '/reporteService/jasper/5', target, this.optiones);
      */
        //this.openPdf();
        /* this.reporteProvider.reportePdfImpresora(5).subscribe(res => {
           var fileURL = URL.createObjectURL(res);
           window.open(fileURL);
         });*/
    };
    AdministracionReportesPage.prototype.toas = function (msj) {
        var toast = this.toastCtrl.create({
            message: '!*****  ' + msj + '  **********',
            duration: 9000,
            position: 'top'
        });
        toast.present();
    };
    AdministracionReportesPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loading.present();
    };
    AdministracionReportesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-administracion-reportes',template:/*ion-inline-start:"D:\PROYECTOS\ANGULAR\reportes\src\pages\administracion-reportes\administracion-reportes.html"*/'<!--\n  Generated template for the AdministracionReportesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button> \n    <ion-title>Administración</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-searchbar [(ngModel)]="terms"></ion-searchbar>\n  <ion-list>\n\n\n    <ion-item-sliding *ngFor="let c of reportes | searchCliente : terms">\n      <ion-item>\n        <div>\n\n          <h2>N Reporte: {{c.numeroFactura}}</h2>\n          <h2>Cod Tecn: {{c.codigoTecnico}}</h2>\n          <h2>Técnico: {{c.soporte}}</h2>\n          <h2>Fecha: {{c.fecha}}</h2>\n          <h2>Factura: {{c.factura}}</h2>\n          <h2>Serial: {{c.serial}}</h2>\n          <h2>Cliente: {{c.cliente}}</h2>\n          <h2>Estado: {{c.estado}}</h2>\n        </div>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button (click)="openItem(c)">\n          <ion-icon name="eye"></ion-icon>\n          Ver</button>\n        <button ion-button color="secondary" (click)="edit(c)">\n          <ion-icon name="create"></ion-icon>\n          Editar</button>\n        <button ion-button color="danger" (click)="openPdf(c)" download>\n          <ion-icon name="archive"></ion-icon>\n          Pdf</button>\n\n      </ion-item-options>\n\n\n\n    </ion-item-sliding>\n\n\n\n\n\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"D:\PROYECTOS\ANGULAR\reportes\src\pages\administracion-reportes\administracion-reportes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* ReporteProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], AdministracionReportesPage);
    return AdministracionReportesPage;
}());

//# sourceMappingURL=administracion-reportes.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteImpresorasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_models__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_signaturepad_signature_pad__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__administracion_reportes_administracion_reportes__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ReporteImpresorasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReporteImpresorasPage = (function () {
    function ReporteImpresorasPage(navCtrl, navParams, formBuilder, modalCtrl, loadingCtrl, detalleCatalogoReporteProvider, clienteProvider, tipoVisitaProvider, reporteProvider, clienteSucursalProvider, cdRef, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.detalleCatalogoReporteProvider = detalleCatalogoReporteProvider;
        this.clienteProvider = clienteProvider;
        this.tipoVisitaProvider = tipoVisitaProvider;
        this.reporteProvider = reporteProvider;
        this.clienteSucursalProvider = clienteSucursalProvider;
        this.cdRef = cdRef;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.signaturePadOptions = {
            'minWidth': 1,
            'canvasWidth': 500,
            'canvasHeight': 300
        };
        this.clienteSucursales = new Array();
        this.arrayPreventivoProcesamiento = [];
        this.arrayPreventivoProcesamientoIds = [Number];
        this.arrayPreventivoImagen = [];
        this.arrayPreventivoImagenIds = [Number];
        this.arrayPreventivoFijacion = [];
        this.arrayPreventivoFijacionIds = [Number];
        this.arrayPreventivoExteriores = [];
        this.arrayPreventivoExterioresIds = [Number];
        this.arrayCorrectivoRepuestosSuministros = new Array();
        this.arrayCorrectivoRepuestosImagen = new Array();
        this.arrayCorrectivoRepuestosFijacion = new Array();
        this.arrayCorrectivoRepuestosRevelado = new Array();
        this.arrayCorrectivoRepuestosAlimentacion = new Array();
        this.arrayCorrectivoSuministros = [];
        this.arrayCorrectivoImagen = [];
        this.arrayCorrectivoFijacion = [];
        this.arrayCorrectivoRevelado = [];
        this.arrayCorrectivoAlimentacion = [];
        this.reporteMantenimientoListTemp = [];
        this.datosReporteDTO = new __WEBPACK_IMPORTED_MODULE_3__models_models__["d" /* DatosReporteDTO */]();
        this.tipoVisita = new __WEBPACK_IMPORTED_MODULE_3__models_models__["p" /* TipoVisitas */]();
        this.cliente = new __WEBPACK_IMPORTED_MODULE_3__models_models__["b" /* Cliente */];
        this.producto = new __WEBPACK_IMPORTED_MODULE_3__models_models__["j" /* Producto */];
        this.modelo = new __WEBPACK_IMPORTED_MODULE_3__models_models__["i" /* Modelo */];
        this.marca = new __WEBPACK_IMPORTED_MODULE_3__models_models__["h" /* Marca */];
        this.productoDetalleReporte = new __WEBPACK_IMPORTED_MODULE_3__models_models__["l" /* ProductoDetalleReporte */];
        this.productoRepuestoReporte = new __WEBPACK_IMPORTED_MODULE_3__models_models__["m" /* ProductoRepuestoReporte */];
        this.reporte = new __WEBPACK_IMPORTED_MODULE_3__models_models__["o" /* Reporte */];
        this.usuario = new __WEBPACK_IMPORTED_MODULE_3__models_models__["q" /* Usuario */];
        this.detalleInventarioProducto = new __WEBPACK_IMPORTED_MODULE_3__models_models__["g" /* DetalleInventarioProducto */];
        this.clienteSucursal = new __WEBPACK_IMPORTED_MODULE_3__models_models__["c" /* ClienteSucursal */];
        this.productoClienteReporte = new __WEBPACK_IMPORTED_MODULE_3__models_models__["k" /* ProductoClienteReporte */];
        this.proyecto = new __WEBPACK_IMPORTED_MODULE_3__models_models__["n" /* Proyectos */];
        this.visibleCorrectivosBtns = [false, false, false, false, false, false];
        this.nombreListaCorrectivo = [];
    }
    ReporteImpresorasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.reporteForm = this.createMyForm();
        var user = JSON.parse(localStorage.getItem("AUTENTHICATION"));
        this.usuario.id = user.id;
        this.usuario.usuario = user.usuario;
        this.usuario.codigo = user.codigo;
        this.usuario.nombreCompleto = user.nombreCompleto;
        this.isEdit = (this.navParams.get('isEdit') === true);
        if (this.navParams.get('tabReporte') === undefined) {
            this.reporteTab = 'datos';
        }
        else {
            this.reporteTab = this.navParams.get('tabReporte');
        }
        this.detalleCatalogoReporteProvider.getCabeceraCatalogoReportesByTipo('CORRECTIVO').
            subscribe(function (data) {
            var c = 0;
            data.forEach(function (x) {
                _this.nombreListaCorrectivo[c] = x.descripcion;
                c++;
            });
        });
        if (this.navParams.get('reporteDto') !== undefined) {
            var idReporte = this.navParams.get('reporteDto')['id'];
            this.llenarReportePorId(idReporte);
        }
        else {
            this.llenarCatalogosPreventivos();
            this.reporteProvider.numeroReporteFormateado(this.usuario.id, 'REPORTE', 'DIAGNOSTICO').subscribe(function (data) {
                _this.numeroReporteTecnico = data['valor'];
            });
            this.reporteProvider.numeroReporte(this.usuario.id, 'REPORTE', 'DIAGNOSTICO').subscribe(function (data) {
                _this.numeroReporte = data['valor'];
            });
            this.reporte.numerofactura = this.numeroReporte;
            this.reporte.tipo = 'REPORTE';
            this.reporte.subtipo = 'IMPRESORAS';
            this.reporte.idUsuario = this.usuario;
            this.reporte.estado = 'PROCESANDO';
        }
    };
    ReporteImpresorasPage.prototype.llenarReportePorId = function (idReporte) {
        var _this = this;
        this.showLoader();
        this.reporteProvider.reportesById(idReporte).subscribe(function (data) {
            _this.reporte.numerofactura = data.idReporte.numerofactura;
            _this.productoClienteReporte = data;
            _this.cliente = data.idCliente;
            _this.reporte = data.idReporte;
            _this.numeroReporteTecnico = data.idReporte.numerofactura + '';
            _this.productoDetalleReporte = data.idProductoDetalleReporte;
            if (data.idProducto !== null) {
                _this.producto = data.idProducto;
                _this.modelo = data.idProducto.idModelo;
                _this.marca = data.idProducto.idModelo.idMarca;
            }
            if (_this.detalleInventarioProducto.id === undefined) {
                _this.detalleInventarioProducto = new __WEBPACK_IMPORTED_MODULE_3__models_models__["g" /* DetalleInventarioProducto */];
                _this.detalleInventarioProducto.serial = _this.productoClienteReporte.serie;
            }
            else {
                _this.detalleInventarioProducto = data.idDetalleInventarioProducto;
            }
            _this.clienteSucursal = data.idClienteSucursal;
            _this.clienteSucursalProvider.getByIdCliente(data.idCliente.id).subscribe(function (cs) {
                _this.clienteSucursales = cs;
                _this.clienteSucursales.forEach(function (client, index) {
                    if (_this.clienteSucursal !== null) {
                        if (client.id == _this.clienteSucursal.id) {
                            _this.clienteSucursal = _this.clienteSucursales[index];
                            return;
                        }
                    }
                });
            });
            _this.tipoVisita = data.idReporte.idVisita;
            _this.tipoVisitaProvider.getAllTipoVisitas().subscribe(function (data) {
                _this.tiposVisitas = data;
                _this.tiposVisitas.forEach(function (visita, index) {
                    if (_this.tipoVisita !== null) {
                        if (visita.id == _this.tipoVisita.id) {
                            _this.tipoVisita = _this.tiposVisitas[index];
                            _this.reporteForm.value.idTipoVisita = _this.tipoVisita.id;
                            return;
                        }
                    }
                });
            });
            _this.llenarCatalogosCorrectivos();
            _this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('PROCESAMIENTO').subscribe(function (catalogo) {
                _this.arrayPreventivoProcesamientoIds = _this.loadReportePreventivosIds(catalogo, data.reporteMantenimientoList);
                _this.arrayPreventivoProcesamiento = _this.loadReportePreventivos(catalogo, data.reporteMantenimientoList);
            });
            /*
                  this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('IMAGEN_PREVENTIVO').subscribe(catalogo => {
                    this.arrayPreventivoImagenIds = this.loadReportePreventivosIds(catalogo, data.reporteMantenimientoList);
                    this.arrayPreventivoImagen = this.loadReportePreventivos(catalogo, data.reporteMantenimientoList);
                  });
            
                   this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('FIJACION_PREVENTIVO').subscribe(catalogo => {
                      this.arrayPreventivoFijacion = catalogo;
                      this.arrayPreventivoFijacionIds = this.loadReportePreventivosIds(catalogo, data.reporteMantenimientoList);
                    });
              
                    this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('EXTERIORES').subscribe(catalogo => {
                      this.arrayPreventivoExteriores = catalogo;
                      this.arrayPreventivoExterioresIds = this.loadReportePreventivosIds(catalogo, data.reporteMantenimientoList);
                      this.loading.dismiss();
                    }, error => { },
                      function () { console.log('FINALIZADO ==  :) '); }
                    );*/
            _this.reporteMantenimientoListTemp = data.reporteMantenimientoList;
            console.log('TAMANIO0  DE MANTENIMIETNO =' + data.reporteMantenimientoList.length);
            //VISIVILIDAD BOTON VER CORRECTIVOS
            data.reporteMantenimientoList.filter(function (sw) { return sw.idProductoRepuestoReporte !== null; }).forEach(function (element) {
                _this.llenarRepuestos(element.idProductoRepuestoReporte.idDetalleCatalogoReporte.idCabecera.codigo, element.idProductoRepuestoReporte);
            });
            //FIN VISIVILIDAD BOTON VER CORRECTIVOS
            /*                                   FILL FORM VALUES                                                                                             */
            _this.reporteForm.patchValue({
                idTipoVisita: _this.tipoVisita.id,
                idClienteSucursal: _this.clienteSucursal.id,
                referenciaCtrl: _this.reporte.referencia,
                facturaCtrl: _this.reporte.factura,
                sintomas: _this.reporte.sintomasEquipo,
                observacionesRecomendaciones: _this.reporte.observacionesRecomendaciones,
                notas: _this.reporte.notas,
                atencion: _this.productoClienteReporte.atencion,
                ipEquipo: _this.productoClienteReporte.ipEquipo,
                puertoUsb: _this.productoClienteReporte.puertoUsb,
                contadorTotalAnterior: _this.productoDetalleReporte.contadorTotalAnterior,
                contadorColorAnterior: _this.productoDetalleReporte.contadorColorAnterior,
                contadorBnAnterior: _this.productoDetalleReporte.contadorBnAnterior,
                contadorTotalActual: _this.productoDetalleReporte.contadorTotalActual,
                contadorColorActual: _this.productoDetalleReporte.contadorColorActual,
                contadorBnActual: _this.productoDetalleReporte.contadorBnActual,
                contadorTotalImpReal: _this.productoDetalleReporte.contadorTotalImpReal,
                contadorColorImpReal: _this.productoDetalleReporte.contadorColorImpReal,
                contadorBnImpReal: _this.productoDetalleReporte.contadorBnImpReal,
                mantenimiento: _this.productoDetalleReporte.mantenimiento,
                otros: _this.productoDetalleReporte.otros,
                servicioFacturar: _this.productoDetalleReporte.servicioFacturar,
                servicioFacturarEstado: _this.productoDetalleReporte.servicioFacturarEstado
            });
            /*                                 END  FILL FORM VALUES                                                                                             */
            _this.loading.dismiss();
        });
    };
    ReporteImpresorasPage.prototype.guardar = function () {
        var _this = this;
        if (this.isEdit) {
            // this.reporte.numerofactura = this.numeroReporte;
            this.reporte.referencia = this.reporteForm.value.referenciaCtrl;
            this.reporte.factura = this.reporteForm.value.facturaCtrl;
            this.reporte.sintomasEquipo = this.reporteForm.value.sintomas;
            this.reporte.observacionesRecomendaciones = this.reporteForm.value.observacionesRecomendaciones;
            this.reporte.notas = this.reporteForm.value.notas;
            this.reporte.firmaClienteBase64 = this.signaturePad.toDataURL();
            //  this.proyecto.id = 10;
            this.productoClienteReporte.idProyecto = this.proyecto;
            this.productoClienteReporte.atencion = this.reporteForm.value.atencion;
            this.productoClienteReporte.ipEquipo = this.reporteForm.value.ipEquipo;
            this.productoClienteReporte.puertoUsb = this.reporteForm.value.puertoUsb;
            this.productoDetalleReporte.contadorTotalAnterior = this.reporteForm.value.contadorTotalAnterior;
            this.productoDetalleReporte.contadorColorAnterior = this.reporteForm.value.contadorColorAnterior;
            this.productoDetalleReporte.contadorBnAnterior = this.reporteForm.value.contadorBnAnterior;
            this.productoDetalleReporte.contadorTotalActual = this.reporteForm.value.contadorTotalActual;
            this.productoDetalleReporte.contadorColorActual = this.reporteForm.value.contadorColorActual;
            this.productoDetalleReporte.contadorBnActual = this.reporteForm.value.contadorBnActual;
            this.productoDetalleReporte.contadorTotalImpReal = this.reporteForm.value.contadorTotalImpReal;
            this.productoDetalleReporte.contadorColorImpReal = this.reporteForm.value.contadorColorImpReal;
            this.productoDetalleReporte.contadorBnImpReal = this.reporteForm.value.contadorBnImpReal;
            this.productoDetalleReporte.mantenimiento = this.reporteForm.value.mantenimiento;
            this.productoDetalleReporte.otros = this.reporteForm.value.otros;
            this.productoDetalleReporte.servicioFacturar = this.reporteForm.value.servicioFacturar;
            this.productoDetalleReporte.servicioFacturarEstado = this.reporteForm.value.servicioFacturarEstado;
            this.datosReporteDTO.productoDetalleReporte = this.productoDetalleReporte;
            this.datosReporteDTO.reporte = this.reporte;
            this.datosReporteDTO.producto = this.producto;
            this.datosReporteDTO.serie = this.detalleInventarioProducto.serial;
            this.datosReporteDTO.cliente = this.cliente;
            this.datosReporteDTO.usuarios = this.usuario;
            this.datosReporteDTO.idClienteSucursal = this.reporteForm.value.idClienteSucursal;
            this.datosReporteDTO.idTipoVisita = this.reporteForm.value.idTipoVisita;
            this.datosReporteDTO.productoClienteReporte = this.productoClienteReporte;
            /*  this.datosReporteDTO.lista1 = this.listPrev(this.arrayPreventivoProcesamientoIds, this.arrayPreventivoProcesamiento);
              this.datosReporteDTO.lista2 = this.listPrev(this.arrayPreventivoImagenIds, this.arrayPreventivoImagen);
              this.datosReporteDTO.lista3 = this.listPrev(this.arrayPreventivoFijacionIds, this.arrayPreventivoFijacion);
              this.datosReporteDTO.lista4 = this.listPrev(this.arrayPreventivoExterioresIds, this.arrayPreventivoExteriores);
        */
            this.datosReporteDTO.lista5 = this.listCorrEdition(this.arrayCorrectivoRepuestosSuministros, this.reporteMantenimientoListTemp, this.arrayCorrectivoSuministros);
            this.datosReporteDTO.lista6 = this.listCorrEdition(this.arrayCorrectivoRepuestosImagen, this.reporteMantenimientoListTemp, this.arrayCorrectivoImagen);
            this.datosReporteDTO.lista7 = this.listCorrEdition(this.arrayCorrectivoRepuestosFijacion, this.reporteMantenimientoListTemp, this.arrayCorrectivoFijacion);
            this.datosReporteDTO.lista8 = this.listCorrEdition(this.arrayCorrectivoRepuestosRevelado, this.reporteMantenimientoListTemp, this.arrayCorrectivoRevelado);
            this.datosReporteDTO.lista5.forEach(function (x) {
                console.log(x);
            });
            /*  this.datosReporteDTO.lista5.forEach(x => {
                console.log(x);
              });
              console.log('*********************************************');
              console.log('*********************************************');
        
              this.arrayCorrectivoRepuestosSuministros.forEach(x => {
                console.log(x);
        
              });*/
            /*  this.datosReporteDTO.lista6.forEach(x => {
                console.log(x);
              });
        */
            //  console.log(JSON.stringify(this.datosReporteDTO));
            this.showLoaderSave();
            this.reporteProvider.updateAllReporteImpresoras(this.datosReporteDTO).then(function (response) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__administracion_reportes_administracion_reportes__["a" /* AdministracionReportesPage */]);
                _this.loading.dismiss();
                _this.msgToast(true);
            }).catch(function (error) {
                _this.msgToast(false);
                _this.loading.dismiss();
            });
        }
        else {
            this.reporte.numerofactura = this.numeroReporte;
            this.reporte.referencia = this.reporteForm.value.referenciaCtrl;
            this.reporte.factura = this.reporteForm.value.facturaCtrl;
            this.reporte.sintomasEquipo = this.reporteForm.value.sintomas;
            this.reporte.observacionesRecomendaciones = this.reporteForm.value.observacionesRecomendaciones;
            this.reporte.notas = this.reporteForm.value.notas;
            this.reporte.firmaClienteBase64 = this.signaturePad.toDataURL();
            this.reporte.usuarioCreacion = this.usuario.usuario;
            this.productoClienteReporte.atencion = this.reporteForm.value.atencion;
            this.productoClienteReporte.ipEquipo = this.reporteForm.value.ipEquipo;
            this.productoClienteReporte.puertoUsb = this.reporteForm.value.puertoUsb;
            this.productoDetalleReporte.contadorTotalAnterior = this.reporteForm.value.contadorTotalAnterior;
            this.productoDetalleReporte.contadorColorAnterior = this.reporteForm.value.contadorColorAnterior;
            this.productoDetalleReporte.contadorBnAnterior = this.reporteForm.value.contadorBnAnterior;
            this.productoDetalleReporte.contadorTotalActual = this.reporteForm.value.contadorTotalActual;
            this.productoDetalleReporte.contadorColorActual = this.reporteForm.value.contadorColorActual;
            this.productoDetalleReporte.contadorBnActual = this.reporteForm.value.contadorBnActual;
            this.productoDetalleReporte.contadorTotalImpReal = this.reporteForm.value.contadorTotalImpReal;
            this.productoDetalleReporte.contadorColorImpReal = this.reporteForm.value.contadorColorImpReal;
            this.productoDetalleReporte.contadorBnImpReal = this.reporteForm.value.contadorBnImpReal;
            this.productoDetalleReporte.mantenimiento = this.reporteForm.value.mantenimiento;
            this.productoDetalleReporte.otros = this.reporteForm.value.otros;
            this.productoDetalleReporte.servicioFacturar = this.reporteForm.value.servicioFacturar;
            this.productoDetalleReporte.servicioFacturarEstado = this.reporteForm.value.servicioFacturarEstado;
            this.datosReporteDTO.productoDetalleReporte = this.productoDetalleReporte;
            this.datosReporteDTO.reporte = this.reporte;
            this.datosReporteDTO.producto = this.producto;
            this.datosReporteDTO.serie = this.detalleInventarioProducto.serial;
            this.datosReporteDTO.cliente = this.cliente;
            this.datosReporteDTO.usuarios = this.usuario;
            this.datosReporteDTO.idClienteSucursal = this.reporteForm.value.idClienteSucursal;
            this.datosReporteDTO.idTipoVisita = this.reporteForm.value.idTipoVisita;
            this.datosReporteDTO.productoClienteReporte = this.productoClienteReporte;
            this.datosReporteDTO.lista1 = this.listPrev(this.arrayPreventivoProcesamientoIds, this.arrayPreventivoProcesamiento);
            this.datosReporteDTO.lista2 = this.listPrev(this.arrayPreventivoImagenIds, this.arrayPreventivoImagen);
            this.datosReporteDTO.lista3 = this.listPrev(this.arrayPreventivoFijacionIds, this.arrayPreventivoFijacion);
            this.datosReporteDTO.lista4 = this.listPrev(this.arrayPreventivoExterioresIds, this.arrayPreventivoExteriores);
            this.datosReporteDTO.lista5 = this.listCorr(this.arrayCorrectivoRepuestosSuministros);
            this.datosReporteDTO.lista6 = this.listCorr(this.arrayCorrectivoRepuestosImagen);
            this.datosReporteDTO.lista7 = this.listCorr(this.arrayCorrectivoRepuestosFijacion);
            this.datosReporteDTO.lista8 = this.listCorr(this.arrayCorrectivoRepuestosRevelado);
            console.log(this.datosReporteDTO);
            this.showLoaderSave();
            this.reporteProvider.saveAllReporteImpresoras(this.datosReporteDTO).then(function (response) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__administracion_reportes_administracion_reportes__["a" /* AdministracionReportesPage */]);
                _this.loading.dismiss();
                _this.msgToast(true);
            }).catch(function (error) {
                _this.msgToast(false);
                _this.loading.dismiss();
            });
        }
    };
    ReporteImpresorasPage.prototype.listPrev = function (ids, catalogos) {
        var list = [];
        var catalogo;
        var idSelected;
        catalogos.forEach(function (catalogo_) {
            catalogo = new __WEBPACK_IMPORTED_MODULE_3__models_models__["e" /* DetalleCatalogoReporte */]();
            catalogo = catalogo_;
            for (var n = 0; n <= ids.length - 1; n++) {
                idSelected = parseInt(ids[n] + '');
                if (idSelected === catalogo.id) {
                    catalogo.seleccion = true;
                    break;
                }
                else {
                    catalogo.seleccion = false;
                }
            }
            list.push(catalogo);
        });
        return list;
    };
    ReporteImpresorasPage.prototype.listCorrEdition = function (productoRepuestoReportes, reporteMantenimientoList, arrayCorrectivo) {
        var list = new Array();
        var listRes = [];
        var detalleCatalogoReporte;
        var reporteMantenimientoListFiltered = [];
        reporteMantenimientoList.filter(function (sw) { return sw.idProductoRepuestoReporte !== null; }).forEach(function (element) {
            reporteMantenimientoListFiltered.push(element);
        });
        productoRepuestoReportes.forEach(function (productoRepuestoRs) {
            detalleCatalogoReporte = new __WEBPACK_IMPORTED_MODULE_3__models_models__["e" /* DetalleCatalogoReporte */]();
            detalleCatalogoReporte = productoRepuestoRs.idDetalleCatalogoReporte;
            if (reporteMantenimientoListFiltered.length > 0) {
                for (var n = 0; n <= reporteMantenimientoListFiltered.length - 1; n++) {
                    if (productoRepuestoRs.idDetalleCatalogoReporte.id === reporteMantenimientoListFiltered[n].idProductoRepuestoReporte.idDetalleCatalogoReporte.id) {
                        detalleCatalogoReporte.idReporteMantenimiento = reporteMantenimientoListFiltered[n].id;
                        detalleCatalogoReporte.seleccion = true;
                        detalleCatalogoReporte.codigoRepuesto = productoRepuestoRs.idProducto.codigoFabricante + '';
                        detalleCatalogoReporte.cambiado = productoRepuestoRs.cambiado;
                        detalleCatalogoReporte.solicitar = productoRepuestoRs.solicitar;
                        detalleCatalogoReporte.porcentaje = productoRepuestoRs.porcentaje;
                        detalleCatalogoReporte.tipoRepuesto = productoRepuestoRs.cambiado ? 'C' : 'S';
                        detalleCatalogoReporte.idProductoRepuestoReporte = reporteMantenimientoListFiltered[n].idProductoRepuestoReporte.id;
                        break;
                    }
                    else {
                        detalleCatalogoReporte.seleccion = (productoRepuestoRs.id !== null);
                        detalleCatalogoReporte.idProductoRepuestoReporte = productoRepuestoRs.id;
                        detalleCatalogoReporte.codigoRepuesto = productoRepuestoRs.idProducto.codigoFabricante + '';
                        detalleCatalogoReporte.cambiado = productoRepuestoRs.cambiado;
                        detalleCatalogoReporte.solicitar = productoRepuestoRs.solicitar;
                        detalleCatalogoReporte.porcentaje = productoRepuestoRs.porcentaje;
                        detalleCatalogoReporte.tipoRepuesto = productoRepuestoRs.cambiado ? 'C' : 'S';
                    }
                }
            }
            else {
                detalleCatalogoReporte.idProductoRepuestoReporte = productoRepuestoRs.id;
                detalleCatalogoReporte.seleccion = true;
            }
            list.push(detalleCatalogoReporte);
        });
        arrayCorrectivo.forEach(function (catalogo) {
            detalleCatalogoReporte = new __WEBPACK_IMPORTED_MODULE_3__models_models__["e" /* DetalleCatalogoReporte */]();
            detalleCatalogoReporte = catalogo;
            for (var n = 0; n <= list.length - 1; n++) {
                if (detalleCatalogoReporte.id === list[n].id) {
                    detalleCatalogoReporte.idReporteMantenimiento = list[n].idReporteMantenimiento;
                    detalleCatalogoReporte.idProductoRepuestoReporte = list[n].idProductoRepuestoReporte;
                    detalleCatalogoReporte.codigoRepuesto = list[n].codigoRepuesto;
                    detalleCatalogoReporte.cambiado = list[n].cambiado;
                    detalleCatalogoReporte.solicitar = list[n].solicitar;
                    detalleCatalogoReporte.porcentaje = list[n].porcentaje;
                    detalleCatalogoReporte.tipoRepuesto = list[n].cambiado ? 'C' : 'S';
                    detalleCatalogoReporte.seleccion = true;
                    break;
                }
                else {
                    detalleCatalogoReporte.idReporteMantenimiento = list[n].idReporteMantenimiento;
                    detalleCatalogoReporte.seleccion = false;
                }
            }
            listRes.push(detalleCatalogoReporte);
        });
        return listRes;
    };
    ReporteImpresorasPage.prototype.listCorr = function (ids) {
        var list = new Array();
        var obj;
        ids.forEach(function (data) {
            obj = new __WEBPACK_IMPORTED_MODULE_3__models_models__["e" /* DetalleCatalogoReporte */]();
            obj.idProductoRepuestoReporte = data.id;
            obj.codigoRepuesto = data.idProducto.codigoFabricante;
            obj.cambiado = data.cambiado;
            obj.solicitar = data.solicitar;
            obj.porcentaje = data.porcentaje;
            obj.tipoRepuesto = obj.cambiado ? 'C' : 'S';
            obj.seleccion = true;
            list.push(obj);
        });
        return list;
    };
    ReporteImpresorasPage.prototype.loadReportePreventivos = function (repuestos, reporteMantenimientoList) {
        var list = [];
        var catalogo;
        repuestos.forEach(function (catalogoReporte) {
            catalogo = new __WEBPACK_IMPORTED_MODULE_3__models_models__["e" /* DetalleCatalogoReporte */]();
            catalogo = catalogoReporte;
            var keepGoing = true;
            reporteMantenimientoList.filter(function (sw) { return sw.idDetalleCatalogoReporte !== null; }).forEach(function (mantenimiento) {
                if (catalogoReporte.id === mantenimiento.idDetalleCatalogoReporte.id && mantenimiento.estado === true) {
                    catalogo.seleccion = true;
                    catalogo.idReporteMantenimiento = mantenimiento.id;
                }
                /*  if (keepGoing) {
                   
                    keepGoing = false;
                  }*/
            });
            list.push(catalogo);
        });
        return list;
    };
    ReporteImpresorasPage.prototype.loadReportePreventivosIds = function (arrayPreventivos, reporteMantenimientoList) {
        var _this = this;
        var idList = [Number];
        if (arrayPreventivos !== null && reporteMantenimientoList !== null) {
            arrayPreventivos.forEach(function (catalogo) {
                reporteMantenimientoList.filter(function (sw) { return sw.idDetalleCatalogoReporte !== null; }).forEach(function (element) {
                    if (element.idDetalleCatalogoReporte.id === catalogo.id) {
                        _this.someData = catalogo.id;
                        idList.push(_this.someData);
                    }
                });
            });
        }
        return idList;
    };
    ReporteImpresorasPage.prototype.loadReporteCorrectivosIds = function (arrayPreventivos, reporteMantenimientoList) {
        var _this = this;
        var idList = [Number];
        if (arrayPreventivos !== null && reporteMantenimientoList !== null) {
            arrayPreventivos.forEach(function (catalogo) {
                reporteMantenimientoList.filter(function (sw) { return sw.idProductoRepuestoReporte !== null; }).forEach(function (element) {
                    if (element.idDetalleCatalogoReporte.id === catalogo.id) {
                        _this.someData = catalogo.id;
                        idList.push(_this.someData);
                    }
                });
            });
        }
        return idList;
    };
    ReporteImpresorasPage.prototype.llenarRepuestos = function (tipo, productoRepuestoReporte) {
        console.log(tipo + ' |  ' + productoRepuestoReporte);
        if (tipo === 'SUMINISTROS') {
            this.arrayCorrectivoRepuestosSuministros.push(productoRepuestoReporte);
            this.visibleCorrectivosBtns[0] = true;
        }
        if (tipo === 'IMAGEN_CORRECTIVO') {
            this.arrayCorrectivoRepuestosImagen.push(productoRepuestoReporte);
            this.visibleCorrectivosBtns[1] = true;
        }
        if (tipo === 'FIJACION_CORRECTIVO') {
            this.arrayCorrectivoRepuestosFijacion.push(productoRepuestoReporte);
            this.visibleCorrectivosBtns[2] = true;
        }
        if (tipo === 'REVELADO') {
            this.arrayCorrectivoRepuestosRevelado.push(productoRepuestoReporte);
            this.visibleCorrectivosBtns[3] = true;
        }
        if (tipo === 'ALIMENTACION') {
            this.arrayCorrectivoRepuestosAlimentacion.push(productoRepuestoReporte);
            this.visibleCorrectivosBtns[4] = true;
        }
    };
    ReporteImpresorasPage.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    ReporteImpresorasPage.prototype.prueba = function () {
    };
    ReporteImpresorasPage.prototype.ionViewDidLoad = function () {
    };
    ReporteImpresorasPage.prototype.openModalCliente = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ModalSearchClientePage');
        addModal.onDidDismiss(function (item) {
            if (item !== undefined) {
                _this.cliente = item;
                _this.clienteSucursalProvider.getByIdCliente(_this.cliente.id).subscribe(function (data) {
                    _this.clienteSucursales = data;
                });
            }
        });
        addModal.present();
    };
    ReporteImpresorasPage.prototype.openModalProducto = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ModalSearchProductoPage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.producto = item;
                _this.marca = _this.producto.idModelo.idMarca;
                _this.modelo = _this.producto.idModelo;
            }
        });
        addModal.present();
    };
    ReporteImpresorasPage.prototype.openModalCorrectivos = function (cabecera) {
        var _this = this;
        this.showLoader();
        var addModal = this.modalCtrl.create('ModalCorrectivosPage', { cabecera: cabecera, producto: this.producto });
        addModal.onDidDismiss(function (item) {
            // console.log('CERRARRRR MODAL !!!!!!!!!' + item.productoRepuestoReporte);
            if ((item) && item.productoRepuestoReporte !== undefined) {
                _this.llenarRepuestos(item.cabecera, item.productoRepuestoReporte);
            }
        });
        addModal.present();
        this.loading.dismiss();
    };
    ReporteImpresorasPage.prototype.openModalCorrectivosSeleccionados = function (tipo) {
        var _this = this;
        this.showLoader();
        var repuestos;
        if (tipo === 'SUMINISTROS') {
            repuestos = this.arrayCorrectivoRepuestosSuministros;
        }
        if (tipo === 'IMAGEN_CORRECTIVO') {
            repuestos = this.arrayCorrectivoRepuestosImagen;
        }
        if (tipo === 'FIJACION_CORRECTIVO') {
            repuestos = this.arrayCorrectivoRepuestosFijacion;
        }
        if (tipo === 'REVELADO') {
            repuestos = this.arrayCorrectivoRepuestosRevelado;
        }
        if (tipo === 'ALIMENTACION') {
            repuestos = this.arrayCorrectivoRepuestosAlimentacion;
        }
        var addModal = this.modalCtrl.create('ModalRepuestosSeleccionadosPage', { cabecera: tipo, arrayRepuestos: repuestos });
        addModal.onDidDismiss(function (item) {
            if (item.arrayRepuestos !== undefined) {
                _this.actualizarRepuestos(item.cabecera, item.arrayRepuestos);
            }
        });
        addModal.present();
        this.loading.dismiss();
    };
    ReporteImpresorasPage.prototype.actualizarRepuestos = function (tipo, arrayCorrectivos) {
        if (tipo === 'SUMINISTROS') {
            this.arrayCorrectivoRepuestosSuministros = arrayCorrectivos;
        }
        if (tipo === 'IMAGEN_CORRECTIVO') {
            this.arrayCorrectivoRepuestosImagen = arrayCorrectivos;
        }
        if (tipo === 'FIJACION_CORRECTIVO') {
            this.arrayCorrectivoRepuestosFijacion = arrayCorrectivos;
        }
        if (tipo === 'REVELADO') {
            this.arrayCorrectivoRepuestosRevelado = arrayCorrectivos;
        }
        if (tipo === 'ALIMENTACION') {
            this.arrayCorrectivoRepuestosAlimentacion = arrayCorrectivos;
        }
    };
    ReporteImpresorasPage.prototype.contador = function (valor) {
        if (this.productoDetalleReporte.contadorColorAnterior == undefined || this.productoDetalleReporte.contadorColorAnterior === null) {
            this.productoDetalleReporte.contadorColorAnterior = 0;
        }
        if (this.productoDetalleReporte.contadorBnAnterior == undefined || this.productoDetalleReporte.contadorBnAnterior === null) {
            this.productoDetalleReporte.contadorBnAnterior = 0;
        }
        if (this.productoDetalleReporte.contadorColorActual == undefined || this.productoDetalleReporte.contadorColorActual === null) {
            this.productoDetalleReporte.contadorColorActual = 0;
        }
        if (this.productoDetalleReporte.contadorBnActual == undefined || this.productoDetalleReporte.contadorBnActual === null) {
            this.productoDetalleReporte.contadorBnActual = 0;
        }
        this.productoDetalleReporte.contadorTotalAnterior = parseFloat(this.productoDetalleReporte.contadorColorAnterior + '') +
            parseFloat(this.productoDetalleReporte.contadorBnAnterior + '');
        this.productoDetalleReporte.contadorTotalActual = parseFloat(this.productoDetalleReporte.contadorColorActual + '') +
            parseFloat(this.productoDetalleReporte.contadorBnActual + '');
        this.productoDetalleReporte.contadorTotalImpReal = parseFloat(this.productoDetalleReporte.contadorTotalAnterior + '') +
            parseFloat(this.productoDetalleReporte.contadorTotalActual + '');
        this.productoDetalleReporte.contadorColorImpReal = parseFloat(this.productoDetalleReporte.contadorColorAnterior + '') -
            parseFloat(this.productoDetalleReporte.contadorColorActual + '');
        this.productoDetalleReporte.contadorBnImpReal = parseFloat(this.productoDetalleReporte.contadorBnAnterior + '') -
            parseFloat(this.productoDetalleReporte.contadorBnActual + '');
    };
    ReporteImpresorasPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación',
            message: 'Esta seguro de guardar este Reporte?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'Cancelar',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Guardar',
                    handler: function () {
                        _this.guardar();
                    }
                }
            ]
        });
        alert.present();
    };
    ReporteImpresorasPage.prototype.ngAfterViewInit = function () {
        // this.signaturePad is now available
        //  this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
        //   this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    };
    ReporteImpresorasPage.prototype.clearSignature = function () {
        this.signaturePad.clear();
    };
    ReporteImpresorasPage.prototype.llenarCatalogosPreventivos = function () {
        var _this = this;
        this.tipoVisitaProvider.getAllTipoVisitas().subscribe(function (data) {
            _this.tiposVisitas = data;
        });
        //this.showLoader();
        this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('PROCESAMIENTO').subscribe(function (data) {
            _this.arrayPreventivoProcesamiento = data;
            //   this.loading.dismiss();
        });
        this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('IMAGEN_PREVENTIVO').subscribe(function (data) {
            _this.arrayPreventivoImagen = data;
        });
        this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('FIJACION_PREVENTIVO').subscribe(function (data) {
            _this.arrayPreventivoFijacion = data;
        });
        this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('EXTERIORES').subscribe(function (data) {
            _this.arrayPreventivoExteriores = data;
        });
    };
    ReporteImpresorasPage.prototype.llenarCatalogosCorrectivos = function () {
        var _this = this;
        this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('SUMINISTROS').subscribe(function (data) {
            console.log(' CARGANDO...........  ');
            _this.arrayCorrectivoSuministros = data;
        });
        this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('IMAGEN_CORRECTIVO').subscribe(function (data) {
            _this.arrayCorrectivoImagen = data;
        });
        this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('FIJACION_CORRECTIVO').subscribe(function (data) {
            _this.arrayCorrectivoFijacion = data;
        });
        this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('REVELADO').subscribe(function (data) {
            _this.arrayCorrectivoRevelado = data;
        });
        this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo('ALIMENTACION').subscribe(function (data) {
            _this.arrayCorrectivoAlimentacion = data;
            console.log(' CARGADO  ');
        });
    };
    ReporteImpresorasPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loading.present();
    };
    ReporteImpresorasPage.prototype.showLoaderSave = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Procesando...'
        });
        this.loading.present();
    };
    ReporteImpresorasPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            reporteformu: [],
            cliente: [''],
            ruc: [''],
            atencion: [this.productoClienteReporte.atencion, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            ipEquipo: [this.productoClienteReporte.ipEquipo, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            puertoUsb: [this.productoClienteReporte.puertoUsb],
            direccion: [''],
            ciudad: [''],
            email: [''],
            telefono: [''],
            telefono2: [''],
            idTipoVisita: [this.tipoVisita.id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            idClienteSucursal: [this.clienteSucursal.id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            facturaCtrl: [this.reporte.factura],
            referenciaCtrl: [this.reporte.referencia, ''],
            equipoProducto: [''],
            marca: [''],
            modelo: [''],
            serie: [],
            contadorTotalAnterior: [''],
            contadorColorAnterior: [],
            contadorBnAnterior: [],
            contadorTotalActual: [],
            contadorColorActual: [],
            contadorBnActual: [],
            contadorTotalImpReal: [],
            contadorColorImpReal: [],
            contadorBnImpReal: [],
            mantenimiento: [],
            otros: [],
            servicioFacturar: [],
            servicioFacturarEstado: [],
            observacionesRecomendaciones: [],
            notas: [],
            sintomas: [],
            nulo: [],
            botonCliente: [],
            sortButton: [],
            busqueda: [],
            signature: [this.reporte.firmaClienteBase64, ''],
            lista1: [], lista2: [], lista3: [], lista4: [], lista5: [], lista6: [],
            lista7: [], lista8: [], lista9: [], lista10: [], lista11: [], lista12: [],
        });
    };
    ReporteImpresorasPage.prototype.msgToast = function (succes) {
        var msg;
        var css_Class;
        if (succes) {
            msg = "Reporte Guardado Correctamente";
            css_Class = "toastSucces";
        }
        else {
            msg = "Error al guardar el Reporte";
            css_Class = "toastError";
        }
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top',
            cssClass: css_Class
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_angular2_signaturepad_signature_pad__["SignaturePad"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_signaturepad_signature_pad__["SignaturePad"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_signaturepad_signature_pad__["SignaturePad"]) === "function" && _a || Object)
    ], ReporteImpresorasPage.prototype, "signaturePad", void 0);
    ReporteImpresorasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reporte-impresoras',template:/*ion-inline-start:"D:\PROYECTOS\ANGULAR\reportes\src\pages\reporte-impresoras\reporte-impresoras.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n    <form [formGroup]="reporteForm">\n\n\n\n        <ion-row>\n            <ion-col text-center>\n                <ion-title>Reporte Técnico</ion-title>\n                <ion-title>N° {{ numeroReporteTecnico }}</ion-title>\n                <ion-title>{{ usuario.codigo }}</ion-title>\n            </ion-col>\n        </ion-row>\n\n\n\n        <div padding>\n            <ion-segment [(ngModel)]="reporteTab" name="reportename" formControlName="reporteformu" style="vertical-align: middle">\n                <ion-segment-button value="datos">\n                    <ion-icon name="person"></ion-icon>\n                </ion-segment-button>\n                <ion-segment-button value="equipo">\n                    <ion-icon name="print"></ion-icon>\n                </ion-segment-button>\n                <ion-segment-button value="preventivo">\n                    <ion-icon name="barcode"></ion-icon>\n                </ion-segment-button>\n                <ion-segment-button value="correctivo">\n                    <ion-icon name="barcode"></ion-icon>\n                </ion-segment-button>\n                <ion-segment-button value="observaciones">\n                    <ion-icon name="list-box"></ion-icon>\n                </ion-segment-button>\n                <ion-segment-button value="cliente">\n                    <ion-icon name="create"></ion-icon>\n                </ion-segment-button>\n\n            </ion-segment>\n        </div>\n\n\n        <div [ngSwitch]="reporteTab">\n            <ion-list *ngSwitchCase="\'datos\'">\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <ion-title>Datos generales</ion-title>\n                        <br/>\n\n                        <ion-list>\n\n\n\n                            <ion-item>\n\n                                <ion-grid>\n                                    <ion-row align-items-start>\n\n                                        <ion-col>\n                                            <button ion-button full (click)="openModalCliente()">\n                                                <ion-icon name="search"> Buscar Cliente </ion-icon>\n                                            </button>\n                                        </ion-col>\n\n\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n\n\n                            <ion-item>\n                                <ion-label floating>Referencia</ion-label>\n                                <ion-input type="text" [(ngModel)]="reporte.referencia" formControlName="referenciaCtrl"></ion-input>\n                            </ion-item>\n\n                            <!-- <ion-item>\n                                <ion-label floating>Factura #</ion-label>\n                                <ion-input type="text" ([ngModel])="reporte.factura" formControlName="facturaCtrl"></ion-input>\n                            </ion-item>-->\n\n                            <ion-item>\n                                <ion-label floating>Factura #</ion-label>\n                                <ion-input type="text" [(ngModel)]="reporte.factura" formControlName="facturaCtrl"></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label floating>Atención</ion-label>\n                                <ion-input type="text" [(ngModel)]="productoClienteReporte.atencion" formControlName="atencion"></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label floating>Correo</ion-label>\n                                <ion-input type="text" [(ngModel)]="cliente.email" style="pointer-events: none" formControlName="email"></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label floating>Empresa/Cliente</ion-label>\n                                <ion-input type="text" [(ngModel)]="cliente.cliente" style="pointer-events: none" formControlName="cliente"></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label floating>No. RUC</ion-label>\n                                <ion-input type="text" [(ngModel)]="cliente.ruc" style="pointer-events: none" formControlName="ruc"></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label floating>Telefono</ion-label>\n                                <ion-input type="text" [(ngModel)]="cliente.telefono" style="pointer-events: none" formControlName="telefono"></ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label floating>Telefono 2</ion-label>\n                                <ion-input type="text" [(ngModel)]="cliente.telefono2" style="pointer-events: none" formControlName="telefono2"></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label floating>Dirección</ion-label>\n                                <ion-input type="text" [(ngModel)]="cliente.direccion" style="pointer-events: none" formControlName="direccion"></ion-input>\n                            </ion-item>\n\n\n                            <ion-item>\n                                <ion-label floating>Ciudad</ion-label>\n                                <ion-input type="text" [(ngModel)]="cliente.ciudad" style="pointer-events: none" formControlName="ciudad"></ion-input>\n                            </ion-item>\n\n\n\n                            <!--   <ion-item>\n                                <ion-label floating>Correo</ion-label>\n                                <ion-input type="text" ([ngModel])="cliente.email" style="pointer-events: none" formControlName="email"></ion-input>\n                            </ion-item>\n-->\n\n\n\n                            <ion-item>\n                                <ion-label floating>Tipo visita</ion-label>\n                                <ion-select ([ngModel])="tipoVisita.id" formControlName="idTipoVisita">\n                                    <ion-option *ngFor="let item of tiposVisitas" [value]="item.id" [selected]="tipoVisita == item">{{item.descripcion}}</ion-option>\n                                </ion-select>\n                            </ion-item>\n\n\n                        </ion-list>\n\n\n                    </ion-thumbnail>\n\n                </ion-item>\n            </ion-list>\n\n\n            <ion-list *ngSwitchCase="\'equipo\'">\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <ion-title>Datos de equipo / Tipo de servicio</ion-title>\n                        <br/>\n                        <ion-list>\n\n\n                            <ion-item>\n\n                                <ion-grid>\n                                    <ion-row align-items-start>\n\n                                        <ion-col>\n                                            <button ion-button full (click)="openModalProducto()">\n                                                <ion-icon name="search"> Buscar Equipo </ion-icon>\n                                            </button>\n                                        </ion-col>\n\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n\n\n                            <ion-item>\n                                <ion-label floating>Sucursal</ion-label>\n                                <ion-select ([ngModel])="clienteSucursal.id" formControlName="idClienteSucursal">\n                                    <ion-option *ngFor="let item of clienteSucursales" [value]="item.id" [selected]="clienteSucursal == item">{{item.nombre}}</ion-option>\n                                </ion-select>\n                            </ion-item>\n\n\n\n                            <ion-item>\n                                <ion-label floating>Equipo</ion-label>\n                                <ion-input type="text" [(ngModel)]="producto.descripcionCompra" style="pointer-events: none" formControlName="equipoProducto"></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label floating>Marca</ion-label>\n                                <ion-input type="text" [(ngModel)]="marca.marca" style="pointer-events: none" formControlName="marca"></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label floating>Modelo</ion-label>\n                                <ion-input type="text" [(ngModel)]="modelo.modelo" style="pointer-events: none" formControlName="modelo"></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label floating>Ip Equipo</ion-label>\n                                <ion-input type="text" [(ngModel)]="productoClienteReporte.ipEquipo" formControlName="ipEquipo"></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label floating>Puerto USB</ion-label>\n                                <ion-input type="text" [(ngModel)]="productoClienteReporte.puertoUsb" formControlName="puertoUsb"></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label floating>Serie</ion-label>\n                                <ion-input type="text" [(ngModel)]="detalleInventarioProducto.serial" formControlName="serie"></ion-input>\n                            </ion-item>\n\n\n\n\n                            <ion-item>\n\n\n                                <ion-grid item-content>\n                                    <ion-row col-12>\n                                        <ion-label floating>Contadores</ion-label>\n                                    </ion-row>\n                                    <ion-row col-12>\n                                        <br/>\n                                    </ion-row>\n                                    <ion-row>\n                                        <ion-col col-3>\n\n                                        </ion-col>\n                                        <ion-col col-3>\n                                            Total\n                                        </ion-col>\n                                        <ion-col col-3>\n                                            Color\n                                        </ion-col>\n                                        <ion-col col-3>\n                                            B/N\n                                        </ion-col>\n                                    </ion-row>\n                                    <ion-row>\n                                        <ion-col col-3>\n                                            Anterior\n                                        </ion-col>\n                                        <ion-col col-3>\n\n                                            <ion-input type="number" [(ngModel)]="productoDetalleReporte.contadorTotalAnterior" formControlName="contadorTotalAnterior"></ion-input>\n                                        </ion-col>\n                                        <ion-col col-3>\n                                            <ion-input type="number" [(ngModel)]="productoDetalleReporte.contadorColorAnterior" formControlName="contadorColorAnterior"\n                                                (ionChange)="contador(\'contadorColorAnterior\')" placeholder="..."></ion-input>\n                                        </ion-col>\n                                        <ion-col col-3>\n                                            <ion-input type="number" [(ngModel)]="productoDetalleReporte.contadorBnAnterior" formControlName="contadorBnAnterior" (ionChange)="contador(\'contadorBnAnterior\')"\n                                                placeholder="..."></ion-input>\n                                        </ion-col>\n                                    </ion-row>\n\n                                    <ion-row>\n                                        <ion-col col-3>\n                                            Actual\n                                        </ion-col>\n                                        <ion-col col-3>\n                                            <ion-input [(ngModel)]="productoDetalleReporte.contadorTotalActual" formControlName="contadorTotalActual"></ion-input>\n                                        </ion-col>\n                                        <ion-col col-3>\n                                            <ion-input type="number" [(ngModel)]="productoDetalleReporte.contadorColorActual" formControlName="contadorColorActual" (ionChange)="contador(\'contadorColorActual\')"\n                                                placeholder="..."></ion-input>\n\n                                        </ion-col>\n                                        <ion-col col-3>\n                                            <ion-input type="number" [(ngModel)]="productoDetalleReporte.contadorBnActual" formControlName="contadorBnActual" (ionChange)="contador(\'contadorBnActual\')"\n                                                placeholder="..."></ion-input>\n\n                                        </ion-col>\n                                    </ion-row>\n\n                                    <ion-row>\n                                        <ion-col col-3>\n                                            Imp. Real\n                                        </ion-col>\n                                        <ion-col col-3>\n                                            <ion-input type="number" [(ngModel)]="productoDetalleReporte.contadorTotalImpReal" formControlName="contadorTotalImpReal"></ion-input>\n                                        </ion-col>\n                                        <ion-col col-3>\n                                            <ion-input type="number" [(ngModel)]="productoDetalleReporte.contadorColorImpReal" formControlName="contadorColorImpReal"></ion-input>\n                                        </ion-col>\n                                        <ion-col col-3>\n                                            <ion-input type="number" [(ngModel)]="productoDetalleReporte.contadorBnImpReal" formControlName="contadorBnImpReal"></ion-input>\n                                        </ion-col>\n                                    </ion-row>\n\n\n\n                                    <ion-row>\n\n\n                                        <ion-col col-2>\n                                            <ion-input type="number" placeholder="Mantenimiento" [(ngModel)]="productoDetalleReporte.mantenimiento" formControlName="mantenimiento"></ion-input>\n\n                                        </ion-col>\n\n                                        <ion-col col-2>\n                                            <ion-input type="number" placeholder="Otros" [(ngModel)]="productoDetalleReporte.otros" formControlName="otros"></ion-input>\n\n                                        </ion-col>\n                                        <ion-col col-4>\n                                            <ion-label>Servicio a FACTURAR</ion-label>\n                                        </ion-col>\n\n                                        <ion-col col-1>\n                                            <ion-checkbox [(ngModel)]="productoDetalleReporte.servicioFacturarEstado" formControlName="servicioFacturarEstado"></ion-checkbox>\n                                        </ion-col>\n\n                                        <ion-col col-3>\n                                            <ion-input type="number" placeholder="US$" [(ngModel)]="productoDetalleReporte.servicioFacturar" formControlName="servicioFacturar"></ion-input>\n\n                                        </ion-col>\n\n                                    </ion-row>\n\n\n\n                                </ion-grid>\n\n                            </ion-item>\n\n\n                            <ion-item>\n                                <ion-label floating>Síntomas</ion-label>\n                                <ion-input type="text" [(ngModel)]="reporte.sintomasEquipo" formControlName="sintomas"></ion-input>\n                            </ion-item>\n\n\n\n                        </ion-list>\n\n\n                    </ion-thumbnail>\n\n                </ion-item>\n            </ion-list>\n\n\n\n            <ion-list *ngSwitchCase="\'preventivo\'">\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <ion-title>Mantenimiento Preventivo </ion-title>\n\n                        <br/>\n                        <ion-list>\n\n\n                            <ion-item>\n                                <ion-label>Sección de Procesamiento</ion-label>\n                                <ion-select *ngIf="arrayPreventivoProcesamiento" [(ngModel)]="arrayPreventivoProcesamientoIds" formControlName="lista1" multiple="true"\n                                    cancelText="cancel" okText="ok">\n                                    <ion-option *ngFor="let item of arrayPreventivoProcesamiento; let i = index" [value]="item.id" selected="false">{{item.descripcion}}</ion-option>\n                                </ion-select>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label>Sección de Imagen</ion-label>\n                                <ion-select *ngIf="arrayPreventivoImagen" [(ngModel)]="arrayPreventivoImagenIds" formControlName="lista2" multiple="true"\n                                    cancelText="cancel" okText="ok">\n                                    <ion-option *ngFor="let item of arrayPreventivoImagen; let i = index" [value]="item.id" selected="false">{{item.descripcion}}</ion-option>\n                                </ion-select>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label>Sección de Fijación</ion-label>\n                                <ion-select *ngIf="arrayPreventivoFijacion" [(ngModel)]="arrayPreventivoFijacionIds" formControlName="lista3" multiple="true"\n                                    cancelText="cancel" okText="ok">\n                                    <ion-option *ngFor="let item of arrayPreventivoFijacion; let i = index" [value]="item.id" selected="false">{{item.descripcion}}</ion-option>\n                                </ion-select>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label>Sección de Exteriores</ion-label>\n                                <ion-select [(ngModel)]="arrayPreventivoExterioresIds" formControlName="lista4" multiple="true" cancelText="cancel" okText="ok">\n                                    <ion-option *ngFor="let item of arrayPreventivoExteriores; let i = index" [value]="item.id" selected="false">{{item.descripcion}}</ion-option>\n                                </ion-select>\n                            </ion-item>\n\n\n\n                        </ion-list>\n\n                    </ion-thumbnail>\n\n\n\n\n\n\n\n\n                </ion-item>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'correctivo\'">\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <ion-title>Mantenimiento Correctivo</ion-title>\n                        <br/>\n                        <ion-list>\n\n                            <ion-item>\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col text-left>\n                                            <button *ngIf=\'visibleCorrectivosBtns[0]\' ion-button icon-only (click)="openModalCorrectivosSeleccionados(\'SUMINISTROS\')">\n                                                <ion-icon name="eye"></ion-icon>\n                                            </button>\n\n\n                                            <button ion-button (click)="openModalCorrectivos(\'SUMINISTROS\')">\n                                                <ion-icon name="search"> {{nombreListaCorrectivo[0]}} </ion-icon>\n                                            </button>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n\n\n\n                            <ion-item>\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col text-left>\n                                            <button *ngIf=\'visibleCorrectivosBtns[1]\' ion-button icon-only (click)="openModalCorrectivosSeleccionados(\'IMAGEN_CORRECTIVO\')">\n                                                <ion-icon name="eye"></ion-icon>\n                                            </button>\n                                            <button ion-button (click)="openModalCorrectivos(\'IMAGEN_CORRECTIVO\')">\n                                                <ion-icon name="search"> {{nombreListaCorrectivo[1]}} </ion-icon>\n                                            </button>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col text-left>\n                                            <button *ngIf=\'visibleCorrectivosBtns[2]\' ion-button icon-only (click)="openModalCorrectivosSeleccionados(\'FIJACION_CORRECTIVO\')">\n                                                <ion-icon name="eye"></ion-icon>\n                                            </button>\n                                            <button ion-button (click)="openModalCorrectivos(\'FIJACION_CORRECTIVO\')">\n                                                <ion-icon name="search"> {{nombreListaCorrectivo[2]}} </ion-icon>\n                                            </button>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col text-left>\n                                            <button *ngIf=\'visibleCorrectivosBtns[3]\' ion-button icon-only (click)="openModalCorrectivosSeleccionados(\'REVELADO\')">\n                                                <ion-icon name="eye"></ion-icon>\n                                            </button>\n                                            <button ion-button (click)="openModalCorrectivos(\'REVELADO\')">\n                                                <ion-icon name="search"> {{nombreListaCorrectivo[3]}} </ion-icon>\n                                            </button>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col text-left>\n                                            <button *ngIf=\'visibleCorrectivosBtns[4]\' ion-button icon-only (click)="openModalCorrectivosSeleccionados(\'ALIMENTACION\')">\n                                                <ion-icon name="eye"></ion-icon>\n                                            </button>\n                                            <button ion-button (click)="openModalCorrectivos(\'ALIMENTACION\')">\n                                                <ion-icon name="search"> {{nombreListaCorrectivo[4]}} </ion-icon>\n                                            </button>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n                            <ion-item>\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col text-left>\n                                            <button *ngIf=\'visibleCorrectivosBtns[5]\' ion-button icon-only (click)="openModalCorrectivosSeleccionados(\'OTROS\')">\n                                                <ion-icon name="eye"></ion-icon>\n                                            </button>\n                                            <button ion-button (click)="openModalCorrectivos(\'OTROS\')">\n                                                <ion-icon name="search"> {{nombreListaCorrectivo[5]}}</ion-icon>\n                                            </button>\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                            </ion-item>\n\n\n                        </ion-list>\n\n                    </ion-thumbnail>\n\n                </ion-item>\n            </ion-list>\n\n\n\n            <ion-list *ngSwitchCase="\'observaciones\'">\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <ion-title>Observaciones / Recomendaciones</ion-title>\n                        <br/>\n                        <ion-list>\n                            <ion-item>\n\n                                <ion-label floating>Observaciones / Recomendaciones</ion-label>\n                                <ion-input type="text" [(ngModel)]="reporte.observacionesRecomendaciones" formControlName="observacionesRecomendaciones"></ion-input>\n\n                            </ion-item>\n\n                            <ion-item>\n\n                                <ion-label floating>Notas de Técnico</ion-label>\n                                <ion-input type="text" [(ngModel)]="reporte.notas" formControlName="notas"></ion-input>\n\n                            </ion-item>\n\n\n                        </ion-list>\n                    </ion-thumbnail>\n\n                </ion-item>\n            </ion-list>\n\n\n            <ion-list *ngSwitchCase="\'cliente\'">\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <ion-title>Exclusivo para el cliente</ion-title>\n                        <br/>\n\n                        <ion-list>\n\n\n                            <ion-item>\n\n                                <ion-grid>\n                                    <ion-row>\n\n                                        <ion-col col-4>\n                                            <button ion-button full color="light" (click)="clearSignature()">Limpiar</button>\n                                        </ion-col>\n                                        <ion-col col-4>\n\n                                        </ion-col>\n                                        <ion-col col-4>\n\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n                                <signature-pad [options]="signaturePadOptions" id="signatureCanvas"></signature-pad>\n                                <br/>\n                                <div>\n                                    <img [src]=\'reporte.firmaClienteBase64\' *ngIf="reporte.firmaClienteBase64" />\n                                </div>\n                                <ion-grid>\n                                    <ion-row>\n\n                                        <ion-col col-2>\n\n                                        </ion-col>\n                                        <ion-col col-6>\n                                            {{cliente.cliente}}\n                                        </ion-col>\n                                        <ion-col col-4>\n\n                                        </ion-col>\n                                    </ion-row>\n                                </ion-grid>\n\n                            </ion-item>\n\n                            <ion-item>\n\n                                <ion-label fixed>Responsable</ion-label>\n                                <ion-label>{{usuario.nombreCompleto}}</ion-label>\n\n                            </ion-item>\n\n\n                        </ion-list>\n\n\n                    </ion-thumbnail>\n\n                </ion-item>\n\n\n                <ion-item>\n\n                    <ion-grid>\n                        <ion-row align-items-start>\n\n                            <ion-col>\n                                <button ion-button full (click)="presentConfirm()" ion-button full>\n                                    Guardar\n                                </button>\n                                <!--  <button type="submit" ion-button full [disabled]="!reporteForm.valid">Guardar</button>-->\n\n\n                            </ion-col>\n\n                        </ion-row>\n                    </ion-grid>\n                </ion-item>\n\n            </ion-list>\n\n\n        </div>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"D:\PROYECTOS\ANGULAR\reportes\src\pages\reporte-impresoras\reporte-impresoras.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* DetalleCatalogoReporteProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* DetalleCatalogoReporteProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* ClienteProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* ClienteProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__providers_providers__["i" /* TipoVisitaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_providers__["i" /* TipoVisitaProvider */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__providers_providers__["g" /* ReporteProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_providers__["g" /* ReporteProvider */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__providers_providers__["c" /* ClienteSucursalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_providers__["c" /* ClienteSucursalProvider */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _p || Object])
    ], ReporteImpresorasPage);
    return ReporteImpresorasPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());

//# sourceMappingURL=reporte-impresoras.js.map

/***/ })

},[289]);
//# sourceMappingURL=main.js.map