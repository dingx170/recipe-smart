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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





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
    constructor(recipeService, route) {
        this.recipeService = recipeService;
        this.route = route;
    }
    ngOnInit() {
        this.mealplanId = this.route.snapshot.params['mealplanId'];
        this.getRecipeList();
    }
    getRecipeList() {
        var rxjsData = this.recipeService.getRecipeListByMealplanID(this.mealplanId);
        rxjsData.subscribe((data) => {
            console.log(data);
            this.myrecipes = data;
        });
    }
}
RecipelistComponent.ɵfac = function RecipelistComponent_Factory(t) { return new (t || RecipelistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mealplan_service__WEBPACK_IMPORTED_MODULE_1__["MealplanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".recipe-pic[_ngcontent-%COMP%] {\r\n    height: 220px;\r\n    width: 270px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.recipe-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: rgb(228, 176, 6)\r\n}\r\n\r\n.page-text[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    font-size: 50px;\r\n    color: #f58f8fff;\r\n    font-weight: bold;\r\n    font-family: cursive;\r\n}\r\n\r\n.subtitle-text[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    font-size: 35px;\r\n    color: #f58f8fff;\r\n    font-weight: bold;\r\n    font-family: cursive;\r\n}\r\n\r\n.filter-btn[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f6cd4cff; \r\n    color: white;\r\n}\r\n\r\n.filter-label[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f6cd4cff; \r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.form-check-label[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n}\r\n\r\n.submit-btn[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f58f8fff; \r\n    border: 1px solid #f58f8fff;\r\n    color: white;\r\n}\r\n\r\n.submit-text[_ngcontent-%COMP%]{\r\n    font-family: cursive;\r\n    font-size: 30px;\r\n    color: #f58f8fff;\r\n    font-weight: bold;\r\n    padding-left: 20px;\r\n}\r\n\r\n.btn-block[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f58f8fff; \r\n    border: 1px solid #f58f8fff;\r\n    color: white;\r\n}\r\n\r\n.pic-row[_ngcontent-%COMP%] {\r\n    min-height: 400px;\r\n}\r\n\r\n.pic-bg[_ngcontent-%COMP%] {\r\n    background-color: rgb(226, 222, 222);\r\n}\r\n\r\n.pic-holder[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    \r\n}\r\n\r\n.submit-center[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0 auto;\r\n    width:200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxXQUFXO0FBQ2YiLCJmaWxlIjoicmVjaXBlbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2lwZS1waWMge1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZWNpcGUtbmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDIyOCwgMTc2LCA2KVxyXG59XHJcblxyXG4ucGFnZS10ZXh0IHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6ICNmNThmOGZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZS10ZXh0IHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgY29sb3I6ICNmNThmOGZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuXHJcbi5maWx0ZXItYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2Y2Q0Y2ZmOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZpbHRlci1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmNkNGNmZjsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNThmOGZmZjsgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjU4ZjhmZmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zdWJtaXQtdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICNmNThmOGZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWJsb2Nre1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU4ZjhmZmY7IFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1OGY4ZmZmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGljLXJvdyB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLnBpYy1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMjIsIDIyMik7XHJcbn1cclxuXHJcbi5waWMtaG9sZGVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxufVxyXG5cclxuLnN1Ym1pdC1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOjIwMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipelistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipelist',
                templateUrl: './recipelist.component.html',
                styleUrls: ['./recipelist.component.css']
            }]
    }], function () { return [{ type: _services_mealplan_service__WEBPACK_IMPORTED_MODULE_1__["MealplanService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


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

module.exports = __webpack_require__(/*! C:\Users\robin\Documents\recipe-smart-client\src\main.ts */"zUnb");


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
            name: "",
            password: "",
            email: "",
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background: #19aa8d;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n.form-control[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:focus, .input-group-addon[_ngcontent-%COMP%] {\r\n    border-color: #e1e1e1;\r\n}\r\n.form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {        \r\n    border-radius: 3px;\r\n}\r\n.signup-form[_ngcontent-%COMP%] {\r\n    width: 390px;\r\n    margin: 0 auto;\r\n    padding: 30px 0;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    color: #999;\r\n    border-radius: 3px;\r\n    margin-bottom: 15px;\r\n    background: #fff;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    padding: 30px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    color: #333;\r\n    font-weight: bold;\r\n    margin-top: 0;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\r\n    margin: 0 -30px 20px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-weight: normal;\r\n    font-size: 13px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    min-height: 38px;\r\n    box-shadow: none !important;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\r\n    max-width: 42px;\r\n    text-align: center;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n    margin-top: 2px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{        \r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    background:  #f58f8fff; \r\n    border: none;\r\n    min-width: 140px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, .signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\r\n    background: #179b81;\r\n    outline: none;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: rgb(212, 47, 47);\t\r\n    text-decoration: underline;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color:  #f58f8fff; \r\n    text-decoration: none;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 21px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .fa-paper-plane[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    left: 17px;\r\n    top: 18px;\r\n    font-size: 7px;\r\n    position: absolute;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsY0FBYztJQUNkLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTlhYThkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wsIC5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlMWUxZTE7XHJcbn1cclxuLmZvcm0tY29udHJvbCwgLmJ0biB7ICAgICAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uc2lnbnVwLWZvcm0ge1xyXG4gICAgd2lkdGg6IDM5MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbn1cclxuLnNpZ251cC1mb3JtIGZvcm0ge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIGgyIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi5zaWdudXAtZm9ybSBociB7XHJcbiAgICBtYXJnaW46IDAgLTMwcHggMjBweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgICBtaW4taGVpZ2h0OiAzOHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHRcclxuLnNpZ251cC1mb3JtIC5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDQycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNpZ251cC1mb3JtIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn0gICBcclxuLnNpZ251cC1mb3JtIC5idG57ICAgICAgICBcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZDogICNmNThmOGZmZjsgXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSAuYnRuOmhvdmVyLCAuc2lnbnVwLWZvcm0gLmJ0bjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTc5YjgxO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uc2lnbnVwLWZvcm0gYSB7XHJcbiAgICBjb2xvcjogcmdiKDIxMiwgNDcsIDQ3KTtcdFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnNpZ251cC1mb3JtIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5zaWdudXAtZm9ybSBmb3JtIGEge1xyXG4gICAgY29sb3I6ICAjZjU4ZjhmZmY7IFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHRcclxuLnNpZ251cC1mb3JtIGZvcm0gYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uc2lnbnVwLWZvcm0gLmZhIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gLmZhLXBhcGVyLXBsYW5lIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gLmZhLWNoZWNrIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGVmdDogMTdweDtcclxuICAgIHRvcDogMThweDtcclxuICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59Il19 */"] });
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
            name: "pikachu",
            password: "pikachu",
            email: "pikachu@gmail.com",
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".content-header[_ngcontent-%COMP%] {\r\n  margin-top: 25px;\r\n  background-image: linear-gradient(to right, #f6cd4cff, rgb(247, 241, 223));\r\n}\r\n\r\n.bar-text[_ngcontent-%COMP%]{\r\n  font-size: 60px;\r\n  color:white;\r\n  font-weight: bold;\r\n  font-family: cursive;\r\n}\r\n\r\n.edit-btn[_ngcontent-%COMP%] {\r\n  background-color: rgb(243, 167, 167);\r\n  color:white;\r\n  font-weight: bold;\r\n}\r\n\r\n[_ngcontent-%COMP%]:root {\r\n  --blue: #5e72e4;\r\n  --indigo: #5603ad;\r\n  --purple: #8965e0;\r\n  --pink: #f3a4b5;\r\n  --red: #f5365c;\r\n  --orange: #fb6340;\r\n  --yellow: #ffd600;\r\n  --green: #2dce89;\r\n  --teal: #11cdef;\r\n  --cyan: #2bffc6;\r\n  --white: #fff;\r\n  --gray: #8898aa;\r\n  --gray-dark: #32325d;\r\n  --light: #ced4da;\r\n  --lighter: #e9ecef;\r\n  --primary: #5e72e4;\r\n  --secondary: #f7fafc;\r\n  --success: #2dce89;\r\n  --info: #11cdef;\r\n  --warning: #fb6340;\r\n  --danger: #f5365c;\r\n  --light: #adb5bd;\r\n  --dark: #212529;\r\n  --default: #172b4d;\r\n  --white: #fff;\r\n  --neutral: #fff;\r\n  --darker: black;\r\n  --breakpoint-xs: 0;\r\n  --breakpoint-sm: 576px;\r\n  --breakpoint-md: 768px;\r\n  --breakpoint-lg: 992px;\r\n  --breakpoint-xl: 1200px;\r\n  --font-family-sans-serif: Open Sans, sans-serif;\r\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  font-family: sans-serif;\r\n  line-height: 1.15;\r\n  -webkit-text-size-adjust: 100%;\r\n  -ms-text-size-adjust: 100%;\r\n  -ms-overflow-style: scrollbar;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\nfigcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], main[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: Open Sans, sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  margin: 0;\r\n  text-align: left;\r\n  color: #525f7f;\r\n  background-color: #f8f9fe;\r\n}\r\n\r\n[tabindex='-1'][_ngcontent-%COMP%]:focus {\r\n  outline: 0 !important;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  overflow: visible;\r\n  box-sizing: content-box;\r\n  height: 0;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: .5rem;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\naddress[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  line-height: inherit;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\n\r\ndfn[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n}\r\n\r\nstrong[_ngcontent-%COMP%] {\r\n  font-weight: bolder;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #5e72e4;\r\n  background-color: transparent;\r\n  -webkit-text-decoration-skip: objects;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n  color: #233dd2;\r\n}\r\n\r\na[_ngcontent-%COMP%]:not([href]):not([tabindex]) {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\na[_ngcontent-%COMP%]:not([href]):not([tabindex]):hover, a[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\na[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus {\r\n  outline: 0;\r\n}\r\n\r\ncode[_ngcontent-%COMP%] {\r\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\r\n  font-size: 1em;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n  border-style: none;\r\n}\r\n\r\ncaption[_ngcontent-%COMP%] {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  caption-side: bottom;\r\n  text-align: left;\r\n  color: #8898aa;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-bottom: .5rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus {\r\n  outline: 1px dotted;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\r\n  margin: 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n  overflow: visible;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  text-transform: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   [type='button'][_ngcontent-%COMP%], [type='reset'][_ngcontent-%COMP%], [type='submit'][_ngcontent-%COMP%] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type='button'][_ngcontent-%COMP%]::-moz-focus-inner, [type='reset'][_ngcontent-%COMP%]::-moz-focus-inner, [type='submit'][_ngcontent-%COMP%]::-moz-focus-inner {\r\n  padding: 0;\r\n  border-style: none;\r\n}\r\n\r\ninput[type='radio'][_ngcontent-%COMP%], input[type='checkbox'][_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n\r\ninput[type='date'][_ngcontent-%COMP%], input[type='time'][_ngcontent-%COMP%], input[type='datetime-local'][_ngcontent-%COMP%], input[type='month'][_ngcontent-%COMP%] {\r\n  -webkit-appearance: listbox;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  resize: vertical;\r\n}\r\n\r\nlegend[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  line-height: inherit;\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  margin-bottom: .5rem;\r\n  padding: 0;\r\n  white-space: normal;\r\n  color: inherit;\r\n}\r\n\r\nprogress[_ngcontent-%COMP%] {\r\n  vertical-align: baseline;\r\n}\r\n\r\n[type='number'][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type='number'][_ngcontent-%COMP%]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n[type='search'][_ngcontent-%COMP%] {\r\n  outline-offset: -2px;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n[type='search'][_ngcontent-%COMP%]::-webkit-search-cancel-button, [type='search'][_ngcontent-%COMP%]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\r\n  font: inherit;\r\n  -webkit-appearance: button;\r\n}\r\n\r\n[hidden][_ngcontent-%COMP%] {\r\n  display: none !important;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n  font-weight: 600;\r\n  line-height: 1.5;\r\n  margin-bottom: .5rem;\r\n  color: #32325d;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%] {\r\n  font-size: 1.625rem;\r\n}\r\n\r\nh3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%] {\r\n  font-size: 1.0625rem;\r\n}\r\n\r\nh4[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%] {\r\n  font-size: .9375rem;\r\n}\r\n\r\nh5[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%] {\r\n  font-size: .8125rem;\r\n}\r\n\r\nh6[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\r\n  font-size: .625rem;\r\n}\r\n\r\n.display-2[_ngcontent-%COMP%] {\r\n  font-size: 2.75rem;\r\n  font-weight: 600;\r\n  line-height: 1.5;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n  border: 0;\r\n  border-top: 1px solid rgba(0, 0, 0, .1);\r\n}\r\n\r\ncode[_ngcontent-%COMP%] {\r\n  font-size: 87.5%;\r\n  word-break: break-word;\r\n  color: #f3a4b5;\r\n}\r\n\r\na[_ngcontent-%COMP%] > code[_ngcontent-%COMP%] {\r\n  color: inherit;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 540px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 720px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 960px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 1140px;\r\n  }\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.col-4[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  min-height: 1px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.col[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  flex-basis: 0;\r\n  flex-grow: 1;\r\n}\r\n\r\n.col-4[_ngcontent-%COMP%] {\r\n  max-width: 33.33333%;\r\n  flex: 0 0 33.33333%;\r\n}\r\n\r\n.col-8[_ngcontent-%COMP%] {\r\n  max-width: 66.66667%;\r\n  flex: 0 0 66.66667%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n  .col-md-10[_ngcontent-%COMP%] {\r\n    max-width: 83.33333%;\r\n    flex: 0 0 83.33333%;\r\n  }\r\n\r\n  .col-md-12[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    flex: 0 0 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n\r\n  .col-lg-3[_ngcontent-%COMP%] {\r\n    max-width: 25%;\r\n    flex: 0 0 25%;\r\n  }\r\n\r\n  .col-lg-4[_ngcontent-%COMP%] {\r\n    max-width: 33.33333%;\r\n    flex: 0 0 33.33333%;\r\n  }\r\n\r\n  .col-lg-6[_ngcontent-%COMP%] {\r\n    max-width: 50%;\r\n    flex: 0 0 50%;\r\n  }\r\n\r\n  .col-lg-7[_ngcontent-%COMP%] {\r\n    max-width: 58.33333%;\r\n    flex: 0 0 58.33333%;\r\n  }\r\n\r\n  .order-lg-2[_ngcontent-%COMP%] {\r\n    order: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n\r\n  .col-xl-4[_ngcontent-%COMP%] {\r\n    max-width: 33.33333%;\r\n    flex: 0 0 33.33333%;\r\n  }\r\n\r\n  .col-xl-6[_ngcontent-%COMP%] {\r\n    max-width: 50%;\r\n    flex: 0 0 50%;\r\n  }\r\n\r\n  .col-xl-8[_ngcontent-%COMP%] {\r\n    max-width: 66.66667%;\r\n    flex: 0 0 66.66667%;\r\n  }\r\n\r\n  .order-xl-1[_ngcontent-%COMP%] {\r\n    order: 1;\r\n  }\r\n\r\n  .order-xl-2[_ngcontent-%COMP%] {\r\n    order: 2;\r\n  }\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  display: block;\r\n  width: 100%;\r\n  height: calc(2.75rem + 2px);\r\n  padding: .625rem .75rem;\r\n  transition: all .2s cubic-bezier(.68, -.55, .265, 1.55);\r\n  color: #8898aa;\r\n  border: 1px solid #cad1d7;\r\n  border-radius: .375rem;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  box-shadow: none;\r\n}\r\n\r\n@media screen and (prefers-reduced-motion: reduce) {\r\n  .form-control[_ngcontent-%COMP%] {\r\n    transition: none;\r\n  }\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]::-ms-expand {\r\n  border: 0;\r\n  background-color: transparent;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n  color: #8898aa;\r\n  border-color: rgba(50, 151, 211, .25);\r\n  outline: 0;\r\n  background-color: #fff;\r\n  box-shadow: none, none;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]::placeholder {\r\n  opacity: 1;\r\n  color: #adb5bd;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:disabled, .form-control[readonly][_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  background-color: #e9ecef;\r\n}\r\n\r\ntextarea.form-control[_ngcontent-%COMP%] {\r\n  height: auto;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.form-inline[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  align-items: center;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .form-inline[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-bottom: 0;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .form-inline[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-bottom: 0;\r\n    flex: 0 0 auto;\r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n  }\r\n\r\n  .form-inline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: auto;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  .form-inline[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  line-height: 1.5;\r\n  display: inline-block;\r\n  padding: .625rem 1.25rem;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  white-space: nowrap;\r\n  border: 1px solid transparent;\r\n  border-radius: .375rem;\r\n}\r\n\r\n@media screen and (prefers-reduced-motion: reduce) {\r\n  .btn[_ngcontent-%COMP%] {\r\n    transition: none;\r\n  }\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:focus {\r\n  outline: 0;\r\n  box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:disabled {\r\n  opacity: .65;\r\n  box-shadow: none;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\r\n  cursor: pointer;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active {\r\n  box-shadow: none;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus {\r\n  box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08), none;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  border-color: #5e72e4;\r\n  background-color: #5e72e4;\r\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n  border-color: #5e72e4;\r\n  background-color: #5e72e4;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:focus {\r\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08), 0 0 0 0 rgba(94, 114, 228, .5);\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:disabled {\r\n  color: #fff;\r\n  border-color: #5e72e4;\r\n  background-color: #5e72e4;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active {\r\n  color: #fff;\r\n  border-color: #5e72e4;\r\n  background-color: #324cdd;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus {\r\n  box-shadow: none, 0 0 0 0 rgba(94, 114, 228, .5);\r\n}\r\n\r\n.btn-info[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  border-color: #11cdef;\r\n  background-color: #11cdef;\r\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);\r\n}\r\n\r\n.btn-info[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n  border-color: #11cdef;\r\n  background-color: #11cdef;\r\n}\r\n\r\n.btn-info[_ngcontent-%COMP%]:focus {\r\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08), 0 0 0 0 rgba(17, 205, 239, .5);\r\n}\r\n\r\n.btn-info[_ngcontent-%COMP%]:disabled {\r\n  color: #fff;\r\n  border-color: #11cdef;\r\n  background-color: #11cdef;\r\n}\r\n\r\n.btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active {\r\n  color: #fff;\r\n  border-color: #11cdef;\r\n  background-color: #0da5c0;\r\n}\r\n\r\n.btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus {\r\n  box-shadow: none, 0 0 0 0 rgba(17, 205, 239, .5);\r\n}\r\n\r\n.btn-default[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  border-color: #172b4d;\r\n  background-color: #172b4d;\r\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);\r\n}\r\n\r\n.btn-default[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n  border-color: #172b4d;\r\n  background-color: #172b4d;\r\n}\r\n\r\n.btn-default[_ngcontent-%COMP%]:focus {\r\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08), 0 0 0 0 rgba(23, 43, 77, .5);\r\n}\r\n\r\n.btn-default[_ngcontent-%COMP%]:disabled {\r\n  color: #fff;\r\n  border-color: #172b4d;\r\n  background-color: #172b4d;\r\n}\r\n\r\n.btn-default[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active {\r\n  color: #fff;\r\n  border-color: #172b4d;\r\n  background-color: #0b1526;\r\n}\r\n\r\n.btn-default[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus {\r\n  box-shadow: none, 0 0 0 0 rgba(23, 43, 77, .5);\r\n}\r\n\r\n.btn-sm[_ngcontent-%COMP%] {\r\n  font-size: .875rem;\r\n  line-height: 1.5;\r\n  padding: .25rem .5rem;\r\n  border-radius: .375rem;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  position: absolute;\r\n  z-index: 1000;\r\n  top: 100%;\r\n  left: 0;\r\n  display: none;\r\n  float: left;\r\n  min-width: 10rem;\r\n  margin: .125rem 0 0;\r\n  padding: .5rem 0;\r\n  list-style: none;\r\n  text-align: left;\r\n  color: #525f7f;\r\n  border: 0 solid rgba(0, 0, 0, .15);\r\n  border-radius: .4375rem;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  box-shadow: 0 50px 100px rgba(50, 50, 93, .1), 0 15px 35px rgba(50, 50, 93, .15), 0 5px 15px rgba(0, 0, 0, .1);\r\n}\r\n\r\n.dropdown-menu.show[_ngcontent-%COMP%] {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n.dropdown-menu-right[_ngcontent-%COMP%] {\r\n  right: 0;\r\n  left: auto;\r\n}\r\n\r\n.dropdown-menu[x-placement^='top'][_ngcontent-%COMP%], .dropdown-menu[x-placement^='right'][_ngcontent-%COMP%], .dropdown-menu[x-placement^='bottom'][_ngcontent-%COMP%], .dropdown-menu[x-placement^='left'][_ngcontent-%COMP%] {\r\n  right: auto;\r\n  bottom: auto;\r\n}\r\n\r\n.dropdown-divider[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 0;\r\n  margin: .5rem 0;\r\n  border-top: 1px solid #e9ecef;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  display: block;\r\n  clear: both;\r\n  width: 100%;\r\n  padding: .25rem 1.5rem;\r\n  text-align: inherit;\r\n  white-space: nowrap;\r\n  color: #212529;\r\n  border: 0;\r\n  background-color: transparent;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus {\r\n  text-decoration: none;\r\n  color: #16181b;\r\n  background-color: #f6f9fc;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]:active {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  background-color: #5e72e4;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]:disabled {\r\n  color: #8898aa;\r\n  background-color: transparent;\r\n}\r\n\r\n.dropdown-header[_ngcontent-%COMP%] {\r\n  font-size: .875rem;\r\n  display: block;\r\n  margin-bottom: 0;\r\n  padding: .5rem 1.5rem;\r\n  white-space: nowrap;\r\n  color: #8898aa;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  width: 100%;\r\n  flex-wrap: wrap;\r\n  align-items: stretch;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 1%;\r\n  margin-bottom: 0;\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%] + .form-control[_ngcontent-%COMP%] {\r\n  margin-left: -1px;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%]:focus {\r\n  z-index: 3;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%]:not(:last-child) {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] > .form-control[_ngcontent-%COMP%]:not(:first-child) {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] + .input-group-text[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] + .input-group-text[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] + .btn[_ngcontent-%COMP%] {\r\n  margin-left: -1px;\r\n}\r\n\r\n.input-group-prepend[_ngcontent-%COMP%] {\r\n  margin-right: -1px;\r\n}\r\n\r\n.input-group-text[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  display: flex;\r\n  margin-bottom: 0;\r\n  padding: .625rem .75rem;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  color: #adb5bd;\r\n  border: 1px solid #cad1d7;\r\n  border-radius: .375rem;\r\n  background-color: #fff;\r\n  align-items: center;\r\n}\r\n\r\n.input-group-text[_ngcontent-%COMP%]   input[type='radio'][_ngcontent-%COMP%], .input-group-text[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] > .input-group-prepend[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%] > .input-group-prepend[_ngcontent-%COMP%] > .input-group-text[_ngcontent-%COMP%] {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] > .input-group-prepend[_ngcontent-%COMP%]:not(:first-child) > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%] > .input-group-prepend[_ngcontent-%COMP%]:not(:first-child) > .input-group-text[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%] > .input-group-prepend[_ngcontent-%COMP%]:first-child > .btn[_ngcontent-%COMP%]:not(:first-child), .input-group[_ngcontent-%COMP%] > .input-group-prepend[_ngcontent-%COMP%]:first-child > .input-group-text[_ngcontent-%COMP%]:not(:first-child) {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-bottom: 0;\r\n  padding-left: 0;\r\n  list-style: none;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: .25rem .75rem;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  padding: 1rem 1rem;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%] > .container-fluid[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 0;\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n  position: static;\r\n  float: none;\r\n}\r\n\r\n@media (max-width: 767.98px) {\r\n\r\n  .navbar-expand-md[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%], .navbar-expand-md[_ngcontent-%COMP%] > .container-fluid[_ngcontent-%COMP%] {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-expand-md[_ngcontent-%COMP%] {\r\n    flex-flow: row nowrap;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n  }\r\n\r\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    padding-right: 1rem;\r\n    padding-left: 1rem;\r\n  }\r\n\r\n  .navbar-expand-md[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%], .navbar-expand-md[_ngcontent-%COMP%] > .container-fluid[_ngcontent-%COMP%] {\r\n    flex-wrap: nowrap;\r\n  }\r\n}\r\n\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, .95);\r\n}\r\n\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\r\n  color: rgba(255, 255, 255, .65);\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  border: 1px solid rgba(0, 0, 0, .05);\r\n  border-radius: .375rem;\r\n  background-color: #fff;\r\n  background-clip: border-box;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] > hr[_ngcontent-%COMP%] {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  padding: 1.25rem 1.5rem;\r\n  border-bottom: 1px solid rgba(0, 0, 0, .05);\r\n  background-color: #fff;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]:first-child {\r\n  border-radius: calc(.375rem - 1px) calc(.375rem - 1px) 0 0;\r\n}\r\n\r\n@keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 1rem 0;\r\n  }\r\n\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.progress[_ngcontent-%COMP%] {\r\n  font-size: .75rem;\r\n  display: flex;\r\n  overflow: hidden;\r\n  height: 1rem;\r\n  border-radius: .375rem;\r\n  background-color: #e9ecef;\r\n  box-shadow: inset 0 .1rem .1rem rgba(0, 0, 0, .1);\r\n}\r\n\r\n.media[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n\r\n.media-body[_ngcontent-%COMP%] {\r\n  flex: 1 1;\r\n}\r\n\r\n.bg-secondary[_ngcontent-%COMP%] {\r\n  background-color: #f7fafc !important;\r\n}\r\n\r\na.bg-secondary[_ngcontent-%COMP%]:hover, a.bg-secondary[_ngcontent-%COMP%]:focus, button.bg-secondary[_ngcontent-%COMP%]:hover, button.bg-secondary[_ngcontent-%COMP%]:focus {\r\n  background-color: #d2e3ee !important;\r\n}\r\n\r\n.bg-default[_ngcontent-%COMP%] {\r\n  background-color: #172b4d !important;\r\n}\r\n\r\na.bg-default[_ngcontent-%COMP%]:hover, a.bg-default[_ngcontent-%COMP%]:focus, button.bg-default[_ngcontent-%COMP%]:hover, button.bg-default[_ngcontent-%COMP%]:focus {\r\n  background-color: #0b1526 !important;\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  background-color: #fff !important;\r\n}\r\n\r\na.bg-white[_ngcontent-%COMP%]:hover, a.bg-white[_ngcontent-%COMP%]:focus, button.bg-white[_ngcontent-%COMP%]:hover, button.bg-white[_ngcontent-%COMP%]:focus {\r\n  background-color: #e6e6e6 !important;\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  background-color: #fff !important;\r\n}\r\n\r\n.border-0[_ngcontent-%COMP%] {\r\n  border: 0 !important;\r\n}\r\n\r\n.rounded-circle[_ngcontent-%COMP%] {\r\n  border-radius: 50% !important;\r\n  border: 4px solid #f58f8fff;\r\n}\r\n\r\n.d-none[_ngcontent-%COMP%] {\r\n  display: none !important;\r\n}\r\n\r\n.d-flex[_ngcontent-%COMP%] {\r\n  display: flex !important;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n  .d-md-flex[_ngcontent-%COMP%] {\r\n    display: flex !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n\r\n  .d-lg-inline-block[_ngcontent-%COMP%] {\r\n    display: inline-block !important;\r\n  }\r\n\r\n  .d-lg-block[_ngcontent-%COMP%] {\r\n    display: block !important;\r\n  }\r\n}\r\n\r\n.justify-content-center[_ngcontent-%COMP%] {\r\n  justify-content: center !important;\r\n}\r\n\r\n.justify-content-between[_ngcontent-%COMP%] {\r\n  justify-content: space-between !important;\r\n}\r\n\r\n.align-items-center[_ngcontent-%COMP%] {\r\n  align-items: center !important;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n\r\n  .justify-content-xl-between[_ngcontent-%COMP%] {\r\n    justify-content: space-between !important;\r\n  }\r\n}\r\n\r\n.float-right[_ngcontent-%COMP%] {\r\n  float: right !important;\r\n}\r\n\r\n.shadow[_ngcontent-%COMP%], .card-profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, .15) !important;\r\n}\r\n\r\n.m-0[_ngcontent-%COMP%] {\r\n  margin: 0 !important;\r\n}\r\n\r\n.mt-0[_ngcontent-%COMP%] {\r\n  margin-top: 0 !important;\r\n}\r\n\r\n.mb-0[_ngcontent-%COMP%] {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.mr-2[_ngcontent-%COMP%] {\r\n  margin-right: .5rem !important;\r\n}\r\n\r\n.ml-2[_ngcontent-%COMP%] {\r\n  margin-left: .5rem !important;\r\n}\r\n\r\n.mr-3[_ngcontent-%COMP%] {\r\n  margin-right: 1rem !important;\r\n}\r\n\r\n.mt-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\r\n  margin-top: 1.5rem !important;\r\n}\r\n\r\n.mr-4[_ngcontent-%COMP%] {\r\n  margin-right: 1.5rem !important;\r\n}\r\n\r\n.mb-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem !important;\r\n}\r\n\r\n.mb-5[_ngcontent-%COMP%] {\r\n  margin-bottom: 3rem !important;\r\n}\r\n\r\n.mt--7[_ngcontent-%COMP%] {\r\n  margin-top: -6rem !important;\r\n}\r\n\r\n.pt-0[_ngcontent-%COMP%] {\r\n  padding-top: 0 !important;\r\n}\r\n\r\n.pr-0[_ngcontent-%COMP%] {\r\n  padding-right: 0 !important;\r\n}\r\n\r\n.pb-0[_ngcontent-%COMP%] {\r\n  padding-bottom: 0 !important;\r\n}\r\n\r\n.pt-5[_ngcontent-%COMP%] {\r\n  padding-top: 3rem !important;\r\n}\r\n\r\n.pt-8[_ngcontent-%COMP%] {\r\n  padding-top: 8rem !important;\r\n}\r\n\r\n.pb-8[_ngcontent-%COMP%] {\r\n  padding-bottom: 8rem !important;\r\n}\r\n\r\n.m-auto[_ngcontent-%COMP%] {\r\n  margin: auto !important;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n  .mt-md-5[_ngcontent-%COMP%] {\r\n    margin-top: 3rem !important;\r\n  }\r\n\r\n  .pt-md-4[_ngcontent-%COMP%] {\r\n    padding-top: 1.5rem !important;\r\n  }\r\n\r\n  .pb-md-4[_ngcontent-%COMP%] {\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n\r\n  .pl-lg-4[_ngcontent-%COMP%] {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n\r\n  .pt-lg-8[_ngcontent-%COMP%] {\r\n    padding-top: 8rem !important;\r\n  }\r\n\r\n  .ml-lg-auto[_ngcontent-%COMP%] {\r\n    margin-left: auto !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n\r\n  .mb-xl-0[_ngcontent-%COMP%] {\r\n    margin-bottom: 0 !important;\r\n  }\r\n}\r\n\r\n.text-right[_ngcontent-%COMP%] {\r\n  text-align: right !important;\r\n}\r\n\r\n.text-center[_ngcontent-%COMP%] {\r\n  text-align: center !important;\r\n}\r\n\r\n.text-uppercase[_ngcontent-%COMP%] {\r\n  text-transform: uppercase !important;\r\n}\r\n\r\n.font-weight-light[_ngcontent-%COMP%] {\r\n  font-weight: 300 !important;\r\n}\r\n\r\n.font-weight-bold[_ngcontent-%COMP%] {\r\n  font-weight: 600 !important;\r\n}\r\n\r\n.text-white[_ngcontent-%COMP%] {\r\n  color: #fff !important;\r\n}\r\n\r\n.text-white[_ngcontent-%COMP%] {\r\n  color: #fff !important;\r\n}\r\n\r\na.text-white[_ngcontent-%COMP%]:hover, a.text-white[_ngcontent-%COMP%]:focus {\r\n  color: #e6e6e6 !important;\r\n}\r\n\r\n.text-muted[_ngcontent-%COMP%] {\r\n  color: #8898aa !important;\r\n}\r\n\r\n@media print {\r\n\r\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\r\n    box-shadow: none !important;\r\n    text-shadow: none !important;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%]:not(.btn) {\r\n    text-decoration: underline;\r\n  }\r\n\r\n  img[_ngcontent-%COMP%] {\r\n    page-break-inside: avoid;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\r\n    orphans: 3;\r\n    widows: 3;\r\n  }\r\n\r\n  h3[_ngcontent-%COMP%] {\r\n    page-break-after: avoid;\r\n  }\r\n\r\n  @page {\r\n    size[_ngcontent-%COMP%]:   a3[_ngcontent-%COMP%];\r\n  }\r\n\r\n  body[_ngcontent-%COMP%] {\r\n    min-width: 992px !important;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%] {\r\n    min-width: 992px !important;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\nfigcaption[_ngcontent-%COMP%], main[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  background-color: #fff !important;\r\n}\r\n\r\na.bg-white[_ngcontent-%COMP%]:hover, a.bg-white[_ngcontent-%COMP%]:focus, button.bg-white[_ngcontent-%COMP%]:hover, button.bg-white[_ngcontent-%COMP%]:focus {\r\n  background-color: #e6e6e6 !important;\r\n}\r\n\r\n.bg-gradient-default[_ngcontent-%COMP%] {\r\n  background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;\r\n}\r\n\r\n.bg-gradient-default[_ngcontent-%COMP%] {\r\n  background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;\r\n}\r\n\r\n@keyframes floating-lg {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  50% {\r\n    transform: translateY(15px);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@keyframes floating {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  50% {\r\n    transform: translateY(10px);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@keyframes floating-sm {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  50% {\r\n    transform: translateY(5px);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n.opacity-8[_ngcontent-%COMP%] {\r\n  opacity: .8 !important;\r\n}\r\n\r\n.opacity-8[_ngcontent-%COMP%] {\r\n  opacity: .9 !important;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n[class*='shadow'][_ngcontent-%COMP%] {\r\n  transition: all .15s ease;\r\n}\r\n\r\n.font-weight-300[_ngcontent-%COMP%] {\r\n  font-weight: 300 !important;\r\n}\r\n\r\n.text-sm[_ngcontent-%COMP%] {\r\n  font-size: .875rem !important;\r\n}\r\n\r\n.text-white[_ngcontent-%COMP%] {\r\n  color: #fff !important;\r\n}\r\n\r\na.text-white[_ngcontent-%COMP%]:hover, a.text-white[_ngcontent-%COMP%]:focus {\r\n  color: #e6e6e6 !important;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  display: inline-flex;\r\n  width: 48px;\r\n  height: 48px;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n  background-color: #adb5bd;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.avatar-sm[_ngcontent-%COMP%] {\r\n  font-size: .875rem;\r\n  width: 36px;\r\n  height: 36px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  font-size: .875rem;\r\n  position: relative;\r\n  transition: all .15s ease;\r\n  letter-spacing: .025em;\r\n  text-transform: none;\r\n  will-change: transform;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-1px);\r\n  box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: .5rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(:first-child) {\r\n  margin-left: .5rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: .5rem;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  margin-right: 0;\r\n  transform: translateY(0);\r\n}\r\n\r\n.btn-sm[_ngcontent-%COMP%] {\r\n  font-size: .75rem;\r\n}\r\n\r\n[class*='btn-outline-'][_ngcontent-%COMP%] {\r\n  border-width: 1px;\r\n}\r\n\r\n.card-profile-image[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.card-profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 50%;\r\n  max-width: 180px;\r\n  transition: all .15s ease;\r\n  transform: translate(-50%, -30%);\r\n  border-radius: .375rem;\r\n}\r\n\r\n.card-profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n  transform: translate(-50%, -33%);\r\n}\r\n\r\n.card-profile-stats[_ngcontent-%COMP%] {\r\n  padding: 1rem 0;\r\n}\r\n\r\n.card-profile-stats[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n  margin-right: 1rem;\r\n  padding: .875rem;\r\n  text-align: center;\r\n}\r\n\r\n.card-profile-stats[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n.card-profile-stats[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  display: block;\r\n}\r\n\r\n.card-profile-stats[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n  font-size: .875rem;\r\n  color: #f58f8fff;\r\n  font-weight: bold;\r\n}\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.main-content[_ngcontent-%COMP%]   .navbar-top[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  padding-right: 0 !important;\r\n  padding-left: 0 !important;\r\n  background-color: transparent;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .main-content[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\r\n    padding-right: 39px !important;\r\n    padding-left: 39px !important;\r\n  }\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n  min-width: 12rem;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\r\n  font-size: .875rem;\r\n  padding: .5rem 1rem;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] > i[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  margin-right: 1rem;\r\n  vertical-align: -17%;\r\n}\r\n\r\n.dropdown-header[_ngcontent-%COMP%] {\r\n  font-size: .625rem;\r\n  font-weight: 700;\r\n  padding-right: 1rem;\r\n  padding-left: 1rem;\r\n  text-transform: uppercase;\r\n  color: #f6f9fc;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   a.media[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child {\r\n  line-height: 1;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   a.media[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #8898aa;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   a.media[_ngcontent-%COMP%]:hover   .heading[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%]   a.media[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\r\n  color: #172b4d !important;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  padding: 2.5rem 0;\r\n  background: #f7fafc;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  color: #8898aa !important;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\r\n  color: #525f7f !important;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n  font-size: .875rem;\r\n}\r\n\r\n.form-control-label[_ngcontent-%COMP%] {\r\n  font-size: .875rem;\r\n  font-weight: 600;\r\n  color: #525f7f;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  font-size: .875rem;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus::placeholder {\r\n  color: #adb5bd;\r\n}\r\n\r\ntextarea[resize='none'][_ngcontent-%COMP%] {\r\n  resize: none !important;\r\n}\r\n\r\ntextarea[resize='both'][_ngcontent-%COMP%] {\r\n  resize: both !important;\r\n}\r\n\r\ntextarea[resize='vertical'][_ngcontent-%COMP%] {\r\n  resize: vertical !important;\r\n}\r\n\r\ntextarea[resize='horizontal'][_ngcontent-%COMP%] {\r\n  resize: horizontal !important;\r\n}\r\n\r\n.form-control-alternative[_ngcontent-%COMP%] {\r\n  transition: box-shadow .15s ease;\r\n  border: 0;\r\n  box-shadow: 0 1px 3px rgba(50, 50, 93, .15), 0 1px 0 rgba(0, 0, 0, .02);\r\n}\r\n\r\n.form-control-alternative[_ngcontent-%COMP%]:focus {\r\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\n  transition: all .15s ease;\r\n  border-radius: .375rem;\r\n  box-shadow: none;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:not(:first-child) {\r\n  padding-left: 0;\r\n  border-left: 0;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:not(:last-child) {\r\n  padding-right: 0;\r\n  border-right: 0;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none;\r\n}\r\n\r\n.input-group-text[_ngcontent-%COMP%] {\r\n  transition: all .2s cubic-bezier(.68, -.55, .265, 1.55);\r\n}\r\n\r\n.input-group-alternative[_ngcontent-%COMP%] {\r\n  transition: box-shadow .15s ease;\r\n  border: 0;\r\n  box-shadow: 0 1px 3px rgba(50, 50, 93, .15), 0 1px 0 rgba(0, 0, 0, .02);\r\n}\r\n\r\n.input-group-alternative[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .input-group-alternative[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n.focused[_ngcontent-%COMP%]   .input-group-alternative[_ngcontent-%COMP%] {\r\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08) !important;\r\n}\r\n\r\n.focused[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n}\r\n\r\n.focused[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n  color: #8898aa;\r\n  border-color: rgba(50, 151, 211, .25);\r\n  background-color: #fff;\r\n}\r\n\r\n.focused[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  border-color: rgba(50, 151, 211, .25);\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%] {\r\n  transition: all .15s ease;\r\n  border-radius: .375rem;\r\n  box-shadow: none;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:not(:first-child) {\r\n  padding-left: 0;\r\n  border-left: 0;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:not(:last-child) {\r\n  padding-right: 0;\r\n  border-right: 0;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none;\r\n}\r\n\r\n.input-group-text[_ngcontent-%COMP%] {\r\n  transition: all .2s cubic-bezier(.68, -.55, .265, 1.55);\r\n}\r\n\r\n.input-group-alternative[_ngcontent-%COMP%] {\r\n  transition: box-shadow .15s ease;\r\n  border: 0;\r\n  box-shadow: 0 1px 3px rgba(50, 50, 93, .15), 0 1px 0 rgba(0, 0, 0, .02);\r\n}\r\n\r\n.input-group-alternative[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .input-group-alternative[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n.focused[_ngcontent-%COMP%]   .input-group-alternative[_ngcontent-%COMP%] {\r\n  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08) !important;\r\n}\r\n\r\n.focused[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n  box-shadow: none;\r\n}\r\n\r\n.focused[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n  color: #8898aa;\r\n  border-color: rgba(50, 151, 211, .25);\r\n  background-color: #fff;\r\n}\r\n\r\n.focused[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  border-color: rgba(50, 151, 211, .25);\r\n}\r\n\r\n.mask[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  transition: all .15s ease;\r\n}\r\n\r\n@media screen and (prefers-reduced-motion: reduce) {\r\n  .mask[_ngcontent-%COMP%] {\r\n    transition: none;\r\n  }\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n  color: #525f7f;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]:hover {\r\n  color: #5e72e4;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]   i.ni[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 2px;\r\n}\r\n\r\n.navbar-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n  border: 2px solid;\r\n  border-radius: 2rem;\r\n  background-color: transparent;\r\n}\r\n\r\n.navbar-search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n  padding-left: 1rem;\r\n  background-color: transparent;\r\n}\r\n\r\n.navbar-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  width: 270px;\r\n  background-color: transparent;\r\n}\r\n\r\n.navbar-search-dark[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, .6);\r\n}\r\n\r\n.navbar-search-dark[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, .6);\r\n}\r\n\r\n.navbar-search-dark[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, .9);\r\n}\r\n\r\n.navbar-search-dark[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\r\n  color: rgba(255, 255, 255, .6);\r\n}\r\n\r\n.navbar-search-dark[_ngcontent-%COMP%]   .focused[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n  border-color: rgba(255, 255, 255, .9);\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    pointer-events: none;\r\n    opacity: 0;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu-arrow[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    z-index: -5;\r\n    bottom: 100%;\r\n    left: 20px;\r\n    display: block;\r\n    width: 12px;\r\n    height: 12px;\r\n    content: '';\r\n    transform: rotate(-45deg) translateY(12px);\r\n    border-radius: 2px;\r\n    background: #fff;\r\n    box-shadow: none;\r\n  }\r\n\r\n  .navbar[_ngcontent-%COMP%]   .dropdown-menu-right[_ngcontent-%COMP%]:before {\r\n    right: 20px;\r\n    left: auto;\r\n  }\r\n\r\n  @keyframes show-navbar-dropdown {\r\n    0% {\r\n      transition: visibility .25s, opacity .25s, transform .25s;\r\n      transform: translate(0, 10px) perspective(200px) rotateX(-2deg);\r\n      opacity: 0;\r\n    }\r\n\r\n    100% {\r\n      transform: translate(0, 0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  @keyframes hide-navbar-dropdown {\r\n    from {\r\n      opacity: 1;\r\n    }\r\n\r\n    to {\r\n      transform: translate(0, 10px);\r\n      opacity: 0;\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 767.98px) {\r\n  .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    padding: .625rem 0;\r\n    color: #172b4d !important;\r\n  }\r\n\r\n  .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n    min-width: auto;\r\n    box-shadow: none;\r\n  }\r\n}\r\n\r\n@keyframes show-navbar-collapse {\r\n  0% {\r\n    transform: scale(.95);\r\n    transform-origin: 100% 0;\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes hide-navbar-collapse {\r\n  from {\r\n    transform: scale(1);\r\n    transform-origin: 100% 0;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    transform: scale(.95);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.progress[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  height: 8px;\r\n  margin-bottom: 1rem;\r\n  border-radius: .25rem;\r\n  background-color: #e9ecef;\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  font-weight: 300;\r\n  line-height: 1.7;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n  font-size: .875rem;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n  font-size: .95rem;\r\n  font-weight: 600;\r\n  letter-spacing: .025em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.heading-small[_ngcontent-%COMP%] {\r\n  font-size: .75rem;\r\n  padding-top: .25rem;\r\n  padding-bottom: .25rem;\r\n  letter-spacing: .04em;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.display-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n  display: block;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .btn[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n\r\n#navbar[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsK0NBQStDO0VBQy9DLDZHQUE2RztBQUMvRzs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw2Q0FBNkM7QUFDL0M7O0FBTUE7Ozs7OztFQU1FLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7Ozs7O0VBS0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUdBQWlHO0VBQ2pHLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBDQUEwQztBQUM1Qzs7QUFFQTs7O0VBR0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7OztFQUlFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTs7OztFQUlFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7Ozs7Ozs7O0VBVUUsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7Ozs7Ozs7Ozs7OztFQVlFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxjQUFjO0lBQ2QsYUFBYTtFQUNmOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsUUFBUTtFQUNWO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLHVEQUF1RDtFQUN2RCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztFQUNkLHFDQUFxQztFQUNyQyxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFZQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUd6QixpQkFBaUI7RUFDakIsaUlBQWlJO0VBQ2pJLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLCtFQUErRTtBQUNqRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHlFQUF5RTtBQUMzRTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUdBQXlHO0FBQzNHOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHlFQUF5RTtBQUMzRTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUdBQXlHO0FBQzNHOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHlFQUF5RTtBQUMzRTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUdBQXVHO0FBQ3pHOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsOEdBQThHO0FBQ2hIOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7Ozs7RUFJRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7Ozs7RUFJRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBOztFQUVFLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7O0FBRUE7Ozs7RUFJRSx5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUU7O0lBRUUsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7O0lBRUUsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7O0VBRUUsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QiwyQ0FBMkM7RUFDM0Msc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7Ozs7RUFJRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7Ozs7RUFJRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7Ozs7RUFJRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRTtJQUNFLHlDQUF5QztFQUMzQztBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLDBEQUEwRDtBQUM1RDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7O0VBRUUsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRTs7O0lBR0UsMkJBQTJCO0lBQzNCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTs7SUFFRSxVQUFVO0lBQ1YsU0FBUztFQUNYOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTs7OztFQUlFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHNFQUFzRTtBQUN4RTs7QUFFQTtFQUNFLHNFQUFzRTtBQUN4RTs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7SUFDOUIsNkJBQTZCO0VBQy9CO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQVVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsdUVBQXVFO0FBQ3pFOztBQUVBO0VBQ0UseUVBQXlFO0FBQzNFOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFNBQVM7RUFDVCx1RUFBdUU7QUFDekU7O0FBRUE7O0VBRUUsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9GQUFvRjtBQUN0Rjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFNBQVM7RUFDVCx1RUFBdUU7QUFDekU7O0FBRUE7O0VBRUUsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9GQUFvRjtBQUN0Rjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFVQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFO0lBQ0UsU0FBUztJQUNULG9CQUFvQjtJQUNwQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRTtNQUNFLHlEQUF5RDtNQUN6RCwrREFBK0Q7TUFDL0QsVUFBVTtJQUNaOztJQUVBO01BQ0UsMEJBQTBCO01BQzFCLFVBQVU7SUFDWjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7O0lBRUE7TUFDRSw2QkFBNkI7TUFDN0IsVUFBVTtJQUNaO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoidXNlci1wcm9maWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtaGVhZGVyIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y2Y2Q0Y2ZmLCByZ2IoMjQ3LCAyNDEsIDIyMykpO1xyXG59XHJcblxyXG4uYmFyLXRleHR7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59XHJcblxyXG4uZWRpdC1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDE2NywgMTY3KTtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC0tYmx1ZTogIzVlNzJlNDtcclxuICAtLWluZGlnbzogIzU2MDNhZDtcclxuICAtLXB1cnBsZTogIzg5NjVlMDtcclxuICAtLXBpbms6ICNmM2E0YjU7XHJcbiAgLS1yZWQ6ICNmNTM2NWM7XHJcbiAgLS1vcmFuZ2U6ICNmYjYzNDA7XHJcbiAgLS15ZWxsb3c6ICNmZmQ2MDA7XHJcbiAgLS1ncmVlbjogIzJkY2U4OTtcclxuICAtLXRlYWw6ICMxMWNkZWY7XHJcbiAgLS1jeWFuOiAjMmJmZmM2O1xyXG4gIC0td2hpdGU6ICNmZmY7XHJcbiAgLS1ncmF5OiAjODg5OGFhO1xyXG4gIC0tZ3JheS1kYXJrOiAjMzIzMjVkO1xyXG4gIC0tbGlnaHQ6ICNjZWQ0ZGE7XHJcbiAgLS1saWdodGVyOiAjZTllY2VmO1xyXG4gIC0tcHJpbWFyeTogIzVlNzJlNDtcclxuICAtLXNlY29uZGFyeTogI2Y3ZmFmYztcclxuICAtLXN1Y2Nlc3M6ICMyZGNlODk7XHJcbiAgLS1pbmZvOiAjMTFjZGVmO1xyXG4gIC0td2FybmluZzogI2ZiNjM0MDtcclxuICAtLWRhbmdlcjogI2Y1MzY1YztcclxuICAtLWxpZ2h0OiAjYWRiNWJkO1xyXG4gIC0tZGFyazogIzIxMjUyOTtcclxuICAtLWRlZmF1bHQ6ICMxNzJiNGQ7XHJcbiAgLS13aGl0ZTogI2ZmZjtcclxuICAtLW5ldXRyYWw6ICNmZmY7XHJcbiAgLS1kYXJrZXI6IGJsYWNrO1xyXG4gIC0tYnJlYWtwb2ludC14czogMDtcclxuICAtLWJyZWFrcG9pbnQtc206IDU3NnB4O1xyXG4gIC0tYnJlYWtwb2ludC1tZDogNzY4cHg7XHJcbiAgLS1icmVha3BvaW50LWxnOiA5OTJweDtcclxuICAtLWJyZWFrcG9pbnQteGw6IDEyMDBweDtcclxuICAtLWZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcclxuICAtLWZvbnQtZmFtaWx5LW1vbm9zcGFjZTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sIHtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGxiYXI7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG59XHJcblxyXG5ALW1zLXZpZXdwb3J0IHtcclxuICB3aWR0aDogZGV2aWNlLXdpZHRoO1xyXG59XHJcblxyXG5maWdjYXB0aW9uLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxubWFpbixcclxubmF2LFxyXG5zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjNTI1ZjdmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmU7XHJcbn1cclxuXHJcblt0YWJpbmRleD0nLTEnXTpmb2N1cyB7XHJcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ociB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG5oMSxcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuYWRkcmVzcyB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbnVsIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbnVsIHVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5kZm4ge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuc3Ryb25nIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICM1ZTcyZTQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMjMzZGQyO1xyXG59XHJcblxyXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTpob3ZlcixcclxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6Zm9jdXMge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbmNvZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmNhcHRpb24ge1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIGNhcHRpb24tc2lkZTogYm90dG9tO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICM4ODk4YWE7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiAxcHggZG90dGVkO1xyXG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcclxufVxyXG5cclxuaW5wdXQsXHJcbmJ1dHRvbixcclxudGV4dGFyZWEge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG5idXR0b24sXHJcbmh0bWwgW3R5cGU9J2J1dHRvbiddLFxyXG5bdHlwZT0ncmVzZXQnXSxcclxuW3R5cGU9J3N1Ym1pdCddIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxufVxyXG5cclxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXHJcblt0eXBlPSdyZXNldCddOjotbW96LWZvY3VzLWlubmVyLFxyXG5bdHlwZT0nc3VibWl0J106Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdyYWRpbyddLFxyXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J2RhdGUnXSxcclxuaW5wdXRbdHlwZT0ndGltZSddLFxyXG5pbnB1dFt0eXBlPSdkYXRldGltZS1sb2NhbCddLFxyXG5pbnB1dFt0eXBlPSdtb250aCddIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGxpc3Rib3g7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5sZWdlbmQge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbnByb2dyZXNzIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuW3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblt0eXBlPSdzZWFyY2gnXSB7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXHJcblt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG59XHJcblxyXG5baGlkZGVuXSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oMSxcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYsXHJcbi5oMSxcclxuLmgzLFxyXG4uaDQsXHJcbi5oNSxcclxuLmg2IHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgY29sb3I6ICMzMjMyNWQ7XHJcbn1cclxuXHJcbmgxLFxyXG4uaDEge1xyXG4gIGZvbnQtc2l6ZTogMS42MjVyZW07XHJcbn1cclxuXHJcbmgzLFxyXG4uaDMge1xyXG4gIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xyXG59XHJcblxyXG5oNCxcclxuLmg0IHtcclxuICBmb250LXNpemU6IC45Mzc1cmVtO1xyXG59XHJcblxyXG5oNSxcclxuLmg1IHtcclxuICBmb250LXNpemU6IC44MTI1cmVtO1xyXG59XHJcblxyXG5oNixcclxuLmg2IHtcclxuICBmb250LXNpemU6IC42MjVyZW07XHJcbn1cclxuXHJcbi5kaXNwbGF5LTIge1xyXG4gIGZvbnQtc2l6ZTogMi43NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbmhyIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcclxufVxyXG5cclxuY29kZSB7XHJcbiAgZm9udC1zaXplOiA4Ny41JTtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGNvbG9yOiAjZjNhNGI1O1xyXG59XHJcblxyXG5hPmNvZGUge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA3MjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTE0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNvbC00LFxyXG4uY29sLTgsXHJcbi5jb2wsXHJcbi5jb2wtbWQtMTAsXHJcbi5jb2wtbWQtMTIsXHJcbi5jb2wtbGctMyxcclxuLmNvbC1sZy00LFxyXG4uY29sLWxnLTYsXHJcbi5jb2wtbGctNyxcclxuLmNvbC14bC00LFxyXG4uY29sLXhsLTYsXHJcbi5jb2wteGwtOCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDFweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uY29sLTQge1xyXG4gIG1heC13aWR0aDogMzMuMzMzMzMlO1xyXG4gIGZsZXg6IDAgMCAzMy4zMzMzMyU7XHJcbn1cclxuXHJcbi5jb2wtOCB7XHJcbiAgbWF4LXdpZHRoOiA2Ni42NjY2NyU7XHJcbiAgZmxleDogMCAwIDY2LjY2NjY3JTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gIC5jb2wtbWQtMTAge1xyXG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMyU7XHJcbiAgICBmbGV4OiAwIDAgODMuMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tZC0xMiB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4OiAwIDAgMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG5cclxuICAuY29sLWxnLTMge1xyXG4gICAgbWF4LXdpZHRoOiAyNSU7XHJcbiAgICBmbGV4OiAwIDAgMjUlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1sZy00IHtcclxuICAgIG1heC13aWR0aDogMzMuMzMzMzMlO1xyXG4gICAgZmxleDogMCAwIDMzLjMzMzMzJTtcclxuICB9XHJcblxyXG4gIC5jb2wtbGctNiB7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLWxnLTcge1xyXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMyU7XHJcbiAgICBmbGV4OiAwIDAgNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLWxnLTIge1xyXG4gICAgb3JkZXI6IDI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcblxyXG4gIC5jb2wteGwtNCB7XHJcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzJTtcclxuICAgIGZsZXg6IDAgMCAzMy4zMzMzMyU7XHJcbiAgfVxyXG5cclxuICAuY29sLXhsLTYge1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICBmbGV4OiAwIDAgNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC14bC04IHtcclxuICAgIG1heC13aWR0aDogNjYuNjY2NjclO1xyXG4gICAgZmxleDogMCAwIDY2LjY2NjY3JTtcclxuICB9XHJcblxyXG4gIC5vcmRlci14bC0xIHtcclxuICAgIG9yZGVyOiAxO1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLXhsLTIge1xyXG4gICAgb3JkZXI6IDI7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGNhbGMoMi43NXJlbSArIDJweCk7XHJcbiAgcGFkZGluZzogLjYyNXJlbSAuNzVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBjdWJpYy1iZXppZXIoLjY4LCAtLjU1LCAuMjY1LCAxLjU1KTtcclxuICBjb2xvcjogIzg4OThhYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FkMWQ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjotbXMtZXhwYW5kIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGNvbG9yOiAjODg5OGFhO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MCwgMTUxLCAyMTEsIC4yNSk7XHJcbiAgb3V0bGluZTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IG5vbmUsIG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiAjYWRiNWJkO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgY29sb3I6ICNhZGI1YmQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiAjYWRiNWJkO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmRpc2FibGVkLFxyXG4uZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG59XHJcblxyXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmZvcm0taW5saW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLmZvcm0taW5saW5lIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0taW5saW5lIC5mb3JtLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5mb3JtLWlubGluZSAuZm9ybS1jb250cm9sIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAuNjI1cmVtIDEuMjVyZW07XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAuMzc1cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcbiAgLmJ0biB7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bjpob3ZlcixcclxuLmJ0bjpmb2N1cyB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYnRuOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgN3B4IDE0cHggcmdiYSg1MCwgNTAsIDkzLCAuMSksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIC4wOCk7XHJcbn1cclxuXHJcbi5idG46ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IC42NTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYnRuOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG46bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYnRuOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMCA3cHggMTRweCByZ2JhKDUwLCA1MCwgOTMsIC4xKSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgLjA4KSwgbm9uZTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICM1ZTcyZTQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNzJlNDtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAuMTEpLCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAuMDgpO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzVlNzJlNDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU3MmU0O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4wOCksIDAgMCAwIDAgcmdiYSg5NCwgMTE0LCAyMjgsIC41KTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICM1ZTcyZTQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNzJlNDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNWU3MmU0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjRjZGQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUsIDAgMCAwIDAgcmdiYSg5NCwgMTE0LCAyMjgsIC41KTtcclxufVxyXG5cclxuLmJ0bi1pbmZvIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICMxMWNkZWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExY2RlZjtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAuMTEpLCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAuMDgpO1xyXG59XHJcblxyXG4uYnRuLWluZm86aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzExY2RlZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTFjZGVmO1xyXG59XHJcblxyXG4uYnRuLWluZm86Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4wOCksIDAgMCAwIDAgcmdiYSgxNywgMjA1LCAyMzksIC41KTtcclxufVxyXG5cclxuLmJ0bi1pbmZvOmRpc2FibGVkIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICMxMWNkZWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExY2RlZjtcclxufVxyXG5cclxuLmJ0bi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTFjZGVmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZGE1YzA7XHJcbn1cclxuXHJcbi5idG4taW5mbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUsIDAgMCAwIDAgcmdiYSgxNywgMjA1LCAyMzksIC41KTtcclxufVxyXG5cclxuLmJ0bi1kZWZhdWx0IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICMxNzJiNGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MmI0ZDtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAuMTEpLCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAuMDgpO1xyXG59XHJcblxyXG4uYnRuLWRlZmF1bHQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzE3MmI0ZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcyYjRkO1xyXG59XHJcblxyXG4uYnRuLWRlZmF1bHQ6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4wOCksIDAgMCAwIDAgcmdiYSgyMywgNDMsIDc3LCAuNSk7XHJcbn1cclxuXHJcbi5idG4tZGVmYXVsdDpkaXNhYmxlZCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTcyYjRkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzJiNGQ7XHJcbn1cclxuXHJcbi5idG4tZGVmYXVsdDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzE3MmI0ZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIxNTI2O1xyXG59XHJcblxyXG4uYnRuLWRlZmF1bHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBub25lLCAwIDAgMCAwIHJnYmEoMjMsIDQzLCA3NywgLjUpO1xyXG59XHJcblxyXG4uYnRuLXNtIHtcclxuICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtaW4td2lkdGg6IDEwcmVtO1xyXG4gIG1hcmdpbjogLjEyNXJlbSAwIDA7XHJcbiAgcGFkZGluZzogLjVyZW0gMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICM1MjVmN2Y7XHJcbiAgYm9yZGVyOiAwIHNvbGlkIHJnYmEoMCwgMCwgMCwgLjE1KTtcclxuICBib3JkZXItcmFkaXVzOiAuNDM3NXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgYm94LXNoYWRvdzogMCA1MHB4IDEwMHB4IHJnYmEoNTAsIDUwLCA5MywgLjEpLCAwIDE1cHggMzVweCByZ2JhKDUwLCA1MCwgOTMsIC4xNSksIDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAuMSk7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LnNob3cge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LXJpZ2h0IHtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudVt4LXBsYWNlbWVudF49J3RvcCddLFxyXG4uZHJvcGRvd24tbWVudVt4LXBsYWNlbWVudF49J3JpZ2h0J10sXHJcbi5kcm9wZG93bi1tZW51W3gtcGxhY2VtZW50Xj0nYm90dG9tJ10sXHJcbi5kcm9wZG93bi1tZW51W3gtcGxhY2VtZW50Xj0nbGVmdCddIHtcclxuICByaWdodDogYXV0bztcclxuICBib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5kcm9wZG93bi1kaXZpZGVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMDtcclxuICBtYXJnaW46IC41cmVtIDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IC4yNXJlbSAxLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXIsXHJcbi5kcm9wZG93bi1pdGVtOmZvY3VzIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMxNjE4MWI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjlmYztcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlNzJlNDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06ZGlzYWJsZWQge1xyXG4gIGNvbG9yOiAjODg5OGFhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZHJvcGRvd24taGVhZGVyIHtcclxuICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjb2xvcjogIzg4OThhYTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cD4uZm9ybS1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDElO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cD4uZm9ybS1jb250cm9sKy5mb3JtLWNvbnRyb2wge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXA+LmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgei1pbmRleDogMztcclxufVxyXG5cclxuLmlucHV0LWdyb3VwPi5mb3JtLWNvbnRyb2w6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cD4uZm9ybS1jb250cm9sOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCAuYnRuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXByZXBlbmQgLmJ0bisuYnRuLFxyXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCAuYnRuKy5pbnB1dC1ncm91cC10ZXh0LFxyXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCsuaW5wdXQtZ3JvdXAtdGV4dCxcclxuLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQrLmJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kIHtcclxuICBtYXJnaW4tcmlnaHQ6IC0xcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAuNjI1cmVtIC43NXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjb2xvcjogI2FkYjViZDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FkMWQ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dCBpbnB1dFt0eXBlPSdyYWRpbyddLFxyXG4uaW5wdXQtZ3JvdXAtdGV4dCBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXA+LmlucHV0LWdyb3VwLXByZXBlbmQ+LmJ0bixcclxuLmlucHV0LWdyb3VwPi5pbnB1dC1ncm91cC1wcmVwZW5kPi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwPi5pbnB1dC1ncm91cC1wcmVwZW5kOm5vdCg6Zmlyc3QtY2hpbGQpPi5idG4sXHJcbi5pbnB1dC1ncm91cD4uaW5wdXQtZ3JvdXAtcHJlcGVuZDpub3QoOmZpcnN0LWNoaWxkKT4uaW5wdXQtZ3JvdXAtdGV4dCxcclxuLmlucHV0LWdyb3VwPi5pbnB1dC1ncm91cC1wcmVwZW5kOmZpcnN0LWNoaWxkPi5idG46bm90KDpmaXJzdC1jaGlsZCksXHJcbi5pbnB1dC1ncm91cD4uaW5wdXQtZ3JvdXAtcHJlcGVuZDpmaXJzdC1jaGlsZD4uaW5wdXQtZ3JvdXAtdGV4dDpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IC4yNXJlbSAuNzVyZW07XHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlcixcclxuLm5hdi1saW5rOmZvY3VzIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5uYXZiYXI+LmNvbnRhaW5lcixcclxuLm5hdmJhcj4uY29udGFpbmVyLWZsdWlkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm5hdmJhci1uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxuICBmbG9hdDogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcblxyXG4gIC5uYXZiYXItZXhwYW5kLW1kPi5jb250YWluZXIsXHJcbiAgLm5hdmJhci1leHBhbmQtbWQ+LmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdmJhci1leHBhbmQtbWQge1xyXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcblxyXG4gIC5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1leHBhbmQtbWQ+LmNvbnRhaW5lcixcclxuICAubmF2YmFyLWV4cGFuZC1tZD4uY29udGFpbmVyLWZsdWlkIHtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIH1cclxufVxyXG5cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjk1KTtcclxufVxyXG5cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlcixcclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluazpmb2N1cyB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjY1KTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogLjM3NXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNhcmQ+aHIge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoLjM3NXJlbSAtIDFweCkgY2FsYyguMzc1cmVtIC0gMXB4KSAwIDA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtYmFyLXN0cmlwZXMge1xyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMXJlbSAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG4gIH1cclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICBmb250LXNpemU6IC43NXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIC4xcmVtIC4xcmVtIHJnYmEoMCwgMCwgMCwgLjEpO1xyXG59XHJcblxyXG4ubWVkaWEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5tZWRpYS1ib2R5IHtcclxuICBmbGV4OiAxIDE7XHJcbn1cclxuXHJcbi5iZy1zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2ZhZmMgIWltcG9ydGFudDtcclxufVxyXG5cclxuYS5iZy1zZWNvbmRhcnk6aG92ZXIsXHJcbmEuYmctc2Vjb25kYXJ5OmZvY3VzLFxyXG5idXR0b24uYmctc2Vjb25kYXJ5OmhvdmVyLFxyXG5idXR0b24uYmctc2Vjb25kYXJ5OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJlM2VlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1kZWZhdWx0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcyYjRkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEuYmctZGVmYXVsdDpob3ZlcixcclxuYS5iZy1kZWZhdWx0OmZvY3VzLFxyXG5idXR0b24uYmctZGVmYXVsdDpob3ZlcixcclxuYnV0dG9uLmJnLWRlZmF1bHQ6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjE1MjYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEuYmctd2hpdGU6aG92ZXIsXHJcbmEuYmctd2hpdGU6Zm9jdXMsXHJcbmJ1dHRvbi5iZy13aGl0ZTpob3ZlcixcclxuYnV0dG9uLmJnLXdoaXRlOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyLTAge1xyXG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm91bmRlZC1jaXJjbGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmNThmOGZmZjtcclxufVxyXG5cclxuLmQtbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZC1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAuZC1tZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG5cclxuICAuZC1sZy1pbmxpbmUtYmxvY2sge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZC1sZy1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG5cclxuICAuanVzdGlmeS1jb250ZW50LXhsLWJldHdlZW4ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZmxvYXQtcmlnaHQge1xyXG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2hhZG93LFxyXG4uY2FyZC1wcm9maWxlLWltYWdlIGltZyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gMCByZ2JhKDEzNiwgMTUyLCAxNzAsIC4xNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm0tMCB7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdC0wIHtcclxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYi0wIHtcclxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tci0yIHtcclxuICBtYXJnaW4tcmlnaHQ6IC41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tbC0yIHtcclxuICBtYXJnaW4tbGVmdDogLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1yLTMge1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtNCxcclxuLm15LTQge1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXItNCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1iLTQsXHJcbi5teS00IHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1iLTUge1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm10LS03IHtcclxuICBtYXJnaW4tdG9wOiAtNnJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtMCB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByLTAge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBiLTAge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdC01IHtcclxuICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHQtOCB7XHJcbiAgcGFkZGluZy10b3A6IDhyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBiLTgge1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLWF1dG8ge1xyXG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgLm10LW1kLTUge1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnB0LW1kLTQge1xyXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnBiLW1kLTQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcblxyXG4gIC5wbC1sZy00IHtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucHQtbGctOCB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1sLWxnLWF1dG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbiAgLm1iLXhsLTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXVwcGVyY2FzZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9udC13ZWlnaHQtbGlnaHQge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvbnQtd2VpZ2h0LWJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtd2hpdGUge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXdoaXRlIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hLnRleHQtd2hpdGU6aG92ZXIsXHJcbmEudGV4dC13aGl0ZTpmb2N1cyB7XHJcbiAgY29sb3I6ICNlNmU2ZTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtbXV0ZWQge1xyXG4gIGNvbG9yOiAjODg5OGFhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcblxyXG4gICosXHJcbiAgKjo6YmVmb3JlLFxyXG4gICo6OmFmdGVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBhOm5vdCguYnRuKSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgfVxyXG5cclxuICBwLFxyXG4gIGgzIHtcclxuICAgIG9ycGhhbnM6IDM7XHJcbiAgICB3aWRvd3M6IDM7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcclxuICB9XHJcblxyXG4gIEBwYWdlIHtcclxuICAgIHNpemU6IGEzO1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBtaW4td2lkdGg6IDk5MnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIG1pbi13aWR0aDogOTkycHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbmZpZ2NhcHRpb24sXHJcbm1haW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYmctd2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuYS5iZy13aGl0ZTpob3ZlcixcclxuYS5iZy13aGl0ZTpmb2N1cyxcclxuYnV0dG9uLmJnLXdoaXRlOmhvdmVyLFxyXG5idXR0b24uYmctd2hpdGU6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWdyYWRpZW50LWRlZmF1bHQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4N2RlZywgIzE3MmI0ZCAwLCAjMWExNzRkIDEwMCUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1ncmFkaWVudC1kZWZhdWx0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODdkZWcsICMxNzJiNGQgMCwgIzFhMTc0ZCAxMDAlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsb2F0aW5nLWxnIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbG9hdGluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxvYXRpbmctc20ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5vcGFjaXR5LTgge1xyXG4gIG9wYWNpdHk6IC44ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vcGFjaXR5LTgge1xyXG4gIG9wYWNpdHk6IC45ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbltjbGFzcyo9J3NoYWRvdyddIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlO1xyXG59XHJcblxyXG4uZm9udC13ZWlnaHQtMzAwIHtcclxuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXNtIHtcclxuICBmb250LXNpemU6IC44NzVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtd2hpdGUge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEudGV4dC13aGl0ZTpob3ZlcixcclxuYS50ZXh0LXdoaXRlOmZvY3VzIHtcclxuICBjb2xvcjogI2U2ZTZlNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdmF0YXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5hdmF0YXItc20ge1xyXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZTtcclxuICBsZXR0ZXItc3BhY2luZzogLjAyNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBib3gtc2hhZG93OiAwIDdweCAxNHB4IHJnYmEoNTAsIDUwLCA5MywgLjEpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAuMDgpO1xyXG59XHJcblxyXG4uYnRuOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbn1cclxuXHJcbi5idG4gaTpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG59XHJcblxyXG4uYnRuIGk6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIC5idG4ge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuXHJcbi5idG4tc20ge1xyXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG59XHJcblxyXG5bY2xhc3MqPSdidG4tb3V0bGluZS0nXSB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbi5jYXJkLXByb2ZpbGUtaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQtcHJvZmlsZS1pbWFnZSBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWF4LXdpZHRoOiAxODBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXByb2ZpbGUtaW1hZ2UgaW1nOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzMlKTtcclxufVxyXG5cclxuLmNhcmQtcHJvZmlsZS1zdGF0cyB7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG59XHJcblxyXG4uY2FyZC1wcm9maWxlLXN0YXRzPmRpdiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIHBhZGRpbmc6IC44NzVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1wcm9maWxlLXN0YXRzPmRpdjpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jYXJkLXByb2ZpbGUtc3RhdHM+ZGl2IC5oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNhcmQtcHJvZmlsZS1zdGF0cz5kaXYgLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgY29sb3I6ICNmNThmOGZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IC5uYXZiYXItdG9wIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5tYWluLWNvbnRlbnQgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM5cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgbWluLXdpZHRoOiAxMnJlbTtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbT5pIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiAtMTclO1xyXG59XHJcblxyXG4uZHJvcGRvd24taGVhZGVyIHtcclxuICBmb250LXNpemU6IC42MjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjZjZmOWZjO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSBhLm1lZGlhPmRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IGEubWVkaWEgcCB7XHJcbiAgY29sb3I6ICM4ODk4YWE7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IGEubWVkaWE6aG92ZXIgLmhlYWRpbmcsXHJcbi5kcm9wZG93bi1tZW51IGEubWVkaWE6aG92ZXIgcCB7XHJcbiAgY29sb3I6ICMxNzJiNGQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgcGFkZGluZzogMi41cmVtIDA7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZmFmYztcclxufVxyXG5cclxuLmZvb3RlciAubmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjODg5OGFhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290ZXIgLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcclxuICBjb2xvcjogIzUyNWY3ZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9vdGVyIC5jb3B5cmlnaHQge1xyXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAuODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM1MjVmN2Y7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYWRiNWJkO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYWRiNWJkO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNhZGI1YmQ7XHJcbn1cclxuXHJcbnRleHRhcmVhW3Jlc2l6ZT0nbm9uZSddIHtcclxuICByZXNpemU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxudGV4dGFyZWFbcmVzaXplPSdib3RoJ10ge1xyXG4gIHJlc2l6ZTogYm90aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZXh0YXJlYVtyZXNpemU9J3ZlcnRpY2FsJ10ge1xyXG4gIHJlc2l6ZTogdmVydGljYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxudGV4dGFyZWFbcmVzaXplPSdob3Jpem9udGFsJ10ge1xyXG4gIHJlc2l6ZTogaG9yaXpvbnRhbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWFsdGVybmF0aXZlIHtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4xNXMgZWFzZTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoNTAsIDUwLCA5MywgLjE1KSwgMCAxcHggMCByZ2JhKDAsIDAsIDAsIC4wMik7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtYWx0ZXJuYXRpdmU6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIC4xMSksIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4wOCk7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZTtcclxuICBib3JkZXItcmFkaXVzOiAuMzc1cmVtO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAwO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGN1YmljLWJlemllciguNjgsIC0uNTUsIC4yNjUsIDEuNTUpO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmUge1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjE1cyBlYXNlO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSg1MCwgNTAsIDkzLCAuMTUpLCAwIDFweCAwIHJnYmEoMCwgMCwgMCwgLjAyKTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLWFsdGVybmF0aXZlIC5mb3JtLWNvbnRyb2wsXHJcbi5pbnB1dC1ncm91cC1hbHRlcm5hdGl2ZSAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5mb2N1c2VkIC5pbnB1dC1ncm91cC1hbHRlcm5hdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoNTAsIDUwLCA5MywgLjExKSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgLjA4KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9jdXNlZCAuaW5wdXQtZ3JvdXAge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5mb2N1c2VkIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBjb2xvcjogIzg4OThhYTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoNTAsIDE1MSwgMjExLCAuMjUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mb2N1c2VkIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MCwgMTUxLCAyMTEsIC4yNSk7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4zNzVyZW07XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgY3ViaWMtYmV6aWVyKC42OCwgLS41NSwgLjI2NSwgMS41NSk7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1hbHRlcm5hdGl2ZSB7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMTVzIGVhc2U7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDUwLCA1MCwgOTMsIC4xNSksIDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAuMDIpO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmUgLmZvcm0tY29udHJvbCxcclxuLmlucHV0LWdyb3VwLWFsdGVybmF0aXZlIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmZvY3VzZWQgLmlucHV0LWdyb3VwLWFsdGVybmF0aXZlIHtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAuMTEpLCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAuMDgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb2N1c2VkIC5pbnB1dC1ncm91cCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmZvY3VzZWQgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIGNvbG9yOiAjODg5OGFhO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MCwgMTUxLCAyMTEsIC4yNSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmZvY3VzZWQgLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUwLCAxNTEsIDIxMSwgLjI1KTtcclxufVxyXG5cclxuLm1hc2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gIC5tYXNrIHtcclxuICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjNTI1ZjdmO1xyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiAjNWU3MmU0O1xyXG59XHJcblxyXG4ubmF2LWxpbmsgaS5uaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMnB4O1xyXG59XHJcblxyXG4ubmF2YmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItc2VhcmNoIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubmF2YmFyLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogMjcwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItc2VhcmNoLWRhcmsgLmlucHV0LWdyb3VwIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xyXG59XHJcblxyXG4ubmF2YmFyLXNlYXJjaC1kYXJrIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XHJcbn1cclxuXHJcbi5uYXZiYXItc2VhcmNoLWRhcmsgLmZvcm0tY29udHJvbCB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpO1xyXG59XHJcblxyXG4ubmF2YmFyLXNlYXJjaC1kYXJrIC5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XHJcbn1cclxuXHJcbi5uYXZiYXItc2VhcmNoLWRhcmsgLmZvcm0tY29udHJvbDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XHJcbn1cclxuXHJcbi5uYXZiYXItc2VhcmNoLWRhcmsgLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcclxufVxyXG5cclxuLm5hdmJhci1zZWFyY2gtZGFyayAuZm9jdXNlZCAuaW5wdXQtZ3JvdXAge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOSk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXZiYXIgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudS1hcnJvdzpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTU7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKDEycHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIC5kcm9wZG93bi1tZW51LXJpZ2h0OmJlZm9yZSB7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHNob3ctbmF2YmFyLWRyb3Bkb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAuMjVzLCBvcGFjaXR5IC4yNXMsIHRyYW5zZm9ybSAuMjVzO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KSBwZXJzcGVjdGl2ZSgyMDBweCkgcm90YXRlWCgtMmRlZyk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBoaWRlLW5hdmJhci1kcm9wZG93biB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmc6IC42MjVyZW0gMDtcclxuICAgIGNvbG9yOiAjMTcyYjRkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaG93LW5hdmJhci1jb2xsYXBzZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGhpZGUtbmF2YmFyLWNvbGxhcHNlIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9ncmVzcyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4xKTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNztcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IC44NzVyZW07XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBmb250LXNpemU6IC45NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMDI1ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmhlYWRpbmctc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLjA0ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmRpc3BsYXktMiBzcGFuIHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuYnRuIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4jbmF2YmFyIC5uYXZiYXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0iXX0= */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"]], styles: [".page-text[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    font-size: 50px;\r\n    color: #f58f8fff;\r\n    font-weight: bold;\r\n    font-family: cursive;\r\n}\r\n\r\n.subtitle-text[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    font-size: 30px;\r\n    color: #f58f8fff;\r\n    font-weight: bold;\r\n    font-family: cursive;\r\n    margin-bottom:  20px;\r\n}\r\n\r\n.filter-btn[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f6cd4cff; \r\n    color: white;\r\n}\r\n\r\n.filter-label[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f6cd4cff; \r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.form-check-label[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n}\r\n\r\n.submit-btn[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f58f8fff; \r\n    border: 1px solid #f58f8fff;\r\n    color: white;\r\n}\r\n\r\n.submit-text[_ngcontent-%COMP%]{\r\n    font-family: cursive;\r\n    font-size: 30px;\r\n    color: #f58f8fff;\r\n    font-weight: bold;\r\n    padding-left: 20px;\r\n}\r\n\r\n.btn-block[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: rgb(238, 182, 182); \r\n    color: white;\r\n}\r\n\r\n.pic-row[_ngcontent-%COMP%] {\r\n    min-height: 400px;\r\n    text-align:center;\r\n    background-color: rgb(226, 222, 222);\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n}\r\n\r\n.pic-holder[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n}\r\n\r\n.submit-center[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0 auto;\r\n    width:200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3JlY2lwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxXQUFXO0FBQ2YiLCJmaWxlIjoibmV3cmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10ZXh0IHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6ICNmNThmOGZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZS10ZXh0IHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICNmNThmOGZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAgMjBweDtcclxufVxyXG5cclxuLmZpbHRlci1idG4ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjZDRjZmY7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmlsdGVyLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2Y2Q0Y2ZmOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmZvcm0tY2hlY2stbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OGY4ZmZmOyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNThmOGZmZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1Ym1pdC10ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogI2Y1OGY4ZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tYmxvY2t7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE4MiwgMTgyKTsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5waWMtcm93IHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMjIsIDIyMik7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5waWMtaG9sZGVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDoyMDBweDtcclxufSJdfQ== */"] });
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
        //private base_api:string = "http://localhost:8080/";
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
        console.log(url);
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










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
    constructor(mealplanService, route) {
        this.mealplanService = mealplanService;
        this.route = route;
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
    }
    getRecipesForCustomized() {
        var rxjsData = this.mealplanService.getRecipesByFilter(this.filter);
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
        var rxjsData = this.mealplanService.postNewMealplan(this.mealplan);
        rxjsData.subscribe((data) => {
            console.log(data);
            alert("Success!");
        });
    }
}
NewplanComponent.ɵfac = function NewplanComponent_Factory(t) { return new (t || NewplanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mealplan_service__WEBPACK_IMPORTED_MODULE_5__["MealplanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectMultipleControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"]], styles: [".page-text[_ngcontent-%COMP%]{\r\n    padding-top: 20px;\r\n    font-size: 50px;\r\n    color: #f58f8fff;\r\n    font-weight: bold;\r\n    font-family: cursive;\r\n}\r\n\r\n.filter-btn[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f6cd4cff; \r\n    color: white;\r\n}\r\n\r\n.filter-label[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f6cd4cff; \r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.form-check-label[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n}\r\n\r\n.submit-btn[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f58f8fff; \r\n    border: 1px solid #f58f8fff;\r\n    color: white;\r\n}\r\n\r\n.subtitle-text[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    font-size: 35px;\r\n    color: #f58f8fff;\r\n    font-weight: bold;\r\n    font-family: cursive;\r\n}\r\n\r\n.submit-text[_ngcontent-%COMP%]{\r\n    font-family: cursive;\r\n    font-size: 30px;\r\n    color: #f58f8fff;\r\n    font-weight: bold;\r\n    padding-left: 20px;\r\n}\r\n\r\n.lightning-deal-content[_ngcontent-%COMP%]   .product-list-item[_ngcontent-%COMP%]   .fancy-number-group[_ngcontent-%COMP%]   .btn-up[_ngcontent-%COMP%]::after, .product-swiper-list[_ngcontent-%COMP%]   .fancy-number-group.fancy-number-group-sm[_ngcontent-%COMP%]   .btn-up[_ngcontent-%COMP%]:before {\r\n    content: '\\f067';\r\n}\r\n\r\n.recipe-pic[_ngcontent-%COMP%] {\r\n    height: 220px;\r\n    width: 270px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.submit-center[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0 auto;\r\n    width:200px;\r\n}\r\n\r\n.readonly-input[_ngcontent-%COMP%]{\r\n    width:100px;\r\n    height: calc(1.5em + .75rem + 2px);\r\n    padding: .375rem .75rem;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid #ced4da;\r\n    border-radius: .25rem;\r\n}\r\n\r\n.btn-block[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: rgb(238, 182, 182); \r\n    color: white;\r\n}\r\n\r\n.count-btn[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    height: calc(1.5em + .75rem + 2px);\r\n    line-height: 1.5;\r\n    border-radius: .25rem;\r\n    background-color: #f58f8fff; \r\n    border: 1px solid #f58f8fff;\r\n    color: white;\r\n    width:50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3BsYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUNBO0lBQ0ksV0FBVztJQUNYLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFVBQVU7QUFDZCIsImZpbGUiOiJuZXdwbGFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10ZXh0e1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogI2Y1OGY4ZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG5cclxuLmZpbHRlci1idG4ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjZDRjZmY7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmlsdGVyLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2Y2Q0Y2ZmOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmZvcm0tY2hlY2stbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OGY4ZmZmOyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNThmOGZmZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1YnRpdGxlLXRleHQge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjb2xvcjogI2Y1OGY4ZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG5cclxuLnN1Ym1pdC10ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogI2Y1OGY4ZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5saWdodG5pbmctZGVhbC1jb250ZW50IC5wcm9kdWN0LWxpc3QtaXRlbSAuZmFuY3ktbnVtYmVyLWdyb3VwIC5idG4tdXA6OmFmdGVyLCAucHJvZHVjdC1zd2lwZXItbGlzdCAuZmFuY3ktbnVtYmVyLWdyb3VwLmZhbmN5LW51bWJlci1ncm91cC1zbSAuYnRuLXVwOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnXFxmMDY3JztcclxufVxyXG5cclxuLnJlY2lwZS1waWMge1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLnN1Ym1pdC1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOjIwMHB4O1xyXG59XHJcbi5yZWFkb25seS1pbnB1dHtcclxuICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG5cclxuLmJ0bi1ibG9ja3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMTgyLCAxODIpOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY291bnQtYnRue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNThmOGZmZjsgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjU4ZjhmZmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDo1MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewplanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newplan',
                templateUrl: './newplan.component.html',
                styleUrls: ['./newplan.component.css']
            }]
    }], function () { return [{ type: _services_mealplan_service__WEBPACK_IMPORTED_MODULE_5__["MealplanService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





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
    constructor(mealplan) {
        this.mealplan = mealplan;
        this.mealplans = [];
        this.mealplan.getAllMealPlansForUser()
            .subscribe((result) => {
            console.log(result);
            this.mealplans = result;
            console.log(this.mealplans);
        });
    }
    ngOnInit() { }
}
OldplanComponent.ɵfac = function OldplanComponent_Factory(t) { return new (t || OldplanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mealplan_service__WEBPACK_IMPORTED_MODULE_1__["MealplanService"])); };
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".tab[_ngcontent-%COMP%]{\r\n    color: #f58f8fff;\r\n    font-size: 30px;\r\n}\r\n\r\n.submit-btn[_ngcontent-%COMP%] {  \r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color:  #f6cd4cff; \r\n    color: white;\r\n    width: 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZHBsYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoib2xkcGxhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYntcclxuICAgIGNvbG9yOiAjZjU4ZjhmZmY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHsgIFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2Y2Y2Q0Y2ZmOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OldplanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-oldplan',
                templateUrl: './oldplan.component.html',
                styleUrls: ['./oldplan.component.css']
            }]
    }], function () { return [{ type: _services_mealplan_service__WEBPACK_IMPORTED_MODULE_1__["MealplanService"] }]; }, null); })();


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
/* harmony import */ var _share_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share-data.service */ "99Yc");






class MealplanService {
    constructor(http, shareDataService) {
        this.http = http;
        this.shareDataService = shareDataService;
        //hostUrl: string = 'http://localhost:8080/';
        this.hostUrl = '/';
    }
    getAllMealPlansForUser() {
        this.userId = this.shareDataService.getData('userid');
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.http.get(this.hostUrl + 'mealplan/' + this.userId).subscribe((res) => {
                observer.next(res);
            });
        });
    }
    getRecipesByFilter(filter) {
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
        this.userId = this.shareDataService.getData('userid');
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.http.get(this.hostUrl + 'mealplan/' + this.userId + '/customization/getrecipelist', { params: params }).subscribe((res) => {
                observer.next(res);
            });
        });
    }
    postNewMealplan(mealplan) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'content-Type': 'application/json' }) };
        console.log(mealplan);
        this.userId = this.shareDataService.getData('userid');
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.http.post(this.hostUrl + `mealplan/${this.userId}/customization/`, mealplan, httpOptions).subscribe((res) => {
                observer.next(res);
            });
        });
    }
    getRecipeListByMealplanID(mealplanId) {
        this.userId = this.shareDataService.getData('userid');
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.http.get(this.hostUrl + 'mealplan/' + this.userId + '/plans/' + mealplanId + '/recipelist').subscribe((res) => {
                observer.next(res);
            });
        });
    }
    getShoppingListByMealplanID(mealplanId) {
        this.userId = this.shareDataService.getData('userid');
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.http.get(this.hostUrl + 'mealplan/' + this.userId + '/plans/' + mealplanId + '/shoppinglist').subscribe((res) => {
                observer.next(res);
            });
        });
    }
}
MealplanService.ɵfac = function MealplanService_Factory(t) { return new (t || MealplanService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_share_data_service__WEBPACK_IMPORTED_MODULE_3__["ShareDataService"])); };
MealplanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MealplanService, factory: MealplanService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MealplanService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _share_data_service__WEBPACK_IMPORTED_MODULE_3__["ShareDataService"] }]; }, null); })();


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
    } }, styles: [".ad-pic[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxjQUFjO0FBQ2xCIiwiZmlsZSI6ImFkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkLXBpYyB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4iXX0= */"] });
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
    } }, directives: [_components_header_base_header_base_component__WEBPACK_IMPORTED_MODULE_1__["HeaderBaseComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".align-center[_ngcontent-%COMP%] {\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxpZ24tY2VudGVyIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
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
    } }, directives: [_ads_ads_component__WEBPACK_IMPORTED_MODULE_6__["AdsComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectMultipleControlValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownMenu"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"]], styles: [".picrow[_ngcontent-%COMP%] {\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n}\r\n\r\n.recipe-pic[_ngcontent-%COMP%] {\r\n    border-radius: 5%;\r\n    width: 100%;\r\n    height: 80%;\r\n}\r\n\r\n.filterbtn[_ngcontent-%COMP%] {\r\n    background-color: #f6cd4cff;\r\n    color: white;\r\n    width: 150px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n.recipe-name[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: rgb(228, 176, 6); \r\n}\r\n\r\n.filter-input[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    color: rgb(228, 176, 6); \r\n    border: 3px solid #f6cd4cff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InJlY2lwZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWNyb3cge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG5cclxuLnJlY2lwZS1waWMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcblxyXG4uZmlsdGVyYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmNkNGNmZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucmVjaXBlLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDIyOCwgMTc2LCA2KTsgXHJcbn1cclxuXHJcbi5maWx0ZXItaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHJnYigyMjgsIDE3NiwgNik7IFxyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Y2Y2Q0Y2ZmO1xyXG59Il19 */"] });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Create an Account");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
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
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], inputs: { auth: "auth" }, decls: 4, vars: 2, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css")], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")], ["id", "logout btn", 4, "ngIf"], ["id", "log in form", 4, "ngIf"], ["id", "logout btn"], [1, "col-12"], [1, "logout-form"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-block", 3, "click"], ["id", "log in form"], [1, "login-form"], [1, "text-center"], ["type", "text", "placeholder", "Username", "required", "required", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "required", "required", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["href", "#", 3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 7, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 16, 4, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".login-form[_ngcontent-%COMP%] {\r\n    width: 340px;\r\n    margin: 50px auto;\r\n}\r\n.login-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    background: #f7f7f7;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    padding: 30px;\r\n}\r\n.login-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 0 0 15px;\r\n}\r\n.form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\r\n    min-height: 38px;\r\n    border-radius: 2px;\r\n}\r\n.btn[_ngcontent-%COMP%] {        \r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    background-color:  #f58f8fff;\r\n    color: white;\r\n}\r\n.logout-form[_ngcontent-%COMP%] {\r\n    width: 340px;\r\n    margin: 50px auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtIHtcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG59XHJcbi5sb2dpbi1mb3JtIGZvcm0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbi5sb2dpbi1mb3JtIGgyIHtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbn1cclxuLmZvcm0tY29udHJvbCwgLmJ0biB7XHJcbiAgICBtaW4taGVpZ2h0OiAzOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbi5idG4geyAgICAgICAgXHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjZjU4ZjhmZmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sb2dvdXQtZm9ybSB7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG4iXX0= */"] });
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
        //hostUrl: string = 'http://localhost:8080/';
        this.hostUrl = '/';
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".recipe-pic[_ngcontent-%COMP%] {\r\n    height: 220px;\r\n    width: 270px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.recipe-name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: rgb(228, 176, 6)\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZHJlY2lwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQjtBQUNKIiwiZmlsZSI6Im9sZHJlY2lwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2lwZS1waWMge1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZWNpcGUtbmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDIyOCwgMTc2LCA2KVxyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





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
    constructor(recipeService, route) {
        this.recipeService = recipeService;
        this.route = route;
    }
    ngOnInit() {
        this.mealplanId = this.route.snapshot.params['mealplanId'];
        this.getShoppingList();
    }
    getShoppingList() {
        var rxjsData = this.recipeService.getShoppingListByMealplanID(this.mealplanId);
        rxjsData.subscribe((data) => {
            this.ingredient_list = (data.shopping_list);
        });
    }
}
ShoppinglistComponent.ɵfac = function ShoppinglistComponent_Factory(t) { return new (t || ShoppinglistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mealplan_service__WEBPACK_IMPORTED_MODULE_1__["MealplanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".page-text[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    font-size: 50px;\r\n    color: #f58f8fff;\r\n    font-weight: bold;\r\n    font-family: cursive;\r\n}\r\n\r\n.subtitle-text[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    font-size: 35px;\r\n    color: #f58f8fff;\r\n    font-weight: bold;\r\n    font-family: cursive;\r\n}\r\n\r\n.filter-btn[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f6cd4cff; \r\n    color: white;\r\n}\r\n\r\n.filter-label[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f6cd4cff; \r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.form-check-label[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n}\r\n\r\n.submit-btn[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f58f8fff; \r\n    border: 1px solid #f58f8fff;\r\n    color: white;\r\n}\r\n\r\n.submit-text[_ngcontent-%COMP%]{\r\n    font-family: cursive;\r\n    font-size: 30px;\r\n    color: #f58f8fff;\r\n    font-weight: bold;\r\n    padding-left: 20px;\r\n}\r\n\r\n.btn-block[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f58f8fff; \r\n    border: 1px solid #f58f8fff;\r\n    color: white;\r\n}\r\n\r\n.pic-row[_ngcontent-%COMP%] {\r\n    min-height: 400px;\r\n}\r\n\r\n.pic-bg[_ngcontent-%COMP%] {\r\n    background-color: rgb(226, 222, 222);\r\n}\r\n\r\n.pic-holder[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    \r\n}\r\n\r\n.submit-center[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0 auto;\r\n    width:200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLFdBQVc7QUFDZiIsImZpbGUiOiJzaG9wcGluZ2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRleHQge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogI2Y1OGY4ZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG5cclxuLnN1YnRpdGxlLXRleHQge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjb2xvcjogI2Y1OGY4ZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG5cclxuLmZpbHRlci1idG4ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjZDRjZmY7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmlsdGVyLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2Y2Q0Y2ZmOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmZvcm0tY2hlY2stbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OGY4ZmZmOyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNThmOGZmZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1Ym1pdC10ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogI2Y1OGY4ZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tYmxvY2t7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNThmOGZmZjsgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjU4ZjhmZmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5waWMtcm93IHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4ucGljLWJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIyMiwgMjIyKTtcclxufVxyXG5cclxuLnBpYy1ob2xkZXIge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG59XHJcblxyXG4uc3VibWl0LWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppinglistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shoppinglist',
                templateUrl: './shoppinglist.component.html',
                styleUrls: ['./shoppinglist.component.css']
            }]
    }], function () { return [{ type: _services_mealplan_service__WEBPACK_IMPORTED_MODULE_1__["MealplanService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ads_ads_component__WEBPACK_IMPORTED_MODULE_4__["AdsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".page-text[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    font-size: 50px;\r\n    color: #f58f8fff;\r\n    font-weight: bold;\r\n    font-family: cursive;\r\n}\r\n\r\n.username-text[_ngcontent-%COMP%] {\r\n    color:rgb(145, 148, 148);\r\n}\r\n\r\n.subtitle-text[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    font-size: 35px;\r\n    color: #f58f8fff;\r\n    font-weight: bold;\r\n    font-family: cursive;\r\n}\r\n\r\n.filter-btn[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f6cd4cff; \r\n    color: white;\r\n}\r\n\r\n.alert-label[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: rgb(226, 83, 83);\r\n    border: 2px dashed rgb(226, 83, 83);\r\n    border-radius: 5%;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    width: 80%;\r\n    text-align: center;\r\n}\r\n\r\n.filter-label[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f6cd4cff; \r\n    color: white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    width: 80%;\r\n    text-align: center;\r\n}\r\n\r\n.value-label[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #f6cd4cff; \r\n    border: 2px solid  #f6cd4cff; \r\n    border-radius: 5%;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    width: 80%;\r\n    text-align: center;\r\n}\r\n\r\n.form-check-label[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n}\r\n\r\n.submit-btn[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f58f8fff; \r\n    border: 1px solid #f58f8fff;\r\n    color: white;\r\n}\r\n\r\n.submit-text[_ngcontent-%COMP%]{\r\n    font-family: cursive;\r\n    font-size: 30px;\r\n    color: #f58f8fff;\r\n    font-weight: bold;\r\n    padding-left: 20px;\r\n}\r\n\r\n.btn-block[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    background-color: #f58f8fff; \r\n    border: 1px solid #f58f8fff;\r\n    color: white;\r\n}\r\n\r\n.marginauto[_ngcontent-%COMP%] {\r\n    margin: 10px auto 20px;\r\n    display: block;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n}\r\n\r\n.warning[_ngcontent-%COMP%] {\r\n    width: 94%;\r\n}\r\n\r\n.submit-center[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0 auto;\r\n    width:200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsV0FBVztBQUNmIiwiZmlsZSI6InJlY2lwZS1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10ZXh0IHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6ICNmNThmOGZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuXHJcbi51c2VybmFtZS10ZXh0IHtcclxuICAgIGNvbG9yOnJnYigxNDUsIDE0OCwgMTQ4KTtcclxufVxyXG5cclxuLnN1YnRpdGxlLXRleHQge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjb2xvcjogI2Y1OGY4ZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG5cclxuLmZpbHRlci1idG4ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjZDRjZmY7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWxlcnQtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDIyNiwgODMsIDgzKTtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCByZ2IoMjI2LCA4MywgODMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmlsdGVyLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2Y2Q0Y2ZmOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi52YWx1ZS1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZjZjZDRjZmY7IFxyXG4gICAgYm9yZGVyOiAycHggc29saWQgICNmNmNkNGNmZjsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNThmOGZmZjsgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjU4ZjhmZmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zdWJtaXQtdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICNmNThmOGZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWJsb2Nre1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU4ZjhmZmY7IFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1OGY4ZmZmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWFyZ2luYXV0byB7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53YXJuaW5nIHtcclxuICAgIHdpZHRoOiA5NCU7XHJcbn1cclxuXHJcbi5zdWJtaXQtY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDoyMDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipe-content',
                templateUrl: './recipe-content.component.html',
                styleUrls: ['./recipe-content.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }]; }, null); })();


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _ads_ads_component__WEBPACK_IMPORTED_MODULE_2__["AdsComponent"]], styles: [".left[_ngcontent-%COMP%] {\r\n    border-right: 1px solid #f6cd4cff; \r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content: center;\r\n}\r\n\r\n.left-btn[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    background-color: #f6cd4cff;\r\n    color: white;\r\n    border: 6px solid white;\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n    background-image: linear-gradient(to right, #f6cd4cff, rgb(247, 241, 223));\r\n}\r\n\r\n.bar-text[_ngcontent-%COMP%]{\r\n    font-size: 60px;\r\n    color:white;\r\n    font-weight: bold;\r\n    font-family: cursive;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMEVBQTBFO0FBQzlFOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6Im15cmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjZjZDRjZmY7IFxyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sZWZ0LWJ0biB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmNkNGNmZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uY29udGVudC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y2Y2Q0Y2ZmLCByZ2IoMjQ3LCAyNDEsIDIyMykpO1xyXG59XHJcblxyXG4uYmFyLXRleHR7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn0iXX0= */"] });
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _ads_ads_component__WEBPACK_IMPORTED_MODULE_2__["AdsComponent"]], styles: [".left[_ngcontent-%COMP%] {\r\n    border-right: 1px solid #f6cd4cff; \r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content: center;\r\n}\r\n\r\n.left-btn[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    background-color: #f6cd4cff;\r\n    color: white;\r\n    border: 6px solid white;\r\n}\r\n\r\n.content-header[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n    background-image: linear-gradient(to right, #f6cd4cff, rgb(247, 241, 223));\r\n}\r\n\r\n.bar-text[_ngcontent-%COMP%]{\r\n    font-size: 60px;\r\n    \r\n    color:white;\r\n    font-weight: bold;\r\n    font-family: cursive;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYWxwbGFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMEVBQTBFO0FBQzlFOztBQUVBO0lBQ0ksZUFBZTs7SUFFZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJtZWFscGxhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Y2Y2Q0Y2ZmOyBcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubGVmdC1idG4ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjZDRjZmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRlbnQtaGVhZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNmNkNGNmZiwgcmdiKDI0NywgMjQxLCAyMjMpKTtcclxufVxyXG5cclxuLmJhci10ZXh0e1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn0iXX0= */"] });
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
        let url = this.base_api + "/api/validation/?name=" + name + "&?email=" + email;
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".header-container[_ngcontent-%COMP%] {\r\n    background-color: #f58f8fff;\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n\r\n.align-center[_ngcontent-%COMP%] {\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content: center;\r\n}\r\n\r\n#nav-icon[_ngcontent-%COMP%] {\r\n    background-image : url('nav-icon.PNG');\r\n    background-size: cover;\r\n    border: 6px solid #f6cd4cff;\r\n    border-radius: 20%;\r\n    width: 80px;\r\n    height: 75px;\r\n}\r\n\r\n.option-container[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    font-family: Helvetica;\r\n    border: 6px solid #f6cd4cff;\r\n}\r\n\r\n.option-divider[_ngcontent-%COMP%] {\r\n    color:  #f6cd4cff;\r\n    border: 2px solid #f6cd4cff;\r\n}\r\n\r\n.option-font[_ngcontent-%COMP%] {\r\n    color: #f58f8fff;   \r\n    font-weight: bold;\r\n}\r\n\r\n.header-title[_ngcontent-%COMP%] {\r\n    font-size: 80px;\r\n    color:#f6cd4cff;\r\n    font-weight: bold;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    border: 8px solid #f6cd4cff;\r\n    border-radius: 30%;\r\n    width: 150px;\r\n    margin-bottom: 20px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    width: 200px;\r\n    background-color: #f6cd4cff;\r\n    color: white;\r\n}\r\n\r\n.dropdown-toggle[_ngcontent-%COMP%]::after {\r\n    display:none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1iYXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQ0FBMkQ7SUFDM0Qsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImhlYWRlci1iYXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU4ZjhmZmY7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWxpZ24tY2VudGVyIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jbmF2LWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZSA6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL25hdi1pY29uLlBORyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgI2Y2Y2Q0Y2ZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbn1cclxuXHJcbi5vcHRpb24tY29udGFpbmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjZjZjZDRjZmY7XHJcbn1cclxuXHJcbi5vcHRpb24tZGl2aWRlciB7XHJcbiAgICBjb2xvcjogICNmNmNkNGNmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmNkNGNmZjtcclxufVxyXG5cclxuLm9wdGlvbi1mb250IHtcclxuICAgIGNvbG9yOiAjZjU4ZjhmZmY7ICAgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICBjb2xvcjojZjZjZDRjZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgYm9yZGVyOiA4cHggc29saWQgI2Y2Y2Q0Y2ZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1idG4ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZjZDRjZmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufSJdfQ== */"] });
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