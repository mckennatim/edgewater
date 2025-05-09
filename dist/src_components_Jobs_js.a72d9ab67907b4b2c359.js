"use strict";
(self["webpackChunkedgewater"] = self["webpackChunkedgewater"] || []).push([["src_components_Jobs_js"],{

/***/ "./src/components/Jobs.js":
/*!********************************!*\
  !*** ./src/components/Jobs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Jobs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_acontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/acontext */ "./src/contexts/acontext.js");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ "../../node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var _MobileFirstControlGroups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileFirstControlGroups */ "./src/components/MobileFirstControlGroups.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




function Jobs() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_acontext__WEBPACK_IMPORTED_MODULE_1__.AContext),
    foundJobs = _useContext.foundJobs,
    setFoundJobs = _useContext.setFoundJobs,
    setJob2edit = _useContext.setJob2edit,
    job2edit = _useContext.job2edit;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    job = _useState2[0],
    setJob = _useState2[1];
  var onEnter = function onEnter(e) {
    if (e.key === 'Enter') {
      setJob2edit(job);
    }
  };
  var renderJobs = function renderJobs() {
    var jobs = foundJobs.map(function (j, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " ", j.job, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " ", j.category, " "));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, job2edit), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      onKeyDown: onEnter,
      onChange: function onChange(e) {
        return setJob(e.target.value);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, jobs));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.jobs.div0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_countdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: Date.now() + 100000
  }), (0,_MobileFirstControlGroups__WEBPACK_IMPORTED_MODULE_3__["default"])(), "Jobsaa", renderJobs());
}
var styles = {
  jobs: {
    div0: {
      backgroundColor: '#aa9898'
    }
  }
};

/***/ }),

/***/ "./src/components/MobileFirstControlGroups.js":
/*!****************************************************!*\
  !*** ./src/components/MobileFirstControlGroups.js ***!
  \****************************************************/
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

var MobileFirstControlGroups = function MobileFirstControlGroups() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      id: 1,
      isChecked: false,
      sliderValue: 50
    }, {
      id: 2,
      isChecked: false,
      sliderValue: 50
    }, {
      id: 3,
      isChecked: false,
      sliderValue: 50
    }, {
      id: 4,
      isChecked: false,
      sliderValue: 50
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    controls = _useState2[0],
    setControls = _useState2[1];

  // Toggle checkbox with mutual exclusion
  var toggleCheckbox = function toggleCheckbox(id) {
    setControls(controls.map(function (control) {
      return _objectSpread(_objectSpread({}, control), {}, {
        isChecked: control.id === id ? !control.isChecked : false
      });
    }));
  };

  // Update slider value
  var updateSlider = function updateSlider(id, value) {
    setControls(controls.map(function (control) {
      return control.id === id ? _objectSpread(_objectSpread({}, control), {}, {
        sliderValue: value
      }) : control;
    }));
  };

  // Send values for a specific control
  var sendValues = function sendValues(id) {
    var control = controls.find(function (c) {
      return c.id === id;
    });
    if (control) {
      console.log("Control ".concat(id, " values:"), {
        active: control.isChecked,
        value: control.sliderValue
      });
      // In a real app, you might use a toast notification instead of alert
      alert("Sent - Active: ".concat(control.isChecked, ", Value: ").concat(control.sliderValue));
    }
  };

  // Dynamic slider style function
  var getSliderStyle = function getSliderStyle(sliderValue) {
    return {
      width: '100%',
      height: '40px',
      WebkitAppearance: 'none',
      background: "linear-gradient(to right, #4a90e2 0%, #4a90e2 ".concat(sliderValue, "%, #e0e0e0 ").concat(sliderValue, "%, #e0e0e0 100%)"),
      borderRadius: '20px',
      padding: 0,
      margin: 0,
      '&::-webkit-slider-thumb': {
        WebkitAppearance: 'none',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: '#ffffff',
        border: '2px solid #4a90e2',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }
    };
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: styles.title
  }, "Control Panel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: styles.subtitle
  }, "Only one option can be active at a time"), controls.map(function (control) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: control.id,
      style: _objectSpread(_objectSpread({}, styles.controlGroup), {}, {
        backgroundColor: control.isChecked ? '#f5f9ff' : '#fff'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: styles.checkboxRow,
      onClick: function onClick() {
        return toggleCheckbox(control.id);
      },
      role: "button",
      tabIndex: 0,
      onKeyDown: function onKeyDown(e) {
        return e.key === 'Enter' && toggleCheckbox(control.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      id: "control-".concat(control.id),
      checked: control.isChecked,
      onChange: function onChange() {},
      style: styles.checkbox,
      "aria-label": "Toggle control ".concat(control.id)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      htmlFor: "control-".concat(control.id),
      style: styles.checkboxLabel
    }, "Control ", control.id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: styles.sliderContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "range",
      min: "0",
      max: "100",
      value: control.sliderValue,
      onChange: function onChange(e) {
        return updateSlider(control.id, parseInt(e.target.value));
      },
      style: getSliderStyle(control.sliderValue),
      "aria-label": "Adjust value for control ".concat(control.id)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: styles.sliderValueContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: styles.sliderValue
    }, control.sliderValue))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return sendValues(control.id);
      },
      style: _objectSpread(_objectSpread({}, styles.button), control.isChecked ? styles.buttonActive : styles.buttonInactive),
      disabled: !control.isChecked,
      "aria-disabled": !control.isChecked
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: styles.buttonText
    }, "Send Values"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: styles.buttonBadge
    }, "#", control.id)));
  }));
};

// Styles
var styles = {
  container: {
    padding: '16px',
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  title: {
    color: '#1a1a1a',
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '8px',
    lineHeight: '1.3'
  },
  subtitle: {
    color: '#666',
    fontSize: '16px',
    marginTop: 0,
    marginBottom: '24px',
    lineHeight: '1.5'
  },
  controlGroup: {
    margin: '0 0 16px 0',
    padding: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    transition: 'all 0.2s ease'
  },
  checkboxRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    padding: '8px 0',
    cursor: 'pointer'
  },
  checkbox: {
    width: '24px',
    height: '24px',
    marginRight: '12px',
    accentColor: '#4a90e2',
    transform: 'scale(1.2)',
    pointerEvents: 'none'
  },
  checkboxLabel: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#1a1a1a',
    flex: 1
  },
  sliderContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    margin: '16px 0'
  },
  sliderValueContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sliderValue: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#4a90e2',
    minWidth: '40px',
    textAlign: 'center',
    background: '#f0f7ff',
    padding: '4px 8px',
    borderRadius: '6px'
  },
  button: {
    width: '100%',
    padding: '14px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.2s ease'
  },
  buttonActive: {
    backgroundColor: '#4a90e2',
    color: 'white',
    boxShadow: '0 2px 6px rgba(74, 144, 226, 0.3)'
  },
  buttonInactive: {
    backgroundColor: '#f5f5f5',
    color: '#aaa',
    cursor: 'not-allowed'
  },
  buttonText: {
    flex: 1,
    textAlign: 'left'
  },
  buttonBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '14px'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileFirstControlGroups);

/***/ })

}]);
//# sourceMappingURL=src_components_Jobs_js.a72d9ab67907b4b2c359.js.map