"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_works_works_module_ts"],{

/***/ 5782:
/*!*****************************************************!*\
  !*** ./src/app/pages/works/works-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorksPageRoutingModule": () => (/* binding */ WorksPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _works_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./works.page */ 8896);




const routes = [
    {
        path: '',
        component: _works_page__WEBPACK_IMPORTED_MODULE_0__.WorksPage
    }
];
let WorksPageRoutingModule = class WorksPageRoutingModule {
};
WorksPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorksPageRoutingModule);



/***/ }),

/***/ 8076:
/*!*********************************************!*\
  !*** ./src/app/pages/works/works.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorksPageModule": () => (/* binding */ WorksPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _works_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./works-routing.module */ 5782);
/* harmony import */ var _works_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./works.page */ 8896);







let WorksPageModule = class WorksPageModule {
};
WorksPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _works_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorksPageRoutingModule
        ],
        declarations: [_works_page__WEBPACK_IMPORTED_MODULE_1__.WorksPage]
    })
], WorksPageModule);



/***/ }),

/***/ 8896:
/*!*******************************************!*\
  !*** ./src/app/pages/works/works.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorksPage": () => (/* binding */ WorksPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _works_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./works.page.html?ngResource */ 5033);
/* harmony import */ var _works_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./works.page.scss?ngResource */ 4362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let WorksPage = class WorksPage {
    constructor() { }
    ngOnInit() {
    }
};
WorksPage.ctorParameters = () => [];
WorksPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-works',
        template: _works_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_works_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WorksPage);



/***/ }),

/***/ 4362:
/*!********************************************************!*\
  !*** ./src/app/pages/works/works.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3Jrcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5033:
/*!********************************************************!*\
  !*** ./src/app/pages/works/works.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Works</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_works_works_module_ts.js.map