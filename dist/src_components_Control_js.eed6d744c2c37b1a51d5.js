"use strict";
(self["webpackChunkedgewater"] = self["webpackChunkedgewater"] || []).push([["src_components_Control_js"],{

/***/ "./src/components/Control.js":
/*!***********************************!*\
  !*** ./src/components/Control.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Control)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countdown */ "../../node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var _Zones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Zones */ "./src/components/Zones.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/SignalCellularAlt.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/Block.js");
/* harmony import */ var _utilities_getCfg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/getCfg */ "./src/utilities/getCfg.js");
/* harmony import */ var _mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@mckennatim/mqtt-hooks/src */ "../@mckennatim/mqtt-hooks/src/index.js");
/* harmony import */ var _appInit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../appInit */ "./src/appInit.js");
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








// }from '@mckennatim/mqtt-hooks'

var lsh = _utilities_getCfg__WEBPACK_IMPORTED_MODULE_3__.ls.getItem();
console.log("in control ", lsh);
function Control() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    connected = _useState2[0],
    setConnected = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    onoff = _useState4[0],
    setOnoff = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(100),
    _useState6 = _slicedToArray(_useState5, 2),
    tsec = _useState6[0],
    setTsec = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("zone0"),
    _useState8 = _slicedToArray(_useState7, 2),
    srkey = _useState8[0],
    setSrkey = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("blur-disconnected"),
    _useState10 = _slicedToArray(_useState9, 2),
    status = _useState10[0],
    setStatus = _useState10[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_4__.Context),
    _useContext2 = _slicedToArray(_useContext, 2),
    client = _useContext2[0],
    publish = _useContext2[1];
  client.onMessageArrived = onMessageArrived;
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, _appInit__WEBPACK_IMPORTED_MODULE_5__.initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  function reducer(state, action) {
    var nstate = _objectSpread({}, state);
    nstate[action.type] = action.payload;
    // console.log('state: ', state);
    // console.log('action: ', action);
    // console.log('nstate: ', nstate);
    return nstate;
  }
  function onMessageArrived(message) {
    var _processMessage = (0,_mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_4__.processMessage)(message, devs, state),
      nsarr = _processMessage.nsarr,
      processed_message = _processMessage.processed_message;
    console.log('nsarr: ', nsarr);
    console.log('processed_message: ', processed_message);
    var dev = processed_message.dev,
      payload = processed_message.payload;
    console.log('dev: ', dev, 'dev1: ', _appInit__WEBPACK_IMPORTED_MODULE_5__.dev1, 'connected: ', connected);
    if (nsarr.length > 0) {
      nsarr.map(function (ns) {
        var key = Object.keys(ns)[0];
        var action = {
          type: key,
          payload: ns[key]
        };
        console.log('action: ', action.payload, 'key: ', key);
        dispatch(action);
        if (dev == _appInit__WEBPACK_IMPORTED_MODULE_5__.dev1) {
          setConnected(true);
          var sr = payload.id;
          setOnoff(payload.darr[0]);
          setTsec(payload.darr[1]);
          console.log("sr: ", sr, "key: ", key);
          setSrkey(key);
        }
      });
    }
  }
  var doOtherShit = function doOtherShit(devs, zones, client) {
    publish(client, "presence", "hello form do other shit");
    console.log("devs: ", devs);
    var topic = "".concat(Object.keys(devs)[0], "/req");
    var payload = "{\"id\":2, \"req\":\"flags\"}";
    console.log("topic, payload: ", topic, payload);
    // publish(client, topic, payload)
  };
  var topics = ["srstate", "sched", "flags", "timr"];

  // useDevSpecs gets dev and zone data stored in mysql when app is designed
  // in C:\fs\iot3\my\conf
  var _useDevSpecs = (0,_mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_4__.useDevSpecs)(_utilities_getCfg__WEBPACK_IMPORTED_MODULE_3__.ls, _utilities_getCfg__WEBPACK_IMPORTED_MODULE_3__.cfg, client, function (devs, zones) {
      if (!client.isConnected()) {
        (0,_mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_4__.connect)(client, lsh, function (client) {
          if (client.isConnected()) {
            (0,_mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_4__.setupSocket)(client, devs, publish, topics, function (devs, client) {
              return doOtherShit(devs, zones, client);
            });
          }
        });
      } else {
        (0,_mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_4__.setupSocket)(client, devs, publish, topics, function (devs, client) {
          return doOtherShit(devs, zones, client);
        });
      }
    }),
    devs = _useDevSpecs.devs,
    zones = _useDevSpecs.zones,
    binfo = _useDevSpecs.binfo,
    error = _useDevSpecs.error;
  var goSignin = function goSignin() {
    var href = (0,_utilities_getCfg__WEBPACK_IMPORTED_MODULE_3__.makeHref)(window.location.hostname, "signin", "");
    console.log('href: ', href); //, `?${locid}`)
    window.location.assign(href);
  };
  var toggleOnOff = function toggleOnOff(typ) {
    return function () {
      var newt = !state[typ].darr[0] * 1;
      console.log("newt: ", newt);
      console.log("typ: ", typ);
      var di = (0,_mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_4__.getDinfo)(typ, devs);
      console.log("di: ", di);
      var topic = "".concat(di.dev, "/cmd");
      var payload = "{\"id\":".concat(di.sr, ",\"sra\":[").concat(newt, "]}");
      console.log("topic,payload: ", topic, payload);
      publish(client, topic, payload);
    };
  };
  var handleNewTstat = function handleNewTstat(key) {
    return function (event) {
      if (event.key === 'Enter') {
        var val = event.target.value * 1;
        var di = (0,_mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_4__.getDinfo)(key, devs);
        console.log('di: ', di);
        var dif = Math.round((state[key].darr[2] - state[key].darr[3]) / 2);
        console.log('dif: ', dif);
        var newt = [val + dif, val - dif];
        var topic = "".concat(di.dev, "/cmd");
        var payload = "{\"id\":".concat(di.sr, ",\"sra\":[").concat(newt, "]}");
        console.log("topic,payload: ", topic, payload);
        publish(client, topic, payload);
      }
    };
  };
  var handleTsec = function handleTsec(key) {
    return function (event) {
      if (event.key === 'Enter') {
        var val = event.target.value * 1;
        var di = (0,_mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_4__.getDinfo)(key, devs);
        console.log('di: ', di);
        var topic = "".concat(di.dev, "/cmd");
        var payload = "{\"id\":".concat(di.sr, ",\"sra\":[],\"tsec\":").concat(val, "}");
        console.log("topic,payload: ", topic, payload);
        publish(client, topic, payload);
      }
    };
  };
  var handleNewProg = function handleNewProg(key) {
    return function (event) {
      if (event.key === 'Enter') {
        var tarr = event.target.value;
        console.log('key, event.target: ', key, event.target.value);
        var di = (0,_mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_4__.getDinfo)(key, devs);
        var topic = "".concat(di.dev, "/prg");
        var payload = "{\"id\":".concat(di.sr, ",\"pro\":[").concat(tarr, "]}");
        console.log("topic,payload: ", topic, payload);
        publish(client, topic, payload);
      }
    };
  };
  var transferWidgetData = function transferWidgetData(wdata) {
    console.log('wdata: ', wdata);
    var key = wdata.key,
      arr = wdata.arr;
    var tarr = {
      ctype: "relay",
      darr: arr
    };
    var action = {
      type: key,
      payload: tarr
    };
    // dispatch(action);
    var di = (0,_mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_4__.getDinfo)(key, devs);
    console.log('di: ', di);
    var topic = "".concat(di.dev, "/cmd");
    var payload = "{\"id\":".concat(di.sr, ",\"sra\":[").concat(arr, "]}");
    console.log("topic,payload: ", topic, payload);
    publish(client, topic, payload);
  };
  var handleDarrCng = function handleDarrCng(key) {
    return function (event) {
      // console.log('event.key, key: ', event.key, key);
      // alert(`event.key ${event.key}`)
      if (event.key === 'Enter' || event.key === 'Q' || event.key == 'q') {
        var arr = event.target.value.split(',').map(function (a) {
          return a * 1;
        });
        setOnoff(arr[0] * 1);
        setTsec(arr[1] * 1);
        setSrkey(key);
        console.log('arr: ', arr, 'key: ', key);
        var tarr = {
          ctype: "relay",
          darr: arr,
          timeleft: 0
        };
        var action = {
          type: key,
          payload: tarr
        };
        dispatch(action);
        console.log('key, event.target: ', key, event.target.value);
        var di = (0,_mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_4__.getDinfo)(key, devs);
        console.log('di: ', di);
        var topic = "".concat(di.dev, "/cmd");
        var payload = "{\"id\":".concat(di.sr, ",\"sra\":[").concat(arr, "]}");
        console.log("topic,payload: ", topic, payload);
        publish(client, topic, payload);
      }
    };
  };
  var handleDarrBtn = function handleDarrBtn(key) {
    return function (event) {
      console.log('key,event: ', key, event);
      var di = (0,_mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_4__.getDinfo)(key, devs);
      var topic = "".concat(di.dev, "/cmd");
      var payload = "{\"id\":".concat(di.sr, ",\"sra\":[").concat(state[key].darr, "]}");
      console.log("topic,payload: ", topic, payload);
      //publish(client, topic, payload);
    };
  };
  var handleRawCmd = function handleRawCmd(event) {
    if (event.key === 'Enter') {
      var payload = event.target.value;
      console.log('event.target: ', event.target.value);
      var topic = "CYURD127/cmd";
      // const payload = `{"id":${di.sr},"pro":[${tarr}]}`;
      console.log("topic,payload: ", topic, payload);
      publish(client, topic, payload);
    }
  };
  var renderTimer = function renderTimer() {
    console.log('renderTimer: ', srkey, tsec, onoff);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        margin: '0px 100px 0px 100px',
        border: '1px solid #ddd',
        borderRadius: '30px',
        maxWidth: '220px',
        textAlign: 'center',
        backgroundColor: 'white',
        height: '50px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontFamily: "Arial",
        fontSize: "1.2em",
        fontWeight: "bold",
        padding: '5px 5px'
      }
    }, "Timer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontFamily: "Arial",
        fontSize: "1.2em",
        fontWeight: "bold"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_countdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: srkey,
      date: Date.now() + tsec * 1000,
      renderer: function renderer(_ref) {
        var hours = _ref.hours,
          minutes = _ref.minutes,
          seconds = _ref.seconds,
          completed = _ref.completed;
        if (!onoff) {
          // Render a completed state
          console.log('completed: ', completed);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "off");
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            style: {
              paddingRight: '8px'
            }
          }, srkey), hours > 0 && "".concat(hours, ":"), minutes.toString().padStart(2, '0'), ":", seconds.toString().padStart(2, '0'));
        }
      }
    })));
  };
  var renderControl = function renderControl() {
    if (!error) {
      // console.log('state: ', state);
      var listData = Object.keys(state).map(function (key, i) {
        if (devs) {
          var di = (0,_mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_4__.getDinfo)(key, devs);
          var ctype = state[key].ctype;
          // console.log('state[key]: ', state[key]);
          var darlen = state[key].darr ? state[key].darr.length : 0;
          var darr = "[";
          if (ctype) {
            var clen = _appInit__WEBPACK_IMPORTED_MODULE_5__.ctrltypes[ctype]["cmd"].length;
            _appInit__WEBPACK_IMPORTED_MODULE_5__.ctrltypes[ctype]["cmd"].map(function (c, j) {
              darr += "".concat(state[key].darr[c]).concat(j + 1 == clen ? '' : ',', " ");
            });
          }
          darr += "]";
          var crInput = function crInput() {
            if (ctype && darlen > 0) {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
                size: "2",
                type: "text",
                onKeyDown: handleDarrCng(key)
              }));
            }
            // console.log(state[key].ctype);
          };
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
            key: i
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, di.sr, " ", key, " ", darr), crInput()));
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, listData), "[0,0,1],[21,55,0] [0,0,69,67],[13,13,72,70]", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "{\"id\":3, \"sra\":[1, 240]}"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        size: "80",
        type: "text",
        onKeyDown: handleRawCmd
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Simple page to operate as an mqtt ws client that can send and recieve payloads to a test device"));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, error.qmessage));
    }
  };
  var rrender = function rrender() {
    if (!error) {
      var locdata = binfo.locdata;
      var ico = status === "blur-disconnected" ? "block" : "signal_cellular_alt";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
        style: styles.header
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: styles.container
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: styles.ul
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          fontFamily: "Arial",
          fontSize: "1.2em",
          fontWeight: "bold"
        }
      }, locdata && locdata.loc, " ")), connected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          paddingLeft: "10px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fontSize: "large"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          paddingLeft: "10px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        fontSize: "large"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: styles.ll
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: styles.txt
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        style: {
          fontFamily: "arial"
        }
      }, "outside:", state.temp_out.darr[0], " \xB0F"))))));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "From this app on this machine's perspective, ", error.qmessage, " It is probably best to", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: goSignin
      }, "go and (re-)signin"), ". But maybe nobody has registered you to a paticular location that has some iot devices that run this app. then this is as far as you can go. You can see some screenshots of the app below."));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.ctrl.div0
  }, rrender(), renderTimer(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Zones__WEBPACK_IMPORTED_MODULE_2__["default"], {
    keys: Object.keys(state).slice(0, 4),
    state: state,
    transferWidgetData: transferWidgetData
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Control"), renderControl());
}
var styles = {
  ctrl: {
    div0: {
      backgroundColor: "#e5bf37"
    }
  },
  ll: {
    padding: "5px 10px 3px 10px"
  },
  ul: {
    padding: "10px 10px 2px 10px"
  }
};

/***/ }),

/***/ "./src/components/Zones.js":
/*!*********************************!*\
  !*** ./src/components/Zones.js ***!
  \*********************************/
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

var Zones = function Zones(props) {
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
      padding: '10px',
      maxWidth: '400px',
      touchAction: 'none'
    }
  }, controls.map(function (control, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: control.id,
      style: {
        margin: '10px 0',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: control.isChecked ? '#f0f8ff' : 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: '16px',
        fontWeight: '500'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: '18px',
        fontWeight: 'bold'
      }
    }, keys[idx]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        padding: '0 5px'
      }
    }, state[keys[idx]].darr[1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: '14px',
        color: '#666',
        backgroundColor: state[keys[idx]].darr[0] == 1 ? '#4CAF50' : '#cccccc',
        marginRight: '20px'
      }
    }, state[keys[idx]].darr[0] == 1 ? ' ON' : ' OFF')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      checked: control.isChecked,
      onChange: function onChange() {
        return handleCheckboxChange(control.id);
      },
      style: {
        pmarginLeft: '55px',
        marginRight: '5px',
        width: '18px',
        height: '18px',
        cursor: 'pointer'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        minWidth: '30px',
        textAlign: 'center',
        marginRight: '5px'
      }
    }, control.sliderValue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return handleSendValues(control.id);
      },
      style: {
        padding: '4px 8px',
        backgroundColor: "#005CC8",
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }
    }, "Send")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        margin: '5px 0',
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
    })));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Zones);

/***/ })

}]);
//# sourceMappingURL=src_components_Control_js.eed6d744c2c37b1a51d5.js.map