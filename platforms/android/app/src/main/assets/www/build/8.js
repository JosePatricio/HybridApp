webpackJsonp([8],{

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRepuestosPageModule", function() { return ModalRepuestosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_repuestos__ = __webpack_require__(515);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalRepuestosPageModule = (function () {
    function ModalRepuestosPageModule() {
    }
    ModalRepuestosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_repuestos__["a" /* ModalRepuestosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_repuestos__["a" /* ModalRepuestosPage */]),
            ],
        })
    ], ModalRepuestosPageModule);
    return ModalRepuestosPageModule;
}());

//# sourceMappingURL=modal-repuestos.module.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalRepuestosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_models__ = __webpack_require__(37);
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
 * Generated class for the ModalRepuestosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalRepuestosPage = (function () {
    function ModalRepuestosPage(navCtrl, viewCtrl, navParams, loadingCtrl, modalCtrl, productoRepuestoReporteProvider) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.productoRepuestoReporteProvider = productoRepuestoReporteProvider;
        this.detalleCatalogoReporte = new __WEBPACK_IMPORTED_MODULE_2__models_models__["e" /* DetalleCatalogoReporte */]();
        this.producto = new __WEBPACK_IMPORTED_MODULE_2__models_models__["j" /* Producto */]();
        this.productoRepuestoReporte = new __WEBPACK_IMPORTED_MODULE_2__models_models__["m" /* ProductoRepuestoReporte */]();
        this.detalleCatalogoReporte = navParams.get('detalle');
        this.producto = navParams.get('producto');
    }
    ModalRepuestosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.showLoader();
        console.log(' this.detalleCatalogoReporte.id= ' + this.detalleCatalogoReporte.id + '   ,this.productoidModelo= ' + this.producto.idModelo.id);
        this.productoRepuestoReporteProvider.getByIdDetalleCatalogoReporteByIdModelo(this.detalleCatalogoReporte.id, this.producto.idModelo.id).subscribe(function (data) {
            _this.repuestos = data;
        });
        this.loading.dismiss();
    };
    ModalRepuestosPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ModalRepuestosPage.prototype.openItem = function (valor) {
        var _this = this;
        this.productoRepuestoReporte = valor;
        var addModal = this.modalCtrl.create('ModalConfirmacionRepuestoPage', { productoRepuestoReporte: this.productoRepuestoReporte });
        addModal.onDidDismiss(function (item) {
            if ((item) && item.productoRepuestoReporte !== undefined) {
                _this.viewCtrl.dismiss({ productoRepuestoReporte: item.productoRepuestoReporte });
            }
        });
        addModal.present();
    };
    ModalRepuestosPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loading.present();
    };
    ModalRepuestosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-repuestos',template:/*ion-inline-start:"D:\PROYECTOS\ANGULAR\reportes\src\pages\modal-repuestos\modal-repuestos.html"*/'<!--\n  Generated template for the ModalRepuestosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n  <ion-navbar>\n    <ion-title>Repuestos</ion-title>\n\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios">\n          Cancelar\n        </span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item *ngFor="let r of repuestos ">\n\n    <button ion-item (click)="openItem(r)">\n      <h2> {{r.idProducto.codigoFabricante}}</h2>\n      <p>Marca: {{r.idProducto.idMarca.marca}}</p>\n      <p>Desc: {{r.idProducto.descripcionVenta}}</p>\n      <p>Stock: {{r.stock}}</p>\n      <p>Stock: {{r.id}}</p>\n      <p>CATALOGO: {{r.idDetalleCatalogoReporte.descripcion}}</p>\n\n\n    </button>\n\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"D:\PROYECTOS\ANGULAR\reportes\src\pages\modal-repuestos\modal-repuestos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["f" /* ProductoRepuestoReporteProvider */]])
    ], ModalRepuestosPage);
    return ModalRepuestosPage;
}());

//# sourceMappingURL=modal-repuestos.js.map

/***/ })

});
//# sourceMappingURL=8.js.map