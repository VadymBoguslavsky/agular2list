webpackJsonp([1,5],{

/***/ 1012:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(600);


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(556);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AuthService = (function () {
    function AuthService(http, router, location, 
        // private _flash: SimpleNotificationsModule,
        config) {
        this.http = http;
        this.router = router;
        this.location = location;
        this.isLoggedIn = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.baseUrl = config.serverUrl;
        this.tokenUrl = config.serverUrl + "/oauth/token?client_id=" + config.clientId + "&grant_type=password";
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        return this.http.post(this.tokenUrl, body, { headers: this.headers })
            .subscribe(function (res) {
            if (res.status == 200) {
                _this.setAccessToken(res.json().access_token);
                _this.setLogIn(true);
                _this.router.navigate(['/admin']);
            }
        }, function (error) {
            _this.handleError(error.text(), 'Login failed!');
        });
    };
    AuthService.prototype.logout = function () {
        this.removeAccessToken();
        this.setLogIn(false);
        this.router.navigate(['/login']);
    };
    AuthService.prototype.registration = function (user) {
        var _this = this;
        var url = this.baseUrl + "/api/users";
        var body = JSON.stringify({ user: user });
        this.http.post(url, body, { headers: this.headers })
            .subscribe(function (res) {
            if (res.status == 200) {
                _this.router.navigate(['/login']);
            }
        }, function (error) {
            _this.handleError(error.text(), 'Registration failed!');
        });
    };
    AuthService.prototype.checkConfirmationToken = function (confirmation_token) {
        var _this = this;
        var url = this.baseUrl + "/api/users/" + confirmation_token + "/confirm_email";
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) {
            _this.router.navigate(['/login']);
            _this.handleError(error, 'Could not confirm email address!');
        });
    };
    AuthService.prototype.setAccessToken = function (token) {
        localStorage.setItem('token', token);
    };
    AuthService.prototype.setLogIn = function (value) {
        this._isLoggedIn = value;
        this.isLoggedIn.next(this._isLoggedIn);
    };
    AuthService.prototype.removeAccessToken = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.handleError = function (error, flash) {
        if (flash === void 0) { flash = null; }
        console.error(error);
        return Promise.reject(error.message || error);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* APP_CONFIG */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__app_config__["c" /* AppConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__app_config__["c" /* AppConfig */]) === 'function' && _d) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/auth.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.tasksUrl = 'https://vadimapi.herokuapp.com/api/tasks';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    TaskService.prototype.getTasks = function () {
        var url = this.tasksUrl + "?access_token=" + localStorage.getItem('token');
        return this.http.get(url)
            .map(function (response) { return response.json(); });
    };
    TaskService.prototype.getTask = function (id) {
        var url = this.tasksUrl + "/" + id + "?access_token=" + localStorage.getItem('token');
        return this.http.get(url);
    };
    TaskService.prototype.createTask = function (task) {
        task['due_date'] = task['due_date']['formatted'];
        console.log(task.due_date);
        var url = this.tasksUrl + "?access_token=" + localStorage.getItem('token');
        return this.http.post(url, JSON.stringify(task), this.options).map(function (res) { return res.json(); });
    };
    TaskService.prototype.update = function (task) {
        if (task['due_date']) {
            task['due_date'] = task['due_date']['formatted'];
        }
        var url = this.tasksUrl + "/" + task.id + "?access_token=" + localStorage.getItem('token');
        return this.http.put(url, JSON.stringify(task), this.options).map(function (res) { return res.json(); });
    };
    TaskService.prototype.updateTask = function (task) {
        var url = this.tasksUrl + "/" + task.id + "?access_token=" + localStorage.getItem('token');
        return this.http.put(url, JSON.stringify(task), this.options).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TaskService.prototype.deleteTask = function (id) {
        var url = this.tasksUrl + "/" + id + "?access_token=" + localStorage.getItem('token');
        return this.http.delete(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TaskService.prototype.batchDestroy = function (ids) {
        var body = JSON.stringify({ tasks: ids });
        console.log(body);
        var url = this.tasksUrl + "/batch_destroy?access_token=" + localStorage.getItem('token');
        return this.http.delete(url, { body: body, headers: this.headers })
            .toPromise();
    };
    TaskService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    TaskService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    TaskService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], TaskService);
    return TaskService;
    var _a;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/task.service.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















// If you need to support the browsers/features below, uncomment the import
// and run `npm install import-name-here';
// Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
// Needed for: IE9
// import 'classlist.js';
// Animations
// Needed for: All but Chrome and Firefox, Not supported in IE9
// import 'web-animations-js';
// Date, currency, decimal and percent pipes
// Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
// import 'intl';
// NgClass on SVG elements
// Needed for: IE10, IE11
// import 'classlist.js';
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/polyfills.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(568);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AppConfig; });
/* harmony export (immutable) */ __webpack_exports__["b"] = appConfig;


var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('app.config');
var AppConfig = (function () {
    function AppConfig() {
    }
    return AppConfig;
}());
var CONFIG_PRODUCTION = {
    serverUrl: "https://vadimapi.herokuapp.com",
    apiEndpoint: "https://vadimapi.herokuapp.com/api",
    clientId: "77d40037169ced17fa95bb17a8b2a55b0fcfabbf9b37400fa104a01a37fc1c0b"
};
var CONFIG_DEVELOPMENT = {
    serverUrl: "https://vadimapi.herokuapp.com",
    apiEndpoint: "https://vadimapi.herokuapp.com/api",
    clientId: "77d40037169ced17fa95bb17a8b2a55b0fcfabbf9b37400fa104a01a37fc1c0b"
};
function appConfig() {
    return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production ? CONFIG_PRODUCTION : CONFIG_DEVELOPMENT;
}
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/app.config.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(738)
        }), 
        __metadata('design:paramtypes', [])
    ], AdminComponent);
    return AdminComponent;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/admin.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmEmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ConfirmEmailComponent = (function () {
    function ConfirmEmailComponent(router, route, location, _authService) {
        this.router = router;
        this.route = route;
        this.location = location;
        this._authService = _authService;
        this.loading = true;
        this.checkConfirmationToken();
    }
    ConfirmEmailComponent.prototype.checkConfirmationToken = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            var token = params['confirmation_token'];
            if (params && token) {
                _this._authService.checkConfirmationToken(token)
                    .then(function (res) {
                    _this.loading = false;
                });
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    ConfirmEmailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(739)
        }),
        __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_3__auth__["a" /* AuthService */]; }))), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__auth__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__auth__["a" /* AuthService */]) === 'function' && _d) || Object])
    ], ConfirmEmailComponent);
    return ConfirmEmailComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/confirm-email.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var LoginComponent = (function () {
    function LoginComponent(_authService, fb) {
        this._authService = _authService;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6)])]
        });
    }
    LoginComponent.prototype.login = function () {
        this._authService.login(this.loginForm.value);
    };
    LoginComponent.prototype.isValid = function (field, rule) {
        var field_ = this.loginForm.controls[field];
        return (field_.hasError(rule) && field_.touched) ? false : true;
    };
    LoginComponent.prototype.isValidCompletely = function (field) {
        var field_ = this.loginForm.controls[field];
        return (!field_.valid && field_.touched) ? false : true;
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(740)
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthService */]; }))),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/login.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var RegistrationComponent = (function () {
    function RegistrationComponent(_authService, fb) {
        this._authService = _authService;
        this.registerForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")
                ])],
            first_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            last_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6)])],
            password_confirmation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6)])]
        }, { validator: this.matchingPasswords('password', 'password_confirmation') });
    }
    RegistrationComponent.prototype.registration = function () {
        this._authService.registration(this.registerForm.value);
    };
    RegistrationComponent.prototype.matchingPasswords = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey];
            var passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
        };
    };
    RegistrationComponent.prototype.isValid = function (field, rule) {
        var field_ = this.registerForm.controls[field];
        return (field_.hasError(rule) && field_.touched) ? false : true;
    };
    RegistrationComponent.prototype.isValidCompletely = function (field) {
        var field_ = this.registerForm.controls[field];
        return (!field_.valid && field_.touched) ? false : true;
    };
    RegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(741)
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthService */]; }))),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _b) || Object])
    ], RegistrationComponent);
    return RegistrationComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/registration.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(742),
            styles: [__webpack_require__(736)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/home.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByFieldPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterByFieldPipe = (function () {
    function FilterByFieldPipe() {
    }
    FilterByFieldPipe.prototype.transform = function (items, key, value) {
        if (items) {
            return items.filter(function (item) {
                // console.log(item)
                return item[key] === value;
            });
        }
    };
    FilterByFieldPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterByField',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], FilterByFieldPipe);
    return FilterByFieldPipe;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/filter-by-field.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByFieldPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortByFieldPipe = (function () {
    function SortByFieldPipe() {
    }
    SortByFieldPipe.prototype.transform = function (items, field, desc) {
        if (desc === void 0) { desc = false; }
        if (items) {
            return items.sort(function (a, b) {
                var A = getFormatted(a);
                var B = getFormatted(b);
                return !desc ? _sort(A, B) : _sort(B, A);
            });
        }
        function getFormatted(s) {
            return typeof s == 'string' ? s[field].toUpperCase() : s[field];
        }
        function _sort(A, B) {
            return (A < B) ? -1 : (A > B) ? 1 : 0;
        }
    };
    SortByFieldPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sortByField',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], SortByFieldPipe);
    return SortByFieldPipe;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/sort-by-field.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_by_field__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sort_by_field__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TaskListComponent = (function () {
    function TaskListComponent(taskService, router, filterByField, sortByField, _flashMessagesService, route, location) {
        this.taskService = taskService;
        this.router = router;
        this.filterByField = filterByField;
        this.sortByField = sortByField;
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.location = location;
        this.tasks = [];
        this.selectedTasks = [];
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].timer(0, 5000);
        timer.subscribe(function () { return _this.getTasks(); });
    };
    TaskListComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
            _this.refreshPipes(tasks);
        });
    };
    TaskListComponent.prototype.isExists = function (obj) {
        if (obj && obj !== undefined && obj.length) {
            return true;
        }
        return false;
    };
    TaskListComponent.prototype.updateCheckedOptions = function (task, $event) {
        var tasks = this.selectedTasks;
        if ($event.target.checked) {
            tasks.push(task.id);
            task.marked = true;
        }
        else {
            tasks.forEach(function (t, index) {
                if (t === task.id) {
                    tasks.splice(index, 1);
                    task.marked = false;
                    return;
                }
            });
        }
    };
    TaskListComponent.prototype.checkAll = function () {
        var _this = this;
        this.selectedTasks = [];
        this.tasks.forEach(function (task, i) {
            _this.selectedTasks.push(task.id);
            task.marked = true;
        });
    };
    TaskListComponent.prototype.uncheckAll = function () {
        this.selectedTasks = [];
        this.tasks.forEach(function (task, i) {
            if (task.marked === true) {
                task.marked = false;
            }
        });
    };
    TaskListComponent.prototype.batchDestroy = function (ids) {
        var _this = this;
        if (confirm('Are you sure?')) {
            this.taskService.batchDestroy(ids)
                .then(function (res) {
                var ids = res.json();
                console.log(ids);
                if (!ids)
                    return false;
                for (var i = 0; i < _this.tasks.length; i++) {
                    if (_this.tasks[i]['marked'] === true) {
                        _this.tasks.splice(i, 1);
                        i--;
                    }
                }
                _this.refreshPipes(_this.tasks);
                _this.selectedTasks = [];
                _this._flashMessagesService.show('You have succesfully deleted tasks', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
            });
        }
    };
    TaskListComponent.prototype.refreshTasks = function (tasks) {
        this.taskService.tasks.next(tasks);
        this.refreshPipes(tasks);
    };
    TaskListComponent.prototype.update = function (task) {
        this.taskService.update(task)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error);
        });
        this._flashMessagesService.show('You have succesfully updated tasks', { cssClass: 'alert-success', timeout: 5000 });
    };
    TaskListComponent.prototype.refreshPipes = function (tasks) {
        this.activeTasks = this.filterByField.transform(tasks, 'completed', false);
        this.completedTasks = this.filterByField.transform(tasks, 'completed', true);
    };
    TaskListComponent.prototype.goToShow = function (task) {
        var taskLink = ['/admin/tasks', task.id];
        this.router.navigate(taskLink);
    };
    TaskListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'task-list',
            template: __webpack_require__(743),
            styles: [__webpack_require__(569)],
            providers: [__WEBPACK_IMPORTED_MODULE_5__filter_by_field__["a" /* FilterByFieldPipe */], __WEBPACK_IMPORTED_MODULE_6__sort_by_field__["a" /* SortByFieldPipe */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__task_service__["a" /* TaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__task_service__["a" /* TaskService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__filter_by_field__["a" /* FilterByFieldPipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__filter_by_field__["a" /* FilterByFieldPipe */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__sort_by_field__["a" /* SortByFieldPipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__sort_by_field__["a" /* SortByFieldPipe */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === 'function' && _g) || Object])
    ], TaskListComponent);
    return TaskListComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/task-list.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskNewComponent = (function () {
    function TaskNewComponent(taskService, _flashMessagesService) {
        this.taskService = taskService;
        this._flashMessagesService = _flashMessagesService;
        this.task = new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */];
        this.submitted = false;
        this._date = new Date();
        this.datePickerOptions = {
            inline: true,
            width: "100%",
            dateFormat: 'dd-mm-yyyy',
            disableUntil: {
                day: this._date.getDate() - 1,
                month: this._date.getMonth() + 1,
                year: this._date.getFullYear()
            }
        };
    }
    TaskNewComponent.prototype.onDateChanged = function (event) { };
    TaskNewComponent.prototype.createTask = function (task) {
        this.submitted = true;
        this._flashMessagesService.show('Task succesfully created', { cssClass: 'alert-success', timeout: 5000 });
        this.taskService.createTask(task).subscribe(function (data) { return true; }, function (error) {
            console.log("Error creating task");
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error);
        });
    };
    TaskNewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'task-new',
            template: __webpack_require__(744),
            styles: [__webpack_require__(569)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object])
    ], TaskNewComponent);
    return TaskNewComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/task-new.component.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskShowComponent = (function () {
    function TaskShowComponent(http, route, router, taskService) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.taskService = taskService;
        this.editBtnClicked = false;
        this._date = new Date();
        this.datePickerOptions = {
            inline: true,
            width: "100%",
            dateFormat: 'dd-mm-yyyy',
            disableUntil: {
                day: this._date.getDate() - 1,
                month: this._date.getMonth() + 1,
                year: this._date.getFullYear()
            }
        };
    }
    TaskShowComponent.prototype.onDateChanged = function (event) { };
    TaskShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/tasks';
        this.routeId = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        var postRequest = this.route.params
            .flatMap(function (params) {
            return _this.taskService.getTask(+params['id']);
        });
        postRequest.subscribe(function (response) {
            _this.task = response.json();
        });
    };
    TaskShowComponent.prototype.update = function (task) {
        console.log(task);
        if (task['due_date']) {
            task['due_date'] = task['due_date']['formatted'];
        }
        this.editBtnClicked = true;
        this.taskService.updateTask(task)
            .subscribe(function (data) {
            return true;
        }, function (error) {
            console.log('Error editing Task');
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(error);
        });
    };
    TaskShowComponent.prototype.delete = function (task) {
        var _this = this;
        this.taskService.deleteTask(this.task.id)
            .subscribe(function (data) {
            _this.router.navigate(['/']);
        }, function (error) { return _this.errorMessage = error; });
    };
    TaskShowComponent.prototype.onUpdateClicked = function () {
        this.router.navigate([this.returnUrl]);
        this.editBtnClicked = false;
        //window.location.reload();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__task__["a" /* Task */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__task__["a" /* Task */]) === 'function' && _a) || Object)
    ], TaskShowComponent.prototype, "task", void 0);
    TaskShowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'task-show',
            template: __webpack_require__(745),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__task_service__["a" /* TaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__task_service__["a" /* TaskService */]) === 'function' && _e) || Object])
    ], TaskShowComponent);
    return TaskShowComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/task-show.component.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task(id, title, description, priority, due_date, completed, updated_at, _marked) {
        if (_marked === void 0) { _marked = true; }
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.due_date = due_date;
        this.completed = completed;
        this.updated_at = updated_at;
        this._marked = _marked;
    }
    Object.defineProperty(Task.prototype, "marked", {
        get: function () {
            return this._marked;
        },
        set: function (m) {
            this._marked = m;
        },
        enumerable: true,
        configurable: true
    });
    return Task;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/task.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/environment.js.map

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = ".task-list {\n vertical-align: middle;\n  margin-left: 5%;\n}\n"

/***/ }),

/***/ 599:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 599;


/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(718);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/main.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_task_list_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_task_show_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_task_new_component__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_login__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_registration__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_confirm_email__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_admin__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_guards_signed_in__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_guards_signed_out__ = __webpack_require__(720);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var routes = [
    // {path: '', component: HomeComponent, pathMatch: 'full'},
    // {path: 'home', component: HomeComponent},
    // {path: 'tasks', component: TaskListComponent},
    // {path: 'task/new', component: TaskNewComponent},
    // {path: 'tasks/:id', component: TaskShowComponent},
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
    },
    {
        path: 'login',
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guards_signed_in__["a" /* SignedInGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_6__auth_login__["a" /* LoginComponent */]
    },
    {
        path: 'registration',
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guards_signed_in__["a" /* SignedInGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_7__auth_registration__["a" /* RegistrationComponent */]
    },
    {
        path: 'confirm_email',
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guards_signed_in__["a" /* SignedInGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_8__auth_confirm_email__["a" /* ConfirmEmailComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_9__auth_admin__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guards_signed_out__["a" /* SignedOutGuard */]],
        children: [
            {
                path: '',
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_11__auth_guards_signed_out__["a" /* SignedOutGuard */]],
                children: [
                    { path: 'tasks', component: __WEBPACK_IMPORTED_MODULE_3__task_task_list_component__["a" /* TaskListComponent */] },
                    { path: 'tasks/:id', component: __WEBPACK_IMPORTED_MODULE_4__task_task_show_component__["a" /* TaskShowComponent */] },
                    { path: 'task/new', component: __WEBPACK_IMPORTED_MODULE_5__task_task_new_component__["a" /* TaskNewComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
                ],
            }
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_10__auth_guards_signed_in__["a" /* SignedInGuard */], __WEBPACK_IMPORTED_MODULE_11__auth_guards_signed_out__["a" /* SignedOutGuard */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/app-routing.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(737),
            styles: [__webpack_require__(735)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/app.component.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__task_task_list_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_task_show_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_task_new_component__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__task_task_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__toolbar_toolbar_component__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_mydatepicker__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_mydatepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_mydatepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__task_sort_by_field__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__task_filter_by_field__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_login__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth_registration__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__auth_confirm_email__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_config__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__auth_auth__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__auth_admin__ = __webpack_require__(557);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__task_task_list_component__["a" /* TaskListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__task_task_show_component__["a" /* TaskShowComponent */],
                __WEBPACK_IMPORTED_MODULE_8__task_task_new_component__["a" /* TaskNewComponent */],
                __WEBPACK_IMPORTED_MODULE_13__task_sort_by_field__["a" /* SortByFieldPipe */],
                __WEBPACK_IMPORTED_MODULE_14__task_filter_by_field__["a" /* FilterByFieldPipe */],
                __WEBPACK_IMPORTED_MODULE_18__auth_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__auth_registration__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_20__auth_confirm_email__["a" /* ConfirmEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_23__auth_admin__["a" /* AdminComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_17__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_12_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_16__angular_router__["a" /* RouterModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__task_task_service__["a" /* TaskService */],
                __WEBPACK_IMPORTED_MODULE_22__auth_auth__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */],
                { provide: __WEBPACK_IMPORTED_MODULE_21__app_config__["a" /* APP_CONFIG */],
                    useFactory: __WEBPACK_IMPORTED_MODULE_21__app_config__["b" /* appConfig */]
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/app.module.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignedInGuard = (function () {
    function SignedInGuard(router) {
        this.router = router;
    }
    SignedInGuard.prototype.canActivate = function () {
        if (!localStorage.getItem('token')) {
            return true;
        }
        this.router.navigate(['/admin']);
        return false;
    };
    SignedInGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], SignedInGuard);
    return SignedInGuard;
    var _a;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/signed-in.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignedOutGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignedOutGuard = (function () {
    function SignedOutGuard(router) {
        this.router = router;
    }
    SignedOutGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    SignedOutGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    SignedOutGuard.prototype.checkLogin = function (url) {
        if (localStorage.getItem('token')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    SignedOutGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], SignedOutGuard);
    return SignedOutGuard;
    var _a;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/signed-out.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = (function () {
    function ToolbarComponent(_authService) {
        var _this = this;
        this._authService = _authService;
        this.isLoggedIn = localStorage.getItem('token') ? true : false;
        this._isLoggedInSubscription = _authService.isLoggedIn.subscribe(function (value) {
            if (value == undefined)
                return;
            _this.isLoggedIn = value;
        });
    }
    ToolbarComponent.prototype.logout = function () {
        this._authService.logout();
    };
    ToolbarComponent.prototype.ngOnDestroy = function () {
        this._isLoggedInSubscription.unsubscribe();
    };
    ToolbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(746)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_auth__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], ToolbarComponent);
    return ToolbarComponent;
    var _a;
}());
//# sourceMappingURL=/home/vadym/Рабочий стол/final-master/src/toolbar.component.js.map

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<div class=\"container\">\n  <!--<simple-notifications [options]=\"notificationsOptions\"></simple-notifications>-->\n\t<flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\">\n  <h3>Please wait...</h3>\n</div>\n<div *ngIf=\"!loading\">\n  <h2>Congratulations!</h2>\n  <h4>Your Email address was successfully confirmed.</h4>\n  <div class=\"actions\">\n    <a routerLink='/login'>Login</a>\n  </div>\n</div>\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" class=\"form-signin col-md-offset-3 col-md-6\">\n    <!-- Title -->\n    <h3 class=\"form-signin-heading\">Please Login</h3>\n    <!-- Email -->\n    <div class=\"form-group\" [ngClass]=\"{'has-error': !isValidCompletely('email')}\">\n      <label for=\"inputEmail\" class=\"control-label\">Email address</label>\n      <input formControlName=\"email\" type=\"email\" \n        class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\n        <div *ngIf=\"!isValid('email', 'required')\" class=\"help-block\">* Email is required!</div>\n        <div *ngIf=\"!isValid('email', 'pattern')\" class=\"help-block\">* Email is not correct!</div>\n    </div>\n    <!-- Password -->\n    <div class=\"form-group\" [ngClass]=\"{'has-error': !isValidCompletely('password')}\">\n      <label for=\"inputPassword\" class=\"control-label\">Password</label>\n      <input formControlName=\"password\" type=\"password\"\n        class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\n      <div *ngIf=\"!isValid('password', 'required')\" class=\"help-block\">* Password is required!</div>\n      <div *ngIf=\"!isValid('password', 'minlength')\" class=\"help-block\">* Minimum password length is 6!</div>\n    </div>\n    <!-- Actions -->\n    <button [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"btn btn-default\">Login</button>\n    <a class=\"btn btn-info\" routerLink=\"/registration\">Sign up</a>\n  </form>\n</div>\n"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"registration()\" class=\"form-signin col-md-offset-3 col-md-6\">\n    <!-- Title -->\n    <h3 class=\"form-signin-heading\">Please Sign up</h3>\n    <!-- Email -->\n    <div class=\"form-group\" [ngClass]=\"{'has-error': !isValidCompletely('email')}\">\n      <label for=\"inputEmail\" class=\"control-label\">Email address</label>\n      <input formControlName=\"email\" type=\"email\" \n        class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\n        <div *ngIf=\"!isValid('email', 'required')\" class=\"help-block\">* Email is required!</div>\n        <div *ngIf=\"!isValid('email', 'pattern')\" class=\"help-block\">* Email is not correct!</div>\n    </div>\n    <!-- First Name -->\n    <div class=\"form-group\" [ngClass]=\"{'has-error': !isValidCompletely('first_name')}\">\n      <label for=\"inputEmail\" class=\"control-label\">First Name</label>\n      <input formControlName=\"first_name\" type=\"text\" \n        class=\"form-control\" id=\"inputFirstName\" placeholder=\"First Name\">\n        <div *ngIf=\"!isValid('first_name', 'required')\" class=\"help-block\">* First Name is required!</div>\n    </div>\n    <!-- Last Name -->\n    <div class=\"form-group\" [ngClass]=\"{'has-error': !isValidCompletely('last_name')}\">\n      <label for=\"inputEmail\" class=\"control-label\">Last Name</label>\n      <input formControlName=\"last_name\" type=\"text\" \n        class=\"form-control\" id=\"inputLastName\" placeholder=\"Last Name\">\n        <div *ngIf=\"!isValid('last_name', 'required')\" class=\"help-block\">* Last Name is required!</div>\n    </div>\n    <!-- Password -->\n    <div class=\"form-group\" [ngClass]=\"{'has-error': !isValidCompletely('password')}\">\n      <label for=\"inputPassword\" class=\"control-label\">Password</label>\n      <input formControlName=\"password\" type=\"password\"\n        class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\n      <div *ngIf=\"!isValid('password', 'required')\" class=\"help-block\">* Password is required!</div>\n      <div *ngIf=\"!isValid('password', 'minlength')\" class=\"help-block\">* Minimum password length is 6!</div>\n    </div>\n    <!-- Password confirmation -->\n    <div class=\"form-group\" [ngClass]=\"{'has-error': !isValidCompletely('password_confirmation')}\">\n      <label for=\"inputPasswordConfirmation\" class=\"control-label\">Password confirmation</label>\n      <input formControlName=\"password_confirmation\" type=\"password\"\n        id=\"inputPasswordConfirmation\" class=\"form-control\" placeholder=\"Password Confirmation\">\n      <div *ngIf=\"!isValid('password_confirmation', 'required')\" class=\"help-block\">* Confirm Password is required!</div>\n      <div *ngIf=\"!isValid('password_confirmation', 'notEquivalent')\" class=\"help-block\">* Passwords don't match!</div>\n    </div>\n    <!-- Actions -->\n    <button [disabled]=\"!registerForm.valid\" class=\"btn btn-primary\" type=\"submit\">Sign up</button>\n    <a class=\"btn btn-info\" routerLink='/login'>Login</a>\n  </form>\n</div>\n"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12\">\n    <h1> Welcome</h1>\n    <h3>\n      Welcome this is the task list manager. Yse it how you want, just register, log in, aaaand never miss the deadline!\n    </h3>\n  </div>\n</div>"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n <button [disabled]=\"!selectedTasks.length\" (click)=\"batchDestroy(selectedTasks);\"\n        class=\"btn btn-danger\">Delete Selected</button>\n      <button (click)=\"checkAll();\"\n        class=\"btn btn-default\">Check All</button>\n      <button (click)=\"uncheckAll();\"\n        class=\"btn btn-default\">Uncheck All</button>\n\n\n  <h2>Active tasks</h2>\n  <div *ngIf=\"isExists(activeTasks)\">\n    <div class=\"mishas task-list\" *ngFor=\"let task of activeTasks\">\n      <label>\n        <input class=\"misha\" type=\"checkbox\" name=\"selectedTasks\" value=\"{{task}}\" [checked]=\"task.marked\" (change)=\"updateCheckedOptions(task, $event)\"/>\n      </label>\n      <div class=\"hover1 col-lg-10 \">\n        {{task.title}}\n        <a class=\"hoverhhh glyphicon glyphicon-pencil pull-right\" (click)=\"goToShow(task)\"></a>\n        <a [ngClass]=\"{'glyphicon glyphicon-ok': !task.completed, '': task.completed }\"\n          (click)=\"task.completed =  !task.completed; update(task);\" class=\"glyphicon glyphicon-ok hoverhhh pull-right glyph\">\n          <span *ngIf=\"!task.completed\"></span>\n          <span *ngIf=\"task.completed\"></span>\n        </a>\n        <hr>\n      </div>\n\n\n    </div>\n  </div>\n  <br>\n  <h2>Completed tasks</h2>\n  <div *ngIf=\"isExists(completedTasks)\">\n    <div class=\"mishas task-list\" *ngFor=\"let task of completedTasks\">\n      <label>\n        <input class=\"misha\" type=\"checkbox\" name=\"selectedTasks\" value=\"{{task}}\" [checked]=\"task.marked\"\n               (change)=\"updateCheckedOptions(task, $event)\"/>\n      </label>\n      <div class=\"hover1 col-lg-10 \">\n        {{task.title}}\n        <a class=\"hoverhhh glyphicon glyphicon-pencil pull-right\" (click)=\"goToShow(task)\"></a>\n        <a [ngClass]=\"{'': !task.completed, 'glyphicon glyphicon-remove': task.completed }\"\n          (click)=\"task.completed =  !task.completed; update(task);\" class=\"glyphicon glyphicon-remove pull-right glyph hoverhhh\">\n            <span *ngIf=\"!task.completed\"></span>\n            <span *ngIf=\"task.completed\"></span>\n        </a>\n        <hr>\n      </div>\n\n\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form  class=\"input-group col-lg-12\" (ngSubmit)=\"createTask(task); taskForm.reset()\"\n        #taskForm='ngForm'>\n    <div class=\"form-group\">\n      <label for=\"title\">\n        <h3>Task Title</h3>\n      </label>\n      <input type=\"text\" id=\"title\"\n             class=\"form-control\"\n             required\n             name=\"title\"\n             placeholder=\"Task Title\"\n             #title='ngModel'\n             [(ngModel)]='task.title'>\n      <div [hidden]='title.valid || title.pristine'\n           class=\"alert alert-danger\">\n        Title is required\n      </div>\n    </div>\n    <div>\n      <label for=\"description\">\n        <h3>Describe your task</h3>\n      </label>\n      <textarea\n        class=\"form-control\"\n        id=\"description\"\n        required\n        name=\"description\"\n        #description='ngModel'\n        [(ngModel)]='task.description'>\n        </textarea>\n      <div [hidden]='description.valid || description.pristine'\n           class=\"alert alert-danger\">\n        Description is required\n      </div>\n    </div>\n    <label for=\"priority\">\n      <h3>Priority for your task</h3>\n    </label>\n    <input type=\"number\" id=\"priority\"\n           required\n           class=\"form-control\"\n           name=\"priority\"\n           placeholder=\"Task priority\"\n           #priority='ngModel'\n           [(ngModel)]='task.priority'>\n    <br>\n    <br>\n\n    <h3>Expiration date for your task</h3>\n    <br>\n\n    <my-date-picker\n      id=\"due_date\"\n      [options]=\"myDatePickerOptions\"\n      name=\"due_date\"\n      #due_date='ngModel'\n      [(ngModel)]='task.due_date'\n      (dateChanged)=\"onDateChanged($event)\">\n    </my-date-picker>\n    <button type=\"submit\" class=\"btn btn-primary\"\n            [disabled]=\"!taskForm.form.valid\"\n            [hidden]='submitted'>\n      Create task\n    </button>\n    <div [hidden]='!submitted'\n         class=\"alert alert-success\"\n         role=\"alert\">Your task hes been successfully created\n      <a class=\"alert-link\" routerLink='/tasks'>View all Tasks</a>\n    </div>\n  </form>\n </div>\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"task\">\n  <h4>Task title <br/>{{task.title}}</h4>\n  <p>Task id {{task.id}}</p>\n  <p>Task description {{task.description}}</p>\n  <p>Task date {{task.due_date}}</p>\n  <p>Task priority {{task.priority}}</p>\n\n\n  <button type=\"button\" (click)=\"update(task)\" class=\"btn btn-primary\">Edit Task</button>\n  <button type=\"button\" (click)=\"delete(task)\" class=\"btn btn-primary\">Delete</button>\n\n  <div class=\"row\" [hidden]=\"!editBtnClicked\">\n    <div class=\"col-md-8 offset-md-2 col-lg-6 offset-lg-3\">\n      <form #taskForm='ngForm'>\n        <div class=\"form-group\">\n          <label for=\"title\">\n            <h3>Task Title</h3>\n          </label>\n          <input type=\"text\" class=\"form-controle\" id=\"title\"\n                 required\n                 name=\"title\"\n                 placeholder=\"Task Title\"\n                 #title='ngModel'\n                 [(ngModel)]='task.title'>\n          <div [hidden]='title.valid || title.pristine'\n               class=\"alert alert-danger\">\n            Title is required\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"description\">\n            <h3>Describe your task</h3>\n          </label>\n          <textarea class=\"form-control\"\n                    id=\"description\"\n                    required\n                    name=\"description\"\n                    cols=\"30\" rows=\"10\"\n                    #description='ngModel'\n                    [(ngModel)]='task.description'>\n        </textarea>\n          <div [hidden]='description.valid || description.pristine'\n               class=\"alert alert-danger\">\n            Description is required\n          </div>\n          <input type=\"number\" class=\"form-controle\" id=\"priority\"\n                 required\n                 name=\"priority\"\n                 placeholder=\"Task priority\"\n                 #priority='ngModel'\n                 [(ngModel)]='task.priority'>\n          <my-date-picker\n            [options]=\"myDatePickerOptions\"\n            name=\"due_date\"\n            #due_date='ngModel'\n            [(ngModel)]='task.due_date'\n            (dateChanged)=\"onDateChanged($event)\">\n          </my-date-picker>\n        </div>\n        <button type=\"submit\" (click)=\"update(task); onUpdateClicked()\" class=\"btn btn-primary\"\n                [disabled]=\"!taskForm.form.valid\">Update task\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <ul *ngIf=\"isLoggedIn\" class=\"nav navbar-nav\">\n      <!-- Logged in -->\n      <li class=\"nav-item\">\n        <a routerLink=\"/\" class=\"nav-link\">Home</a>\n      </li>\n      <li>\n        <a routerLink=\"/admin/tasks\" class=\"nav-link\">Tasks</a>\n      </li>\n      <li>\n        <a routerLink=\"/admin/task/new\" class=\"nav-link\">New Task</a>\n      </li>\n\n    </ul>\n    <ul *ngIf=\"isLoggedIn\" class=\"nav navbar-nav navbar-right\">\n      <li>\n        <a  (click)=\"logout();\" href=\"javascript:void(false);\" class=\"nav-link\">Sign out</a>\n      </li>\n    </ul>\n    <ul *ngIf=\"!isLoggedIn\" class=\"nav navbar-nav\">\n      <!-- Logged out -->\n      <li class=\"nav-item\">\n        <a routerLink=\"/\" class=\"nav-link\">Home</a>\n      </li>\n      <li>\n        <a routerLink=\"/login\" class=\"nav-link\">Sign in</a>\n      </li>\n      <li>\n        <a routerLink=\"/registration\" class=\"nav-link\">Sign up</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ })

},[1012]);
//# sourceMappingURL=main.bundle.map