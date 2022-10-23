"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_about_about_module_ts"],{

/***/ 3423:
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 388);




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 8114:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 3423);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page */ 388);
/* harmony import */ var src_app_module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/module/shared/shared.module */ 2279);








let AboutPageModule = class AboutPageModule {
};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule,
            src_app_module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage]
    })
], AboutPageModule);



/***/ }),

/***/ 388:
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _about_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page.html?ngResource */ 5874);
/* harmony import */ var _about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss?ngResource */ 4229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);





let AboutPage = class AboutPage {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
    buttonClick(value) {
        this.nav.goto_page(value);
    }
};
AboutPage.ctorParameters = () => [
    { type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavigationService }
];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-about',
        template: _about_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutPage);



/***/ }),

/***/ 4229:
/*!********************************************************!*\
  !*** ./src/app/pages/about/about.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5874:
/*!********************************************************!*\
  !*** ./src/app/pages/about/about.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-content>\n \n    <div class=\"bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full\">\n        <div class=\"z-50\">\n            <!-- container start -->\n            <div class=\"container\">\n                <!-- header start for large screens -->\n                <app-header (listenParentHandler)=\"buttonClick($event)\"></app-header>\n\n                <!-- about page contant start -->\n                <div>\n                    <div class=\"container lg:rounded-2xl bg-white dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20\">\n                        <div data-aos=\"fade\" class=\"aos-init aos-animate\">\n                            <div class=\"py-12\">\n                                <!-- about page title -->\n                                <h2 class=\"after-effect after:left-52 mt-12 lg:mt-0\"> About Me </h2>\n                                <div class=\"grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center\">\n                                    <div class=\"col-span-12 md:col-span-4\">\n                                        <!-- about me image -->\n                                        <img class=\"w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0\" src=\"assets/content/images/about/about.jpg\" alt=\"about image\">\n                                    </div>\n                                    <div class=\"col-span-12 md:col-span-8 space-y-2.5\">\n                                        <!-- who am i content  -->\n                                        <div class=\"md:mr-12 xl:mr-16\">\n                                            <h3 class=\"text-4xl font-medium dark:text-white mb-2.5\"> Who am i? </h3>\n                                            <p class=\"text-gray-lite dark:text-color-910 leading-7\"> I'm Creative\n                                                Director and UI/UX Designer from Sydney, Australia, working in web\n                                                development and print media. I enjoy turning complex problems into\n                                                simple, beautiful and intuitive designs. </p>\n                                            <p class=\"text-gray-lite leading-7 mt-2.5 dark:text-color-910\"> My aim is to\n                                                bring across your message and identity in the most creative way. I\n                                                created web design for many famous brand companies. </p>\n                                        </div>\n\n                                        <!-- personal info -->\n                                        <div>\n                                            <h3 class=\"text-4xl font-medium my-5 dark:text-white\"> Personal Info </h3>\n                                            <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-6\">\n                                                <div class=\"flex\">\n                                                    <span class=\"text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-\">\n                                                        <i class=\"fa-solid fa-mobile-screen-button\"></i>\n                                                    </span>\n                                                    <div class=\"space-y-1\">\n                                                        <p class=\"text-xs text-gray-lite dark:text-color-910\"> Phone\n                                                        </p>\n                                                        <h6 class=\"font-medium dark:text-white\"> +123 456 7890 </h6>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"flex\">\n                                                    <span class=\"text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-\">\n                                                        <i class=\"fa-solid fa-location-dot\"></i>\n                                                    </span>\n                                                    <div class=\"space-y-1\">\n                                                        <p class=\"text-xs text-gray-lite dark:text-color-910\"> Location\n                                                        </p>\n                                                        <h6 class=\"font-medium dark:text-white\"> Hong kong china </h6>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"flex\">\n                                                    <span class=\"text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-\">\n                                                        <i class=\"fa-solid fa-envelope-open-text\"></i>\n                                                    </span>\n                                                    <div class=\"space-y-1\">\n                                                        <p class=\"text-xs text-gray-lite dark:text-color-910\"> Email\n                                                        </p>\n                                                        <h6 class=\"font-medium dark:text-white\"> example@mail.com </h6>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"flex\">\n                                                    <span class=\"text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-\">\n                                                        <i class=\"fa-solid fa-calendar-days\"></i>\n                                                    </span>\n                                                    <div class=\"space-y-1\">\n                                                        <p class=\"text-xs text-gray-lite dark:text-color-910\"> Birthday\n                                                        </p>\n                                                        <h6 class=\"font-medium dark:text-white\"> May 27, 1990 </h6>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!-- whai i do contain -->\n                            <div class=\"pb-12\">\n                                <h3 class=\"text-[35px] dark:text-white font-medium pb-5\"> What I do! </h3>\n                                <div class=\"grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3\">\n                                    <div class=\"about-box dark:bg-transparent bg-[#fcf4ff]\">\n                                        <img class=\"w-10 h-10 object-contain block\" src=\"assets/content/images/icons/icon.svg\" alt=\"icon\">\n                                        <div class=\"space-y-2\">\n                                            <h3 class=\"dark:text-white text-2xl font-semibold\"> Ui/Ux Design </h3>\n                                            <p class=\"leading-8 text-gray-lite dark:text-[#A6A6A6]\"> Lorem ipsum dolor\n                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"about-box dark:bg-transparent bg-[#fefaf0]\">\n                                        <img class=\"w-10 h-10 object-contain block\" src=\"assets/content/images/icons/icon1.svg\" alt=\"icon\">\n                                        <div class=\"space-y-2\">\n                                            <h3 class=\"dark:text-white text-2xl font-semibold\"> App Development </h3>\n                                            <p class=\"leading-8 text-gray-lite dark:text-[#A6A6A6]\"> Lorem ipsum dolor\n                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"about-box dark:bg-transparent bg-[#fcf4ff]\">\n                                        <img class=\"w-10 h-10 object-contain block\" src=\"assets/content/images/icons/icon2.svg\" alt=\"icon\">\n                                        <div class=\"space-y-2\">\n                                            <h3 class=\"dark:text-white text-2xl font-semibold\"> Photography </h3>\n                                            <p class=\"leading-8 text-gray-lite dark:text-[#A6A6A6]\"> Lorem ipsum dolor\n                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"about-box dark:bg-transparent bg-[#fff4f4]\">\n                                        <img class=\"w-10 h-10 object-contain block\" src=\"assets/content/images/icons/icon3.svg\" alt=\"icon\">\n                                        <div class=\"space-y-2\">\n                                            <h3 class=\"dark:text-white text-2xl font-semibold\"> Photography </h3>\n                                            <p class=\"leading-8 text-gray-lite dark:text-[#A6A6A6]\"> Lorem ipsum dolor\n                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"about-box dark:bg-transparent bg-[#fff0f8]\">\n                                        <img class=\"w-10 h-10 object-contain block\" src=\"assets/content/images/icons/icon4.svg\" alt=\"icon\">\n                                        <div class=\"space-y-2\">\n                                            <h3 class=\"dark:text-white text-2xl font-semibold\"> Managment </h3>\n                                            <p class=\"leading-8 text-gray-lite dark:text-[#A6A6A6]\"> Lorem ipsum dolor\n                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"about-box dark:bg-transparent bg-[#f3faff]\">\n                                        <img class=\"w-10 h-10 object-contain block\" src=\"assets/content/images/icons/icon5.svg\" alt=\"icon\">\n                                        <div class=\"space-y-2\">\n                                            <h3 class=\"dark:text-white text-2xl font-semibold\"> Web Development </h3>\n                                            <p class=\"leading-8 text-gray-lite dark:text-[#A6A6A6]\"> Lorem ipsum dolor\n                                                sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                           \n\n                            <!-- footer section start -->\n                            <footer class=\"overflow-hidden rounded-b-2xl\" style=\"background: transparent;\">\n                                <p class=\"text-center py-6 text-gray-lite dark:text-color-910\"> © 2022 All Rights\n                                    Reserved by <a class=\"hover:text-[#FA5252] duration-300 transition\" href=\"https://themeforest.net/user/ib-themes\" target=\"_blank\" rel=\"noopener noreferrer\"> ib-themes</a>. </p>\n                            </footer>\n                            <!-- footer section end -->\n                        </div>\n                    </div>\n                </div>\n                <!-- about section end  -->\n            </div>\n        </div>\n    </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about_about_module_ts.js.map