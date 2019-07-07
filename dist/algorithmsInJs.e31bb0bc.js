// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Eq/eq.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eq;

function eq(a, b) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  }
}
},{}],"LinkedList/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkedList = exports.Node = void 0;

var _eq = _interopRequireDefault(require("../Eq/eq"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @method push(element)1
 * @method insert(element,position)1
 * @method getElementAt(index)1
 * @method remove(element)1
 * @method indexOf(element)1 返回链表在元素中的索引
 * @method removeAt(position)1
 * @method isEmpty() 1ture or false
 * @method size() 1
 * @method toString() 1 想着返回 1->2->3这种格式
 * 
 * 
 */
var Node = function Node(element) {
  _classCallCheck(this, Node);

  this.element = element;
  this.next = undefined;
};

exports.Node = Node;

var LinkedList =
/*#__PURE__*/
function () {
  function LinkedList() {
    var eqFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _eq.default;

    _classCallCheck(this, LinkedList);

    this.count = 0;
    this.head = undefined;
    this.eqFn = eqFn;
  }

  _createClass(LinkedList, [{
    key: "push",
    value: function push(element) {
      // debugger
      if (!this.head) {
        this.head = new Node(element);
      } else {
        var node = this.head;

        while (node.next) {
          node = node.next;
        }

        node.next = new Node(element);
      }

      this.count++;
    }
    /*removeAt(index) {
      debugger
      if(index >= 0 && index <= this.count) {
        let current = this.head
        if(index === 0) {
          this.head = current.next
        } else {
          let previous
          for(let i = 0; i < index; i++) {
            previous = current
            current = current.next
          }
          previous.next = current.next
        }
        this.count--;
        return current.element
      }
      return current.element
    }*/

  }, {
    key: "removeAt",
    value: function removeAt(index) {
      if (index >= 0 && index < this.count) {
        var current = this.head;
        var previous;

        for (var i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        } // current会被垃圾回收


        previous.next = current.next;
        this.count--;
      } else {
        return false;
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      var str = '';
      var cur = this.head; // debugger

      while (cur.next) {
        str += cur.element + '->';
        cur = cur.next;
      }

      str += cur.element; // TODO:可以思考一下for的循环次数和while的循环次数的不同
      // for(let i = 0 ;i < this.count; i++) {
      //   str += cur.element + '->'
      //   cur = cur.next
      // }

      return str;
    } // remvoe的for实现方法

    /*remove(element) {
      if(this.head.element === element) {
        this.head = this.head.next
      } else {
        let previous = this.head
        for(let i = 0 ; i < this.count - 1; i++) {
          const cur = previous.next
          if(cur.element === element) {
            previous.next = cur.next
            return element
          }
          previous = cur
        }
        return false
      }
    }*/
    // remove的while实现方法

  }, {
    key: "remove",
    value: function remove(element) {
      if (this.head.element === element) {
        this.count--;
        this.head = this.head.next;
        return element;
      } else {
        var previous = this.head;
        var current = previous.next;

        while (current.element) {
          if (current.element === element) {
            previous.next = current.next;
            this.count--;
            return element;
          }

          previous = current;
          current = current.next;
        }

        return false;
      }
    }
  }, {
    key: "getElementAt",
    value: function getElementAt(index) {
      if (index >= 0 && index < this.count) {
        var current = this.head;

        for (var i = 0; i < index; i++) {
          current = current.next;
        }

        return current.element;
      }

      return false;
    }
  }, {
    key: "indexOf",
    value: function indexOf(element) {
      var current = this.head;

      for (var i = 0; i < this.count; i++) {
        if (current.element === element) {
          return i;
        }

        current = current.next;
      }

      return false;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.count === 0;
    }
  }, {
    key: "size",
    value: function size() {
      return this.count;
    }
  }]);

  return LinkedList;
}();

exports.LinkedList = LinkedList;
window.linkedList = new LinkedList();
console.log('isEmpty', linkedList.isEmpty());
linkedList.push(3);
console.log('size', linkedList.size());
console.log('isEmpty', linkedList.isEmpty());
linkedList.push(4);
linkedList.push(5);
console.log('isEmpty', linkedList.isEmpty());
console.log('size', linkedList.size()); // console.log(linkedList.getElementAt(2))
// linkedList.removeAt(3)

console.log('indexIs', linkedList.indexOf(5));
console.log('indexIs', linkedList.indexOf(4));
console.log('indexIs', linkedList.indexOf(4));
console.log(linkedList.remove(5));
console.log(linkedList.remove(3));
console.log(linkedList.toString()); // console.log(linkedList)
},{"../Eq/eq":"Eq/eq.js"}],"DoubleList/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoubleLinkedList = void 0;

var _LinkedList2 = require("../LinkedList");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DoubleNode =
/*#__PURE__*/
function (_Node) {
  _inherits(DoubleNode, _Node);

  function DoubleNode(element) {
    var _this;

    _classCallCheck(this, DoubleNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DoubleNode).call(this, element));
    _this.previous = null;
    return _this;
  }

  return DoubleNode;
}(_LinkedList2.Node);

var DoubleLinkedList =
/*#__PURE__*/
function (_LinkedList) {
  _inherits(DoubleLinkedList, _LinkedList);

  function DoubleLinkedList(eqFn) {
    _classCallCheck(this, DoubleLinkedList);

    return _possibleConstructorReturn(this, _getPrototypeOf(DoubleLinkedList).call(this, eqFn));
  }

  return DoubleLinkedList;
}(_LinkedList2.LinkedList);

exports.DoubleLinkedList = DoubleLinkedList;
var doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.push(1);
doubleLinkedList.push(3);
doubleLinkedList.push(2);
console.log(doubleLinkedList.toString());
},{"../LinkedList":"LinkedList/index.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./DoubleList/index");
},{"./DoubleList/index":"DoubleList/index.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60969" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/algorithmsInJs.e31bb0bc.js.map