"use strict";
(self["webpackChunkedgewater"] = self["webpackChunkedgewater"] || []).push([["src_components_AddJob_js"],{

/***/ "./src/components/AddJob.js":
/*!**********************************!*\
  !*** ./src/components/AddJob.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddJob)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_acontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/acontext */ "./src/contexts/acontext.js");
/* harmony import */ var _MutuallyExclusiveControlGroups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MutuallyExclusiveControlGroups */ "./src/components/MutuallyExclusiveControlGroups.js");



function AddJob() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_acontext__WEBPACK_IMPORTED_MODULE_1__.AContext),
    foundJobs = _useContext.foundJobs,
    setFoundJobs = _useContext.setFoundJobs,
    setJob2edit = _useContext.setJob2edit,
    job2edit = _useContext.job2edit;
  var update = function update() {
    setFoundJobs([{
      job: job2edit,
      category: ''
    }, {
      job: job2edit,
      category: 'maintain'
    }, {
      job: job2edit,
      category: 'treework'
    }]);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.addjob.div0
  }, "AddJob", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, job2edit), (0,_MutuallyExclusiveControlGroups__WEBPACK_IMPORTED_MODULE_2__["default"])(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: update
  }, "update"));
}
var styles = {
  addjob: {
    div0: {
      backgroundColor: '#c6a7a7'
    }
  }
};

/***/ }),

/***/ "./src/components/MutuallyExclusiveControlGroups.js":
/*!**********************************************************!*\
  !*** ./src/components/MutuallyExclusiveControlGroups.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var MutuallyExclusiveControlGroups = function MutuallyExclusiveControlGroups(props) {
  var keys = props.keys,
    state = props.state,
    transferWidgetData = props.transferWidgetData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      id: 0,
      isChecked: false,
      sliderValue: 3600
    }, {
      id: 1,
      isChecked: false,
      sliderValue: 3600
    }, {
      id: 2,
      isChecked: false,
      sliderValue: 3600
    }, {
      id: 3,
      isChecked: false,
      sliderValue: 3600
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    controls = _useState2[0],
    setControls = _useState2[1];

  // When a checkbox is clicked, uncheck all others
  var handleCheckboxChange = function handleCheckboxChange(id) {
    setControls(controls.map(function (control) {
      return _objectSpread(_objectSpread({}, control), {}, {
        isChecked: control.id === id ? !control.isChecked : false
      });
    }));
  };
  var handleSliderChange = function handleSliderChange(id, value) {
    setControls(controls.map(function (control) {
      return control.id === id ? _objectSpread(_objectSpread({}, control), {}, {
        sliderValue: value
      }) : control;
    }));
  };
  var handleSendValues = function handleSendValues(id) {
    var control = controls.find(function (c) {
      return c.id === id;
    });
    if (control) {
      // alert(`Option ${id}: ${control.isChecked ? "ON" : "OFF"}, Slider: ${control.sliderValue}`);
      transferWidgetData({
        key: keys[control.id],
        arr: [control.isChecked ? 1 : 0, control.sliderValue]
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px',
      maxWidth: '600px',
      touchAction: 'none'
    }
  }, controls.map(function (control, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: control.id,
      style: {
        margin: '15px 0',
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: control.isChecked ? '#f0f8ff' : 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      style: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      checked: control.isChecked,
      onChange: function onChange() {
        return handleCheckboxChange(control.id);
      },
      style: {
        marginRight: '10px',
        width: '18px',
        height: '18px',
        cursor: 'pointer'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: '16px',
        fontWeight: '500'
      }
    }, keys[idx], " ", state[keys[idx]].darr[1], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: '14px',
        color: '#666',
        backgroundColor: state[keys[idx]].darr[0] == 1 ? '#4CAF50' : '#cccccc'
      }
    }, state[keys[idx]].darr[0] == 1 ? ' ON' : ' OFF'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        margin: '15px 0',
        display: 'flex',
        alignItems: 'center',
        touchAction: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "range",
      min: "15",
      max: "4000",
      value: control.sliderValue,
      onChange: function onChange(e) {
        return handleSliderChange(control.id, parseInt(e.target.value));
      },
      style: {
        flex: 1,
        marginRight: '10px',
        cursor: 'pointer'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        minWidth: '30px',
        textAlign: 'center'
      }
    }, control.sliderValue)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return handleSendValues(control.id);
      },
      style: {
        padding: '8px 16px',
        backgroundColor: control.isChecked ? '#4CAF50' : '#cccccc',
        color: control.isChecked ? 'white' : '#666666',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }
    }, "Send Option ", control.id, " Values"));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MutuallyExclusiveControlGroups);

/***/ })

}]);
//# sourceMappingURL=src_components_AddJob_js.a72d9ab67907b4b2c359.js.map