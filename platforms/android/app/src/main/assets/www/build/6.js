webpackJsonp([6],{

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSearchProductoPageModule", function() { return ModalSearchProductoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_search_producto__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModalSearchProductoPageModule = (function () {
    function ModalSearchProductoPageModule() {
    }
    ModalSearchProductoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_search_producto__["a" /* ModalSearchProductoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_search_producto__["a" /* ModalSearchProductoPage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ModalSearchProductoPageModule);
    return ModalSearchProductoPageModule;
}());

//# sourceMappingURL=modal-search-producto.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalSearchProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_producto__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(49);
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
 * Generated class for the ModalSearchProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalSearchProductoPage = (function () {
    function ModalSearchProductoPage(navCtrl, navParams, viewCtrl, clienteProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.clienteProvider = clienteProvider;
        this.loadingCtrl = loadingCtrl;
        this.descending = false;
        this.column = 'descripcionCompra';
        this.producto = new __WEBPACK_IMPORTED_MODULE_2__models_producto__["a" /* Producto */]();
    }
    ModalSearchProductoPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ModalSearchProductoPage.prototype.ionViewDidLoad = function () {
        this.showLoader();
        this.getProductos();
        this.loading.dismiss();
    };
    ModalSearchProductoPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loading.present();
    };
    ModalSearchProductoPage.prototype.getProductos = function () {
        var _this = this;
        this.clienteProvider.getOnlyProductosByCodigoCategoria('IMPR')
            .subscribe(function (productos) {
            _this.productos = productos;
            _this.productos.forEach(function (p) {
                //  console.log('el datos es ' + p['idModelo']['modelo'])
            });
        }, function (error) { return _this.errorMessage = error; });
    };
    ModalSearchProductoPage.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    ModalSearchProductoPage.prototype.openItem = function (productoSelected) {
        this.viewCtrl.dismiss(productoSelected);
        /* localStorage.setItem('productoSelected', JSON.stringify(productoSelected));
     
         this.navCtrl.push(AdministracionReportesPage, {
           productoSelected: productoSelected,
           tabReporte: 'equipo'
         });
       }
     */
    };
    ModalSearchProductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-search-producto',template:/*ion-inline-start:"D:\PROYECTOS\ANGULAR\reportes\src\pages\modal-search-producto\modal-search-producto.html"*/'<!--\n  Generated template for the ModalSearchProductoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Productos</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios">\n          Cancelar\n        </span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="terms"></ion-searchbar>\n  <button ion-button type="button" (click)="sort()">Sort</button>\n  <ion-list>\n\n    <ion-item *ngFor="let c of productos | searchProducto : terms ">\n      <button ion-item (click)="openItem(c)">\n\n        <p>{{c.descripcionCompra}}</p>\n        <h2>Cod Fab: {{c.codigoFabricante}}</h2>\n        <h2>Modelo: {{c.idModelo.modelo}}</h2>\n        <h2>Marca: {{c.idModelo.idMarca.marca}}</h2>\n        <h2>Desc Venta: {{c.descripcionVenta}}</h2>\n      </button>\n\n      <ion-item-options>\n        <button ion-button color="blue" (click)="openItem(c)">\n          Seleccionar\n        </button>\n      </ion-item-options>\n\n\n\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\PROYECTOS\ANGULAR\reportes\src\pages\modal-search-producto\modal-search-producto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["e" /* ProductoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ModalSearchProductoPage);
    return ModalSearchProductoPage;
}());

//# sourceMappingURL=modal-search-producto.js.map

/***/ })

});
//# sourceMappingURL=6.js.map