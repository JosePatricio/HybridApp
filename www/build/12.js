webpackJsonp([12],{

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalItemsGenericosPreventivoPageModule", function() { return ModalItemsGenericosPreventivoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_items_genericos_preventivo__ = __webpack_require__(529);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalItemsGenericosPreventivoPageModule = /** @class */ (function () {
    function ModalItemsGenericosPreventivoPageModule() {
    }
    ModalItemsGenericosPreventivoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_items_genericos_preventivo__["a" /* ModalItemsGenericosPreventivoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_items_genericos_preventivo__["a" /* ModalItemsGenericosPreventivoPage */]),
            ],
        })
    ], ModalItemsGenericosPreventivoPageModule);
    return ModalItemsGenericosPreventivoPageModule;
}());

//# sourceMappingURL=modal-items-genericos-preventivo.module.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalItemsGenericosPreventivoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_models__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(34);
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
 * Generated class for the ModalItemsGenericosPreventivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalItemsGenericosPreventivoPage = /** @class */ (function () {
    function ModalItemsGenericosPreventivoPage(navCtrl, navParams, formBuilder, utilesProvider, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.utilesProvider = utilesProvider;
        this.viewCtrl = viewCtrl;
        this.arrayRepuestos = new Array();
        this.reporteGenericoItems = new __WEBPACK_IMPORTED_MODULE_2__models_models__["p" /* ReporteGenericoItems */]();
        this.reporteForm = this.createMyForm();
        this.arrayRepuestos = navParams.get('arrayRepuestos');
    }
    ModalItemsGenericosPreventivoPage.prototype.ionViewDidLoad = function () {
    };
    ModalItemsGenericosPreventivoPage.prototype.agregar = function () {
        if (this.reporteGenericoItems.descripcion != undefined) {
            this.reporteGenericoItems.tipo = 'P';
            this.arrayRepuestos.push(this.reporteGenericoItems);
            this.reporteGenericoItems = new __WEBPACK_IMPORTED_MODULE_2__models_models__["p" /* ReporteGenericoItems */]();
            this.reporteForm.reset();
            console.log(this.arrayRepuestos);
        }
        else {
            this.utilesProvider.msgToastWarn('El campo no puede estar vacio');
        }
    };
    ModalItemsGenericosPreventivoPage.prototype.deleteItem = function (item) {
        var index = this.arrayRepuestos.indexOf(item);
        if (index > -1) {
            this.arrayRepuestos.splice(index, 1);
        }
    };
    ModalItemsGenericosPreventivoPage.prototype.cancel = function () {
        this.viewCtrl.dismiss({ arrayRepuestos: this.arrayRepuestos });
    };
    ModalItemsGenericosPreventivoPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            descripcion: [this.reporteGenericoItems.descripcion]
        });
    };
    ModalItemsGenericosPreventivoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-items-genericos-preventivo',template:/*ion-inline-start:"C:\PROYECTOS\HybridApp\src\pages\modal-items-genericos-preventivo\modal-items-genericos-preventivo.html"*/'<!--\n  Generated template for the ModalItemsGenericosPreventivoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Items Genéricos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="reporteForm">\n    <ion-list>\n\n      <ion-item>\n        <ion-grid item-content>\n\n          <ion-row>\n            <ion-col col-8>\n\n              <ion-label floating>Ingresar Item</ion-label>\n              <ion-input type="text" [(ngModel)]="reporteGenericoItems.descripcion" formControlName="descripcion"></ion-input>\n\n            </ion-col>\n            <ion-col col-4>\n              <button ion-button full (click)="agregar()">\n                <ion-icon name="add"> Agregar </ion-icon>\n              </button>\n            </ion-col>\n\n          </ion-row>\n\n\n        </ion-grid>\n\n      </ion-item>\n\n\n    </ion-list>\n\n    <ion-list>\n      <ion-item-sliding *ngFor="let r of arrayRepuestos">\n        <ion-item>\n          <div>\n            <h2> {{r.descripcion}}</h2>\n\n          </div>\n          <ion-icon class="ios-add-size icon icon-md ios-arrow-forward"></ion-icon>\n        </ion-item>\n        <ion-item-options side="right">\n          <button danger (click)="deleteItem(r)" ion-button color="danger">\n            <ion-icon name="trash"></ion-icon> Eliminar</button>\n        </ion-item-options>\n      </ion-item-sliding>\n\n\n      <ion-item>\n\n        <ion-grid>\n          <ion-row align-items-start>\n\n            <ion-col>\n              <button ion-button full (click)="cancel()">\n                Cerrar\n              </button>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\PROYECTOS\HybridApp\src\pages\modal-items-genericos-preventivo\modal-items-genericos-preventivo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["l" /* UtilesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], ModalItemsGenericosPreventivoPage);
    return ModalItemsGenericosPreventivoPage;
}());

//# sourceMappingURL=modal-items-genericos-preventivo.js.map

/***/ })

});
//# sourceMappingURL=12.js.map