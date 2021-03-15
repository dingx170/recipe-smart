(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+ky1":
/*!********************************************************************************!*\
  !*** ./src/app/components/mealplan/oldplan/recipelist/recipelist.component.ts ***!
  \********************************************************************************/
/*! exports provided: RecipelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipelistComponent", function() { return RecipelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_mealplan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/mealplan.service */ "PQXq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a1) { return [".", a1]; };
function RecipelistComponent_tbody_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const key_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.recipe.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, item_r1.recipe.recipe_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.recipe.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.quantity);
} }
class RecipelistComponent {
    constructor(recipeService, route, authService) {
        this.recipeService = recipeService;
        this.route = route;
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.getSession().subscribe(data => {
            this.userId = data.user_id;
            console.log("Get response: " + JSON.stringify(data));
        });
        this.mealplanId = this.route.snapshot.params['mealplanId'];
        this.getRecipeList();
    }
    getRecipeList() {
        var rxjsData = this.recipeService.getRecipeListByMealplanID(this.mealplanId, this.userId);
        rxjsData.subscribe((data) => {
            console.log(data);
            this.myrecipes = data;
        });
    }
}
RecipelistComponent.ɵfac = function RecipelistComponent_Factory(t) { return new (t || RecipelistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mealplan_service__WEBPACK_IMPORTED_MODULE_1__["MealplanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
RecipelistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipelistComponent, selectors: [["app-recipelist"]], decls: 16, vars: 1, consts: [[1, "subtitle-text"], [1, "tab", "table", "table-borderless"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [3, "routerLink"], ["alt", "Image", 1, "img-responsive", "recipe-pic", 3, "src"], ["type", "checkbox"]], template: function RecipelistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Recipe List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RecipelistComponent_tbody_15_Template, 13, 7, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myrecipes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".recipe-pic[_ngcontent-%COMP%] {\n    height: 220px;\n    width: 270px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.recipe-name[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 50px;\n    font-size: 20px;\n    font-weight: bold;\n    color: rgb(228, 176, 6)\n}\n\n.page-text[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 50px;\n    color: #f58f8fff;\n    font-weight: bold;\n    font-family: cursive;\n}\n\n.subtitle-text[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 35px;\n    color: #f58f8fff;\n    font-weight: bold;\n    font-family: cursive;\n}\n\n.filter-btn[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f6cd4cff; \n    color: white;\n}\n\n.filter-label[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f6cd4cff; \n    color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\n.form-check-label[_ngcontent-%COMP%]{\n    font-size: 16px;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f58f8fff; \n    border: 1px solid #f58f8fff;\n    color: white;\n}\n\n.submit-text[_ngcontent-%COMP%]{\n    font-family: cursive;\n    font-size: 30px;\n    color: #f58f8fff;\n    font-weight: bold;\n    padding-left: 20px;\n}\n\n.btn-block[_ngcontent-%COMP%]{\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f58f8fff; \n    border: 1px solid #f58f8fff;\n    color: white;\n}\n\n.pic-row[_ngcontent-%COMP%] {\n    min-height: 400px;\n}\n\n.pic-bg[_ngcontent-%COMP%] {\n    background-color: rgb(226, 222, 222);\n}\n\n.pic-holder[_ngcontent-%COMP%] {\n    height: 400px;\n    \n}\n\n.submit-center[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n    width:200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxXQUFXO0FBQ2YiLCJmaWxlIjoicmVjaXBlbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2lwZS1waWMge1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnJlY2lwZS1uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJnYigyMjgsIDE3NiwgNilcbn1cblxuLnBhZ2UtdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiAjZjU4ZjhmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG5cbi5zdWJ0aXRsZS10ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICNmNThmOGZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cblxuLmZpbHRlci1idG4ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjZDRjZmY7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZpbHRlci1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmNkNGNmZjsgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmZvcm0tY2hlY2stbGFiZWx7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNThmOGZmZjsgXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1OGY4ZmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdC10ZXh0e1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogI2Y1OGY4ZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmJ0bi1ibG9ja3tcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OGY4ZmZmOyBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjU4ZjhmZmY7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGljLXJvdyB7XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG59XG5cbi5waWMtYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIyMiwgMjIyKTtcbn1cblxuLnBpYy1ob2xkZXIge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG59XG5cbi5zdWJtaXQtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDoyMDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipelistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipelist',
                templateUrl: './recipelist.component.html',
                styleUrls: ['./recipelist.component.css']
            }]
    }], function () { return [{ type: _services_mealplan_service__WEBPACK_IMPORTED_MODULE_1__["MealplanService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "/kDq":
/*!***************************************!*\
  !*** ./src/app/enums/cuisine.enum.ts ***!
  \***************************************/
/*! exports provided: Cuisine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cuisine", function() { return Cuisine; });
var Cuisine;
(function (Cuisine) {
    Cuisine["None"] = "None";
    Cuisine["Chinese"] = "Chinese";
    Cuisine["Mexican"] = "Mexican";
    Cuisine["Italian"] = "Italian";
    Cuisine["Japanese"] = "Japanese";
    Cuisine["Greek"] = "Greek";
    Cuisine["French"] = "French";
    Cuisine["Thai"] = "Thai";
    Cuisine["Spanish"] = "Spanish";
    Cuisine["Indian"] = "Indian";
    Cuisine["Mediterranean"] = "Mediterranean";
})(Cuisine || (Cuisine = {}));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/haoli/SAAS/recipe-smart-client/src/main.ts */"zUnb");


/***/ }),

/***/ "5Ey6":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_enums_food_allergy_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/food-allergy.enum */ "H5i4");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/share-data.service */ "99Yc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








function SignupComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We are sorry!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign up process failed please try again.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Oops! Email or Username has been occupied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please use another email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["../login"]; };
class SignupComponent {
    constructor(user_service, share_service) {
        this.user_service = user_service;
        this.share_service = share_service;
        this.new_user = {
            user_id: -1,
            name: "",
            password: "",
            email: "",
            ssoId: "",
            restrictions: [src_app_enums_food_allergy_enum__WEBPACK_IMPORTED_MODULE_1__["FoodAllergy"].None],
        };
        this.validEmailandName = false;
        this.signup_failure = false;
    }
    ;
    ngOnInit() {
        this.validEmailandName = true;
        this.signup_failure = false;
    }
    signUp() {
        console.log("sign method called");
        this.user_service.validateNameEmail(this.new_user.email, this.new_user.name)
            .subscribe(firstRes => {
            if (!firstRes) {
                this.user_service.addUser(this.new_user).subscribe(secondRes => {
                    if (secondRes.ret_code) {
                        // jump to sign up successful component
                        this.share_service.setData("userid", secondRes.userid);
                        this.share_service.setData("userObj", secondRes.user_obj);
                    }
                    else {
                        // display error banner on top and prompt user try again
                        this.signup_failure = true;
                    }
                });
            }
            else {
                this.validEmailandName = false;
            }
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_share_data_service__WEBPACK_IMPORTED_MODULE_3__["ShareDataService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], inputs: { new_user: "new_user" }, decls: 49, vars: 7, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css")], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")], [4, "ngIf"], [1, "signup-form"], [1, "text-center"], [1, "form-group"], [1, "input-group"], [1, "input-group-addon"], [1, "fa", "fa-user"], ["type", "text", "name", "username", "placeholder", "Username", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-paper-plane"], ["type", "email", "name", "email", "placeholder", "Email Address", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-lock"], ["type", "text", "name", "password", "placeholder", "Password", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-check"], ["type", "text", "name", "confirm_password", "placeholder", "Confirm Password", "required", "required", 1, "form-control"], [1, "checkbox-inline"], ["type", "checkbox", "required", "required"], ["href", "#"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "click"], [3, "routerLink"], [1, "col-6"], ["role", "alert", 1, "alert", "alert-danger"], [1, "alert-heading"], ["role", "alert", 1, "alert", "alert-warning"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_2_Template, 7, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_div_3_Template, 6, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Please fill in this form to create an account!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_16_listener($event) { return ctx.new_user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_21_listener($event) { return ctx.new_user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_26_listener($event) { return ctx.new_user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " I accept the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_43_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signup_failure);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.validEmailandName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.new_user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.new_user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.new_user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\n    color: #fff;\n    background: #19aa8d;\n    font-family: 'Roboto', sans-serif;\n}\n.form-control[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:focus, .input-group-addon[_ngcontent-%COMP%] {\n    border-color: #e1e1e1;\n}\n.form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {        \n    border-radius: 3px;\n}\n.signup-form[_ngcontent-%COMP%] {\n    width: 390px;\n    margin: 0 auto;\n    padding: 30px 0;\n}\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    color: #999;\n    border-radius: 3px;\n    margin-bottom: 15px;\n    background: #fff;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    padding: 30px;\n}\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #333;\n    font-weight: bold;\n    margin-top: 0;\n}\n.signup-form[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    margin: 0 -30px 20px;\n}\n.signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n}\n.signup-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-weight: normal;\n    font-size: 13px;\n}\n.signup-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    min-height: 38px;\n    box-shadow: none !important;\n}\n.signup-form[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n    max-width: 42px;\n    text-align: center;\n}\n.signup-form[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n    margin-top: 2px;\n}\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{        \n    font-size: 16px;\n    font-weight: bold;\n    background:  #f58f8fff; \n    border: none;\n    min-width: 140px;\n}\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n    background: #179b81;\n    outline: none;\n}\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: rgb(212, 47, 47);\t\n    text-decoration: underline;\n}\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: none;\n}\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color:  #f58f8fff; \n    text-decoration: none;\n}\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n.signup-form[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n    font-size: 21px;\n}\n.signup-form[_ngcontent-%COMP%]   .fa-paper-plane[_ngcontent-%COMP%] {\n    font-size: 18px;\n}\n.signup-form[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n    color: #fff;\n    left: 17px;\n    top: 18px;\n    font-size: 7px;\n    position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsY0FBYztJQUNkLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICMxOWFhOGQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuLmZvcm0tY29udHJvbCwgLmZvcm0tY29udHJvbDpmb2N1cywgLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgICBib3JkZXItY29sb3I6ICNlMWUxZTE7XG59XG4uZm9ybS1jb250cm9sLCAuYnRuIHsgICAgICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5zaWdudXAtZm9ybSB7XG4gICAgd2lkdGg6IDM5MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbn1cbi5zaWdudXAtZm9ybSBmb3JtIHtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuLnNpZ251cC1mb3JtIGgyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuLnNpZ251cC1mb3JtIGhyIHtcbiAgICBtYXJnaW46IDAgLTMwcHggMjBweDtcbn1cbi5zaWdudXAtZm9ybSAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5zaWdudXAtZm9ybSBsYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4uc2lnbnVwLWZvcm0gLmZvcm0tY29udHJvbCB7XG4gICAgbWluLWhlaWdodDogMzhweDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XHRcbi5zaWdudXAtZm9ybSAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICAgIG1heC13aWR0aDogNDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lnbnVwLWZvcm0gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG59ICAgXG4uc2lnbnVwLWZvcm0gLmJ0bnsgICAgICAgIFxuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kOiAgI2Y1OGY4ZmZmOyBcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWluLXdpZHRoOiAxNDBweDtcbn1cbi5zaWdudXAtZm9ybSAuYnRuOmhvdmVyLCAuc2lnbnVwLWZvcm0gLmJ0bjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogIzE3OWI4MTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLnNpZ251cC1mb3JtIGEge1xuICAgIGNvbG9yOiByZ2IoMjEyLCA0NywgNDcpO1x0XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uc2lnbnVwLWZvcm0gYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNpZ251cC1mb3JtIGZvcm0gYSB7XG4gICAgY29sb3I6ICAjZjU4ZjhmZmY7IFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cdFxuLnNpZ251cC1mb3JtIGZvcm0gYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uc2lnbnVwLWZvcm0gLmZhIHtcbiAgICBmb250LXNpemU6IDIxcHg7XG59XG4uc2lnbnVwLWZvcm0gLmZhLXBhcGVyLXBsYW5lIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uc2lnbnVwLWZvcm0gLmZhLWNoZWNrIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsZWZ0OiAxN3B4O1xuICAgIHRvcDogMThweDtcbiAgICBmb250LXNpemU6IDdweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _services_share_data_service__WEBPACK_IMPORTED_MODULE_3__["ShareDataService"] }]; }, { new_user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7FbB":
/*!***************************************!*\
  !*** ./src/app/enums/feature.enum.ts ***!
  \***************************************/
/*! exports provided: Feature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feature", function() { return Feature; });
var Feature;
(function (Feature) {
    Feature["None"] = "None";
    Feature["MeatLover"] = "MeatLover";
    Feature["Vegetarian"] = "Vegetarian";
    Feature["LowCarb"] = "LowCarb";
    Feature["Vegan"] = "Vegan";
})(Feature || (Feature = {}));


/***/ }),

/***/ "8z8A":
/*!*****************************************!*\
  !*** ./src/app/enums/meal-type.enum.ts ***!
  \*****************************************/
/*! exports provided: MealType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealType", function() { return MealType; });
var MealType;
(function (MealType) {
    MealType["None"] = "None";
    MealType["Breakfast"] = "Breakfast";
    MealType["Lunch"] = "Lunch";
    MealType["Dinner"] = "Dinner";
})(MealType || (MealType = {}));


/***/ }),

/***/ "95DY":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profiles/user-profiles.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesComponent", function() { return UserProfilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_enums_food_allergy_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/food-allergy.enum */ "H5i4");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/share-data.service */ "99Yc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function UserProfilesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please log in to view and update your profile! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfilesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Success!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You have updated your profile..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfilesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Failed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Update not done Please try click save button again.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfilesComponent_div_3_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allergy_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r4.user.restrictions.includes(allergy_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](allergy_r5);
} }
function UserProfilesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "22");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Recipes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "88");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Likes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Popular");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Recipe Master");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Basic Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserProfilesComponent_div_3_Template_input_ngModelChange_66_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.user.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserProfilesComponent_div_3_Template_input_ngModelChange_71_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.user.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserProfilesComponent_div_3_Template_input_ngModelChange_76_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.user.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Allergy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, UserProfilesComponent_div_3_div_79_Template, 5, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "hr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r3.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r3.user.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.user.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r3.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.allergy_list);
} }
class UserProfilesComponent {
    constructor(user_service, share_service) {
        this.user_service = user_service;
        this.share_service = share_service;
        this.user = {
            user_id: -1,
            name: "pikachu",
            password: "pikachu",
            email: "pikachu@gmail.com",
            ssoId: "",
            restrictions: [src_app_enums_food_allergy_enum__WEBPACK_IMPORTED_MODULE_1__["FoodAllergy"].None]
        };
        this.updated_success = false;
        this.update_fail = false;
        this.allergy_list = Object.keys(src_app_enums_food_allergy_enum__WEBPACK_IMPORTED_MODULE_1__["FoodAllergy"]);
        this.userid = this.share_service.getData("userid");
        console.log(this.userid);
        // this.currUser = this.share_service.getData("userObj");
        // console.log("user detail: " + this.currUser);
        if (this.userid) {
            this.user_service.getUserById(this.userid).subscribe(res => {
                console.log("res:" + JSON.stringify(res.user_obj));
                console.log("name: " + res.user_obj.name);
                if (res.ret_code) {
                    this.user = res.user_obj;
                }
                else {
                    console.log("error");
                }
            });
        }
    }
    ngOnInit() {
        //every time initializing this component default logged in as false;
        this.updated_success = false;
        this.update_fail = false;
        if (this.userid == null) {
            this.logged_in = false;
        }
        else {
            this.logged_in = true;
        }
    }
    /**
     * update user with the user object held within this component
     */
    update() {
        if (this.userid) {
            // response from the backend needs to be structured as loginRes
            this.user_service.updateUser(this.user, this.userid)
                .subscribe(res => {
                if (res.ret_code == 0) {
                    this.updated_success = true;
                }
                else if (res.ret_code == -1) {
                    this.update_fail = true;
                }
            });
        }
    }
}
UserProfilesComponent.ɵfac = function UserProfilesComponent_Factory(t) { return new (t || UserProfilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_share_data_service__WEBPACK_IMPORTED_MODULE_3__["ShareDataService"])); };
UserProfilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfilesComponent, selectors: [["app-user-profiles"]], inputs: { user: "user" }, decls: 4, vars: 4, consts: [[4, "ngIf"], [1, "col-6"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "alert", 1, "alert", "alert-success"], [1, "alert-heading"], ["role", "alert", 1, "alert", "alert-danger"], [1, "row", "content-header"], [1, "col-1"], [1, "col-11"], [1, "bar-text"], [1, "main-content"], [1, ""], [1, "row"], [1, "col-3"], [1, "card", "card-profile", "shadow"], [1, "row", "justify-content-center"], [1, "col-lg-3", "order-lg-2"], [1, "card-profile-image"], ["src", "../../../assets/images/pikachu.png", 1, "rounded-circle"], [1, "card-body"], [1, "col"], [1, "card-profile-stats", "d-flex", "justify-content-center", "mt-md-5"], [1, "heading"], [1, "description"], [1, "text-center"], [1, "h5", "font-weight-300"], ["href", "#", 1, "btn", "btn-sm", "btn-info", "mr-4"], ["href", "#", 1, "btn", "btn-sm", "btn-primary", "mr-4"], [1, "card", "bg-secondary", "shadow"], [1, "card-header", "bg-white", "border-0"], [1, "row", "align-items-center"], [1, "col-8"], [1, "mb-0"], [1, "pl-lg-4"], [1, "col-lg-6"], [1, "form-group", "focused"], ["for", "input-username", 1, "form-control-label"], ["type", "text", "id", "input-username", "name", "username", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["for", "input-password", 1, "form-control-label"], ["type", "text", "id", "input-password", "name", "userpwd", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["for", "input-email", 1, "form-control-label"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["for", "allergies", 1, "form-control-label"], ["class", "col-lg-3", 4, "ngFor", "ngForOf"], [1, "my-4"], [1, "btn", "edit-btn"], [1, "col-lg-3"], ["type", "checkbox", 3, "checked"]], template: function UserProfilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserProfilesComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserProfilesComponent_div_1_Template, 6, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserProfilesComponent_div_2_Template, 6, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserProfilesComponent_div_3_Template, 85, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.logged_in);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updated_success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.update_fail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logged_in);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".content-header[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  background-image: linear-gradient(to right, #f6cd4cff, rgb(247, 241, 223));\n}\n\n.bar-text[_ngcontent-%COMP%]{\n  font-size: 60px;\n  color:white;\n  font-weight: bold;\n  font-family: cursive;\n}\n\n.edit-btn[_ngcontent-%COMP%] {\n  background-color: rgb(243, 167, 167);\n  color:white;\n  font-weight: bold;\n}\n\n[_ngcontent-%COMP%]:root {\n  --blue: #5e72e4;\n  --indigo: #5603ad;\n  --purple: #8965e0;\n  --pink: #f3a4b5;\n  --red: #f5365c;\n  --orange: #fb6340;\n  --yellow: #ffd600;\n  --green: #2dce89;\n  --teal: #11cdef;\n  --cyan: #2bffc6;\n  --white: #fff;\n  --gray: #8898aa;\n  --gray-dark: #32325d;\n  --light: #ced4da;\n  --lighter: #e9ecef;\n  --primary: #5e72e4;\n  --secondary: #f7fafc;\n  --success: #2dce89;\n  --info: #11cdef;\n  --warning: #fb6340;\n  --danger: #f5365c;\n  --light: #adb5bd;\n  --dark: #212529;\n  --default: #172b4d;\n  --white: #fff;\n  --neutral: #fff;\n  --darker: black;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: Open Sans, sans-serif;\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\nfigcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], main[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: Open Sans, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  margin: 0;\n  text-align: left;\n  color: #525f7f;\n  background-color: #f8f9fe;\n}\n\n[tabindex='-1'][_ngcontent-%COMP%]:focus {\n  outline: 0 !important;\n}\n\nhr[_ngcontent-%COMP%] {\n  overflow: visible;\n  box-sizing: content-box;\n  height: 0;\n}\n\nh1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: .5rem;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\naddress[_ngcontent-%COMP%] {\n  font-style: normal;\n  line-height: inherit;\n  margin-bottom: 1rem;\n}\n\nul[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\ndfn[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\nstrong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #5e72e4;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #233dd2;\n}\n\na[_ngcontent-%COMP%]:not([href]):not([tabindex]) {\n  text-decoration: none;\n  color: inherit;\n}\n\na[_ngcontent-%COMP%]:not([href]):not([tabindex]):hover, a[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus {\n  text-decoration: none;\n  color: inherit;\n}\n\na[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus {\n  outline: 0;\n}\n\ncode[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n  font-size: 1em;\n}\n\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-style: none;\n}\n\ncaption[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  caption-side: bottom;\n  text-align: left;\n  color: #8898aa;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: .5rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\nbutton[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   [type='button'][_ngcontent-%COMP%], [type='reset'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type='button'][_ngcontent-%COMP%]::-moz-focus-inner, [type='reset'][_ngcontent-%COMP%]::-moz-focus-inner, [type='submit'][_ngcontent-%COMP%]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type='radio'][_ngcontent-%COMP%], input[type='checkbox'][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type='date'][_ngcontent-%COMP%], input[type='time'][_ngcontent-%COMP%], input[type='datetime-local'][_ngcontent-%COMP%], input[type='month'][_ngcontent-%COMP%] {\n  -webkit-appearance: listbox;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  resize: vertical;\n}\n\nlegend[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: inherit;\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: .5rem;\n  padding: 0;\n  white-space: normal;\n  color: inherit;\n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\n[type='number'][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type='number'][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type='search'][_ngcontent-%COMP%] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n\n[type='search'][_ngcontent-%COMP%]::-webkit-search-cancel-button, [type='search'][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\nh1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-weight: 600;\n  line-height: 1.5;\n  margin-bottom: .5rem;\n  color: #32325d;\n}\n\nh1[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%] {\n  font-size: 1.625rem;\n}\n\nh3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n}\n\nh4[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%] {\n  font-size: .9375rem;\n}\n\nh5[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%] {\n  font-size: .8125rem;\n}\n\nh6[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-size: .625rem;\n}\n\n.display-2[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n  font-weight: 600;\n  line-height: 1.5;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, .1);\n}\n\ncode[_ngcontent-%COMP%] {\n  font-size: 87.5%;\n  word-break: break-word;\n  color: #f3a4b5;\n}\n\na[_ngcontent-%COMP%] > code[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n@media (min-width: 576px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 540px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 960px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1140px;\n  }\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: -15px;\n  margin-left: -15px;\n  flex-wrap: wrap;\n}\n\n.col-4[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col[_ngcontent-%COMP%] {\n  max-width: 100%;\n  flex-basis: 0;\n  flex-grow: 1;\n}\n\n.col-4[_ngcontent-%COMP%] {\n  max-width: 33.33333%;\n  flex: 0 0 33.33333%;\n}\n\n.col-8[_ngcontent-%COMP%] {\n  max-width: 66.66667%;\n  flex: 0 0 66.66667%;\n}\n\n@media (min-width: 768px) {\n\n  .col-md-10[_ngcontent-%COMP%] {\n    max-width: 83.33333%;\n    flex: 0 0 83.33333%;\n  }\n\n  .col-md-12[_ngcontent-%COMP%] {\n    max-width: 100%;\n    flex: 0 0 100%;\n  }\n}\n\n@media (min-width: 992px) {\n\n  .col-lg-3[_ngcontent-%COMP%] {\n    max-width: 25%;\n    flex: 0 0 25%;\n  }\n\n  .col-lg-4[_ngcontent-%COMP%] {\n    max-width: 33.33333%;\n    flex: 0 0 33.33333%;\n  }\n\n  .col-lg-6[_ngcontent-%COMP%] {\n    max-width: 50%;\n    flex: 0 0 50%;\n  }\n\n  .col-lg-7[_ngcontent-%COMP%] {\n    max-width: 58.33333%;\n    flex: 0 0 58.33333%;\n  }\n\n  .order-lg-2[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n\n@media (min-width: 1200px) {\n\n  .col-xl-4[_ngcontent-%COMP%] {\n    max-width: 33.33333%;\n    flex: 0 0 33.33333%;\n  }\n\n  .col-xl-6[_ngcontent-%COMP%] {\n    max-width: 50%;\n    flex: 0 0 50%;\n  }\n\n  .col-xl-8[_ngcontent-%COMP%] {\n    max-width: 66.66667%;\n    flex: 0 0 66.66667%;\n  }\n\n  .order-xl-1[_ngcontent-%COMP%] {\n    order: 1;\n  }\n\n  .order-xl-2[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5;\n  display: block;\n  width: 100%;\n  height: calc(2.75rem + 2px);\n  padding: .625rem .75rem;\n  transition: all .2s cubic-bezier(.68, -.55, .265, 1.55);\n  color: #8898aa;\n  border: 1px solid #cad1d7;\n  border-radius: .375rem;\n  background-color: #fff;\n  background-clip: padding-box;\n  box-shadow: none;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .form-control[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n\n.form-control[_ngcontent-%COMP%]::-ms-expand {\n  border: 0;\n  background-color: transparent;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  color: #8898aa;\n  border-color: rgba(50, 151, 211, .25);\n  outline: 0;\n  background-color: #fff;\n  box-shadow: none, none;\n}\n\n.form-control[_ngcontent-%COMP%]::placeholder {\n  opacity: 1;\n  color: #adb5bd;\n}\n\n.form-control[_ngcontent-%COMP%]:disabled, .form-control[readonly][_ngcontent-%COMP%] {\n  opacity: 1;\n  background-color: #e9ecef;\n}\n\ntextarea.form-control[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.form-inline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n\n@media (min-width: 576px) {\n  .form-inline[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: flex;\n    margin-bottom: 0;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .form-inline[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    display: flex;\n    margin-bottom: 0;\n    flex: 0 0 auto;\n    flex-flow: row wrap;\n    align-items: center;\n  }\n\n  .form-inline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .form-inline[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 1.5;\n  display: inline-block;\n  padding: .625rem 1.25rem;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n  border: 1px solid transparent;\n  border-radius: .375rem;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .btn[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n\n.btn[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);\n}\n\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: .65;\n  box-shadow: none;\n}\n\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active {\n  box-shadow: none;\n}\n\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus {\n  box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08), none;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: #5e72e4;\n  background-color: #5e72e4;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border-color: #5e72e4;\n  background-color: #5e72e4;\n}\n\n.btn-primary[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08), 0 0 0 0 rgba(94, 114, 228, .5);\n}\n\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  border-color: #5e72e4;\n  background-color: #5e72e4;\n}\n\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active {\n  color: #fff;\n  border-color: #5e72e4;\n  background-color: #324cdd;\n}\n\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none, 0 0 0 0 rgba(94, 114, 228, .5);\n}\n\n.btn-info[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: #11cdef;\n  background-color: #11cdef;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);\n}\n\n.btn-info[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border-color: #11cdef;\n  background-color: #11cdef;\n}\n\n.btn-info[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08), 0 0 0 0 rgba(17, 205, 239, .5);\n}\n\n.btn-info[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  border-color: #11cdef;\n  background-color: #11cdef;\n}\n\n.btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active {\n  color: #fff;\n  border-color: #11cdef;\n  background-color: #0da5c0;\n}\n\n.btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none, 0 0 0 0 rgba(17, 205, 239, .5);\n}\n\n.btn-default[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: #172b4d;\n  background-color: #172b4d;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);\n}\n\n.btn-default[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border-color: #172b4d;\n  background-color: #172b4d;\n}\n\n.btn-default[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08), 0 0 0 0 rgba(23, 43, 77, .5);\n}\n\n.btn-default[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  border-color: #172b4d;\n  background-color: #172b4d;\n}\n\n.btn-default[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active {\n  color: #fff;\n  border-color: #172b4d;\n  background-color: #0b1526;\n}\n\n.btn-default[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none, 0 0 0 0 rgba(23, 43, 77, .5);\n}\n\n.btn-sm[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  line-height: 1.5;\n  padding: .25rem .5rem;\n  border-radius: .375rem;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  position: absolute;\n  z-index: 1000;\n  top: 100%;\n  left: 0;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  margin: .125rem 0 0;\n  padding: .5rem 0;\n  list-style: none;\n  text-align: left;\n  color: #525f7f;\n  border: 0 solid rgba(0, 0, 0, .15);\n  border-radius: .4375rem;\n  background-color: #fff;\n  background-clip: padding-box;\n  box-shadow: 0 50px 100px rgba(50, 50, 93, .1), 0 15px 35px rgba(50, 50, 93, .15), 0 5px 15px rgba(0, 0, 0, .1);\n}\n\n.dropdown-menu.show[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 1;\n}\n\n.dropdown-menu-right[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto;\n}\n\n.dropdown-menu[x-placement^='top'][_ngcontent-%COMP%], .dropdown-menu[x-placement^='right'][_ngcontent-%COMP%], .dropdown-menu[x-placement^='bottom'][_ngcontent-%COMP%], .dropdown-menu[x-placement^='left'][_ngcontent-%COMP%] {\n  right: auto;\n  bottom: auto;\n}\n\n.dropdown-divider[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 0;\n  margin: .5rem 0;\n  border-top: 1px solid #e9ecef;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  font-weight: 400;\n  display: block;\n  clear: both;\n  width: 100%;\n  padding: .25rem 1.5rem;\n  text-align: inherit;\n  white-space: nowrap;\n  color: #212529;\n  border: 0;\n  background-color: transparent;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: #16181b;\n  background-color: #f6f9fc;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:active {\n  text-decoration: none;\n  color: #fff;\n  background-color: #5e72e4;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:disabled {\n  color: #8898aa;\n  background-color: transparent;\n}\n\n.dropdown-header[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  display: block;\n  margin-bottom: 0;\n  padding: .5rem 1.5rem;\n  white-space: nowrap;\n  color: #8898aa;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  align-items: stretch;\n}\n\n.input-group[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  width: 1%;\n  margin-bottom: 0;\n  flex: 1 1 auto;\n}\n\n.input-group[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%] + .form-control[_ngcontent-%COMP%] {\n  margin-left: -1px;\n}\n\n.input-group[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 3;\n}\n\n.input-group[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group-prepend[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n\n.input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .input-group-text[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] + .input-group-text[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\n  margin-left: -1px;\n}\n\n.input-group-prepend[_ngcontent-%COMP%] {\n  margin-right: -1px;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  display: flex;\n  margin-bottom: 0;\n  padding: .625rem .75rem;\n  text-align: center;\n  white-space: nowrap;\n  color: #adb5bd;\n  border: 1px solid #cad1d7;\n  border-radius: .375rem;\n  background-color: #fff;\n  align-items: center;\n}\n\n.input-group-text[_ngcontent-%COMP%]   input[type='radio'][_ngcontent-%COMP%], .input-group-text[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.input-group[_ngcontent-%COMP%] > .input-group-prepend[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%] > .input-group-prepend[_ngcontent-%COMP%] > .input-group-text[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group[_ngcontent-%COMP%] > .input-group-prepend[_ngcontent-%COMP%]:not(:first-child) > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%] > .input-group-prepend[_ngcontent-%COMP%]:not(:first-child) > .input-group-text[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%] > .input-group-prepend[_ngcontent-%COMP%]:first-child > .btn[_ngcontent-%COMP%]:not(:first-child), .input-group[_ngcontent-%COMP%] > .input-group-prepend[_ngcontent-%COMP%]:first-child > .input-group-text[_ngcontent-%COMP%]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n  flex-wrap: wrap;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: .25rem .75rem;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  padding: 1rem 1rem;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.navbar[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%] > .container-fluid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: static;\n  float: none;\n}\n\n@media (max-width: 767.98px) {\n\n  .navbar-expand-md[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%], .navbar-expand-md[_ngcontent-%COMP%] > .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-expand-md[_ngcontent-%COMP%] {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n  }\n\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding-right: 1rem;\n    padding-left: 1rem;\n  }\n\n  .navbar-expand-md[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%], .navbar-expand-md[_ngcontent-%COMP%] > .container-fluid[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n  }\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .95);\n}\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n  color: rgba(255, 255, 255, .65);\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  border: 1px solid rgba(0, 0, 0, .05);\n  border-radius: .375rem;\n  background-color: #fff;\n  background-clip: border-box;\n}\n\n.card[_ngcontent-%COMP%] > hr[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  flex: 1 1 auto;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid rgba(0, 0, 0, .05);\n  background-color: #fff;\n}\n\n.card-header[_ngcontent-%COMP%]:first-child {\n  border-radius: calc(.375rem - 1px) calc(.375rem - 1px) 0 0;\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress[_ngcontent-%COMP%] {\n  font-size: .75rem;\n  display: flex;\n  overflow: hidden;\n  height: 1rem;\n  border-radius: .375rem;\n  background-color: #e9ecef;\n  box-shadow: inset 0 .1rem .1rem rgba(0, 0, 0, .1);\n}\n\n.media[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.media-body[_ngcontent-%COMP%] {\n  flex: 1 1;\n}\n\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #f7fafc !important;\n}\n\na.bg-secondary[_ngcontent-%COMP%]:hover, a.bg-secondary[_ngcontent-%COMP%]:focus, button.bg-secondary[_ngcontent-%COMP%]:hover, button.bg-secondary[_ngcontent-%COMP%]:focus {\n  background-color: #d2e3ee !important;\n}\n\n.bg-default[_ngcontent-%COMP%] {\n  background-color: #172b4d !important;\n}\n\na.bg-default[_ngcontent-%COMP%]:hover, a.bg-default[_ngcontent-%COMP%]:focus, button.bg-default[_ngcontent-%COMP%]:hover, button.bg-default[_ngcontent-%COMP%]:focus {\n  background-color: #0b1526 !important;\n}\n\n.bg-white[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n}\n\na.bg-white[_ngcontent-%COMP%]:hover, a.bg-white[_ngcontent-%COMP%]:focus, button.bg-white[_ngcontent-%COMP%]:hover, button.bg-white[_ngcontent-%COMP%]:focus {\n  background-color: #e6e6e6 !important;\n}\n\n.bg-white[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n}\n\n.border-0[_ngcontent-%COMP%] {\n  border: 0 !important;\n}\n\n.rounded-circle[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n  border: 4px solid #f58f8fff;\n}\n\n.d-none[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n@media (min-width: 768px) {\n\n  .d-md-flex[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n}\n\n@media (min-width: 992px) {\n\n  .d-lg-inline-block[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n\n  .d-lg-block[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n\n.justify-content-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.justify-content-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n@media (min-width: 1200px) {\n\n  .justify-content-xl-between[_ngcontent-%COMP%] {\n    justify-content: space-between !important;\n  }\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right !important;\n}\n\n.shadow[_ngcontent-%COMP%], .card-profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, .15) !important;\n}\n\n.m-0[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.mt-0[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n}\n\n.mb-0[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n\n.mr-2[_ngcontent-%COMP%] {\n  margin-right: .5rem !important;\n}\n\n.ml-2[_ngcontent-%COMP%] {\n  margin-left: .5rem !important;\n}\n\n.mr-3[_ngcontent-%COMP%] {\n  margin-right: 1rem !important;\n}\n\n.mt-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\n  margin-top: 1.5rem !important;\n}\n\n.mr-4[_ngcontent-%COMP%] {\n  margin-right: 1.5rem !important;\n}\n\n.mb-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  margin-bottom: 3rem !important;\n}\n\n.mt--7[_ngcontent-%COMP%] {\n  margin-top: -6rem !important;\n}\n\n.pt-0[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n\n.pr-0[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\n\n.pb-0[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.pt-5[_ngcontent-%COMP%] {\n  padding-top: 3rem !important;\n}\n\n.pt-8[_ngcontent-%COMP%] {\n  padding-top: 8rem !important;\n}\n\n.pb-8[_ngcontent-%COMP%] {\n  padding-bottom: 8rem !important;\n}\n\n.m-auto[_ngcontent-%COMP%] {\n  margin: auto !important;\n}\n\n@media (min-width: 768px) {\n\n  .mt-md-5[_ngcontent-%COMP%] {\n    margin-top: 3rem !important;\n  }\n\n  .pt-md-4[_ngcontent-%COMP%] {\n    padding-top: 1.5rem !important;\n  }\n\n  .pb-md-4[_ngcontent-%COMP%] {\n    padding-bottom: 1.5rem !important;\n  }\n}\n\n@media (min-width: 992px) {\n\n  .pl-lg-4[_ngcontent-%COMP%] {\n    padding-left: 1.5rem !important;\n  }\n\n  .pt-lg-8[_ngcontent-%COMP%] {\n    padding-top: 8rem !important;\n  }\n\n  .ml-lg-auto[_ngcontent-%COMP%] {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 1200px) {\n\n  .mb-xl-0[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n  }\n}\n\n.text-right[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.text-uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase !important;\n}\n\n.font-weight-light[_ngcontent-%COMP%] {\n  font-weight: 300 !important;\n}\n\n.font-weight-bold[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n\n.text-white[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\n.text-white[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\na.text-white[_ngcontent-%COMP%]:hover, a.text-white[_ngcontent-%COMP%]:focus {\n  color: #e6e6e6 !important;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #8898aa !important;\n}\n\n@media print {\n\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a[_ngcontent-%COMP%]:not(.btn) {\n    text-decoration: underline;\n  }\n\n  img[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n\n  p[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    page-break-after: avoid;\n  }\n\n  @page {\n    size[_ngcontent-%COMP%]:   a3[_ngcontent-%COMP%];\n  }\n\n  body[_ngcontent-%COMP%] {\n    min-width: 992px !important;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    min-width: 992px !important;\n  }\n\n  .navbar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\nfigcaption[_ngcontent-%COMP%], main[_ngcontent-%COMP%] {\n  display: block;\n}\n\nmain[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.bg-white[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n}\n\na.bg-white[_ngcontent-%COMP%]:hover, a.bg-white[_ngcontent-%COMP%]:focus, button.bg-white[_ngcontent-%COMP%]:hover, button.bg-white[_ngcontent-%COMP%]:focus {\n  background-color: #e6e6e6 !important;\n}\n\n.bg-gradient-default[_ngcontent-%COMP%] {\n  background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;\n}\n\n.bg-gradient-default[_ngcontent-%COMP%] {\n  background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;\n}\n\n@keyframes floating-lg {\n  0% {\n    transform: translateY(0px);\n  }\n\n  50% {\n    transform: translateY(15px);\n  }\n\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes floating {\n  0% {\n    transform: translateY(0px);\n  }\n\n  50% {\n    transform: translateY(10px);\n  }\n\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes floating-sm {\n  0% {\n    transform: translateY(0px);\n  }\n\n  50% {\n    transform: translateY(5px);\n  }\n\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n.opacity-8[_ngcontent-%COMP%] {\n  opacity: .8 !important;\n}\n\n.opacity-8[_ngcontent-%COMP%] {\n  opacity: .9 !important;\n}\n\n.center[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n[class*='shadow'][_ngcontent-%COMP%] {\n  transition: all .15s ease;\n}\n\n.font-weight-300[_ngcontent-%COMP%] {\n  font-weight: 300 !important;\n}\n\n.text-sm[_ngcontent-%COMP%] {\n  font-size: .875rem !important;\n}\n\n.text-white[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\na.text-white[_ngcontent-%COMP%]:hover, a.text-white[_ngcontent-%COMP%]:focus {\n  color: #e6e6e6 !important;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: inline-flex;\n  width: 48px;\n  height: 48px;\n  color: #fff;\n  border-radius: 50%;\n  background-color: #adb5bd;\n  align-items: center;\n  justify-content: center;\n}\n\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50%;\n}\n\n.avatar-sm[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  width: 36px;\n  height: 36px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  position: relative;\n  transition: all .15s ease;\n  letter-spacing: .025em;\n  text-transform: none;\n  will-change: transform;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);\n}\n\n.btn[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: .5rem;\n}\n\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: .5rem;\n}\n\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: .5rem;\n}\n\n.input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 0;\n  transform: translateY(0);\n}\n\n.btn-sm[_ngcontent-%COMP%] {\n  font-size: .75rem;\n}\n\n[class*='btn-outline-'][_ngcontent-%COMP%] {\n  border-width: 1px;\n}\n\n.card-profile-image[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.card-profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  max-width: 180px;\n  transition: all .15s ease;\n  transform: translate(-50%, -30%);\n  border-radius: .375rem;\n}\n\n.card-profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: translate(-50%, -33%);\n}\n\n.card-profile-stats[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n\n.card-profile-stats[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  padding: .875rem;\n  text-align: center;\n}\n\n.card-profile-stats[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.card-profile-stats[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: bold;\n  display: block;\n}\n\n.card-profile-stats[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  color: #f58f8fff;\n  font-weight: bold;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.main-content[_ngcontent-%COMP%]   .navbar-top[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n  background-color: transparent;\n}\n\n@media (min-width: 768px) {\n  .main-content[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 39px !important;\n    padding-left: 39px !important;\n  }\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 12rem;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  padding: .5rem 1rem;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] > i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-right: 1rem;\n  vertical-align: -17%;\n}\n\n.dropdown-header[_ngcontent-%COMP%] {\n  font-size: .625rem;\n  font-weight: 700;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  text-transform: uppercase;\n  color: #f6f9fc;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   a.media[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child {\n  line-height: 1;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   a.media[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8898aa;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   a.media[_ngcontent-%COMP%]:hover   .heading[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%]   a.media[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: #172b4d !important;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 2.5rem 0;\n  background: #f7fafc;\n}\n\n.footer[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #8898aa !important;\n}\n\n.footer[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #525f7f !important;\n}\n\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  font-size: .875rem;\n}\n\n.form-control-label[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  font-weight: 600;\n  color: #525f7f;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: .875rem;\n}\n\n.form-control[_ngcontent-%COMP%]:focus::placeholder {\n  color: #adb5bd;\n}\n\ntextarea[resize='none'][_ngcontent-%COMP%] {\n  resize: none !important;\n}\n\ntextarea[resize='both'][_ngcontent-%COMP%] {\n  resize: both !important;\n}\n\ntextarea[resize='vertical'][_ngcontent-%COMP%] {\n  resize: vertical !important;\n}\n\ntextarea[resize='horizontal'][_ngcontent-%COMP%] {\n  resize: horizontal !important;\n}\n\n.form-control-alternative[_ngcontent-%COMP%] {\n  transition: box-shadow .15s ease;\n  border: 0;\n  box-shadow: 0 1px 3px rgba(50, 50, 93, .15), 0 1px 0 rgba(0, 0, 0, .02);\n}\n\n.form-control-alternative[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);\n}\n\n.input-group[_ngcontent-%COMP%] {\n  transition: all .15s ease;\n  border-radius: .375rem;\n  box-shadow: none;\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 0;\n  border-left: 0;\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: 0;\n  border-right: 0;\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  transition: all .2s cubic-bezier(.68, -.55, .265, 1.55);\n}\n\n.input-group-alternative[_ngcontent-%COMP%] {\n  transition: box-shadow .15s ease;\n  border: 0;\n  box-shadow: 0 1px 3px rgba(50, 50, 93, .15), 0 1px 0 rgba(0, 0, 0, .02);\n}\n\n.input-group-alternative[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .input-group-alternative[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border: 0;\n  box-shadow: none;\n}\n\n.focused[_ngcontent-%COMP%]   .input-group-alternative[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08) !important;\n}\n\n.focused[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.focused[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  color: #8898aa;\n  border-color: rgba(50, 151, 211, .25);\n  background-color: #fff;\n}\n\n.focused[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-color: rgba(50, 151, 211, .25);\n}\n\n.header[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  transition: all .15s ease;\n  border-radius: .375rem;\n  box-shadow: none;\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 0;\n  border-left: 0;\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: 0;\n  border-right: 0;\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  transition: all .2s cubic-bezier(.68, -.55, .265, 1.55);\n}\n\n.input-group-alternative[_ngcontent-%COMP%] {\n  transition: box-shadow .15s ease;\n  border: 0;\n  box-shadow: 0 1px 3px rgba(50, 50, 93, .15), 0 1px 0 rgba(0, 0, 0, .02);\n}\n\n.input-group-alternative[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .input-group-alternative[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border: 0;\n  box-shadow: none;\n}\n\n.focused[_ngcontent-%COMP%]   .input-group-alternative[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08) !important;\n}\n\n.focused[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.focused[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  color: #8898aa;\n  border-color: rgba(50, 151, 211, .25);\n  background-color: #fff;\n}\n\n.focused[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-color: rgba(50, 151, 211, .25);\n}\n\n.mask[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all .15s ease;\n}\n\n@media screen and (prefers-reduced-motion: reduce) {\n  .mask[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: #525f7f;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: #5e72e4;\n}\n\n.nav-link[_ngcontent-%COMP%]   i.ni[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2px;\n}\n\n.navbar-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  border: 2px solid;\n  border-radius: 2rem;\n  background-color: transparent;\n}\n\n.navbar-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  background-color: transparent;\n}\n\n.navbar-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 270px;\n  background-color: transparent;\n}\n\n.navbar-search-dark[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .6);\n}\n\n.navbar-search-dark[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .6);\n}\n\n.navbar-search-dark[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .9);\n}\n\n.navbar-search-dark[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, .6);\n}\n\n.navbar-search-dark[_ngcontent-%COMP%]   .focused[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .9);\n}\n\n@media (min-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    margin: 0;\n    pointer-events: none;\n    opacity: 0;\n  }\n\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu-arrow[_ngcontent-%COMP%]:before {\n    position: absolute;\n    z-index: -5;\n    bottom: 100%;\n    left: 20px;\n    display: block;\n    width: 12px;\n    height: 12px;\n    content: '';\n    transform: rotate(-45deg) translateY(12px);\n    border-radius: 2px;\n    background: #fff;\n    box-shadow: none;\n  }\n\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu-right[_ngcontent-%COMP%]:before {\n    right: 20px;\n    left: auto;\n  }\n\n  @keyframes show-navbar-dropdown {\n    0% {\n      transition: visibility .25s, opacity .25s, transform .25s;\n      transform: translate(0, 10px) perspective(200px) rotateX(-2deg);\n      opacity: 0;\n    }\n\n    100% {\n      transform: translate(0, 0);\n      opacity: 1;\n    }\n  }\n\n  @keyframes hide-navbar-dropdown {\n    from {\n      opacity: 1;\n    }\n\n    to {\n      transform: translate(0, 10px);\n      opacity: 0;\n    }\n  }\n}\n\n@media (max-width: 767.98px) {\n  .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: .625rem 0;\n    color: #172b4d !important;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    min-width: auto;\n    box-shadow: none;\n  }\n}\n\n@keyframes show-navbar-collapse {\n  0% {\n    transform: scale(.95);\n    transform-origin: 100% 0;\n    opacity: 0;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes hide-navbar-collapse {\n  from {\n    transform: scale(1);\n    transform-origin: 100% 0;\n    opacity: 1;\n  }\n\n  to {\n    transform: scale(.95);\n    opacity: 0;\n  }\n}\n\n.progress[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 8px;\n  margin-bottom: 1rem;\n  border-radius: .25rem;\n  background-color: #e9ecef;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 300;\n  line-height: 1.7;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-size: .875rem;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-size: .95rem;\n  font-weight: 600;\n  letter-spacing: .025em;\n  text-transform: uppercase;\n}\n\n.heading-small[_ngcontent-%COMP%] {\n  font-size: .75rem;\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  letter-spacing: .04em;\n  text-transform: uppercase;\n}\n\n.display-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 300;\n  display: block;\n}\n\n@media (max-width: 768px) {\n  .btn[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n\n#navbar[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsK0NBQStDO0VBQy9DLDZHQUE2RztBQUMvRzs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw2Q0FBNkM7QUFDL0M7O0FBTUE7Ozs7OztFQU1FLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7Ozs7O0VBS0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUdBQWlHO0VBQ2pHLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBDQUEwQztBQUM1Qzs7QUFFQTs7O0VBR0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7OztFQUlFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTs7OztFQUlFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7Ozs7Ozs7O0VBVUUsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7Ozs7Ozs7Ozs7OztFQVlFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxjQUFjO0lBQ2QsYUFBYTtFQUNmOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsUUFBUTtFQUNWO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLHVEQUF1RDtFQUN2RCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztFQUNkLHFDQUFxQztFQUNyQyxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFZQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUd6QixpQkFBaUI7RUFDakIsaUlBQWlJO0VBQ2pJLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLCtFQUErRTtBQUNqRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHlFQUF5RTtBQUMzRTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUdBQXlHO0FBQzNHOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHlFQUF5RTtBQUMzRTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUdBQXlHO0FBQzNHOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHlFQUF5RTtBQUMzRTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUdBQXVHO0FBQ3pHOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsOEdBQThHO0FBQ2hIOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7Ozs7RUFJRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7Ozs7RUFJRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBOztFQUVFLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7O0FBRUE7Ozs7RUFJRSx5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUU7O0lBRUUsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7O0lBRUUsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7O0VBRUUsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QiwyQ0FBMkM7RUFDM0Msc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7Ozs7RUFJRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7Ozs7RUFJRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7Ozs7RUFJRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRTtJQUNFLHlDQUF5QztFQUMzQztBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLDBEQUEwRDtBQUM1RDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7O0VBRUUsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRTs7O0lBR0UsMkJBQTJCO0lBQzNCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTs7SUFFRSxVQUFVO0lBQ1YsU0FBUztFQUNYOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTs7OztFQUlFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHNFQUFzRTtBQUN4RTs7QUFFQTtFQUNFLHNFQUFzRTtBQUN4RTs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7SUFDOUIsNkJBQTZCO0VBQy9CO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQVVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsdUVBQXVFO0FBQ3pFOztBQUVBO0VBQ0UseUVBQXlFO0FBQzNFOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFNBQVM7RUFDVCx1RUFBdUU7QUFDekU7O0FBRUE7O0VBRUUsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9GQUFvRjtBQUN0Rjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFNBQVM7RUFDVCx1RUFBdUU7QUFDekU7O0FBRUE7O0VBRUUsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9GQUFvRjtBQUN0Rjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFVQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFO0lBQ0UsU0FBUztJQUNULG9CQUFvQjtJQUNwQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRTtNQUNFLHlEQUF5RDtNQUN6RCwrREFBK0Q7TUFDL0QsVUFBVTtJQUNaOztJQUVBO01BQ0UsMEJBQTBCO01BQzFCLFVBQVU7SUFDWjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7O0lBRUE7TUFDRSw2QkFBNkI7TUFDN0IsVUFBVTtJQUNaO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoidXNlci1wcm9maWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjZjZDRjZmYsIHJnYigyNDcsIDI0MSwgMjIzKSk7XG59XG5cbi5iYXItdGV4dHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuXG4uZWRpdC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAxNjcsIDE2Nyk7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuOnJvb3Qge1xuICAtLWJsdWU6ICM1ZTcyZTQ7XG4gIC0taW5kaWdvOiAjNTYwM2FkO1xuICAtLXB1cnBsZTogIzg5NjVlMDtcbiAgLS1waW5rOiAjZjNhNGI1O1xuICAtLXJlZDogI2Y1MzY1YztcbiAgLS1vcmFuZ2U6ICNmYjYzNDA7XG4gIC0teWVsbG93OiAjZmZkNjAwO1xuICAtLWdyZWVuOiAjMmRjZTg5O1xuICAtLXRlYWw6ICMxMWNkZWY7XG4gIC0tY3lhbjogIzJiZmZjNjtcbiAgLS13aGl0ZTogI2ZmZjtcbiAgLS1ncmF5OiAjODg5OGFhO1xuICAtLWdyYXktZGFyazogIzMyMzI1ZDtcbiAgLS1saWdodDogI2NlZDRkYTtcbiAgLS1saWdodGVyOiAjZTllY2VmO1xuICAtLXByaW1hcnk6ICM1ZTcyZTQ7XG4gIC0tc2Vjb25kYXJ5OiAjZjdmYWZjO1xuICAtLXN1Y2Nlc3M6ICMyZGNlODk7XG4gIC0taW5mbzogIzExY2RlZjtcbiAgLS13YXJuaW5nOiAjZmI2MzQwO1xuICAtLWRhbmdlcjogI2Y1MzY1YztcbiAgLS1saWdodDogI2FkYjViZDtcbiAgLS1kYXJrOiAjMjEyNTI5O1xuICAtLWRlZmF1bHQ6ICMxNzJiNGQ7XG4gIC0td2hpdGU6ICNmZmY7XG4gIC0tbmV1dHJhbDogI2ZmZjtcbiAgLS1kYXJrZXI6IGJsYWNrO1xuICAtLWJyZWFrcG9pbnQteHM6IDA7XG4gIC0tYnJlYWtwb2ludC1zbTogNTc2cHg7XG4gIC0tYnJlYWtwb2ludC1tZDogNzY4cHg7XG4gIC0tYnJlYWtwb2ludC1sZzogOTkycHg7XG4gIC0tYnJlYWtwb2ludC14bDogMTIwMHB4O1xuICAtLWZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcbiAgLS1mb250LWZhbWlseS1tb25vc3BhY2U6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGxiYXI7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuQC1tcy12aWV3cG9ydCB7XG4gIHdpZHRoOiBkZXZpY2Utd2lkdGg7XG59XG5cbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5tYWluLFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNTI1ZjdmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZlO1xufVxuXG5bdGFiaW5kZXg9Jy0xJ106Zm9jdXMge1xuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG59XG5cbmhyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBoZWlnaHQ6IDA7XG59XG5cbmgxLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmFkZHJlc3Mge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG51bCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbnVsIHVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuZGZuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzVlNzJlNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMjMzZGQyO1xufVxuXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pOmhvdmVyLFxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbmNvZGUge1xuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5jYXB0aW9uIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBjYXB0aW9uLXNpZGU6IGJvdHRvbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM4ODk4YWE7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZDtcbiAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xufVxuXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbn1cblxuYnV0dG9uLFxuaW5wdXQge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbmJ1dHRvbixcbmh0bWwgW3R5cGU9J2J1dHRvbiddLFxuW3R5cGU9J3Jlc2V0J10sXG5bdHlwZT0nc3VibWl0J10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9J2J1dHRvbiddOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9J3Jlc2V0J106Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT0nc3VibWl0J106Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9J3JhZGlvJ10sXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW5wdXRbdHlwZT0nZGF0ZSddLFxuaW5wdXRbdHlwZT0ndGltZSddLFxuaW5wdXRbdHlwZT0nZGF0ZXRpbWUtbG9jYWwnXSxcbmlucHV0W3R5cGU9J21vbnRoJ10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGxpc3Rib3g7XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbmxlZ2VuZCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBwYWRkaW5nOiAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuW3R5cGU9J3NlYXJjaCddIHtcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuW3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuW3R5cGU9J3NlYXJjaCddOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgZm9udDogaW5oZXJpdDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5oMSxcbmgzLFxuaDQsXG5oNSxcbmg2LFxuLmgxLFxuLmgzLFxuLmg0LFxuLmg1LFxuLmg2IHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBjb2xvcjogIzMyMzI1ZDtcbn1cblxuaDEsXG4uaDEge1xuICBmb250LXNpemU6IDEuNjI1cmVtO1xufVxuXG5oMyxcbi5oMyB7XG4gIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xufVxuXG5oNCxcbi5oNCB7XG4gIGZvbnQtc2l6ZTogLjkzNzVyZW07XG59XG5cbmg1LFxuLmg1IHtcbiAgZm9udC1zaXplOiAuODEyNXJlbTtcbn1cblxuaDYsXG4uaDYge1xuICBmb250LXNpemU6IC42MjVyZW07XG59XG5cbi5kaXNwbGF5LTIge1xuICBmb250LXNpemU6IDIuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XG59XG5cbmNvZGUge1xuICBmb250LXNpemU6IDg3LjUlO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBjb2xvcjogI2YzYTRiNTtcbn1cblxuYT5jb2RlIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1NDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTE0MHB4O1xuICB9XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jb2wtNCxcbi5jb2wtOCxcbi5jb2wsXG4uY29sLW1kLTEwLFxuLmNvbC1tZC0xMixcbi5jb2wtbGctMyxcbi5jb2wtbGctNCxcbi5jb2wtbGctNixcbi5jb2wtbGctNyxcbi5jb2wteGwtNCxcbi5jb2wteGwtNixcbi5jb2wteGwtOCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uY29sIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBmbGV4LWJhc2lzOiAwO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5jb2wtNCB7XG4gIG1heC13aWR0aDogMzMuMzMzMzMlO1xuICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xufVxuXG4uY29sLTgge1xuICBtYXgtd2lkdGg6IDY2LjY2NjY3JTtcbiAgZmxleDogMCAwIDY2LjY2NjY3JTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLmNvbC1tZC0xMCB7XG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMyU7XG4gICAgZmxleDogMCAwIDgzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wtbWQtMTIge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcblxuICAuY29sLWxnLTMge1xuICAgIG1heC13aWR0aDogMjUlO1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gIH1cblxuICAuY29sLWxnLTQge1xuICAgIG1heC13aWR0aDogMzMuMzMzMzMlO1xuICAgIGZsZXg6IDAgMCAzMy4zMzMzMyU7XG4gIH1cblxuICAuY29sLWxnLTYge1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gIH1cblxuICAuY29sLWxnLTcge1xuICAgIG1heC13aWR0aDogNTguMzMzMzMlO1xuICAgIGZsZXg6IDAgMCA1OC4zMzMzMyU7XG4gIH1cblxuICAub3JkZXItbGctMiB7XG4gICAgb3JkZXI6IDI7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuXG4gIC5jb2wteGwtNCB7XG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMyU7XG4gICAgZmxleDogMCAwIDMzLjMzMzMzJTtcbiAgfVxuXG4gIC5jb2wteGwtNiB7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgfVxuXG4gIC5jb2wteGwtOCB7XG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NyU7XG4gICAgZmxleDogMCAwIDY2LjY2NjY3JTtcbiAgfVxuXG4gIC5vcmRlci14bC0xIHtcbiAgICBvcmRlcjogMTtcbiAgfVxuXG4gIC5vcmRlci14bC0yIHtcbiAgICBvcmRlcjogMjtcbiAgfVxufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygyLjc1cmVtICsgMnB4KTtcbiAgcGFkZGluZzogLjYyNXJlbSAuNzVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgY3ViaWMtYmV6aWVyKC42OCwgLS41NSwgLjI2NSwgMS41NSk7XG4gIGNvbG9yOiAjODg5OGFhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FkMWQ3O1xuICBib3JkZXItcmFkaXVzOiAuMzc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cbn1cblxuLmZvcm0tY29udHJvbDo6LW1zLWV4cGFuZCB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBjb2xvcjogIzg4OThhYTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUwLCAxNTEsIDIxMSwgLjI1KTtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogbm9uZSwgbm9uZTtcbn1cblxuLmZvcm0tY29udHJvbDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogI2FkYjViZDtcbn1cblxuLmZvcm0tY29udHJvbDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6ICNhZGI1YmQ7XG59XG5cbi5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6ICNhZGI1YmQ7XG59XG5cbi5mb3JtLWNvbnRyb2w6ZGlzYWJsZWQsXG4uZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG59XG5cbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5mb3JtLWlubGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuZm9ybS1pbmxpbmUgbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmZvcm0taW5saW5lIC5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmZvcm0taW5saW5lIC5mb3JtLWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogYXV0bztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgLmZvcm0taW5saW5lIC5pbnB1dC1ncm91cCB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAuNjI1cmVtIDEuMjVyZW07XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuYnRuIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG59XG5cbi5idG46aG92ZXIsXG4uYnRuOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCA3cHggMTRweCByZ2JhKDUwLCA1MCwgOTMsIC4xKSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgLjA4KTtcbn1cblxuLmJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IC42NTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYnRuOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgN3B4IDE0cHggcmdiYSg1MCwgNTAsIDkzLCAuMSksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIC4wOCksIG5vbmU7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICM1ZTcyZTQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTcyZTQ7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4wOCk7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICM1ZTcyZTQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTcyZTQ7XG59XG5cbi5idG4tcHJpbWFyeTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4wOCksIDAgMCAwIDAgcmdiYSg5NCwgMTE0LCAyMjgsIC41KTtcbn1cblxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogIzVlNzJlNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNzJlNDtcbn1cblxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICM1ZTcyZTQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjRjZGQ7XG59XG5cbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lLCAwIDAgMCAwIHJnYmEoOTQsIDExNCwgMjI4LCAuNSk7XG59XG5cbi5idG4taW5mbyB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICMxMWNkZWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMWNkZWY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4wOCk7XG59XG5cbi5idG4taW5mbzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICMxMWNkZWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMWNkZWY7XG59XG5cbi5idG4taW5mbzpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4wOCksIDAgMCAwIDAgcmdiYSgxNywgMjA1LCAyMzksIC41KTtcbn1cblxuLmJ0bi1pbmZvOmRpc2FibGVkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogIzExY2RlZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExY2RlZjtcbn1cblxuLmJ0bi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICMxMWNkZWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZGE1YzA7XG59XG5cbi5idG4taW5mbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lLCAwIDAgMCAwIHJnYmEoMTcsIDIwNSwgMjM5LCAuNSk7XG59XG5cbi5idG4tZGVmYXVsdCB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICMxNzJiNGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzJiNGQ7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4wOCk7XG59XG5cbi5idG4tZGVmYXVsdDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICMxNzJiNGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzJiNGQ7XG59XG5cbi5idG4tZGVmYXVsdDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4wOCksIDAgMCAwIDAgcmdiYSgyMywgNDMsIDc3LCAuNSk7XG59XG5cbi5idG4tZGVmYXVsdDpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICMxNzJiNGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzJiNGQ7XG59XG5cbi5idG4tZGVmYXVsdDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMTcyYjRkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIxNTI2O1xufVxuXG4uYnRuLWRlZmF1bHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSwgMCAwIDAgMCByZ2JhKDIzLCA0MywgNzcsIC41KTtcbn1cblxuLmJ0bi1zbSB7XG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAuMzc1cmVtO1xufVxuXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1pbi13aWR0aDogMTByZW07XG4gIG1hcmdpbjogLjEyNXJlbSAwIDA7XG4gIHBhZGRpbmc6IC41cmVtIDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNTI1ZjdmO1xuICBib3JkZXI6IDAgc29saWQgcmdiYSgwLCAwLCAwLCAuMTUpO1xuICBib3JkZXItcmFkaXVzOiAuNDM3NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMCA1MHB4IDEwMHB4IHJnYmEoNTAsIDUwLCA5MywgLjEpLCAwIDE1cHggMzVweCByZ2JhKDUwLCA1MCwgOTMsIC4xNSksIDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAuMSk7XG59XG5cbi5kcm9wZG93bi1tZW51LnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMTtcbn1cblxuLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbn1cblxuLmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePSd0b3AnXSxcbi5kcm9wZG93bi1tZW51W3gtcGxhY2VtZW50Xj0ncmlnaHQnXSxcbi5kcm9wZG93bi1tZW51W3gtcGxhY2VtZW50Xj0nYm90dG9tJ10sXG4uZHJvcGRvd24tbWVudVt4LXBsYWNlbWVudF49J2xlZnQnXSB7XG4gIHJpZ2h0OiBhdXRvO1xuICBib3R0b206IGF1dG87XG59XG5cbi5kcm9wZG93bi1kaXZpZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAwO1xuICBtYXJnaW46IC41cmVtIDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmO1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IC4yNXJlbSAxLjVyZW07XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZHJvcGRvd24taXRlbTpob3Zlcixcbi5kcm9wZG93bi1pdGVtOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzE2MTgxYjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjlmYztcbn1cblxuLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNzJlNDtcbn1cblxuLmRyb3Bkb3duLWl0ZW06ZGlzYWJsZWQge1xuICBjb2xvcjogIzg4OThhYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kcm9wZG93bi1oZWFkZXIge1xuICBmb250LXNpemU6IC44NzVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjODg5OGFhO1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4uaW5wdXQtZ3JvdXA+LmZvcm0tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDElO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmlucHV0LWdyb3VwPi5mb3JtLWNvbnRyb2wrLmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuXG4uaW5wdXQtZ3JvdXA+LmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5pbnB1dC1ncm91cD4uZm9ybS1jb250cm9sOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5pbnB1dC1ncm91cD4uZm9ybS1jb250cm9sOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cblxuLmlucHV0LWdyb3VwLXByZXBlbmQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCAuYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCAuYnRuKy5idG4sXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCAuYnRuKy5pbnB1dC1ncm91cC10ZXh0LFxuLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQrLmlucHV0LWdyb3VwLXRleHQsXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCsuYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG5cbi5pbnB1dC1ncm91cC1wcmVwZW5kIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogLjYyNXJlbSAuNzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICNhZGI1YmQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWQxZDc7XG4gIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dC1ncm91cC10ZXh0IGlucHV0W3R5cGU9J3JhZGlvJ10sXG4uaW5wdXQtZ3JvdXAtdGV4dCBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmlucHV0LWdyb3VwPi5pbnB1dC1ncm91cC1wcmVwZW5kPi5idG4sXG4uaW5wdXQtZ3JvdXA+LmlucHV0LWdyb3VwLXByZXBlbmQ+LmlucHV0LWdyb3VwLXRleHQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5pbnB1dC1ncm91cD4uaW5wdXQtZ3JvdXAtcHJlcGVuZDpub3QoOmZpcnN0LWNoaWxkKT4uYnRuLFxuLmlucHV0LWdyb3VwPi5pbnB1dC1ncm91cC1wcmVwZW5kOm5vdCg6Zmlyc3QtY2hpbGQpPi5pbnB1dC1ncm91cC10ZXh0LFxuLmlucHV0LWdyb3VwPi5pbnB1dC1ncm91cC1wcmVwZW5kOmZpcnN0LWNoaWxkPi5idG46bm90KDpmaXJzdC1jaGlsZCksXG4uaW5wdXQtZ3JvdXA+LmlucHV0LWdyb3VwLXByZXBlbmQ6Zmlyc3QtY2hpbGQ+LmlucHV0LWdyb3VwLXRleHQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4ubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAuMjVyZW0gLjc1cmVtO1xufVxuXG4ubmF2LWxpbms6aG92ZXIsXG4ubmF2LWxpbms6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXZiYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5uYXZiYXI+LmNvbnRhaW5lcixcbi5uYXZiYXI+LmNvbnRhaW5lci1mbHVpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubmF2YmFyLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGZsb2F0OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcblxuICAubmF2YmFyLWV4cGFuZC1tZD4uY29udGFpbmVyLFxuICAubmF2YmFyLWV4cGFuZC1tZD4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci1leHBhbmQtbWQge1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLW5hdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICB9XG5cbiAgLm5hdmJhci1leHBhbmQtbWQ+LmNvbnRhaW5lcixcbiAgLm5hdmJhci1leHBhbmQtbWQ+LmNvbnRhaW5lci1mbHVpZCB7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gIH1cbn1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45NSk7XG59XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIsXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjY1KTtcbn1cblxuLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbn1cblxuLmNhcmQ+aHIge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMS41cmVtO1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoLjM3NXJlbSAtIDFweCkgY2FsYyguMzc1cmVtIC0gMXB4KSAwIDA7XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtYmFyLXN0cmlwZXMge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxcmVtIDA7XG4gIH1cblxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICB9XG59XG5cbi5wcm9ncmVzcyB7XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgwLCAwLCAwLCAuMSk7XG59XG5cbi5tZWRpYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ubWVkaWEtYm9keSB7XG4gIGZsZXg6IDEgMTtcbn1cblxuLmJnLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2ZhZmMgIWltcG9ydGFudDtcbn1cblxuYS5iZy1zZWNvbmRhcnk6aG92ZXIsXG5hLmJnLXNlY29uZGFyeTpmb2N1cyxcbmJ1dHRvbi5iZy1zZWNvbmRhcnk6aG92ZXIsXG5idXR0b24uYmctc2Vjb25kYXJ5OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZTNlZSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzJiNGQgIWltcG9ydGFudDtcbn1cblxuYS5iZy1kZWZhdWx0OmhvdmVyLFxuYS5iZy1kZWZhdWx0OmZvY3VzLFxuYnV0dG9uLmJnLWRlZmF1bHQ6aG92ZXIsXG5idXR0b24uYmctZGVmYXVsdDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjE1MjYgIWltcG9ydGFudDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5hLmJnLXdoaXRlOmhvdmVyLFxuYS5iZy13aGl0ZTpmb2N1cyxcbmJ1dHRvbi5iZy13aGl0ZTpob3ZlcixcbmJ1dHRvbi5iZy13aGl0ZTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTYgIWltcG9ydGFudDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLTAge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxuLnJvdW5kZWQtY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmNThmOGZmZjtcbn1cblxuLmQtbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLmQtbWQtZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuXG4gIC5kLWxnLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZC1sZy1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG5cbiAgLmp1c3RpZnktY29udGVudC14bC1iZXR3ZWVuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbiAgfVxufVxuXG4uZmxvYXQtcmlnaHQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLnNoYWRvdyxcbi5jYXJkLXByb2ZpbGUtaW1hZ2UgaW1nIHtcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gMCByZ2JhKDEzNiwgMTUyLCAxNzAsIC4xNSkgIWltcG9ydGFudDtcbn1cblxuLm0tMCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4ubXQtMCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLm1iLTAge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tci0yIHtcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtMiB7XG4gIG1hcmdpbi1sZWZ0OiAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItMyB7XG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtNCxcbi5teS00IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci00IHtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLTQsXG4ubXktNCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItNSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LS03IHtcbiAgbWFyZ2luLXRvcDogLTZyZW0gIWltcG9ydGFudDtcbn1cblxuLnB0LTAge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4ucHItMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLnBiLTAge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4ucHQtNSB7XG4gIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wdC04IHtcbiAgcGFkZGluZy10b3A6IDhyZW0gIWltcG9ydGFudDtcbn1cblxuLnBiLTgge1xuICBwYWRkaW5nLWJvdHRvbTogOHJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5tdC1tZC01IHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHQtbWQtNCB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnBiLW1kLTQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcblxuICAucGwtbGctNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wdC1sZy04IHtcbiAgICBwYWRkaW5nLXRvcDogOHJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1sLWxnLWF1dG8ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuXG4gIC5tYi14bC0wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnRleHQtdXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4uZm9udC13ZWlnaHQtbGlnaHQge1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LXdlaWdodC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuYS50ZXh0LXdoaXRlOmhvdmVyLFxuYS50ZXh0LXdoaXRlOmZvY3VzIHtcbiAgY29sb3I6ICNlNmU2ZTYgIWltcG9ydGFudDtcbn1cblxuLnRleHQtbXV0ZWQge1xuICBjb2xvcjogIzg4OThhYSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgcHJpbnQge1xuXG4gICosXG4gICo6OmJlZm9yZSxcbiAgKjo6YWZ0ZXIge1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgYTpub3QoLmJ0bikge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5cbiAgaW1nIHtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIH1cblxuICBwLFxuICBoMyB7XG4gICAgb3JwaGFuczogMztcbiAgICB3aWRvd3M6IDM7XG4gIH1cblxuICBoMyB7XG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XG4gIH1cblxuICBAcGFnZSB7XG4gICAgc2l6ZTogYTM7XG4gIH1cblxuICBib2R5IHtcbiAgICBtaW4td2lkdGg6IDk5MnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtaW4td2lkdGg6IDk5MnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmF2YmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbmZpZ2NhcHRpb24sXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbm1haW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmEuYmctd2hpdGU6aG92ZXIsXG5hLmJnLXdoaXRlOmZvY3VzLFxuYnV0dG9uLmJnLXdoaXRlOmhvdmVyLFxuYnV0dG9uLmJnLXdoaXRlOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNiAhaW1wb3J0YW50O1xufVxuXG4uYmctZ3JhZGllbnQtZGVmYXVsdCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4N2RlZywgIzE3MmI0ZCAwLCAjMWExNzRkIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1ncmFkaWVudC1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDg3ZGVnLCAjMTcyYjRkIDAsICMxYTE3NGQgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBmbG9hdGluZy1sZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmbG9hdGluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmbG9hdGluZy1zbSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxufVxuXG4ub3BhY2l0eS04IHtcbiAgb3BhY2l0eTogLjggIWltcG9ydGFudDtcbn1cblxuLm9wYWNpdHktOCB7XG4gIG9wYWNpdHk6IC45ICFpbXBvcnRhbnQ7XG59XG5cbi5jZW50ZXIge1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuW2NsYXNzKj0nc2hhZG93J10ge1xuICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlO1xufVxuXG4uZm9udC13ZWlnaHQtMzAwIHtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1zbSB7XG4gIGZvbnQtc2l6ZTogLjg3NXJlbSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmEudGV4dC13aGl0ZTpob3ZlcixcbmEudGV4dC13aGl0ZTpmb2N1cyB7XG4gIGNvbG9yOiAjZTZlNmU2ICFpbXBvcnRhbnQ7XG59XG5cbi5hdmF0YXIge1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmF2YXRhciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYXZhdGFyLXNtIHtcbiAgZm9udC1zaXplOiAuODc1cmVtO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAuODc1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAuMDI1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3gtc2hhZG93OiAwIDdweCAxNHB4IHJnYmEoNTAsIDUwLCA5MywgLjEpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAuMDgpO1xufVxuXG4uYnRuOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xufVxuXG4uYnRuIGk6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tbGVmdDogLjVyZW07XG59XG5cbi5idG4gaTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbn1cblxuLmlucHV0LWdyb3VwIC5idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cblxuLmJ0bi1zbSB7XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xufVxuXG5bY2xhc3MqPSdidG4tb3V0bGluZS0nXSB7XG4gIGJvcmRlci13aWR0aDogMXB4O1xufVxuXG4uY2FyZC1wcm9maWxlLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC1wcm9maWxlLWltYWdlIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzAlKTtcbiAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcbn1cblxuLmNhcmQtcHJvZmlsZS1pbWFnZSBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzMlKTtcbn1cblxuLmNhcmQtcHJvZmlsZS1zdGF0cyB7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbn1cblxuLmNhcmQtcHJvZmlsZS1zdGF0cz5kaXYge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIHBhZGRpbmc6IC44NzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQtcHJvZmlsZS1zdGF0cz5kaXY6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNhcmQtcHJvZmlsZS1zdGF0cz5kaXYgLmhlYWRpbmcge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2FyZC1wcm9maWxlLXN0YXRzPmRpdiAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IC44NzVyZW07XG4gIGNvbG9yOiAjZjU4ZjhmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFpbi1jb250ZW50IC5uYXZiYXItdG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZy1yaWdodDogMzlweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMzlweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5kcm9wZG93biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDEycmVtO1xufVxuXG4uZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcbn1cblxuLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0+aSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogLTE3JTtcbn1cblxuLmRyb3Bkb3duLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogLjYyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2Y2ZjlmYztcbn1cblxuLmRyb3Bkb3duLW1lbnUgYS5tZWRpYT5kaXY6Zmlyc3QtY2hpbGQge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLmRyb3Bkb3duLW1lbnUgYS5tZWRpYSBwIHtcbiAgY29sb3I6ICM4ODk4YWE7XG59XG5cbi5kcm9wZG93bi1tZW51IGEubWVkaWE6aG92ZXIgLmhlYWRpbmcsXG4uZHJvcGRvd24tbWVudSBhLm1lZGlhOmhvdmVyIHAge1xuICBjb2xvcjogIzE3MmI0ZCAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogMi41cmVtIDA7XG4gIGJhY2tncm91bmQ6ICNmN2ZhZmM7XG59XG5cbi5mb290ZXIgLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgY29sb3I6ICM4ODk4YWEgIWltcG9ydGFudDtcbn1cblxuLmZvb3RlciAubmF2IC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzUyNWY3ZiAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyIC5jb3B5cmlnaHQge1xuICBmb250LXNpemU6IC44NzVyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wtbGFiZWwge1xuICBmb250LXNpemU6IC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNTI1ZjdmO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgZm9udC1zaXplOiAuODc1cmVtO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWRiNWJkO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FkYjViZDtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FkYjViZDtcbn1cblxudGV4dGFyZWFbcmVzaXplPSdub25lJ10ge1xuICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxudGV4dGFyZWFbcmVzaXplPSdib3RoJ10ge1xuICByZXNpemU6IGJvdGggIWltcG9ydGFudDtcbn1cblxudGV4dGFyZWFbcmVzaXplPSd2ZXJ0aWNhbCddIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xufVxuXG50ZXh0YXJlYVtyZXNpemU9J2hvcml6b250YWwnXSB7XG4gIHJlc2l6ZTogaG9yaXpvbnRhbCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1jb250cm9sLWFsdGVybmF0aXZlIHtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMTVzIGVhc2U7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoNTAsIDUwLCA5MywgLjE1KSwgMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4wMik7XG59XG5cbi5mb3JtLWNvbnRyb2wtYWx0ZXJuYXRpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAuMTEpLCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAuMDgpO1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiAuMzc1cmVtO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBib3JkZXItbGVmdDogMDtcbn1cblxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cblxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgY3ViaWMtYmV6aWVyKC42OCwgLS41NSwgLjI2NSwgMS41NSk7XG59XG5cbi5pbnB1dC1ncm91cC1hbHRlcm5hdGl2ZSB7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjE1cyBlYXNlO1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDUwLCA1MCwgOTMsIC4xNSksIDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMDIpO1xufVxuXG4uaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmUgLmZvcm0tY29udHJvbCxcbi5pbnB1dC1ncm91cC1hbHRlcm5hdGl2ZSAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmZvY3VzZWQgLmlucHV0LWdyb3VwLWFsdGVybmF0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoNTAsIDUwLCA5MywgLjExKSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgLjA4KSAhaW1wb3J0YW50O1xufVxuXG4uZm9jdXNlZCAuaW5wdXQtZ3JvdXAge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZm9jdXNlZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGNvbG9yOiAjODg5OGFhO1xuICBib3JkZXItY29sb3I6IHJnYmEoNTAsIDE1MSwgMjExLCAuMjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZm9jdXNlZCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUwLCAxNTEsIDIxMSwgLjI1KTtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG5cbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOm5vdCg6bGFzdC1jaGlsZCkge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG5cbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlucHV0LWdyb3VwLXRleHQge1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGN1YmljLWJlemllciguNjgsIC0uNTUsIC4yNjUsIDEuNTUpO1xufVxuXG4uaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmUge1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4xNXMgZWFzZTtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSg1MCwgNTAsIDkzLCAuMTUpLCAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjAyKTtcbn1cblxuLmlucHV0LWdyb3VwLWFsdGVybmF0aXZlIC5mb3JtLWNvbnRyb2wsXG4uaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmUgLmlucHV0LWdyb3VwLXRleHQge1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5mb2N1c2VkIC5pbnB1dC1ncm91cC1hbHRlcm5hdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4wOCkgIWltcG9ydGFudDtcbn1cblxuLmZvY3VzZWQgLmlucHV0LWdyb3VwIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmZvY3VzZWQgLmlucHV0LWdyb3VwLXRleHQge1xuICBjb2xvcjogIzg4OThhYTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUwLCAxNTEsIDIxMSwgLjI1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmZvY3VzZWQgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MCwgMTUxLCAyMTEsIC4yNSk7XG59XG5cbi5tYXNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2U7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLm1hc2sge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cbn1cblxuLm5hdi1saW5rIHtcbiAgY29sb3I6ICM1MjVmN2Y7XG59XG5cbi5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjNWU3MmU0O1xufVxuXG4ubmF2LWxpbmsgaS5uaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG59XG5cbi5uYXZiYXItc2VhcmNoIC5pbnB1dC1ncm91cCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5hdmJhci1zZWFyY2ggLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5hdmJhci1zZWFyY2ggLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAyNzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5uYXZiYXItc2VhcmNoLWRhcmsgLmlucHV0LWdyb3VwIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcbn1cblxuLm5hdmJhci1zZWFyY2gtZGFyayAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcbn1cblxuLm5hdmJhci1zZWFyY2gtZGFyayAuZm9ybS1jb250cm9sIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpO1xufVxuXG4ubmF2YmFyLXNlYXJjaC1kYXJrIC5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xufVxuXG4ubmF2YmFyLXNlYXJjaC1kYXJrIC5mb3JtLWNvbnRyb2w6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcbn1cblxuLm5hdmJhci1zZWFyY2gtZGFyayAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcbn1cblxuLm5hdmJhci1zZWFyY2gtZGFyayAuZm9jdXNlZCAuaW5wdXQtZ3JvdXAge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAubmF2YmFyIC5kcm9wZG93bi1tZW51LWFycm93OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC01O1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBjb250ZW50OiAnJztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoMTJweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIC5uYXZiYXIgLmRyb3Bkb3duLW1lbnUtcmlnaHQ6YmVmb3JlIHtcbiAgICByaWdodDogMjBweDtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG5cbiAgQGtleWZyYW1lcyBzaG93LW5hdmJhci1kcm9wZG93biB7XG4gICAgMCUge1xuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAuMjVzLCBvcGFjaXR5IC4yNXMsIHRyYW5zZm9ybSAuMjVzO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCkgcGVyc3BlY3RpdmUoMjAwcHgpIHJvdGF0ZVgoLTJkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGhpZGUtbmF2YmFyLWRyb3Bkb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiAuNjI1cmVtIDA7XG4gICAgY29sb3I6ICMxNzJiNGQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNob3ctbmF2YmFyLWNvbGxhcHNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhpZGUtbmF2YmFyLWNvbGxhcHNlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45NSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4ucHJvZ3Jlc3Mge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAuMSk7XG59XG5cbnAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcbn1cblxuLmhlYWRpbmcge1xuICBmb250LXNpemU6IC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC4wMjVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhlYWRpbmctc21hbGwge1xuICBmb250LXNpemU6IC43NXJlbTtcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4wNGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZGlzcGxheS0yIHNwYW4ge1xuICBmb250LXdlaWdodDogMzAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idG4ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cblxuI25hdmJhciAubmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfilesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profiles',
                templateUrl: './user-profiles.component.html',
                styleUrls: ['./user-profiles.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _services_share_data_service__WEBPACK_IMPORTED_MODULE_3__["ShareDataService"] }]; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "99Yc":
/*!************************************************!*\
  !*** ./src/app/services/share-data.service.ts ***!
  \************************************************/
/*! exports provided: ShareDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDataService", function() { return ShareDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * This is a util service to store the temporary data returned from the backend
 */
class ShareDataService {
    constructor() {
        this.data = {};
    }
    setData(key, value) {
        this.data[key] = value;
    }
    clearData() {
        this.data = {};
    }
    getData(key) {
        return this.data[key];
    }
}
ShareDataService.ɵfac = function ShareDataService_Factory(t) { return new (t || ShareDataService)(); };
ShareDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShareDataService, factory: ShareDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "D8YP":
/*!**********************************************************************!*\
  !*** ./src/app/components/myrecipe/newrecipe/newrecipe.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewrecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewrecipeComponent", function() { return NewrecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enums_food_allergy_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../enums/food-allergy.enum */ "H5i4");
/* harmony import */ var _enums_cuisine_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../enums/cuisine.enum */ "/kDq");
/* harmony import */ var _enums_feature_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../enums/feature.enum */ "7FbB");
/* harmony import */ var _enums_meal_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../enums/meal-type.enum */ "8z8A");
/* harmony import */ var _enums_recipe_tag_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../enums/recipe-tag.enum */ "GBHd");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/recipe.service */ "ZC9A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











function NewrecipeComponent_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create new recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewrecipeComponent_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update my recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewrecipeComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mealType_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", mealType_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mealType_r14);
} }
function NewrecipeComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cuisineType_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", cuisineType_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cuisineType_r15);
} }
function NewrecipeComponent_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const featureType_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", featureType_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](featureType_r16);
} }
function NewrecipeComponent_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const budget_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", budget_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", budget_r17, "");
} }
function NewrecipeComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const groupSize_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", groupSize_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](groupSize_r18);
} }
function NewrecipeComponent_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allergy_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", allergy_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](allergy_r19);
} }
function NewrecipeComponent_section_52_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewrecipeComponent_section_52_Template_input_ngModelChange_7_listener($event) { const step_r20 = ctx.$implicit; return step_r20.step = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewrecipeComponent_section_52_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const i_r21 = ctx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.removeStep(i_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Step ", i_r21 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "step_", i_r21 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", step_r20.step);
} }
function NewrecipeComponent_section_58_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewrecipeComponent_section_58_Template_input_ngModelChange_19_listener($event) { const item_r25 = ctx.$implicit; return item_r25.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewrecipeComponent_section_58_Template_input_ngModelChange_22_listener($event) { const item_r25 = ctx.$implicit; return item_r25.count = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewrecipeComponent_section_58_Template_input_ngModelChange_25_listener($event) { const item_r25 = ctx.$implicit; return item_r25.unit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewrecipeComponent_section_58_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const i_r26 = ctx.index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.removeItem(i_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Item ", i_r26 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "name_", i_r26 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "count_", i_r26 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r25.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "unit_", i_r26 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r25.unit);
} }
function NewrecipeComponent_img_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 38);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NewrecipeComponent_button_74_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewrecipeComponent_button_74_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.createRecipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewrecipeComponent_button_75_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewrecipeComponent_button_75_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.updateRecipe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NewrecipeComponent {
    constructor(recipeService, route) {
        this.recipeService = recipeService;
        this.route = route;
        this.allergies = Object.keys(_enums_food_allergy_enum__WEBPACK_IMPORTED_MODULE_1__["FoodAllergy"]);
        this.cuisineTypes = Object.keys(_enums_cuisine_enum__WEBPACK_IMPORTED_MODULE_2__["Cuisine"]);
        this.featureTypes = Object.keys(_enums_feature_enum__WEBPACK_IMPORTED_MODULE_3__["Feature"]);
        this.mealTypes = Object.keys(_enums_meal_type_enum__WEBPACK_IMPORTED_MODULE_4__["MealType"]);
        this.groupSizes = [1, 2, 3, 4, 5];
        this.budgets = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        this.recipe = {
            recipe_id: 0,
            name: '',
            member_id: 1,
            date: new Date(),
            steps: [{ step: '' }],
            ingredients: [{ name: '', unit: '', count: 0 }],
            group: 0,
            cost: 0,
            unit_cost: 0,
            photo: '',
            likes: 0,
            meal_type: _enums_meal_type_enum__WEBPACK_IMPORTED_MODULE_4__["MealType"].None,
            cuisine_type: _enums_cuisine_enum__WEBPACK_IMPORTED_MODULE_2__["Cuisine"].None,
            feature_type: _enums_feature_enum__WEBPACK_IMPORTED_MODULE_3__["Feature"].None,
            restrictions: [_enums_food_allergy_enum__WEBPACK_IMPORTED_MODULE_1__["FoodAllergy"].None],
            recipe_tags: [_enums_recipe_tag_enum__WEBPACK_IMPORTED_MODULE_5__["RecipeTag"].None]
        };
        this.imagePath = "";
        this.imgURL = "";
    }
    ngOnInit() {
        this.isUpdate = this.route.snapshot.data.isUpdate;
        if (this.isUpdate) {
            this.route.params.subscribe((value) => {
                this.getRecipeContent(value.recipeId);
            });
        }
    }
    preview(files) {
        if (files.length === 0)
            return;
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
        };
    }
    oneFileChanged(fileInput) {
        if (fileInput.target.files && fileInput.target.files[0] && fileInput.target.files[0].size < 20971520) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = rs => {
                    const imgBase64Path = e.target.result;
                    this.recipe.photo = imgBase64Path;
                };
            };
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
    createRecipe() {
        this.recipe.date = new Date();
        this.recipe.unit_cost = Math.ceil(this.recipe.cost / this.recipe.group);
        var rxjsData = this.recipeService.postNewRecipe(this.recipe);
        rxjsData.subscribe((data) => {
            console.log(data);
            alert("Success!");
        });
    }
    updateRecipe() {
        this.recipe.date = new Date();
        this.recipe.unit_cost = Math.ceil(this.recipe.cost / this.recipe.group);
        var rxjsData = this.recipeService.updateOneRecipe(this.recipe);
        rxjsData.subscribe((data) => {
            console.log(data);
            alert("Success!");
        });
    }
    addStep() {
        this.recipe.steps.push({ step: '' });
    }
    removeStep(i) {
        this.recipe.steps.splice(i, 1);
    }
    addItem() {
        this.recipe.ingredients.push({ name: '', unit: '', count: 0 });
    }
    removeItem(i) {
        this.recipe.ingredients.splice(i, 1);
    }
    getRecipeContent(recipeId) {
        var rxjsData = this.recipeService.getRecipeByID(recipeId);
        rxjsData.subscribe((data) => {
            this.recipe = data;
        });
    }
}
NewrecipeComponent.ɵfac = function NewrecipeComponent_Factory(t) { return new (t || NewrecipeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_recipe_service__WEBPACK_IMPORTED_MODULE_6__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
NewrecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewrecipeComponent, selectors: [["app-newrecipe"]], decls: 77, vars: 20, consts: [[1, "row"], [1, "col-1"], [1, "col-11"], ["class", "page-text", 4, "ngIf"], [1, "col-2"], [1, "form-group"], ["for", "mealType", 1, "filter-label"], ["name", "mealType", "id", "mealType", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "cuisineType", 1, "filter-label"], ["name", "cuisineType", "id", "cuisineType", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "featureType", 1, "filter-label"], ["name", "featureType", "id", "featureType", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "budget", 1, "filter-label"], ["name", "budget", "id", "budget", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "groupSize", 1, "filter-label"], ["name", "groupSize", "id", "groupSize", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "allergies", 1, "filter-label"], ["name", "allergies", "id", "allergies", "multiple", "multiple", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "name", 1, "subtitle-text"], ["type", "text", "name", "name", "id", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "steps", 1, "subtitle-text"], ["class", "container", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-block", 3, "click"], ["for", "ingredients", 1, "subtitle-text"], [1, "subtitle-text"], ["type", "file", "accept", "image/*", 3, "change"], ["file", ""], [1, "row", "pic-row"], [1, "col"], ["class", "pic-holder", 3, "src", 4, "ngIf"], [1, "col", "text-center"], ["type", "submit", "class", "btn btn-lg submit-btn submit-center", "title", "submit new recipe", 3, "click", 4, "ngIf"], [1, "page-text"], [3, "value"], [1, "container"], ["type", "text", 1, "form-control", 3, "ngModel", "name", "ngModelChange"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "pic-holder", 3, "src"], ["type", "submit", "title", "submit new recipe", 1, "btn", "btn-lg", "submit-btn", "submit-center", 3, "click"]], template: function NewrecipeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewrecipeComponent_h1_4_Template, 2, 0, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewrecipeComponent_h1_5_Template, 2, 0, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Meal Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewrecipeComponent_Template_select_ngModelChange_14_listener($event) { return ctx.recipe.meal_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NewrecipeComponent_option_15_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cuisine Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewrecipeComponent_Template_select_ngModelChange_20_listener($event) { return ctx.recipe.cuisine_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NewrecipeComponent_option_21_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Feature Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewrecipeComponent_Template_select_ngModelChange_26_listener($event) { return ctx.recipe.feature_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NewrecipeComponent_option_27_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Budget < $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewrecipeComponent_Template_select_ngModelChange_32_listener($event) { return ctx.recipe.cost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, NewrecipeComponent_option_33_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Group size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewrecipeComponent_Template_select_ngModelChange_38_listener($event) { return ctx.recipe.group = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, NewrecipeComponent_option_39_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Allergies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewrecipeComponent_Template_select_ngModelChange_44_listener($event) { return ctx.recipe.restrictions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, NewrecipeComponent_option_45_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Recipe Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewrecipeComponent_Template_input_ngModelChange_49_listener($event) { return ctx.recipe.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cooking Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, NewrecipeComponent_section_52_Template, 11, 3, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewrecipeComponent_Template_button_click_53_listener() { return ctx.addStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Add step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Cooking Ingredients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, NewrecipeComponent_section_58_Template, 29, 7, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewrecipeComponent_Template_button_click_59_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Add ingredient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h1", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Add image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NewrecipeComponent_Template_input_change_63_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64); ctx.preview(_r10.files); return ctx.oneFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, NewrecipeComponent_img_69_Template, 1, 1, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, NewrecipeComponent_button_74_Template, 2, 0, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, NewrecipeComponent_button_75_Template, 2, 0, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.recipe.meal_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mealTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.recipe.cuisine_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cuisineTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.recipe.feature_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featureTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.recipe.cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.budgets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.recipe.group);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groupSizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.recipe.restrictions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allergies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.recipe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipe.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipe.ingredients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"]], styles: [".page-text[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 50px;\n    color: #f58f8fff;\n    font-weight: bold;\n    font-family: cursive;\n}\n\n.subtitle-text[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 30px;\n    color: #f58f8fff;\n    font-weight: bold;\n    font-family: cursive;\n    margin-bottom:  20px;\n}\n\n.filter-btn[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f6cd4cff; \n    color: white;\n}\n\n.filter-label[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f6cd4cff; \n    color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\n.form-check-label[_ngcontent-%COMP%]{\n    font-size: 16px;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f58f8fff; \n    border: 1px solid #f58f8fff;\n    color: white;\n}\n\n.submit-text[_ngcontent-%COMP%]{\n    font-family: cursive;\n    font-size: 30px;\n    color: #f58f8fff;\n    font-weight: bold;\n    padding-left: 20px;\n}\n\n.btn-block[_ngcontent-%COMP%]{\n    font-size: 20px;\n    font-weight: bold;\n    background-color: rgb(238, 182, 182); \n    color: white;\n}\n\n.pic-row[_ngcontent-%COMP%] {\n    min-height: 400px;\n    text-align:center;\n    background-color: rgb(226, 222, 222);\n    margin-left: 10%;\n    margin-right: 10%;\n}\n\n.pic-holder[_ngcontent-%COMP%] {\n    height: 400px;\n}\n\n.submit-center[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n    width:200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3JlY2lwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxXQUFXO0FBQ2YiLCJmaWxlIjoibmV3cmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgY29sb3I6ICNmNThmOGZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cblxuLnN1YnRpdGxlLXRleHQge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogI2Y1OGY4ZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgIG1hcmdpbi1ib3R0b206ICAyMHB4O1xufVxuXG4uZmlsdGVyLWJ0biB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmNkNGNmZjsgXG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmlsdGVyLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2Y2Q0Y2ZmOyBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uZm9ybS1jaGVjay1sYWJlbHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OGY4ZmZmOyBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjU4ZjhmZmY7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3VibWl0LXRleHR7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiAjZjU4ZjhmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uYnRuLWJsb2Nre1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAxODIsIDE4Mik7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBpYy1yb3cge1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIyMiwgMjIyKTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4ucGljLWhvbGRlciB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLnN1Ym1pdC1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOjIwMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewrecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newrecipe',
                templateUrl: './newrecipe.component.html',
                styleUrls: ['./newrecipe.component.css']
            }]
    }], function () { return [{ type: _services_recipe_service__WEBPACK_IMPORTED_MODULE_6__["RecipeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "EFyh":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _share_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./share-data.service */ "99Yc");







class LoginService {
    constructor(http, shareDataService) {
        this.http = http;
        this.shareDataService = shareDataService;
        // private base_api:string = "http://localhost:8080/";
        this.base_api = "/";
        this.loginStatusChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.loginStatusChange.subscribe((value) => {
            this.isLoggedIn = value;
        });
    }
    /**
     * Login service returns the user id as a temporarty token
     * @param auth username password combination
     *
     */
    login(auth) {
        let url = this.base_api + "api/login";
        return this.http.post(url, auth, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('user login failed')));
    }
    logOut() {
        this.shareDataService.clearData();
    }
    changeLoginStatus(state) {
        this.loginStatusChange.next(state);
    }
    /**
     * Handle the error and return a human readable message to delegating component
     * Return an empty IUser object to keep the app running.
     * @param operation
     * @param result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_share_data_service__WEBPACK_IMPORTED_MODULE_4__["ShareDataService"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _share_data_service__WEBPACK_IMPORTED_MODULE_4__["ShareDataService"] }]; }, null); })();


/***/ }),

/***/ "Flof":
/*!******************************************************************!*\
  !*** ./src/app/components/mealplan/newplan/newplan.component.ts ***!
  \******************************************************************/
/*! exports provided: NewplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewplanComponent", function() { return NewplanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enums_food_allergy_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../enums/food-allergy.enum */ "H5i4");
/* harmony import */ var _enums_cuisine_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../enums/cuisine.enum */ "/kDq");
/* harmony import */ var _enums_feature_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../enums/feature.enum */ "7FbB");
/* harmony import */ var _enums_meal_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../enums/meal-type.enum */ "8z8A");
/* harmony import */ var _services_mealplan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/mealplan.service */ "PQXq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function NewplanComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mealType_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", mealType_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mealType_r7);
} }
function NewplanComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cuisineType_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", cuisineType_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cuisineType_r8);
} }
function NewplanComponent_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const featureType_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", featureType_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](featureType_r9);
} }
function NewplanComponent_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const budget_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", budget_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", budget_r10, "");
} }
function NewplanComponent_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const groupSize_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", groupSize_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](groupSize_r11);
} }
function NewplanComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allergy_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", allergy_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](allergy_r12);
} }
function NewplanComponent_div_52_tbody_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewplanComponent_div_52_tbody_3_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const item_r14 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); item_r14.quantity = item_r14.quantity - 1; return ctx_r16.mealplan.budget = ctx_r16.mealplan.budget - item_r14.recipe.cost; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewplanComponent_div_52_tbody_3_Template_input_ngModelChange_16_listener($event) { const item_r14 = ctx.$implicit; return item_r14.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewplanComponent_div_52_tbody_3_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const item_r14 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); item_r14.quantity = item_r14.quantity + 1; return ctx_r19.mealplan.budget = ctx_r19.mealplan.budget + item_r14.recipe.cost; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const key_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r15 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.recipe.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r14.recipe.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14.recipe.cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r14.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r14.quantity);
} }
function NewplanComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewplanComponent_div_52_tbody_3_Template, 19, 6, "tbody", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mealplan Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewplanComponent_div_52_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.mealplan.budget = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewplanComponent_div_52_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.createMealPlan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.mealplan.recipe_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.mealplan.budget);
} }
class NewplanComponent {
    constructor(mealplanService, route, authService) {
        this.mealplanService = mealplanService;
        this.route = route;
        this.authService = authService;
        this.allergies = Object.keys(_enums_food_allergy_enum__WEBPACK_IMPORTED_MODULE_1__["FoodAllergy"]);
        this.cuisineTypes = Object.keys(_enums_cuisine_enum__WEBPACK_IMPORTED_MODULE_2__["Cuisine"]);
        this.featureTypes = Object.keys(_enums_feature_enum__WEBPACK_IMPORTED_MODULE_3__["Feature"]);
        this.mealTypes = Object.keys(_enums_meal_type_enum__WEBPACK_IMPORTED_MODULE_4__["MealType"]);
        this.groupSizes = [1, 2, 3, 4, 5];
        this.budgets = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        this.mealplan = {
            group: 0,
            budget: 0,
            date: 0,
            meal_type: _enums_meal_type_enum__WEBPACK_IMPORTED_MODULE_4__["MealType"].None,
            cuisine_type: _enums_cuisine_enum__WEBPACK_IMPORTED_MODULE_2__["Cuisine"].None,
            feature_type: _enums_feature_enum__WEBPACK_IMPORTED_MODULE_3__["Feature"].None,
            restrictions: [_enums_food_allergy_enum__WEBPACK_IMPORTED_MODULE_1__["FoodAllergy"].None],
            recipe_list: []
        };
        this.filter = {
            group: 0,
            budget: 0,
            meal_type: _enums_meal_type_enum__WEBPACK_IMPORTED_MODULE_4__["MealType"].None,
            cuisine_type: _enums_cuisine_enum__WEBPACK_IMPORTED_MODULE_2__["Cuisine"].None,
            feature_type: _enums_feature_enum__WEBPACK_IMPORTED_MODULE_3__["Feature"].None,
            restrictions: [_enums_food_allergy_enum__WEBPACK_IMPORTED_MODULE_1__["FoodAllergy"].None]
        };
        // public recipequality: ;
        this.recipelist = [];
    }
    ngOnInit() {
        this.gotrecipes = false;
        // this.recipelist = [{ name: "Hot Pepper and Onion Pizza"},
        //                     { name: "Beef Gyros"},]
        this.authService.getSession().subscribe(data => {
            this.userId = data.user_id;
            console.log("Get response: " + JSON.stringify(data));
        });
    }
    getRecipesForCustomized() {
        var rxjsData = this.mealplanService.getRecipesByFilter(this.filter, this.userId);
        this.mealplan.recipe_list = [];
        rxjsData.subscribe((data) => {
            this.recipelist = data;
            this.gotrecipes = true;
            this.recipelist.forEach(element => {
                // delete element.photo;
                this.mealplan.recipe_list.push({ recipe: element, quantity: 0 });
            });
            console.log('meal plan: ', this.mealplan);
        });
    }
    createMealPlan() {
        // this.mealplan.budget = this.filter.budget;
        this.mealplan.group = this.filter.group;
        // this.mealplan.meal_type = this.filter.meal_type;
        // this.mealplan.cuisine_type = this.filter.cuisine_type;
        // this.mealplan.feature_type = this.filter.feature_type;
        this.gotrecipes = false;
        this.mealplan.date = new Date();
        this.mealplan.recipe_list.forEach((element) => {
            delete element.recipe.photo;
        });
        var rxjsData = this.mealplanService.postNewMealplan(this.mealplan, this.userId);
        rxjsData.subscribe((data) => {
            console.log(data);
            alert("Success!");
        });
    }
}
NewplanComponent.ɵfac = function NewplanComponent_Factory(t) { return new (t || NewplanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mealplan_service__WEBPACK_IMPORTED_MODULE_5__["MealplanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
NewplanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewplanComponent, selectors: [["app-newplan"]], decls: 54, vars: 13, consts: [[1, "row"], [1, "col-1"], [1, "col-11"], [1, "page-text"], [1, "col-2"], [1, "form-group"], ["for", "mealType", 1, "filter-label"], ["name", "mealType", "id", "mealType", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "cuisineType", 1, "filter-label"], ["name", "cuisineType", "id", "cuisineType", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "featureType", 1, "filter-label"], ["name", "featureType", "id", "featureType", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "budget", 1, "filter-label"], ["name", "budget", "id", "budget", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "groupSize", 1, "filter-label"], ["name", "groupSize", "id", "groupSize", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "allergies", 1, "filter-label"], ["name", "allergies", "id", "allergies", "multiple", "multiple", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submitbtn", "title", "get recommended recipes for planning", 1, "btn", "btn-block", 3, "click"], [4, "ngIf"], [3, "value"], [1, "tab", "table", "table-borderless"], [4, "ngFor", "ngForOf"], [1, "row-fluid", "text-right"], ["for", "name", 1, "subtitle-text"], ["type", "text", "name", "name", "id", "name", "readonly", "", 1, "readonly-input", 3, "ngModel", "ngModelChange"], [1, "col", "text-center"], ["type", "submit", "title", "confirm recipes", 1, "btn", "btn-lg", "submit-btn", "submit-center", 3, "click"], ["scope", "row"], ["alt", "Image", 1, "img-responsive", "recipe-pic", 3, "src"], ["type", "button", 1, "btn-down", "sp-main", "count-btn", 3, "click"], ["max", "17", "min", "1", "type", "text", "readonly", "", 1, "readonly-input", 3, "value", "ngModel", "ngModelChange"], ["type", "button", 1, "btn-up", "sp-main", "count-btn", 3, "click"]], template: function NewplanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tell us what you like :)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Meal Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewplanComponent_Template_select_ngModelChange_13_listener($event) { return ctx.filter.meal_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NewplanComponent_option_14_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cuisine Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewplanComponent_Template_select_ngModelChange_19_listener($event) { return ctx.filter.cuisine_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NewplanComponent_option_20_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Feature Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewplanComponent_Template_select_ngModelChange_25_listener($event) { return ctx.filter.feature_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NewplanComponent_option_26_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Budget < $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewplanComponent_Template_select_ngModelChange_31_listener($event) { return ctx.filter.budget = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NewplanComponent_option_32_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Group size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewplanComponent_Template_select_ngModelChange_37_listener($event) { return ctx.filter.group = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, NewplanComponent_option_38_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Allergies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewplanComponent_Template_select_ngModelChange_43_listener($event) { return ctx.filter.restrictions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, NewplanComponent_option_44_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewplanComponent_Template_button_click_48_listener() { return ctx.getRecipesForCustomized(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Plan my meal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, NewplanComponent_div_52_Template, 15, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.meal_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mealTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.cuisine_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cuisineTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.feature_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featureTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.budget);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.budgets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.group);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groupSizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.restrictions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allergies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gotrecipes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectMultipleControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"]], styles: [".page-text[_ngcontent-%COMP%]{\n    padding-top: 20px;\n    font-size: 50px;\n    color: #f58f8fff;\n    font-weight: bold;\n    font-family: cursive;\n}\n\n.filter-btn[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f6cd4cff; \n    color: white;\n}\n\n.filter-label[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f6cd4cff; \n    color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\n.form-check-label[_ngcontent-%COMP%]{\n    font-size: 16px;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f58f8fff; \n    border: 1px solid #f58f8fff;\n    color: white;\n}\n\n.subtitle-text[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 35px;\n    color: #f58f8fff;\n    font-weight: bold;\n    font-family: cursive;\n}\n\n.submit-text[_ngcontent-%COMP%]{\n    font-family: cursive;\n    font-size: 30px;\n    color: #f58f8fff;\n    font-weight: bold;\n    padding-left: 20px;\n}\n\n.lightning-deal-content[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .fancy-number-group[_ngcontent-%COMP%]   .btn-up[_ngcontent-%COMP%]::after, .product-swiper-list[_ngcontent-%COMP%]   .fancy-number-group.fancy-number-group-sm[_ngcontent-%COMP%]   .btn-up[_ngcontent-%COMP%]:before {\n    content: '\\f067';\n}\n\n.recipe-pic[_ngcontent-%COMP%] {\n    height: 220px;\n    width: 270px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.submit-center[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n    width:200px;\n}\n\n.readonly-input[_ngcontent-%COMP%]{\n    width:100px;\n    height: calc(1.5em + .75rem + 2px);\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: .25rem;\n}\n\n.btn-block[_ngcontent-%COMP%]{\n    font-size: 20px;\n    font-weight: bold;\n    background-color: rgb(238, 182, 182); \n    color: white;\n}\n\n.count-btn[_ngcontent-%COMP%]{\n    font-size: 20px;\n    font-weight: bold;\n    height: calc(1.5em + .75rem + 2px);\n    line-height: 1.5;\n    border-radius: .25rem;\n    background-color: #f58f8fff; \n    border: 1px solid #f58f8fff;\n    color: white;\n    width:50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3BsYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUNBO0lBQ0ksV0FBVztJQUNYLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFVBQVU7QUFDZCIsImZpbGUiOiJuZXdwbGFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10ZXh0e1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjb2xvcjogI2Y1OGY4ZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuXG4uZmlsdGVyLWJ0biB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmNkNGNmZjsgXG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmlsdGVyLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2Y2Q0Y2ZmOyBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uZm9ybS1jaGVjay1sYWJlbHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OGY4ZmZmOyBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjU4ZjhmZmY7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3VidGl0bGUtdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjZjU4ZjhmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG5cbi5zdWJtaXQtdGV4dHtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICNmNThmOGZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5saWdodG5pbmctZGVhbC1jb250ZW50IC5wcm9kdWN0LWxpc3QtaXRlbSAuZmFuY3ktbnVtYmVyLWdyb3VwIC5idG4tdXA6OmFmdGVyLCAucHJvZHVjdC1zd2lwZXItbGlzdCAuZmFuY3ktbnVtYmVyLWdyb3VwLmZhbmN5LW51bWJlci1ncm91cC1zbSAuYnRuLXVwOmJlZm9yZSB7XG4gICAgY29udGVudDogJ1xcZjA2Nyc7XG59XG5cbi5yZWNpcGUtcGljIHtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uc3VibWl0LWNlbnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6MjAwcHg7XG59XG4ucmVhZG9ubHktaW5wdXR7XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbn1cblxuLmJ0bi1ibG9ja3tcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMTgyLCAxODIpOyBcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uY291bnQtYnRue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNThmOGZmZjsgXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1OGY4ZmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDo1MHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewplanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newplan',
                templateUrl: './newplan.component.html',
                styleUrls: ['./newplan.component.css']
            }]
    }], function () { return [{ type: _services_mealplan_service__WEBPACK_IMPORTED_MODULE_5__["MealplanService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "GBHd":
/*!******************************************!*\
  !*** ./src/app/enums/recipe-tag.enum.ts ***!
  \******************************************/
/*! exports provided: RecipeTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeTag", function() { return RecipeTag; });
var RecipeTag;
(function (RecipeTag) {
    RecipeTag["None"] = "None";
    RecipeTag["Popular"] = "Popular";
    RecipeTag["GoldenRecipe"] = "GoldenRecipe";
    RecipeTag["CostEffective"] = "CostEffective";
})(RecipeTag || (RecipeTag = {}));


/***/ }),

/***/ "H5i4":
/*!********************************************!*\
  !*** ./src/app/enums/food-allergy.enum.ts ***!
  \********************************************/
/*! exports provided: FoodAllergy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodAllergy", function() { return FoodAllergy; });
var FoodAllergy;
(function (FoodAllergy) {
    FoodAllergy["None"] = "None";
    FoodAllergy["Corn"] = "Corn";
    FoodAllergy["Egg"] = "Egg";
    FoodAllergy["Fish"] = "Fish";
    FoodAllergy["Meat"] = "Meat";
    FoodAllergy["Milk"] = "Milk";
    FoodAllergy["Peanut"] = "Peanut";
    FoodAllergy["Shellfish"] = "Shellfish";
    FoodAllergy["Soy"] = "Soy";
    FoodAllergy["TreeNut"] = "TreeNut";
    FoodAllergy["Wheat"] = "Wheat";
    FoodAllergy["FPIES"] = "FPIES";
})(FoodAllergy || (FoodAllergy = {}));


/***/ }),

/***/ "NLt7":
/*!******************************************************************!*\
  !*** ./src/app/components/mealplan/oldplan/oldplan.component.ts ***!
  \******************************************************************/
/*! exports provided: OldplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldplanComponent", function() { return OldplanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_mealplan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/mealplan.service */ "PQXq");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function (a1) { return [".", a1, "recipelist"]; };
const _c1 = function (a1) { return [".", a1, "shoppinglist"]; };
function OldplanComponent_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const key_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 6, item_r1.date, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.budget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, item_r1.mealplan_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, item_r1.mealplan_id));
} }
class OldplanComponent {
    constructor(mealplan, authService) {
        this.mealplan = mealplan;
        this.authService = authService;
        this.mealplans = [];
    }
    ngOnInit() {
        this.authService.getSession().subscribe(data => {
            this.userId = data.user_id;
            console.log("Get response: " + JSON.stringify(data));
        });
        console.log("this is my user id: " + this.userId);
        this.mealplan.getAllMealPlansForUser(this.userId)
            .subscribe((result) => {
            console.log(result);
            this.mealplans = result;
            console.log(this.mealplans);
        });
    }
}
OldplanComponent.ɵfac = function OldplanComponent_Factory(t) { return new (t || OldplanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mealplan_service__WEBPACK_IMPORTED_MODULE_1__["MealplanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
OldplanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OldplanComponent, selectors: [["app-oldplan"]], decls: 17, vars: 1, consts: [[1, "tab", "table", "table-borderless"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-lg", "submit-btn"], [1, "nav-link", 3, "routerLink"]], template: function OldplanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Creation Date/Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Recipe List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OldplanComponent_tbody_16_Template, 19, 13, "tbody", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mealplans);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".tab[_ngcontent-%COMP%]{\n    color: #f58f8fff;\n    font-size: 30px;\n}\n\n.submit-btn[_ngcontent-%COMP%] {  \n    font-size: 20px;\n    font-weight: bold;\n    background-color:  #f6cd4cff; \n    color: white;\n    width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZHBsYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoib2xkcGxhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYntcbiAgICBjb2xvcjogI2Y1OGY4ZmZmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnN1Ym1pdC1idG4geyAgXG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICAjZjZjZDRjZmY7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMjAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OldplanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-oldplan',
                templateUrl: './oldplan.component.html',
                styleUrls: ['./oldplan.component.css']
            }]
    }], function () { return [{ type: _services_mealplan_service__WEBPACK_IMPORTED_MODULE_1__["MealplanService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "PQXq":
/*!**********************************************!*\
  !*** ./src/app/services/mealplan.service.ts ***!
  \**********************************************/
/*! exports provided: MealplanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealplanService", function() { return MealplanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");





class MealplanService {
    // userId: number;
    constructor(http) {
        this.http = http;
        // hostUrl: string = 'http://localhost:8080/api/';
        this.hostUrl = '/api/';
    }
    getAllMealPlansForUser(userId) {
        // this.userId = this.shareDataService.getData('userid');
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.http.get(this.hostUrl + 'mealplan/' + userId).subscribe((res) => {
                observer.next(res);
            });
        });
    }
    getRecipesByFilter(filter, userId) {
        //const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
        console.log(filter);
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('budget', filter.budget);
        params = params.append('group', filter.group);
        params = params.append('meal_type', filter.meal_type);
        params = params.append('cuisine_type', filter.cuisine_type);
        params = params.append('feature_type', filter.feature_type);
        filter.restrictions.forEach((element) => {
            params = params.append(`restrictions[]`, element);
        });
        // this.userId = this.shareDataService.getData('userid');
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.http.get(this.hostUrl + 'mealplan/' + userId + '/customization/getrecipelist', { params: params }).subscribe((res) => {
                observer.next(res);
            });
        });
    }
    postNewMealplan(mealplan, userId) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'content-Type': 'application/json' }) };
        console.log(mealplan);
        // this.userId = this.shareDataService.getData('userid');
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.http.post(this.hostUrl + 'mealplan/' + userId + '/customization/', mealplan, httpOptions).subscribe((res) => {
                observer.next(res);
            });
        });
    }
    getRecipeListByMealplanID(mealplanId, userId) {
        // this.userId = this.shareDataService.getData('userid');
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.http.get(this.hostUrl + 'mealplan/' + userId + '/plans/' + mealplanId + '/recipelist').subscribe((res) => {
                observer.next(res);
            });
        });
    }
    getShoppingListByMealplanID(mealplanId, userId) {
        // this.userId = this.shareDataService.getData('userid');
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.http.get(this.hostUrl + 'mealplan/' + userId + '/plans/' + mealplanId + '/shoppinglist').subscribe((res) => {
                observer.next(res);
            });
        });
    }
}
MealplanService.ɵfac = function MealplanService_Factory(t) { return new (t || MealplanService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MealplanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MealplanService, factory: MealplanService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MealplanService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "SpgJ":
/*!*************************************************!*\
  !*** ./src/app/components/ads/ads.component.ts ***!
  \*************************************************/
/*! exports provided: AdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsComponent", function() { return AdsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AdsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdsComponent.ɵfac = function AdsComponent_Factory(t) { return new (t || AdsComponent)(); };
AdsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdsComponent, selectors: [["app-ads"]], decls: 12, vars: 0, consts: [[1, "row"], ["src", "assets/images/ads_1.jpg", "alt", "Image", 1, "img-responsive", "ad-pic"], ["src", "assets/images/ads_3.jpg", "alt", "Image", 1, "img-responsive", "ad-pic"], ["src", "assets/images/ads_4.jpg", "alt", "Image", 1, "img-responsive", "ad-pic"]], template: function AdsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".ad-pic[_ngcontent-%COMP%] {\n    width: 60%;\n    display: block;\n    margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxjQUFjO0FBQ2xCIiwiZmlsZSI6ImFkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkLXBpYyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ads',
                templateUrl: './ads.component.html',
                styleUrls: ['./ads.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_base_header_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header-base/header-base.component */ "rJwR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'recipe-smart-client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-base");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_header_base_header_base_component__WEBPACK_IMPORTED_MODULE_1__["HeaderBaseComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".align-center[_ngcontent-%COMP%] {\n    display:flex;\n    align-items:center;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxpZ24tY2VudGVyIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Uz4/":
/*!*********************************************************!*\
  !*** ./src/app/components/recipes/recipes.component.ts ***!
  \*********************************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enums_food_allergy_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/food-allergy.enum */ "H5i4");
/* harmony import */ var _enums_cuisine_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/cuisine.enum */ "/kDq");
/* harmony import */ var _enums_feature_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/feature.enum */ "7FbB");
/* harmony import */ var _enums_meal_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enums/meal-type.enum */ "8z8A");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/recipe.service */ "ZC9A");
/* harmony import */ var _ads_ads_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ads/ads.component */ "SpgJ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");












function RecipesComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mealType_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", mealType_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mealType_r5);
} }
function RecipesComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cuisineType_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", cuisineType_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cuisineType_r6);
} }
function RecipesComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const featureType_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", featureType_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](featureType_r7);
} }
function RecipesComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const budget_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", budget_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](budget_r8);
} }
const _c0 = function (a1) { return [".", a1]; };
function RecipesComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r9.recipe_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r9.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.name);
} }
class RecipesComponent {
    constructor(recipeService) {
        this.recipeService = recipeService;
        this.allergies = Object.keys(_enums_food_allergy_enum__WEBPACK_IMPORTED_MODULE_1__["FoodAllergy"]).filter(key => key != "None");
        this.cuisineTypes = Object.keys(_enums_cuisine_enum__WEBPACK_IMPORTED_MODULE_2__["Cuisine"]).filter(key => key != "None");
        this.featureTypes = Object.keys(_enums_feature_enum__WEBPACK_IMPORTED_MODULE_3__["Feature"]).filter(key => key != "None");
        this.mealTypes = Object.keys(_enums_meal_type_enum__WEBPACK_IMPORTED_MODULE_4__["MealType"]).filter(key => key != "None");
        this.groupSizes = [1, 2, 3, 4, 5];
        this.budgets = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        this.filter = {
            meal_types: [],
            feature_types: [],
            cuisine_types: [],
            name: '',
            cost: 100
        };
    }
    ngOnInit() {
        this.showAllRecipes();
    }
    showAllRecipes() {
        var rxjsData = this.recipeService.getAllRecipes();
        rxjsData.subscribe((data) => {
            this.recipes = data;
        });
    }
    filterRecipes(filter) {
        this.filter.meal_types;
        var rxjsData = this.recipeService.getRecipesByFilter(filter);
        rxjsData.subscribe((data) => {
            this.recipes = data;
        });
    }
}
RecipesComponent.ɵfac = function RecipesComponent_Factory(t) { return new (t || RecipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_recipe_service__WEBPACK_IMPORTED_MODULE_5__["RecipeService"])); };
RecipesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipesComponent, selectors: [["app-recipes"]], decls: 44, vars: 10, consts: [[1, "row"], [1, "col-2", "align-center"], [1, "col-8"], [1, "col"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "filterbtn"], ["ngbDropdownMenu", "", "name", "mealType", "id", "mealType", "multiple", "multiple", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["ngbDropdownMenu", "", "name", "cuisineType", "id", "cuisineType", "multiple", "multiple", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ngbDropdownMenu", "", "name", "featureType", "id", "featureType", "multiple", "multiple", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ngbDropdownMenu", "", "name", "budget", "id", "budget", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "name", "id", "name", "placeholder", "Search by name", 1, "filter-input", "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "title", "filter recipes", 1, "btn", "filterbtn", 3, "click"], [1, "container-fluid", "bg-3", "text-center"], [1, "row", "picrow"], ["class", "col-4", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-4"], [3, "routerLink"], ["alt", "Image", 1, "img-responsive", "recipe-pic", 3, "src"], [1, "recipe-name"]], template: function RecipesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-ads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Meal Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecipesComponent_Template_select_ngModelChange_11_listener($event) { return ctx.filter.meal_types = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RecipesComponent_option_12_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cuisine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecipesComponent_Template_select_ngModelChange_17_listener($event) { return ctx.filter.cuisine_types = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RecipesComponent_option_18_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecipesComponent_Template_select_ngModelChange_23_listener($event) { return ctx.filter.feature_types = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RecipesComponent_option_24_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Budget < $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecipesComponent_Template_select_ngModelChange_29_listener($event) { return ctx.filter.cost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RecipesComponent_option_30_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecipesComponent_Template_input_ngModelChange_32_listener($event) { return ctx.filter.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipesComponent_Template_button_click_34_listener() { return ctx.filterRecipes(ctx.filter); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, RecipesComponent_div_41_Template, 5, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-ads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.meal_types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mealTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.cuisine_types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cuisineTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.feature_types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featureTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.cost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.budgets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipes);
    } }, directives: [_ads_ads_component__WEBPACK_IMPORTED_MODULE_6__["AdsComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectMultipleControlValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownMenu"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"]], styles: [".picrow[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n}\n\n.recipe-pic[_ngcontent-%COMP%] {\n    border-radius: 5%;\n    width: 100%;\n    height: 80%;\n}\n\n.filterbtn[_ngcontent-%COMP%] {\n    background-color: #f6cd4cff;\n    color: white;\n    width: 150px;\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.recipe-name[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    color: rgb(228, 176, 6); \n}\n\n.filter-input[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: rgb(228, 176, 6); \n    border: 3px solid #f6cd4cff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InJlY2lwZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWNyb3cge1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuXG4ucmVjaXBlLXBpYyB7XG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MCU7XG59XG5cbi5maWx0ZXJidG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmNkNGNmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJlY2lwZS1uYW1lIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJnYigyMjgsIDE3NiwgNik7IFxufVxuXG4uZmlsdGVyLWlucHV0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHJnYigyMjgsIDE3NiwgNik7IFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmNmNkNGNmZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipes',
                templateUrl: './recipes.component.html',
                styleUrls: ['./recipes.component.css']
            }]
    }], function () { return [{ type: _services_recipe_service__WEBPACK_IMPORTED_MODULE_5__["RecipeService"] }]; }, null); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_base_header_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header-base/header-base.component */ "rJwR");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ "EFyh");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/share-data.service */ "99Yc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["../sign-up"]; };
function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_3_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.auth.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_3_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.auth.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Log in Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Create an Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.auth.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.auth.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
/**
 * This service send login request to backend and calls for storeage service
 * storage service is exposed for other component to use
 */
class LoginComponent {
    constructor(login_service, shared_service) {
        this.login_service = login_service;
        this.shared_service = shared_service;
        this.auth = {
            name: "test username",
            password: "test password"
        };
        this.isLoggedIn = this.shared_service.getData('isLoggedIn');
    }
    ngOnInit() {
    }
    login() {
        //login needs to get a full user object back and store it in the local cache
        this.login_service.login(this.auth).subscribe(res => {
            if (res.ret_code == 0) {
                this.shared_service.setData("userid", res.userid);
                this.shared_service.setData("isLoggedIn", true);
                console.log(res.ret_msg);
                this.isLoggedIn = true;
                this.login_service.changeLoginStatus(true);
                _header_base_header_base_component__WEBPACK_IMPORTED_MODULE_1__["HeaderBaseComponent"].setLoginStatus(true);
                alert("Logged in Successfully");
            }
            else {
                alert(res.ret_msg);
            }
        });
    }
    logOut() {
        this.login_service.logOut();
        console.log("User logged out, states cleared");
        this.isLoggedIn = false;
        _header_base_header_base_component__WEBPACK_IMPORTED_MODULE_1__["HeaderBaseComponent"].setLoginStatus(false);
        alert("Logged out successfully.");
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_share_data_service__WEBPACK_IMPORTED_MODULE_3__["ShareDataService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], inputs: { auth: "auth" }, decls: 4, vars: 2, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css")], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")], ["id", "logout btn", 4, "ngIf"], ["id", "log in form", 4, "ngIf"], ["id", "logout btn"], [1, "col-12"], [1, "logout-form"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-block", 3, "click"], ["id", "log in form"], [1, "login-form"], [1, "text-center"], ["type", "text", "placeholder", "Username", "required", "required", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "required", "required", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["role", "button", "href", "/auth/google", 1, "btn", "btn-block"], ["href", "#", 3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 7, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 18, 4, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".login-form[_ngcontent-%COMP%] {\n    width: 340px;\n    margin: 50px auto;\n}\n.login-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n    background: #f7f7f7;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    padding: 30px;\n}\n.login-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 0 0 15px;\n}\n.form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\n    min-height: 38px;\n    border-radius: 2px;\n}\n.btn[_ngcontent-%COMP%] {        \n    font-size: 15px;\n    font-weight: bold;\n    background-color:  #f58f8fff;\n    color: white;\n}\n.logout-form[_ngcontent-%COMP%] {\n    width: 340px;\n    margin: 50px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtIHtcbiAgICB3aWR0aDogMzQwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG4ubG9naW4tZm9ybSBmb3JtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG4ubG9naW4tZm9ybSBoMiB7XG4gICAgbWFyZ2luOiAwIDAgMTVweDtcbn1cbi5mb3JtLWNvbnRyb2wsIC5idG4ge1xuICAgIG1pbi1oZWlnaHQ6IDM4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmJ0biB7ICAgICAgICBcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNmNThmOGZmZjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2dvdXQtZm9ybSB7XG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _services_share_data_service__WEBPACK_IMPORTED_MODULE_3__["ShareDataService"] }]; }, { auth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_ads_ads_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ads/ads.component */ "SpgJ");
/* harmony import */ var _components_header_base_header_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header-base/header-base.component */ "rJwR");
/* harmony import */ var _components_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/recipes/recipes.component */ "Uz4/");
/* harmony import */ var _components_mealplan_mealplan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mealplan/mealplan.component */ "nVEh");
/* harmony import */ var _components_mealplan_newplan_newplan_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/mealplan/newplan/newplan.component */ "Flof");
/* harmony import */ var _components_mealplan_oldplan_oldplan_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mealplan/oldplan/oldplan.component */ "NLt7");
/* harmony import */ var _components_myrecipe_myrecipe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/myrecipe/myrecipe.component */ "m+0g");
/* harmony import */ var _components_myrecipe_oldrecipe_oldrecipe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/myrecipe/oldrecipe/oldrecipe.component */ "ZXUc");
/* harmony import */ var _components_myrecipe_newrecipe_newrecipe_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/myrecipe/newrecipe/newrecipe.component */ "D8YP");
/* harmony import */ var _components_user_profiles_user_profiles_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user-profiles/user-profiles.component */ "95DY");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/signup/signup.component */ "5Ey6");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_recipe_content_recipe_content_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/recipe-content/recipe-content.component */ "k/qn");
/* harmony import */ var _components_mealplan_oldplan_shoppinglist_shoppinglist_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/mealplan/oldplan/shoppinglist/shoppinglist.component */ "a1d8");
/* harmony import */ var _components_mealplan_oldplan_recipelist_recipelist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/mealplan/oldplan/recipelist/recipelist.component */ "+ky1");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/login.service */ "EFyh");
/* harmony import */ var _services_mealplan_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/mealplan.service */ "PQXq");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/recipe.service */ "ZC9A");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/share-data.service */ "99Yc");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "ofXK");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_login_service__WEBPACK_IMPORTED_MODULE_22__["LoginService"],
        _services_mealplan_service__WEBPACK_IMPORTED_MODULE_23__["MealplanService"],
        _services_recipe_service__WEBPACK_IMPORTED_MODULE_24__["RecipeService"],
        _services_share_data_service__WEBPACK_IMPORTED_MODULE_25__["ShareDataService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_26__["UserService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_27__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_9__["RecipesComponent"],
        _components_ads_ads_component__WEBPACK_IMPORTED_MODULE_7__["AdsComponent"],
        _components_header_base_header_base_component__WEBPACK_IMPORTED_MODULE_8__["HeaderBaseComponent"],
        _components_mealplan_mealplan_component__WEBPACK_IMPORTED_MODULE_10__["MealplanComponent"],
        _components_mealplan_newplan_newplan_component__WEBPACK_IMPORTED_MODULE_11__["NewplanComponent"],
        _components_mealplan_oldplan_oldplan_component__WEBPACK_IMPORTED_MODULE_12__["OldplanComponent"],
        _components_myrecipe_myrecipe_component__WEBPACK_IMPORTED_MODULE_13__["MyrecipeComponent"],
        _components_myrecipe_oldrecipe_oldrecipe_component__WEBPACK_IMPORTED_MODULE_14__["OldrecipeComponent"],
        _components_myrecipe_newrecipe_newrecipe_component__WEBPACK_IMPORTED_MODULE_15__["NewrecipeComponent"],
        _components_user_profiles_user_profiles_component__WEBPACK_IMPORTED_MODULE_16__["UserProfilesComponent"],
        _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
        _components_recipe_content_recipe_content_component__WEBPACK_IMPORTED_MODULE_19__["RecipeContentComponent"],
        _components_mealplan_oldplan_shoppinglist_shoppinglist_component__WEBPACK_IMPORTED_MODULE_20__["ShoppinglistComponent"],
        _components_mealplan_oldplan_recipelist_recipelist_component__WEBPACK_IMPORTED_MODULE_21__["RecipelistComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_27__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_9__["RecipesComponent"],
                    _components_ads_ads_component__WEBPACK_IMPORTED_MODULE_7__["AdsComponent"],
                    _components_header_base_header_base_component__WEBPACK_IMPORTED_MODULE_8__["HeaderBaseComponent"],
                    _components_mealplan_mealplan_component__WEBPACK_IMPORTED_MODULE_10__["MealplanComponent"],
                    _components_mealplan_newplan_newplan_component__WEBPACK_IMPORTED_MODULE_11__["NewplanComponent"],
                    _components_mealplan_oldplan_oldplan_component__WEBPACK_IMPORTED_MODULE_12__["OldplanComponent"],
                    _components_myrecipe_myrecipe_component__WEBPACK_IMPORTED_MODULE_13__["MyrecipeComponent"],
                    _components_myrecipe_oldrecipe_oldrecipe_component__WEBPACK_IMPORTED_MODULE_14__["OldrecipeComponent"],
                    _components_myrecipe_newrecipe_newrecipe_component__WEBPACK_IMPORTED_MODULE_15__["NewrecipeComponent"],
                    _components_user_profiles_user_profiles_component__WEBPACK_IMPORTED_MODULE_16__["UserProfilesComponent"],
                    _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                    _components_recipe_content_recipe_content_component__WEBPACK_IMPORTED_MODULE_19__["RecipeContentComponent"],
                    _components_mealplan_oldplan_shoppinglist_shoppinglist_component__WEBPACK_IMPORTED_MODULE_20__["ShoppinglistComponent"],
                    _components_mealplan_oldplan_recipelist_recipelist_component__WEBPACK_IMPORTED_MODULE_21__["RecipelistComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_27__["CommonModule"]
                ],
                providers: [
                    _services_login_service__WEBPACK_IMPORTED_MODULE_22__["LoginService"],
                    _services_mealplan_service__WEBPACK_IMPORTED_MODULE_23__["MealplanService"],
                    _services_recipe_service__WEBPACK_IMPORTED_MODULE_24__["RecipeService"],
                    _services_share_data_service__WEBPACK_IMPORTED_MODULE_25__["ShareDataService"],
                    _services_user_service__WEBPACK_IMPORTED_MODULE_26__["UserService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZC9A":
/*!********************************************!*\
  !*** ./src/app/services/recipe.service.ts ***!
  \********************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _share_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share-data.service */ "99Yc");






class RecipeService {
    constructor(http, shareDataService) {
        this.http = http;
        this.shareDataService = shareDataService;
        // hostUrl: string = 'http://localhost:8080/api/';
        this.hostUrl = '/api/';
    }
    getAllRecipes() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.http.get(this.hostUrl + 'recipes').subscribe((res) => {
                observer.next(res);
            });
        });
    }
    getRecipeByID(recipeId) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.http.get(this.hostUrl + 'recipes/' + recipeId).subscribe((res) => {
                observer.next(res);
            });
        });
    }
    getRecipesByMemberID() {
        this.userId = this.shareDataService.getData('userid');
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.http.get(this.hostUrl + 'myrecipes/' + this.userId).subscribe((res) => {
                observer.next(res);
            });
        });
    }
    getRecipesByFilter(filter) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.http.get(this.hostUrl + 'recipes', { params: filter }).subscribe((res) => {
                observer.next(res);
            });
        });
    }
    postNewRecipe(recipe) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.userId = this.shareDataService.getData('userid');
            recipe.member_id = this.userId;
            this.http.post(this.hostUrl + 'myrecipes/' + this.userId, recipe, httpOptions).subscribe((res) => {
                observer.next(res);
            });
        });
    }
    updateOneRecipe(recipe) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.userId = this.shareDataService.getData('userid');
            this.http.put(this.hostUrl + 'myrecipes/' + this.userId + '/' + recipe.recipe_id, recipe, httpOptions).subscribe((res) => {
                observer.next(res);
            });
        });
    }
}
RecipeService.ɵfac = function RecipeService_Factory(t) { return new (t || RecipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_share_data_service__WEBPACK_IMPORTED_MODULE_3__["ShareDataService"])); };
RecipeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RecipeService, factory: RecipeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _share_data_service__WEBPACK_IMPORTED_MODULE_3__["ShareDataService"] }]; }, null); })();


/***/ }),

/***/ "ZXUc":
/*!**********************************************************************!*\
  !*** ./src/app/components/myrecipe/oldrecipe/oldrecipe.component.ts ***!
  \**********************************************************************/
/*! exports provided: OldrecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OldrecipeComponent", function() { return OldrecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/recipe.service */ "ZC9A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a1) { return [".", a1]; };
function OldrecipeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r1.recipe_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
} }
class OldrecipeComponent {
    constructor(recipeService) {
        this.recipeService = recipeService;
    }
    ngOnInit() {
        this.hostUrl = this.recipeService.hostUrl;
        this.getMyRecipes();
    }
    getMyRecipes() {
        var rxjsData = this.recipeService.getRecipesByMemberID();
        rxjsData.subscribe((data) => {
            this.myrecipes = data;
        });
    }
}
OldrecipeComponent.ɵfac = function OldrecipeComponent_Factory(t) { return new (t || OldrecipeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"])); };
OldrecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OldrecipeComponent, selectors: [["app-oldrecipe"]], decls: 8, vars: 1, consts: [[1, "row"], [1, "col-1"], [1, "container-fluid", "bg-3", "text-center"], [1, "row", "picrow"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "col-2"], [1, "col-4"], [3, "routerLink"], ["alt", "Image", 1, "img-responsive", "recipe-pic", 3, "src"], [1, "recipe-name"]], template: function OldrecipeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OldrecipeComponent_div_6_Template, 5, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myrecipes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".recipe-pic[_ngcontent-%COMP%] {\n    height: 220px;\n    width: 270px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.recipe-name[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 50px;\n    font-size: 20px;\n    font-weight: bold;\n    color: rgb(228, 176, 6)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZHJlY2lwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQjtBQUNKIiwiZmlsZSI6Im9sZHJlY2lwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2lwZS1waWMge1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnJlY2lwZS1uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJnYigyMjgsIDE3NiwgNilcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OldrecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-oldrecipe',
                templateUrl: './oldrecipe.component.html',
                styleUrls: ['./oldrecipe.component.css']
            }]
    }], function () { return [{ type: _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"] }]; }, null); })();


/***/ }),

/***/ "a1d8":
/*!************************************************************************************!*\
  !*** ./src/app/components/mealplan/oldplan/shoppinglist/shoppinglist.component.ts ***!
  \************************************************************************************/
/*! exports provided: ShoppinglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppinglistComponent", function() { return ShoppinglistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_mealplan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/mealplan.service */ "PQXq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ShoppinglistComponent_tbody_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const key_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.unit);
} }
class ShoppinglistComponent {
    constructor(recipeService, route, authService) {
        this.recipeService = recipeService;
        this.route = route;
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.getSession().subscribe(data => {
            this.userId = data.user_id;
            console.log("Get response: " + JSON.stringify(data));
        });
        this.mealplanId = this.route.snapshot.params['mealplanId'];
        this.getShoppingList();
    }
    getShoppingList() {
        var rxjsData = this.recipeService.getShoppingListByMealplanID(this.mealplanId, this.userId);
        rxjsData.subscribe((data) => {
            this.ingredient_list = (data.shopping_list);
        });
    }
}
ShoppinglistComponent.ɵfac = function ShoppinglistComponent_Factory(t) { return new (t || ShoppinglistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mealplan_service__WEBPACK_IMPORTED_MODULE_1__["MealplanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ShoppinglistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppinglistComponent, selectors: [["app-shoppinglist"]], decls: 17, vars: 1, consts: [[1, "subtitle-text"], [1, "tab", "table", "table-borderless"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "checkbox"]], template: function ShoppinglistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ingredient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ShoppinglistComponent_tbody_16_Template, 12, 4, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ingredient_list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".page-text[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 50px;\n    color: #f58f8fff;\n    font-weight: bold;\n    font-family: cursive;\n}\n\n.subtitle-text[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 35px;\n    color: #f58f8fff;\n    font-weight: bold;\n    font-family: cursive;\n}\n\n.filter-btn[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f6cd4cff; \n    color: white;\n}\n\n.filter-label[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f6cd4cff; \n    color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n\n.form-check-label[_ngcontent-%COMP%]{\n    font-size: 16px;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f58f8fff; \n    border: 1px solid #f58f8fff;\n    color: white;\n}\n\n.submit-text[_ngcontent-%COMP%]{\n    font-family: cursive;\n    font-size: 30px;\n    color: #f58f8fff;\n    font-weight: bold;\n    padding-left: 20px;\n}\n\n.btn-block[_ngcontent-%COMP%]{\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f58f8fff; \n    border: 1px solid #f58f8fff;\n    color: white;\n}\n\n.pic-row[_ngcontent-%COMP%] {\n    min-height: 400px;\n}\n\n.pic-bg[_ngcontent-%COMP%] {\n    background-color: rgb(226, 222, 222);\n}\n\n.pic-holder[_ngcontent-%COMP%] {\n    height: 400px;\n    \n}\n\n.submit-center[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n    width:200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLFdBQVc7QUFDZiIsImZpbGUiOiJzaG9wcGluZ2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRleHQge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjb2xvcjogI2Y1OGY4ZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuXG4uc3VidGl0bGUtdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjZjU4ZjhmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG5cbi5maWx0ZXItYnRuIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2Y2Q0Y2ZmOyBcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5maWx0ZXItbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjZDRjZmY7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5mb3JtLWNoZWNrLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU4ZjhmZmY7IFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNThmOGZmZjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdWJtaXQtdGV4dHtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICNmNThmOGZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5idG4tYmxvY2t7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNThmOGZmZjsgXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1OGY4ZmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBpYy1yb3cge1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuXG4ucGljLWJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMjIsIDIyMik7XG59XG5cbi5waWMtaG9sZGVyIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xufVxuXG4uc3VibWl0LWNlbnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6MjAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppinglistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shoppinglist',
                templateUrl: './shoppinglist.component.html',
                styleUrls: ['./shoppinglist.component.css']
            }]
    }], function () { return [{ type: _services_mealplan_service__WEBPACK_IMPORTED_MODULE_1__["MealplanService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "k/qn":
/*!***********************************************************************!*\
  !*** ./src/app/components/recipe-content/recipe-content.component.ts ***!
  \***********************************************************************/
/*! exports provided: RecipeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeContentComponent", function() { return RecipeContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/recipe.service */ "ZC9A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ads_ads_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ads/ads.component */ "SpgJ");






function RecipeContentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ads");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecipeContentComponent_label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.recipe.meal_type);
} }
function RecipeContentComponent_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.recipe.cuisine_type);
} }
function RecipeContentComponent_label_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.recipe.feature_type);
} }
function RecipeContentComponent_label_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Recipe tag ", ctx_r4.recipe.recipe_tags[0], "");
} }
function RecipeContentComponent_label_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Contains: ", ctx_r5.recipe.restrictions, "");
} }
function RecipeContentComponent_tbody_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const key_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("step ", key_r11 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.step);
} }
function RecipeContentComponent_tbody_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const key_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r13 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.unit);
} }
const _c0 = function () { return ["./edit"]; };
function RecipeContentComponent_button_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function RecipeContentComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ads");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RecipeContentComponent {
    constructor(route, recipeService) {
        this.route = route;
        this.recipeService = recipeService;
        this.recipe = {
            name: "",
            image: "",
            likes: 0,
            group: 0
        };
    }
    ngOnInit() {
        this.route.params.subscribe((value) => {
            this.getRecipeContent(value.recipeId);
        });
        this.isMember = this.route.snapshot.data.isMember;
        this.hasAds = this.route.snapshot.data.hasAds;
    }
    getRecipeContent(recipeId) {
        var rxjsData = this.recipeService.getRecipeByID(recipeId);
        rxjsData.subscribe((data) => {
            this.recipe = data;
        });
    }
}
RecipeContentComponent.ɵfac = function RecipeContentComponent_Factory(t) { return new (t || RecipeContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"])); };
RecipeContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeContentComponent, selectors: [["app-recipe-content"]], decls: 54, vars: 14, consts: [[1, "row"], ["class", "col-2", 4, "ngIf"], [1, "col"], [1, "page-text"], [1, "col-5"], [1, "text-center"], [3, "src"], [1, "col-6"], ["class", "filter-label", 4, "ngIf"], [1, "value-label"], ["class", "value-label", 4, "ngIf"], ["class", "alert-label text-left warning", 4, "ngIf"], [1, "col-9"], [1, "subtitle-text"], [1, "tab", "table", "table-borderless"], [4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-block", 3, "routerLink", 4, "ngIf"], [1, "col-2"], [1, "filter-label"], [1, "alert-label", "text-left", "warning"], ["scope", "row"], ["type", "button", 1, "btn", "btn-block", 3, "routerLink"]], template: function RecipeContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecipeContentComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RecipeContentComponent_label_15_Template, 2, 1, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RecipeContentComponent_label_17_Template, 2, 1, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RecipeContentComponent_label_19_Template, 2, 1, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RecipeContentComponent_label_29_Template, 2, 1, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RecipeContentComponent_label_33_Template, 2, 1, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cooking steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, RecipeContentComponent_tbody_41_Template, 6, 2, "tbody", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Ingredients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, RecipeContentComponent_tbody_49_Template, 10, 4, "tbody", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, RecipeContentComponent_button_52_Template, 2, 2, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RecipeContentComponent_div_53_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasAds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.recipe.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recipe.meal_type && ctx.recipe.meal_type !== "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recipe.cuisine_type && ctx.recipe.cuisine_type !== "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recipe.feature_type && ctx.recipe.feature_type !== "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Serves group ", ctx.recipe.group, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Budget < $", ctx.recipe.cost, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recipe.recipe_tags && ctx.recipe.recipe_tags[0] !== "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recipe.restrictions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipe.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipe.ingredients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMember);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasAds);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ads_ads_component__WEBPACK_IMPORTED_MODULE_4__["AdsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".page-text[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 50px;\n    color: #f58f8fff;\n    font-weight: bold;\n    font-family: cursive;\n}\n\n.username-text[_ngcontent-%COMP%] {\n    color:rgb(145, 148, 148);\n}\n\n.subtitle-text[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    font-size: 35px;\n    color: #f58f8fff;\n    font-weight: bold;\n    font-family: cursive;\n}\n\n.filter-btn[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f6cd4cff; \n    color: white;\n}\n\n.alert-label[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    color: rgb(226, 83, 83);\n    border: 2px dashed rgb(226, 83, 83);\n    border-radius: 5%;\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    width: 80%;\n    text-align: center;\n}\n\n.filter-label[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f6cd4cff; \n    color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    width: 80%;\n    text-align: center;\n}\n\n.value-label[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    color: #f6cd4cff; \n    border: 2px solid  #f6cd4cff; \n    border-radius: 5%;\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    width: 80%;\n    text-align: center;\n}\n\n.form-check-label[_ngcontent-%COMP%]{\n    font-size: 16px;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f58f8fff; \n    border: 1px solid #f58f8fff;\n    color: white;\n}\n\n.submit-text[_ngcontent-%COMP%]{\n    font-family: cursive;\n    font-size: 30px;\n    color: #f58f8fff;\n    font-weight: bold;\n    padding-left: 20px;\n}\n\n.btn-block[_ngcontent-%COMP%]{\n    font-size: 20px;\n    font-weight: bold;\n    background-color: #f58f8fff; \n    border: 1px solid #f58f8fff;\n    color: white;\n}\n\n.marginauto[_ngcontent-%COMP%] {\n    margin: 10px auto 20px;\n    display: block;\n}\n\nimg[_ngcontent-%COMP%] {\n    max-width: 100%;\n}\n\n.warning[_ngcontent-%COMP%] {\n    width: 94%;\n}\n\n.submit-center[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n    width:200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsV0FBVztBQUNmIiwiZmlsZSI6InJlY2lwZS1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgY29sb3I6ICNmNThmOGZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cblxuLnVzZXJuYW1lLXRleHQge1xuICAgIGNvbG9yOnJnYigxNDUsIDE0OCwgMTQ4KTtcbn1cblxuLnN1YnRpdGxlLXRleHQge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogI2Y1OGY4ZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuXG4uZmlsdGVyLWJ0biB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmNkNGNmZjsgXG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWxlcnQtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcmdiKDIyNiwgODMsIDgzKTtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgcmdiKDIyNiwgODMsIDgzKTtcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maWx0ZXItbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjZDRjZmY7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52YWx1ZS1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZjZjZDRjZmY7IFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICAjZjZjZDRjZmY7IFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcm0tY2hlY2stbGFiZWx7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNThmOGZmZjsgXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1OGY4ZmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdC10ZXh0e1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogI2Y1OGY4ZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmJ0bi1ibG9ja3tcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OGY4ZmZmOyBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjU4ZjhmZmY7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWFyZ2luYXV0byB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi53YXJuaW5nIHtcbiAgICB3aWR0aDogOTQlO1xufVxuXG4uc3VibWl0LWNlbnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6MjAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipe-content',
                templateUrl: './recipe-content.component.html',
                styleUrls: ['./recipe-content.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AuthService {
    constructor(http) {
        this.http = http;
        // private base_url:string = "http://localhost:8080/auth/user";
        this.base_url = "/auth/user";
    }
    getSession() {
        return this.http.get(this.base_url);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "m+0g":
/*!***********************************************************!*\
  !*** ./src/app/components/myrecipe/myrecipe.component.ts ***!
  \***********************************************************/
/*! exports provided: MyrecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyrecipeComponent", function() { return MyrecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ads_ads_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ads/ads.component */ "SpgJ");




const _c0 = function () { return ["./newrecipe"]; };
const _c1 = function () { return ["./recipes"]; };
class MyrecipeComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyrecipeComponent.ɵfac = function MyrecipeComponent_Factory(t) { return new (t || MyrecipeComponent)(); };
MyrecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyrecipeComponent, selectors: [["app-myrecipe"]], decls: 19, vars: 4, consts: [[1, "row", "content-header"], [1, "col-1"], [1, "col-11"], [1, "bar-text"], [1, "row"], [1, "col-2", "left"], [1, "nav", "flex-column"], [1, "nav-item", "left-btn"], [1, "nav-link", "active", 3, "routerLink"], [1, "nav-link", 3, "routerLink"], [1, "col-8"], [1, "col-2", "right"]], template: function MyrecipeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-ads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _ads_ads_component__WEBPACK_IMPORTED_MODULE_2__["AdsComponent"]], styles: [".left[_ngcontent-%COMP%] {\n    border-right: 1px solid #f6cd4cff; \n}\n\n.right[_ngcontent-%COMP%] {\n    display:flex;\n    align-items:center;\n    justify-content: center;\n}\n\n.left-btn[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-weight: bold;\n    background-color: #f6cd4cff;\n    color: white;\n    border: 6px solid white;\n}\n\n.content-header[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    background-image: linear-gradient(to right, #f6cd4cff, rgb(247, 241, 223));\n}\n\n.bar-text[_ngcontent-%COMP%]{\n    font-size: 60px;\n    color:white;\n    font-weight: bold;\n    font-family: cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMEVBQTBFO0FBQzlFOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6Im15cmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Y2Y2Q0Y2ZmOyBcbn1cblxuLnJpZ2h0IHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubGVmdC1idG4ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjZDRjZmY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xufVxuXG4uY29udGVudC1oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjZjZDRjZmYsIHJnYigyNDcsIDI0MSwgMjIzKSk7XG59XG5cbi5iYXItdGV4dHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyrecipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-myrecipe',
                templateUrl: './myrecipe.component.html',
                styleUrls: ['./myrecipe.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nVEh":
/*!***********************************************************!*\
  !*** ./src/app/components/mealplan/mealplan.component.ts ***!
  \***********************************************************/
/*! exports provided: MealplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealplanComponent", function() { return MealplanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ads_ads_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ads/ads.component */ "SpgJ");




const _c0 = function () { return ["./newplan"]; };
const _c1 = function () { return ["./history"]; };
class MealplanComponent {
    constructor() { }
    ngOnInit() {
    }
}
MealplanComponent.ɵfac = function MealplanComponent_Factory(t) { return new (t || MealplanComponent)(); };
MealplanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MealplanComponent, selectors: [["app-mealplan"]], decls: 19, vars: 4, consts: [[1, "row", "content-header"], [1, "col-1"], [1, "col-11"], [1, "bar-text"], [1, "row"], [1, "col-2", "left"], [1, "nav", "flex-column"], [1, "nav-item", "left-btn"], [1, "nav-link", "active", 3, "routerLink"], [1, "nav-link", 3, "routerLink"], [1, "col-8"], [1, "col-2", "right"]], template: function MealplanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Meal Planner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-ads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _ads_ads_component__WEBPACK_IMPORTED_MODULE_2__["AdsComponent"]], styles: [".left[_ngcontent-%COMP%] {\n    border-right: 1px solid #f6cd4cff; \n}\n\n.right[_ngcontent-%COMP%] {\n    display:flex;\n    align-items:center;\n    justify-content: center;\n}\n\n.left-btn[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-weight: bold;\n    background-color: #f6cd4cff;\n    color: white;\n    border: 6px solid white;\n}\n\n.content-header[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    background-image: linear-gradient(to right, #f6cd4cff, rgb(247, 241, 223));\n}\n\n.bar-text[_ngcontent-%COMP%]{\n    font-size: 60px;\n    \n    color:white;\n    font-weight: bold;\n    font-family: cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWxwbGFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMEVBQTBFO0FBQzlFOztBQUVBO0lBQ0ksZUFBZTs7SUFFZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJtZWFscGxhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmNmNkNGNmZjsgXG59XG5cbi5yaWdodCB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxlZnQtYnRuIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2Y2Q0Y2ZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmNvbnRlbnQtaGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y2Y2Q0Y2ZmLCByZ2IoMjQ3LCAyNDEsIDIyMykpO1xufVxuXG4uYmFyLXRleHR7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIFxuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MealplanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mealplan',
                templateUrl: './mealplan.component.html',
                styleUrls: ['./mealplan.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/share-data.service */ "99Yc");







class UserService {
    constructor(http, shared_service) {
        this.http = http;
        this.shared_service = shared_service;
        //private base_api:string = "http://localhost:8080"
        this.base_api = "/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    /**
     * Take the id from the delegating component
     * create a http get request with the id as param
     * send it to the backend and wait for the response in a async way
     * @param id
     */
    getUserById(id) {
        const url = `${this.base_api}/user/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`getUserById id = ${id}`)));
    }
    /**
     * Update User by given id
     * @param user
     * @param id
     */
    updateUser(user, id) {
        let url = `${this.base_api}/user/${id}`;
        return this.http.put(url, user, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updated user')));
    }
    /**
     * Add user with the given User object from the delegating component
     * @param user
     */
    addUser(user) {
        let url = this.base_api + "/user";
        return this.http.post(url, user, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('add user operation failed')));
    }
    /**
     * Validate if given email already occupied in database
     * @param email
     */
    validateNameEmail(email, name) {
        // let url:string = `${this.base_api}/validation/?name=${name}&?email=${email}`;
        let url = this.base_api + "/validation/?name=" + name + "&?email=" + email;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`check username and email username = ${name} email = ${email}`)));
    }
    /**
     * Handle the error and return a human readable message to delegating component
     * Return an empty IUser object to keep the app running.
     * @param operation
     * @param result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_share_data_service__WEBPACK_IMPORTED_MODULE_4__["ShareDataService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_share_data_service__WEBPACK_IMPORTED_MODULE_4__["ShareDataService"] }]; }, null); })();


/***/ }),

/***/ "rJwR":
/*!*****************************************************************!*\
  !*** ./src/app/components/header-base/header-base.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBaseComponent", function() { return HeaderBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function () { return ["./recipes"]; };
const _c1 = function () { return ["./myprofile"]; };
const _c2 = function () { return ["./myrecipe"]; };
const _c3 = function () { return ["./mealplan"]; };
function HeaderBaseComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "My Recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Meal Planner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
} }
const _c4 = function () { return ["./login"]; };
function HeaderBaseComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c4));
} }
function HeaderBaseComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c4));
} }
class HeaderBaseComponent {
    //test :boolean = false;
    constructor(loginService) {
        this.loginService = loginService;
        this.isLoggedIn = false;
        this.loginService.loginStatusChange.subscribe(value => {
            this.isLoggedIn = value;
        });
    }
    ngOnInit() {
    }
    static setLoginStatus(loginStatus) {
        //this.isLoggedIn = loginStatus;
    }
}
HeaderBaseComponent.ɵfac = function HeaderBaseComponent_Factory(t) { return new (t || HeaderBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
HeaderBaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderBaseComponent, selectors: [["app-header-base"]], decls: 13, vars: 3, consts: [[1, "row", "header-container"], [1, "col-2", "align-center"], ["ngbDropdown", "", 4, "ngIf"], [1, "col-1", "align-center"], [1, "col-4", "align-center"], [1, "header-title"], ["src", "assets/images/logo.PNG", 1, "logo"], ["class", "btn login-btn", 4, "ngIf"], ["ngbDropdown", ""], ["id", "nav-icon", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "navigation", 1, "option-container"], ["ngbDropdownItem", "", 1, "option-font", 3, "routerLink"], [1, "dropdown-divider", "option-divider"], [1, "btn", "login-btn"], [1, "nav-link", "active", 3, "routerLink"]], template: function HeaderBaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderBaseComponent_div_2_Template, 14, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Recipe Smart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderBaseComponent_button_11_Template, 3, 2, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderBaseComponent_button_12_Template, 3, 2, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".header-container[_ngcontent-%COMP%] {\n    background-color: #f58f8fff;\n    font-family: cursive;\n    font-weight: bold;\n    color: white;\n}\n\n.align-center[_ngcontent-%COMP%] {\n    display:flex;\n    align-items:center;\n    justify-content: center;\n}\n\n#nav-icon[_ngcontent-%COMP%] {\n    background-image : url('nav-icon.PNG');\n    background-size: cover;\n    border: 6px solid #f6cd4cff;\n    border-radius: 20%;\n    width: 80px;\n    height: 75px;\n}\n\n.option-container[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-family: Helvetica;\n    border: 6px solid #f6cd4cff;\n}\n\n.option-divider[_ngcontent-%COMP%] {\n    color:  #f6cd4cff;\n    border: 2px solid #f6cd4cff;\n}\n\n.option-font[_ngcontent-%COMP%] {\n    color: #f58f8fff;   \n    font-weight: bold;\n}\n\n.header-title[_ngcontent-%COMP%] {\n    font-size: 80px;\n    color:#f6cd4cff;\n    font-weight: bold;\n}\n\n.logo[_ngcontent-%COMP%] {\n    border: 8px solid #f6cd4cff;\n    border-radius: 30%;\n    width: 150px;\n    margin-bottom: 20px;\n    margin-top: 20px;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-weight: bold;\n    width: 200px;\n    background-color: #f6cd4cff;\n    color: white;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n    display:none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1iYXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQ0FBMkQ7SUFDM0Qsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImhlYWRlci1iYXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OGY4ZmZmO1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFsaWduLWNlbnRlciB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI25hdi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlIDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbmF2LWljb24uUE5HKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJvcmRlcjogNnB4IHNvbGlkICNmNmNkNGNmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xufVxuXG4ub3B0aW9uLWNvbnRhaW5lciB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gICAgYm9yZGVyOiA2cHggc29saWQgI2Y2Y2Q0Y2ZmO1xufVxuXG4ub3B0aW9uLWRpdmlkZXIge1xuICAgIGNvbG9yOiAgI2Y2Y2Q0Y2ZmO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmNkNGNmZjtcbn1cblxuLm9wdGlvbi1mb250IHtcbiAgICBjb2xvcjogI2Y1OGY4ZmZmOyAgIFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgY29sb3I6I2Y2Y2Q0Y2ZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9nbyB7XG4gICAgYm9yZGVyOiA4cHggc29saWQgI2Y2Y2Q0Y2ZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubG9naW4tYnRuIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmNkNGNmZjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICBkaXNwbGF5Om5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderBaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-base',
                templateUrl: './header-base.component.html',
                styleUrls: ['./header-base.component.css']
            }]
    }], function () { return [{ type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/recipes/recipes.component */ "Uz4/");
/* harmony import */ var _components_recipe_content_recipe_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/recipe-content/recipe-content.component */ "k/qn");
/* harmony import */ var _components_mealplan_mealplan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mealplan/mealplan.component */ "nVEh");
/* harmony import */ var _components_mealplan_newplan_newplan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mealplan/newplan/newplan.component */ "Flof");
/* harmony import */ var _components_mealplan_oldplan_oldplan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mealplan/oldplan/oldplan.component */ "NLt7");
/* harmony import */ var _components_mealplan_oldplan_recipelist_recipelist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mealplan/oldplan/recipelist/recipelist.component */ "+ky1");
/* harmony import */ var _components_mealplan_oldplan_shoppinglist_shoppinglist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mealplan/oldplan/shoppinglist/shoppinglist.component */ "a1d8");
/* harmony import */ var _components_user_profiles_user_profiles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user-profiles/user-profiles.component */ "95DY");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/signup/signup.component */ "5Ey6");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_myrecipe_myrecipe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/myrecipe/myrecipe.component */ "m+0g");
/* harmony import */ var _components_myrecipe_newrecipe_newrecipe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/myrecipe/newrecipe/newrecipe.component */ "D8YP");
/* harmony import */ var _components_myrecipe_oldrecipe_oldrecipe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/myrecipe/oldrecipe/oldrecipe.component */ "ZXUc");

















const routes = [
    { path: 'recipes', component: _components_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_2__["RecipesComponent"] },
    { path: 'recipes/:recipeId', component: _components_recipe_content_recipe_content_component__WEBPACK_IMPORTED_MODULE_3__["RecipeContentComponent"], data: { isMember: false, hasAds: true } },
    { path: 'myprofile', component: _components_user_profiles_user_profiles_component__WEBPACK_IMPORTED_MODULE_9__["UserProfilesComponent"] },
    { path: 'sign-up', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    {
        path: 'mealplan', component: _components_mealplan_mealplan_component__WEBPACK_IMPORTED_MODULE_4__["MealplanComponent"],
        children: [
            { path: 'newplan', component: _components_mealplan_newplan_newplan_component__WEBPACK_IMPORTED_MODULE_5__["NewplanComponent"] },
            { path: 'history', component: _components_mealplan_oldplan_oldplan_component__WEBPACK_IMPORTED_MODULE_6__["OldplanComponent"] },
            { path: 'history/:mealplanId/shoppinglist', component: _components_mealplan_oldplan_shoppinglist_shoppinglist_component__WEBPACK_IMPORTED_MODULE_8__["ShoppinglistComponent"] },
            { path: 'history/:mealplanId/recipelist', component: _components_mealplan_oldplan_recipelist_recipelist_component__WEBPACK_IMPORTED_MODULE_7__["RecipelistComponent"] },
            { path: 'history/:mealplanId/recipelist/:recipeId', component: _components_recipe_content_recipe_content_component__WEBPACK_IMPORTED_MODULE_3__["RecipeContentComponent"], data: { isMember: false, hasAds: false } },
            { path: '**', redirectTo: 'newplan' }
        ]
    },
    {
        path: 'myrecipe', component: _components_myrecipe_myrecipe_component__WEBPACK_IMPORTED_MODULE_12__["MyrecipeComponent"],
        children: [
            { path: 'newrecipe', component: _components_myrecipe_newrecipe_newrecipe_component__WEBPACK_IMPORTED_MODULE_13__["NewrecipeComponent"], data: { isUpdate: false } },
            { path: 'recipes', component: _components_myrecipe_oldrecipe_oldrecipe_component__WEBPACK_IMPORTED_MODULE_14__["OldrecipeComponent"] },
            { path: 'recipes/:recipeId', component: _components_recipe_content_recipe_content_component__WEBPACK_IMPORTED_MODULE_3__["RecipeContentComponent"], data: { isMember: true, hasAds: false } },
            { path: 'recipes/:recipeId/edit', component: _components_myrecipe_newrecipe_newrecipe_component__WEBPACK_IMPORTED_MODULE_13__["NewrecipeComponent"], data: { isUpdate: true } },
            { path: '**', redirectTo: 'recipes' }
        ]
    },
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map