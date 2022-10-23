"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_contacts_contacts_module_ts"],{

/***/ 9493:
/*!***********************************************************!*\
  !*** ./src/app/pages/contacts/contacts-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsPageRoutingModule": () => (/* binding */ ContactsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.page */ 7419);




const routes = [
    {
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_0__.ContactsPage
    }
];
let ContactsPageRoutingModule = class ContactsPageRoutingModule {
};
ContactsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactsPageRoutingModule);



/***/ }),

/***/ 464:
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsPageModule": () => (/* binding */ ContactsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-routing.module */ 9493);
/* harmony import */ var _contacts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.page */ 7419);







let ContactsPageModule = class ContactsPageModule {
};
ContactsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsPageRoutingModule
        ],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_1__.ContactsPage]
    })
], ContactsPageModule);



/***/ }),

/***/ 7419:
/*!*************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsPage": () => (/* binding */ ContactsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _contacts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.page.html?ngResource */ 8788);
/* harmony import */ var _contacts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.page.scss?ngResource */ 9884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ContactsPage = class ContactsPage {
    constructor() { }
    ngOnInit() {
    }
};
ContactsPage.ctorParameters = () => [];
ContactsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contacts',
        template: _contacts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contacts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactsPage);



/***/ }),

/***/ 9884:
/*!**************************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 8788:
/*!**************************************************************!*\
  !*** ./src/app/pages/contacts/contacts.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Contacts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_contacts_contacts_module_ts.js.map