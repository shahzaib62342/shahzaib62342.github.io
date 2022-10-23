"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7121);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 7121);
/* harmony import */ var src_app_module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/module/shared/shared.module */ 2279);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            src_app_module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], HomePageModule);



/***/ }),

/***/ 7121:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ 2486);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);






let HomePage = class HomePage {
    constructor(nav, helper) {
        this.nav = nav;
        this.helper = helper;
    }
    ngOnInit() {
    }
    buttonClick(value) {
        // this.nav.goto_page(value);
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__.NavigationService },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__.HelperService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n    <div id=\"preloader\">\n        <div class=\"loader_line\"></div>\n    </div>\n    <div class=\"bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full\">\n        <div class=\"z-50\">\n            <!-- container start -->\n            <div class=\"container\">\n                <!-- header start for large screens -->\n               <app-header (listenParentHandler)=\"buttonClick($event)\"></app-header>\n                <!-- header  end -->\n\n                <app-home1 *ngIf=\"this.helper.pageName=='home'\" ></app-home1>\n                <app-about *ngIf=\"this.helper.pageName=='about'\"></app-about>\n                <app-resume *ngIf=\"this.helper.pageName=='resume'\"></app-resume>\n                <app-works *ngIf=\"this.helper.pageName=='works'\"></app-works>\n                <app-blogs *ngIf=\"this.helper.pageName=='blogs'\"></app-blogs>\n                <!-- Home page contant End -->\n            </div>\n        </div>\n    </div>\n</ion-content> \n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map