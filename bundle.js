/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/abstract/component.ts":
/*!***********************************!*\
  !*** ./src/abstract/component.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _flux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../flux/store */ "./src/flux/store.ts");

class Component extends HTMLElement {
    constructor() {
        super();
        this._tagName = '';
    }
    connectedCallback() {
        this.style.display = 'block';
        this.mount();
        this.subscribe();
    }
    mount() {
        this.innerHTML = this.template();
    }
    render() {
        return;
    }
    subscribe() {
        if (!this.shouldSubscribe()) {
            return;
        }
        _flux_store__WEBPACK_IMPORTED_MODULE_0__["default"].instance && _flux_store__WEBPACK_IMPORTED_MODULE_0__["default"].instance.subscribe(this);
    }
    shouldSubscribe() {
        return true;
    }
    addEvent(eventType, selector, callback) {
        this.addEventListener(eventType, (event) => {
            const { target } = event;
            const isValidTarget = !!(target && target instanceof Element && target.closest(selector));
            if (isValidTarget)
                callback(event);
        });
    }
    notify() {
        this.render();
    }
    hide() {
        this.setAttribute('hidden', '');
    }
    show() {
        this.removeAttribute('hidden');
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);


/***/ }),

/***/ "./src/components/add-product-form.ts":
/*!********************************************!*\
  !*** ./src/components/add-product-form.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/component */ "./src/abstract/component.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _decorators_decortators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/decortators */ "./src/decorators/decortators.ts");
/* harmony import */ var _flux_createAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flux/createAction */ "./src/flux/createAction.ts");
/* harmony import */ var _flux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../flux/store */ "./src/flux/store.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _validation_validation_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validation/validation-error */ "./src/validation/validation-error.ts");
/* harmony import */ var _validation_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validation/validators */ "./src/validation/validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let AddProductForm = class AddProductForm extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    template() {
        return `
      <form>
        <label for="product-name">추가할 상품 정보를 입력해주세요.</label>
        <div class="d-flex">
          <input placeholder="상품명" name="product-name" class="form-control mr-1" />
          <input placeholder="가격" name="product-price" class="form-control mr-1" />
          <input placeholder="수량" name="product-quantity" class="form-control mr-4" />
          <button type="button" class="btn btn-primary">추가</button>
        </div>
      </form>
    `;
    }
    onClickAddProductBtn() {
        const nameInput = this.querySelector('input[name="product-name"]');
        const priceInput = this.querySelector('input[name="product-price"]');
        const quantityInput = this.querySelector('input[name="product-quantity"]');
        const [name, price, quantity] = [nameInput.value, priceInput.value, quantityInput.value];
        const productItem = { name, price, quantity };
        try {
            this.addProduct(productItem);
        }
        catch (e) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_5__.consoleErrorWithConditionalAlert)(e);
        }
    }
    addProduct(productItem) {
        var _a;
        const { productList } = _flux_store__WEBPACK_IMPORTED_MODULE_4__["default"].instance.getState();
        const errorList = (0,_validation_validators__WEBPACK_IMPORTED_MODULE_7__.validateProduct)(productItem, productList).filter((result) => result.hasError);
        if (errorList.length > 0 && errorList[0].hasError)
            throw new _validation_validation_error__WEBPACK_IMPORTED_MODULE_6__["default"](errorList[0].errorMessage);
        _flux_store__WEBPACK_IMPORTED_MODULE_4__["default"].instance.dispatch((0,_flux_createAction__WEBPACK_IMPORTED_MODULE_3__["default"])(_constants__WEBPACK_IMPORTED_MODULE_1__.ACTION.ADD_PRODUCT, productItem));
        [...this.querySelectorAll('input')].forEach(($input) => ($input.value = ''));
        (_a = this.querySelector('input')) === null || _a === void 0 ? void 0 : _a.focus();
    }
    shouldSubscribe() {
        return true;
    }
};
__decorate([
    (0,_decorators_decortators__WEBPACK_IMPORTED_MODULE_2__.event)('click', 'button')
], AddProductForm.prototype, "onClickAddProductBtn", null);
AddProductForm = __decorate([
    (0,_decorators_decortators__WEBPACK_IMPORTED_MODULE_2__.customElement)('add-product-form')
], AddProductForm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddProductForm);


/***/ }),

/***/ "./src/components/changes-inventory.ts":
/*!*********************************************!*\
  !*** ./src/components/changes-inventory.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/component */ "./src/abstract/component.ts");
/* harmony import */ var _decorators_decortators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/decortators */ "./src/decorators/decortators.ts");
/* harmony import */ var _flux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../flux/store */ "./src/flux/store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ChangesInventory = class ChangesInventory extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    coinsTemplate(coins) {
        return Object.keys(coins)
            .map(Number)
            .map((unit) => {
            return `
        <tr>
          <td>${unit}원</td>
          <td>${coins[unit]}개</td>
        </tr>
      `;
        })
            .join('');
    }
    template(coins) {
        return `
      <section class="changes-inventory">
        <h2>자판기가 보유한 동전</h2>
        <table>
          <thead>
            <tr>
              <th>동전</th>
              <th>개수</th>
            </tr>
          </thead>
          <tbody>
            ${this.coinsTemplate(coins)}
          </tbody>
        </table>
      </section>
    `;
    }
    mount() {
        const { chargedCoins } = _flux_store__WEBPACK_IMPORTED_MODULE_2__["default"].instance.getState();
        this.innerHTML = this.template(chargedCoins);
    }
    render() {
        const { chargedCoins } = _flux_store__WEBPACK_IMPORTED_MODULE_2__["default"].instance.getState();
        const tbody = this.querySelector('tbody');
        if (!tbody)
            return;
        tbody.innerHTML = this.coinsTemplate(chargedCoins);
    }
};
ChangesInventory = __decorate([
    (0,_decorators_decortators__WEBPACK_IMPORTED_MODULE_1__.customElement)('changes-inventory')
], ChangesInventory);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangesInventory);


/***/ }),

/***/ "./src/components/charge-money-form.ts":
/*!*********************************************!*\
  !*** ./src/components/charge-money-form.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/component */ "./src/abstract/component.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _decorators_decortators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/decortators */ "./src/decorators/decortators.ts");
/* harmony import */ var _flux_createAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flux/createAction */ "./src/flux/createAction.ts");
/* harmony import */ var _flux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../flux/store */ "./src/flux/store.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _validation_validation_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validation/validation-error */ "./src/validation/validation-error.ts");
/* harmony import */ var _validation_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validation/validators */ "./src/validation/validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let ChargeMoneyForm = class ChargeMoneyForm extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    template(chargedMoney) {
        return `
      <form onsubmit="return false">
        <label for="charge-money-input">자판기가 보유할 금액을 입력해주세요</label>
        <div class="d-flex mb-4">
          <input placeholder="금액" name="charge-money-input" class="form-control mr-4" />
          <button type="button" class="btn btn-primary">추가</button>
        </div>
        <label class="mb-0">현재 보유 금액: ${chargedMoney}원</label>
      </form>
    `;
    }
    onClickChargeBtn({ target }) {
        const $input = target.previousElementSibling;
        const money = $input.value;
        try {
            this.chargeCoins(money);
        }
        catch (e) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_5__.consoleErrorWithConditionalAlert)(e);
            $input.focus();
            $input.value = '';
        }
    }
    chargeCoins(money) {
        const { chargedMoney } = _flux_store__WEBPACK_IMPORTED_MODULE_4__["default"].instance.getState();
        const { hasError, errorMessage } = (0,_validation_validators__WEBPACK_IMPORTED_MODULE_7__.validateChargeCoins)(money, chargedMoney);
        if (hasError)
            throw new _validation_validation_error__WEBPACK_IMPORTED_MODULE_6__["default"](errorMessage);
        _flux_store__WEBPACK_IMPORTED_MODULE_4__["default"].instance.dispatch((0,_flux_createAction__WEBPACK_IMPORTED_MODULE_3__["default"])(_constants__WEBPACK_IMPORTED_MODULE_1__.ACTION.CHARGE_COINS, (0,_utils__WEBPACK_IMPORTED_MODULE_5__.toInt)(money)));
    }
    mount() {
        this.render();
    }
    render() {
        const { chargedMoney } = _flux_store__WEBPACK_IMPORTED_MODULE_4__["default"].instance.getState();
        this.innerHTML = this.template(chargedMoney);
    }
};
__decorate([
    (0,_decorators_decortators__WEBPACK_IMPORTED_MODULE_2__.event)('click', 'button')
], ChargeMoneyForm.prototype, "onClickChargeBtn", null);
ChargeMoneyForm = __decorate([
    (0,_decorators_decortators__WEBPACK_IMPORTED_MODULE_2__.customElement)('charge-money-form')
], ChargeMoneyForm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChargeMoneyForm);


/***/ }),

/***/ "./src/components/charge-money-tab.ts":
/*!********************************************!*\
  !*** ./src/components/charge-money-tab.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/component */ "./src/abstract/component.ts");
/* harmony import */ var _decorators_decortators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/decortators */ "./src/decorators/decortators.ts");
/* harmony import */ var _charge_money_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charge-money-form */ "./src/components/charge-money-form.ts");
/* harmony import */ var _changes_inventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changes-inventory */ "./src/components/changes-inventory.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ChargeMoneyTab = class ChargeMoneyTab extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    template() {
        return `
      <charge-money-form class="mb-12"></charge-money-form>
      <changes-inventory></changes-inventory>
    `;
    }
};
ChargeMoneyTab = __decorate([
    (0,_decorators_decortators__WEBPACK_IMPORTED_MODULE_1__.customElement)('charge-money-tab')
], ChargeMoneyTab);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChargeMoneyTab);


/***/ }),

/***/ "./src/components/navigation.ts":
/*!**************************************!*\
  !*** ./src/components/navigation.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/component */ "./src/abstract/component.ts");
/* harmony import */ var _decorators_decortators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/decortators */ "./src/decorators/decortators.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router */ "./src/router.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let Navigation = class Navigation extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    template() {
        return `
      <nav class="d-flex justify-content-center">
        <button class="btn btn-secondary mr-1" data-destination="product-manage-tab">상품 관리</button>
        <button class="btn btn-secondary mr-1" data-destination="charge-money-tab">잔돈 충전</button>
        <button class="btn btn-secondary">상품 구매</button>
      </nav>
    `;
    }
    onClickNavLink({ target }) {
        this.activeLink(target);
        const destination = target.dataset.destination;
        _router__WEBPACK_IMPORTED_MODULE_2__["default"].pushState(destination);
    }
    activeLink(target) {
        [...this.querySelectorAll('button')].forEach(($button) => $button.classList.remove('active'));
        target.classList.add('active');
    }
    shouldSubscribe() {
        return false;
    }
};
__decorate([
    (0,_decorators_decortators__WEBPACK_IMPORTED_MODULE_1__.event)('click', 'button')
], Navigation.prototype, "onClickNavLink", null);
Navigation = __decorate([
    (0,_decorators_decortators__WEBPACK_IMPORTED_MODULE_1__.customElement)('vendingmachine-navigation')
], Navigation);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);


/***/ }),

/***/ "./src/components/product-inventory.ts":
/*!*********************************************!*\
  !*** ./src/components/product-inventory.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/component */ "./src/abstract/component.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _decorators_decortators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/decortators */ "./src/decorators/decortators.ts");
/* harmony import */ var _flux_createAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flux/createAction */ "./src/flux/createAction.ts");
/* harmony import */ var _flux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../flux/store */ "./src/flux/store.ts");
/* harmony import */ var _validation_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validation/validators */ "./src/validation/validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ProductInventory = class ProductInventory extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    productItemTemplate({ name, price, quantity, isEditing }) {
        return `
      <tr>
        <td>${isEditing
            ? `<input class="form-control" placeholder="상풍명" value="${name}" data-original-name="${name}"/>`
            : name}</td>
        <td>${isEditing ? `<input class="form-control" placeholder="가격" value="${price}"/>` : price}</td>
        <td>${isEditing
            ? `<input class="form-control" placeholder="수량" value="${quantity}"/>`
            : quantity}</td>
        <td class="has-btn">
          <div class="btn-group">
            <button class="btn xs mr-2 ${isEditing ? 'btn-primary btn-confirm' : 'btn-secondary btn-edit'}">${isEditing ? '확인' : '수정'}</button>
            <button class="btn xs ${isEditing ? 'btn-outline-primary btn-cancel' : 'btn-secondary btn-delete'}">${isEditing ? '취소' : '삭제'}</button>
          </div>
        </td>
      </tr>
    `;
    }
    template(productList) {
        const productListTemplate = productList.map((item) => this.productItemTemplate(item)).join('');
        return `
      <h2>상품 현황</h2>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${productListTemplate}
        </tbody>
      </table>
    `;
    }
    changeToEditMode({ target }) {
        const tds = this.findTds(target);
        if (!tds)
            return;
        const { $name } = tds;
        _flux_store__WEBPACK_IMPORTED_MODULE_4__["default"].instance.dispatch((0,_flux_createAction__WEBPACK_IMPORTED_MODULE_3__["default"])(_constants__WEBPACK_IMPORTED_MODULE_1__.ACTION.CHANGE_EDIT_MODE, { name: $name.textContent, isEditing: true }));
    }
    editProduct({ target }) {
        const tds = this.findTds(target);
        if (!tds)
            return;
        const { $name, $price, $quantity } = tds;
        const originalName = $name.childNodes[0].dataset.originalName;
        const name = $name.childNodes[0].value;
        const price = $price.childNodes[0].value;
        const quantity = $quantity.childNodes[0].value;
        const productList = _flux_store__WEBPACK_IMPORTED_MODULE_4__["default"].instance.getState().productList;
        const errorList = (0,_validation_validators__WEBPACK_IMPORTED_MODULE_5__.validateProduct)({ name, price, quantity }, productList.filter((item) => !(item.name === originalName && item.name === name))).filter((result) => result.hasError);
        if (errorList.length > 0 && errorList[0].hasError) {
            alert(errorList[0].errorMessage);
            return;
        }
        _flux_store__WEBPACK_IMPORTED_MODULE_4__["default"].instance.dispatch((0,_flux_createAction__WEBPACK_IMPORTED_MODULE_3__["default"])(_constants__WEBPACK_IMPORTED_MODULE_1__.ACTION.EDIT_PRODUCT, { originalName, name, price, quantity }));
    }
    cancelProduct({ target }) {
        const tds = this.findTds(target);
        if (!tds)
            return;
        const { $name } = tds;
        const $nameInput = $name.childNodes[0];
        const originalName = $nameInput.dataset.originalName;
        _flux_store__WEBPACK_IMPORTED_MODULE_4__["default"].instance.dispatch((0,_flux_createAction__WEBPACK_IMPORTED_MODULE_3__["default"])(_constants__WEBPACK_IMPORTED_MODULE_1__.ACTION.CHANGE_EDIT_MODE, { name: originalName, isEditing: false }));
    }
    deleteProduct({ target }) {
        const tds = this.findTds(target);
        if (!tds)
            return;
        const { $name } = tds;
        const result = window.confirm('해당 상품을 삭제하시겠습니까?');
        if (!result)
            return;
        _flux_store__WEBPACK_IMPORTED_MODULE_4__["default"].instance.dispatch((0,_flux_createAction__WEBPACK_IMPORTED_MODULE_3__["default"])(_constants__WEBPACK_IMPORTED_MODULE_1__.ACTION.DELETE_PRODUCT, $name.textContent));
    }
    findTds(target) {
        var _a;
        const children = (_a = target.closest('tr')) === null || _a === void 0 ? void 0 : _a.children;
        if (!children)
            return null;
        const [$name, $price, $quantity] = children;
        return { $name, $price, $quantity };
    }
    mount() {
        const { productList } = _flux_store__WEBPACK_IMPORTED_MODULE_4__["default"].instance.getState();
        this.innerHTML = this.template(productList);
    }
    render() {
        const tbody = this.querySelector('tbody');
        const { productList } = _flux_store__WEBPACK_IMPORTED_MODULE_4__["default"].instance.getState();
        const productListTemplate = productList.map((item) => this.productItemTemplate(item)).join('');
        if (!tbody)
            return;
        tbody.innerHTML = productListTemplate;
    }
};
__decorate([
    (0,_decorators_decortators__WEBPACK_IMPORTED_MODULE_2__.event)('click', '.btn-edit')
], ProductInventory.prototype, "changeToEditMode", null);
__decorate([
    (0,_decorators_decortators__WEBPACK_IMPORTED_MODULE_2__.event)('click', '.btn-confirm')
], ProductInventory.prototype, "editProduct", null);
__decorate([
    (0,_decorators_decortators__WEBPACK_IMPORTED_MODULE_2__.event)('click', '.btn-cancel')
], ProductInventory.prototype, "cancelProduct", null);
__decorate([
    (0,_decorators_decortators__WEBPACK_IMPORTED_MODULE_2__.event)('click', '.btn-delete')
], ProductInventory.prototype, "deleteProduct", null);
ProductInventory = __decorate([
    (0,_decorators_decortators__WEBPACK_IMPORTED_MODULE_2__.customElement)('product-inventory')
], ProductInventory);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductInventory);


/***/ }),

/***/ "./src/components/product-manage-tab.ts":
/*!**********************************************!*\
  !*** ./src/components/product-manage-tab.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/component */ "./src/abstract/component.ts");
/* harmony import */ var _decorators_decortators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/decortators */ "./src/decorators/decortators.ts");
/* harmony import */ var _add_product_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-product-form */ "./src/components/add-product-form.ts");
/* harmony import */ var _product_inventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-inventory */ "./src/components/product-inventory.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ProductManageTab = class ProductManageTab extends _abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    template() {
        return `
      <add-product-form></add-product-form>
      <product-inventory></product-inventory>
    `;
    }
    shouldSubscribe() {
        return false;
    }
};
ProductManageTab = __decorate([
    (0,_decorators_decortators__WEBPACK_IMPORTED_MODULE_1__.customElement)('product-manage-tab')
], ProductManageTab);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductManageTab);


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION": () => (/* binding */ ACTION),
/* harmony export */   "COIN_UNITS": () => (/* binding */ COIN_UNITS),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "VALIDATION_ERROR_NAME": () => (/* binding */ VALIDATION_ERROR_NAME)
/* harmony export */ });
const ACTION = {
    ADD_PRODUCT: 'add-product',
    EDIT_PRODUCT: 'edit-product',
    DELETE_PRODUCT: 'delete-product',
    CHANGE_EDIT_MODE: 'change-edit-mode',
    CHARGE_COINS: 'charge-coins',
};
const COIN_UNITS = [500, 100, 50, 10];
const initialState = {
    chargedMoney: 0,
    chargedCoins: {
        500: 0,
        100: 0,
        50: 0,
        10: 0,
    },
    productList: [
        {
            name: '콜라',
            price: 1000,
            quantity: 1,
            isEditing: false,
        },
        {
            name: '사이다',
            price: 2000,
            quantity: 1,
            isEditing: false,
        },
        {
            name: '환티',
            price: 1000,
            quantity: 1,
            isEditing: false,
        },
    ],
};
const VALIDATION_ERROR_NAME = 'validation-error';


/***/ }),

/***/ "./src/decorators/decortators.ts":
/*!***************************************!*\
  !*** ./src/decorators/decortators.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customElement": () => (/* binding */ customElement),
/* harmony export */   "event": () => (/* binding */ event)
/* harmony export */ });
function customElement(name) {
    return function (target) {
        target._tagName = name;
        customElements.define(name, target);
    };
}
function event(eventType, selector) {
    return function (target, _, descriptor) {
        document.addEventListener('DOMContentLoaded', () => {
            requestAnimationFrame(() => {
                const el = document.querySelector(target.constructor._tagName);
                el && descriptor.value && el.addEvent(eventType, selector, descriptor.value.bind(el));
            });
        });
    };
}


/***/ }),

/***/ "./src/flux/createAction.ts":
/*!**********************************!*\
  !*** ./src/flux/createAction.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createAction = (type, payload) => {
    return {
        type,
        payload,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAction);


/***/ }),

/***/ "./src/flux/reducer.ts":
/*!*****************************!*\
  !*** ./src/flux/reducer.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");


function moneyToCoin(money) {
    const coins = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.convertArrToObj)(_constants__WEBPACK_IMPORTED_MODULE_0__.COIN_UNITS, 0);
    let idx = 0;
    while (money > 0) {
        const mixedCoins = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.shuffle)(_constants__WEBPACK_IMPORTED_MODULE_0__.COIN_UNITS);
        if (money < mixedCoins[idx]) {
            idx = (idx + 1) % _constants__WEBPACK_IMPORTED_MODULE_0__.COIN_UNITS.length;
            continue;
        }
        money -= mixedCoins[idx];
        coins[mixedCoins[idx]]++;
        idx = (idx + 1) % _constants__WEBPACK_IMPORTED_MODULE_0__.COIN_UNITS.length;
    }
    return coins;
}
function mergeCoins(coins, newCoins) {
    for (const unit in coins) {
        coins[unit] += newCoins[unit];
    }
    return coins;
}
const reducer = (state, { type, payload }) => {
    const newState = Object.assign({}, state);
    if (type === _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.ADD_PRODUCT) {
        newState.productList = [...newState.productList, Object.assign(Object.assign({}, payload), { isEditing: false })];
    }
    else if (type === _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.CHANGE_EDIT_MODE) {
        const { name, isEditing } = payload;
        const index = newState.productList.findIndex((item) => item.name === name);
        newState.productList[index].isEditing = isEditing;
    }
    else if (type === _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.EDIT_PRODUCT) {
        const { originalName, name, price, quantity } = payload;
        const index = newState.productList.findIndex((item) => item.name === originalName);
        newState.productList[index] = { name, price, quantity, isEditing: false };
    }
    else if (type === _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.DELETE_PRODUCT) {
        newState.productList = newState.productList.filter((item) => item.name !== payload);
    }
    else if (type === _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION.CHARGE_COINS) {
        newState.chargedCoins = mergeCoins(newState.chargedCoins, moneyToCoin(payload));
        newState.chargedMoney += payload;
    }
    return newState;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);


/***/ }),

/***/ "./src/flux/store.ts":
/*!***************************!*\
  !*** ./src/flux/store.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./src/flux/reducer.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");


class Store {
    constructor(initialState) {
        this.subscribers = [];
        if (Store._instance) {
            return Store._instance;
        }
        this.state = initialState;
        Store._instance = this;
    }
    static get instance() {
        if (!Store._instance) {
            Store._instance = new Store(_constants__WEBPACK_IMPORTED_MODULE_1__.initialState);
        }
        return Store._instance;
    }
    getState() {
        return this.state;
    }
    subscribe(component) {
        this.subscribers.push(component);
    }
    dispatch(action) {
        this.state = (0,_reducer__WEBPACK_IMPORTED_MODULE_0__["default"])(this.getState(), action);
        this.subscribers.forEach((subscriber) => {
            subscriber.notify();
        });
    }
}
Store._instance = null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);


/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Router {
    constructor() {
        this.onLocationChange = () => {
            const { pathname } = window.location;
            this.routeComponent(pathname);
        };
        if (Router._instance) {
            return Router._instance;
        }
        window.addEventListener('pushstate', this.onLocationChange);
        window.addEventListener('popstate', this.onLocationChange);
        this.tabContainer = document.querySelector('.tab-container');
        this.onLoad();
    }
    static get instance() {
        if (!Router._instance) {
            Router._instance = new Router();
        }
        return Router._instance;
    }
    onLoad() {
        const { pathname } = window.location;
        this.routeComponent(pathname);
    }
    routeComponent(pathname) {
        if (!this.tabContainer)
            return;
        if (['/', '/product-manage-tab'].includes(pathname)) {
            this.tabContainer.innerHTML = '<product-manage-tab></product-manage-tab>';
        }
        else if (pathname === '/charge-money-tab') {
            this.tabContainer.innerHTML = '<charge-money-tab></charge-money-tab>';
        }
    }
    static pushState(url) {
        history.pushState({}, '', url);
        window.dispatchEvent(new Event('pushstate'));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toInt": () => (/* binding */ toInt),
/* harmony export */   "consoleErrorWithConditionalAlert": () => (/* binding */ consoleErrorWithConditionalAlert),
/* harmony export */   "shuffle": () => (/* binding */ shuffle),
/* harmony export */   "convertArrToObj": () => (/* binding */ convertArrToObj)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");

const toInt = (str, defaultNum = 0) => {
    const val = parseInt(str, 10);
    return !Number.isNaN(val) ? val : defaultNum;
};
const consoleErrorWithConditionalAlert = (error, errorNameForAlert = _constants__WEBPACK_IMPORTED_MODULE_0__.VALIDATION_ERROR_NAME) => {
    console.error(error);
    if (error.name === errorNameForAlert) {
        alert(error.message);
    }
};
const randomIndexFromArr = (arr) => {
    return arr[(arr.length * Math.random()) | 0];
};
const randomIndexesFromRange = (size) => {
    const randomIndexes = [];
    let arr = [...Array(size).keys()];
    while (arr.length > 0) {
        const randomValue = randomIndexFromArr(arr);
        randomIndexes.push(randomValue);
        arr = arr.filter((v) => v !== randomValue);
    }
    return randomIndexes;
};
const shuffle = (arr) => {
    const randomIndexes = randomIndexesFromRange(arr.length);
    return randomIndexes.map((v) => arr[v]);
};
const convertArrToObj = (arr, val) => {
    return Object.fromEntries(arr.map((item) => [item, val]));
};


/***/ }),

/***/ "./src/validation/validation-error.ts":
/*!********************************************!*\
  !*** ./src/validation/validation-error.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = _constants__WEBPACK_IMPORTED_MODULE_0__.VALIDATION_ERROR_NAME;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationError);


/***/ }),

/***/ "./src/validation/validation-result.ts":
/*!*********************************************!*\
  !*** ./src/validation/validation-result.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ValidationResult {
    constructor(hasError, errorMessage = '') {
        this.hasError = hasError;
        this.errorMessage = errorMessage;
        this.hasError = hasError;
        this.errorMessage = errorMessage;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ValidationResult);


/***/ }),

/***/ "./src/validation/validators.ts":
/*!**************************************!*\
  !*** ./src/validation/validators.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateProductName": () => (/* binding */ validateProductName),
/* harmony export */   "validateProductPrice": () => (/* binding */ validateProductPrice),
/* harmony export */   "validateProductQuantity": () => (/* binding */ validateProductQuantity),
/* harmony export */   "validateProduct": () => (/* binding */ validateProduct),
/* harmony export */   "validateChargeCoins": () => (/* binding */ validateChargeCoins)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _validation_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation-result */ "./src/validation/validation-result.ts");


const isInteger = (str) => {
    // Number => 소수점도 허용하기 때문에 사용하지 않는다
    // parseInt => 중간에 문자가 있어도 숫자를 리턴하기 때문에 사용하지 않는다
    return /^-?[0-9]+$/g.test(str);
};
const validateProductName = (name, productList) => {
    if (!name)
        return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, '상품명을 입력해 주세요');
    if (name.length > 10)
        return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, '상품명은 10글자 이내이어야 합니다');
    if (productList.some((item) => name === item.name))
        return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, '이미 등록된 상품입니다');
    return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](false);
};
const validateProductPrice = (price) => {
    if (!price)
        return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, '상품 기격을 입력해 주세요');
    if (!isInteger(price))
        return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, '상품 가격은 숫자이어야 합니다');
    const priceNum = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toInt)(price, 0);
    if (priceNum < 100 || 10000 < priceNum)
        return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, '상품가격은 100원 ~ 10,000원 이내이어야 합니다');
    if (priceNum % 10)
        return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, '상품 가격은 10원 단위이어야 합니다');
    return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](false);
};
const validateProductQuantity = (quantity) => {
    if (!quantity)
        return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, '상품 수량을 입력해 주세요');
    if (!isInteger(quantity))
        return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, '상품 수량은 숫자이어야 합니다');
    const quantityNum = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toInt)(quantity, 0);
    if (quantityNum < 1 || 20 < quantityNum)
        return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, '상품 수량은 1개 ~ 20개 이내이어야 합니다');
    return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](false);
};
const validateProduct = ({ name, price, quantity }, productList) => {
    return [
        validateProductName(name, productList),
        validateProductPrice(price),
        validateProductQuantity(quantity),
    ];
};
const validateChargeCoins = (money, chargedMoney) => {
    if (!money)
        return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, '충전 금액을 입력해주세요.');
    if (!isInteger(money))
        return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, '충전 금액은 숫자이어야 합니다');
    const moneyNum = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toInt)(money, 0);
    if (moneyNum % 10)
        return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, '충전 금액은 10원 단위이어야 합니다');
    if (100000 < moneyNum + chargedMoney)
        return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](true, '잔돈으로 보유할 수 있는 최대 금액은 100,000원입니다.');
    return new _validation_result__WEBPACK_IMPORTED_MODULE_1__["default"](false);
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation */ "./src/components/navigation.ts");
/* harmony import */ var _components_product_manage_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product-manage-tab */ "./src/components/product-manage-tab.ts");
/* harmony import */ var _components_charge_money_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/charge-money-tab */ "./src/components/charge-money-tab.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/router.ts");





new _router__WEBPACK_IMPORTED_MODULE_4__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map