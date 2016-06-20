(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Reactabular"] = factory(require("react"));
	else
		root["Reactabular"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_50__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _table = __webpack_require__(1);
	
	Object.defineProperty(exports, 'Table', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_table).default;
	  }
	});
	
	var _search = __webpack_require__(51);
	
	Object.defineProperty(exports, 'Search', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_search).default;
	  }
	});
	
	var _sort = __webpack_require__(61);
	
	Object.defineProperty(exports, 'sort', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_sort).default;
	  }
	});
	
	var _editors = __webpack_require__(64);
	
	Object.defineProperty(exports, 'editors', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_editors).default;
	  }
	});
	
	var _formatters = __webpack_require__(54);
	
	Object.defineProperty(exports, 'formatters', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_formatters).default;
	  }
	});
	
	var _predicates = __webpack_require__(58);
	
	Object.defineProperty(exports, 'predicates', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_predicates).default;
	  }
	});
	
	var _behaviors = __webpack_require__(68);
	
	Object.defineProperty(exports, 'behaviors', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_behaviors).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = __webpack_require__(2);
	
	var _get2 = _interopRequireDefault(_get);
	
	var _isFunction = __webpack_require__(15);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _react = __webpack_require__(50);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Table = function (_React$Component) {
	  _inherits(Table, _React$Component);
	
	  function Table() {
	    _classCallCheck(this, Table);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Table).apply(this, arguments));
	  }
	
	  _createClass(Table, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        columns: this.props.columns,
	        data: this.props.data
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = // eslint-disable-line no-unused-vars
	      this.props;
	      var columns = _props.columns;
	      var data = _props.data;
	      var children = _props.children;
	
	      var props = _objectWithoutProperties(_props, ['columns', 'data', 'children']);
	
	      return _react2.default.createElement(
	        'table',
	        props,
	        children
	      );
	    }
	  }]);
	
	  return Table;
	}(_react2.default.Component);
	
	Table.propTypes = {
	  columns: _react2.default.PropTypes.array,
	  data: _react2.default.PropTypes.array,
	  children: _react2.default.PropTypes.any
	};
	Table.childContextTypes = {
	  columns: _react2.default.PropTypes.array,
	  data: _react2.default.PropTypes.array
	};
	
	var Header = function Header(_ref, _ref2) {
	  var children = _ref.children;
	
	  var props = _objectWithoutProperties(_ref, ['children']);
	
	  var columns = _ref2.columns;
	  return _react2.default.createElement(
	    'thead',
	    props,
	    _react2.default.createElement(
	      'tr',
	      null,
	      columns.map(function (column, i) {
	        var cell = column.header;
	        var value = column.header || '';
	        var key = i + '-header';
	
	        return _react2.default.createElement(
	          'th',
	          { key: key },
	          (0, _isFunction2.default)(cell) ? cell({
	            cell: cell,
	            value: value,
	            property: column.property,
	            cellKey: key
	          }) : value
	        );
	      })
	    ),
	    children
	  );
	};
	Header.propTypes = {
	  children: _react2.default.PropTypes.any
	};
	Header.contextTypes = {
	  columns: _react2.default.PropTypes.array.isRequired
	};
	Header.displayName = 'Table.Header';
	
	var Body = function Body(_ref3, _ref4) {
	  var row = _ref3.row;
	  var rowKey = _ref3.rowKey;
	
	  var props = _objectWithoutProperties(_ref3, ['row', 'rowKey']);
	
	  var columns = _ref4.columns;
	  var data = _ref4.data;
	  return _react2.default.createElement(
	    'tbody',
	    props,
	    data.map(function (r, i) {
	      return _react2.default.createElement(
	        'tr',
	        _extends({ key: (r[rowKey] || i) + '-row' }, row(r, i)),
	        columns.map(function (column, j) {
	          var cell = column.cell;
	          // TODO: give a warning if value is not found by `get`
	          var value = (0, _get2.default)(r, column.property);
	          var cellData = data[i];
	
	          return _react2.default.createElement(
	            'td',
	            { key: j + '-cell' },
	            (0, _isFunction2.default)(cell) ? cell({
	              cell: cell,
	              value: value,
	              cellData: cellData,
	              property: column.property,
	              cellKey: cellData[rowKey]
	            }) : value
	          );
	        })
	      );
	    })
	  );
	};
	Body.propTypes = {
	  row: _react2.default.PropTypes.func,
	  rowKey: _react2.default.PropTypes.string.isRequired
	};
	Body.defaultProps = {
	  row: function row() {}
	};
	Body.contextTypes = {
	  columns: _react2.default.PropTypes.array.isRequired,
	  data: _react2.default.PropTypes.array.isRequired
	};
	Body.displayName = 'Table.Body';
	
	Table.Header = Header;
	Table.Body = Body;
	
	exports.default = Table;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(3);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(4),
	    isKey = __webpack_require__(48),
	    toKey = __webpack_require__(49);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(5),
	    stringToPath = __webpack_require__(6);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}
	
	module.exports = castPath;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(7),
	    toString = __webpack_require__(43);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  var result = [];
	  toString(string).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(8);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(9),
	    mapCacheDelete = __webpack_require__(37),
	    mapCacheGet = __webpack_require__(40),
	    mapCacheHas = __webpack_require__(41),
	    mapCacheSet = __webpack_require__(42);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(10),
	    ListCache = __webpack_require__(28),
	    Map = __webpack_require__(36);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(11),
	    hashDelete = __webpack_require__(24),
	    hashGet = __webpack_require__(25),
	    hashHas = __webpack_require__(26),
	    hashSet = __webpack_require__(27);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(12);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	module.exports = hashClear;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(13);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(14),
	    getValue = __webpack_require__(23);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(15),
	    isHostObject = __webpack_require__(17),
	    isMasked = __webpack_require__(18),
	    isObject = __webpack_require__(16),
	    toSource = __webpack_require__(22);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(19);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(20);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var checkGlobal = __webpack_require__(21);
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(typeof global == 'object' && global);
	
	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(typeof self == 'object' && self);
	
	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(typeof this == 'object' && this);
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || thisGlobal || Function('return this')();
	
	module.exports = root;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}
	
	module.exports = checkGlobal;


/***/ },
/* 22 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	module.exports = hashDelete;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(12);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(12);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(12);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(29),
	    listCacheDelete = __webpack_require__(30),
	    listCacheGet = __webpack_require__(33),
	    listCacheHas = __webpack_require__(34),
	    listCacheSet = __webpack_require__(35);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	module.exports = listCacheClear;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(31);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(32);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(31);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(31);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(31);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(13),
	    root = __webpack_require__(20);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(38);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	module.exports = mapCacheDelete;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(39);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(38);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(38);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(38);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(44);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(45),
	    isSymbol = __webpack_require__(46);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(20);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(47);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(5),
	    isSymbol = __webpack_require__(46);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(46);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_50__;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = __webpack_require__(2);
	
	var _get2 = _interopRequireDefault(_get);
	
	var _isNumber = __webpack_require__(52);
	
	var _isNumber2 = _interopRequireDefault(_isNumber);
	
	var _isString = __webpack_require__(53);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	var _react = __webpack_require__(50);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _formatters = __webpack_require__(54);
	
	var _formatters2 = _interopRequireDefault(_formatters);
	
	var _predicates = __webpack_require__(58);
	
	var _predicates2 = _interopRequireDefault(_predicates);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Search = function (_React$Component) {
	  _inherits(Search, _React$Component);
	
	  function Search(props) {
	    _classCallCheck(this, Search);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this, props));
	
	    _this.state = {
	      column: 'all',
	      query: ''
	    };
	
	    _this.onColumnChange = _this.onColumnChange.bind(_this);
	    _this.onQueryChange = _this.onQueryChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(Search, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.onChange(_defineProperty({}, this.state.column, this.state.query));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = // eslint-disable-line no-unused-vars
	      this.props;
	      var onChange = _props.onChange;
	      var columns = _props.columns;
	      var data = _props.data;
	      var i18n = _props.i18n;
	
	      var props = _objectWithoutProperties(_props, ['onChange', 'columns', 'data', 'i18n']);
	
	      return _react2.default.createElement(
	        'span',
	        props,
	        _react2.default.createElement(SearchOptions, {
	          onChange: this.onColumnChange, value: this.state.column,
	          columns: columns, i18n: i18n
	        }),
	        _react2.default.createElement('input', { onChange: this.onQueryChange, value: this.state.query })
	      );
	    }
	  }, {
	    key: 'onColumnChange',
	    value: function onColumnChange(event) {
	      var column = event.target.value;
	      var query = this.state.query;
	
	      this.setState({ column: column });
	      this.props.onChange(_defineProperty({}, column, query));
	    }
	  }, {
	    key: 'onQueryChange',
	    value: function onQueryChange(event) {
	      var column = this.state.column;
	      var query = event.target.value;
	
	      this.setState({ query: query });
	      this.props.onChange(_defineProperty({}, column, query));
	    }
	  }]);
	
	  return Search;
	}(_react2.default.Component);
	
	Search.propTypes = {
	  columns: _react2.default.PropTypes.array,
	  data: _react2.default.PropTypes.array,
	  onChange: _react2.default.PropTypes.func,
	  i18n: _react2.default.PropTypes.shape({
	    all: _react2.default.PropTypes.string
	  })
	};
	Search.defaultProps = {
	  columns: [],
	  data: [],
	  onChange: function onChange() {},
	  i18n: {
	    all: 'All'
	  }
	};
	
	var SearchOptions = function SearchOptions(_ref) {
	  var columns = _ref.columns;
	  var i18n = _ref.i18n;
	
	  var props = _objectWithoutProperties(_ref, ['columns', 'i18n']);
	
	  return _react2.default.createElement(
	    'select',
	    props,
	    getOptions(columns, i18n).map(function (_ref2) {
	      var name = _ref2.name;
	      var value = _ref2.value;
	      return _react2.default.createElement(
	        'option',
	        { key: value + '-option', value: value },
	        name
	      );
	    })
	  );
	};
	SearchOptions.propTypes = {
	  columns: _react2.default.PropTypes.array,
	  i18n: _react2.default.PropTypes.object
	};
	
	var getOptions = function getOptions(columns, i18n) {
	  return [{
	    value: 'all',
	    name: i18n.all
	  }].concat(columns.map(function (column) {
	    if (column.property && column.header) {
	      return {
	        value: column.property,
	        name: column.header
	      };
	    }
	
	    return null;
	  }).filter(function (column) {
	    return column && !_react2.default.isValidElement(column.name);
	  }));
	};
	
	var searchColumn = function searchColumn(data, columns, column, query) {
	  var options = arguments.length <= 4 || arguments[4] === undefined ? {
	    strategy: _predicates2.default.infix,
	    transform: _formatters2.default.lowercase
	  } : arguments[4];
	
	  if (!query) {
	    return data;
	  }
	  var ret = columns;
	
	  if (column !== 'all') {
	    ret = columns.filter(function (col) {
	      return col.property === column;
	    });
	  }
	
	  return data.filter(function (row) {
	    return ret.filter(isColumnVisible.bind(undefined, options, query, row)).length > 0;
	  });
	};
	
	var isColumnVisible = function isColumnVisible(options, query, row, col) {
	  var property = col.property;
	  var value = (0, _get2.default)(row, property);
	  var formatter = col.search || _formatters2.default.identity;
	  var formattedValue = formatter(value);
	
	  if (!formattedValue && isNaN(formattedValue)) {
	    return false;
	  }
	
	  if ((0, _isNumber2.default)(formattedValue)) {
	    formattedValue = formattedValue.toString();
	  } else if (!(0, _isString2.default)(formattedValue)) {
	    formattedValue = '';
	  }
	
	  return options.strategy(options.transform(query)).evaluate(options.transform(formattedValue));
	};
	
	var search = function search(data, columns, query, options) {
	  if (!query) {
	    return data;
	  }
	
	  return Object.keys(query).reduce(function (filteredData, column) {
	    return searchColumn(filteredData, columns, column, query[column], options);
	  }, data);
	};
	
	var matches = function matches(column, value, query) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {
	    strategy: _predicates2.default.infix,
	    transform: _formatters2.default.lowercase
	  } : arguments[3];
	
	  if (!query) {
	    return {};
	  }
	
	  return options.strategy(options.transform(query)).matches(options.transform(value));
	};
	
	Search.searchColumn = searchColumn;
	Search.search = search;
	Search.matches = matches;
	
	exports.default = Search;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(47);
	
	/** `Object#toString` result references. */
	var numberTag = '[object Number]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	 * classified as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isNumber(3);
	 * // => true
	 *
	 * _.isNumber(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isNumber(Infinity);
	 * // => true
	 *
	 * _.isNumber('3');
	 * // => false
	 */
	function isNumber(value) {
	  return typeof value == 'number' ||
	    (isObjectLike(value) && objectToString.call(value) == numberTag);
	}
	
	module.exports = isNumber;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(5),
	    isObjectLike = __webpack_require__(47);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/* eslint-disable global-require */
	module.exports = {
	  highlight: __webpack_require__(55).default,
	  identity: __webpack_require__(56).default,
	  lowercase: __webpack_require__(57).default
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(50);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (getHighlights) {
	  return function (value) {
	    var val = String(value); // deals with arrays/numbers/...
	
	    var highlights = getHighlights(val);
	    var children = [];
	    var currentPosition = 0;
	    var x = 0;
	
	    for (x = 0; x < highlights.length; x++) {
	      var nonMatchingPrefix = val.slice(currentPosition, highlights[x].startIndex);
	      var matchingText = val.slice(highlights[x].startIndex, highlights[x].startIndex + highlights[x].length);
	
	      currentPosition = highlights[x].startIndex + highlights[x].length;
	
	      if (nonMatchingPrefix.length > 0) {
	        children.push(_react2.default.createElement(
	          "span",
	          { key: x + "-nonmatch" },
	          nonMatchingPrefix
	        ));
	      }
	      children.push(_react2.default.createElement(
	        "span",
	        { className: "highlight", key: x + "-match" },
	        matchingText
	      ));
	    }
	    children.push(_react2.default.createElement(
	      "span",
	      { key: x + "-remainder" },
	      val.slice(currentPosition)
	    ));
	
	    return _react2.default.createElement(
	      "span",
	      { className: "search-result" },
	      children
	    );
	  };
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (value) {
	  return value;
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (value) {
	  return value.toLowerCase();
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _infix = __webpack_require__(59);
	
	var _infix2 = _interopRequireDefault(_infix);
	
	var _prefix = __webpack_require__(60);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { infix: _infix2.default, prefix: _prefix2.default };

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (infix) {
	  return {
	    evaluate: function evaluate(searchText) {
	      return searchText.indexOf(infix) !== -1;
	    },
	    matches: function matches(searchText) {
	      var splitString = searchText.split(infix);
	      var matches = [];
	      var currentPosition = 0;
	
	      for (var x = 0; x < splitString.length; x++) {
	        matches.push({
	          startIndex: currentPosition + splitString[x].length,
	          length: infix.length
	        });
	        currentPosition += splitString[x].length + infix.length;
	      }
	
	      matches.pop();
	
	      return matches;
	    }
	  };
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (prefix) {
	  return {
	    evaluate: function evaluate(searchText) {
	      return searchText.indexOf(prefix) === 0;
	    },
	    matches: function matches(searchText) {
	      var prefixIndex = searchText.indexOf(prefix);
	
	      if (prefixIndex === 0) {
	        return [{
	          startIndex: 0,
	          length: prefix.length
	        }];
	      }
	
	      return [];
	    }
	  };
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _byColumn = __webpack_require__(62);
	
	var _byColumn2 = _interopRequireDefault(_byColumn);
	
	var _byColumns = __webpack_require__(63);
	
	var _byColumns2 = _interopRequireDefault(_byColumns);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { byColumn: _byColumn2.default, byColumns: _byColumns2.default };

/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var byColumn = function byColumn(sortingColumns, selectedColumn) {
	  var sortingColumn = sortingColumns ? sortingColumns[0] : {};
	  var sort = 'asc';
	
	  if (sortingColumn.property === selectedColumn) {
	    sort = sortingColumn.sort === 'asc' ? 'desc' : 'asc';
	  }
	
	  return [{
	    property: selectedColumn,
	    sort: sort
	  }];
	};
	
	// sorter === lodash orderBy
	// https://lodash.com/docs#orderBy
	byColumn.sort = function (data, columns, sorter) {
	  if (!columns) {
	    return data;
	  }
	  var column = columns[0]; // Sort based on the first one
	
	  return sorter(data, [column.property], [column.sort]);
	};
	
	exports.default = byColumn;

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var byColumns = function byColumns(sortingColumns, selectedColumn) {
	  var index = sortingColumns && sortingColumns.map(function (c) {
	    return c.property;
	  }).indexOf(selectedColumn);
	  var newSortingColumns = [];
	
	  if (!sortingColumns) {
	    return [{
	      property: selectedColumn,
	      sort: 'asc'
	    }];
	  } else if (index >= 0) {
	    newSortingColumns = sortingColumns;
	
	    newSortingColumns[index] = {
	      property: selectedColumn,
	      sort: cycleSort(newSortingColumns[index].sort)
	    };
	
	    return newSortingColumns;
	  }
	
	  return [].concat(_toConsumableArray(sortingColumns), [{
	    property: selectedColumn,
	    sort: 'asc'
	  }]);
	};
	
	function cycleSort(sort) {
	  if (!sort) {
	    return 'asc';
	  } else if (sort === 'asc') {
	    return 'desc';
	  }
	
	  return '';
	}
	
	// sorter === lodash orderBy
	// https://lodash.com/docs#orderBy
	byColumns.sort = function (data, columns, sorter) {
	  if (!columns) {
	    return data;
	  }
	
	  var propertyList = [];
	  var orderList = [];
	
	  columns.forEach(function (column) {
	    propertyList.push(column.property);
	    orderList.push(column.sort);
	  });
	
	  return sorter(data, propertyList, orderList);
	};
	
	exports.default = byColumns;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _boolean = __webpack_require__(65);
	
	var _boolean2 = _interopRequireDefault(_boolean);
	
	var _dropdown = __webpack_require__(66);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _input = __webpack_require__(67);
	
	var _input2 = _interopRequireDefault(_input);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { boolean: _boolean2.default, dropdown: _dropdown2.default, input: _input2.default };

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(50);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  var Boolean = function Boolean(_ref) {
	    var value = _ref.value;
	    var onValue = _ref.onValue;
	    return _react2.default.createElement(
	      'span',
	      null,
	      _react2.default.createElement(
	        'button',
	        {
	          disabled: value,
	          onClick: function onClick() {
	            return onValue(true);
	          }
	        },
	        '✓'
	      ),
	      _react2.default.createElement(
	        'button',
	        {
	          disabled: !value,
	          onClick: function onClick() {
	            return onValue(false);
	          }
	        },
	        '✗'
	      )
	    );
	  };
	  Boolean.propTypes = {
	    value: _react2.default.PropTypes.any,
	    onClick: _react2.default.PropTypes.func,
	    onValue: _react2.default.PropTypes.func
	  };
	
	  return Boolean;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(50);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (options) {
	  var fields = arguments.length <= 1 || arguments[1] === undefined ? {
	    name: 'name',
	    value: 'value'
	  } : arguments[1];
	
	  var Dropdown = function Dropdown(_ref) {
	    var value = _ref.value;
	    var onValue = _ref.onValue;
	
	    var edit = function edit(e) {
	      return onValue(e.target.value);
	    };
	
	    return _react2.default.createElement(
	      'select',
	      { onBlur: edit, onChange: edit, value: value },
	      options.map(function (option, i) {
	        return _react2.default.createElement(
	          'option',
	          {
	            key: i,
	            value: option[fields.value]
	          },
	          option[fields.name]
	        );
	      })
	    );
	  };
	  Dropdown.propTypes = {
	    value: _react2.default.PropTypes.string,
	    onValue: _react2.default.PropTypes.func
	  };
	
	  return Dropdown;
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(50);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	exports.default = function () {
	  var attrs = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var Input = function (_React$Component) {
	    _inherits(Input, _React$Component);
	
	    function Input(props) {
	      _classCallCheck(this, Input);
	
	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));
	
	      _this.state = {
	        value: props.value
	      };
	
	      _this.onFocus = _this.onFocus.bind(_this);
	      _this.onChange = _this.onChange.bind(_this);
	      _this.onKeyUp = _this.onKeyUp.bind(_this);
	      _this.done = _this.done.bind(_this);
	      return _this;
	    }
	
	    _createClass(Input, [{
	      key: "render",
	      value: function render() {
	        return _react2.default.createElement("input", _extends({
	          ref: "input",
	          value: this.state.value,
	          onFocus: this.onFocus,
	          onChange: this.onChange,
	          onKeyUp: this.onKeyUp,
	          onBlur: this.done
	        }, attrs));
	      }
	    }, {
	      key: "onFocus",
	      value: function onFocus(_ref) {
	        var target = _ref.target;
	
	        var length = target.value.length;
	
	        target.selectionStart = length; // eslint-disable-line no-param-reassign
	        target.selectionEnd = length; // eslint-disable-line no-param-reassign
	      }
	    }, {
	      key: "onChange",
	      value: function onChange(_ref2) {
	        var value = _ref2.target.value;
	
	        this.setState({ value: value });
	      }
	    }, {
	      key: "onKeyUp",
	      value: function onKeyUp(_ref3) {
	        var keyCode = _ref3.keyCode;
	
	        if (keyCode === 13) {
	          this.done();
	        }
	      }
	    }, {
	      key: "done",
	      value: function done() {
	        this.props.onValue(this.refs.input.value);
	      }
	    }]);
	
	    return Input;
	  }(_react2.default.Component);
	
	  Input.propTypes = {
	    value: _react2.default.PropTypes.string,
	    onValue: _react2.default.PropTypes.func
	  };
	
	  return Input;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _identity = __webpack_require__(69);
	
	var _identity2 = _interopRequireDefault(_identity);
	
	var _edit = __webpack_require__(70);
	
	var _edit2 = _interopRequireDefault(_edit);
	
	var _sort = __webpack_require__(71);
	
	var _sort2 = _interopRequireDefault(_sort);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { identity: _identity2.default, edit: _edit2.default, sort: _sort2.default };

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (value) {
	  return { value: value };
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _react = __webpack_require__(50);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _default(_ref, _ref2) {
	  var _ref$getEditProperty = _ref.getEditProperty;
	  var getEditProperty = _ref$getEditProperty === undefined ? function () {} : _ref$getEditProperty;
	  var _ref$onActivate = _ref.onActivate;
	  var onActivate = _ref$onActivate === undefined ? function () {} : _ref$onActivate;
	  var _ref$onValue = _ref.onValue;
	
	  var _onValue = _ref$onValue === undefined ? function () {} : _ref$onValue;
	
	  var editor = _ref2.editor;
	  var _ref2$formatter = _ref2.formatter;
	  var formatter = _ref2$formatter === undefined ? function (value) {
	    return value;
	  } : _ref2$formatter;
	
	  var Edit = function Edit(_ref3) {
	    var value = _ref3.value;
	    var cellData = _ref3.cellData;
	    var property = _ref3.property;
	    var cellKey = _ref3.cellKey;
	
	    var idx = cellKey + '-' + property;
	    var editedCell = getEditProperty();
	
	    if (editedCell === idx) {
	      return _react2.default.createElement(editor, {
	        value: value,
	        onValue: function onValue(v) {
	          return _onValue(v, cellData, property);
	        }
	      });
	    }
	
	    return _react2.default.createElement(
	      'span',
	      { onClick: function onClick() {
	          return onActivate(idx);
	        } },
	      formatter(value)
	    );
	  };
	  Edit.propTypes = {
	    value: _react2.default.PropTypes.any,
	    cellData: _react2.default.PropTypes.object.isRequired,
	    property: _react2.default.PropTypes.string.isRequired,
	    cellKey: _react2.default.PropTypes.string.isRequired
	  };
	
	  return Edit;
	}
	exports.default = _default;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (_ref, header) {
	  var _ref$getSortingColumn = _ref.getSortingColumns;
	  var getSortingColumns = _ref$getSortingColumn === undefined ? function () {} : _ref$getSortingColumn;
	  var _ref$onSort = _ref.onSort;
	  var onSort = _ref$onSort === undefined ? function () {} : _ref$onSort;
	
	  var Sort = function Sort(_ref2) {
	    var property = _ref2.property;
	
	    var columns = getSortingColumns();
	    var index = columns.map(function (c) {
	      return c.property;
	    }).indexOf(property);
	    var headerClass = '';
	
	    if (index >= 0) {
	      headerClass = 'sort-' + columns[index].sort;
	    }
	
	    return _react2.default.createElement(
	      'div',
	      {
	        className: headerClass,
	        onClick: function onClick() {
	          return onSort(property);
	        }
	      },
	      header
	    );
	  };
	  Sort.propTypes = {
	    property: _react2.default.PropTypes.string.isRequired
	  };
	
	  return Sort;
	};
	
	var _react = __webpack_require__(50);
	
	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }
/******/ ])
});
;
//# sourceMappingURL=reactabular.js.map