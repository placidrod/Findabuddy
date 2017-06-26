"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: "searchHandler",
    value: function searchHandler() {}
  }, {
    key: "requestFormHander",
    value: function requestFormHander() {}
  }, {
    key: "profileHandler",
    value: function profileHandler() {}
  }, {
    key: "logoutHandler",
    value: function logoutHandler() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "mainApp" },
        React.createElement(Nav, null),
        React.createElement(
          "div",
          { className: "dynamicContent" },
          React.createElement(DynamicContent, null)
        ),
        React.createElement("div", { className: "notificationWindow" })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFLbEI7Ozs7b0NBRWUsQ0FFZjs7O3dDQUVtQixDQUVuQjs7O3FDQUVnQixDQUVoQjs7O29DQUVlLENBRWY7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0UsNEJBQUMsR0FBRCxPQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxnQkFBZjtBQUVFLDhCQUFDLGNBQUQ7QUFGRixTQUZGO0FBVUUscUNBQUssV0FBVSxvQkFBZjtBQVZGLE9BREY7QUFnQkQ7Ozs7RUF6Q2VDLE1BQU1DLFM7O0FBOEN4QkMsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUNXQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBRFgiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH07XG4gIH1cblxuICBzZWFyY2hIYW5kbGVyKCkge1xuXG4gIH1cblxuICByZXF1ZXN0Rm9ybUhhbmRlcigpIHtcblxuICB9XG5cbiAgcHJvZmlsZUhhbmRsZXIoKSB7XG5cbiAgfVxuXG4gIGxvZ291dEhhbmRsZXIoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQXBwXCI+XG4gICAgICAgIDxOYXYgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkeW5hbWljQ29udGVudFwiPlxuXG4gICAgICAgICAgPER5bmFtaWNDb250ZW50XG5cblxuICAgICAgICAgIC8+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uV2luZG93XCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTsiXX0=