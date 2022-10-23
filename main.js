(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'about',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_about_about_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 8114)).then(m => m.AboutPageModule)
    },
    {
        path: 'resume',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_resume_resume_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/resume/resume.module */ 5809)).then(m => m.ResumePageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomePageModule)
    },
    {
        path: 'works',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_works_works_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/works/works.module */ 8076)).then(m => m.WorksPageModule)
    },
    {
        path: 'blogs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_blogs_blogs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/blogs/blogs.module */ 9579)).then(m => m.BlogsPageModule)
    },
    {
        path: 'contacts',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_contacts_contacts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contacts/contacts.module */ 464)).then(m => m.ContactsPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/shared/shared.module */ 2279);







// import firebase + enviornment







let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_8__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig),
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__.AngularFireAuthModule,
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestoreModule,
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_11__.AngularFireStorageModule,
            _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_12__.AngularFireDatabaseModule,
            _module_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component.html?ngResource */ 2474);
/* harmony import */ var _about_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.scss?ngResource */ 3553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() { }
};
AboutComponent.ctorParameters = () => [];
AboutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutComponent);



/***/ }),

/***/ 2392:
/*!*****************************************************!*\
  !*** ./src/app/components/blogs/blogs.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogsComponent": () => (/* binding */ BlogsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _blogs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blogs.component.html?ngResource */ 7713);
/* harmony import */ var _blogs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blogs.component.scss?ngResource */ 9404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let BlogsComponent = class BlogsComponent {
    constructor() { }
    ngOnInit() { }
};
BlogsComponent.ctorParameters = () => [];
BlogsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-blogs',
        template: _blogs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_blogs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BlogsComponent);



/***/ }),

/***/ 8970:
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _contacts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.component.html?ngResource */ 2884);
/* harmony import */ var _contacts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.component.scss?ngResource */ 8231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ContactsComponent = class ContactsComponent {
    constructor() { }
    ngOnInit() { }
};
ContactsComponent.ctorParameters = () => [];
ContactsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contacts',
        template: _contacts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_contacts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactsComponent);



/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 2011);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 5413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ 2486);





let HeaderComponent = class HeaderComponent {
    constructor(helper) {
        this.helper = helper;
        this.listenParentHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
    }
    buttonClick(page) {
        this.helper.pageName = page;
        this.listenParentHandler.emit(page);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__.HelperService }
];
HeaderComponent.propDecorators = {
    listenParentHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header',
        template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.html?ngResource */ 2403);
/* harmony import */ var _home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss?ngResource */ 6176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() { }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home1',
        template: _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeComponent);



/***/ }),

/***/ 6837:
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeComponent": () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _resume_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resume.component.html?ngResource */ 9846);
/* harmony import */ var _resume_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resume.component.scss?ngResource */ 2539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ResumeComponent = class ResumeComponent {
    constructor() { }
    ngOnInit() { }
};
ResumeComponent.ctorParameters = () => [];
ResumeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-resume',
        template: _resume_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_resume_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResumeComponent);



/***/ }),

/***/ 7017:
/*!*****************************************************!*\
  !*** ./src/app/components/works/works.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorksComponent": () => (/* binding */ WorksComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _works_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./works.component.html?ngResource */ 2649);
/* harmony import */ var _works_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./works.component.scss?ngResource */ 7605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let WorksComponent = class WorksComponent {
    constructor() { }
    ngOnInit() { }
};
WorksComponent.ctorParameters = () => [];
WorksComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-works',
        template: _works_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_works_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WorksComponent);



/***/ }),

/***/ 2279:
/*!************************************************!*\
  !*** ./src/app/module/shared/shared.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/header/header.component */ 3646);
/* harmony import */ var src_app_components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/about/about.component */ 2468);
/* harmony import */ var src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/home/home.component */ 8263);
/* harmony import */ var src_app_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/resume/resume.component */ 6837);
/* harmony import */ var src_app_components_works_works_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/works/works.component */ 7017);
/* harmony import */ var src_app_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/contacts/contacts.component */ 8970);
/* harmony import */ var src_app_components_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/blogs/blogs.component */ 2392);










let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
            src_app_components_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent,
            src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
            src_app_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__.ResumeComponent,
            src_app_components_works_works_component__WEBPACK_IMPORTED_MODULE_4__.WorksComponent,
            src_app_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__.ContactsComponent,
            src_app_components_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_6__.BlogsComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        ],
        exports: [
            src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
            src_app_components_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent,
            src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
            src_app_components_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__.ResumeComponent,
            src_app_components_works_works_component__WEBPACK_IMPORTED_MODULE_4__.WorksComponent,
            src_app_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__.ContactsComponent,
            src_app_components_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_6__.BlogsComponent
        ]
    })
], SharedModule);



/***/ }),

/***/ 2486:
/*!********************************************!*\
  !*** ./src/app/services/helper.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperService": () => (/* binding */ HelperService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);




let HelperService = class HelperService {
    constructor(menu) {
        this.menu = menu;
        this.userData = {
            uid: '',
            email: '',
            name: '',
            profile: '',
            isverified: false,
            CreatedOn: '',
            isactive: false,
        };
        this.pageName = 'home';
    }
    getTodayDate() {
        var d = moment__WEBPACK_IMPORTED_MODULE_0__().format('DD-MM-YYYY hh:mm:ss A').toString();
        return d;
    }
    GetPrimarykey() {
        // return new Date().getTime();
        return Number(new Date()
            .getTime()
            .toString()
            .substring(7, new Date().getTime().toString().length));
    }
    base64toBlob(base64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);
        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);
            var bytes = new Array(end - begin);
            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, { type: contentType });
    }
    ShowMenu() {
        this.menu.toggle();
    }
};
HelperService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.MenuController }
];
HelperService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], HelperService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyC4FrUcx8K-_kDRxyIklBGCgc8VzvtVqJM",
        authDomain: "portfolio-f0d20.firebaseapp.com",
        projectId: "portfolio-f0d20",
        storageBucket: "portfolio-f0d20.appspot.com",
        messagingSenderId: "717137529651",
        appId: "1:717137529651:web:16018c13023e89ba2b8c46"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-71f28cd7_js-node_modules_ionic_core_dist_esm_t-0c999b",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-71f28cd7_js-node_modules_ionic_core_dist_esm_t-0c999b",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 2702,
	"./ta.js": 2702,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3553:
/*!******************************************************************!*\
  !*** ./src/app/components/about/about.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 9404:
/*!******************************************************************!*\
  !*** ./src/app/components/blogs/blogs.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9ncy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 8231:
/*!************************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 5413:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 6176:
/*!****************************************************************!*\
  !*** ./src/app/components/home/home.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 2539:
/*!********************************************************************!*\
  !*** ./src/app/components/resume/resume.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bWUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 7605:
/*!******************************************************************!*\
  !*** ./src/app/components/works/works.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3Jrcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 2474:
/*!******************************************************************!*\
  !*** ./src/app/components/about/about.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\n  <div class=\"container lg:rounded-2xl bg-white dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20\">\n      <div data-aos=\"fade\" class=\"aos-init aos-animate\">\n          <div class=\"py-12\">\n              <!-- about page title -->\n              <h2 class=\"after-effect after:left-52 mt-12 lg:mt-0\"> About Me </h2>\n              <div class=\"grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center\">\n                  <div class=\"col-span-12 md:col-span-4\">\n                      <!-- about me image -->\n                      <img class=\"w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0\" src=\"assets/content/images/about/about.jpg\" alt=\"about image\">\n                  </div>\n                  <div class=\"col-span-12 md:col-span-8 space-y-2.5\">\n                      <!-- who am i content  -->\n                      <div class=\"md:mr-12 xl:mr-16\">\n                          <h3 class=\"text-4xl font-medium dark:text-white mb-2.5\"> Who am i? </h3>\n                          <p class=\"text-gray-lite dark:text-color-910 leading-7\"> I'm Creative\n                              Director and UI/UX Designer from Sydney, Australia, working in web\n                              development and print media. I enjoy turning complex problems into\n                              simple, beautiful and intuitive designs. </p>\n                          <p class=\"text-gray-lite leading-7 mt-2.5 dark:text-color-910\"> My aim is to\n                              bring across your message and identity in the most creative way. I\n                              created web design for many famous brand companies. </p>\n                      </div>\n\n                      <!-- personal info -->\n                      <div>\n                          <h3 class=\"text-4xl font-medium my-5 dark:text-white\"> Personal Info </h3>\n                          <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-6\">\n                              <div class=\"flex\">\n                                  <span class=\"text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-\">\n                                      <i class=\"fa-solid fa-mobile-screen-button\"></i>\n                                  </span>\n                                  <div class=\"space-y-1\">\n                                      <p class=\"text-xs text-gray-lite dark:text-color-910\"> Phone\n                                      </p>\n                                      <h6 class=\"font-medium dark:text-white\"> +123 456 7890 </h6>\n                                  </div>\n                              </div>\n\n                              <div class=\"flex\">\n                                  <span class=\"text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-\">\n                                      <i class=\"fa-solid fa-location-dot\"></i>\n                                  </span>\n                                  <div class=\"space-y-1\">\n                                      <p class=\"text-xs text-gray-lite dark:text-color-910\"> Location\n                                      </p>\n                                      <h6 class=\"font-medium dark:text-white\"> Hong kong china </h6>\n                                  </div>\n                              </div>\n\n                              <div class=\"flex\">\n                                  <span class=\"text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-\">\n                                      <i class=\"fa-solid fa-envelope-open-text\"></i>\n                                  </span>\n                                  <div class=\"space-y-1\">\n                                      <p class=\"text-xs text-gray-lite dark:text-color-910\"> Email\n                                      </p>\n                                      <h6 class=\"font-medium dark:text-white\"> example@mail.com </h6>\n                                  </div>\n                              </div>\n\n                              <div class=\"flex\">\n                                  <span class=\"text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-\">\n                                      <i class=\"fa-solid fa-calendar-days\"></i>\n                                  </span>\n                                  <div class=\"space-y-1\">\n                                      <p class=\"text-xs text-gray-lite dark:text-color-910\"> Birthday\n                                      </p>\n                                      <h6 class=\"font-medium dark:text-white\"> May 27, 1990 </h6>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n\n          <!-- whai i do contain -->\n          <div class=\"pb-12\">\n              <h3 class=\"text-[35px] dark:text-white font-medium pb-5\"> What I do! </h3>\n              <div class=\"grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3\">\n                  <div class=\"about-box dark:bg-transparent bg-[#fcf4ff]\">\n                      <img class=\"w-10 h-10 object-contain block\" src=\"assets/content/images/icons/icon.svg\" alt=\"icon\">\n                      <div class=\"space-y-2\">\n                          <h3 class=\"dark:text-white text-2xl font-semibold\"> Ui/Ux Design </h3>\n                          <p class=\"leading-8 text-gray-lite dark:text-[#A6A6A6]\"> Lorem ipsum dolor\n                              sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>\n                      </div>\n                  </div>\n\n                  <div class=\"about-box dark:bg-transparent bg-[#fefaf0]\">\n                      <img class=\"w-10 h-10 object-contain block\" src=\"assets/content/images/icons/icon1.svg\" alt=\"icon\">\n                      <div class=\"space-y-2\">\n                          <h3 class=\"dark:text-white text-2xl font-semibold\"> App Development </h3>\n                          <p class=\"leading-8 text-gray-lite dark:text-[#A6A6A6]\"> Lorem ipsum dolor\n                              sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>\n                      </div>\n                  </div>\n\n                  <div class=\"about-box dark:bg-transparent bg-[#fcf4ff]\">\n                      <img class=\"w-10 h-10 object-contain block\" src=\"assets/content/images/icons/icon2.svg\" alt=\"icon\">\n                      <div class=\"space-y-2\">\n                          <h3 class=\"dark:text-white text-2xl font-semibold\"> Photography </h3>\n                          <p class=\"leading-8 text-gray-lite dark:text-[#A6A6A6]\"> Lorem ipsum dolor\n                              sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>\n                      </div>\n                  </div>\n\n                  <div class=\"about-box dark:bg-transparent bg-[#fff4f4]\">\n                      <img class=\"w-10 h-10 object-contain block\" src=\"assets/content/images/icons/icon3.svg\" alt=\"icon\">\n                      <div class=\"space-y-2\">\n                          <h3 class=\"dark:text-white text-2xl font-semibold\"> Photography </h3>\n                          <p class=\"leading-8 text-gray-lite dark:text-[#A6A6A6]\"> Lorem ipsum dolor\n                              sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>\n                      </div>\n                  </div>\n\n                  <div class=\"about-box dark:bg-transparent bg-[#fff0f8]\">\n                      <img class=\"w-10 h-10 object-contain block\" src=\"assets/content/images/icons/icon4.svg\" alt=\"icon\">\n                      <div class=\"space-y-2\">\n                          <h3 class=\"dark:text-white text-2xl font-semibold\"> Managment </h3>\n                          <p class=\"leading-8 text-gray-lite dark:text-[#A6A6A6]\"> Lorem ipsum dolor\n                              sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>\n                      </div>\n                  </div>\n\n                  <div class=\"about-box dark:bg-transparent bg-[#f3faff]\">\n                      <img class=\"w-10 h-10 object-contain block\" src=\"assets/content/images/icons/icon5.svg\" alt=\"icon\">\n                      <div class=\"space-y-2\">\n                          <h3 class=\"dark:text-white text-2xl font-semibold\"> Web Development </h3>\n                          <p class=\"leading-8 text-gray-lite dark:text-[#A6A6A6]\"> Lorem ipsum dolor\n                              sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>\n                      </div>\n                  </div>\n              </div>\n          </div>\n\n         \n\n          <!-- footer section start -->\n          <footer class=\"overflow-hidden rounded-b-2xl\" style=\"background: transparent;\">\n              <p class=\"text-center py-6 text-gray-lite dark:text-color-910\"> © 2022 All Rights\n                  Reserved by <a class=\"hover:text-[#FA5252] duration-300 transition\" href=\"https://themeforest.net/user/ib-themes\" target=\"_blank\" rel=\"noopener noreferrer\"> ib-themes</a>. </p>\n          </footer>\n          <!-- footer section end -->\n      </div>\n  </div>\n</div>";

/***/ }),

/***/ 7713:
/*!******************************************************************!*\
  !*** ./src/app/components/blogs/blogs.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\n  blogs works!\n</p>\n";

/***/ }),

/***/ 2884:
/*!************************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\n  contacts works!\n</p>\n";

/***/ }),

/***/ 2011:
/*!********************************************************************!*\
  !*** ./src/app/components/header/header.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<header class=\"flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]\">\n  <div class=\"flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent dark:bg-black\">\n      <div class=\"flex justify-between w-full items-center space-x-4 lg:my-8 my-5\">\n          <!-- website logo -->\n          <a class=\"text-5xl font-semibold\" href=\"index.htm\">\n              <img class=\"h-[26px] lg:h-[32px]\" src=\"assets/content/images/logo/logo.png\" alt=\"logo\">\n          </a>\n          <div class=\"flex items-center\">\n              <!-- light and dark mode button -->\n              <button id=\"theme-toggle-mobile\" type=\"button\" class=\"dark-light-btn lg:hidden w-[44px] h-[44px] ml-2\">\n                  <i id=\"theme-toggle-dark-icon-mobile\" class=\"fa-solid text-xl fa-moon hidden\"></i>\n                  <i id=\"theme-toggle-light-icon-mobile\" class=\"fa-solid fa-sun text-xl hidden\"></i>\n              </button>\n              <!-- mobile toggle button -->\n              <button id=\"menu-toggle\" type=\"button\" class=\"menu-toggle-btn\">\n                  <i id=\"menu-toggle-open-icon\" class=\"fa-solid fa-bars text-xl \"></i>\n                  <i id=\"menu-toggle-close-icon\" class=\"fa-solid fa-xmark text-xl hidden  \"></i>\n              </button>\n          </div>\n      </div>\n  </div>\n\n  <!-- header items two for large screens -->\n  <nav class=\"hidden lg:block\">\n      <ul class=\"flex my-12\">\n          <li>\n              <a class=\"\" [ngClass]=\"this.helper.pageName=='home'?'menu-item-two-active':'menu-item-two'\" (click)=\"buttonClick('home')\">\n                  <span class=\"mr-2 text-base\">\n                      <i class=\"fa-solid fa-house\"></i>\n                  </span> Home </a>\n          </li>\n          <li>\n              <a class=\"\" [ngClass]=\"this.helper.pageName=='about'?'menu-item-two-active':'menu-item-two'\" (click)=\"buttonClick('about')\">\n                  <span class=\"mr-2 text-base\">\n                      <i class=\"fa-regular fa-user\"></i>\n                  </span> About </a>\n          </li>\n          <li>\n              <a [ngClass]=\"this.helper.pageName=='resume'?'menu-item-two-active':'menu-item-two'\" (click)=\"buttonClick('resume')\">\n                  <span class=\"mr-2 text-base\">\n                      <i class=\"fa-regular fa-file-lines\"></i>\n                  </span> Resume </a>\n          </li>\n          <li>\n              <a [ngClass]=\"this.helper.pageName=='works'?'menu-item-two-active':'menu-item-two'\" (click)=\"buttonClick('works')\">\n                  <span class=\"mr-2 text-base\">\n                      <i class=\"fas fa-briefcase\"></i>\n                  </span> Works </a>\n          </li>\n          <li>\n              <a [ngClass]=\"this.helper.pageName=='blogs'?'menu-item-two-active':'menu-item-two'\" (click)=\"buttonClick('blogs')\">\n                  <span class=\"mr-2 text-base\">\n                      <i class=\"fa-brands fa-blogger\"></i>\n                  </span> Blogs </a>\n          </li>\n          <li>\n              <a [ngClass]=\"this.helper.pageName=='contact'?'menu-item-two-active':'menu-item-two'\" (click)=\"buttonClick('contact')\">\n                  <span class=\"mr-2 text-base\">\n                      <i class=\"fa-solid fa-address-book\"></i>\n                  </span> Contact </a>\n          </li>\n          <li>\n              <!-- light and dark mode button -->\n              <button id=\"theme-toggle\" type=\"button\" class=\"dark-light-btn w-[44px] h-[44px] ml-2\">\n                  <i id=\"theme-toggle-dark-icon\" class=\"fa-solid text-xl fa-moon hidden\"></i>\n                  <i id=\"theme-toggle-light-icon\" class=\"fa-solid fa-sun text-xl hidden\"></i>\n              </button>\n          </li>\n      </ul>\n  </nav>\n\n  <!-- mobile menu start -->\n  <nav id=\"navbar\" class=\"hidden lg:hidden\">\n      <ul class=\"block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]\">\n          <li>\n              <a class=\"\" [ngClass]=\"this.helper.pageName=='home'?'mobile-menu-items-active':'mobile-menu-items'\"  (click)=\"buttonClick('home')\">\n                  <span class=\"mr-2 text-xl\">\n                      <i class=\"fa-solid fa-house\"></i>\n                  </span> Home </a>\n          </li>\n          <li>\n              <a [ngClass]=\"this.helper.pageName=='about'?'mobile-menu-items-active':'mobile-menu-items'\" (click)=\"buttonClick('about')\">\n                  <span class=\"mr-2 text-xl\">\n                      <i class=\"fa-regular fa-user\"></i>\n                  </span> About </a>\n          </li>\n          <li>\n              <a [ngClass]=\"this.helper.pageName=='resume'?'mobile-menu-items-active':'mobile-menu-items'\" (click)=\"buttonClick('resume')\">\n                  <span class=\"mr-2 text-xl\">\n                      <i class=\"fa-regular fa-file-lines\"></i>\n                  </span> Resume </a>\n          </li>\n          <li>\n              <a [ngClass]=\"this.helper.pageName=='works'?'mobile-menu-items-active':'mobile-menu-items'\" (click)=\"buttonClick('works')\">\n                  <span class=\"mr-2 text-xl\">\n                      <i class=\"fas fa-briefcase\"></i>\n                  </span> Works </a>\n          </li>\n          <li>\n              <a [ngClass]=\"this.helper.pageName=='blogs'?'mobile-menu-items-active':'mobile-menu-items'\" (click)=\"buttonClick('blogs')\">\n                  <span class=\"mr-2 text-xl\">\n                      <i class=\"fa-brands fa-blogger\"></i>\n                  </span> Blogs </a>\n          </li>\n          <li>\n              <a [ngClass]=\"this.helper.pageName=='contact'?'mobile-menu-items-active':'mobile-menu-items'\" (click)=\"buttonClick('contact')\">\n                  <span class=\"mr-2 text-xl\">\n                      <i class=\"fa-solid fa-address-book\"></i>\n                  </span> Contact </a>\n          </li>\n      </ul>\n  </nav>\n  <!-- mobile menu end -->\n</header>";

/***/ }),

/***/ 2403:
/*!****************************************************************!*\
  !*** ./src/app/components/home/home.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\n  home works!\n</p>\n";

/***/ }),

/***/ 9846:
/*!********************************************************************!*\
  !*** ./src/app/components/resume/resume.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\n  resume works!\n</p>\n";

/***/ }),

/***/ 2649:
/*!******************************************************************!*\
  !*** ./src/app/components/works/works.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\n  works works!\n</p>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map