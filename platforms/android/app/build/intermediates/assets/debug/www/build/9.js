webpackJsonp([9],{

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRepuestosSeleccionadosPageModule", function() { return ModalRepuestosSeleccionadosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_repuestos_seleccionados__ = __webpack_require__(520);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalRepuestosSeleccionadosPageModule = /** @class */ (function () {
    function ModalRepuestosSeleccionadosPageModule() {
    }
    ModalRepuestosSeleccionadosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_repuestos_seleccionados__["a" /* ModalRepuestosSeleccionadosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_repuestos_seleccionados__["a" /* ModalRepuestosSeleccionadosPage */]),
            ],
        })
    ], ModalRepuestosSeleccionadosPageModule);
    return ModalRepuestosSeleccionadosPageModule;
}());

//# sourceMappingURL=modal-repuestos-seleccionados.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalRepuestosSeleccionadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
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
 * Generated class for the ModalRepuestosSeleccionadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalRepuestosSeleccionadosPage = /** @class */ (function () {
    function ModalRepuestosSeleccionadosPage(navCtrl, navParams, viewCtrl, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.arrayRepuestos = new Array();
        this.showLoader();
        this.arrayRepuestos = navParams.get('arrayRepuestos');
        this.cabecera = navParams.get('cabecera');
        this.loading.dismiss();
        /*let swe:ProductoRepuestoReporte=new ProductoRepuestoReporte();
        swe.idDetalleCatalogoReporte.descripcion;*/
    }
    ModalRepuestosSeleccionadosPage.prototype.ionViewDidLoad = function () {
    };
    ModalRepuestosSeleccionadosPage.prototype.deleteItem = function (r) {
        console.log('Eliminar ' + r);
        var index = this.arrayRepuestos.indexOf(r);
        console.log('INDEX TP DELETE ' + index);
        if (index > -1) {
            this.arrayRepuestos.splice(index, 1); // works
        }
    };
    ModalRepuestosSeleccionadosPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loading.present();
    };
    ModalRepuestosSeleccionadosPage.prototype.cancel = function () {
        this.viewCtrl.dismiss({ cabecera: this.cabecera, arrayRepuestos: this.arrayRepuestos });
    };
    ModalRepuestosSeleccionadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-repuestos-seleccionados',template:/*ion-inline-start:"C:\PROYECTOS\HybridApp\src\pages\modal-repuestos-seleccionados\modal-repuestos-seleccionados.html"*/'<!--\n\n  Generated template for the ModalRepuestosSeleccionadosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Repuestos Seleccionados</ion-title>\n\n\n\n    <ion-buttons start>\n\n      <button ion-button (click)="cancel()">\n\n        <span color="primary" showWhen="ios">\n\n          Cancelar\n\n        </span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let r of arrayRepuestos">\n\n      <ion-item>\n\n        <div>\n\n          <h2> {{r.idProducto.codigoFabricante}}</h2>\n\n          <p>Marca: {{r.idProducto.idMarca.marca}}</p>\n\n          <p>Desc: {{r.idProducto.descripcionVenta}}</p>\n\n          \n\n          <p>Detall: {{r.idDetalleCatalogoReporte.descripcion}}</p>\n\n          \n\n        </div>\n\n        <ion-icon class="ios-add-size icon icon-md ios-arrow-forward"></ion-icon>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button danger (click)="deleteItem(r)" ion-button color="danger">\n\n          <ion-icon name="trash"></ion-icon> Eliminar</button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n\n\n\n\n    <ion-item>\n\n\n\n      <ion-grid>\n\n        <ion-row align-items-start>\n\n\n\n          <ion-col>\n\n            <button ion-button full (click)="cancel()">\n\n              Cerrar\n\n            </button>\n\n          </ion-col>\n\n\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\PROYECTOS\HybridApp\src\pages\modal-repuestos-seleccionados\modal-repuestos-seleccionados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ModalRepuestosSeleccionadosPage);
    return ModalRepuestosSeleccionadosPage;
}());

//# sourceMappingURL=modal-repuestos-seleccionados.js.map

/***/ })

});
//# sourceMappingURL=9.js.map