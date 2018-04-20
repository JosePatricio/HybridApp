webpackJsonp([11],{

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalConfirmacionRepuestoPageModule", function() { return ModalConfirmacionRepuestoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_confirmacion_repuesto__ = __webpack_require__(519);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalConfirmacionRepuestoPageModule = /** @class */ (function () {
    function ModalConfirmacionRepuestoPageModule() {
    }
    ModalConfirmacionRepuestoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_confirmacion_repuesto__["a" /* ModalConfirmacionRepuestoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_confirmacion_repuesto__["a" /* ModalConfirmacionRepuestoPage */]),
            ],
        })
    ], ModalConfirmacionRepuestoPageModule);
    return ModalConfirmacionRepuestoPageModule;
}());

//# sourceMappingURL=modal-confirmacion-repuesto.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalConfirmacionRepuestoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_models__ = __webpack_require__(26);
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
 * Generated class for the ModalConfirmacionRepuestoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalConfirmacionRepuestoPage = /** @class */ (function () {
    function ModalConfirmacionRepuestoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.productoRepuestoReporte = new __WEBPACK_IMPORTED_MODULE_2__models_models__["m" /* ProductoRepuestoReporte */]();
        this.cambiado = false;
        this.solicitar = false;
        this.productoRepuestoReporte = navParams.get('productoRepuestoReporte');
    }
    ModalConfirmacionRepuestoPage.prototype.ionViewDidLoad = function () {
    };
    ModalConfirmacionRepuestoPage.prototype.aceptar = function () {
        var obj = new __WEBPACK_IMPORTED_MODULE_2__models_models__["m" /* ProductoRepuestoReporte */]();
        obj = this.productoRepuestoReporte;
        obj.solicitar = this.solicitar;
        obj.cambiado = this.cambiado;
        obj.porcentaje = this.porcentaje;
        this.viewCtrl.dismiss({ productoRepuestoReporte: obj });
    };
    ModalConfirmacionRepuestoPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ModalConfirmacionRepuestoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-confirmacion-repuesto',template:/*ion-inline-start:"C:\PROYECTOS\HybridApp\src\pages\modal-confirmacion-repuesto\modal-confirmacion-repuesto.html"*/'<!--\n\n  Generated template for the ModalConfirmacionRepuestoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Confirmación</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n        <span color="primary" showWhen="ios">\n\n          Cancelar\n\n        </span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>Descripción</ion-label>\n\n      <ion-input [(ngModel)]="productoRepuestoReporte.idProducto.descripcionVenta" style="pointer-events: none"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Código</ion-label>\n\n      <ion-input [(ngModel)]="productoRepuestoReporte.idProducto.codigoFabricante" style="pointer-events: none"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Marca</ion-label>\n\n      <ion-input [(ngModel)]="productoRepuestoReporte.idProducto.idMarca.marca" style="pointer-events: none"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Stock</ion-label>\n\n      <ion-input [(ngModel)]="productoRepuestoReporte.stock" style="pointer-events: none"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Cambiado</ion-label>\n\n      <ion-checkbox [(ngModel)]="cambiado"></ion-checkbox>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Solicitar</ion-label>\n\n      <ion-checkbox [(ngModel)]="solicitar"></ion-checkbox>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label>Porcentaje</ion-label>\n\n      <ion-input [(ngModel)]="porcentaje" ></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n\n\n      <ion-grid>\n\n        <ion-row align-items-start>\n\n          <ion-col>\n\n            <button ion-button full (click)="aceptar()">\n\n              <ion-icon> Aceptar </ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n\n\n\n\n\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\PROYECTOS\HybridApp\src\pages\modal-confirmacion-repuesto\modal-confirmacion-repuesto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], ModalConfirmacionRepuestoPage);
    return ModalConfirmacionRepuestoPage;
}());

//# sourceMappingURL=modal-confirmacion-repuesto.js.map

/***/ })

});
//# sourceMappingURL=11.js.map