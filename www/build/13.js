webpackJsonp([13],{

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalItemsGenericosCorrectivoPageModule", function() { return ModalItemsGenericosCorrectivoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_items_genericos_correctivo__ = __webpack_require__(529);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalItemsGenericosCorrectivoPageModule = /** @class */ (function () {
    function ModalItemsGenericosCorrectivoPageModule() {
    }
    ModalItemsGenericosCorrectivoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_items_genericos_correctivo__["a" /* ModalItemsGenericosCorrectivoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_items_genericos_correctivo__["a" /* ModalItemsGenericosCorrectivoPage */]),
            ],
        })
    ], ModalItemsGenericosCorrectivoPageModule);
    return ModalItemsGenericosCorrectivoPageModule;
}());

//# sourceMappingURL=modal-items-genericos-correctivo.module.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalItemsGenericosCorrectivoPage; });
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
 * Generated class for the ModalItemsGenericosCorrectivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalItemsGenericosCorrectivoPage = /** @class */ (function () {
    function ModalItemsGenericosCorrectivoPage(navCtrl, navParams, formBuilder, utilesProvider, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.utilesProvider = utilesProvider;
        this.viewCtrl = viewCtrl;
        this.arrayRepuestos = new Array();
        this.reporteGenericoItems = new __WEBPACK_IMPORTED_MODULE_2__models_models__["p" /* ReporteGenericoItems */]();
        this.reporteForm = this.createMyForm();
        if (navParams.get('arrayRepuestosCorrectivos') != undefined) {
            this.arrayRepuestos = navParams.get('arrayRepuestosCorrectivos');
        }
    }
    ModalItemsGenericosCorrectivoPage.prototype.ionViewDidLoad = function () {
    };
    ModalItemsGenericosCorrectivoPage.prototype.agregar = function () {
        if (this.reporteGenericoItems.descripcion != undefined) {
            this.reporteGenericoItems.tipo = 'C';
            this.reporteGenericoItems.seleccion = true;
            this.arrayRepuestos.push(this.reporteGenericoItems);
            this.reporteGenericoItems = new __WEBPACK_IMPORTED_MODULE_2__models_models__["p" /* ReporteGenericoItems */]();
            this.reporteForm.reset();
            console.log(this.arrayRepuestos);
        }
        else {
            this.utilesProvider.msgToastWarn('El campo no puede estar vacio');
        }
    };
    ModalItemsGenericosCorrectivoPage.prototype.deleteItem = function (item) {
        var index = this.arrayRepuestos.indexOf(item);
        if (index > -1) {
            this.arrayRepuestos.splice(index, 1);
        }
    };
    ModalItemsGenericosCorrectivoPage.prototype.cancel = function () {
        this.viewCtrl.dismiss({ arrayRepuestosCorrectivos: this.arrayRepuestos });
    };
    ModalItemsGenericosCorrectivoPage.prototype.createMyForm = function () {
        return this.formBuilder.group({
            descripcion: [this.reporteGenericoItems.descripcion],
            cambiado: [this.reporteGenericoItems.cambiado],
            solicitar: [this.reporteGenericoItems.solicitar],
            codigoRepuesto: [this.reporteGenericoItems.codigoRepuesto]
        });
    };
    ModalItemsGenericosCorrectivoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-items-genericos-correctivo',template:/*ion-inline-start:"C:\PROYECTOS\HybridApp\src\pages\modal-items-genericos-correctivo\modal-items-genericos-correctivo.html"*/'<!--\n  Generated template for the ModalItemsGenericosCorrectivoPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Items Genéricos </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="reporteForm">\n    <ion-list>\n\n      <ion-item>\n        <ion-grid item-content>\n\n          <ion-row>\n            <ion-col col-8>\n\n              <ion-label floating>Descripción</ion-label>\n              <ion-input type="text" [(ngModel)]="reporteGenericoItems.descripcion" formControlName="descripcion"></ion-input>\n\n            </ion-col>\n            <ion-col col-4>\n              <button ion-button full (click)="agregar()">\n                <ion-icon name="add"> Agregar </ion-icon>\n              </button>\n            </ion-col>\n\n          </ion-row>\n\n\n\n\n          <ion-row>\n            <ion-col col-6>\n              <ion-label>Cambiado</ion-label>\n              <ion-checkbox [(ngModel)]="reporteGenericoItems.cambiado" formControlName="cambiado"></ion-checkbox>\n            </ion-col>\n            <ion-col col-6>\n              <ion-label>Solicitar</ion-label>\n              <ion-checkbox [(ngModel)]="reporteGenericoItems.solicitar" formControlName="solicitar"></ion-checkbox>\n            </ion-col>\n          </ion-row>\n\n\n          <ion-row>\n              <ion-col col-12>\n                  <ion-label floating>Código</ion-label>\n                  <ion-input type="text" [(ngModel)]="reporteGenericoItems.codigoRepuesto" formControlName="codigoRepuesto"></ion-input>\n    \n              </ion-col>\n          \n            </ion-row>\n\n\n        </ion-grid>\n\n      </ion-item>\n\n\n    </ion-list>\n\n\n\n    <ion-list>\n      <ion-item-sliding *ngFor="let r of arrayRepuestos">\n        <ion-item>\n          <div>\n            <p>Descripción: {{r.descripcion}}</p>\n            <p>Cambiado: {{r.cambiado==true ? \'✓\':\'X\' }} - Solicitar {{r.solicitar==true ? \'✓\':\'X\'}}</p>\n            <p>Código: {{r.codigoRepuesto}}</p>\n\n          </div>\n          <ion-icon class="ios-add-size icon icon-md ios-arrow-forward"></ion-icon>\n        </ion-item>\n        <ion-item-options side="right">\n          <button danger (click)="deleteItem(r)" ion-button color="danger">\n            <ion-icon name="trash"></ion-icon> Eliminar</button>\n        </ion-item-options>\n      </ion-item-sliding>\n\n\n      <ion-item>\n\n        <ion-grid>\n          <ion-row align-items-start>\n\n            <ion-col>\n              <button ion-button full (click)="cancel()">\n                Cerrar\n              </button>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\PROYECTOS\HybridApp\src\pages\modal-items-genericos-correctivo\modal-items-genericos-correctivo.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_providers__["l" /* UtilesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_providers__["l" /* UtilesProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]) === "function" && _e || Object])
    ], ModalItemsGenericosCorrectivoPage);
    return ModalItemsGenericosCorrectivoPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=modal-items-genericos-correctivo.js.map

/***/ })

});
//# sourceMappingURL=13.js.map