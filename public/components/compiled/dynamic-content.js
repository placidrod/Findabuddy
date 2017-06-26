"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DynamicContent = function (_React$Component) {
  _inherits(DynamicContent, _React$Component);

  function DynamicContent(props) {
    _classCallCheck(this, DynamicContent);

    var _this = _possibleConstructorReturn(this, (DynamicContent.__proto__ || Object.getPrototypeOf(DynamicContent)).call(this, props));

    _this.state = {};
    _this.handleSubmitRequest = _this.handleSubmitRequest.bind(_this);

    return _this;
  }

  _createClass(DynamicContent, [{
    key: "handleSubmitRequest",
    value: function handleSubmitRequest(data) {
      console.log('You submitted a form', data);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "searchRequest" },
        React.createElement(
          "h1",
          null,
          "Search Form"
        ),
        React.createElement(SearchForm, { onSubmit: this.handleSubmitRequest })
      );
    }
  }]);

  return DynamicContent;
}(React.Component);

window.DynamicContent = DynamicContent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2R5bmFtaWMtY29udGVudC5qc3giXSwibmFtZXMiOlsiRHluYW1pY0NvbnRlbnQiLCJwcm9wcyIsInN0YXRlIiwiaGFuZGxlU3VibWl0UmVxdWVzdCIsImJpbmQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGM7OztBQUVGLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBS0MsbUJBQUwsR0FBMkIsTUFBS0EsbUJBQUwsQ0FBeUJDLElBQXpCLE9BQTNCOztBQUhpQjtBQUtsQjs7Ozt3Q0FFbUJDLEksRUFBTTtBQUN4QkMsY0FBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DRixJQUFwQztBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLDRCQUFDLFVBQUQsSUFBWSxVQUFVLEtBQUtGLG1CQUEzQjtBQUZGLE9BREY7QUFPRDs7OztFQXJCd0JLLE1BQU1DLFM7O0FBeUJuQ0MsT0FBT1YsY0FBUCxHQUF3QkEsY0FBeEIiLCJmaWxlIjoiZHluYW1pYy1jb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRHluYW1pY0NvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0UmVxdWVzdCA9IHRoaXMuaGFuZGxlU3VibWl0UmVxdWVzdC5iaW5kKHRoaXMpXG5cbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXRSZXF1ZXN0KGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdZb3Ugc3VibWl0dGVkIGEgZm9ybScsIGRhdGEpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hSZXF1ZXN0XCI+XG4gICAgICAgICAgPGgxPlNlYXJjaCBGb3JtPC9oMT5cbiAgICAgICAgICA8U2VhcmNoRm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXRSZXF1ZXN0fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcblxuICAgIH1cblxufVxuXG53aW5kb3cuRHluYW1pY0NvbnRlbnQgPSBEeW5hbWljQ29udGVudDsiXX0=