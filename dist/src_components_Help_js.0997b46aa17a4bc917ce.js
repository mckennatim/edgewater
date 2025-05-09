"use strict";
(self["webpackChunkedgewater"] = self["webpackChunkedgewater"] || []).push([["src_components_Help_js"],{

/***/ "./src/components/Help.js":
/*!********************************!*\
  !*** ./src/components/Help.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Help)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_acontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/acontext */ "./src/contexts/acontext.js");


function Help() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_acontext__WEBPACK_IMPORTED_MODULE_1__.AContext),
    visiblePages = _useContext.visiblePages;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.help.div0
  }, visiblePages.map(function (p, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: i
    }, p);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Edgewater Stewards"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Intallation and Startup"), "The Edgewater Water Control (EWC) is powered from the USB on the electric panel. Before rebooting with the Side Button or reconnecting to USB, pull the fuses for the outdoor solenoids. Once the EWC has booted up and is running, you can put in the solenoid fuse. You can tell if the EWC is running by pressing the Top Button and seeing an LED go on in the controller. Press the Top Button again to shut it down then put in the solenoid fuse.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Edgwater Water Control basic operation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Top Button"), "Top button press begins a watering sequence starting with zone 1 and ending with zone 4. Each zone gets watered in turn for 60 minutes (default). Pressing the top button a second time, while zone 1 is operating, cancels the watering sequence.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Side Button"), "Pressing the Side button for 1 second reboots the Edgewater Water control. This can take up to 4 minutes.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Advanced operation for Stewards"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Edgewater Water Control (EWC) generally operates without WIFI/internet with default settings for successive watering of zone 1, 2, 3 & 4. The current default setting is 60 minutes (3600 sec) for each zone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "On startup, EWC does search for a WIFI connection for about 4 minutes before it is ready to operate."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This app has two pages 'help' and 'contol'. Noah can give you access to the 'control' part of the app which allows you to send commands to the EWC device from the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://apps.sitebuilt.net/edgewater/#/control"
  }, "https://apps.sitebuilt.net/edgewater/#/control"), " when the EWC is connected to the internet through a phone hotspot. At this point the app is not at all polished and is mainly used by the device developer for trouble shooting and re-programming."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "phone hot spot control"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Hot spot use allows for quick reset of EWC and for customizing the schedule for EWC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "To usr this feature you need to activate the hot spot feature on your phone, then rename the hotspot SSID to \"Edgewater\" with a password \"jjjjjjjj\" (8 j's)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Turn on the hotspot and then reboot the EWC device by pressing the side button for 1 second. In 20 seconds or so, your phone may indicate that 1 device is connected. Now it is ready to operate, pressing the Top Button will start the watering sequence. This is considerably faster than rebooting without a hotspot on."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The control page of the app, when the EWC is connected to a hotspot, allows for some monitoring and control of the device."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "monitoring"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Each relay has an entry like [ 0, 3600]. The first number is 0 when that relay is off and 1 when the relay is on. The second number is the number of seconds that relay will be on. If the relay is on, 'timeleft' indicates the number of seconds left for that zone."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "control"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "To change the watering duration for a zone, enter 0,xxx (no spaces) and press enter where xxx is the watering duration in seconds. To start the watering press from the app, in zone1 enter 1,xxx and press enter. You can also skip a zone and start in zone 2, 3 or 4 by puttin 1,xxx and enter in one of thos boxes. Do not turn on more than one zone at a time as the system is designed to water one zone at a time "));
}
var styles = {
  help: {
    div0: {
      backgroundColor: '#c7b1c9'
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=src_components_Help_js.0997b46aa17a4bc917ce.js.map