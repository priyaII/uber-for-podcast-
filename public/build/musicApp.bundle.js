(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return webpackJsonp([0],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(4);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _playlist = __webpack_require__(7);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MusicApp = function (_React$Component) {
  _inherits(MusicApp, _React$Component);

  function MusicApp(props) {
    _classCallCheck(this, MusicApp);

    var _this = _possibleConstructorReturn(this, (MusicApp.__proto__ || Object.getPrototypeOf(MusicApp)).call(this, props));

    _this.state = { //These are state variables
      message: '',
      apiKey: '',
      playlist: [],
      play: ''
    };

    _this.fetchTopTracks = _this.fetchTopTracks.bind(_this); //Add any new function if created
    return _this;
  }

  _createClass(MusicApp, [{
    key: 'displayMessage',
    value: function displayMessage() {
      var that = this;
      this.setState({
        message: "Welcome!"
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'fetchTopTracks',
    value: function fetchTopTracks() {
      var artistInput = document.getElementById("artistInput").value;
      console.log("this runs fast!");

      var that = this;
      if (artistInput == "") {
        alert("Enter an artist name, It cannot be blank");
      } else {
        _jquery2.default.ajax({
          type: 'GET',
          url: 'https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=' + artistInput + '&api_key=70818bdde1762f2467ffa9207ba79bec&format=json',
          datatype: 'json',
          success: function success(data, x, y) {
            console.log(data.toptracks.track);
            that.setState({
              playlist: data.toptracks.track
            });
          },
          error: function error(httpRequest, status, _error) {
            console.log(status);
          }
        });
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      if (event.key == 'Enter') {
        document.getElementById('btn-get').click();
      }
    }
  }, {
    key: 'render',
    value: function render() {

      var playlist = [];

      if (this.state.playlist !== []) {
        for (var i = 0; i < this.state.playlist.length; i++) {
          playlist.push(_react2.default.createElement(_playlist.Playlist, { key: i, name: this.state.playlist[i].name,
            image: this.state.playlist[i].image[2]["#text"],
            play: this.state.playlist[i].url }));
        }
      }
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'col-md-4' }, _react2.default.createElement('input', { type: 'text', id: 'artistInput', placeholder: 'Enter an Artist',
        onKeyDown: this.handleKeyPress })), _react2.default.createElement('div', { className: 'col-md-4' }, _react2.default.createElement('button', { className: 'btn btn-block btn-info', id: 'btn-get', onClick: this.fetchTopTracks }, 'Get the Tracks!'))), playlist, _react2.default.createElement(_playlist.Playlist, null));
    }
  }]);

  return MusicApp;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(MusicApp, null), document.getElementById("container"));

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/priya/github/FCC-App/public/js/music-app.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/priya/github/FCC-App/public/js/music-app.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__(0); //you can use import statements, like the one below
var ReactDom = __webpack_require__(3);

var Playlist = function (_React$Component) {
	_inherits(Playlist, _React$Component);

	function Playlist(props) {
		_classCallCheck(this, Playlist);

		var _this = _possibleConstructorReturn(this, (Playlist.__proto__ || Object.getPrototypeOf(Playlist)).call(this, props));

		_this.state = { //These are state variables
			genres: []
		};

		//this.deleteItem = this.deleteItem.bind(this);
		return _this;
	}

	_createClass(Playlist, [{
		key: "componentDidMount",
		value: function componentDidMount() {}
	}, {
		key: "render",
		value: function render() {
			return React.createElement("div", null, React.createElement("div", { className: "row" }, React.createElement("div", { className: "col-md-4 " }, React.createElement("img", { className: "img-responsive", src: this.props.image })), React.createElement("div", { className: "col-md-4" }, React.createElement("div", null, this.props.name), React.createElement("div", null, React.createElement("br", null), React.createElement("div", { className: "col-md-12" }, React.createElement("audio", { id: "audio", preload: "auto" }), React.createElement("div", { className: "btn-group" }, React.createElement("button", { onClick: "Play('music.mp3','audio');", className: "btn btn-custom" }, React.createElement("span", { title: "Play", id: "play", className: "glyphicon glyphicon-play aligned" })), React.createElement("button", { onClick: "Stop('music.mp3','audio');", className: "btn btn-custom" }, React.createElement("span", { title: "Stop", id: "stop", className: "glyphicon glyphicon-stop aligned" })), React.createElement("button", { onClick: "Restart('music.mp3','audio');", className: "btn btn-custom" }, React.createElement("span", { title: "Restart", id: "restart", className: "glyphicon glyphicon-step-backward aligned" })), React.createElement("button", { onClick: "Backward5('music.mp3','audio');", className: "btn btn-custom" }, React.createElement("span", { title: "-5 seconds", id: "play", className: "glyphicon glyphicon-fast-backward aligned" })), React.createElement("button", { onClick: "Forward5('music.mp3','audio');", className: "btn btn-custom" }, React.createElement("span", { title: "+5 seconds", id: "play", className: "glyphicon glyphicon-fast-forward aligned" })), React.createElement("button", { onClick: "Backward1('music.mp3','audio');", className: "btn btn-custom" }, React.createElement("span", { title: "-1 second", id: "play", className: "glyphicon glyphicon-chevron-left aligned" })), React.createElement("button", { onClick: "Forward1('music.mp3','audio');", className: "btn btn-custom" }, React.createElement("span", { title: "+1 second", id: "play", className: "glyphicon glyphicon-chevron-right aligned" })), React.createElement("button", { onClick: "VolumeUp('music.mp3','audio');", className: "btn btn-custom" }, React.createElement("span", { title: "Volume Up", id: "volumeup", className: "glyphicon glyphicon-plus aligned" })), React.createElement("button", { onClick: "VolumeDown('music.mp3','audio');", className: "btn btn-custom" }, React.createElement("span", { title: "Volume Down", id: "volumedown", className: "glyphicon glyphicon-minus aligned" }))))))));
		}
	}]);

	return Playlist;
}(React.Component);

module.exports = {
	Playlist: Playlist
	// key assigned : refers to line 8 - "class Playlist... "
};

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/priya/github/FCC-App/public/js/playlist.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/priya/github/FCC-App/public/js/playlist.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

},[11]);
});