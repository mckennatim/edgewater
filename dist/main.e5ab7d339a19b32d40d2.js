/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../@mckennatim/mqtt-hooks/src/context.js":
/*!************************************************!*\
  !*** ../@mckennatim/mqtt-hooks/src/context.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Context: () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();

/***/ }),

/***/ "../@mckennatim/mqtt-hooks/src/fetches.js":
/*!************************************************!*\
  !*** ../@mckennatim/mqtt-hooks/src/fetches.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteHolds: () => (/* binding */ deleteHolds),
/* harmony export */   fetchBigData: () => (/* binding */ fetchBigData),
/* harmony export */   fetchSched: () => (/* binding */ fetchSched),
/* harmony export */   fetchWeekSched: () => (/* binding */ fetchWeekSched),
/* harmony export */   replaceHold: () => (/* binding */ replaceHold),
/* harmony export */   replaceWeekSched: () => (/* binding */ replaceWeekSched),
/* harmony export */   replaceZoneScheds: () => (/* binding */ replaceZoneScheds)
/* harmony export */ });
var fetchWeekSched = function fetchWeekSched(ls, cfg, devid, senrel) {
  var lsh = ls.getItem();
  if (lsh) {
    var url = cfg.url.api + '/admin/u/scheds/' + devid + '/' + senrel;
    var options = {
      headers: {
        'Authorization': 'Bearer ' + lsh['token']
      },
      method: 'GET'
    };
    return fetch(url, options).then(function (response) {
      return response.json();
    });
  } else {
    var p2 = Promise.resolve({
      qmessage: 'you dont exist! '
    });
    return p2;
  }
};
var replaceWeekSched = function replaceWeekSched(ls, cfg, keyvals) {
  console.log('in rplace');
  var lsh = ls.getItem();
  console.log('keyvals: ', keyvals);
  if (lsh) {
    var url = cfg.url.api + '/admin/u/scheds';
    var options = {
      headers: {
        'Authorization': 'Bearer ' + lsh['token'],
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(keyvals)
    };
    return fetch(url, options).then(function (response) {
      return response.json();
    });
  } else {
    var p2 = Promise.resolve({
      qmessage: 'you dont exist! '
    });
    return p2;
  }
};
var replaceZoneScheds = function replaceZoneScheds(ls, cfg, keyvals) {
  console.log('in rplace');
  var lsh = ls.getItem();
  console.log('keyvals: ', keyvals);
  if (lsh) {
    var url = cfg.url.api + '/admin/u/zonescheds';
    var options = {
      headers: {
        'Authorization': 'Bearer ' + lsh['token'],
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(keyvals)
    };
    return fetch(url, options).then(function (response) {
      return response.json();
    });
  } else {
    var p2 = Promise.resolve({
      qmessage: 'you dont exist! '
    });
    return p2;
  }
};
var fetchSched = function fetchSched(ls, cfg, devid, senrel, dow) {
  var lsh = ls.getItem();
  if (lsh) {
    var url = "".concat(cfg.url.api, "/admin/u/unhold/").concat(devid, "/").concat(senrel, "/").concat(dow);
    var options = {
      headers: {
        'Authorization': 'Bearer ' + lsh['token'],
        'Content-Type': 'application/json'
      },
      method: 'GET'
    };
    return fetch(url, options).then(function (response) {
      return response.json();
    });
  } else {
    var p2 = Promise.resolve({
      qmessage: 'you dont exist! '
    });
    return p2;
  }
};
var deleteHolds = function deleteHolds(ls, cfg, ds) {
  var lsh = ls.getItem();
  if (lsh) {
    var url = cfg.url.api + '/admin/u/holds';
    var options = {
      headers: {
        'Authorization': 'Bearer ' + lsh['token'],
        'Content-Type': 'application/json'
      },
      method: 'DELETE',
      body: JSON.stringify(ds)
    };
    return fetch(url, options).then(function (response) {
      return response.json();
    });
  } else {
    var p2 = Promise.resolve({
      qmessage: 'you dont exist! '
    });
    return p2;
  }
};
var replaceHold = function replaceHold(ls, cfg, db) {
  var lsh = ls.getItem();
  if (lsh) {
    var url = cfg.url.api + '/admin/u/hold';
    var options = {
      headers: {
        'Authorization': 'Bearer ' + lsh['token'],
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(db)
    };
    return fetch(url, options).then(function (response) {
      return response.json();
    });
  } else {
    var p2 = Promise.resolve({
      qmessage: 'you dont exist! '
    });
    return p2;
  }
};
var fetchBigData = function fetchBigData(ls, cfg, db) {
  var lsh = ls.getItem();
  if (lsh) {
    var url = cfg.url.api + '/admin/u/bigdata';
    var options = {
      headers: {
        'Authorization': 'Bearer ' + lsh['token'],
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(db)
    };
    return fetch(url, options).then(function (response) {
      return response.json();
    });
  } else {
    var p2 = Promise.resolve({
      qmessage: 'you dont exist! '
    });
    return p2;
  }
};


/***/ }),

/***/ "../@mckennatim/mqtt-hooks/src/index.js":
/*!**********************************************!*\
  !*** ../@mckennatim/mqtt-hooks/src/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientSocket: () => (/* binding */ ClientSocket),
/* harmony export */   Context: () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_3__.Context),
/* harmony export */   add2sched: () => (/* reexport safe */ _utility__WEBPACK_IMPORTED_MODULE_5__.add2sched),
/* harmony export */   connect: () => (/* reexport safe */ _mq__WEBPACK_IMPORTED_MODULE_4__.connect),
/* harmony export */   deleteHolds: () => (/* reexport safe */ _fetches__WEBPACK_IMPORTED_MODULE_6__.deleteHolds),
/* harmony export */   endWhen: () => (/* reexport safe */ _utility__WEBPACK_IMPORTED_MODULE_5__.endWhen),
/* harmony export */   fetchBigData: () => (/* reexport safe */ _fetches__WEBPACK_IMPORTED_MODULE_6__.fetchBigData),
/* harmony export */   fetchSched: () => (/* reexport safe */ _fetches__WEBPACK_IMPORTED_MODULE_6__.fetchSched),
/* harmony export */   fetchWeekSched: () => (/* reexport safe */ _fetches__WEBPACK_IMPORTED_MODULE_6__.fetchWeekSched),
/* harmony export */   getDinfo: () => (/* binding */ getDinfo),
/* harmony export */   getNow: () => (/* reexport safe */ _utility__WEBPACK_IMPORTED_MODULE_5__.getNow),
/* harmony export */   getZinfo: () => (/* binding */ getZinfo),
/* harmony export */   hma2time: () => (/* reexport safe */ _utility__WEBPACK_IMPORTED_MODULE_5__.hma2time),
/* harmony export */   m2hm: () => (/* reexport safe */ _utility__WEBPACK_IMPORTED_MODULE_5__.m2hm),
/* harmony export */   m2ms: () => (/* reexport safe */ _utility__WEBPACK_IMPORTED_MODULE_5__.m2ms),
/* harmony export */   monitorFocus: () => (/* reexport safe */ _mq__WEBPACK_IMPORTED_MODULE_4__.monitorFocus),
/* harmony export */   newInterval: () => (/* reexport safe */ _utility__WEBPACK_IMPORTED_MODULE_5__.newInterval),
/* harmony export */   processMessage: () => (/* binding */ processMessage),
/* harmony export */   replaceHold: () => (/* reexport safe */ _fetches__WEBPACK_IMPORTED_MODULE_6__.replaceHold),
/* harmony export */   replaceWeekSched: () => (/* reexport safe */ _fetches__WEBPACK_IMPORTED_MODULE_6__.replaceWeekSched),
/* harmony export */   replaceZoneScheds: () => (/* reexport safe */ _fetches__WEBPACK_IMPORTED_MODULE_6__.replaceZoneScheds),
/* harmony export */   req: () => (/* reexport safe */ _mq__WEBPACK_IMPORTED_MODULE_4__.req),
/* harmony export */   setRelayStatus: () => (/* reexport safe */ _utility__WEBPACK_IMPORTED_MODULE_5__.setRelayStatus),
/* harmony export */   setupSocket: () => (/* reexport safe */ _mq__WEBPACK_IMPORTED_MODULE_4__.setupSocket),
/* harmony export */   startWhen: () => (/* reexport safe */ _utility__WEBPACK_IMPORTED_MODULE_5__.startWhen),
/* harmony export */   subscribe: () => (/* reexport safe */ _mq__WEBPACK_IMPORTED_MODULE_4__.subscribe),
/* harmony export */   useDevSpecs: () => (/* binding */ useDevSpecs),
/* harmony export */   whereInSched: () => (/* reexport safe */ _utility__WEBPACK_IMPORTED_MODULE_5__.whereInSched)
/* harmony export */ });
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider */ "../@mckennatim/mqtt-hooks/src/provider.js");
/* harmony import */ var _processMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processMessage */ "../@mckennatim/mqtt-hooks/src/processMessage.js");
/* harmony import */ var _useDevSpecs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDevSpecs */ "../@mckennatim/mqtt-hooks/src/useDevSpecs.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "../@mckennatim/mqtt-hooks/src/context.js");
/* harmony import */ var _mq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mq */ "../@mckennatim/mqtt-hooks/src/mq.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility */ "../@mckennatim/mqtt-hooks/src/utility.js");
/* harmony import */ var _fetches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fetches */ "../@mckennatim/mqtt-hooks/src/fetches.js");







var getZinfo = function getZinfo(label, zones) {
  return zones.find(function (zone) {
    return zone.id == label;
  });
};
var getDinfo = function getDinfo(label, devs) {
  var found = {};
  Object.keys(devs).map(function (dev) {
    devs[dev].map(function (a) {
      if (a.label == label) {
        found.dev = dev;
        found.sr = a.sr;
        found.label = a.label;
        return found;
      }
    });
  });
  return found;
};
var ClientSocket = _provider__WEBPACK_IMPORTED_MODULE_0__["default"];
var processMessage = _processMessage__WEBPACK_IMPORTED_MODULE_1__.processMessage;
var useDevSpecs = _useDevSpecs__WEBPACK_IMPORTED_MODULE_2__.useDevSpecs;


/***/ }),

/***/ "../@mckennatim/mqtt-hooks/src/mq.js":
/*!*******************************************!*\
  !*** ../@mckennatim/mqtt-hooks/src/mq.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connect: () => (/* binding */ connect),
/* harmony export */   monitorFocus: () => (/* binding */ monitorFocus),
/* harmony export */   req: () => (/* binding */ req),
/* harmony export */   setupSocket: () => (/* binding */ setupSocket),
/* harmony export */   subscribe: () => (/* binding */ subscribe)
/* harmony export */ });
var connect = function connect(client, lsh, cb) {
  // console.log('in connect')
  client.connect({
    onSuccess: function onSuccess() {
      cb(client);
    },
    onFailure: function onFailure(message) {
      console.log("Connection failed: " + message.errorMessage);
      //dmessage.innerHTML= "Connection failed: " + message.errorMessage;
    },
    useSSL: true,
    userName: lsh.email,
    password: lsh.token
  });
};
var monitorFocus = function monitorFocus(window, client, lsh, cb) {
  window.onfocus = function () {
    if (!client.isConnected()) {
      // console.log('focused')
      connect(client, lsh, function (client) {
        return cb('focused-connected', client);
      });
    }
  };
  window.onblur = function () {
    // console.log('unfocused')
    if (client.isConnected()) {
      try {
        client.disconnect();
        cb('blur-disconnected', client);
      } catch (err) {
        console.log(err);
      }
    }
  };
};
function req(client, devs, publish, topics) {
  devs.map(function (dev) {
    topics.map(function (top, idx) {
      return publish(client, "".concat(dev, "/req"), "{\"id\":".concat(idx, ",\"req\":\"").concat(top, "\"}"));
    });
  });
}
function subscribe(client, devs, toparr) {
  function subFailure(message) {
    console.log('subscribe failure', message);
  }
  devs.map(function (dev) {
    toparr.map(function (top) {
      return client.subscribe("".concat(dev, "/").concat(top), {
        onFailure: subFailure
      });
    });
  });
}
var setupSocket = function setupSocket(client, devs, publish, topics, cb) {
  var thedevs = Object.keys(devs);
  subscribe(client, thedevs, topics);
  req(client, thedevs, publish, topics);
  cb(devs, client);
};


/***/ }),

/***/ "../@mckennatim/mqtt-hooks/src/mqttws31.js":
/*!*************************************************!*\
  !*** ../@mckennatim/mqtt-hooks/src/mqttws31.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*******************************************************************************
 * Copyright (c) 2013 IBM Corp.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *    http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *   http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 *    Andrew Banks - initial API and implementation and initial documentation
 *    Guozhen Huang - improve to umd library
 *******************************************************************************/

(function (factory) {
  var root = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self.self === self && self || (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) == 'object' && __webpack_require__.g.global === __webpack_require__.g && __webpack_require__.g;
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return factory(root);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (global) {
  // Private variables below, these are only visible inside the function closure
  // which is used to define the module.

  var version = "@VERSION@";
  var buildLevel = "@BUILDLEVEL@";

  /**
   * Unique message type identifiers, with associated
   * associated integer values.
   * @private
   */
  var MESSAGE_TYPE = {
    CONNECT: 1,
    CONNACK: 2,
    PUBLISH: 3,
    PUBACK: 4,
    PUBREC: 5,
    PUBREL: 6,
    PUBCOMP: 7,
    SUBSCRIBE: 8,
    SUBACK: 9,
    UNSUBSCRIBE: 10,
    UNSUBACK: 11,
    PINGREQ: 12,
    PINGRESP: 13,
    DISCONNECT: 14
  };

  // Collection of utility methods used to simplify module code
  // and promote the DRY pattern.

  /**
   * Validate an object's parameter names to ensure they
   * match a list of expected variables name for this option
   * type. Used to ensure option object passed into the API don't
   * contain erroneous parameters.
   * @param {Object} obj - User options object
   * @param {Object} keys - valid keys and types that may exist in obj.
   * @throws {Error} Invalid option parameter found.
   * @private
   */
  var validate = function validate(obj, keys) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (keys.hasOwnProperty(key)) {
          if (_typeof(obj[key]) !== keys[key]) throw new Error(format(ERROR.INVALID_TYPE, [_typeof(obj[key]), key]));
        } else {
          var errorStr = "Unknown property, " + key + ". Valid properties are:";
          for (var key in keys) if (keys.hasOwnProperty(key)) errorStr = errorStr + " " + key;
          throw new Error(errorStr);
        }
      }
    }
  };

  /**
   * Return a new function which runs the user function bound
   * to a fixed scope.
   * @param {function} User function
   * @param {object} Function scope
   * @return {function} User function bound to another scope
   * @private
   */
  var scope = function scope(f, _scope) {
    return function () {
      return f.apply(_scope, arguments);
    };
  };

  /**
   * Unique message type identifiers, with associated
   * associated integer values.
   * @private
   */
  var ERROR = {
    OK: {
      code: 0,
      text: "AMQJSC0000I OK."
    },
    CONNECT_TIMEOUT: {
      code: 1,
      text: "AMQJSC0001E Connect timed out."
    },
    SUBSCRIBE_TIMEOUT: {
      code: 2,
      text: "AMQJS0002E Subscribe timed out."
    },
    UNSUBSCRIBE_TIMEOUT: {
      code: 3,
      text: "AMQJS0003E Unsubscribe timed out."
    },
    PING_TIMEOUT: {
      code: 4,
      text: "AMQJS0004E Ping timed out."
    },
    INTERNAL_ERROR: {
      code: 5,
      text: "AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}"
    },
    CONNACK_RETURNCODE: {
      code: 6,
      text: "AMQJS0006E Bad Connack return code:{0} {1}."
    },
    SOCKET_ERROR: {
      code: 7,
      text: "AMQJS0007E Socket error:{0}."
    },
    SOCKET_CLOSE: {
      code: 8,
      text: "AMQJS0008I Socket closed."
    },
    MALFORMED_UTF: {
      code: 9,
      text: "AMQJS0009E Malformed UTF data:{0} {1} {2}."
    },
    UNSUPPORTED: {
      code: 10,
      text: "AMQJS0010E {0} is not supported by this browser."
    },
    INVALID_STATE: {
      code: 11,
      text: "AMQJS0011E Invalid state {0}."
    },
    INVALID_TYPE: {
      code: 12,
      text: "AMQJS0012E Invalid type {0} for {1}."
    },
    INVALID_ARGUMENT: {
      code: 13,
      text: "AMQJS0013E Invalid argument {0} for {1}."
    },
    UNSUPPORTED_OPERATION: {
      code: 14,
      text: "AMQJS0014E Unsupported operation."
    },
    INVALID_STORED_DATA: {
      code: 15,
      text: "AMQJS0015E Invalid data in local storage key={0} value={1}."
    },
    INVALID_MQTT_MESSAGE_TYPE: {
      code: 16,
      text: "AMQJS0016E Invalid MQTT message type {0}."
    },
    MALFORMED_UNICODE: {
      code: 17,
      text: "AMQJS0017E Malformed Unicode string:{0} {1}."
    }
  };

  /** CONNACK RC Meaning. */
  var CONNACK_RC = {
    0: "Connection Accepted",
    1: "Connection Refused: unacceptable protocol version",
    2: "Connection Refused: identifier rejected",
    3: "Connection Refused: server unavailable",
    4: "Connection Refused: bad user name or password",
    5: "Connection Refused: not authorized"
  };

  /**
   * Format an error message text.
   * @private
   * @param {error} ERROR.KEY value above.
   * @param {substitutions} [array] substituted into the text.
   * @return the text with the substitutions made.
   */
  var format = function format(error, substitutions) {
    var text = error.text;
    if (substitutions) {
      var field, start;
      for (var i = 0; i < substitutions.length; i++) {
        field = "{" + i + "}";
        start = text.indexOf(field);
        if (start > 0) {
          var part1 = text.substring(0, start);
          var part2 = text.substring(start + field.length);
          text = part1 + substitutions[i] + part2;
        }
      }
    }
    return text;
  };

  //MQTT protocol and version          6    M    Q    I    s    d    p    3
  var MqttProtoIdentifierv3 = [0x00, 0x06, 0x4d, 0x51, 0x49, 0x73, 0x64, 0x70, 0x03];
  //MQTT proto/version for 311         4    M    Q    T    T    4
  var MqttProtoIdentifierv4 = [0x00, 0x04, 0x4d, 0x51, 0x54, 0x54, 0x04];

  /**
   * Construct an MQTT wire protocol message.
   * @param type MQTT packet type.
   * @param options optional wire message attributes.
   *
   * Optional properties
   *
   * messageIdentifier: message ID in the range [0..65535]
   * payloadMessage:	Application Message - PUBLISH only
   * connectStrings:	array of 0 or more Strings to be put into the CONNECT payload
   * topics:			array of strings (SUBSCRIBE, UNSUBSCRIBE)
   * requestQoS:		array of QoS values [0..2]
   *
   * "Flag" properties
   * cleanSession:	true if present / false if absent (CONNECT)
   * willMessage:  	true if present / false if absent (CONNECT)
   * isRetained:		true if present / false if absent (CONNECT)
   * userName:		true if present / false if absent (CONNECT)
   * password:		true if present / false if absent (CONNECT)
   * keepAliveInterval:	integer [0..65535]  (CONNECT)
   *
   * @private
   * @ignore
   */
  var WireMessage = function WireMessage(type, options) {
    this.type = type;
    for (var name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }
  };
  WireMessage.prototype.encode = function () {
    // Compute the first byte of the fixed header
    var first = (this.type & 0x0f) << 4;

    /*
     * Now calculate the length of the variable header + payload by adding up the lengths
     * of all the component parts
     */

    var remLength = 0;
    var topicStrLength = new Array();
    var destinationNameLength = 0;

    // if the message contains a messageIdentifier then we need two bytes for that
    if (this.messageIdentifier != undefined) remLength += 2;
    switch (this.type) {
      // If this a Connect then we need to include 12 bytes for its header
      case MESSAGE_TYPE.CONNECT:
        switch (this.mqttVersion) {
          case 3:
            remLength += MqttProtoIdentifierv3.length + 3;
            break;
          case 4:
            remLength += MqttProtoIdentifierv4.length + 3;
            break;
        }
        remLength += UTF8Length(this.clientId) + 2;
        if (this.willMessage != undefined) {
          remLength += UTF8Length(this.willMessage.destinationName) + 2;
          // Will message is always a string, sent as UTF-8 characters with a preceding length.
          var willMessagePayloadBytes = this.willMessage.payloadBytes;
          if (!(willMessagePayloadBytes instanceof Uint8Array)) willMessagePayloadBytes = new Uint8Array(payloadBytes);
          remLength += willMessagePayloadBytes.byteLength + 2;
        }
        if (this.userName != undefined) remLength += UTF8Length(this.userName) + 2;
        if (this.password != undefined) remLength += UTF8Length(this.password) + 2;
        break;

      // Subscribe, Unsubscribe can both contain topic strings
      case MESSAGE_TYPE.SUBSCRIBE:
        first |= 0x02; // Qos = 1;
        for (var i = 0; i < this.topics.length; i++) {
          topicStrLength[i] = UTF8Length(this.topics[i]);
          remLength += topicStrLength[i] + 2;
        }
        remLength += this.requestedQos.length; // 1 byte for each topic's Qos
        // QoS on Subscribe only
        break;
      case MESSAGE_TYPE.UNSUBSCRIBE:
        first |= 0x02; // Qos = 1;
        for (var i = 0; i < this.topics.length; i++) {
          topicStrLength[i] = UTF8Length(this.topics[i]);
          remLength += topicStrLength[i] + 2;
        }
        break;
      case MESSAGE_TYPE.PUBREL:
        first |= 0x02; // Qos = 1;
        break;
      case MESSAGE_TYPE.PUBLISH:
        if (this.payloadMessage.duplicate) first |= 0x08;
        first = first |= this.payloadMessage.qos << 1;
        if (this.payloadMessage.retained) first |= 0x01;
        destinationNameLength = UTF8Length(this.payloadMessage.destinationName);
        remLength += destinationNameLength + 2;
        var payloadBytes = this.payloadMessage.payloadBytes;
        remLength += payloadBytes.byteLength;
        if (payloadBytes instanceof ArrayBuffer) payloadBytes = new Uint8Array(payloadBytes);else if (!(payloadBytes instanceof Uint8Array)) payloadBytes = new Uint8Array(payloadBytes.buffer);
        break;
      case MESSAGE_TYPE.DISCONNECT:
        break;
      default:
        ;
    }

    // Now we can allocate a buffer for the message

    var mbi = encodeMBI(remLength); // Convert the length to MQTT MBI format
    var pos = mbi.length + 1; // Offset of start of variable header
    var buffer = new ArrayBuffer(remLength + pos);
    var byteStream = new Uint8Array(buffer); // view it as a sequence of bytes

    //Write the fixed header into the buffer
    byteStream[0] = first;
    byteStream.set(mbi, 1);

    // If this is a PUBLISH then the variable header starts with a topic
    if (this.type == MESSAGE_TYPE.PUBLISH) pos = writeString(this.payloadMessage.destinationName, destinationNameLength, byteStream, pos);
    // If this is a CONNECT then the variable header contains the protocol name/version, flags and keepalive time
    else if (this.type == MESSAGE_TYPE.CONNECT) {
      switch (this.mqttVersion) {
        case 3:
          byteStream.set(MqttProtoIdentifierv3, pos);
          pos += MqttProtoIdentifierv3.length;
          break;
        case 4:
          byteStream.set(MqttProtoIdentifierv4, pos);
          pos += MqttProtoIdentifierv4.length;
          break;
      }
      var connectFlags = 0;
      if (this.cleanSession) connectFlags = 0x02;
      if (this.willMessage != undefined) {
        connectFlags |= 0x04;
        connectFlags |= this.willMessage.qos << 3;
        if (this.willMessage.retained) {
          connectFlags |= 0x20;
        }
      }
      if (this.userName != undefined) connectFlags |= 0x80;
      if (this.password != undefined) connectFlags |= 0x40;
      byteStream[pos++] = connectFlags;
      pos = writeUint16(this.keepAliveInterval, byteStream, pos);
    }

    // Output the messageIdentifier - if there is one
    if (this.messageIdentifier != undefined) pos = writeUint16(this.messageIdentifier, byteStream, pos);
    switch (this.type) {
      case MESSAGE_TYPE.CONNECT:
        pos = writeString(this.clientId, UTF8Length(this.clientId), byteStream, pos);
        if (this.willMessage != undefined) {
          pos = writeString(this.willMessage.destinationName, UTF8Length(this.willMessage.destinationName), byteStream, pos);
          pos = writeUint16(willMessagePayloadBytes.byteLength, byteStream, pos);
          byteStream.set(willMessagePayloadBytes, pos);
          pos += willMessagePayloadBytes.byteLength;
        }
        if (this.userName != undefined) pos = writeString(this.userName, UTF8Length(this.userName), byteStream, pos);
        if (this.password != undefined) pos = writeString(this.password, UTF8Length(this.password), byteStream, pos);
        break;
      case MESSAGE_TYPE.PUBLISH:
        // PUBLISH has a text or binary payload, if text do not add a 2 byte length field, just the UTF characters.
        byteStream.set(payloadBytes, pos);
        break;

      //    	    case MESSAGE_TYPE.PUBREC:
      //    	    case MESSAGE_TYPE.PUBREL:
      //    	    case MESSAGE_TYPE.PUBCOMP:
      //    	    	break;

      case MESSAGE_TYPE.SUBSCRIBE:
        // SUBSCRIBE has a list of topic strings and request QoS
        for (var i = 0; i < this.topics.length; i++) {
          pos = writeString(this.topics[i], topicStrLength[i], byteStream, pos);
          byteStream[pos++] = this.requestedQos[i];
        }
        break;
      case MESSAGE_TYPE.UNSUBSCRIBE:
        // UNSUBSCRIBE has a list of topic strings
        for (var i = 0; i < this.topics.length; i++) pos = writeString(this.topics[i], topicStrLength[i], byteStream, pos);
        break;
      default:
      // Do nothing.
    }
    return buffer;
  };
  function decodeMessage(input, pos) {
    var startingPos = pos;
    var first = input[pos];
    var type = first >> 4;
    var messageInfo = first &= 0x0f;
    pos += 1;

    // Decode the remaining length (MBI format)

    var digit;
    var remLength = 0;
    var multiplier = 1;
    do {
      if (pos == input.length) {
        return [null, startingPos];
      }
      digit = input[pos++];
      remLength += (digit & 0x7F) * multiplier;
      multiplier *= 128;
    } while ((digit & 0x80) != 0);
    var endPos = pos + remLength;
    if (endPos > input.length) {
      return [null, startingPos];
    }
    var wireMessage = new WireMessage(type);
    switch (type) {
      case MESSAGE_TYPE.CONNACK:
        var connectAcknowledgeFlags = input[pos++];
        if (connectAcknowledgeFlags & 0x01) wireMessage.sessionPresent = true;
        wireMessage.returnCode = input[pos++];
        break;
      case MESSAGE_TYPE.PUBLISH:
        var qos = messageInfo >> 1 & 0x03;
        var len = readUint16(input, pos);
        pos += 2;
        var topicName = parseUTF8(input, pos, len);
        pos += len;
        // If QoS 1 or 2 there will be a messageIdentifier
        if (qos > 0) {
          wireMessage.messageIdentifier = readUint16(input, pos);
          pos += 2;
        }
        var message = new Message(input.subarray(pos, endPos));
        if ((messageInfo & 0x01) == 0x01) message.retained = true;
        if ((messageInfo & 0x08) == 0x08) message.duplicate = true;
        message.qos = qos;
        message.destinationName = topicName;
        wireMessage.payloadMessage = message;
        break;
      case MESSAGE_TYPE.PUBACK:
      case MESSAGE_TYPE.PUBREC:
      case MESSAGE_TYPE.PUBREL:
      case MESSAGE_TYPE.PUBCOMP:
      case MESSAGE_TYPE.UNSUBACK:
        wireMessage.messageIdentifier = readUint16(input, pos);
        break;
      case MESSAGE_TYPE.SUBACK:
        wireMessage.messageIdentifier = readUint16(input, pos);
        pos += 2;
        wireMessage.returnCode = input.subarray(pos, endPos);
        break;
      default:
        ;
    }
    return [wireMessage, endPos];
  }
  function writeUint16(input, buffer, offset) {
    buffer[offset++] = input >> 8; //MSB
    buffer[offset++] = input % 256; //LSB
    return offset;
  }
  function writeString(input, utf8Length, buffer, offset) {
    offset = writeUint16(utf8Length, buffer, offset);
    stringToUTF8(input, buffer, offset);
    return offset + utf8Length;
  }
  function readUint16(buffer, offset) {
    return 256 * buffer[offset] + buffer[offset + 1];
  }

  /**
   * Encodes an MQTT Multi-Byte Integer
   * @private
   */
  function encodeMBI(number) {
    var output = new Array(1);
    var numBytes = 0;
    do {
      var digit = number % 128;
      number = number >> 7;
      if (number > 0) {
        digit |= 0x80;
      }
      output[numBytes++] = digit;
    } while (number > 0 && numBytes < 4);
    return output;
  }

  /**
   * Takes a String and calculates its length in bytes when encoded in UTF8.
   * @private
   */
  function UTF8Length(input) {
    var output = 0;
    for (var i = 0; i < input.length; i++) {
      var charCode = input.charCodeAt(i);
      if (charCode > 0x7FF) {
        // Surrogate pair means its a 4 byte character
        if (0xD800 <= charCode && charCode <= 0xDBFF) {
          i++;
          output++;
        }
        output += 3;
      } else if (charCode > 0x7F) output += 2;else output++;
    }
    return output;
  }

  /**
   * Takes a String and writes it into an array as UTF8 encoded bytes.
   * @private
   */
  function stringToUTF8(input, output, start) {
    var pos = start;
    for (var i = 0; i < input.length; i++) {
      var charCode = input.charCodeAt(i);

      // Check for a surrogate pair.
      if (0xD800 <= charCode && charCode <= 0xDBFF) {
        var lowCharCode = input.charCodeAt(++i);
        if (isNaN(lowCharCode)) {
          throw new Error(format(ERROR.MALFORMED_UNICODE, [charCode, lowCharCode]));
        }
        charCode = (charCode - 0xD800 << 10) + (lowCharCode - 0xDC00) + 0x10000;
      }
      if (charCode <= 0x7F) {
        output[pos++] = charCode;
      } else if (charCode <= 0x7FF) {
        output[pos++] = charCode >> 6 & 0x1F | 0xC0;
        output[pos++] = charCode & 0x3F | 0x80;
      } else if (charCode <= 0xFFFF) {
        output[pos++] = charCode >> 12 & 0x0F | 0xE0;
        output[pos++] = charCode >> 6 & 0x3F | 0x80;
        output[pos++] = charCode & 0x3F | 0x80;
      } else {
        output[pos++] = charCode >> 18 & 0x07 | 0xF0;
        output[pos++] = charCode >> 12 & 0x3F | 0x80;
        output[pos++] = charCode >> 6 & 0x3F | 0x80;
        output[pos++] = charCode & 0x3F | 0x80;
      }
      ;
    }
    return output;
  }
  function parseUTF8(input, offset, length) {
    var output = "";
    var utf16;
    var pos = offset;
    while (pos < offset + length) {
      var byte1 = input[pos++];
      if (byte1 < 128) utf16 = byte1;else {
        var byte2 = input[pos++] - 128;
        if (byte2 < 0) throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), ""]));
        if (byte1 < 0xE0)
          // 2 byte character
          utf16 = 64 * (byte1 - 0xC0) + byte2;else {
          var byte3 = input[pos++] - 128;
          if (byte3 < 0) throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), byte3.toString(16)]));
          if (byte1 < 0xF0)
            // 3 byte character
            utf16 = 4096 * (byte1 - 0xE0) + 64 * byte2 + byte3;else {
            var byte4 = input[pos++] - 128;
            if (byte4 < 0) throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), byte3.toString(16), byte4.toString(16)]));
            if (byte1 < 0xF8)
              // 4 byte character
              utf16 = 262144 * (byte1 - 0xF0) + 4096 * byte2 + 64 * byte3 + byte4;else
              // longer encodings are not supported
              throw new Error(format(ERROR.MALFORMED_UTF, [byte1.toString(16), byte2.toString(16), byte3.toString(16), byte4.toString(16)]));
          }
        }
      }
      if (utf16 > 0xFFFF)
        // 4 byte character - express as a surrogate pair
        {
          utf16 -= 0x10000;
          output += String.fromCharCode(0xD800 + (utf16 >> 10)); // lead character
          utf16 = 0xDC00 + (utf16 & 0x3FF); // trail character
        }
      output += String.fromCharCode(utf16);
    }
    return output;
  }

  /**
   * Repeat keepalive requests, monitor responses.
   * @ignore
   */
  var Pinger = function Pinger(client, window, keepAliveInterval) {
    this._client = client;
    this._window = window;
    this._keepAliveInterval = keepAliveInterval * 1000;
    this.isReset = false;
    var pingReq = new WireMessage(MESSAGE_TYPE.PINGREQ).encode();
    var doTimeout = function doTimeout(pinger) {
      return function () {
        return doPing.apply(pinger);
      };
    };

    /** @ignore */
    var doPing = function doPing() {
      if (!this.isReset) {
        this._client._trace("Pinger.doPing", "Timed out");
        this._client._disconnected(ERROR.PING_TIMEOUT.code, format(ERROR.PING_TIMEOUT));
      } else {
        this.isReset = false;
        this._client._trace("Pinger.doPing", "send PINGREQ");
        this._client.socket.send(pingReq);
        this.timeout = this._window.setTimeout(doTimeout(this), this._keepAliveInterval);
      }
    };
    this.reset = function () {
      this.isReset = true;
      this._window.clearTimeout(this.timeout);
      if (this._keepAliveInterval > 0) this.timeout = setTimeout(doTimeout(this), this._keepAliveInterval);
    };
    this.cancel = function () {
      this._window.clearTimeout(this.timeout);
    };
  };

  /**
   * Monitor request completion.
   * @ignore
   */
  var Timeout = function Timeout(client, window, timeoutSeconds, action, args) {
    this._window = window;
    if (!timeoutSeconds) timeoutSeconds = 30;
    var doTimeout = function doTimeout(action, client, args) {
      return function () {
        return action.apply(client, args);
      };
    };
    this.timeout = setTimeout(doTimeout(action, client, args), timeoutSeconds * 1000);
    this.cancel = function () {
      this._window.clearTimeout(this.timeout);
    };
  };

  /*
   * Internal implementation of the Websockets MQTT V3.1 client.
   *
   * @name Paho.MQTT.ClientImpl @constructor
   * @param {String} host the DNS nameof the webSocket host.
   * @param {Number} port the port number for that host.
   * @param {String} clientId the MQ client identifier.
   */
  var ClientImpl = function ClientImpl(uri, host, port, path, clientId) {
    // Check dependencies are satisfied in this browser.
    if (!("WebSocket" in global && global["WebSocket"] !== null)) {
      throw new Error(format(ERROR.UNSUPPORTED, ["WebSocket"]));
    }
    if (!("localStorage" in global && global["localStorage"] !== null)) {
      throw new Error(format(ERROR.UNSUPPORTED, ["localStorage"]));
    }
    if (!("ArrayBuffer" in global && global["ArrayBuffer"] !== null)) {
      throw new Error(format(ERROR.UNSUPPORTED, ["ArrayBuffer"]));
    }
    this._trace("Paho.MQTT.Client", uri, host, port, path, clientId);
    this.host = host;
    this.port = port;
    this.path = path;
    this.uri = uri;
    this.clientId = clientId;

    // Local storagekeys are qualified with the following string.
    // The conditional inclusion of path in the key is for backward
    // compatibility to when the path was not configurable and assumed to
    // be /mqtt
    this._localKey = host + ":" + port + (path != "/mqtt" ? ":" + path : "") + ":" + clientId + ":";

    // Create private instance-only message queue
    // Internal queue of messages to be sent, in sending order.
    this._msg_queue = [];

    // Messages we have sent and are expecting a response for, indexed by their respective message ids.
    this._sentMessages = {};

    // Messages we have received and acknowleged and are expecting a confirm message for
    // indexed by their respective message ids.
    this._receivedMessages = {};

    // Internal list of callbacks to be executed when messages
    // have been successfully sent over web socket, e.g. disconnect
    // when it doesn't have to wait for ACK, just message is dispatched.
    this._notify_msg_sent = {};

    // Unique identifier for SEND messages, incrementing
    // counter as messages are sent.
    this._message_identifier = 1;

    // Used to determine the transmission sequence of stored sent messages.
    this._sequence = 0;

    // Load the local state, if any, from the saved version, only restore state relevant to this client.
    for (var key in localStorage) if (key.indexOf("Sent:" + this._localKey) == 0 || key.indexOf("Received:" + this._localKey) == 0) this.restore(key);
  };

  // Messaging Client public instance members.
  ClientImpl.prototype.host;
  ClientImpl.prototype.port;
  ClientImpl.prototype.path;
  ClientImpl.prototype.uri;
  ClientImpl.prototype.clientId;

  // Messaging Client private instance members.
  ClientImpl.prototype.socket;
  /* true once we have received an acknowledgement to a CONNECT packet. */
  ClientImpl.prototype.connected = false;
  /* The largest message identifier allowed, may not be larger than 2**16 but
   * if set smaller reduces the maximum number of outbound messages allowed.
   */
  ClientImpl.prototype.maxMessageIdentifier = 65536;
  ClientImpl.prototype.connectOptions;
  ClientImpl.prototype.hostIndex;
  ClientImpl.prototype.onConnectionLost;
  ClientImpl.prototype.onMessageDelivered;
  ClientImpl.prototype.onMessageArrived;
  ClientImpl.prototype.traceFunction;
  ClientImpl.prototype._msg_queue = null;
  ClientImpl.prototype._connectTimeout;
  /* The sendPinger monitors how long we allow before we send data to prove to the server that we are alive. */
  ClientImpl.prototype.sendPinger = null;
  /* The receivePinger monitors how long we allow before we require evidence that the server is alive. */
  ClientImpl.prototype.receivePinger = null;
  ClientImpl.prototype.receiveBuffer = null;
  ClientImpl.prototype._traceBuffer = null;
  ClientImpl.prototype._MAX_TRACE_ENTRIES = 100;
  ClientImpl.prototype.connect = function (connectOptions) {
    var connectOptionsMasked = this._traceMask(connectOptions, "password");
    this._trace("Client.connect", connectOptionsMasked, this.socket, this.connected);
    if (this.connected) throw new Error(format(ERROR.INVALID_STATE, ["already connected"]));
    if (this.socket) throw new Error(format(ERROR.INVALID_STATE, ["already connected"]));
    this.connectOptions = connectOptions;
    if (connectOptions.uris) {
      this.hostIndex = 0;
      this._doConnect(connectOptions.uris[0]);
    } else {
      this._doConnect(this.uri);
    }
  };
  ClientImpl.prototype.subscribe = function (filter, subscribeOptions) {
    this._trace("Client.subscribe", filter, subscribeOptions);
    if (!this.connected) throw new Error(format(ERROR.INVALID_STATE, ["not connected"]));
    var wireMessage = new WireMessage(MESSAGE_TYPE.SUBSCRIBE);
    wireMessage.topics = [filter];
    if (subscribeOptions.qos != undefined) wireMessage.requestedQos = [subscribeOptions.qos];else wireMessage.requestedQos = [0];
    if (subscribeOptions.onSuccess) {
      wireMessage.onSuccess = function (grantedQos) {
        subscribeOptions.onSuccess({
          invocationContext: subscribeOptions.invocationContext,
          grantedQos: grantedQos
        });
      };
    }
    if (subscribeOptions.onFailure) {
      wireMessage.onFailure = function (errorCode) {
        subscribeOptions.onFailure({
          invocationContext: subscribeOptions.invocationContext,
          errorCode: errorCode
        });
      };
    }
    if (subscribeOptions.timeout) {
      wireMessage.timeOut = new Timeout(this, window, subscribeOptions.timeout, subscribeOptions.onFailure, [{
        invocationContext: subscribeOptions.invocationContext,
        errorCode: ERROR.SUBSCRIBE_TIMEOUT.code,
        errorMessage: format(ERROR.SUBSCRIBE_TIMEOUT)
      }]);
    }

    // All subscriptions return a SUBACK.
    this._requires_ack(wireMessage);
    this._schedule_message(wireMessage);
  };

  /** @ignore */
  ClientImpl.prototype.unsubscribe = function (filter, unsubscribeOptions) {
    this._trace("Client.unsubscribe", filter, unsubscribeOptions);
    if (!this.connected) throw new Error(format(ERROR.INVALID_STATE, ["not connected"]));
    var wireMessage = new WireMessage(MESSAGE_TYPE.UNSUBSCRIBE);
    wireMessage.topics = [filter];
    if (unsubscribeOptions.onSuccess) {
      wireMessage.callback = function () {
        unsubscribeOptions.onSuccess({
          invocationContext: unsubscribeOptions.invocationContext
        });
      };
    }
    if (unsubscribeOptions.timeout) {
      wireMessage.timeOut = new Timeout(this, window, unsubscribeOptions.timeout, unsubscribeOptions.onFailure, [{
        invocationContext: unsubscribeOptions.invocationContext,
        errorCode: ERROR.UNSUBSCRIBE_TIMEOUT.code,
        errorMessage: format(ERROR.UNSUBSCRIBE_TIMEOUT)
      }]);
    }

    // All unsubscribes return a SUBACK.
    this._requires_ack(wireMessage);
    this._schedule_message(wireMessage);
  };
  ClientImpl.prototype.send = function (message) {
    this._trace("Client.send", message);
    if (!this.connected) throw new Error(format(ERROR.INVALID_STATE, ["not connected"]));
    wireMessage = new WireMessage(MESSAGE_TYPE.PUBLISH);
    wireMessage.payloadMessage = message;
    if (message.qos > 0) this._requires_ack(wireMessage);else if (this.onMessageDelivered) this._notify_msg_sent[wireMessage] = this.onMessageDelivered(wireMessage.payloadMessage);
    this._schedule_message(wireMessage);
  };
  ClientImpl.prototype.disconnect = function () {
    this._trace("Client.disconnect");
    if (!this.socket) throw new Error(format(ERROR.INVALID_STATE, ["not connecting or connected"]));
    wireMessage = new WireMessage(MESSAGE_TYPE.DISCONNECT);

    // Run the disconnected call back as soon as the message has been sent,
    // in case of a failure later on in the disconnect processing.
    // as a consequence, the _disconected call back may be run several times.
    this._notify_msg_sent[wireMessage] = scope(this._disconnected, this);
    this._schedule_message(wireMessage);
  };
  ClientImpl.prototype.getTraceLog = function () {
    if (this._traceBuffer !== null) {
      this._trace("Client.getTraceLog", new Date());
      this._trace("Client.getTraceLog in flight messages", this._sentMessages.length);
      for (var key in this._sentMessages) this._trace("_sentMessages ", key, this._sentMessages[key]);
      for (var key in this._receivedMessages) this._trace("_receivedMessages ", key, this._receivedMessages[key]);
      return this._traceBuffer;
    }
  };
  ClientImpl.prototype.startTrace = function () {
    if (this._traceBuffer === null) {
      this._traceBuffer = [];
    }
    this._trace("Client.startTrace", new Date(), version);
  };
  ClientImpl.prototype.stopTrace = function () {
    delete this._traceBuffer;
  };
  ClientImpl.prototype._doConnect = function (wsurl) {
    // When the socket is open, this client will send the CONNECT WireMessage using the saved parameters.
    if (this.connectOptions.useSSL) {
      var uriParts = wsurl.split(":");
      uriParts[0] = "wss";
      wsurl = uriParts.join(":");
    }
    this.connected = false;
    if (this.connectOptions.mqttVersion < 4) {
      this.socket = new WebSocket(wsurl, ["mqttv3.1"]);
    } else {
      this.socket = new WebSocket(wsurl, ["mqtt"]);
    }
    this.socket.binaryType = 'arraybuffer';
    this.socket.onopen = scope(this._on_socket_open, this);
    this.socket.onmessage = scope(this._on_socket_message, this);
    this.socket.onerror = scope(this._on_socket_error, this);
    this.socket.onclose = scope(this._on_socket_close, this);
    this.sendPinger = new Pinger(this, window, this.connectOptions.keepAliveInterval);
    this.receivePinger = new Pinger(this, window, this.connectOptions.keepAliveInterval);
    this._connectTimeout = new Timeout(this, window, this.connectOptions.timeout, this._disconnected, [ERROR.CONNECT_TIMEOUT.code, format(ERROR.CONNECT_TIMEOUT)]);
  };

  // Schedule a new message to be sent over the WebSockets
  // connection. CONNECT messages cause WebSocket connection
  // to be started. All other messages are queued internally
  // until this has happened. When WS connection starts, process
  // all outstanding messages.
  ClientImpl.prototype._schedule_message = function (message) {
    this._msg_queue.push(message);
    // Process outstanding messages in the queue if we have an  open socket, and have received CONNACK.
    if (this.connected) {
      this._process_queue();
    }
  };
  ClientImpl.prototype.store = function (prefix, wireMessage) {
    var storedMessage = {
      type: wireMessage.type,
      messageIdentifier: wireMessage.messageIdentifier,
      version: 1
    };
    switch (wireMessage.type) {
      case MESSAGE_TYPE.PUBLISH:
        if (wireMessage.pubRecReceived) storedMessage.pubRecReceived = true;

        // Convert the payload to a hex string.
        storedMessage.payloadMessage = {};
        var hex = "";
        var messageBytes = wireMessage.payloadMessage.payloadBytes;
        for (var i = 0; i < messageBytes.length; i++) {
          if (messageBytes[i] <= 0xF) hex = hex + "0" + messageBytes[i].toString(16);else hex = hex + messageBytes[i].toString(16);
        }
        storedMessage.payloadMessage.payloadHex = hex;
        storedMessage.payloadMessage.qos = wireMessage.payloadMessage.qos;
        storedMessage.payloadMessage.destinationName = wireMessage.payloadMessage.destinationName;
        if (wireMessage.payloadMessage.duplicate) storedMessage.payloadMessage.duplicate = true;
        if (wireMessage.payloadMessage.retained) storedMessage.payloadMessage.retained = true;

        // Add a sequence number to sent messages.
        if (prefix.indexOf("Sent:") == 0) {
          if (wireMessage.sequence === undefined) wireMessage.sequence = ++this._sequence;
          storedMessage.sequence = wireMessage.sequence;
        }
        break;
      default:
        throw Error(format(ERROR.INVALID_STORED_DATA, [key, storedMessage]));
    }
    localStorage.setItem(prefix + this._localKey + wireMessage.messageIdentifier, JSON.stringify(storedMessage));
  };
  ClientImpl.prototype.restore = function (key) {
    var value = localStorage.getItem(key);
    var storedMessage = JSON.parse(value);
    var wireMessage = new WireMessage(storedMessage.type, storedMessage);
    switch (storedMessage.type) {
      case MESSAGE_TYPE.PUBLISH:
        // Replace the payload message with a Message object.
        var hex = storedMessage.payloadMessage.payloadHex;
        var buffer = new ArrayBuffer(hex.length / 2);
        var byteStream = new Uint8Array(buffer);
        var i = 0;
        while (hex.length >= 2) {
          var x = parseInt(hex.substring(0, 2), 16);
          hex = hex.substring(2, hex.length);
          byteStream[i++] = x;
        }
        var payloadMessage = new Message(byteStream);
        payloadMessage.qos = storedMessage.payloadMessage.qos;
        payloadMessage.destinationName = storedMessage.payloadMessage.destinationName;
        if (storedMessage.payloadMessage.duplicate) payloadMessage.duplicate = true;
        if (storedMessage.payloadMessage.retained) payloadMessage.retained = true;
        wireMessage.payloadMessage = payloadMessage;
        break;
      default:
        throw Error(format(ERROR.INVALID_STORED_DATA, [key, value]));
    }
    if (key.indexOf("Sent:" + this._localKey) == 0) {
      wireMessage.payloadMessage.duplicate = true;
      this._sentMessages[wireMessage.messageIdentifier] = wireMessage;
    } else if (key.indexOf("Received:" + this._localKey) == 0) {
      this._receivedMessages[wireMessage.messageIdentifier] = wireMessage;
    }
  };
  ClientImpl.prototype._process_queue = function () {
    var message = null;
    // Process messages in order they were added
    var fifo = this._msg_queue.reverse();

    // Send all queued messages down socket connection
    while (message = fifo.pop()) {
      this._socket_send(message);
      // Notify listeners that message was successfully sent
      if (this._notify_msg_sent[message]) {
        this._notify_msg_sent[message]();
        delete this._notify_msg_sent[message];
      }
    }
  };

  /**
   * Expect an ACK response for this message. Add message to the set of in progress
   * messages and set an unused identifier in this message.
   * @ignore
   */
  ClientImpl.prototype._requires_ack = function (wireMessage) {
    var messageCount = Object.keys(this._sentMessages).length;
    if (messageCount > this.maxMessageIdentifier) throw Error("Too many messages:" + messageCount);
    while (this._sentMessages[this._message_identifier] !== undefined) {
      this._message_identifier++;
    }
    wireMessage.messageIdentifier = this._message_identifier;
    this._sentMessages[wireMessage.messageIdentifier] = wireMessage;
    if (wireMessage.type === MESSAGE_TYPE.PUBLISH) {
      this.store("Sent:", wireMessage);
    }
    if (this._message_identifier === this.maxMessageIdentifier) {
      this._message_identifier = 1;
    }
  };

  /**
   * Called when the underlying websocket has been opened.
   * @ignore
   */
  ClientImpl.prototype._on_socket_open = function () {
    // Create the CONNECT message object.
    var wireMessage = new WireMessage(MESSAGE_TYPE.CONNECT, this.connectOptions);
    wireMessage.clientId = this.clientId;
    this._socket_send(wireMessage);
  };

  /**
   * Called when the underlying websocket has received a complete packet.
   * @ignore
   */
  ClientImpl.prototype._on_socket_message = function (event) {
    this._trace("Client._on_socket_message", event.data);
    // Reset the receive ping timer, we now have evidence the server is alive.
    this.receivePinger.reset();
    var messages = this._deframeMessages(event.data);
    for (var i = 0; i < messages.length; i += 1) {
      this._handleMessage(messages[i]);
    }
  };
  ClientImpl.prototype._deframeMessages = function (data) {
    var byteArray = new Uint8Array(data);
    if (this.receiveBuffer) {
      var newData = new Uint8Array(this.receiveBuffer.length + byteArray.length);
      newData.set(this.receiveBuffer);
      newData.set(byteArray, this.receiveBuffer.length);
      byteArray = newData;
      delete this.receiveBuffer;
    }
    try {
      var offset = 0;
      var messages = [];
      while (offset < byteArray.length) {
        var result = decodeMessage(byteArray, offset);
        var wireMessage = result[0];
        offset = result[1];
        if (wireMessage !== null) {
          messages.push(wireMessage);
        } else {
          break;
        }
      }
      if (offset < byteArray.length) {
        this.receiveBuffer = byteArray.subarray(offset);
      }
    } catch (error) {
      this._disconnected(ERROR.INTERNAL_ERROR.code, format(ERROR.INTERNAL_ERROR, [error.message, error.stack.toString()]));
      return;
    }
    return messages;
  };
  ClientImpl.prototype._handleMessage = function (wireMessage) {
    this._trace("Client._handleMessage", wireMessage);
    try {
      switch (wireMessage.type) {
        case MESSAGE_TYPE.CONNACK:
          this._connectTimeout.cancel();

          // If we have started using clean session then clear up the local state.
          if (this.connectOptions.cleanSession) {
            for (var key in this._sentMessages) {
              var sentMessage = this._sentMessages[key];
              localStorage.removeItem("Sent:" + this._localKey + sentMessage.messageIdentifier);
            }
            this._sentMessages = {};
            for (var key in this._receivedMessages) {
              var receivedMessage = this._receivedMessages[key];
              localStorage.removeItem("Received:" + this._localKey + receivedMessage.messageIdentifier);
            }
            this._receivedMessages = {};
          }
          // Client connected and ready for business.
          if (wireMessage.returnCode === 0) {
            this.connected = true;
            // Jump to the end of the list of uris and stop looking for a good host.
            if (this.connectOptions.uris) this.hostIndex = this.connectOptions.uris.length;
          } else {
            this._disconnected(ERROR.CONNACK_RETURNCODE.code, format(ERROR.CONNACK_RETURNCODE, [wireMessage.returnCode, CONNACK_RC[wireMessage.returnCode]]));
            break;
          }

          // Resend messages.
          var sequencedMessages = new Array();
          for (var msgId in this._sentMessages) {
            if (this._sentMessages.hasOwnProperty(msgId)) sequencedMessages.push(this._sentMessages[msgId]);
          }

          // Sort sentMessages into the original sent order.
          var sequencedMessages = sequencedMessages.sort(function (a, b) {
            return a.sequence - b.sequence;
          });
          for (var i = 0, len = sequencedMessages.length; i < len; i++) {
            var sentMessage = sequencedMessages[i];
            if (sentMessage.type == MESSAGE_TYPE.PUBLISH && sentMessage.pubRecReceived) {
              var pubRelMessage = new WireMessage(MESSAGE_TYPE.PUBREL, {
                messageIdentifier: sentMessage.messageIdentifier
              });
              this._schedule_message(pubRelMessage);
            } else {
              this._schedule_message(sentMessage);
            }
            ;
          }

          // Execute the connectOptions.onSuccess callback if there is one.
          if (this.connectOptions.onSuccess) {
            this.connectOptions.onSuccess({
              invocationContext: this.connectOptions.invocationContext
            });
          }

          // Process all queued messages now that the connection is established.
          this._process_queue();
          break;
        case MESSAGE_TYPE.PUBLISH:
          this._receivePublish(wireMessage);
          break;
        case MESSAGE_TYPE.PUBACK:
          var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
          // If this is a re flow of a PUBACK after we have restarted receivedMessage will not exist.
          if (sentMessage) {
            delete this._sentMessages[wireMessage.messageIdentifier];
            localStorage.removeItem("Sent:" + this._localKey + wireMessage.messageIdentifier);
            if (this.onMessageDelivered) this.onMessageDelivered(sentMessage.payloadMessage);
          }
          break;
        case MESSAGE_TYPE.PUBREC:
          var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
          // If this is a re flow of a PUBREC after we have restarted receivedMessage will not exist.
          if (sentMessage) {
            sentMessage.pubRecReceived = true;
            var pubRelMessage = new WireMessage(MESSAGE_TYPE.PUBREL, {
              messageIdentifier: wireMessage.messageIdentifier
            });
            this.store("Sent:", sentMessage);
            this._schedule_message(pubRelMessage);
          }
          break;
        case MESSAGE_TYPE.PUBREL:
          var receivedMessage = this._receivedMessages[wireMessage.messageIdentifier];
          localStorage.removeItem("Received:" + this._localKey + wireMessage.messageIdentifier);
          // If this is a re flow of a PUBREL after we have restarted receivedMessage will not exist.
          if (receivedMessage) {
            this._receiveMessage(receivedMessage);
            delete this._receivedMessages[wireMessage.messageIdentifier];
          }
          // Always flow PubComp, we may have previously flowed PubComp but the server lost it and restarted.
          var pubCompMessage = new WireMessage(MESSAGE_TYPE.PUBCOMP, {
            messageIdentifier: wireMessage.messageIdentifier
          });
          this._schedule_message(pubCompMessage);
          break;
        case MESSAGE_TYPE.PUBCOMP:
          var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
          delete this._sentMessages[wireMessage.messageIdentifier];
          localStorage.removeItem("Sent:" + this._localKey + wireMessage.messageIdentifier);
          if (this.onMessageDelivered) this.onMessageDelivered(sentMessage.payloadMessage);
          break;
        case MESSAGE_TYPE.SUBACK:
          var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
          if (sentMessage) {
            if (sentMessage.timeOut) sentMessage.timeOut.cancel();
            wireMessage.returnCode.indexOf = Array.prototype.indexOf;
            if (wireMessage.returnCode.indexOf(0x80) !== -1) {
              if (sentMessage.onFailure) {
                sentMessage.onFailure(wireMessage.returnCode);
              }
            } else if (sentMessage.onSuccess) {
              sentMessage.onSuccess(wireMessage.returnCode);
            }
            delete this._sentMessages[wireMessage.messageIdentifier];
          }
          break;
        case MESSAGE_TYPE.UNSUBACK:
          var sentMessage = this._sentMessages[wireMessage.messageIdentifier];
          if (sentMessage) {
            if (sentMessage.timeOut) sentMessage.timeOut.cancel();
            if (sentMessage.callback) {
              sentMessage.callback();
            }
            delete this._sentMessages[wireMessage.messageIdentifier];
          }
          break;
        case MESSAGE_TYPE.PINGRESP:
          /* The sendPinger or receivePinger may have sent a ping, the receivePinger has already been reset. */
          this.sendPinger.reset();
          break;
        case MESSAGE_TYPE.DISCONNECT:
          // Clients do not expect to receive disconnect packets.
          this._disconnected(ERROR.INVALID_MQTT_MESSAGE_TYPE.code, format(ERROR.INVALID_MQTT_MESSAGE_TYPE, [wireMessage.type]));
          break;
        default:
          this._disconnected(ERROR.INVALID_MQTT_MESSAGE_TYPE.code, format(ERROR.INVALID_MQTT_MESSAGE_TYPE, [wireMessage.type]));
      }
      ;
    } catch (error) {
      this._disconnected(ERROR.INTERNAL_ERROR.code, format(ERROR.INTERNAL_ERROR, [error.message, error.stack.toString()]));
      return;
    }
  };

  /** @ignore */
  ClientImpl.prototype._on_socket_error = function (error) {
    this._disconnected(ERROR.SOCKET_ERROR.code, format(ERROR.SOCKET_ERROR, [error.data]));
  };

  /** @ignore */
  ClientImpl.prototype._on_socket_close = function () {
    this._disconnected(ERROR.SOCKET_CLOSE.code, format(ERROR.SOCKET_CLOSE));
  };

  /** @ignore */
  ClientImpl.prototype._socket_send = function (wireMessage) {
    if (wireMessage.type == 1) {
      var wireMessageMasked = this._traceMask(wireMessage, "password");
      this._trace("Client._socket_send", wireMessageMasked);
    } else this._trace("Client._socket_send", wireMessage);
    this.socket.send(wireMessage.encode());
    /* We have proved to the server we are alive. */
    this.sendPinger.reset();
  };

  /** @ignore */
  ClientImpl.prototype._receivePublish = function (wireMessage) {
    switch (wireMessage.payloadMessage.qos) {
      case "undefined":
      case 0:
        this._receiveMessage(wireMessage);
        break;
      case 1:
        var pubAckMessage = new WireMessage(MESSAGE_TYPE.PUBACK, {
          messageIdentifier: wireMessage.messageIdentifier
        });
        this._schedule_message(pubAckMessage);
        this._receiveMessage(wireMessage);
        break;
      case 2:
        this._receivedMessages[wireMessage.messageIdentifier] = wireMessage;
        this.store("Received:", wireMessage);
        var pubRecMessage = new WireMessage(MESSAGE_TYPE.PUBREC, {
          messageIdentifier: wireMessage.messageIdentifier
        });
        this._schedule_message(pubRecMessage);
        break;
      default:
        throw Error("Invaild qos=" + wireMmessage.payloadMessage.qos);
    }
    ;
  };

  /** @ignore */
  ClientImpl.prototype._receiveMessage = function (wireMessage) {
    if (this.onMessageArrived) {
      this.onMessageArrived(wireMessage.payloadMessage);
    }
  };

  /**
   * Client has disconnected either at its own request or because the server
   * or network disconnected it. Remove all non-durable state.
   * @param {errorCode} [number] the error number.
   * @param {errorText} [string] the error text.
   * @ignore
   */
  ClientImpl.prototype._disconnected = function (errorCode, errorText) {
    this._trace("Client._disconnected", errorCode, errorText);
    this.sendPinger.cancel();
    this.receivePinger.cancel();
    if (this._connectTimeout) this._connectTimeout.cancel();
    // Clear message buffers.
    this._msg_queue = [];
    this._notify_msg_sent = {};
    if (this.socket) {
      // Cancel all socket callbacks so that they cannot be driven again by this socket.
      this.socket.onopen = null;
      this.socket.onmessage = null;
      this.socket.onerror = null;
      this.socket.onclose = null;
      if (this.socket.readyState === 1) this.socket.close();
      delete this.socket;
    }
    if (this.connectOptions.uris && this.hostIndex < this.connectOptions.uris.length - 1) {
      // Try the next host.
      this.hostIndex++;
      this._doConnect(this.connectOptions.uris[this.hostIndex]);
    } else {
      if (errorCode === undefined) {
        errorCode = ERROR.OK.code;
        errorText = format(ERROR.OK);
      }

      // Run any application callbacks last as they may attempt to reconnect and hence create a new socket.
      if (this.connected) {
        this.connected = false;
        // Execute the connectionLostCallback if there is one, and we were connected.
        if (this.onConnectionLost) this.onConnectionLost({
          errorCode: errorCode,
          errorMessage: errorText
        });
      } else {
        // Otherwise we never had a connection, so indicate that the connect has failed.
        if (this.connectOptions.mqttVersion === 4 && this.connectOptions.mqttVersionExplicit === false) {
          this._trace("Failed to connect V4, dropping back to V3");
          this.connectOptions.mqttVersion = 3;
          if (this.connectOptions.uris) {
            this.hostIndex = 0;
            this._doConnect(this.connectOptions.uris[0]);
          } else {
            this._doConnect(this.uri);
          }
        } else if (this.connectOptions.onFailure) {
          this.connectOptions.onFailure({
            invocationContext: this.connectOptions.invocationContext,
            errorCode: errorCode,
            errorMessage: errorText
          });
        }
      }
    }
  };

  /** @ignore */
  ClientImpl.prototype._trace = function () {
    // Pass trace message back to client's callback function
    if (this.traceFunction) {
      for (var i in arguments) {
        if (typeof arguments[i] !== "undefined") arguments[i] = JSON.stringify(arguments[i]);
      }
      var record = Array.prototype.slice.call(arguments).join("");
      this.traceFunction({
        severity: "Debug",
        message: record
      });
    }

    //buffer style trace
    if (this._traceBuffer !== null) {
      for (var i = 0, max = arguments.length; i < max; i++) {
        if (this._traceBuffer.length == this._MAX_TRACE_ENTRIES) {
          this._traceBuffer.shift();
        }
        if (i === 0) this._traceBuffer.push(arguments[i]);else if (typeof arguments[i] === "undefined") this._traceBuffer.push(arguments[i]);else this._traceBuffer.push("  " + JSON.stringify(arguments[i]));
      }
      ;
    }
    ;
  };

  /** @ignore */
  ClientImpl.prototype._traceMask = function (traceObject, masked) {
    var traceObjectMasked = {};
    for (var attr in traceObject) {
      if (traceObject.hasOwnProperty(attr)) {
        if (attr == masked) traceObjectMasked[attr] = "******";else traceObjectMasked[attr] = traceObject[attr];
      }
    }
    return traceObjectMasked;
  };

  // ------------------------------------------------------------------------
  // Public Programming interface.
  // ------------------------------------------------------------------------

  /**
   * The JavaScript application communicates to the server using a {@link Paho.MQTT.Client} object.
   * <p>
   * Most applications will create just one Client object and then call its connect() method,
   * however applications can create more than one Client object if they wish.
   * In this case the combination of host, port and clientId attributes must be different for each Client object.
   * <p>
   * The send, subscribe and unsubscribe methods are implemented as asynchronous JavaScript methods
   * (even though the underlying protocol exchange might be synchronous in nature).
   * This means they signal their completion by calling back to the application,
   * via Success or Failure callback functions provided by the application on the method in question.
   * Such callbacks are called at most once per method invocation and do not persist beyond the lifetime
   * of the script that made the invocation.
   * <p>
   * In contrast there are some callback functions, most notably <i>onMessageArrived</i>,
   * that are defined on the {@link Paho.MQTT.Client} object.
   * These may get called multiple times, and aren't directly related to specific method invocations made by the client.
   *
   * @name Paho.MQTT.Client
   *
   * @constructor
   *
   * @param {string} host - the address of the messaging server, as a fully qualified WebSocket URI, as a DNS name or dotted decimal IP address.
   * @param {number} port - the port number to connect to - only required if host is not a URI
   * @param {string} path - the path on the host to connect to - only used if host is not a URI. Default: '/mqtt'.
   * @param {string} clientId - the Messaging client identifier, between 1 and 23 characters in length.
   *
   * @property {string} host - <i>read only</i> the server's DNS hostname or dotted decimal IP address.
   * @property {number} port - <i>read only</i> the server's port.
   * @property {string} path - <i>read only</i> the server's path.
   * @property {string} clientId - <i>read only</i> used when connecting to the server.
   * @property {function} onConnectionLost - called when a connection has been lost.
   *                            after a connect() method has succeeded.
   *                            Establish the call back used when a connection has been lost. The connection may be
   *                            lost because the client initiates a disconnect or because the server or network
   *                            cause the client to be disconnected. The disconnect call back may be called without
   *                            the connectionComplete call back being invoked if, for example the client fails to
   *                            connect.
   *                            A single response object parameter is passed to the onConnectionLost callback containing the following fields:
   *                            <ol>
   *                            <li>errorCode
   *                            <li>errorMessage
   *                            </ol>
   * @property {function} onMessageDelivered called when a message has been delivered.
   *                            All processing that this Client will ever do has been completed. So, for example,
   *                            in the case of a Qos=2 message sent by this client, the PubComp flow has been received from the server
   *                            and the message has been removed from persistent storage before this callback is invoked.
   *                            Parameters passed to the onMessageDelivered callback are:
   *                            <ol>
   *                            <li>{@link Paho.MQTT.Message} that was delivered.
   *                            </ol>
   * @property {function} onMessageArrived called when a message has arrived in this Paho.MQTT.client.
   *                            Parameters passed to the onMessageArrived callback are:
   *                            <ol>
   *                            <li>{@link Paho.MQTT.Message} that has arrived.
   *                            </ol>
   */
  var Client = function Client(host, port, path, clientId) {
    var uri;
    if (typeof host !== "string") throw new Error(format(ERROR.INVALID_TYPE, [_typeof(host), "host"]));
    if (arguments.length == 2) {
      // host: must be full ws:// uri
      // port: clientId
      clientId = port;
      uri = host;
      var match = uri.match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);
      if (match) {
        host = match[4] || match[2];
        port = parseInt(match[7]);
        path = match[8];
      } else {
        throw new Error(format(ERROR.INVALID_ARGUMENT, [host, "host"]));
      }
    } else {
      if (arguments.length == 3) {
        clientId = path;
        path = "/mqtt";
      }
      if (typeof port !== "number" || port < 0) throw new Error(format(ERROR.INVALID_TYPE, [_typeof(port), "port"]));
      if (typeof path !== "string") throw new Error(format(ERROR.INVALID_TYPE, [_typeof(path), "path"]));
      var ipv6AddSBracket = host.indexOf(":") != -1 && host.slice(0, 1) != "[" && host.slice(-1) != "]";
      uri = "ws://" + (ipv6AddSBracket ? "[" + host + "]" : host) + ":" + port + path;
    }
    var clientIdLength = 0;
    for (var i = 0; i < clientId.length; i++) {
      var charCode = clientId.charCodeAt(i);
      if (0xD800 <= charCode && charCode <= 0xDBFF) {
        i++; // Surrogate pair.
      }
      clientIdLength++;
    }
    if (typeof clientId !== "string" || clientIdLength > 65535) throw new Error(format(ERROR.INVALID_ARGUMENT, [clientId, "clientId"]));
    var client = new ClientImpl(uri, host, port, path, clientId);
    this._getHost = function () {
      return host;
    };
    this._setHost = function () {
      throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
    };
    this._getPort = function () {
      return port;
    };
    this._setPort = function () {
      throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
    };
    this._getPath = function () {
      return path;
    };
    this._setPath = function () {
      throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
    };
    this._getURI = function () {
      return uri;
    };
    this._setURI = function () {
      throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
    };
    this._getClientId = function () {
      return client.clientId;
    };
    this._setClientId = function () {
      throw new Error(format(ERROR.UNSUPPORTED_OPERATION));
    };
    this._getOnConnectionLost = function () {
      return client.onConnectionLost;
    };
    this._setOnConnectionLost = function (newOnConnectionLost) {
      if (typeof newOnConnectionLost === "function") client.onConnectionLost = newOnConnectionLost;else throw new Error(format(ERROR.INVALID_TYPE, [_typeof(newOnConnectionLost), "onConnectionLost"]));
    };
    this._getOnMessageDelivered = function () {
      return client.onMessageDelivered;
    };
    this._setOnMessageDelivered = function (newOnMessageDelivered) {
      if (typeof newOnMessageDelivered === "function") client.onMessageDelivered = newOnMessageDelivered;else throw new Error(format(ERROR.INVALID_TYPE, [_typeof(newOnMessageDelivered), "onMessageDelivered"]));
    };
    this._getOnMessageArrived = function () {
      return client.onMessageArrived;
    };
    this._setOnMessageArrived = function (newOnMessageArrived) {
      if (typeof newOnMessageArrived === "function") client.onMessageArrived = newOnMessageArrived;else throw new Error(format(ERROR.INVALID_TYPE, [_typeof(newOnMessageArrived), "onMessageArrived"]));
    };
    this._getTrace = function () {
      return client.traceFunction;
    };
    this._setTrace = function (trace) {
      if (typeof trace === "function") {
        client.traceFunction = trace;
      } else {
        throw new Error(format(ERROR.INVALID_TYPE, [_typeof(trace), "onTrace"]));
      }
    };

    /**
     * Connect this Messaging client to its server.
     *
     * @name Paho.MQTT.Client#connect
     * @function
     * @param {Object} connectOptions - attributes used with the connection.
     * @param {number} connectOptions.timeout - If the connect has not succeeded within this
     *                    number of seconds, it is deemed to have failed.
     *                    The default is 30 seconds.
     * @param {string} connectOptions.userName - Authentication username for this connection.
     * @param {string} connectOptions.password - Authentication password for this connection.
     * @param {Paho.MQTT.Message} connectOptions.willMessage - sent by the server when the client
     *                    disconnects abnormally.
     * @param {Number} connectOptions.keepAliveInterval - the server disconnects this client if
     *                    there is no activity for this number of seconds.
     *                    The default value of 60 seconds is assumed if not set.
     * @param {boolean} connectOptions.cleanSession - if true(default) the client and server
     *                    persistent state is deleted on successful connect.
     * @param {boolean} connectOptions.useSSL - if present and true, use an SSL Websocket connection.
     * @param {object} connectOptions.invocationContext - passed to the onSuccess callback or onFailure callback.
     * @param {function} connectOptions.onSuccess - called when the connect acknowledgement
     *                    has been received from the server.
     * A single response object parameter is passed to the onSuccess callback containing the following fields:
     * <ol>
     * <li>invocationContext as passed in to the onSuccess method in the connectOptions.
     * </ol>
     * @config {function} [onFailure] called when the connect request has failed or timed out.
     * A single response object parameter is passed to the onFailure callback containing the following fields:
     * <ol>
     * <li>invocationContext as passed in to the onFailure method in the connectOptions.
     * <li>errorCode a number indicating the nature of the error.
     * <li>errorMessage text describing the error.
     * </ol>
     * @config {Array} [hosts] If present this contains either a set of hostnames or fully qualified
     * WebSocket URIs (ws://example.com:1883/mqtt), that are tried in order in place
     * of the host and port paramater on the construtor. The hosts are tried one at at time in order until
     * one of then succeeds.
     * @config {Array} [ports] If present the set of ports matching the hosts. If hosts contains URIs, this property
     * is not used.
     * @throws {InvalidState} if the client is not in disconnected state. The client must have received connectionLost
     * or disconnected before calling connect for a second or subsequent time.
     */
    this.connect = function (connectOptions) {
      connectOptions = connectOptions || {};
      validate(connectOptions, {
        timeout: "number",
        userName: "string",
        password: "string",
        willMessage: "object",
        keepAliveInterval: "number",
        cleanSession: "boolean",
        useSSL: "boolean",
        invocationContext: "object",
        onSuccess: "function",
        onFailure: "function",
        hosts: "object",
        ports: "object",
        mqttVersion: "number"
      });

      // If no keep alive interval is set, assume 60 seconds.
      if (connectOptions.keepAliveInterval === undefined) connectOptions.keepAliveInterval = 60;
      if (connectOptions.mqttVersion > 4 || connectOptions.mqttVersion < 3) {
        throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.mqttVersion, "connectOptions.mqttVersion"]));
      }
      if (connectOptions.mqttVersion === undefined) {
        connectOptions.mqttVersionExplicit = false;
        connectOptions.mqttVersion = 4;
      } else {
        connectOptions.mqttVersionExplicit = true;
      }

      //Check that if password is set, so is username
      if (connectOptions.password === undefined && connectOptions.userName !== undefined) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.password, "connectOptions.password"]));
      if (connectOptions.willMessage) {
        if (!(connectOptions.willMessage instanceof Message)) throw new Error(format(ERROR.INVALID_TYPE, [connectOptions.willMessage, "connectOptions.willMessage"]));
        // The will message must have a payload that can be represented as a string.
        // Cause the willMessage to throw an exception if this is not the case.
        connectOptions.willMessage.stringPayload;
        if (typeof connectOptions.willMessage.destinationName === "undefined") throw new Error(format(ERROR.INVALID_TYPE, [_typeof(connectOptions.willMessage.destinationName), "connectOptions.willMessage.destinationName"]));
      }
      if (typeof connectOptions.cleanSession === "undefined") connectOptions.cleanSession = true;
      if (connectOptions.hosts) {
        if (!(connectOptions.hosts instanceof Array)) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts, "connectOptions.hosts"]));
        if (connectOptions.hosts.length < 1) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts, "connectOptions.hosts"]));
        var usingURIs = false;
        for (var i = 0; i < connectOptions.hosts.length; i++) {
          if (typeof connectOptions.hosts[i] !== "string") throw new Error(format(ERROR.INVALID_TYPE, [_typeof(connectOptions.hosts[i]), "connectOptions.hosts[" + i + "]"]));
          if (/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(connectOptions.hosts[i])) {
            if (i == 0) {
              usingURIs = true;
            } else if (!usingURIs) {
              throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts[i], "connectOptions.hosts[" + i + "]"]));
            }
          } else if (usingURIs) {
            throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.hosts[i], "connectOptions.hosts[" + i + "]"]));
          }
        }
        if (!usingURIs) {
          if (!connectOptions.ports) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.ports, "connectOptions.ports"]));
          if (!(connectOptions.ports instanceof Array)) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.ports, "connectOptions.ports"]));
          if (connectOptions.hosts.length != connectOptions.ports.length) throw new Error(format(ERROR.INVALID_ARGUMENT, [connectOptions.ports, "connectOptions.ports"]));
          connectOptions.uris = [];
          for (var i = 0; i < connectOptions.hosts.length; i++) {
            if (typeof connectOptions.ports[i] !== "number" || connectOptions.ports[i] < 0) throw new Error(format(ERROR.INVALID_TYPE, [_typeof(connectOptions.ports[i]), "connectOptions.ports[" + i + "]"]));
            var host = connectOptions.hosts[i];
            var port = connectOptions.ports[i];
            var ipv6 = host.indexOf(":") != -1;
            uri = "ws://" + (ipv6 ? "[" + host + "]" : host) + ":" + port + path;
            connectOptions.uris.push(uri);
          }
        } else {
          connectOptions.uris = connectOptions.hosts;
        }
      }
      client.connect(connectOptions);
    };

    /**
     * Subscribe for messages, request receipt of a copy of messages sent to the destinations described by the filter.
     *
     * @name Paho.MQTT.Client#subscribe
     * @function
     * @param {string} filter describing the destinations to receive messages from.
     * <br>
     * @param {object} subscribeOptions - used to control the subscription
     *
     * @param {number} subscribeOptions.qos - the maiximum qos of any publications sent
     *                                  as a result of making this subscription.
     * @param {object} subscribeOptions.invocationContext - passed to the onSuccess callback
     *                                  or onFailure callback.
     * @param {function} subscribeOptions.onSuccess - called when the subscribe acknowledgement
     *                                  has been received from the server.
     *                                  A single response object parameter is passed to the onSuccess callback containing the following fields:
     *                                  <ol>
     *                                  <li>invocationContext if set in the subscribeOptions.
     *                                  </ol>
     * @param {function} subscribeOptions.onFailure - called when the subscribe request has failed or timed out.
     *                                  A single response object parameter is passed to the onFailure callback containing the following fields:
     *                                  <ol>
     *                                  <li>invocationContext - if set in the subscribeOptions.
     *                                  <li>errorCode - a number indicating the nature of the error.
     *                                  <li>errorMessage - text describing the error.
     *                                  </ol>
     * @param {number} subscribeOptions.timeout - which, if present, determines the number of
     *                                  seconds after which the onFailure calback is called.
     *                                  The presence of a timeout does not prevent the onSuccess
     *                                  callback from being called when the subscribe completes.
     * @throws {InvalidState} if the client is not in connected state.
     */
    this.subscribe = function (filter, subscribeOptions) {
      if (typeof filter !== "string") throw new Error("Invalid argument:" + filter);
      subscribeOptions = subscribeOptions || {};
      validate(subscribeOptions, {
        qos: "number",
        invocationContext: "object",
        onSuccess: "function",
        onFailure: "function",
        timeout: "number"
      });
      if (subscribeOptions.timeout && !subscribeOptions.onFailure) throw new Error("subscribeOptions.timeout specified with no onFailure callback.");
      if (typeof subscribeOptions.qos !== "undefined" && !(subscribeOptions.qos === 0 || subscribeOptions.qos === 1 || subscribeOptions.qos === 2)) throw new Error(format(ERROR.INVALID_ARGUMENT, [subscribeOptions.qos, "subscribeOptions.qos"]));
      client.subscribe(filter, subscribeOptions);
    };

    /**
     * Unsubscribe for messages, stop receiving messages sent to destinations described by the filter.
     *
     * @name Paho.MQTT.Client#unsubscribe
     * @function
     * @param {string} filter - describing the destinations to receive messages from.
     * @param {object} unsubscribeOptions - used to control the subscription
     * @param {object} unsubscribeOptions.invocationContext - passed to the onSuccess callback
                                          or onFailure callback.
     * @param {function} unsubscribeOptions.onSuccess - called when the unsubscribe acknowledgement has been received from the server.
     *                                    A single response object parameter is passed to the
     *                                    onSuccess callback containing the following fields:
     *                                    <ol>
     *                                    <li>invocationContext - if set in the unsubscribeOptions.
     *                                    </ol>
     * @param {function} unsubscribeOptions.onFailure called when the unsubscribe request has failed or timed out.
     *                                    A single response object parameter is passed to the onFailure callback containing the following fields:
     *                                    <ol>
     *                                    <li>invocationContext - if set in the unsubscribeOptions.
     *                                    <li>errorCode - a number indicating the nature of the error.
     *                                    <li>errorMessage - text describing the error.
     *                                    </ol>
     * @param {number} unsubscribeOptions.timeout - which, if present, determines the number of seconds
     *                                    after which the onFailure callback is called. The presence of
     *                                    a timeout does not prevent the onSuccess callback from being
     *                                    called when the unsubscribe completes
     * @throws {InvalidState} if the client is not in connected state.
     */
    this.unsubscribe = function (filter, unsubscribeOptions) {
      if (typeof filter !== "string") throw new Error("Invalid argument:" + filter);
      unsubscribeOptions = unsubscribeOptions || {};
      validate(unsubscribeOptions, {
        invocationContext: "object",
        onSuccess: "function",
        onFailure: "function",
        timeout: "number"
      });
      if (unsubscribeOptions.timeout && !unsubscribeOptions.onFailure) throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");
      client.unsubscribe(filter, unsubscribeOptions);
    };

    /**
     * Send a message to the consumers of the destination in the Message.
     *
     * @name Paho.MQTT.Client#send
     * @function
     * @param {string|Paho.MQTT.Message} topic - <b>mandatory</b> The name of the destination to which the message is to be sent.
     * 					   - If it is the only parameter, used as Paho.MQTT.Message object.
     * @param {String|ArrayBuffer} payload - The message data to be sent.
     * @param {number} qos The Quality of Service used to deliver the message.
     * 		<dl>
     * 			<dt>0 Best effort (default).
     *     			<dt>1 At least once.
     *     			<dt>2 Exactly once.
     * 		</dl>
     * @param {Boolean} retained If true, the message is to be retained by the server and delivered
     *                     to both current and future subscriptions.
     *                     If false the server only delivers the message to current subscribers, this is the default for new Messages.
     *                     A received message has the retained boolean set to true if the message was published
     *                     with the retained boolean set to true
     *                     and the subscrption was made after the message has been published.
     * @throws {InvalidState} if the client is not connected.
     */
    this.send = function (topic, payload, qos, retained) {
      var message;
      if (arguments.length == 0) {
        throw new Error("Invalid argument." + "length");
      } else if (arguments.length == 1) {
        if (!(topic instanceof Message) && typeof topic !== "string") throw new Error("Invalid argument:" + _typeof(topic));
        message = topic;
        if (typeof message.destinationName === "undefined") throw new Error(format(ERROR.INVALID_ARGUMENT, [message.destinationName, "Message.destinationName"]));
        client.send(message);
      } else {
        //parameter checking in Message object
        message = new Message(payload);
        message.destinationName = topic;
        if (arguments.length >= 3) message.qos = qos;
        if (arguments.length >= 4) message.retained = retained;
        client.send(message);
      }
    };

    /**
     * Normal disconnect of this Messaging client from its server.
     *
     * @name Paho.MQTT.Client#disconnect
     * @function
     * @throws {InvalidState} if the client is already disconnected.
     */
    this.disconnect = function () {
      client.disconnect();
    };

    /**
     * Get the contents of the trace log.
     *
     * @name Paho.MQTT.Client#getTraceLog
     * @function
     * @return {Object[]} tracebuffer containing the time ordered trace records.
     */
    this.getTraceLog = function () {
      return client.getTraceLog();
    };

    /**
     * Start tracing.
     *
     * @name Paho.MQTT.Client#startTrace
     * @function
     */
    this.startTrace = function () {
      client.startTrace();
    };

    /**
     * Stop tracing.
     *
     * @name Paho.MQTT.Client#stopTrace
     * @function
     */
    this.stopTrace = function () {
      client.stopTrace();
    };
    this.isConnected = function () {
      return client.connected;
    };
  };
  Client.prototype = {
    get host() {
      return this._getHost();
    },
    set host(newHost) {
      this._setHost(newHost);
    },
    get port() {
      return this._getPort();
    },
    set port(newPort) {
      this._setPort(newPort);
    },
    get path() {
      return this._getPath();
    },
    set path(newPath) {
      this._setPath(newPath);
    },
    get clientId() {
      return this._getClientId();
    },
    set clientId(newClientId) {
      this._setClientId(newClientId);
    },
    get onConnectionLost() {
      return this._getOnConnectionLost();
    },
    set onConnectionLost(newOnConnectionLost) {
      this._setOnConnectionLost(newOnConnectionLost);
    },
    get onMessageDelivered() {
      return this._getOnMessageDelivered();
    },
    set onMessageDelivered(newOnMessageDelivered) {
      this._setOnMessageDelivered(newOnMessageDelivered);
    },
    get onMessageArrived() {
      return this._getOnMessageArrived();
    },
    set onMessageArrived(newOnMessageArrived) {
      this._setOnMessageArrived(newOnMessageArrived);
    },
    get trace() {
      return this._getTrace();
    },
    set trace(newTraceFunction) {
      this._setTrace(newTraceFunction);
    }
  };

  /**
   * An application message, sent or received.
   * <p>
   * All attributes may be null, which implies the default values.
   *
   * @name Paho.MQTT.Message
   * @constructor
   * @param {String|ArrayBuffer} payload The message data to be sent.
   * <p>
   * @property {string} payloadString <i>read only</i> The payload as a string if the payload consists of valid UTF-8 characters.
   * @property {ArrayBuffer} payloadBytes <i>read only</i> The payload as an ArrayBuffer.
   * <p>
   * @property {string} destinationName <b>mandatory</b> The name of the destination to which the message is to be sent
   *                    (for messages about to be sent) or the name of the destination from which the message has been received.
   *                    (for messages received by the onMessage function).
   * <p>
   * @property {number} qos The Quality of Service used to deliver the message.
   * <dl>
   *     <dt>0 Best effort (default).
   *     <dt>1 At least once.
   *     <dt>2 Exactly once.
   * </dl>
   * <p>
   * @property {Boolean} retained If true, the message is to be retained by the server and delivered
   *                     to both current and future subscriptions.
   *                     If false the server only delivers the message to current subscribers, this is the default for new Messages.
   *                     A received message has the retained boolean set to true if the message was published
   *                     with the retained boolean set to true
   *                     and the subscrption was made after the message has been published.
   * <p>
   * @property {Boolean} duplicate <i>read only</i> If true, this message might be a duplicate of one which has already been received.
   *                     This is only set on messages received from the server.
   *
   */
  var Message = function Message(newPayload) {
    var payload;
    if (typeof newPayload === "string" || newPayload instanceof ArrayBuffer || newPayload instanceof Int8Array || newPayload instanceof Uint8Array || newPayload instanceof Int16Array || newPayload instanceof Uint16Array || newPayload instanceof Int32Array || newPayload instanceof Uint32Array || newPayload instanceof Float32Array || newPayload instanceof Float64Array) {
      payload = newPayload;
    } else {
      throw format(ERROR.INVALID_ARGUMENT, [newPayload, "newPayload"]);
    }
    this._getPayloadString = function () {
      if (typeof payload === "string") return payload;else return parseUTF8(payload, 0, payload.length);
    };
    this._getPayloadBytes = function () {
      if (typeof payload === "string") {
        var buffer = new ArrayBuffer(UTF8Length(payload));
        var byteStream = new Uint8Array(buffer);
        stringToUTF8(payload, byteStream, 0);
        return byteStream;
      } else {
        return payload;
      }
      ;
    };
    var destinationName = undefined;
    this._getDestinationName = function () {
      return destinationName;
    };
    this._setDestinationName = function (newDestinationName) {
      if (typeof newDestinationName === "string") destinationName = newDestinationName;else throw new Error(format(ERROR.INVALID_ARGUMENT, [newDestinationName, "newDestinationName"]));
    };
    var qos = 0;
    this._getQos = function () {
      return qos;
    };
    this._setQos = function (newQos) {
      if (newQos === 0 || newQos === 1 || newQos === 2) qos = newQos;else throw new Error("Invalid argument:" + newQos);
    };
    var retained = false;
    this._getRetained = function () {
      return retained;
    };
    this._setRetained = function (newRetained) {
      if (typeof newRetained === "boolean") retained = newRetained;else throw new Error(format(ERROR.INVALID_ARGUMENT, [newRetained, "newRetained"]));
    };
    var duplicate = false;
    this._getDuplicate = function () {
      return duplicate;
    };
    this._setDuplicate = function (newDuplicate) {
      duplicate = newDuplicate;
    };
  };
  Message.prototype = {
    get payloadString() {
      return this._getPayloadString();
    },
    get payloadBytes() {
      return this._getPayloadBytes();
    },
    get destinationName() {
      return this._getDestinationName();
    },
    set destinationName(newDestinationName) {
      this._setDestinationName(newDestinationName);
    },
    get qos() {
      return this._getQos();
    },
    set qos(newQos) {
      this._setQos(newQos);
    },
    get retained() {
      return this._getRetained();
    },
    set retained(newRetained) {
      this._setRetained(newRetained);
    },
    get duplicate() {
      return this._getDuplicate();
    },
    set duplicate(newDuplicate) {
      this._setDuplicate(newDuplicate);
    }
  };

  // Module contents.
  return {
    Client: Client,
    Message: Message
  };
});

/***/ }),

/***/ "../@mckennatim/mqtt-hooks/src/processMessage.js":
/*!*******************************************************!*\
  !*** ../@mckennatim/mqtt-hooks/src/processMessage.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processMessage: () => (/* binding */ processMessage)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var messageReducer = function messageReducer(state, action) {
  var keys = Object.keys(state);
  var newstate = keys.reduce(function (newdata, label) {
    if (action.type == label) {
      var tmp = {};
      tmp[label] = _objectSpread({}, newdata[label]); //
      Object.keys(state[label]).map(function (d) {
        if (typeof action.payload[d] !== 'undefined') {
          tmp[label][d] = action.payload[d];
        }
      });
      newdata[label] = tmp[label];
    }
    return newdata;
  }, _objectSpread({}, state));
  return newstate;
};
var extractLabelArray = function extractLabelArray(message, devs) {
  //app could have may devs each with its own srs
  var dev = Object.keys(devs).find(function (key) {
    return key === message.dev;
  });
  //messages all have dev/topic
  var srlabelarr = []; //[{sr:2, labe:'bridge}, {sr:4, label:'pond}]
  if (message.topic == 'srstate') {
    srlabelarr = devs[dev].filter(function (a) {
      return a.sr === message.payload.id;
    });
  }
  if (message.topic == 'timr') {
    if (message.payload.tIMElEFT.reduce(function (a, v) {
      return a + v;
    }) == 0) {
      srlabelarr = devs[dev]; //if /timr comes in as [0,0,0,0,0]then send it to all
    } else {
      srlabelarr = devs[dev].filter(function (a) {
        return message.payload.tIMElEFT[a.sr] > 0;
      });
    }
  }
  if (message.topic == 'sched') {
    srlabelarr = devs[dev].filter(function (a) {
      return a.sr === message.payload.id;
    });
  }
  return srlabelarr;
};
var processRawMessage = function processRawMessage(mess) {
  var narr = mess.destinationName.split('/');
  var dev = narr[0];
  var topic = narr[1];
  var pls = mess.payloadString;
  var payload = JSON.parse(pls);
  // console.log('payload: ',dev, topic, JSON.stringify(payload))
  var message = {
    dev: dev,
    topic: topic,
    payload: payload
  };
  return message;
};
var processMessage = function processMessage(mess, devs, bigstate) {
  var message = processRawMessage(mess);
  var newstates = [];
  var devinfArr = extractLabelArray(message, devs);
  console.log('vvvvvmessge.dev: ', message.dev);
  devinfArr.map(function (devinf) {
    var action = {};
    action.payload = {};
    if (message.topic == 'srstate') {
      if (devinf && devinf.label) {
        action.type = devinf.label;
        action.payload.darr = message.payload.darr;
        if (message.payload.darr[0] == 0) {
          action.payload.timeleft = 0;
        }
      }
    }
    if (message.topic == 'timr') {
      if (devinf && devinf.label) {
        action.type = devinf.label;
        action.payload.timeleft = message.payload.tIMElEFT[devinf.sr];
      }
    }
    if (message.topic == 'sched') {
      if (devinf && devinf.label) {
        action.type = devinf.label;
        action.payload.pro = message.payload.pro;
      }
    }
    if (message.topic == 'devtime') {
      action.type = 'time';
      action.payload = message.payload;
    }
    if (Object.entries(action.payload).length != 0) {
      var prt = {};
      prt[action.type] = _objectSpread({}, bigstate[action.type]);
      var newstate = messageReducer(prt, action);
      newstates.push(newstate);
    }
  });
  if (message.topic == 'devtime') {
    newstates[0] = {
      jdtime: message.payload
    };
  }
  if (message.topic == 'jdtime') {
    newstates[0] = {
      jdtime: message.payload
    };
  }
  var nsarr = newstates;
  var processed_message = message;
  return {
    nsarr: nsarr,
    processed_message: processed_message
  };
};


/***/ }),

/***/ "../@mckennatim/mqtt-hooks/src/provider.js":
/*!*************************************************!*\
  !*** ../@mckennatim/mqtt-hooks/src/provider.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "../@mckennatim/mqtt-hooks/src/context.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createSuper(t) { var r = _isNativeReflectConstruct(); return function () { var e, o = _getPrototypeOf(t); if (r) { var s = _getPrototypeOf(this).constructor; e = Reflect.construct(o, arguments, s); } else e = o.apply(this, arguments); return _possibleConstructorReturn(this, e); }; }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var Paho = __webpack_require__(/*! ./mqttws31.js */ "../@mckennatim/mqtt-hooks/src/mqttws31.js");
var Provider = /*#__PURE__*/function (_Component) {
  _inherits(Provider, _Component);
  var _super = _createSuper(Provider);
  function Provider(props) {
    var _this;
    _classCallCheck(this, Provider);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "publish", function (client, topic, payload) {
      var message = new Paho.Message(payload);
      message.destinationName = topic;
      client.send(message);
    });
    var cfg = _this.props.cfg;
    console.log(cfg);
    _this.client = new Paho.Client(cfg.mqtt_server, cfg.mqtt_port, cfg.appid + Math.random());
    _this.client.onConnectionLost = function (responseObject) {
      if (responseObject.errorCode !== 0) {
        console.log('Connection Lost ' + responseObject.errorMessage);
      }
    };
    return _this;
  }
  _createClass(Provider, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context__WEBPACK_IMPORTED_MODULE_1__.Context.Provider, {
        value: [this.client, this.publish]
      }, this.props.children);
    }
  }]);
  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "../@mckennatim/mqtt-hooks/src/useDevSpecs.js":
/*!****************************************************!*\
  !*** ../@mckennatim/mqtt-hooks/src/useDevSpecs.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDevSpecs: () => (/* binding */ useDevSpecs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

// import {connect } from './index'

var geta = function geta(dotstr, obj) {
  return dotstr.split(".").slice(1).reduce(function (xs, x) {
    return xs && xs[x] ? xs[x] : null;
  }, obj);
};
function useDevSpecs(ls, cfg, client, cb) {
  var lsh = ls.getItem();
  // lsh is email and token 
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    zones = _useState2[0],
    setZones = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    binfo = _useState4[0],
    setBinfo = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
    _useState6 = _slicedToArray(_useState5, 2),
    devs = _useState6[0],
    setDevs = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
    _useState8 = _slicedToArray(_useState7, 2),
    specs = _useState8[0],
    setSpecs = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
    _useState10 = _slicedToArray(_useState9, 2),
    error = _useState10[0],
    setError = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    mounted = _useState12[0],
    setMounted = _useState12[1];
  var fetchDevZones = function fetchDevZones() {
    if (geta('lsh.token', lsh)) {
      var url = cfg.url.api + '/admin/i/devzones';
      var options = {
        headers: {
          'Authorization': 'Bearer ' + lsh['token']
        },
        method: 'GET'
      };
      return fetch(url, options).then(function (response) {
        return response.json();
      });
    } else {
      var p2 = Promise.resolve({
        qmessage: 'you dont exist! '
      });
      return p2;
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var didCancel = false;
    if (!didCancel) {
      fetchDevZones().then(function (data) {
        console.log(data);
        if (data) {
          if (data && data.qmessage) {
            setError(data);
          } else {
            setZones(data.zones);
            Object.keys(data.devs);
            setDevs(data.devs);
            setBinfo(data.binfo);
            setSpecs(data.specs);
            cb(data.devs, data.zones);
            // if (!client.isConnected()){
            //   connect(client, lsh, ()=>cb(client,data.devs)) 
            // }
          }
        }
      });
    }
    return function () {
      didCancel = true;
      setMounted(false);
      if (client.isConnected()) {
        // console.log('client disconnecting')
        client.disconnect();
      }
    };
  }, []);
  return {
    devs: devs,
    zones: zones,
    binfo: binfo,
    specs: specs,
    error: error,
    mounted: mounted
  };
}

/***/ }),

/***/ "../@mckennatim/mqtt-hooks/src/utility.js":
/*!************************************************!*\
  !*** ../@mckennatim/mqtt-hooks/src/utility.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add2sched: () => (/* binding */ add2sched),
/* harmony export */   endWhen: () => (/* binding */ endWhen),
/* harmony export */   getNow: () => (/* binding */ getNow),
/* harmony export */   hma2time: () => (/* binding */ hma2time),
/* harmony export */   m2hm: () => (/* binding */ m2hm),
/* harmony export */   m2ms: () => (/* binding */ m2ms),
/* harmony export */   newInterval: () => (/* binding */ newInterval),
/* harmony export */   setRelayStatus: () => (/* binding */ setRelayStatus),
/* harmony export */   startWhen: () => (/* binding */ startWhen),
/* harmony export */   whereInSched: () => (/* binding */ whereInSched)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var getNow = function getNow(tzadj) {
  var d = new Date();
  var hr = d.getHours() * 1;
  var min = d.getMinutes() * 1;
  var t = tzadj.split(':');
  //-04:00 +240(browser UTC offset)
  var tzadjmin = t[0] * 60 + t[1] * 1 + d.getTimezoneOffset();
  var adjmin = hr * 60 + min + tzadjmin;
  adjmin = adjmin < 0 ? adjmin + 24 * 60 : adjmin;
  adjmin = adjmin > 24 * 60 ? adjmin - 24 * 60 : adjmin;
  hr = Math.floor(adjmin / 60);
  min = adjmin % 60;
  return [hr, min];
};
var startWhen = function startWhen(tzadj, delay) {
  var _getNow = getNow(tzadj),
    _getNow2 = _slicedToArray(_getNow, 2),
    hr = _getNow2[0],
    min = _getNow2[1];
  var de = delay ? delay.split(':') : [0, 0];
  hr += de[0] * 1;
  min += de[1] * 1;
  if (min >= 60) {
    min = min - 60;
    hr = hr + 1;
  }
  if (hr >= 24) {
    hr = 23;
    min = 59;
  }
  hr = hr < 1 ? 24 + hr : hr;
  return [hr, min];
};
var endWhen = function endWhen(start, dur) {
  var add = dur.split(':');
  var min = start[1] + add[1] * 1;
  var hr = start[0] + add[0] * 1;
  if (min > 60) {
    min -= 60;
    hr += 1;
  }
  if (hr >= 24) {
    hr = 23;
    min = 59;
  }
  return [hr, min];
};
var m2hm = function m2hm(dur) {
  var decmin = Math.floor(dur % 1 * 60);
  var hrs = Math.floor(dur / 60);
  var min = dur - hrs * 60 + decmin;
  return "".concat(hrs, ":").concat(min);
};
var m2ms = function m2ms(dur) {
  var sec = Math.floor(dur / 60 % 1 * 60);
  var min = Math.floor(dur / 60);
  return "".concat(min, ":").concat(sec);
};
var arrEqual = function arrEqual(arr1, arr2) {
  var ae = arr1.reduce(function (acc, a1, idx) {
    return a1 == arr2[idx] ? acc + 1 : acc + 0;
  }, 0);
  return ae == arr1.length ? 1 : 0;
};
var hm2m = function hm2m(hm) {
  return hm[0] * 60 + hm[1] * 1;
};
var last = function last(arr) {
  return arr[arr.length - 1];
};
var newInterval = function newInterval(starttime, startval, endtime, endval) {
  var st = starttime.concat(startval);
  var en = endtime.concat(endval);
  return [st, en];
};
var hma2time = function hma2time(hma) {
  var ap = 'am';
  var hr = hma[0];
  var min = hma[1];
  if (hr > 12) {
    hr = hr - 12;
    ap = 'pm';
  }
  if (hr == 12) ap = 'pm';
  if (hr == 0 && min == 0) hr = 12;
  hr = hr.toString().padStart(2, '');
  min = min.toString().padStart(2, '0');
  return "".concat(hr, ":").concat(min, " ").concat(ap);
};
var whereInSched = function whereInSched(sched, tzadj) {
  var now = getNow(tzadj);
  var idx = sched.findIndex(function (s) {
    return hm2m(s) > hm2m(now);
  });
  if (idx > -1) {
    //  console.log('hm2m(sched[idx]): ', hma2time(sched[idx]))
  }
  // console.log('idx: ', idx)
  return idx;
};
var add2sched = function add2sched(osched, nintvl, tzadj) {
  var i = 0;
  var now = getNow(tzadj);
  var sched = osched.slice();
  var newsched = sched.reduce(function (acc, cur, idx) {
    //console.log('cur: ', JSON.stringify(cur))
    if (i == 0) {
      /*bump til now */
      if (hm2m(cur) <= hm2m(last(acc))) {
        acc.push(acc.pop().slice(0, 2).concat(cur.slice(2)));
      } else {
        i = 1;
      }
      /*if we are at end of sched */
      if (idx == sched.length - 1) {
        i = 2;
      }
    }
    if (i == 1) {
      /*push til start */
      if (cur.length < 3 || hm2m(cur) < hm2m(nintvl[0])) {
        acc.push(cur);
      } else if (hm2m(cur) == hm2m(nintvl[0])) {
        acc.pop();
        acc.push(nintvl[0]);
      } else {
        i = 2;
      }
      /*if we are at end of sched go add interval*/
      if (sched.length > 1 && idx == sched.length - 1) {
        i = 2;
      }
    }
    if (i == 2) {
      /*push interval */
      //console.log('acc: ', JSON.stringify(acc))
      //console.log('last, nintvl[0]: ',hm2m(last(acc)) , hm2m(nintvl[0]))
      if (hm2m(last(acc)) == hm2m(nintvl[0])) {
        acc.pop();
        //console.log('popped acc: ', JSON.stringify(acc))
      }
      if (last(acc) && arrEqual(last(acc).slice(2), nintvl[0].slice(2))) {
        /*if start action same */
        acc.push(nintvl[1]);
      } else {
        //console.log('should push both')
        acc.push(nintvl[0]);
        acc.push(nintvl[1]);
        //console.log('acc: ', JSON.stringify(acc))
      }
      i = 3;
      /*if we are at end of sched go add interval*/
      if (sched.length > 1 && idx == sched.length - 1) {
        i = 4;
      }
    }
    if (i == 3) {
      //console.log('in case 3')
      /*skip til end of interval */
      if (hm2m(cur) > hm2m(nintvl[1])) {
        i = 4;
      }
      /*if we are at end of sched go add the rest*/
      if (sched.length > 1 && idx == sched.length - 1) {
        i = 4;
      }
      //console.log('cur: ', cur)
    }
    if (i == 4) {
      //console.log('in case 4')
      /*if end action is same as next get rid of it*/
      if (arrEqual(nintvl[1].slice(2), cur.slice(2))) {
        acc = acc.concat(sched.slice(idx + 1));
      } else {
        /*push the rest */
        //console.log('acc: ', JSON.stringify(acc))
        //console.log('sched.slice(idx): ', JSON.stringify(sched.slice(idx)))
        acc = acc.concat(sched.slice(idx));
        //console.log('acc: ', JSON.stringify(acc))
      }
      i = 5;
    }
    //console.log('acc: ', JSON.stringify(acc))
    return acc;
  }, [now]);
  newsched.unshift([0, 0, 0]);
  return newsched;
};
function setRelayStatus(bs) {
  if (bs.timeleft > 0) {
    bs.status = 'timed';
  } else if (bs.darr[0] == 1 && bs.timeleft == 0) {
    bs.status = 'on';
  } else bs.status = 'off';
  return bs;
}


/***/ }),

/***/ "./denv.json":
/*!*******************!*\
  !*** ./denv.json ***!
  \*******************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"superapp":"iot","appid":"demo2","cbPath":"#locs","mqtt_server":"services.sitebuilt.net/iotb/wss","mqtt_port":4333,"sitebuilt.net":{"soauth":"https://services.sitebuilt.net/soauth","api":"https://services.sitebuilt.net/iotex/api"},"parleyvale.com":{"soauth":"https://services.sitebuilt.net/soauth","api":"https://services.sitebuilt.net/iotex/api"},"localhost":{"soauth":"http://localhost:7080","api":"https://services.sitebuilt.net/iotex/api"}}');

/***/ }),

/***/ "./src/appInit.js":
/*!************************!*\
  !*** ./src/appInit.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appid: () => (/* binding */ appid),
/* harmony export */   ctrltypes: () => (/* binding */ ctrltypes),
/* harmony export */   dev1: () => (/* binding */ dev1),
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
/*  
temp_out: darr:[]
tstat: {pro:[[0,0,65,63]], timeleft:0, darr:[reading,onoff,66,64]},
tv: {pro:[[0,0,hi,lo]], darr:[reading,onoff,hi,lo]},
pond: {pro:[[0,0,0],[19,15,1]], timeleft:0, darr:[0,0,0]},
//solar: darr:[sra_rdg, srb_rdg, difon, difoff,maxa, maxb onoff]
*/
var initialState = {
  //pro must start at 0,0
  zone1: {
    ctype: "relay",
    darr: [0, 22, 1, -1, -1],
    timeleft: 0
  },
  zone2: {
    ctype: "relay",
    darr: [0, 22, 2, 0, 0],
    timeleft: 0
  },
  zone3: {
    ctype: "relay",
    darr: [0, 22, 3, 1, 0],
    timeleft: 0
  },
  zone4: {
    ctype: "relay",
    darr: [0, 22, -1, 2, 0],
    timeleft: 0
  },
  temp_out: {
    darr: [0]
  }
};
var ctrltypes = {
  "difctrl": {
    "lab": ["onoff", "rdA", "rdB", "dif", "difgt0"],
    "cmd": [3],
    "prg": [3]
  },
  "tstat": {
    "lab": ["onoff", "reading", "setting", "dif"],
    "cmd": [0, 2, 3],
    "prg": [3]
  },
  "relay": {
    "lab": ["onoff", "tsec", "nxtsr", "priosr", "prionoff"],
    "cmd": [0, 1],
    "prg": [1]
  },
  "ctrl": {
    "lab": ["bell", "reading", "setting"],
    "cmd": [2],
    "prg": [2]
  },
  "array": {
    "lab": ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7"],
    "cmd": [],
    "prg": []
  },
  "se": {
    "lab": ["reading"],
    "cmd": [],
    "prg": []
  },
  "cs": {
    "lab": ["onoff", "reading", "hi", "lo"],
    "cmd": [0, 2, 3],
    "prg": [2, 3]
  },
  "re": {
    "lab": ["onoff"],
    "cmd": [0],
    "prg": [0]
  }
};
var appid = "edgewater";
var dev1 = "CYURD127";


/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@mckennatim/mqtt-hooks/src */ "../@mckennatim/mqtt-hooks/src/index.js");
/* harmony import */ var _contexts_acontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/acontext */ "./src/contexts/acontext.js");
/* harmony import */ var _NavCtrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavCtrl.js */ "./src/components/NavCtrl.js");
/* harmony import */ var _utilities_getCfg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/getCfg */ "./src/utilities/getCfg.js");
/* harmony import */ var _appInit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../appInit */ "./src/appInit.js");


// import {ClientSocket} from '@mckennatim/mqtt-hooks'




console.log(_utilities_getCfg__WEBPACK_IMPORTED_MODULE_4__.cfg);
var App = function App(props) {
  var title = props.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mckennatim_mqtt_hooks_src__WEBPACK_IMPORTED_MODULE_1__.ClientSocket, {
    cfg: _utilities_getCfg__WEBPACK_IMPORTED_MODULE_4__.cfg
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_contexts_acontext__WEBPACK_IMPORTED_MODULE_2__.AProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavCtrl_js__WEBPACK_IMPORTED_MODULE_3__.NavCtrl, {
    title: title,
    appid: _appInit__WEBPACK_IMPORTED_MODULE_5__.appid,
    dev1: _appInit__WEBPACK_IMPORTED_MODULE_5__.dev1
  })))));
};

/***/ }),

/***/ "./src/components/NavCtrl.js":
/*!***********************************!*\
  !*** ./src/components/NavCtrl.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavCtrl: () => (/* binding */ NavCtrl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_acontext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/acontext */ "./src/contexts/acontext.js");
/* harmony import */ var _ResponsivePages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResponsivePages.js */ "./src/components/ResponsivePages.js");



var NavCtrl = function NavCtrl(props) {
  var title = props.title,
    appid = props.appid,
    dev1 = props.dev1;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_acontext__WEBPACK_IMPORTED_MODULE_1__.AContext),
    devInfo = _useContext.devInfo,
    path = _useContext.path,
    handlePath = _useContext.handlePath;
  var panes = devInfo.panes;
  var renderNav = function renderNav() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
      style: styles.nav.nav
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.2em',
        fontWeight: 'bold',
        padding: '10px',
        backgroundColor: 'whitesmoke',
        borderRadius: '5px',
        marginBottom: '10px'
      }
    }, " ", appid, " ", dev1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      style: styles.nav.ul
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      style: styles.nav.li
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      onClick: handlePath('/help')
    }, "help")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      style: styles.nav.li
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      onClick: handlePath('/control')
    }, "control"))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, renderNav(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResponsivePages_js__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
var styles = {
  nav: {
    ul: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'left',
      listStyleType: 'none',
      paddingLeft: '12px'
    },
    li: {
      display: 'inline',
      padding: '2px',
      paddingRight: '4px',
      background: 'whitesmoke'
    }
  }
};

/***/ }),

/***/ "./src/components/ResponsivePages.js":
/*!*******************************************!*\
  !*** ./src/components/ResponsivePages.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResponsivePages)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _responsiveRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../responsiveRoutes */ "./src/responsiveRoutes.js");
/* harmony import */ var _contexts_acontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/acontext */ "./src/contexts/acontext.js");



var styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    backgroundColor: '#ece6ed'
  }
};
function ResponsivePages() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_acontext__WEBPACK_IMPORTED_MODULE_2__.AContext),
    devInfo = _useContext.devInfo,
    path = _useContext.path,
    visiblePages = _useContext.visiblePages,
    setVisiblePages = _useContext.setVisiblePages;
  var panes = devInfo.panes;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var noSlPath = path.substr(1);
    if (!_responsiveRoutes__WEBPACK_IMPORTED_MODULE_1__.multi[noSlPath]) {
      noSlPath = _responsiveRoutes__WEBPACK_IMPORTED_MODULE_1__.multi["default"];
    }
    var pgArr = [];
    var nextBest = function nextBest(arr, panes) {
      var sa = arr.filter(function (a) {
        return a.length == panes;
      });
      if (sa.length > 0) {
        pgArr = sa;
        return sa;
      } else {
        nextBest(arr, panes - 1);
      }
    };
    nextBest(_responsiveRoutes__WEBPACK_IMPORTED_MODULE_1__.multi[noSlPath], panes);
    setVisiblePages(pgArr[0]);
  }, [panes, path]);
  var renderPages = visiblePages.map(function (n, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_responsiveRoutes__WEBPACK_IMPORTED_MODULE_1__.compoi[n], {
      key: i
    }, null);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.container
  }, renderPages);
}

/***/ }),

/***/ "./src/contexts/acontext.js":
/*!**********************************!*\
  !*** ./src/contexts/acontext.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AContext: () => (/* binding */ AContext),
/* harmony export */   AProvider: () => (/* binding */ AProvider),
/* harmony export */   AReducer: () => (/* binding */ AReducer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "../../node_modules/history/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var history = (0,history__WEBPACK_IMPORTED_MODULE_1__.createHashHistory)();
var aInitState = {
  job2edit: '',
  foundJobs: [],
  dev: {},
  path: ''
};
var AContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(aInitState);

/* app specific actions*/
var AReducer = function AReducer(state, action) {
  switch (action.type) {
    case 'sETjOB2eDIT':
      return _objectSpread(_objectSpread({}, state), {}, {
        job2edit: action.payload
      });
    case 'sETfOUNDjOBS':
      return _objectSpread(_objectSpread({}, state), {}, {
        foundJobs: action.payload
      });
  }
};
var AProvider = function AProvider(_ref) {
  var children = _ref.children;
  /* dispatcher to context of app specific state change*/
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(AReducer, aInitState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];

  /*general router and responsive code */
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getDevInfo()),
    _useState2 = _slicedToArray(_useState, 2),
    devInfo = _useState2[0],
    setDevInfo = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    visiblePages = _useState4[0],
    setVisiblePages = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.location.hash.substr(1)),
    _useState6 = _slicedToArray(_useState5, 2),
    path = _useState6[0],
    setPath = _useState6[1];
  function getDevInfo() {
    var ws = window.innerWidth;
    var idx;
    var types = [{
      dev: 'watch',
      panes: 1
    }, {
      dev: 'phone',
      panes: 1
    }, {
      dev: 'phonel',
      panes: 2
    }, {
      dev: 'tablet',
      panes: 2
    }, {
      dev: 'tabletL',
      panes: 3
    }, {
      dev: 'laptop',
      panes: 3
    }, {
      dev: 'monitor',
      panes: 4
    }];
    var sizes = [300, 500, 600, 800, 900, 1800, 3000];
    sizes.reduce(function (prev, curr, i) {
      if (prev < ws && ws <= curr) {
        idx = i;
      }
      return curr;
    }, 0);
    return types[idx];
  }
  window.onresize = function () {
    if (getDevInfo().panes != devInfo.panes) {
      setDevInfo(getDevInfo());
    }
  };
  window.onhashchange = function () {
    setPath(window.location.hash.substr(1));
  };
  var handlePath = function handlePath(p) {
    return function () {
      history.push(p);
      setPath(p);
    };
  };

  /*app specific dispatch code for objects and functions in context */
  function setJob2edit(job2edit) {
    dispatch({
      type: 'sETjOB2eDIT',
      payload: job2edit
    });
  }
  function setFoundJobs(foundJobs) {
    dispatch({
      type: 'sETfOUNDjOBS',
      payload: foundJobs
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AContext.Provider, {
    value: {
      devInfo: devInfo,
      path: path,
      handlePath: handlePath,
      visiblePages: visiblePages,
      setVisiblePages: setVisiblePages,
      foundJobs: state.foundJobs,
      job2edit: state.job2edit,
      setFoundJobs: setFoundJobs,
      setJob2edit: setJob2edit
    }
  }, children);
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../../node_modules/react-dom/client.js");
/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App.js */ "./src/components/App.js");



var title = 'WS MQTT Client';
var container = document.getElementById('app');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_App_js__WEBPACK_IMPORTED_MODULE_2__.App, {
  title: title
}));

/***/ }),

/***/ "./src/responsiveRoutes.js":
/*!*********************************!*\
  !*** ./src/responsiveRoutes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compoi: () => (/* binding */ compoi),
/* harmony export */   multi: () => (/* binding */ multi)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var compoi = {};
compoi["Help"] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_components_Help_js").then(__webpack_require__.bind(__webpack_require__, /*! ./components/Help.js */ "./src/components/Help.js"));
});
compoi["Jobs"] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-countdown_dist_index_es_js"), __webpack_require__.e("src_components_Jobs_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/Jobs.js */ "./src/components/Jobs.js"));
});
compoi["AddJob"] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_components_AddJob_js").then(__webpack_require__.bind(__webpack_require__, /*! ./components/AddJob.js */ "./src/components/AddJob.js"));
});
compoi["Control"] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-countdown_dist_index_es_js"), __webpack_require__.e("vendors-node_modules_mui_icons-material_esm_Block_js-node_modules_mui_icons-material_esm_Sign-3ea987"), __webpack_require__.e("src_components_Control_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/Control.js */ "./src/components/Control.js"));
});
var multi = {
  "default": "control",
  jobs: [["Jobs"], ["Jobs", "Help"], ["Jobs", "AddJob", "Help"]],
  addjob: [["AddJob"], ["AddJob", "Jobs"], ["AddJob", "Jobs", "Help"]],
  help: [["Help"], ["Help", "Control"]],
  control: [["Control"], ["Control", "Help"]]
};


/***/ }),

/***/ "./src/utilities/getCfg.js":
/*!*********************************!*\
  !*** ./src/utilities/getCfg.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cfg: () => (/* binding */ cfg),
/* harmony export */   dev1: () => (/* reexport safe */ _appInit__WEBPACK_IMPORTED_MODULE_2__.dev1),
/* harmony export */   ls: () => (/* binding */ ls),
/* harmony export */   makeHref: () => (/* binding */ makeHref)
/* harmony export */ });
/* harmony import */ var _denv_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../denv.json */ "./denv.json");
/* harmony import */ var _storageLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageLocal */ "./src/utilities/storageLocal.js");
/* harmony import */ var _appInit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appInit */ "./src/appInit.js");



var getTLD = function getTLD(host) {
  var sparr = host.split('.');
  if (sparr.length == 3) return "".concat(sparr[1], ".").concat(sparr[2]); //skip subdomain
  else if (sparr.length == 4) return 'localhost'; //192.168.1.35
  else return 'localhost';
};
var tld = getTLD(window.location.hostname);
var getURLS = function getURLS(tld) {
  var urls = _denv_json__WEBPACK_IMPORTED_MODULE_0__[tld];
  var hostname = window.location.hostname;
  if (hostname.split('.').length == 4) {
    var keys = Object.keys(urls);
    keys.map(function (k) {
      var str = urls[k];
      var nstr = str.replace('localhost', hostname);
      urls[k] = nstr;
    });
  }
  return urls;
};
var urls = getURLS(tld);
console.log('urls: ', urls);
var authqry = urls.soauth + "/spa/" + _denv_json__WEBPACK_IMPORTED_MODULE_0__.appid + "?apiURL=" + encodeURIComponent(urls.api) + "&cbPath=" + encodeURIComponent(urls.cbPath);
var signupqry = urls.soauth + "/spa/signup?apiURL=" + encodeURIComponent(urls.api) + "&cbPath=" + encodeURIComponent(urls.cbPath);
var url = urls;

// const cfg={authqry, appid:appid, signupqry, url, urls, cbPath:env.cbPath}
var cfg = {
  authqry: authqry,
  appid: _appInit__WEBPACK_IMPORTED_MODULE_2__.appid,
  mqtt_server: _denv_json__WEBPACK_IMPORTED_MODULE_0__.mqtt_server,
  mqtt_port: _denv_json__WEBPACK_IMPORTED_MODULE_0__.mqtt_port,
  signupqry: signupqry,
  url: url,
  urls: urls,
  cbPath: urls.cbPath
};
var ls = (0,_storageLocal__WEBPACK_IMPORTED_MODULE_1__.storageLocal)(cfg.appid);
var makeHref = function makeHref(host, app, rt) {
  console.log("host: ", host);
  var href;
  if (host == "iot.sitebuilt.net" || host == "iot.parleyvale.com" || host == "hvac.parleyvale.com" || host == "apps.sitebuilt.net") {
    href = "../".concat(app, "/");
  } else {
    href = "/hooks2/iot/".concat(app, "/dist/");
  }
  if (rt) {
    href += rt;
  }
  return href;
};


/***/ }),

/***/ "./src/utilities/storageLocal.js":
/*!***************************************!*\
  !*** ./src/utilities/storageLocal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storageLocal: () => (/* binding */ storageLocal)
/* harmony export */ });
var storageLocal = function storageLocal(itemName) {
  var itemStr = localStorage.getItem(itemName);
  var getItem = function getItem() {
    // console.log('in getItem')
    if (!localStorage.getItem(itemName)) {
      return null;
    }
    return JSON.parse(localStorage.getItem(itemName));
  };
  var setItem = function setItem(obj) {
    localStorage.setItem(itemName, JSON.stringify(obj));
  };
  var removeItem = function removeItem() {
    localStorage.removeItem(itemName);
  };
  return {
    removeItem: removeItem,
    itemName: itemName,
    itemStr: itemStr,
    getItem: getItem,
    setItem: setItem,
    modItem: function modItem(key, val) {
      var ni = getItem();
      if (ni) {
        ni[key] = val;
        setItem(ni);
      }
    },
    getToken: function getToken() {
      return getItem() ? getItem().token : null;
    },
    getKey: function getKey(key) {
      return getItem() ? getItem()[key] : null;
    }
  };
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("e5ab7d339a19b32d40d2")
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "edgewater:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkedgewater"] = self["webpackChunkedgewater"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.e5ab7d339a19b32d40d2.js.map