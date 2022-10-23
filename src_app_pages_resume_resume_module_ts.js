"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_resume_resume_module_ts"],{

/***/ 7587:
/*!*******************************************************!*\
  !*** ./src/app/pages/resume/resume-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumePageRoutingModule": () => (/* binding */ ResumePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _resume_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resume.page */ 5338);




const routes = [
    {
        path: '',
        component: _resume_page__WEBPACK_IMPORTED_MODULE_0__.ResumePage
    }
];
let ResumePageRoutingModule = class ResumePageRoutingModule {
};
ResumePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResumePageRoutingModule);



/***/ }),

/***/ 5809:
/*!***********************************************!*\
  !*** ./src/app/pages/resume/resume.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumePageModule": () => (/* binding */ ResumePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _resume_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resume-routing.module */ 7587);
/* harmony import */ var _resume_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resume.page */ 5338);
/* harmony import */ var src_app_module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/module/shared/shared.module */ 2279);








let ResumePageModule = class ResumePageModule {
};
ResumePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _resume_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResumePageRoutingModule,
            src_app_module_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_resume_page__WEBPACK_IMPORTED_MODULE_1__.ResumePage]
    })
], ResumePageModule);



/***/ }),

/***/ 5338:
/*!*********************************************!*\
  !*** ./src/app/pages/resume/resume.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumePage": () => (/* binding */ ResumePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _resume_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resume.page.html?ngResource */ 1381);
/* harmony import */ var _resume_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resume.page.scss?ngResource */ 2879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigation.service */ 9565);





let ResumePage = class ResumePage {
    constructor(nav) {
        this.nav = nav;
    }
    ngOnInit() {
    }
    buttonClick(value) {
        this.nav.goto_page(value);
    }
};
ResumePage.ctorParameters = () => [
    { type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavigationService }
];
ResumePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-resume',
        template: _resume_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_resume_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResumePage);



/***/ }),

/***/ 2879:
/*!**********************************************************!*\
  !*** ./src/app/pages/resume/resume.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bWUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1381:
/*!**********************************************************!*\
  !*** ./src/app/pages/resume/resume.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  \n    <div class=\"bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full\">\n        <div class=\"z-50\">\n            <!-- container start -->\n            <div class=\"container\">\n                <!-- header start for large screens -->\n               <app-header (listenParentHandler)=\"buttonClick($event)\"></app-header>\n                <!-- header  end -->\n\n                <!-- resume page contant start -->\n                <section class=\"bg-white lg:rounded-2xl dark:bg-[#111111]\">\n                    <div data-aos=\"fade\" class=\"aos-init aos-animate\">\n                        <div class=\"container sm:px-5 md:px-10 lg:px-20\">\n                            <div class=\"py-12 px-4\">\n                                <h2 class=\"after-effect after:left-44 mb-[40px] mt-12 lg:mt-0\"> Resume </h2>\n                                <div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6\">\n                                    <!-- eductation contain -->\n                                    <div>\n                                        <div class=\"flex items-center space-x-2 mb-4\">\n                                            <i class=\"fa-solid text-6xl text-[#F95054] fa-graduation-cap\"></i>\n                                            <h4 class=\"text-5xl dark:text-white font-medium\"> Education </h4>\n                                        </div>\n\n                                        <div class=\"py-4 dark:bg-transparent bg-[#fff4f4] pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2\">\n                                            <span class=\"text-tiny text-gray-lite dark:text-[#b7b7b7]\">2021-2023</span>\n                                            <h3 class=\"text-xl dark:text-white\"> Ph.D in Horriblensess </h3>\n                                            <p class=\"dark:text-[#b7b7b7]\"> ABC University, Los Angeles, CA </p>\n                                        </div>\n\n                                        <div class=\"py-4 dark:bg-transparent bg-[#fff1fb] pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2\">\n                                            <span class=\"text-tiny text-gray-lite dark:text-[#b7b7b7]\">2019 -\n                                                Present</span>\n                                            <h3 class=\"text-xl dark:text-white\"> Sr. Software Tester </h3>\n                                            <p class=\"dark:text-[#b7b7b7]\">Google Inc.</p>\n                                        </div>\n\n                                        <div class=\"py-4 dark:bg-transparent bg-[#fff4f4] pl-5 pr-3 space-y-2 rounded-lg dark:border-[#212425] dark:border-2\">\n                                            <span class=\"text-tiny text-gray-lite dark:text-[#b7b7b7]\">2021</span>\n                                            <h3 class=\"text-xl dark:text-white\">Best Developer</h3>\n                                            <p class=\"dark:text-[#b7b7b7]\"> University Of Melbourne, NA </p>\n                                        </div>\n\n                                    </div>\n\n                                    <div>\n                                        <!-- Experience contain -->\n                                        <div class=\"flex items-center space-x-2 mb-4\">\n                                            <i class=\"fa-solid text-6xl text-[#F95054] fa-briefcase\"></i>\n                                            <h4 class=\"text-5xl dark:text-white font-medium\"> Experience </h4>\n                                        </div>\n\n                                        <div class=\"py-4 dark:bg-transparent bg-[#eef5fa] pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2\">\n                                            <span class=\"text-tiny text-gray-lite dark:text-[#b7b7b7]\">2017-2021</span>\n                                            <h3 class=\"text-xl dark:text-white\"> Computer Science </h3>\n                                            <p class=\"dark:text-[#b7b7b7]\"> Imperialize Technical Institute </p>\n                                        </div>\n\n                                        <div class=\"py-4 dark:bg-transparent bg-[#f2f4ff] pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2\">\n                                            <span class=\"text-tiny text-gray-lite dark:text-[#b7b7b7]\">2015-2017</span>\n                                            <h3 class=\"text-xl dark:text-white\"> Cr. Web Developer </h3>\n                                            <p class=\"dark:text-[#b7b7b7]\">ib-themes ltd.</p>\n                                        </div>\n\n                                        <div class=\"py-4 dark:bg-transparent bg-[#eef5fa] pl-5 pr-3 space-y-2 rounded-lg dark:border-[#212425] dark:border-2\">\n                                            <span class=\"text-tiny text-gray-lite dark:text-[#b7b7b7]\">2008</span>\n                                            <h3 class=\"text-xl dark:text-white\">Best Writter</h3>\n                                            <p class=\"dark:text-[#b7b7b7]\"> Online Typodev Soluation Ltd. </p>\n                                        </div>\n                                    </div>\n\n                                    <div>\n                                        <!-- award content -->\n                                        <div class=\"flex items-center space-x-2 mb-4\">\n                                            <i class=\"fa-solid fa-award text-6xl text-[#F95054]\"></i>\n                                            <h4 class=\"text-5xl dark:text-white font-medium\"> Awards </h4>\n                                        </div>\n\n                                        <div class=\"py-4 dark:bg-transparent bg-[#fcf4ff]  pl-5 pr-3 space-y-2 mb-6  rounded-lg dark:border-[#212425] dark:border-2\">\n                                            <span class=\"text-tiny text-gray-lite dark:text-[#b7b7b7]\">2015-2017</span>\n                                            <h3 class=\"text-xl dark:text-white\"> Graphic Designer </h3>\n                                            <p class=\"dark:text-[#b7b7b7]\"> Web Graphy, Los Angeles, CA </p>\n                                        </div>\n\n                                        <div class=\"py-4 dark:bg-transparent bg-[#fcf9f2] pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2\">\n                                            <span class=\"text-tiny text-gray-lite dark:text-[#b7b7b7]\">2014 -\n                                                2015</span>\n                                            <h3 class=\"text-xl dark:text-white\"> Jr. Web Developer </h3>\n                                            <p class=\"dark:text-[#b7b7b7]\">Creative Gigs.</p>\n                                        </div>\n\n                                        <div class=\"py-4 dark:bg-transparent bg-[#fcf4ff] pl-5 pr-3 space-y-2 rounded-lg dark:border-[#212425] dark:border-2\">\n                                            <span class=\"text-tiny text-gray-lite dark:text-[#b7b7b7]\">2015-2017</span>\n                                            <h3 class=\"text-xl dark:text-white\">Best Freelancer</h3>\n                                            <p class=\"dark:text-[#b7b7b7]\"> Fiver &amp; Upwork Level 2 &amp; Top Rated\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <!-- working skills -->\n                        <div class=\"container bg-[#f8fbfb] dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20\">\n                            <div class=\"grid grid-cols-1 md:grid-cols-2 gap-8\">\n                                <div class=\"col-span-1\">\n                                    <h4 class=\"text-5xl dark:text-white font-medium mb-6\"> Working Skills </h4>\n                                    <div class=\"mb-5\">\n                                        <div class=\"flex justify-between mb-1\">\n                                            <span class=\" font-semibold text-[#526377] dark:text-[#A6A6A6]\">Web\n                                                Design</span>\n                                            <span class=\" font-semibold text-[#526377] dark:text-[#A6A6A6\">65%</span>\n                                        </div>\n                                        <div class=\"w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]\">\n                                            <div class=\"bg-[#FF6464] h-1 rounded-full\" style=\"width: 65%\"></div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"mb-5\">\n                                        <div class=\"flex justify-between mb-1\">\n                                            <span class=\" font-semibold text-[#526377] dark:text-[#A6A6A6]\">Mobile\n                                                App</span>\n                                            <span class=\" font-semibold text-[#526377] dark:text-[#A6A6A6\">85%</span>\n                                        </div>\n                                        <div class=\"w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]\">\n                                            <div class=\"bg-[#9272d4] h-1 rounded-full\" style=\"width: 85%\"></div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"mb-5\">\n                                        <div class=\"flex justify-between mb-1\">\n                                            <span class=\" font-semibold text-[#526377] dark:text-[#A6A6A6]\">Illustrator</span>\n                                            <span class=\" font-semibold text-[#526377] dark:text-[#A6A6A6\">75%</span>\n                                        </div>\n                                        <div class=\"w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]\">\n                                            <div class=\"bg-[#5185d4] h-1 rounded-full\" style=\"width: 75%\"></div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"mb-5\">\n                                        <div class=\"flex justify-between mb-1\">\n                                            <span class=\" font-semibold text-[#526377] dark:text-[#A6A6A6]\">Photoshope</span>\n                                            <span class=\" font-semibold text-[#526377] dark:text-[#A6A6A6\">90%</span>\n                                        </div>\n                                        <div class=\"w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]\">\n                                            <div class=\"bg-[#ca56f2] h-1 rounded-full\" style=\"width: 90%\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <!-- button group -->\n                                <div class=\"col-span-1\">\n                                    <h4 class=\"text-5xl dark:text-white font-medium mb-8\"> Knowledges </h4>\n                                    <div class=\"flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4 flex-wrap\">\n                                        <button class=\"resume-btn\">Digital Design</button>\n                                        <button class=\"resume-btn\">Marketing</button>\n                                        <button class=\"resume-btn\">Social Media</button>\n                                        <button class=\"resume-btn\">Print</button>\n                                        <button class=\"resume-btn\">Time Management</button>\n                                        <button class=\"resume-btn\">Flexibility</button>\n                                        <button class=\"resume-btn\">Print</button>\n                                        <button class=\"resume-btn\">Print</button>\n                                        <button class=\"resume-btn\">Time Management</button>\n                                        <button class=\"resume-btn\">Flexibility</button>\n                                        <button class=\"resume-btn\">Print</button>\n                                    </div>\n                                </div>\n                                <!-- end button group -->\n                            </div>\n                        </div>\n\n\n                        <!-- footer  start-->\n                        <footer class=\"overflow-hidden rounded-b-2xl\">\n                            <p class=\"text-center py-6 text-gray-lite dark:text-color-910\"> © 2022 All Rights Reserved\n                                by <a class=\"hover:text-[#FA5252] duration-300 transition\" href=\"https://themeforest.net/user/ib-themes\" target=\"_blank\" rel=\"noopener noreferrer\">ib-themes</a>. </p>\n                        </footer>\n                        <!-- footer ends -->\n                    </div>\n                </section>\n                <!-- resume page contant End -->\n            </div>\n        </div>\n    </div>\n\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_resume_resume_module_ts.js.map