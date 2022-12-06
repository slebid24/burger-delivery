/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/burger-constructor.js":
/*!*******************************************!*\
  !*** ./src/modules/burger-constructor.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_calculation_item_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/calculation-item-data */ "./src/modules/data/calculation-item-data.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function burgerConstructor(dataForVisualization, orderData, arr) {
  var ItemCalculation = /*#__PURE__*/function () {
    function ItemCalculation(btnIdM, btnIdP, countId, title, conImg, price, time, oz, kcal, dataForVisualization, orderData, imgKey, priceKey, timeKey, ozKey, kcalKey, startMargin, pathMargin) {
      _classCallCheck(this, ItemCalculation);
      this.btnIdM = btnIdM;
      this.btnIdP = btnIdP;
      this.countId = countId;
      this.title = title;
      this.conImg = conImg;
      this.price = price;
      this.time = time;
      this.oz = oz;
      this.kcal = kcal;
      this.dataForVisualization = dataForVisualization;
      this.orderData = orderData;
      this.imgKey = imgKey;
      this.priceKey = priceKey;
      this.timeKey = timeKey;
      this.ozKey = ozKey;
      this.kcalKey = kcalKey;
      this.startMargin = startMargin;
      this.pathMargin = pathMargin;
      this.counter();
      this.setDefault();
    }
    _createClass(ItemCalculation, [{
      key: "setDefault",
      value: function setDefault() {
        document.querySelector("#".concat(this.countId)).innerHTML = 0;
        document.querySelector(".main__total").innerHTML = "$0.00";
        document.querySelector(".main__time").innerHTML = "0.0 min";
        document.querySelector(".main__capacity").innerHTML = "0 oz";
        document.querySelector(".main__kcal").innerHTML = "0 kcal";
      }
    }, {
      key: "counter",
      value: function counter() {
        var _this = this;
        var n = 0;
        document.querySelector("#".concat(this.btnIdP)).addEventListener("click", function () {
          setTimeout(function () {
            if (n < 10) {
              document.querySelector("#".concat(_this.countId)).innerHTML = ++n;
              var parentSelectorBur = document.querySelector(".main__const-inner");
              _this.imgKey.push(_this.conImg);
              _this.orderData.recipe.push(_this.title);
              var lenghthOfArr = _this.orderData.recipe.length;
              var newItem = document.createElement("div");
              newItem.classList.add(_this.imgKey[_this.imgKey.length - 1]);
              newItem.classList.add("for_comparison");
              newItem.classList.add("for_start_ani");
              _this.pathMargin.push(_this.startMargin);
              var concatArr = dataForVisualization.margin.cutletMar.concat(dataForVisualization.margin.mayoMar, dataForVisualization.margin.cucumberMar, dataForVisualization.margin.cheeseMar, dataForVisualization.margin.tomatoMar, dataForVisualization.margin.saladMar, dataForVisualization.margin.onionMar, dataForVisualization.margin.bunMar);
              concatArr.unshift(0);
              var marginFin = concatArr.reduce(function (sum, current) {
                return sum + current;
              });
              newItem.style = "top: ".concat(marginFin, "%");
              parentSelectorBur.append(newItem);
              var topBun = document.createElement("div");
              if (lenghthOfArr > 0 && document.querySelectorAll(".item__topbun").length < 1) {
                topBun.classList.add("item__topbun");
                parentSelectorBur.append(topBun);
                document.querySelector(".item__topbun").animate([{
                  top: "-400%",
                  opacity: "0"
                }, {
                  top: "".concat(parseInt(marginFin) - 90, "%"),
                  opacity: "1"
                }], {
                  duration: 400,
                  easing: "ease-in-out"
                });
              } else {
                document.querySelector(".item__topbun").animate([{
                  transform: "skew(0)",
                  top: "".concat(parseInt(marginFin) - 90, "%"),
                  left: "0%"
                }, {
                  transform: "skew(-5deg, 5deg)",
                  top: "".concat(parseInt(marginFin) - 90 - 15, "%"),
                  left: "2%"
                }, {
                  transform: "skew(0)",
                  top: "".concat(parseInt(marginFin) - 90, "%"),
                  left: "0%"
                }], {
                  duration: 500,
                  easing: "ease-in-out"
                });
              }
              document.querySelector(".item__topbun").style.top = "".concat(parseInt(marginFin) - 90, "%");
              _this.priceKey.push(_this.price);
              var tprice = dataForVisualization.sum.cutletSum.concat(dataForVisualization.sum.mayoSum, dataForVisualization.sum.cucumberSum, dataForVisualization.sum.cheeseSum, dataForVisualization.sum.tomatoSum, dataForVisualization.sum.saladSum, dataForVisualization.sum.onionSum, dataForVisualization.sum.bunSum);
              tprice.unshift(0);
              var sumprice = tprice.reduce(function (sum, current) {
                return sum + current;
              });
              document.querySelector(".main__total").innerHTML = "$".concat(sumprice.toFixed(2));
              _this.timeKey.push(_this.time);
              var ttime = dataForVisualization.time.cutletTime.concat(dataForVisualization.time.mayoTime, dataForVisualization.time.cucumberTime, dataForVisualization.time.cheeseTime, dataForVisualization.time.tomatoTime, dataForVisualization.time.saladTime, dataForVisualization.time.onionTime, dataForVisualization.time.bunTime);
              ttime.unshift(0);
              var sumTime = ttime.reduce(function (sum, current) {
                return sum + current;
              });
              document.querySelector(".main__time").innerHTML = "".concat(sumTime.toFixed(1), " min");
              _this.ozKey.push(_this.oz);
              var toz = dataForVisualization.oz.cutletOz.concat(dataForVisualization.oz.mayoOz, dataForVisualization.oz.cucumberOz, dataForVisualization.oz.cheeseOz, dataForVisualization.oz.tomatoOz, dataForVisualization.oz.saladOz, dataForVisualization.oz.onionOz, dataForVisualization.oz.bunOz);
              toz.unshift(0);
              var sumOz = toz.reduce(function (sum, current) {
                return sum + current;
              });
              document.querySelector(".main__capacity").innerHTML = "".concat(sumOz, " oz");
              _this.kcalKey.push(_this.kcal);
              var tkcal = dataForVisualization.kcal.cutletKcal.concat(dataForVisualization.kcal.mayoKcal, dataForVisualization.kcal.cucumberKcal, dataForVisualization.kcal.cheeseKcal, dataForVisualization.kcal.tomatoKcal, dataForVisualization.kcal.saladKcal, dataForVisualization.kcal.onionKcal, dataForVisualization.kcal.bunKcal);
              tkcal.unshift(0);
              var sumKcal = tkcal.reduce(function (sum, current) {
                return sum + current;
              });
              document.querySelector(".main__kcal").innerHTML = "".concat(sumKcal, " kcal");
              if (tprice.reduce(function (sum, current) {
                return sum + current;
              }) >= 10 && !document.querySelector(".main__const-inner-catchup")) {
                var catchup = document.createElement("div");
                catchup.classList.add("main__const-inner-catchup");
                document.querySelector(".main__const-inner").append(catchup);
              }
            } else {}
          }, 100);
        });
        document.querySelector("#".concat(this.btnIdM)).addEventListener("click", function () {
          setTimeout(function () {
            if (n > 0) {
              document.querySelector("#".concat(_this.countId)).innerHTML = --n;
              _this.imgKey.pop(_this.conImg);
              var deletedM = _this.pathMargin.pop(_this.startMargin);
              var a = "." + _this.conImg;
              var _arr = document.querySelectorAll(a);
              var comparDefin = _arr[_arr.length - 1].style.top;
              var classForDelAni = (_this.orderData.recipe.length - 1) % 2 === 0 ? "for_del_ani_left" : "for_del_ani_right";
              _arr[_arr.length - 1].classList.replace("for_start_ani", classForDelAni);
              setTimeout(function () {
                _arr[_arr.length - 1].remove();
              }, 100);
              var compar = document.querySelectorAll(".for_comparison");
              var comparArr = Array.from(compar);
              var toChange = comparArr.filter(function (e) {
                return parseInt(e.style.top) < parseInt(comparDefin);
              });
              toChange.forEach(function (e) {
                e.style.top = "".concat(parseInt(e.style.top) - parseInt(deletedM), "%");
              });
              var concatArr = dataForVisualization.margin.cutletMar.concat(dataForVisualization.margin.mayoMar, dataForVisualization.margin.cucumberMar, dataForVisualization.margin.cheeseMar, dataForVisualization.margin.tomatoMar, dataForVisualization.margin.saladMar, dataForVisualization.margin.onionMar, dataForVisualization.margin.bunMar);
              concatArr.unshift(0);
              var marginFin = concatArr.reduce(function (sum, current) {
                return sum + current;
              });
              setTimeout(function () {
                if (lenghthOfArr > 0) {
                  document.querySelector(".item__topbun").style.top = "".concat(parseInt(marginFin) - 90, "%");
                }
              }, 220);
              _this.orderData.recipe.pop(_this.num);
              var lenghthOfArr = _this.orderData.recipe.length;
              if (lenghthOfArr == 0) {
                var deleteBun = document.querySelector(".item__topbun").animate([{
                  top: "".concat(parseInt(deletedM) - 90, "%"),
                  opacity: "1"
                }, {
                  top: "-400%",
                  opacity: "0"
                }], {
                  duration: 400,
                  easing: "ease-in-out"
                });
                Promise.all(document.querySelector(".item__topbun").getAnimations().map(function (deleteBun) {
                  return deleteBun.finished;
                })).then(function () {
                  document.querySelector(".item__topbun").remove();
                });
              }
              _this.priceKey.pop(_this.price);
              var dprice = dataForVisualization.sum.cutletSum.concat(dataForVisualization.sum.mayoSum, dataForVisualization.sum.cucumberSum, dataForVisualization.sum.cheeseSum, dataForVisualization.sum.tomatoSum, dataForVisualization.sum.saladSum, dataForVisualization.sum.onionSum, dataForVisualization.sum.bunSum);
              dprice.unshift(0);
              var sumprice = dprice.reduce(function (sum, current) {
                return sum + current;
              }, 0);
              document.querySelector(".main__total").innerHTML = "$".concat(sumprice.toFixed(2));
              _this.timeKey.pop(_this.time);
              var dtime = dataForVisualization.time.cutletTime.concat(dataForVisualization.time.mayoTime, dataForVisualization.time.cucumberTime, dataForVisualization.time.cheeseTime, dataForVisualization.time.tomatoTime, dataForVisualization.time.saladTime, dataForVisualization.time.onionTime, dataForVisualization.time.bunTime);
              dtime.unshift(0);
              var sumTime = dtime.reduce(function (sum, current) {
                return sum + current;
              }, 0);
              document.querySelector(".main__time").innerHTML = "".concat(sumTime.toFixed(1), " min");
              _this.ozKey.pop(_this.oz);
              var doz = dataForVisualization.oz.cutletOz.concat(dataForVisualization.oz.mayoOz, dataForVisualization.oz.cucumberOz, dataForVisualization.oz.cheeseOz, dataForVisualization.oz.tomatoOz, dataForVisualization.oz.saladOz, dataForVisualization.oz.onionOz, dataForVisualization.oz.bunOz);
              doz.unshift(0);
              var sumOz = doz.reduce(function (sum, current) {
                return sum + current;
              }, 0);
              document.querySelector(".main__capacity").innerHTML = "".concat(sumOz, " oz");
              _this.kcalKey.pop(_this.kcal);
              var dkcal = dataForVisualization.kcal.cutletKcal.concat(dataForVisualization.kcal.mayoKcal, dataForVisualization.kcal.cucumberKcal, dataForVisualization.kcal.cheeseKcal, dataForVisualization.kcal.tomatoKcal, dataForVisualization.kcal.saladKcal, dataForVisualization.kcal.onionKcal, dataForVisualization.kcal.bunKcal);
              dkcal.unshift(0);
              var sumKcal = dkcal.reduce(function (sum, current) {
                return sum + current;
              }, 0);
              document.querySelector(".main__kcal").innerHTML = "".concat(sumKcal, " kcal");
              if (dprice.reduce(function (sum, current) {
                return sum + current;
              }, 0) < 10 && document.querySelector(".main__const-inner-catchup")) {
                document.querySelector(".main__const-inner-catchup").classList.add("main__const-inner-catchup-delete");
                setTimeout(function () {
                  document.querySelector(".main__const-inner-catchup").remove();
                }, 200);
              }
            } else {
              return;
            }
          }, 200);
        });
      }
    }]);
    return ItemCalculation;
  }();
  arr(dataForVisualization, orderData).forEach(function (item) {
    var keys = Object.keys(item);
    _construct(ItemCalculation, _toConsumableArray(keys.map(function (key) {
      return item[key];
    })));
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerConstructor);

/***/ }),

/***/ "./src/modules/data/animation-data.js":
/*!********************************************!*\
  !*** ./src/modules/data/animation-data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function animationData() {
  var animationData = [{
    "class": "burger__bun-top",
    topS: 5,
    topF: 19,
    leftS: 60,
    leftF: 57.5,
    widthS: 40,
    widthF: 44,
    height: 220,
    zIndexS: 10,
    zIndexF: 10,
    rotateS: 25,
    rotateF: 0,
    scale: 1,
    duration: 1500,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__salad-top",
    topS: 9,
    topF: 40,
    leftS: 50,
    leftF: 57,
    widthS: 40,
    widthF: 45,
    height: 130,
    zIndexS: 9,
    zIndexF: 9,
    rotateS: 30,
    rotateF: 0,
    scale: 1,
    duration: 1200,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__mayo-top",
    topS: 19,
    topF: 36,
    leftS: 55,
    leftF: 57,
    widthS: 32,
    widthF: 37,
    height: 100,
    zIndexS: 9,
    zIndexF: 9,
    rotateS: 30,
    rotateF: 0,
    scale: -1,
    duration: 1500,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__cucumber-1",
    topS: 22,
    topF: 45,
    leftS: 39,
    leftF: 45,
    widthS: 15,
    widthF: 17,
    height: 60,
    zIndexS: 8,
    zIndexF: 8,
    rotateS: 20,
    rotateF: 0,
    scale: 1,
    duration: 1300,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__cucumber-2",
    topS: 18,
    topF: 45,
    leftS: 52,
    leftF: 57,
    widthS: 15,
    widthF: 17,
    height: 60,
    zIndexS: 8,
    zIndexF: 8,
    rotateS: 30,
    rotateF: 0,
    scale: 1,
    duration: 1300,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__cucumber-3",
    topS: 34,
    topF: 45,
    leftS: 57,
    leftF: 57,
    widthS: 15,
    widthF: 17,
    height: 60,
    zIndexS: 8,
    zIndexF: 8,
    rotateS: -10,
    rotateF: 0,
    scale: 1,
    duration: 1100,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__cucumber-4",
    topS: 36,
    topF: 45,
    leftS: 72,
    leftF: 70,
    widthS: 15,
    widthF: 17,
    height: 60,
    zIndexS: 8,
    zIndexF: 8,
    rotateS: 40,
    rotateF: 0,
    scale: 1,
    duration: 1000,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__tomato-1",
    topS: 41,
    topF: 50,
    leftS: 68,
    leftF: 69,
    widthS: 16,
    widthF: 19,
    height: 60,
    zIndexS: 7,
    zIndexF: 7,
    rotateS: 18,
    rotateF: 0,
    scale: 1,
    duration: 1200,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__tomato-2",
    topS: 52,
    topF: 50,
    leftS: 54,
    leftF: 59,
    widthS: 16,
    widthF: 19,
    height: 60,
    zIndexS: 7,
    zIndexF: 7,
    rotateS: 10,
    rotateF: 0,
    scale: 1,
    duration: 1000,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__tomato-3",
    topS: 32,
    topF: 50,
    leftS: 36,
    leftF: 46,
    widthS: 16,
    widthF: 19,
    height: 60,
    zIndexS: 7,
    zIndexF: 7,
    rotateS: -18,
    rotateF: 0,
    scale: 1,
    duration: 1300,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__tomato-4",
    topS: 52,
    topF: 50,
    leftS: 20,
    leftF: 59,
    widthS: 8,
    widthF: 19,
    height: 60,
    zIndexS: 1,
    zIndexF: 1,
    rotateS: 45,
    rotateF: 0,
    scale: 1,
    duration: 1500,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__cutlet",
    topS: 54,
    topF: 54,
    leftS: 55,
    leftF: 58,
    widthS: 43,
    widthF: 45,
    height: 160,
    zIndexS: 6,
    zIndexF: 6,
    rotateS: -8,
    rotateF: 0,
    scale: 1,
    duration: 800,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__onion-1",
    topS: 32,
    topF: 67,
    leftS: 86,
    leftF: 70,
    widthS: 11,
    widthF: 12,
    height: 60,
    zIndexS: 1,
    zIndexF: 1,
    rotateS: 25,
    rotateF: 0,
    scale: 1,
    duration: 1400,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__onion-2",
    topS: 57,
    topF: 67,
    leftS: 68,
    leftF: 59,
    widthS: 8,
    widthF: 16,
    height: 60,
    zIndexS: 30,
    zIndexF: 5,
    rotateS: 18,
    rotateF: 0,
    scale: 1,
    duration: 500,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__onion-3",
    topS: 56,
    topF: 67,
    leftS: 39,
    leftF: 45,
    widthS: 11,
    widthF: 16,
    height: 60,
    zIndexS: 30,
    zIndexF: 5,
    rotateS: -30,
    rotateF: 0,
    scale: 1,
    duration: 500,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__onion-4",
    topS: 68,
    topF: 67,
    leftS: 59,
    leftF: 59,
    widthS: 16,
    widthF: 16,
    height: 60,
    zIndexS: 7,
    zIndexF: 5,
    rotateS: 16,
    rotateF: 0,
    scale: 1,
    duration: 800,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__onion-5",
    topS: 72,
    topF: 67,
    leftS: 61,
    leftF: 70,
    widthS: 16,
    widthF: 16,
    height: 60,
    zIndexS: 7,
    zIndexF: 5,
    rotateS: -20,
    rotateF: 0,
    scale: 1,
    duration: 800,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__onion-6",
    topS: 78,
    topF: 67,
    leftS: 43,
    leftF: 45,
    widthS: 14,
    widthF: 16,
    height: 60,
    zIndexS: 7,
    zIndexF: 5,
    rotateS: 20,
    rotateF: 0,
    scale: 1,
    duration: 800,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__cheese",
    topS: 86,
    topF: 73,
    leftS: 58,
    leftF: 58,
    widthS: 42,
    widthF: 42,
    height: 160,
    zIndexS: 5,
    zIndexF: 4,
    rotateS: -16,
    rotateF: 0,
    scale: 1,
    duration: 1200,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__salad-bot",
    topS: 90,
    topF: 72,
    leftS: 58,
    leftF: 58,
    widthS: 42,
    widthF: 42,
    height: 160,
    zIndexS: 4,
    zIndexF: 3,
    rotateS: -16,
    rotateF: 0,
    scale: 1,
    duration: 1200,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__mayo-bot",
    topS: 100,
    topF: 78,
    leftS: 55,
    leftF: 58,
    widthS: 32,
    widthF: 37,
    height: 100,
    zIndexS: 2,
    zIndexF: 2,
    rotateS: -10,
    rotateF: 0,
    scale: 1,
    duration: 1500,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__bun-bot",
    topS: 100,
    topF: 83,
    leftS: 60,
    leftF: 58,
    widthS: 38,
    widthF: 44,
    height: 120,
    zIndexS: 1,
    zIndexF: 1,
    rotateS: -12,
    rotateF: 0,
    scale: 1,
    duration: 1500,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__emo-1",
    topS: 110,
    topF: 60,
    leftS: 30,
    leftF: 58,
    widthS: 5,
    widthF: 7,
    height: 70,
    zIndexS: 1,
    zIndexF: 1,
    rotateS: 1,
    rotateF: 27,
    scale: 1,
    duration: 1700,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__emo-2",
    topS: 77,
    topF: 60,
    leftS: 82,
    leftF: 58,
    widthS: 3,
    widthF: 5,
    height: 70,
    zIndexS: 1,
    zIndexF: 1,
    rotateS: 1,
    rotateF: 27,
    scale: 1,
    duration: 1700,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__emo-3",
    topS: 47,
    topF: 60,
    leftS: 78,
    leftF: 58,
    widthS: 5,
    widthF: 7,
    height: 70,
    zIndexS: 1,
    zIndexF: 1,
    rotateS: 1,
    rotateF: 27,
    scale: 1,
    duration: 1700,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }, {
    "class": "burger__emo-4",
    topS: 47,
    topF: 60,
    leftS: 26,
    leftF: 58,
    widthS: 3,
    widthF: 5,
    height: 40,
    zIndexS: 1,
    zIndexF: 1,
    rotateS: 1,
    rotateF: 27,
    scale: 1,
    duration: 1700,
    parent: ".burger",
    ingSel: ".main__ingradient"
  }];
  return animationData;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animationData);

/***/ }),

/***/ "./src/modules/data/calculation-item-data.js":
/*!***************************************************!*\
  !*** ./src/modules/data/calculation-item-data.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function itemCalculationData(dataForVisualization, orderData) {
  var itemCalculationData = [{
    minusBtnSelector: "cutletMinus",
    plusBtnSelector: "cutletPlus",
    countSelector: "cutletCount",
    title: "Cutlet",
    itemSelector: "item__cutlet",
    price: 3,
    time: 4,
    oz: 7,
    kcal: 600,
    dataVis: dataForVisualization,
    dataOrder: orderData,
    imgKey: dataForVisualization.itemImg.cutletKey,
    priceKey: dataForVisualization.sum.cutletSum,
    timeKey: dataForVisualization.time.cutletTime,
    ozKey: dataForVisualization.oz.cutletOz,
    kcalKey: dataForVisualization.kcal.cutletKcal,
    startMargin: -50,
    marginKey: dataForVisualization.margin.cutletMar
  }, {
    minusBtnSelector: "mayoMinus",
    plusBtnSelector: "mayoPlus",
    countSelector: "mayoCount",
    title: "Mayo",
    itemSelector: "item__mayo",
    price: 1,
    time: 0.5,
    oz: 2,
    kcal: 150,
    dataVis: dataForVisualization,
    dataOrder: orderData,
    imgKey: dataForVisualization.itemImg.mayoKey,
    priceKey: dataForVisualization.sum.mayoSum,
    timeKey: dataForVisualization.time.mayoTime,
    ozKey: dataForVisualization.oz.mayoOz,
    kcalKey: dataForVisualization.kcal.mayoKcal,
    startMargin: -10,
    marginKey: dataForVisualization.margin.mayoMar
  }, {
    minusBtnSelector: "onionMinus",
    plusBtnSelector: "onionPlus",
    countSelector: "onionCount",
    title: "Onion",
    itemSelector: "item__onion",
    price: 0.5,
    time: 0.5,
    oz: 1,
    kcal: 40,
    dataVis: dataForVisualization,
    dataOrder: orderData,
    imgKey: dataForVisualization.itemImg.onionKey,
    priceKey: dataForVisualization.sum.onionSum,
    timeKey: dataForVisualization.time.onionTime,
    ozKey: dataForVisualization.oz.onionOz,
    kcalKey: dataForVisualization.kcal.onionKcal,
    startMargin: -10,
    marginKey: dataForVisualization.margin.onionMar
  }, {
    minusBtnSelector: "tomatoMinus",
    plusBtnSelector: "tomatoPlus",
    countSelector: "tomatoCount",
    title: "Tomato",
    itemSelector: "item__tomato",
    price: 1,
    time: 0.5,
    oz: 1,
    kcal: 60,
    dataVis: dataForVisualization,
    dataOrder: orderData,
    imgKey: dataForVisualization.itemImg.tomatoKey,
    priceKey: dataForVisualization.sum.tomatoSum,
    timeKey: dataForVisualization.time.tomatoTime,
    ozKey: dataForVisualization.oz.tomatoOz,
    kcalKey: dataForVisualization.kcal.tomatoKcal,
    startMargin: -10,
    marginKey: dataForVisualization.margin.tomatoMar
  }, {
    minusBtnSelector: "cucumberMinus",
    plusBtnSelector: "cucumberPlus",
    countSelector: "cucumberCount",
    title: "Cucumber",
    itemSelector: "item__cucumber",
    price: 0.5,
    time: 0.5,
    oz: 1,
    kcal: 40,
    dataVis: dataForVisualization,
    dataOrder: orderData,
    imgKey: dataForVisualization.itemImg.cucumberKey,
    priceKey: dataForVisualization.sum.cucumberSum,
    timeKey: dataForVisualization.time.cucumberTime,
    ozKey: dataForVisualization.oz.cucumberOz,
    kcalKey: dataForVisualization.kcal.cucumberKcal,
    startMargin: -10,
    marginKey: dataForVisualization.margin.cucumberMar
  }, {
    minusBtnSelector: "cheeseMinus",
    plusBtnSelector: "cheesePlus",
    countSelector: "cheeseCount",
    title: "Cheese",
    itemSelector: "item__cheese",
    price: 2,
    time: 0.5,
    oz: 2,
    kcal: 150,
    dataVis: dataForVisualization,
    dataOrder: orderData,
    imgKey: dataForVisualization.itemImg.cheeseKey,
    priceKey: dataForVisualization.sum.cheeseSum,
    timeKey: dataForVisualization.time.cheeseTime,
    ozKey: dataForVisualization.oz.cheeseOz,
    kcalKey: dataForVisualization.kcal.cheeseKcal,
    startMargin: -5,
    marginKey: dataForVisualization.margin.cheeseMar
  }, {
    minusBtnSelector: "saladMinus",
    plusBtnSelector: "saladPlus",
    countSelector: "saladCount",
    title: "Salad",
    itemSelector: "item__salad",
    price: 0.5,
    time: 0.5,
    oz: 1,
    kcal: 40,
    dataVis: dataForVisualization,
    dataOrder: orderData,
    imgKey: dataForVisualization.itemImg.saladKey,
    priceKey: dataForVisualization.sum.saladSum,
    timeKey: dataForVisualization.time.saladTime,
    ozKey: dataForVisualization.oz.saladOz,
    kcalKey: dataForVisualization.kcal.saladKcal,
    startMargin: -20,
    marginKey: dataForVisualization.margin.saladMar
  }, {
    minusBtnSelector: "bunMinus",
    plusBtnSelector: "bunPlus",
    countSelector: "bunCount",
    title: "Bun",
    itemSelector: "item__midbun",
    price: 0.5,
    time: 0.5,
    oz: 1,
    kcal: 90,
    dataVis: dataForVisualization,
    dataOrder: orderData,
    imgKey: dataForVisualization.itemImg.bunKey,
    priceKey: dataForVisualization.sum.bunSum,
    timeKey: dataForVisualization.time.bunTime,
    ozKey: dataForVisualization.oz.bunOz,
    kcalKey: dataForVisualization.kcal.bunKcal,
    startMargin: -20,
    marginKey: dataForVisualization.margin.bunMar
  }];
  return itemCalculationData;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCalculationData);

/***/ }),

/***/ "./src/modules/data/ingradiets-menu-data.js":
/*!**************************************************!*\
  !*** ./src/modules/data/ingradiets-menu-data.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_images_bun_middle_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/images/bun_middle.svg */ "./src/images/bun_middle.svg");
/* harmony import */ var _src_images_Type_cheese_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/images/Type=cheese.svg */ "./src/images/Type=cheese.svg");
/* harmony import */ var _src_images_Type_cucumber_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/images/Type=cucumber.png */ "./src/images/Type=cucumber.png");
/* harmony import */ var _src_images_Type_cutlet_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/images/Type=cutlet.svg */ "./src/images/Type=cutlet.svg");
/* harmony import */ var _src_images_Type_mayo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/images/Type=mayo.svg */ "./src/images/Type=mayo.svg");
/* harmony import */ var _src_images_Type_onion_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/images/Type=onion.png */ "./src/images/Type=onion.png");
/* harmony import */ var _src_images_Type_salad_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/images/Type=salad.svg */ "./src/images/Type=salad.svg");
/* harmony import */ var _src_images_Type_tomato_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../src/images/Type=tomato.png */ "./src/images/Type=tomato.png");








function ingradientMenuData() {
  var ingradientMenu = [{
    imgSource: _src_images_Type_cutlet_svg__WEBPACK_IMPORTED_MODULE_3__,
    imgAlt: "cutlet",
    parentSelector: ".main__botside",
    munusButSelector: "cutletMinus",
    plusButSelector: "cutletPlus",
    counterSelector: "cutletCount",
    title: "Cutlet"
  }, {
    imgSource: _src_images_Type_mayo_svg__WEBPACK_IMPORTED_MODULE_4__,
    imgAlt: "mayo",
    parentSelector: ".main__botside",
    munusButSelector: "mayoMinus",
    plusButSelector: "mayoPlus",
    counterSelector: "mayoCount",
    title: "Mayo"
  }, {
    imgSource: _src_images_Type_onion_png__WEBPACK_IMPORTED_MODULE_5__,
    imgAlt: "onion",
    parentSelector: ".main__botside",
    munusButSelector: "onionMinus",
    plusButSelector: "onionPlus",
    counterSelector: "onionCount",
    title: "Onion"
  }, {
    imgSource: _src_images_Type_tomato_png__WEBPACK_IMPORTED_MODULE_7__,
    imgAlt: "tomato",
    parentSelector: ".main__botside",
    munusButSelector: "tomatoMinus",
    plusButSelector: "tomatoPlus",
    counterSelector: "tomatoCount",
    title: "Tomato"
  }, {
    imgSource: _src_images_Type_cucumber_png__WEBPACK_IMPORTED_MODULE_2__,
    imgAlt: "cucumber",
    parentSelector: ".main__botside",
    munusButSelector: "cucumberMinus",
    plusButSelector: "cucumberPlus",
    counterSelector: "cucumberCount",
    title: "Cucumber"
  }, {
    imgSource: _src_images_Type_cheese_svg__WEBPACK_IMPORTED_MODULE_1__,
    imgAlt: "cheese",
    parentSelector: ".main__botside",
    munusButSelector: "cheeseMinus",
    plusButSelector: "cheesePlus",
    counterSelector: "cheeseCount",
    title: "Cheese"
  }, {
    imgSource: _src_images_Type_salad_svg__WEBPACK_IMPORTED_MODULE_6__,
    imgAlt: "salad",
    parentSelector: ".main__botside",
    munusButSelector: "saladMinus",
    plusButSelector: "saladPlus",
    counterSelector: "saladCount",
    title: "Salad"
  }, {
    imgSource: _src_images_bun_middle_svg__WEBPACK_IMPORTED_MODULE_0__,
    imgAlt: "bun",
    parentSelector: ".main__botside",
    munusButSelector: "bunMinus",
    plusButSelector: "bunPlus",
    counterSelector: "bunCount",
    title: "Bun"
  }];
  return ingradientMenu;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ingradientMenuData);

/***/ }),

/***/ "./src/modules/first-page-animat.js":
/*!******************************************!*\
  !*** ./src/modules/first-page-animat.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_animation_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/animation-data */ "./src/modules/data/animation-data.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function firstPageAnimat(mainBtn, firstPageBtn, secondPageBtn) {
  var burgerItem = /*#__PURE__*/function () {
    function burgerItem(cssClass, top, topA, left, leftA, width, widthA, height, zIndex, zIndexA, rotate, rotateA, scale, duration, parentSelector) {
      _classCallCheck(this, burgerItem);
      this.cssClass = cssClass;
      this.top = top;
      this.topA = topA;
      this.left = left;
      this.leftA = leftA;
      this.width = width;
      this.widthA = widthA;
      this.height = height;
      this.zIndex = zIndex;
      this.zIndexA = zIndexA;
      this.rotate = rotate;
      this.rotateA = rotateA;
      this.scale = scale;
      this.duration = duration;
      this.parent = document.querySelector(parentSelector);
      this.renderBurger();
      this.burgerDoStartAni();
      this.switchTo2Page(mainBtn, secondPageBtn);
      this.switchTo1Page();
    }
    _createClass(burgerItem, [{
      key: "burgerPosition",
      value: function burgerPosition(element, top, left, width, height, zIndex, rotate, scale) {
        element.style.cssText = "\n         top: ".concat(top, "%;\n         left: ").concat(left, "%;\n         width: ").concat(width, "%;\n         height: ").concat(height, "px;\n         z-index: ").concat(zIndex, ";\n         transform: translate(-50%, -50%) rotate(").concat(rotate, "deg) scaleX(").concat(scale, ");\n         background-size: 90%;\n         background-position: center;\n         background-repeat: no-repeat;\n         display: block;\n         position: absolute;\n         ");
      }
    }, {
      key: "renderBurger",
      value: function renderBurger() {
        var item = document.createElement("div");
        item.innerHTML = "\n               <div></div>\n            ";
        this.parent.append(item);
        item.classList.add("".concat(this.cssClass));
        this.burgerPosition(item, this.topA, this.leftA, this.widthA, this.height, this.zIndex, this.rotate, this.scale);
      }
    }, {
      key: "burgerDoOpening",
      value: function burgerDoOpening() {
        document.querySelector(".".concat(this.cssClass)).animate([{
          top: "".concat(this.topA, "%"),
          left: "".concat(this.leftA, "%"),
          transform: "translate(-50%, -50%) rotate(".concat(this.rotateA, "deg) scaleX(").concat(this.scale),
          width: "".concat(this.widthA, "%"),
          zIndex: "".concat(this.zIndexA)
        }, {
          top: "".concat(this.top - 5, "%"),
          left: "".concat(this.left, "%"),
          transform: "translate(-50%, -50%) rotate(".concat(this.rotate, "deg) scaleX(").concat(this.scale),
          width: "".concat(this.width + 2, "%"),
          zIndex: "".concat(this.zIndex)
        }], {
          duration: this.duration,
          easing: "ease"
        });
        if (document.querySelector(".".concat(this.cssClass)).classList.contains("closed")) {
          document.querySelector(".".concat(this.cssClass)).classList.remove("closed");
          document.querySelector(".".concat(this.cssClass)).classList.add("opened");
        } else {
          document.querySelector(".".concat(this.cssClass)).classList.add("opened");
        }
      }
    }, {
      key: "burgerDoFolding",
      value: function burgerDoFolding() {
        document.querySelector(".".concat(this.cssClass)).animate([{
          top: "".concat(this.top - 5, "%"),
          left: "".concat(this.left, "%"),
          transform: "translate(-50%, -50%) rotate(".concat(this.rotate, "deg) scaleX(").concat(this.scale),
          width: "".concat(this.width + 2, "%"),
          zIndex: "".concat(this.zIndex)
        }, {
          top: "".concat(this.topA, "%"),
          left: "".concat(this.leftA, "%"),
          transform: "translate(-50%, -50%) rotate(".concat(this.rotateA, "deg) scaleX(").concat(this.scale),
          width: "".concat(this.widthA, "%"),
          zIndex: "".concat(this.zIndexA)
        }], {
          duration: this.duration,
          easing: "ease"
        });
        if (document.querySelector(".".concat(this.cssClass)).classList.contains("opened")) {
          document.querySelector(".".concat(this.cssClass)).classList.remove("opened");
          document.querySelector(".".concat(this.cssClass)).classList.add("closed");
        } else {
          document.querySelector(".".concat(this.cssClass)).classList.add("closed");
        }
      }
    }, {
      key: "burgerDoStartAni",
      value: function burgerDoStartAni() {
        var _this = this;
        var defaultOtherParam = {
          transform: "translate(-50%, -50%) rotate(".concat(this.rotateA, "deg) scaleX(").concat(this.scale),
          width: "".concat(this.widthA, "%"),
          zIndex: "".concat(this.zIndexA)
        };
        var transform = defaultOtherParam.transform,
          width = defaultOtherParam.width,
          zIndex = defaultOtherParam.zIndex;
        document.querySelector(".".concat(this.cssClass)).animate([{
          top: "".concat(this.topA, "%"),
          left: "".concat(this.leftA, "%"),
          transform: transform,
          width: width,
          zIndex: zIndex
        }, {
          top: "".concat(this.topA + 1, "%"),
          left: "".concat(this.leftA + 1, "%"),
          transform: transform,
          width: width,
          zIndex: zIndex
        }, {
          top: "".concat(this.topA - 1, "%"),
          left: "".concat(this.leftA - 1, "%"),
          transform: transform,
          width: width,
          zIndex: zIndex
        }, {
          top: "".concat(this.topA, "%"),
          left: "".concat(this.leftA, "%"),
          transform: transform,
          width: width,
          zIndex: zIndex
        }, {
          top: "".concat(this.topA - 1, "%"),
          left: "".concat(this.leftA + 1, "%"),
          transform: transform,
          width: width,
          zIndex: zIndex
        }, {
          top: "".concat(this.topA + 1, "%"),
          left: "".concat(this.leftA - 1, "%"),
          transform: transform,
          width: width,
          zIndex: zIndex
        }, {
          top: "".concat(this.topA, "%"),
          left: "".concat(this.leftA, "%"),
          transform: transform,
          width: width,
          zIndex: zIndex
        }], {
          duration: 700,
          iterations: 2,
          easing: "linear"
        });
        Promise.all(document.querySelector(".".concat(this.cssClass)).getAnimations().map(function (burgerDoStartAni) {
          return burgerDoStartAni.finished;
        })).then(function () {
          _this.burgerDoOpening();
        });
        this.burgerPosition(document.querySelector(".".concat(this.cssClass)), this.top - 5, this.left, this.width + 2, this.height, this.zIndex, this.rotate, this.scale);
      }
    }, {
      key: "switchTo2Page",
      value: function switchTo2Page(btn1, btn2) {
        var _this2 = this;
        var arr = [];
        arr.push(btn1, btn2);
        arr.forEach(function (e) {
          e.addEventListener("click", _this2.to2.bind(_this2));
        });
      }
    }, {
      key: "to2",
      value: function to2() {
        var _this3 = this;
        firstPageBtn.removeEventListener("click", this.to1.bind(this));
        if (document.querySelector(".".concat(this.cssClass)).classList.contains("opened")) {
          var burgerFolding = this.burgerDoFolding();
          Promise.all(document.querySelector(".".concat(this.cssClass)).getAnimations().map(function (burgerFolding) {
            return burgerFolding.finished;
          })).then(function () {
            _this3.burgerPosition(document.querySelector(".".concat(_this3.cssClass)), _this3.topA, _this3.leftA, _this3.widthA, _this3.height, _this3.zIndexA, _this3.rotateA, _this3.scale);
          });
        }
      }
    }, {
      key: "switchTo1Page",
      value: function switchTo1Page() {
        firstPageBtn.addEventListener("click", this.to1.bind(this));
      }
    }, {
      key: "to1",
      value: function to1() {
        var _this4 = this;
        if (document.querySelector(".".concat(this.cssClass)).classList.contains("closed") && document.querySelectorAll(".main__ingradient")[7].classList.contains("showed")) {
          setTimeout(function () {
            _this4.burgerDoOpening();
            Promise.all(document.querySelector(".".concat(_this4.cssClass)).getAnimations().map(function (burgerOpening) {
              return burgerOpening.finished;
            })).then(function () {
              _this4.burgerPosition(document.querySelector(".".concat(_this4.cssClass)), _this4.top - 5, _this4.left, _this4.width + 2, _this4.height, _this4.zIndex, _this4.rotate, _this4.scale);
            });
          }, 200);
        }
      }
    }]);
    return burgerItem;
  }();
  (0,_data_animation_data__WEBPACK_IMPORTED_MODULE_0__["default"])().forEach(function (item) {
    var keys = Object.keys(item);
    _construct(burgerItem, _toConsumableArray(keys.map(function (key) {
      return item[key];
    })));
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstPageAnimat);

/***/ }),

/***/ "./src/modules/ingradient-menu.js":
/*!****************************************!*\
  !*** ./src/modules/ingradient-menu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_ingradiets_menu_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/ingradiets-menu-data */ "./src/modules/data/ingradiets-menu-data.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ingradientMenu(data) {
  var Ingradiet = /*#__PURE__*/function () {
    function Ingradiet(src, alt, parentSelector, btnIdM, btnIdP, countId, title) {
      _classCallCheck(this, Ingradiet);
      this.src = src;
      this.alt = alt;
      this.parent = document.querySelector(parentSelector);
      this.btnIdM = btnIdM;
      this.btnIdP = btnIdP;
      this.countId = countId;
      this.title = title;
      this.render();
    }
    _createClass(Ingradiet, [{
      key: "render",
      value: function render() {
        var element = document.createElement("div");
        element.innerHTML = "\n                  <div class=\"main__ingradient-inner\">\n                     <img class=\"main__ingradient-img\" src=".concat(this.src, " alt=").concat(this.alt, " \">\n                     <div class=\"main__ingradient-name\">").concat(this.title, "</div>\n                     <div class=\"main__counter\">\n                     <button id=\"").concat(this.btnIdM, "\" class=\"main__counter-minus\"></button>\n                     <div id=\"").concat(this.countId, "\" class=\"main__count\"></div>\n                     <button id=\"").concat(this.btnIdP, "\" class=\"main__counter-plus\"></button>\n                  </div>\n               </div>\n            ");
        this.parent.append(element);
        element.classList.add("main__ingradient");
      }
    }]);
    return Ingradiet;
  }();
  data().forEach(function (item) {
    var keys = Object.keys(item);
    _construct(Ingradiet, _toConsumableArray(keys.map(function (key) {
      return item[key];
    })));
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ingradientMenu);

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "modalP": () => (/* binding */ modalP)
/* harmony export */ });
function modal() {
  var modalButton = document.querySelector(".main__btn-checkout");
  var modalSelector = document.querySelector(".modal");
  var background = document.querySelector(".wrapper");
  function closeModal(modalSelector, background) {
    modalSelector.style.display = "none";
    background.style.filter = "blur(0px)";
  }
  function openModal(modalSelector, background) {
    modalSelector.style.display = "block";
    background.style.filter = "blur(3px)";
  }
  function modal(modalSelector, background) {
    var modalStyle = getComputedStyle(modalSelector);
    modalButton.addEventListener("click", function () {
      openModal(modalSelector, background);
    });
    modalSelector.addEventListener("click", function (e) {
      if (e.target === modalSelector || e.target.getAttribute("data-close") == "") {
        closeModal(modalSelector, background);
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.code === "Escape" && modalStyle.display == "block") {
        closeModal(modalSelector, background);
      }
    });
  }
  modal(modalSelector, background);
}
function modalP() {
  var modalButton = document.querySelector(".header__cta-btn");
  var modalSelector = document.querySelector(".modalp");
  var background = document.querySelector(".wrapper");
  function closeModal(modalSelector, background) {
    modalSelector.style.display = "none";
    background.style.filter = "blur(0px)";
  }
  function openModal(modalSelector, background) {
    modalSelector.style.display = "block";
    background.style.filter = "blur(3px)";
  }
  function modalP(modalSelector, background) {
    var modalStyle = getComputedStyle(modalSelector);
    modalButton.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(modalSelector, background);
    });
    modalSelector.addEventListener("click", function (e) {
      if (e.target === modalSelector || e.target.getAttribute("data-close") == "") {
        closeModal(modalSelector, background);
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.code === "Escape" && modalStyle.display == "block") {
        closeModal(modalSelector, background);
      }
    });
  }
  modalP(modalSelector, background);
}


/***/ }),

/***/ "./src/modules/page-changer.js":
/*!*************************************!*\
  !*** ./src/modules/page-changer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function pageChanger(firstPageBtn, secondPageBtn, wrapper, field, pages, page1, page2, bigBtn) {
  var width = wrapper.offsetWidth - 20;
  var widthAfterSwipe = page1.offsetWidth;
  var offset = 0;
  field.style.width = width * pages.length + "px";
  page2.style.width = width + "px";
  field.style.display = "flex";
  field.style.transition = "0.8s all";
  field.style.transform = "translateX(0px)";
  pages.forEach(function (slide) {
    slide.style.width = width;
  });
  page2.style.display = "none";
  firstPageBtn.classList.add("header__page-changer--active");
  function swipeToSecondPage() {
    if (offset == 0) {
      offset += width;
    } else {
      return;
    }
    field.style.transform = "translateX(-".concat(offset, "px)");
    page1.style.display = "none";
    page2.style.display = "flex";
    page2.style.marginLeft = "".concat(widthAfterSwipe, "px");
    secondPageBtn.classList.add("header__page-changer--active");
    firstPageBtn.classList.remove("header__page-changer--active");
    function itemsOpening() {
      document.querySelectorAll(".main__ingradient").forEach(function (e, i) {
        var timing = i * (100 * (i / 2.5));
        setTimeout(function () {
          setTimeout(function () {
            e.style.opacity = 1;
            e.classList.add("showed");
          }, timing);
        }, 250);
      });
    }
    itemsOpening();
  }
  function swipeToFirstPage() {
    if (offset > 0) {
      offset -= width;
    } else {
      return;
    }
    field.style.transform = "translateX(-".concat(offset, "px)");
    page1.style.display = "flex";
    page2.style.display = "none";
    page2.style.marginLeft = widthAfterSwipe;
    firstPageBtn.classList.add("header__page-changer--active");
    secondPageBtn.classList.remove("header__page-changer--active");
    document.querySelectorAll(".main__ingradient").forEach(function (e) {
      e.style.opacity = 0;
    });
  }
  function handlerInstalligkTo1(btn) {
    btn.addEventListener("click", to1);
  }
  function to1() {
    if (document.querySelectorAll(".main__ingradient")[7].classList.contains("showed")) {
      swipeToFirstPage();
      document.querySelectorAll(".main__ingradient").forEach(function (e) {
        e.classList.remove("showed");
      });
    }
    firstPageBtn.removeEventListener("click", to1);
    handlerInstalligkTo2(bigBtn, secondPageBtn);
  }
  function handlerInstalligkTo2(btn1, btn2) {
    var arr = [];
    arr.push(btn1, btn2);
    arr.forEach(function (e) {
      e.addEventListener("click", to2);
    });
  }
  function to2() {
    setTimeout(function () {
      swipeToSecondPage();
    }, 1000);
    firstPageBtn.removeEventListener("click", to1);
    var arr = [];
    arr.push(bigBtn, secondPageBtn);
    arr.forEach(function (e) {
      e.removeEventListener("click", to2);
    });
    setTimeout(function () {
      handlerInstalligkTo1(firstPageBtn);
    }, 3000);
  }
  handlerInstalligkTo1(firstPageBtn);
  handlerInstalligkTo2(bigBtn, secondPageBtn);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageChanger);

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ui() {
  var topBtns = document.querySelectorAll(".header__page-changer");
  topBtns.forEach(function (elem) {
    elem.onmouseenter = elem.onmouseleave = function (e) {
      var tolerance = 10;
      var left = 0;
      var right = elem.clientWidth;
      var x = e.pageX - elem.offsetLeft;
      if (x - tolerance < left) {
        x = left;
      }
      if (x + tolerance > right) {
        x = right;
      }
      elem.style.setProperty('--x', "".concat(x, "px"));
    };
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/OpenSans-Bold.ttf */ "./src/fonts/OpenSans-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/OpenSans-Regular.ttf */ "./src/fonts/OpenSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/OpenSans-SemiBold.ttf */ "./src/fonts/OpenSans-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/fonts/OpenSans-ExtraBold.ttf */ "./src/fonts/OpenSans-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/phone.svg */ "./src/images/phone.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/backgr.png */ "./src/images/backgr.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/bg2.png */ "./src/images/bg2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/default__land.svg */ "./src/images/default__land.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/gift.svg */ "./src/images/gift.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/divider.png */ "./src/images/divider.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/time.svg */ "./src/images/time.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/oz.svg */ "./src/images/oz.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/kcal.svg */ "./src/images/kcal.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/minus.svg */ "./src/images/minus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/plus.svg */ "./src/images/plus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../images/_.svg */ "./src/images/_.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Type=bun_top.svg */ "./src/images/Type=bun_top.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Type=salad.svg */ "./src/images/Type=salad.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Type=mayo.svg */ "./src/images/Type=mayo.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Type=cucumber.png */ "./src/images/Type=cucumber.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Type=tomato.png */ "./src/images/Type=tomato.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Type=cutlet.svg */ "./src/images/Type=cutlet.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Type=onion.png */ "./src/images/Type=onion.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Type=cheese.svg */ "./src/images/Type=cheese.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Type=bun_bottom.svg */ "./src/images/Type=bun_bottom.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../images/emo1.svg */ "./src/images/emo1.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../images/emo2.svg */ "./src/images/emo2.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../images/emo3.svg */ "./src/images/emo3.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../images/emo4.svg */ "./src/images/emo4.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/Type=cutlet.svg */ "./src/images/Type=cutlet.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/Type=mayo.svg */ "./src/images/Type=mayo.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/Component3_onion.png */ "./src/images/Component3_onion.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/Component2_tomato.png */ "./src/images/Component2_tomato.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/Component3_cucmbers.png */ "./src/images/Component3_cucmbers.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/Type=cheese.svg */ "./src/images/Type=cheese.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/Type=salad.svg */ "./src/images/Type=salad.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/Type=bun_middle.svg */ "./src/images/Type=bun_middle.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/Type=bun_top.svg */ "./src/images/Type=bun_top.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/focus-line.svg */ "./src/images/focus-line.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/close.svg */ "./src/images/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/name.svg */ "./src/images/name.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_41___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/phone-fill.svg */ "./src/images/phone-fill.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_42___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/route-line.svg */ "./src/images/route-line.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_43___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/images/plug.png */ "./src/images/plug.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_31___);
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_32___);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_33___);
var ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_34___);
var ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_35___);
var ___CSS_LOADER_URL_REPLACEMENT_36___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_36___);
var ___CSS_LOADER_URL_REPLACEMENT_37___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_37___);
var ___CSS_LOADER_URL_REPLACEMENT_38___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_38___);
var ___CSS_LOADER_URL_REPLACEMENT_39___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_39___);
var ___CSS_LOADER_URL_REPLACEMENT_40___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_40___);
var ___CSS_LOADER_URL_REPLACEMENT_41___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_41___);
var ___CSS_LOADER_URL_REPLACEMENT_42___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_42___);
var ___CSS_LOADER_URL_REPLACEMENT_43___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_43___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"OpenSans-Bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"OpenSans-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n@font-face {\n  font-family: \"OpenSans-SemiBold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n@font-face {\n  font-family: \"OpenSans-ExtraBold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n.header {\n  position: relative;\n  z-index: 3;\n}\n.header__inner {\n  display: flex;\n  justify-content: space-between;\n}\n.header__leftside {\n  display: flex;\n  align-items: center;\n}\n.header__changer-inner {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 80px;\n  width: 240px;\n}\n.header__page-changer {\n  font-family: OpenSans-Regular;\n  font-size: 16px;\n  line-height: 20px;\n  color: #1F2939;\n  text-decoration: none;\n  display: inline-block;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n}\n.header__page-changer--active {\n  font-family: OpenSans-SemiBold;\n  color: #1F2939;\n}\n.header__rightside {\n  display: flex;\n  align-items: center;\n}\n.header__contact-inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-right: 60px;\n}\n.header__cta-btn {\n  text-decoration: none;\n  display: inline-block;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  width: 142px;\n  height: 32px;\n  background-color: #FFEDED;\n  border-radius: 99px;\n  margin-right: 60px;\n  transition: 0.2s linear;\n}\n.header__cta-btn:hover {\n  background-color: #f9d7d8;\n}\n.header__cta-btn-text {\n  font-family: OpenSans-SemiBold;\n  font-size: 16px;\n  line-height: 20px;\n  color: #FF4D4F;\n}\n#e54547 .header__cta-btn-text::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  margin-right: 6px;\n}\n.header__phone {\n  text-decoration: none;\n  border: 0;\n  color: inherit;\n  font-family: inherit;\n  font-family: OpenSans-SemiBold;\n  font-size: 16px;\n  line-height: 20px;\n  color: #1F2939;\n}\n.header__page-changer {\n  position: relative;\n  transition: opacity 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);\n}\n.header__page-changer::after {\n  --scale: 0;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 100%;\n  height: 3px;\n  background: linear-gradient(135deg, #FF9293, #473AA6);\n  transform: scaleX(var(--scale));\n  transform-origin: var(--x) 50%;\n  transition: transform 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);\n}\n.header__page-changer:hover {\n  opacity: 1;\n}\n.header__page-changer:hover::after {\n  --scale: 1;\n}\n\n@keyframes ani {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes delani {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.main {\n  flex-grow: 1;\n  z-index: 1;\n}\n.main__wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.main__inner {\n  width: 100vw;\n  height: 520px;\n}\n.main__inner-pg1 {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n.main__title {\n  margin: auto;\n  padding-bottom: 30px;\n  max-width: 245px;\n  font-family: OpenSans-Bold;\n  font-size: 72px;\n  line-height: 80px;\n  color: #1F2939;\n}\n.main__content {\n  width: 100%;\n  display: flex;\n  position: relative;\n}\n.main__backgr-img {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-repeat: no-repeat;\n  background-size: 46%;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: -10%;\n  left: 37%;\n}\n.main__btn {\n  position: absolute;\n  z-index: 289;\n  left: 22%;\n  top: 55%;\n  transform: translate(-50%, -50%);\n  text-decoration: none;\n  display: inline-block;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  width: 180px;\n  height: 180px;\n  border-radius: 90px;\n  background: #5243C2;\n  box-shadow: 0 0 0 0 #5243C2;\n  animation: pulse 3s infinite;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 #5243C2;\n  }\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 10px rgba(255, 121, 63, 0);\n  }\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(255, 121, 63, 0);\n  }\n}\n.main__btn-text {\n  font-family: OpenSans-ExtraBold;\n  font-size: 24px;\n  line-height: 30px;\n  color: #FFFFFF;\n  width: 98px;\n  height: 60px;\n  text-align: center;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n.main__burger {\n  padding-left: 100px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.main__inner-pg2 {\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n.main__bg-img2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 30%;\n  top: -22%;\n  left: -1%;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n.main__topside {\n  display: flex;\n  justify-content: space-between;\n  height: 340px;\n  position: relative;\n  top: 6%;\n}\n.main__title-2 {\n  padding-top: 50px;\n  max-width: 360px;\n  font-family: OpenSans-Bold;\n  font-size: 72px;\n  line-height: 80px;\n  color: #1F2939;\n}\n.main__content-wrapper {\n  display: flex;\n}\n.main__const {\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  flex-flow: column-reverse;\n}\n.main__const-inner {\n  position: relative;\n  width: 100%;\n  height: 135px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  display: block;\n  margin: 0 auto;\n}\n.main__const-inner-catchup {\n  position: absolute;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100%;\n  top: 20%;\n  left: 40%;\n  animation: ani 0.4s forwards;\n}\n.main__const-inner-catchup-delete {\n  animation: delani 0.2s forwards;\n}\n@keyframes aniBackLeft {\n  0% {\n    opacity: 1;\n    left: 0%;\n  }\n  100% {\n    opacity: 0;\n    left: -30%;\n  }\n}\n@keyframes aniBackRight {\n  0% {\n    opacity: 1;\n    left: 0%;\n  }\n  100% {\n    opacity: 0;\n    left: 30%;\n  }\n}\n.main__const-inner .for_start_ani {\n  animation: ani 0.2s forwards;\n}\n.main__const-inner .for_del_ani_left {\n  animation: aniBackLeft 0.2s forwards;\n}\n.main__info {\n  width: 405px;\n}\n.main__info {\n  display: flex;\n  flex-direction: column;\n}\n.main__info-title {\n  margin: 0;\n  height: 120px;\n  font-family: OpenSans-Semibold;\n  font-size: 36px;\n  line-height: 49px;\n  color: #1F2939;\n}\n.main__info-title::after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n}\n.main__info-sum {\n  display: flex;\n  justify-content: space-between;\n}\n.main__total {\n  font-family: OpenSans-ExtraBold;\n  font-size: 36px;\n  line-height: 49px;\n  color: #5243C2;\n}\n.main__btn-checkout {\n  text-decoration: none;\n  display: inline-block;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  width: 192px;\n  height: 52px;\n  background: #5243C2;\n  border-radius: 99px;\n  transition: 0.2s linear;\n}\n.main__btn-checkout:hover {\n  background-color: #37299e;\n}\n.main__btn-checkout-text {\n  font-family: OpenSans-Semibold;\n  font-size: 16px;\n  line-height: 20px;\n  color: #F5F5FF;\n}\n.main__about-gift {\n  font-family: OpenSans-Regular;\n}\n.main__reason-sum {\n  color: #FF4D4F;\n  font-family: OpenSans-Semibold;\n}\n.main__extra-info {\n  display: flex;\n  justify-content: space-between;\n  width: 405px;\n  height: 64px;\n  background: #F5F5FF;\n  border-radius: 32px;\n  align-items: center;\n}\n.main__time {\n  font-family: OpenSans-SemiBold;\n  font-size: 14px;\n  line-height: 20px;\n  color: #1F2939;\n  padding-left: 56px;\n  width: 124px;\n  position: relative;\n}\n.main__time::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n  margin-right: 8px;\n  height: 32px;\n  position: absolute;\n  top: -25%;\n  left: 12%;\n}\n.main__capacity {\n  font-family: OpenSans-SemiBold;\n  font-size: 14px;\n  line-height: 20px;\n  color: #1F2939;\n  padding-left: 50px;\n  position: relative;\n  width: 124px;\n}\n.main__capacity::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n  margin-right: 8px;\n  position: absolute;\n  top: -25%;\n  left: 5%;\n}\n.main__kcal {\n  font-family: OpenSans-SemiBold;\n  font-size: 14px;\n  line-height: 20px;\n  color: #1F2939;\n  padding-left: 40px;\n  position: relative;\n  width: 124px;\n}\n.main__kcal::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n  margin-right: 8px;\n  position: absolute;\n  top: -25%;\n  left: -1%;\n}\n.main__botside {\n  margin: 0 auto;\n  height: 180px;\n  width: 1344px;\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  top: 80%;\n  left: 4%;\n}\n.main__ingradient {\n  height: 180px;\n  width: 140px;\n  border: 1px solid #F0F7FA;\n  border-radius: 32px;\n  opacity: 0;\n  transition: all 0.2s ease-out;\n}\n.main__ingradient-inner {\n  padding: 24px 18px;\n  height: 180px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main__ingradient-img {\n  width: 104px;\n  height: 50px;\n}\n.main__ingradient-name {\n  text-align: center;\n  font-family: OpenSans-SemiBold;\n  font-size: 14px;\n  line-height: 20px;\n  color: #1F2939;\n}\n.main__counter {\n  display: flex;\n  justify-content: space-between;\n  width: 104px;\n}\n.main__counter-minus {\n  text-decoration: none;\n  display: inline-block;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  margin: auto 0;\n  width: 28px;\n  height: 28px;\n  background: #F5F5FF;\n  border-radius: 99px;\n  position: relative;\n}\n.main__counter-minus::after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n  position: absolute;\n  top: 4px;\n  left: 8px;\n}\n.main__counter-plus {\n  text-decoration: none;\n  display: inline-block;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  margin: auto 0;\n  width: 28px;\n  height: 28px;\n  background: #F5F5FF;\n  border-radius: 99px;\n  position: relative;\n}\n.main__counter-plus::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n  position: absolute;\n  top: 7px;\n  left: 9px;\n}\n.main__count {\n  font-family: OpenSans-SemiBold;\n  font-size: 20px;\n  line-height: 32px;\n  color: #1F2939;\n}\n\n@media (max-width: 1700px) {\n  .main__botside {\n    top: 70%;\n  }\n}\n@media (max-width: 1600px) {\n  .main__botside {\n    top: 70%;\n  }\n}\n.footer {\n  position: relative;\n  z-index: 2;\n}\n.footer__inner {\n  display: flex;\n  justify-content: space-between;\n}\n.footer__leftside {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.footer__company-info {\n  font-family: OpenSans-Regular;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: center;\n  color: #949BA6;\n}\n.footer__links {\n  margin-left: 8px;\n  font-family: OpenSans-Regular;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: center;\n  color: #5243C2;\n}\n.footer__links-policy {\n  text-decoration: none;\n  border: 0;\n  color: inherit;\n  font-family: inherit;\n}\n.footer__links-terms {\n  text-decoration: none;\n  border: 0;\n  color: inherit;\n  font-family: inherit;\n}\n.footer__links-terms:before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\n  margin-right: 7px;\n  margin-left: 7px;\n  margin-bottom: px;\n}\n.footer__rightside {\n  display: flex;\n}\n.footer__payments {\n  margin-left: 8px;\n}\n\n.burger {\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n.burger__bun-top {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");\n}\n.burger__salad-top {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ");\n}\n.burger__salad-bot {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ");\n}\n.burger__mayo-top {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\n}\n.burger__mayo-bot {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\n}\n.burger__cucumber-1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ");\n}\n.burger__cucumber-2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ");\n}\n.burger__cucumber-3 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ");\n}\n.burger__cucumber-4 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ");\n}\n.burger__tomato-1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\n}\n.burger__tomato-2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\n}\n.burger__tomato-3 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\n}\n.burger__tomato-4 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\n}\n.burger__cutlet {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ");\n}\n.burger__onion-1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\n}\n.burger__onion-2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\n}\n.burger__onion-3 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\n}\n.burger__onion-4 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\n}\n.burger__onion-5 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\n}\n.burger__onion-6 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\n}\n.burger__cheese {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\n}\n.burger__bun-bot {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ");\n}\n.burger__emo-1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ");\n}\n.burger__emo-2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ");\n}\n.burger__emo-3 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ");\n}\n.burger__emo-4 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ");\n}\n\n.item__cutlet {\n  width: 100%;\n  height: 130px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n  transition: all 0.1s ease-in-out;\n}\n\n@keyframes ani {\n  0% {\n    opacity: 0.8;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes aniBackLeft {\n  0% {\n    opacity: 1;\n    left: 0%;\n  }\n  100% {\n    opacity: 0;\n    left: -30%;\n  }\n}\n@keyframes aniBackRight {\n  0% {\n    opacity: 1;\n    left: 0%;\n  }\n  100% {\n    opacity: 0;\n    left: 30%;\n  }\n}\n.for_start_ani {\n  animation: ani 0.2s forwards;\n}\n\n.for_del_ani_left {\n  animation: aniBackLeft 0.2s forwards;\n}\n\n.for_del_ani_right {\n  animation: aniBackRight 0.2s forwards;\n}\n\n.item__mayo {\n  width: 100%;\n  height: 100px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n  transition: all 0.1s ease-in-out;\n}\n\n.item__onion {\n  width: 100%;\n  height: 100px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n  transition: all 0.1s ease-in-out;\n}\n\n.item__tomato {\n  width: 100%;\n  height: 100px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n  transition: all 0.1s ease-in-out;\n}\n\n.item__cucumber {\n  width: 100%;\n  height: 100px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_33___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n  transition: all 0.1s ease-in-out;\n}\n\n.item__cheese {\n  width: 100%;\n  height: 100px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_34___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n  transition: all 0.1s ease-in-out;\n}\n\n.item__salad {\n  width: 100%;\n  height: 100px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_35___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n  transition: all 0.1s ease-in-out;\n}\n\n.item__midbun {\n  width: 100%;\n  height: 100px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_36___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n  transition: all 0.1s ease-in-out;\n}\n\n.item__topbun {\n  width: 100%;\n  height: 190px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_37___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  display: block;\n  position: absolute;\n  transition: all 0.25s ease-in-out;\n  z-index: 10;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(82, 67, 194, 0.9);\n}\n.modal__dialog {\n  width: 600px;\n  margin-left: -300px;\n  height: 300px;\n  margin-top: -180px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.modal__content {\n  width: 100%;\n  height: 100%;\n  padding: 16px;\n  background-color: #fff;\n  border-radius: 20px;\n}\n.modal__form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n}\n.modal__topside {\n  display: flex;\n  justify-content: space-between;\n}\n.modal__title {\n  font-family: OpenSans-SemiBold;\n  color: #1F2939;\n  font-size: 20px;\n  line-height: 27px;\n  padding-left: 26px;\n}\n.modal__title::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_38___ + ");\n  position: absolute;\n  top: 5.6%;\n  left: 2%;\n}\n.modal__closex {\n  text-decoration: none;\n  display: inline-block;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n}\n.modal__closex::after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_39___ + ");\n  position: absolute;\n  top: 6%;\n  left: 95%;\n}\n.modal__midside {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  height: 120px;\n}\n.modal__name {\n  width: 280px;\n  height: 52px;\n  border: 2px solid #F5F5FF;\n  border-radius: 15px;\n  position: relative;\n}\n.modal__name::after {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_40___ + ");\n  background-repeat: no-repeat;\n  background-size: 25px 25px;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  content: \"\";\n  position: absolute;\n  top: 13px;\n  left: 12px;\n}\n.modal__name-text {\n  font-family: OpenSans-Regular;\n  color: #949BA6;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  position: absolute;\n  top: 7px;\n  left: 44px;\n}\n.modal__name-input {\n  position: absolute;\n  top: 25px;\n  left: 44px;\n  border: none;\n  background: none;\n  outline: none;\n  padding: 0;\n  font-family: OpenSans-SemiBold;\n  font-size: 14px;\n  color: #1F2939;\n}\n.modal__number {\n  width: 280px;\n  height: 52px;\n  border: 2px solid #F5F5FF;\n  border-radius: 15px;\n  position: relative;\n}\n.modal__number::after {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_41___ + ");\n  background-repeat: no-repeat;\n  background-size: 25px 25px;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  content: \"\";\n  position: absolute;\n  top: 13px;\n  left: 12px;\n}\n.modal__number-text {\n  font-family: OpenSans-Regular;\n  color: #949BA6;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  position: absolute;\n  top: 7px;\n  left: 44px;\n}\n.modal__number-input {\n  position: absolute;\n  top: 25px;\n  left: 44px;\n  border: none;\n  background: none;\n  outline: none;\n  padding: 0;\n  font-family: OpenSans-SemiBold;\n  font-size: 14px;\n  color: #1F2939;\n}\n.modal__address {\n  width: 280px;\n  height: 52px;\n  border: 2px solid #F5F5FF;\n  border-radius: 15px;\n  position: relative;\n}\n.modal__address::after {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_42___ + ");\n  background-repeat: no-repeat;\n  background-size: 25px 25px;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  content: \"\";\n  position: absolute;\n  top: 13px;\n  left: 12px;\n}\n.modal__address-text {\n  font-family: OpenSans-Regular;\n  color: #949BA6;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  position: absolute;\n  top: 7px;\n  left: 44px;\n}\n.modal__address-input {\n  position: absolute;\n  top: 25px;\n  left: 44px;\n  border: none;\n  background: none;\n  outline: none;\n  padding: 0;\n  font-family: OpenSans-SemiBold;\n  font-size: 14px;\n  color: #1F2939;\n}\n.modal__time {\n  width: 280px;\n  height: 52px;\n  border: 2px solid #F5F5FF;\n  border-radius: 15px;\n  position: relative;\n}\n.modal__time-text {\n  font-family: OpenSans-Regular;\n  color: #949BA6;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  position: absolute;\n  top: 7px;\n  left: 14px;\n}\n.modal__time-input {\n  position: absolute;\n  top: 25px;\n  left: 14px;\n  border: none;\n  background: none;\n  outline: none;\n  padding: 0;\n  font-family: OpenSans-SemiBold;\n  font-size: 14px;\n  color: #1F2939;\n}\n.modal__botside {\n  display: flex;\n  justify-content: flex-end;\n}\n.modal__cancel {\n  width: 120px;\n  height: 52px;\n  margin-right: 16px;\n  text-decoration: none;\n  display: inline-block;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  font-family: OpenSans-SemiBold;\n  font-size: 16px;\n  background-color: #F5F5FF;\n  color: #5243C2;\n  border-radius: 30px;\n  transition: 0.2s linear;\n}\n.modal__cancel:hover {\n  background-color: #FFC8C8;\n}\n.modal__sub {\n  width: 120px;\n  height: 52px;\n  text-decoration: none;\n  display: inline-block;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  font-family: OpenSans-SemiBold;\n  font-size: 16px;\n  color: #F5F5FF;\n  background-color: #5243C2;\n  border-radius: 30px;\n  transition: 0.2s linear;\n}\n.modal__sub:hover {\n  background-color: #37299e;\n}\n\n.modalp {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(82, 67, 194, 0.9);\n}\n.modalp__dialog-p {\n  width: 600px;\n  margin-left: -300px;\n  height: 220px;\n  margin-top: -180px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.modalp__content-p {\n  width: 100%;\n  height: 100%;\n  padding: 16px;\n  background-color: #fff;\n  border-radius: 20px;\n}\n.modalp__form-p {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n}\n.modalp__topside-p {\n  display: flex;\n  justify-content: space-between;\n}\n.modalp__title-p {\n  font-family: OpenSans-SemiBold;\n  color: #1F2939;\n  font-size: 20px;\n  line-height: 27px;\n  padding-left: 26px;\n}\n.modalp__title-p::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_38___ + ");\n  position: absolute;\n  top: 8%;\n  left: 2%;\n}\n.modalp__closex-p {\n  text-decoration: none;\n  display: inline-block;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n}\n.modalp__closex-p::after {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_39___ + ");\n  position: absolute;\n  top: 6%;\n  left: 95%;\n}\n.modalp__midside-p {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  height: 40px;\n}\n.modalp__name-p {\n  width: 280px;\n  height: 52px;\n  border: 2px solid #F5F5FF;\n  border-radius: 15px;\n  position: relative;\n}\n.modalp__name-p::after {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_40___ + ");\n  background-repeat: no-repeat;\n  background-size: 25px 25px;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  content: \"\";\n  position: absolute;\n  top: 13px;\n  left: 12px;\n}\n.modalp__name-text-p {\n  font-family: OpenSans-Regular;\n  color: #949BA6;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  position: absolute;\n  top: 7px;\n  left: 44px;\n}\n.modalp__name-input-p {\n  position: absolute;\n  top: 25px;\n  left: 44px;\n  border: none;\n  background: none;\n  outline: none;\n  padding: 0;\n  font-family: OpenSans-SemiBold;\n  font-size: 14px;\n  color: #1F2939;\n}\n.modalp__number-p {\n  width: 280px;\n  height: 52px;\n  border: 2px solid #F5F5FF;\n  border-radius: 15px;\n  position: relative;\n}\n.modalp__number-p::after {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_41___ + ");\n  background-repeat: no-repeat;\n  background-size: 25px 25px;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  content: \"\";\n  position: absolute;\n  top: 13px;\n  left: 12px;\n}\n.modalp__number-text-p {\n  font-family: OpenSans-Regular;\n  color: #949BA6;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  position: absolute;\n  top: 7px;\n  left: 44px;\n}\n.modalp__number-input-p {\n  position: absolute;\n  top: 25px;\n  left: 44px;\n  border: none;\n  background: none;\n  outline: none;\n  padding: 0;\n  font-family: OpenSans-SemiBold;\n  font-size: 14px;\n  color: #1F2939;\n}\n.modalp__botside-p {\n  display: flex;\n  justify-content: flex-end;\n}\n.modalp__cancel-p {\n  width: 120px;\n  height: 52px;\n  margin-right: 16px;\n  text-decoration: none;\n  display: inline-block;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  font-family: OpenSans-SemiBold;\n  font-size: 16px;\n  background-color: #F5F5FF;\n  color: #5243C2;\n  border-radius: 30px;\n  transition: 0.2s linear;\n}\n.modalp__cancel-p:hover {\n  background-color: #FFC8C8;\n}\n.modalp__sub-p {\n  width: 120px;\n  height: 52px;\n  text-decoration: none;\n  display: inline-block;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  font-family: OpenSans-SemiBold;\n  font-size: 16px;\n  color: #F5F5FF;\n  background-color: #5243C2;\n  border-radius: 30px;\n  transition: 0.2s linear;\n}\n.modalp__sub-p-t {\n  position: relative;\n  top: 14px;\n  left: 31px;\n}\n.modalp__sub-p:hover {\n  background-color: #37299e;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.container {\n  max-width: 1544px;\n  margin: auto;\n  padding: 15px;\n  height: 100%;\n}\n\n.wrapper {\n  height: 97vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  transition: 0.1s;\n}\n\n.plug {\n  display: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_43___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 40%;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.preloader {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  background: #fff;\n  z-index: 1001;\n}\n\n.preloader__image {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.loaded_hiding .preloader {\n  transition: 0.3s opacity;\n  opacity: 0;\n}\n\n.loaded .preloader {\n  display: none;\n}\n\n@media (max-width: 1500px) {\n  .wrapper {\n    display: none;\n  }\n  .plug {\n    display: block;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/_fonts.scss","webpack://./src/styles/index.scss","webpack://./src/styles/header.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/main.scss","webpack://./src/styles/footer.scss","webpack://./src/styles/burger.scss","webpack://./src/styles/constructor.scss","webpack://./src/styles/modal.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n   font-family: \"OpenSans-Bold\";\r\n   src: url(\"/src/fonts/OpenSans-Bold.ttf\");\r\n}\r\n\r\n@font-face {\r\n   font-family: \"OpenSans-Regular\";\r\n   src: url(\"/src/fonts/OpenSans-Regular.ttf\");\r\n}\r\n\r\n@font-face {\r\n   font-family: \"OpenSans-SemiBold\";\r\n   src: url(\"/src/fonts/OpenSans-SemiBold.ttf\");\r\n}\r\n\r\n@font-face {\r\n   font-family: \"OpenSans-ExtraBold\";\r\n   src: url(\"/src/fonts/OpenSans-ExtraBold.ttf\");\r\n}","@import \"fonts.scss\";\r\n@import \"mixins.scss\";\r\n@import \"header.scss\";\r\n@import \"main.scss\";\r\n@import \"footer.scss\";\r\n@import \"burger.scss\";\r\n@import \"constructor.scss\";\r\n@import \"modal.scss\";\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n   box-sizing: border-box;\r\n}\r\n\r\nimg {\r\n   max-width: 100%;\r\n}\r\n\r\n\r\n\r\n.container {\r\n   max-width: 1544px;\r\n   margin: auto;\r\n   padding: 15px;\r\n   height: 100%;\r\n}\r\n\r\n.wrapper {\r\n   height: 97vh;\r\n   display: flex;\r\n   flex-direction: column;\r\n   justify-content: space-between;\r\n   transition: 0.1s;\r\n}\r\n\r\n.plug {\r\n   display: none;\r\n   background-image: url(/src/images/plug.png);\r\n   background-position: center;\r\n   background-repeat: no-repeat;\r\n   background-size: 40%;\r\n   width: 100%;\r\n   height: 100%;\r\n   position: absolute;\r\n   top: 50%;\r\n   left: 50%;\r\n   transform: translate(-50%, -50%);\r\n}\r\n\r\n.preloader {\r\n   position: fixed;\r\n   left: 0;\r\n   top: 0;\r\n   right: 0;\r\n   bottom: 0;\r\n   overflow: hidden;\r\n   background: #fff;\r\n   z-index: 1001;\r\n}\r\n\r\n.preloader__image {\r\n   position: absolute;\r\n   top: 50%;\r\n   left: 50%;\r\n   transform: translate(-50%, -50%);\r\n}\r\n\r\n.loaded_hiding .preloader {\r\n   transition: 0.3s opacity;\r\n   opacity: 0;\r\n}\r\n\r\n.loaded .preloader {\r\n   display: none;\r\n}\r\n\r\n@media (max-width: 1500px) {\r\n   .wrapper {\r\n      display: none;\r\n   }\r\n\r\n   .plug {\r\n      display: block;\r\n\r\n   }\r\n}",".header {\r\n   position: relative;\r\n   z-index: 3;\r\n\r\n   &__inner {\r\n      display: flex;\r\n      justify-content: space-between;\r\n   }\r\n\r\n   &__leftside {\r\n      display: flex;\r\n      align-items: center;\r\n   }\r\n\r\n   &__changer-inner {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      margin-left: 80px;\r\n      width: 240px;\r\n   }\r\n\r\n   &__page-changer {\r\n      font-family: OpenSans-Regular;\r\n      font-size: 16px;\r\n      line-height: 20px;\r\n      color: #1F2939;\r\n      @include reset-button;\r\n   }\r\n\r\n   &__page-changer--active {\r\n      font-family: OpenSans-SemiBold;\r\n      color: #1F2939;\r\n   }\r\n\r\n   &__rightside {\r\n      display: flex;\r\n      align-items: center;\r\n   }\r\n\r\n   &__contact-inner {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      margin-right: 60px;\r\n   }\r\n\r\n   &__cta-btn {\r\n      @include reset-button;\r\n      width: 142px;\r\n      height: 32px;\r\n      background-color: #FFEDED;\r\n      border-radius: 99px;\r\n      margin-right: 60px;\r\n      transition: 0.2s linear;\r\n   }\r\n\r\n   &__cta-btn:hover {\r\n      background-color: #f9d7d8;\r\n   }\r\n\r\n   &__cta-btn-text {\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 16px;\r\n      line-height: 20px;\r\n      color: #FF4D4F;\r\n\r\n      #e54547 &::before {\r\n         content: url(../images/phone.svg);\r\n         margin-right: 6px;\r\n      }\r\n   }\r\n\r\n   &__phone {\r\n      @include reset-link;\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 16px;\r\n      line-height: 20px;\r\n      color: #1F2939;\r\n   }\r\n\r\n   &__page-changer {\r\n      position: relative;\r\n\r\n      transition: opacity .3s cubic-bezier(.51, .92, .24, 1);\r\n\r\n      &::after {\r\n         --scale: 0;\r\n\r\n         content: '';\r\n         position: absolute;\r\n         left: 0;\r\n         right: 0;\r\n         top: 100%;\r\n         height: 3px;\r\n         background: linear-gradient(135deg, #FF9293, #473AA6);\r\n         transform: scaleX(var(--scale));\r\n         transform-origin: var(--x) 50%;\r\n         transition: transform .3s cubic-bezier(.51, .92, .24, 1);\r\n      }\r\n\r\n      &:hover {\r\n         opacity: 1;\r\n      }\r\n\r\n      &:hover::after {\r\n         --scale: 1;\r\n      }\r\n   }\r\n}","// Сброс блочной модели\r\n@mixin reset-model {\r\n   padding: 0;\r\n   margin: 0;\r\n}\r\n\r\n// Сброс списка\r\n@mixin reset-list {\r\n   list-style: none;\r\n   @include reset-model();\r\n}\r\n\r\n// Сброс ссылки\r\n@mixin reset-link {\r\n   text-decoration: none;\r\n   border: 0;\r\n   color: inherit;\r\n   font-family: inherit;\r\n}\r\n\r\n// Сброс кнопки\r\n@mixin reset-button {\r\n   text-decoration: none;\r\n   display: inline-block;\r\n   background-color: transparent;\r\n   border: none;\r\n   padding: 0;\r\n   cursor: pointer;\r\n}\r\n\r\n@mixin сentering-xy() {\r\n   position: absolute;\r\n   left: 50%;\r\n   top: 50%;\r\n   transform: translate(-50%, -50%);\r\n}\r\n\r\n@mixin сentering-x() {\r\n   position: absolute;\r\n   left: 50%;\r\n   transform: translateX(-50%);\r\n}\r\n\r\n@mixin сentering-y() {\r\n   position: absolute;\r\n   top: 50%;\r\n   transform: translateY(-50%);\r\n}","@keyframes ani {\r\n   0% {\r\n      opacity: 0;\r\n   }\r\n\r\n   100% {\r\n      opacity: 1\r\n   }\r\n}\r\n\r\n@keyframes delani {\r\n   0% {\r\n      opacity: 1\r\n   }\r\n\r\n   100% {\r\n      opacity: 0\r\n   }\r\n}\r\n\r\n.main {\r\n   flex-grow: 1;\r\n   z-index: 1;\r\n\r\n   &__wrapper {\r\n      width: 100%;\r\n      height: 100%;\r\n      display: flex;\r\n      align-items: center;\r\n   }\r\n\r\n   &__inner {\r\n      width: 100vw;\r\n      height: 520px;\r\n\r\n   }\r\n\r\n   &__inner-pg1 {\r\n      display: flex;\r\n      height: 100%;\r\n      width: 100%;\r\n\r\n   }\r\n\r\n   &__title {\r\n      margin: auto;\r\n      padding-bottom: 30px;\r\n      max-width: 245px;\r\n      font-family: OpenSans-Bold;\r\n      font-size: 72px;\r\n      line-height: 80px;\r\n      color: #1F2939;\r\n   }\r\n\r\n   &__content {\r\n\r\n\r\n      width: 100%;\r\n      display: flex;\r\n      position: relative;\r\n   }\r\n\r\n   &__backgr-img {\r\n      background-image: url(../images/backgr.png);\r\n      background-repeat: no-repeat;\r\n\r\n      background-size: 46%;\r\n\r\n      width: 100%;\r\n      height: 100%;\r\n      position: absolute;\r\n      top: -10%;\r\n      left: 37%;\r\n\r\n   }\r\n\r\n   &__btn {\r\n      position: absolute;\r\n      z-index: 289;\r\n      left: 22%;\r\n      top: 55%;\r\n      transform: translate(-50%, -50%);\r\n      @include reset-button;\r\n      width: 180px;\r\n      height: 180px;\r\n      border-radius: 90px;\r\n\r\n      background: #5243C2;\r\n      box-shadow: 0 0 0 0 #5243C2;\r\n      animation: pulse 3s infinite;\r\n   }\r\n\r\n   @keyframes pulse {\r\n      0% {\r\n         transform: scale(0.95);\r\n         box-shadow: 0 0 0 0 #5243C2;\r\n      }\r\n\r\n      70% {\r\n         transform: scale(1);\r\n         box-shadow: 0 0 0 10px rgba(255, 121, 63, 0);\r\n      }\r\n\r\n      100% {\r\n         transform: scale(0.95);\r\n         box-shadow: 0 0 0 0 rgba(255, 121, 63, 0);\r\n      }\r\n\r\n   }\r\n\r\n   &__btn-text {\r\n      font-family: OpenSans-ExtraBold;\r\n      font-size: 24px;\r\n      line-height: 30px;\r\n      color: #FFFFFF;\r\n\r\n      width: 98px;\r\n      height: 60px;\r\n\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n\r\n      margin: 0 auto;\r\n   }\r\n\r\n   &__burger {\r\n      padding-left: 100px;\r\n      width: 100%;\r\n      display: flex;\r\n      align-items: center;\r\n   }\r\n\r\n   ////////////////////////////////////////////////////\r\n   &__inner-pg2 {\r\n\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n      height: 100%;\r\n      width: 100%;\r\n      position: relative;\r\n\r\n   }\r\n\r\n   &__bg-img2 {\r\n      background-image: url(/src/images/bg2.png);\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n      background-size: 30%;\r\n      top: -22%;\r\n      left: -1%;\r\n      height: 100%;\r\n      width: 100%;\r\n      position: absolute;\r\n   }\r\n\r\n   &__topside {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      height: 340px;\r\n      position: relative;\r\n      top: 6%;\r\n   }\r\n\r\n   &__title-2 {\r\n\r\n      padding-top: 50px;\r\n      max-width: 360px;\r\n      font-family: OpenSans-Bold;\r\n      font-size: 72px;\r\n      line-height: 80px;\r\n      color: #1F2939;\r\n   }\r\n\r\n   &__content-wrapper {\r\n      display: flex;\r\n      // margin-right: 200px;\r\n\r\n\r\n   }\r\n\r\n   &__const {\r\n      width: 500px;\r\n\r\n      display: flex;\r\n      flex-direction: column;\r\n      flex-flow: column-reverse;\r\n   }\r\n\r\n   &__const-inner {\r\n      position: relative;\r\n      width: 100%;\r\n      height: 135px;\r\n      background-image: url(/src/images/default__land.svg);\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n      display: block;\r\n      margin: 0 auto;\r\n\r\n\r\n\r\n      &-catchup {\r\n         position: absolute;\r\n         background-image: url(/src/images/gift.svg);\r\n         background-position: center;\r\n         background-repeat: no-repeat;\r\n         width: 100%;\r\n         height: 100%;\r\n         top: 20%;\r\n         left: 40%;\r\n         animation: ani 0.4s forwards;\r\n\r\n         &-delete{\r\n            animation: delani 0.2s forwards;\r\n         }\r\n      }\r\n\r\n\r\n\r\n\r\n      @keyframes aniBackLeft {\r\n         0% {\r\n            opacity: 1;\r\n            left: 0%\r\n         }\r\n\r\n         100% {\r\n            opacity: 0;\r\n            left: -30%\r\n         }\r\n      }\r\n\r\n      @keyframes aniBackRight {\r\n         0% {\r\n            opacity: 1;\r\n            left: 0%\r\n         }\r\n\r\n         100% {\r\n            opacity: 0;\r\n            left: +30%\r\n         }\r\n      }\r\n\r\n      .for_start_ani {\r\n         animation: ani 0.2s forwards;\r\n      }\r\n\r\n      .for_del_ani_left {\r\n         animation: aniBackLeft 0.2s forwards;\r\n      }\r\n\r\n   }\r\n\r\n   &__info {\r\n      width: 405px;\r\n   }\r\n\r\n   ////////////////////////////////////////////////////\r\n\r\n   &__info {\r\n      display: flex;\r\n      flex-direction: column;\r\n   }\r\n\r\n   &__info-title {\r\n      margin: 0;\r\n      height: 120px;\r\n      font-family: OpenSans-Semibold;\r\n      font-size: 36px;\r\n      line-height: 49px;\r\n      color: #1F2939;\r\n\r\n      &::after {\r\n         content: url(/src/images/divider.png);\r\n\r\n      }\r\n   }\r\n\r\n   &__info-sum {\r\n      display: flex;\r\n      justify-content: space-between;\r\n   }\r\n\r\n   &__total {\r\n      font-family: OpenSans-ExtraBold;\r\n      font-size: 36px;\r\n      line-height: 49px;\r\n      color: #5243C2;\r\n   }\r\n\r\n   &__btn-checkout {\r\n      @include reset-button;\r\n      width: 192px;\r\n      height: 52px;\r\n      background: #5243C2;\r\n      border-radius: 99px;\r\n      transition: 0.2s linear;\r\n   }\r\n\r\n   &__btn-checkout:hover {\r\n      background-color: #37299e;\r\n   }\r\n\r\n   &__btn-checkout-text {\r\n      font-family: OpenSans-Semibold;\r\n      font-size: 16px;\r\n      line-height: 20px;\r\n      color: #F5F5FF;\r\n   }\r\n\r\n   &__about-gift {\r\n      font-family: OpenSans-Regular;\r\n   }\r\n\r\n   &__reason-sum {\r\n      color: #FF4D4F;\r\n      font-family: OpenSans-Semibold;\r\n   }\r\n\r\n   &__extra-info {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      width: 405px;\r\n      height: 64px;\r\n      background: #F5F5FF;\r\n      border-radius: 32px;\r\n      align-items: center;\r\n   }\r\n\r\n   &__time {\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 14px;\r\n      line-height: 20px;\r\n      color: #1F2939;\r\n      padding-left: 56px;\r\n      width: 124px;\r\n      position: relative;\r\n\r\n      &::before {\r\n         content: url(/src/images/time.svg);\r\n         margin-right: 8px;\r\n         height: 32px;\r\n         position: absolute;\r\n         top: -25%;\r\n         left: 12%;\r\n      }\r\n   }\r\n\r\n   &__capacity {\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 14px;\r\n      line-height: 20px;\r\n      color: #1F2939;\r\n      padding-left: 50px;\r\n      position: relative;\r\n      width: 124px;\r\n\r\n      &::before {\r\n         content: url(/src/images/oz.svg);\r\n         margin-right: 8px;\r\n         position: absolute;\r\n         top: -25%;\r\n         left: 5%;\r\n      }\r\n   }\r\n\r\n   &__kcal {\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 14px;\r\n      line-height: 20px;\r\n      color: #1F2939;\r\n      padding-left: 40px;\r\n      position: relative;\r\n      width: 124px;\r\n\r\n      &::before {\r\n         content: url(/src/images/kcal.svg);\r\n         margin-right: 8px;\r\n         position: absolute;\r\n         top: -25%;\r\n         left: -1%;\r\n      }\r\n   }\r\n\r\n\r\n   &__botside {\r\n      margin: 0 auto;\r\n      height: 180px;\r\n      width: 1344px;\r\n      display: flex;\r\n      justify-content: space-between;\r\n      position: absolute;\r\n      top: 80%;\r\n      left: 4%;\r\n\r\n\r\n   }\r\n\r\n   &__ingradient {\r\n      height: 180px;\r\n      width: 140px;\r\n      border: 1px solid #F0F7FA;\r\n      border-radius: 32px;\r\n      opacity: 0;\r\n      transition: all 0.2s ease-out;\r\n      // background-color: rgb(0, 255, 89, 0.2);\r\n      // background-color: rgb(255, 17, 0, 0.4);\r\n   }\r\n\r\n   &__ingradient-inner {\r\n      padding: 24px 18px;\r\n      height: 180px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n   }\r\n\r\n   &__ingradient-img {\r\n      width: 104px;\r\n      height: 50px;\r\n   }\r\n\r\n   &__ingradient-name {\r\n      text-align: center;\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 14px;\r\n      line-height: 20px;\r\n      color: #1F2939;\r\n   }\r\n\r\n   &__counter {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      width: 104px;\r\n   }\r\n\r\n   &__counter-minus {\r\n      @include reset-button;\r\n      margin: auto 0;\r\n      width: 28px;\r\n      height: 28px;\r\n      background: #F5F5FF;\r\n      border-radius: 99px;\r\n      position: relative;\r\n\r\n      &::after {\r\n         content: url(/src/images/minus.svg);\r\n         position: absolute;\r\n         top: 4px;\r\n         left: 8px;\r\n      }\r\n   }\r\n\r\n   &__counter-plus {\r\n      @include reset-button;\r\n      margin: auto 0;\r\n      width: 28px;\r\n      height: 28px;\r\n      background: #F5F5FF;\r\n      border-radius: 99px;\r\n      position: relative;\r\n\r\n      &::before {\r\n         content: url(/src/images/plus.svg);\r\n         position: absolute;\r\n         top: 7px;\r\n         left: 9px;\r\n      }\r\n   }\r\n\r\n   &__count {\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 20px;\r\n      line-height: 32px;\r\n      color: #1F2939;\r\n   }\r\n\r\n\r\n\r\n}\r\n\r\n@media (max-width: 1700px) {\r\n   .main__botside {\r\n      top: 70%;\r\n   }\r\n}\r\n\r\n@media (max-width: 1600px) {\r\n   .main__botside {\r\n      top: 70%;\r\n   }\r\n}",".footer {\r\n   position: relative;\r\n   z-index: 2;\r\n\r\n   &__inner {\r\n      display: flex;\r\n      justify-content: space-between;\r\n   }\r\n\r\n   &__leftside {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n   }\r\n\r\n   &__company-info {\r\n      font-family: OpenSans-Regular;\r\n      font-size: 12px;\r\n      line-height: 16px;\r\n      text-align: center;\r\n      color: #949BA6;\r\n   }\r\n\r\n   &__links {\r\n      margin-left: 8px;\r\n      font-family: OpenSans-Regular;\r\n      font-size: 12px;\r\n      line-height: 16px;\r\n      text-align: center;\r\n      color: #5243C2;\r\n   }\r\n\r\n   &__links-policy {\r\n      @include reset-link;\r\n   }\r\n\r\n   &__links-terms {\r\n      @include reset-link;\r\n\r\n      &:before {\r\n         content: url(../images/_.svg);\r\n         margin-right: 7px;\r\n         margin-left: 7px;\r\n         margin-bottom: px;\r\n      }\r\n   }\r\n\r\n   &__rightside {\r\n      display: flex;\r\n   }\r\n\r\n   &__payments {\r\n      margin-left: 8px;\r\n   }\r\n}",".burger {\r\n   height: 100%;\r\n   width: 100%;\r\n   position: relative;\r\n\r\n\r\n   &__bun-top {\r\n      background-image: url(../images/Type=bun_top.svg);\r\n\r\n   }\r\n\r\n   &__salad-top {\r\n      background-image: url(../images/Type=salad.svg);\r\n\r\n   }\r\n\r\n   &__salad-bot {\r\n      background-image: url(../images/Type=salad.svg);\r\n\r\n   }\r\n\r\n   &__mayo-top {\r\n      background-image: url(../images/Type=mayo.svg);\r\n   }\r\n\r\n   &__mayo-bot {\r\n      background-image: url(../images/Type=mayo.svg);\r\n   }\r\n\r\n\r\n   &__cucumber-1 {\r\n      background-image: url(../images/Type=cucumber.png);\r\n   }\r\n\r\n   &__cucumber-2 {\r\n      background-image: url(../images/Type=cucumber.png);\r\n   }\r\n\r\n   &__cucumber-3 {\r\n      background-image: url(../images/Type=cucumber.png);\r\n   }\r\n\r\n   &__cucumber-4 {\r\n      background-image: url(../images/Type=cucumber.png);\r\n   }\r\n\r\n\r\n   &__tomato-1 {\r\n      background-image: url(../images/Type=tomato.png);\r\n   }\r\n\r\n   &__tomato-2 {\r\n      background-image: url(../images/Type=tomato.png);\r\n   }\r\n\r\n   &__tomato-3 {\r\n      background-image: url(../images/Type=tomato.png);\r\n   }\r\n\r\n   &__tomato-4 {\r\n      background-image: url(../images/Type=tomato.png);\r\n   }\r\n\r\n   &__cutlet {\r\n      background-image: url(../images/Type=cutlet.svg);\r\n   }\r\n\r\n   &__onion-1 {\r\n      background-image: url(../images/Type=onion.png);\r\n   }\r\n\r\n   &__onion-2 {\r\n      background-image: url(../images/Type=onion.png);\r\n   }\r\n\r\n   &__onion-3 {\r\n      background-image: url(../images/Type=onion.png);\r\n   }\r\n\r\n   &__onion-4 {\r\n      background-image: url(../images/Type=onion.png);\r\n   }\r\n\r\n   &__onion-5 {\r\n      background-image: url(../images/Type=onion.png);\r\n   }\r\n\r\n   &__onion-6 {\r\n      background-image: url(../images/Type=onion.png);\r\n   }\r\n\r\n   &__cheese {\r\n      background-image: url(../images/Type=cheese.svg);\r\n   }\r\n\r\n   &__bun-bot {\r\n      background-image: url(../images/Type=bun_bottom.svg);\r\n   }\r\n\r\n   &__emo-1 {\r\n      background-image: url(../images/emo1.svg);\r\n   }\r\n\r\n   &__emo-2 {\r\n      background-image: url(../images/emo2.svg);\r\n   }\r\n\r\n   &__emo-3 {\r\n      background-image: url(../images/emo3.svg);\r\n   }\r\n\r\n   &__emo-4 {\r\n      background-image: url(../images/emo4.svg);\r\n   }\r\n}",".item__cutlet {\r\n      width: 100%;\r\n      height: 130px;\r\n      background-image: url(/src/images/Type=cutlet.svg);\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n      display: block;\r\n      position: absolute;\r\n      transition: all 0.1s ease-in-out;\r\n\r\n\r\n}\r\n\r\n@keyframes ani {\r\n      0% {\r\n            opacity: 0.8;\r\n      }\r\n\r\n      100% {\r\n            opacity: 1;\r\n      }\r\n}\r\n\r\n@keyframes aniBackLeft {\r\n      0% {\r\n            opacity: 1;\r\n            left: 0%\r\n      }\r\n\r\n      100% {\r\n            opacity: 0;\r\n            left: -30%\r\n      }\r\n}\r\n\r\n@keyframes aniBackRight {\r\n      0% {\r\n            opacity: 1;\r\n            left: 0%\r\n      }\r\n\r\n      100% {\r\n            opacity: 0;\r\n            left: +30%\r\n      }\r\n}\r\n\r\n.for_start_ani {\r\n      animation: ani 0.2s forwards;\r\n}\r\n\r\n.for_del_ani_left {\r\n      animation: aniBackLeft 0.2s forwards;\r\n}\r\n\r\n.for_del_ani_right {\r\n      animation: aniBackRight 0.2s forwards;\r\n}\r\n\r\n.item__mayo {\r\n      width: 100%;\r\n      height: 100px;\r\n      background-image: url(/src/images/Type=mayo.svg);\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n      display: block;\r\n      position: absolute;\r\n      transition: all 0.1s ease-in-out;\r\n\r\n}\r\n\r\n.item__onion {\r\n      width: 100%;\r\n      height: 100px;\r\n      background-image: url(/src/images/Component3_onion.png);\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n      display: block;\r\n      position: absolute;\r\n      transition: all 0.1s ease-in-out;\r\n\r\n}\r\n\r\n.item__tomato {\r\n      width: 100%;\r\n      height: 100px;\r\n      background-image: url(/src/images/Component2_tomato.png);\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n      display: block;\r\n      position: absolute;\r\n      transition: all 0.1s ease-in-out;\r\n\r\n}\r\n\r\n.item__cucumber {\r\n      width: 100%;\r\n      height: 100px;\r\n      background-image: url(/src/images/Component3_cucmbers.png);\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n      display: block;\r\n      position: absolute;\r\n      transition: all 0.1s ease-in-out;\r\n\r\n}\r\n\r\n.item__cheese {\r\n      width: 100%;\r\n      height: 100px;\r\n      background-image: url(/src/images/Type=cheese.svg);\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n      display: block;\r\n      position: absolute;\r\n      transition: all 0.1s ease-in-out;\r\n\r\n}\r\n\r\n.item__salad {\r\n      width: 100%;\r\n      height: 100px;\r\n      background-image: url(/src/images/Type=salad.svg);\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n      display: block;\r\n      position: absolute;\r\n      transition: all 0.1s ease-in-out;\r\n\r\n}\r\n\r\n.item__midbun {\r\n      width: 100%;\r\n      height: 100px;\r\n      background-image: url(/src/images/Type=bun_middle.svg);\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n      display: block;\r\n      position: absolute;\r\n      transition: all 0.1s ease-in-out;\r\n\r\n}\r\n\r\n.item__topbun {\r\n      width: 100%;\r\n      height: 190px;\r\n      background-image: url(/src/images/Type=bun_top.svg);\r\n      background-position: center;\r\n      background-repeat: no-repeat;\r\n      display: block;\r\n      position: absolute;\r\n      transition: all 0.25s ease-in-out;\r\n      z-index: 10;\r\n      // animation:  topBunStart 0.3s forwards;\r\n}",".modal {\r\n   position: fixed;\r\n   top: 0;\r\n   left: 0;\r\n   z-index: 1050;\r\n   display: none;\r\n   width: 100%;\r\n   height: 100%;\r\n   overflow: hidden;\r\n   background-color: rgba(82, 67, 194, .9);\r\n\r\n\r\n   &__dialog {\r\n      width: 600px;\r\n      margin-left: -300px;\r\n      height: 300px;\r\n      margin-top: -180px;\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n   }\r\n\r\n   &__content {\r\n      width: 100%;\r\n      height: 100%;\r\n      padding: 16px;\r\n      background-color: #fff;\r\n      border-radius: 20px;\r\n   }\r\n\r\n   &__form {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n      width: 100%;\r\n      height: 100%;\r\n   }\r\n\r\n   &__topside {\r\n      display: flex;\r\n      justify-content: space-between;\r\n   }\r\n\r\n   &__title {\r\n      font-family: OpenSans-SemiBold;\r\n      color: #1F2939;\r\n      font-size: 20px;\r\n      line-height: 27px;\r\n      padding-left: 26px;\r\n\r\n\r\n      &::before {\r\n         content: url(/src/images/focus-line.svg);\r\n         position: absolute;\r\n         top: 5.6%;\r\n         left: 2%;\r\n\r\n      }\r\n   }\r\n\r\n   &__closex {\r\n      @include reset-button;\r\n\r\n      &::after {\r\n         content: url(/src/images/close.svg);\r\n         position: absolute;\r\n         top: 6%;\r\n         left: 95%;\r\n      }\r\n   }\r\n\r\n   &__midside {\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      justify-content: space-between;\r\n      height: 120px;\r\n   }\r\n\r\n   &__name {\r\n      width: 280px;\r\n      height: 52px;\r\n      border: 2px solid #F5F5FF;\r\n      border-radius: 15px;\r\n      position: relative;\r\n\r\n      &::after {\r\n         background-image: url(/src/images/name.svg);\r\n         background-repeat: no-repeat;\r\n         background-size: 25px 25px;\r\n         display: inline-block;\r\n         width: 30px;\r\n         height: 30px;\r\n         content: \"\";\r\n         position: absolute;\r\n         top: 13px;\r\n         left: 12px;\r\n      }\r\n   }\r\n\r\n   &__name-text {\r\n      font-family: OpenSans-Regular;\r\n      color: #949BA6;\r\n      font-weight: 400;\r\n      font-size: 12px;\r\n      line-height: 16px;\r\n      position: absolute;\r\n      top: 7px;\r\n      left: 44px;\r\n\r\n   }\r\n\r\n   &__name-input {\r\n      position: absolute;\r\n      top: 25px;\r\n      left: 44px;\r\n      border: none;\r\n      background: none;\r\n      outline: none;\r\n      padding: 0;\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 14px;\r\n      color: #1F2939;\r\n   }\r\n\r\n   &__number {\r\n      width: 280px;\r\n      height: 52px;\r\n      border: 2px solid #F5F5FF;\r\n      border-radius: 15px;\r\n      position: relative;\r\n\r\n      &::after {\r\n         background-image: url(/src/images/phone-fill.svg);\r\n         background-repeat: no-repeat;\r\n         background-size: 25px 25px;\r\n         display: inline-block;\r\n         width: 30px;\r\n         height: 30px;\r\n         content: \"\";\r\n         position: absolute;\r\n         top: 13px;\r\n         left: 12px;\r\n      }\r\n   }\r\n\r\n   &__number-text {\r\n      font-family: OpenSans-Regular;\r\n      color: #949BA6;\r\n      font-weight: 400;\r\n      font-size: 12px;\r\n      line-height: 16px;\r\n      position: absolute;\r\n      top: 7px;\r\n      left: 44px;\r\n   }\r\n\r\n   &__number-input {\r\n      position: absolute;\r\n      top: 25px;\r\n      left: 44px;\r\n      border: none;\r\n      background: none;\r\n      outline: none;\r\n      padding: 0;\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 14px;\r\n      color: #1F2939;\r\n   }\r\n\r\n   &__address {\r\n      width: 280px;\r\n      height: 52px;\r\n      border: 2px solid #F5F5FF;\r\n      border-radius: 15px;\r\n      position: relative;\r\n\r\n      &::after {\r\n         background-image: url(/src/images/route-line.svg);\r\n         background-repeat: no-repeat;\r\n         background-size: 25px 25px;\r\n         display: inline-block;\r\n         width: 30px;\r\n         height: 30px;\r\n         content: \"\";\r\n         position: absolute;\r\n         top: 13px;\r\n         left: 12px;\r\n      }\r\n   }\r\n\r\n   &__address-text {\r\n      font-family: OpenSans-Regular;\r\n      color: #949BA6;\r\n      font-weight: 400;\r\n      font-size: 12px;\r\n      line-height: 16px;\r\n      position: absolute;\r\n      top: 7px;\r\n      left: 44px;\r\n   }\r\n\r\n   &__address-input {\r\n      position: absolute;\r\n      top: 25px;\r\n      left: 44px;\r\n      border: none;\r\n      background: none;\r\n      outline: none;\r\n      padding: 0;\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 14px;\r\n      color: #1F2939;\r\n   }\r\n\r\n   &__time {\r\n      width: 280px;\r\n      height: 52px;\r\n      border: 2px solid #F5F5FF;\r\n      border-radius: 15px;\r\n      position: relative;\r\n   }\r\n\r\n   &__time-text {\r\n      font-family: OpenSans-Regular;\r\n      color: #949BA6;\r\n      font-weight: 400;\r\n      font-size: 12px;\r\n      line-height: 16px;\r\n      position: absolute;\r\n      top: 7px;\r\n      left: 14px;\r\n   }\r\n\r\n   &__time-input {\r\n      position: absolute;\r\n      top: 25px;\r\n      left: 14px;\r\n      border: none;\r\n      background: none;\r\n      outline: none;\r\n      padding: 0;\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 14px;\r\n      color: #1F2939;\r\n   }\r\n\r\n   &__botside {\r\n      display: flex;\r\n      justify-content: flex-end;\r\n   }\r\n\r\n   &__cancel {\r\n      width: 120px;\r\n      height: 52px;\r\n      margin-right: 16px;\r\n      @include reset-button;\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 16px;\r\n      background-color: #F5F5FF;\r\n      color: #5243C2;\r\n      ;\r\n      border-radius: 30px;\r\n      transition: 0.2s linear;\r\n\r\n   }\r\n\r\n   &__cancel:hover {\r\n      background-color: #FFC8C8;\r\n   }\r\n\r\n   &__sub {\r\n      width: 120px;\r\n      height: 52px;\r\n      @include reset-button;\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 16px;\r\n      color: #F5F5FF;\r\n      background-color: #5243C2;\r\n      border-radius: 30px;\r\n      transition: 0.2s linear;\r\n   }\r\n\r\n   &__sub:hover {\r\n      background-color: #37299e;\r\n   }\r\n\r\n}\r\n\r\n.modalp {\r\n   position: fixed;\r\n   top: 0;\r\n   left: 0;\r\n   z-index: 1050;\r\n   display: none;\r\n   width: 100%;\r\n   height: 100%;\r\n   overflow: hidden;\r\n   background-color: rgba(82, 67, 194, .9);\r\n\r\n\r\n   &__dialog-p {\r\n      width: 600px;\r\n      margin-left: -300px;\r\n      height: 220px;\r\n      margin-top: -180px;\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n   }\r\n\r\n   &__content-p {\r\n      width: 100%;\r\n      height: 100%;\r\n      padding: 16px;\r\n      background-color: #fff;\r\n      border-radius: 20px;\r\n   }\r\n\r\n   &__form-p {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n      width: 100%;\r\n      height: 100%;\r\n   }\r\n\r\n   &__topside-p {\r\n      display: flex;\r\n      justify-content: space-between;\r\n   }\r\n\r\n   &__title-p {\r\n      font-family: OpenSans-SemiBold;\r\n      color: #1F2939;\r\n      font-size: 20px;\r\n      line-height: 27px;\r\n      padding-left: 26px;\r\n\r\n\r\n      &::before {\r\n         content: url(/src/images/focus-line.svg);\r\n         position: absolute;\r\n         top: 8%;\r\n         left: 2%;\r\n\r\n      }\r\n   }\r\n\r\n   &__closex-p {\r\n      @include reset-button;\r\n\r\n      &::after {\r\n         content: url(/src/images/close.svg);\r\n         position: absolute;\r\n         top: 6%;\r\n         left: 95%;\r\n      }\r\n   }\r\n\r\n   &__midside-p {\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      justify-content: space-between;\r\n      height: 40px;\r\n   }\r\n\r\n   &__name-p {\r\n      width: 280px;\r\n      height: 52px;\r\n      border: 2px solid #F5F5FF;\r\n      border-radius: 15px;\r\n      position: relative;\r\n\r\n      &::after {\r\n         background-image: url(/src/images/name.svg);\r\n         background-repeat: no-repeat;\r\n         background-size: 25px 25px;\r\n         display: inline-block;\r\n         width: 30px;\r\n         height: 30px;\r\n         content: \"\";\r\n         position: absolute;\r\n         top: 13px;\r\n         left: 12px;\r\n      }\r\n   }\r\n\r\n   &__name-text-p {\r\n      font-family: OpenSans-Regular;\r\n      color: #949BA6;\r\n      font-weight: 400;\r\n      font-size: 12px;\r\n      line-height: 16px;\r\n      position: absolute;\r\n      top: 7px;\r\n      left: 44px;\r\n\r\n   }\r\n\r\n   &__name-input-p {\r\n      position: absolute;\r\n      top: 25px;\r\n      left: 44px;\r\n      border: none;\r\n      background: none;\r\n      outline: none;\r\n      padding: 0;\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 14px;\r\n      color: #1F2939;\r\n   }\r\n\r\n   &__number-p {\r\n      width: 280px;\r\n      height: 52px;\r\n      border: 2px solid #F5F5FF;\r\n      border-radius: 15px;\r\n      position: relative;\r\n\r\n      &::after {\r\n         background-image: url(/src/images/phone-fill.svg);\r\n         background-repeat: no-repeat;\r\n         background-size: 25px 25px;\r\n         display: inline-block;\r\n         width: 30px;\r\n         height: 30px;\r\n         content: \"\";\r\n         position: absolute;\r\n         top: 13px;\r\n         left: 12px;\r\n      }\r\n   }\r\n\r\n   &__number-text-p {\r\n      font-family: OpenSans-Regular;\r\n      color: #949BA6;\r\n      font-weight: 400;\r\n      font-size: 12px;\r\n      line-height: 16px;\r\n      position: absolute;\r\n      top: 7px;\r\n      left: 44px;\r\n   }\r\n\r\n   &__number-input-p {\r\n      position: absolute;\r\n      top: 25px;\r\n      left: 44px;\r\n      border: none;\r\n      background: none;\r\n      outline: none;\r\n      padding: 0;\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 14px;\r\n      color: #1F2939;\r\n   }\r\n\r\n   &__botside-p {\r\n      display: flex;\r\n      justify-content: flex-end;\r\n   }\r\n\r\n   &__cancel-p {\r\n      width: 120px;\r\n      height: 52px;\r\n      margin-right: 16px;\r\n      @include reset-button;\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 16px;\r\n      background-color: #F5F5FF;\r\n      color: #5243C2;\r\n      border-radius: 30px;\r\n      transition: 0.2s linear;\r\n   }\r\n\r\n   &__cancel-p:hover {\r\n      background-color: #FFC8C8;\r\n   }\r\n\r\n   &__sub-p {\r\n      width: 120px;\r\n      height: 52px;\r\n      @include reset-button;\r\n      font-family: OpenSans-SemiBold;\r\n      font-size: 16px;\r\n      color: #F5F5FF;\r\n      background-color: #5243C2;\r\n      border-radius: 30px;\r\n      transition: 0.2s linear;\r\n\r\n      &-t {\r\n         position: relative;\r\n         top: 14px;\r\n         left: 31px;\r\n      }\r\n   }\r\n\r\n   &__sub-p:hover {\r\n      background-color: #37299e;\r\n   }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/OpenSans-Bold.ttf":
/*!*************************************!*\
  !*** ./src/fonts/OpenSans-Bold.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a0fe34bea92d4e1a84d6.ttf";

/***/ }),

/***/ "./src/fonts/OpenSans-ExtraBold.ttf":
/*!******************************************!*\
  !*** ./src/fonts/OpenSans-ExtraBold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f3f77b66062bde625834.ttf";

/***/ }),

/***/ "./src/fonts/OpenSans-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/OpenSans-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/57cd57a648021fa1c396.ttf";

/***/ }),

/***/ "./src/fonts/OpenSans-SemiBold.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/OpenSans-SemiBold.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2b370b191e5562dadc78.ttf";

/***/ }),

/***/ "./src/images/Component2_tomato.png":
/*!******************************************!*\
  !*** ./src/images/Component2_tomato.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7ede14a71e440527d9f0.png";

/***/ }),

/***/ "./src/images/Component3_cucmbers.png":
/*!********************************************!*\
  !*** ./src/images/Component3_cucmbers.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f14889f3e71f32295ddf.png";

/***/ }),

/***/ "./src/images/Component3_onion.png":
/*!*****************************************!*\
  !*** ./src/images/Component3_onion.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fbdd820b1e4220e71cd8.png";

/***/ }),

/***/ "./src/images/Type=bun_bottom.svg":
/*!****************************************!*\
  !*** ./src/images/Type=bun_bottom.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bd0d5ac5d1450ef2472c.svg";

/***/ }),

/***/ "./src/images/Type=bun_middle.svg":
/*!****************************************!*\
  !*** ./src/images/Type=bun_middle.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/de6a3de25e889ef45533.svg";

/***/ }),

/***/ "./src/images/Type=bun_top.svg":
/*!*************************************!*\
  !*** ./src/images/Type=bun_top.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/73a4f100d8b22109a148.svg";

/***/ }),

/***/ "./src/images/Type=cheese.svg":
/*!************************************!*\
  !*** ./src/images/Type=cheese.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a42957e936181375a24b.svg";

/***/ }),

/***/ "./src/images/Type=cucumber.png":
/*!**************************************!*\
  !*** ./src/images/Type=cucumber.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/dcaead8cb08d45a1dcd2.png";

/***/ }),

/***/ "./src/images/Type=cutlet.svg":
/*!************************************!*\
  !*** ./src/images/Type=cutlet.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ed50f5cddd3113f70676.svg";

/***/ }),

/***/ "./src/images/Type=mayo.svg":
/*!**********************************!*\
  !*** ./src/images/Type=mayo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/44ef7765142a60e7f03e.svg";

/***/ }),

/***/ "./src/images/Type=onion.png":
/*!***********************************!*\
  !*** ./src/images/Type=onion.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/893bb093428334e7dcd2.png";

/***/ }),

/***/ "./src/images/Type=salad.svg":
/*!***********************************!*\
  !*** ./src/images/Type=salad.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/541448cd381809a0b0c6.svg";

/***/ }),

/***/ "./src/images/Type=tomato.png":
/*!************************************!*\
  !*** ./src/images/Type=tomato.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/23393dc83f6da1c49c84.png";

/***/ }),

/***/ "./src/images/_.svg":
/*!**************************!*\
  !*** ./src/images/_.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/b004c7c75c17c378784c.svg";

/***/ }),

/***/ "./src/images/backgr.png":
/*!*******************************!*\
  !*** ./src/images/backgr.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1c4ebcb299193cea5325.png";

/***/ }),

/***/ "./src/images/bg2.png":
/*!****************************!*\
  !*** ./src/images/bg2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e7dbd46d9f51237133ef.png";

/***/ }),

/***/ "./src/images/bun_middle.svg":
/*!***********************************!*\
  !*** ./src/images/bun_middle.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/db5041cd769bc7c82dda.svg";

/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/b041ab8a6a99feca2f98.svg";

/***/ }),

/***/ "./src/images/default__land.svg":
/*!**************************************!*\
  !*** ./src/images/default__land.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/76e24c3ac53edeb87f4a.svg";

/***/ }),

/***/ "./src/images/divider.png":
/*!********************************!*\
  !*** ./src/images/divider.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1c99549a829d837744e4.png";

/***/ }),

/***/ "./src/images/emo1.svg":
/*!*****************************!*\
  !*** ./src/images/emo1.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/9d6b0fb05d7cf3ed39ce.svg";

/***/ }),

/***/ "./src/images/emo2.svg":
/*!*****************************!*\
  !*** ./src/images/emo2.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/0247f017d4ea99700743.svg";

/***/ }),

/***/ "./src/images/emo3.svg":
/*!*****************************!*\
  !*** ./src/images/emo3.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c47cb3827d84c7179e8c.svg";

/***/ }),

/***/ "./src/images/emo4.svg":
/*!*****************************!*\
  !*** ./src/images/emo4.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/11ebcab55ccd6aa6e4da.svg";

/***/ }),

/***/ "./src/images/focus-line.svg":
/*!***********************************!*\
  !*** ./src/images/focus-line.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1ba68c5e47b549f64491.svg";

/***/ }),

/***/ "./src/images/gift.svg":
/*!*****************************!*\
  !*** ./src/images/gift.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f9ecbdb8ad50157d5697.svg";

/***/ }),

/***/ "./src/images/kcal.svg":
/*!*****************************!*\
  !*** ./src/images/kcal.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/6a527694f94f334415a9.svg";

/***/ }),

/***/ "./src/images/minus.svg":
/*!******************************!*\
  !*** ./src/images/minus.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/49c5964294a1bf0d98e6.svg";

/***/ }),

/***/ "./src/images/name.svg":
/*!*****************************!*\
  !*** ./src/images/name.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fd606ee59d517d97ba49.svg";

/***/ }),

/***/ "./src/images/oz.svg":
/*!***************************!*\
  !*** ./src/images/oz.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a43054ed7fdbfdd48636.svg";

/***/ }),

/***/ "./src/images/phone-fill.svg":
/*!***********************************!*\
  !*** ./src/images/phone-fill.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cfd562ec4541949d473b.svg";

/***/ }),

/***/ "./src/images/phone.svg":
/*!******************************!*\
  !*** ./src/images/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c071cdbe18f496730a89.svg";

/***/ }),

/***/ "./src/images/plug.png":
/*!*****************************!*\
  !*** ./src/images/plug.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/defb1df3a263ab6dafb9.png";

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/64fcd8995756df642faa.svg";

/***/ }),

/***/ "./src/images/route-line.svg":
/*!***********************************!*\
  !*** ./src/images/route-line.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d42ef62f7e2b393c99b7.svg";

/***/ }),

/***/ "./src/images/time.svg":
/*!*****************************!*\
  !*** ./src/images/time.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1e36e4ff1f99177f74aa.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/modules/modal.js");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");
/* harmony import */ var _modules_burger_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/burger-constructor */ "./src/modules/burger-constructor.js");
/* harmony import */ var _modules_page_changer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/page-changer */ "./src/modules/page-changer.js");
/* harmony import */ var _modules_first_page_animat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/first-page-animat */ "./src/modules/first-page-animat.js");
/* harmony import */ var _modules_ingradient_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ingradient-menu */ "./src/modules/ingradient-menu.js");
/* harmony import */ var _modules_data_ingradiets_menu_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/data/ingradiets-menu-data */ "./src/modules/data/ingradiets-menu-data.js");
/* harmony import */ var _modules_data_calculation_item_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/data/calculation-item-data */ "./src/modules/data/calculation-item-data.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");









var dataForVisualization = {
  itemImg: {
    cutletKey: [],
    mayoKey: [],
    onionKey: [],
    tomatoKey: [],
    cucumberKey: [],
    cheeseKey: [],
    saladKey: [],
    bunKey: []
  },
  margin: {
    cutletMar: [],
    mayoMar: [],
    onionMar: [],
    tomatoMar: [],
    cucumberMar: [],
    cheeseMar: [],
    saladMar: [],
    bunMar: []
  },
  sum: {
    cutletSum: [],
    mayoSum: [],
    onionSum: [],
    tomatoSum: [],
    cucumberSum: [],
    cheeseSum: [],
    saladSum: [],
    bunSum: []
  },
  time: {
    cutletTime: [],
    mayoTime: [],
    onionTime: [],
    tomatoTime: [],
    cucumberTime: [],
    cheeseTime: [],
    saladTime: [],
    bunTime: []
  },
  oz: {
    cutletOz: [],
    mayoOz: [],
    onionOz: [],
    tomatoOz: [],
    cucumberOz: [],
    cheeseOz: [],
    saladOz: [],
    bunOz: []
  },
  kcal: {
    cutletKcal: [],
    mayoKcal: [],
    onionKcal: [],
    tomatoKcal: [],
    cucumberKcal: [],
    cheeseKcal: [],
    saladKcal: [],
    bunKcal: []
  }
};
var orderData = {
  recipe: [],
  sum: [0],
  time: [0],
  oz: [0],
  kcal: [0]
};
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
};
window.addEventListener("DOMContentLoaded", function () {
  document.body.style.overflow = "hidden";
  var firstPageBtn = document.querySelector("#first-page-btn");
  var secondPageBtn = document.querySelector("#second-page-btn");
  var wrapper = document.querySelector(".main__wrapper");
  var field = document.querySelector(".main__inner");
  var pages = document.querySelectorAll(".forslide");
  var page1 = document.querySelector(".main__inner-pg1");
  var page2 = document.querySelector(".main__inner-pg2");
  var bigBtn = document.querySelector(".main__btn");
  (0,_modules_ingradient_menu__WEBPACK_IMPORTED_MODULE_5__["default"])(_modules_data_ingradiets_menu_data__WEBPACK_IMPORTED_MODULE_6__["default"]);
  (0,_modules_first_page_animat__WEBPACK_IMPORTED_MODULE_4__["default"])(bigBtn, firstPageBtn, secondPageBtn);
  (0,_modules_page_changer__WEBPACK_IMPORTED_MODULE_3__["default"])(firstPageBtn, secondPageBtn, wrapper, field, pages, page1, page2, bigBtn);
  (0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_burger_constructor__WEBPACK_IMPORTED_MODULE_2__["default"])(dataForVisualization, orderData, _modules_data_calculation_item_data__WEBPACK_IMPORTED_MODULE_7__["default"]);
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modalP)();
});
})();

/******/ })()
;
//# sourceMappingURL=main.d331ad2e0fe9c292d408.js.map