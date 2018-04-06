webpackJsonp([10],{

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCorrectivosPageModule", function() { return ModalCorrectivosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_correctivos__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalCorrectivosPageModule = /** @class */ (function () {
    function ModalCorrectivosPageModule() {
    }
    ModalCorrectivosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_correctivos__["a" /* ModalCorrectivosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_correctivos__["a" /* ModalCorrectivosPage */]),
            ],
        })
    ], ModalCorrectivosPageModule);
    return ModalCorrectivosPageModule;
}());

//# sourceMappingURL=modal-correctivos.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalCorrectivosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_models__ = __webpack_require__(32);
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
 * Generated class for the ModalCorrectivosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalCorrectivosPage = /** @class */ (function () {
    function ModalCorrectivosPage(navCtrl, navParams, viewCtrl, modalCtrl, loadingCtrl, detalleCatalogoReporteProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.detalleCatalogoReporteProvider = detalleCatalogoReporteProvider;
        this.producto = new __WEBPACK_IMPORTED_MODULE_2__models_models__["j" /* Producto */]();
        this.cabecera = navParams.get('cabecera');
        this.producto = navParams.get('producto');
    }
    ;
    ModalCorrectivosPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ModalCorrectivosPage.prototype.openItem = function (detalle) {
        var _this = this;
        var addModal = this.modalCtrl.create('ModalRepuestosPage', { detalle: detalle, producto: this.producto });
        addModal.onDidDismiss(function (item) {
            if ((item) && item.productoRepuestoReporte !== undefined) {
                _this.viewCtrl.dismiss({ cabecera: _this.cabecera, productoRepuestoReporte: item.productoRepuestoReporte });
            }
        });
        addModal.present();
    };
    ModalCorrectivosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.showLoader();
        this.detalleCatalogoReporteProvider.getDetalleCatalogoReporteByCabeceraCodigo(this.cabecera).subscribe(function (data) {
            _this.catalogos = data;
        });
        this.loading.dismiss();
    };
    ModalCorrectivosPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loading.present();
    };
    ModalCorrectivosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-correctivos',template:/*ion-inline-start:"C:\PROYECTOS\HybridApp\src\pages\modal-correctivos\modal-correctivos.html"*/'<!--\n\n  Generated template for the ModalCorrectivosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Correctivos</ion-title>\n\n\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n        <span color="primary" showWhen="ios">\n\n          Cancelar\n\n        </span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item *ngFor="let c of catalogos ">\n\n\n\n      <button ion-item (click)="openItem(c)">\n\n        <h2> {{c.descripcion}}</h2>\n\n      </button>\n\n\n\n    </ion-item>\n\n \n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\PROYECTOS\HybridApp\src\pages\modal-correctivos\modal-correctivos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["d" /* DetalleCatalogoReporteProvider */]])
    ], ModalCorrectivosPage);
    return ModalCorrectivosPage;
}());

//# sourceMappingURL=modal-correctivos.js.map

/***/ })

});
//# sourceMappingURL=10.js.map