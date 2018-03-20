webpackJsonp([7],{

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSearchClientePageModule", function() { return ModalSearchClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_search_cliente__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModalSearchClientePageModule = (function () {
    function ModalSearchClientePageModule() {
    }
    ModalSearchClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_search_cliente__["a" /* ModalSearchClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_search_cliente__["a" /* ModalSearchClientePage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ModalSearchClientePageModule);
    return ModalSearchClientePageModule;
}());

//# sourceMappingURL=modal-search-cliente.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalSearchClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_models__ = __webpack_require__(36);
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
 * Generated class for the ModalSearchClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalSearchClientePage = (function () {
    function ModalSearchClientePage(navCtrl, navParams, viewCtrl, clienteProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.clienteProvider = clienteProvider;
        this.loadingCtrl = loadingCtrl;
        this.descending = false;
        this.column = 'cliente';
        this.cliente = new __WEBPACK_IMPORTED_MODULE_3__models_models__["b" /* Cliente */]();
    }
    ModalSearchClientePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ModalSearchClientePage.prototype.ionViewDidLoad = function () {
        this.showLoader();
        this.getClientes();
        this.loading.dismiss();
    };
    ModalSearchClientePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loading.present();
    };
    ModalSearchClientePage.prototype.getClientes = function () {
        var _this = this;
        this.clienteProvider.getCliente_pipe()
            .subscribe(function (clientes) { return _this.clientes = clientes; }, function (error) { return _this.errorMessage = error; });
    };
    ModalSearchClientePage.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    ModalSearchClientePage.prototype.openItem = function (clienteSelected) {
        this.viewCtrl.dismiss(clienteSelected);
        // localStorage.setItem('clienteSelected', JSON.stringify(clienteSelected));
        /*  this.navCtrl.push(AdministracionReportesPage, {
            clienteSelected: clienteSelected,
            tabReporte:'datos'
          });
      */
    };
    ModalSearchClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-search-cliente',template:/*ion-inline-start:"D:\PROYECTOS\ANGULAR\reportes\src\pages\modal-search-cliente\modal-search-cliente.html"*/'<!--\n  Generated template for the ModalSearchClientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Buscar Clientes</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios">\n        Cancelar\n        </span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n \n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="terms"></ion-searchbar>\n  <button ion-button type="button" (click)="sort()">Sort</button>\n  <ion-list>\n    \n    <ion-item *ngFor="let c of clientes | searchCliente : terms | sortCliente: {property: column, order: order}">\n      <button ion-item (click)="openItem(c)">\n   \n        \n        <h2>{{c.cliente}}</h2>\n        <p>Ruc: {{c.ruc}}</p>\n        <p>Dirección: {{c.direccion}}</p>\n      </button>\n\n      <ion-item-options>\n        <button ion-button color="blue" (click)="openItem(c)">\n          Seleccionar\n        </button>\n      </ion-item-options>\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\PROYECTOS\ANGULAR\reportes\src\pages\modal-search-cliente\modal-search-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* ClienteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ModalSearchClientePage);
    return ModalSearchClientePage;
}());

//# sourceMappingURL=modal-search-cliente.js.map

/***/ })

});
//# sourceMappingURL=7.js.map