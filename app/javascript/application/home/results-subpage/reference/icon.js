'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  Adds the provided svg document to the page as an icon. The css class ".icon"
  Ensures that the element will be sized to 1em. and share the current font cssColor
  This class is defined in global.css
*/

var Icon = function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var style = this.props.style || {};
      style = _lodash2.default.merge({ height: "1em", width: "1em", fontSize: this.props.fontSize });

      var iconElement = _react2.default.createElement('use', { xlinkHref: this.props.icon });
      if (this.props.iconComponent) {
        iconElement = _react2.default.createElement(this.props.iconComponent, { xlinkHref: this.props.icon });
      }

      return _react2.default.createElement(
        'span',
        _lodash2.default.omit(this.props, "icon", "iconComponent", "fontSize"),
        _react2.default.createElement(
          'svg',
          { viewBox: '0 0 100 100', width: '100%', height: '100%', style: style },
          iconElement
        )
      );
    }
  }]);

  return Icon;
}(_react2.default.Component);

exports.default = Icon;
