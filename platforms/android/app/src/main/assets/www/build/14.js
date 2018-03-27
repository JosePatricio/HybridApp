webpackJsonp([14],{

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_master__ = __webpack_require__(509);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListMasterPageModule = (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-master.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reporte_impresoras_reporte_impresoras__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListMasterPage = (function () {
    function ListMasterPage(navCtrl, modalCtrl, nativePageTransitions, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.popoverCtrl = popoverCtrl;
        //this.currentItems = this.items.query();
    }
    ListMasterPage.prototype.slidePage = function () {
        var options = {
            direction: 'left',
            duration: 400,
            slowdownfactor: -1,
            iosdelay: 50
        };
        this.nativePageTransitions.slide(options);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__reporte_impresoras_reporte_impresoras__["a" /* ReporteImpresorasPage */]);
    };
    ListMasterPage.prototype.flipPage = function () {
        var options = {
            direction: 'up',
            duration: 600
        };
        this.nativePageTransitions.flip(options);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reporte_impresoras_reporte_impresoras__["a" /* ReporteImpresorasPage */]);
    };
    ListMasterPage.prototype.fadePage = function () {
        this.nativePageTransitions.fade(null);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__reporte_impresoras_reporte_impresoras__["a" /* ReporteImpresorasPage */]);
    };
    ListMasterPage.prototype.curlPage = function () {
        var options = {
            direction: 'up',
            duration: 600
        };
        this.nativePageTransitions.curl(options);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__reporte_impresoras_reporte_impresoras__["a" /* ReporteImpresorasPage */]);
    };
    ListMasterPage.prototype.ngAfterViewInit = function () {
        // this.signaturePad is now available
        //  this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
        // this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    };
    /**
     * The view loaded, let's query our items for the list
     */
    ListMasterPage.prototype.ionViewDidLoad = function () {
    };
    ListMasterPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    ListMasterPage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-master',template:/*ion-inline-start:"D:\PROYECTOS\ANGULAR\reportes\src\pages\list-master\list-master.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle color="light">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'HOME_TITLE\' | translate }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button tappable (click)="presentNotifications($event)" color="light">\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n  <ion-content padding>\n\n\n\n\n  </ion-content>\n\n\n</ion-content>'/*ion-inline-end:"D:\PROYECTOS\ANGULAR\reportes\src\pages\list-master\list-master.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */]])
    ], ListMasterPage);
    return ListMasterPage;
}());

//# sourceMappingURL=list-master.js.map

/***/ })

});
//# sourceMappingURL=14.js.map