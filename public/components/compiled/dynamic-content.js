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
    key: "handlePostClick",
    value: function handlePostClick() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "searchRequest" },
        React.createElement(
          "h1",
          null,
          "Buddy Request Form"
        ),
        React.createElement(CreateRequest, { handlePostClick: this.handlePostClick })
      );
    }
  }]);

  return DynamicContent;
}(React.Component);

window.DynamicContent = DynamicContent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2R5bmFtaWMtY29udGVudC5qc3giXSwibmFtZXMiOlsiRHluYW1pY0NvbnRlbnQiLCJwcm9wcyIsInN0YXRlIiwiaGFuZGxlU3VibWl0UmVxdWVzdCIsImJpbmQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVBvc3RDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGM7OztBQUVGLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBS0MsbUJBQUwsR0FBMkIsTUFBS0EsbUJBQUwsQ0FBeUJDLElBQXpCLE9BQTNCOztBQUhpQjtBQUtsQjs7Ozt3Q0FFbUJDLEksRUFBTTtBQUN4QkMsY0FBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DRixJQUFwQztBQUNEOzs7c0NBRWlCLENBQ2pCOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FKRjtBQUtFLDRCQUFDLGFBQUQsSUFBZSxpQkFBaUIsS0FBS0csZUFBckM7QUFMRixPQURGO0FBV0Q7Ozs7RUE1QndCQyxNQUFNQyxTOztBQWdDbkNDLE9BQU9YLGNBQVAsR0FBd0JBLGNBQXhCIiwiZmlsZSI6ImR5bmFtaWMtY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIER5bmFtaWNDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICB0aGlzLmhhbmRsZVN1Ym1pdFJlcXVlc3QgPSB0aGlzLmhhbmRsZVN1Ym1pdFJlcXVlc3QuYmluZCh0aGlzKVxuXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0UmVxdWVzdChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnWW91IHN1Ym1pdHRlZCBhIGZvcm0nLCBkYXRhKVxuICAgIH1cblxuICAgIGhhbmRsZVBvc3RDbGljaygpIHtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFJlcXVlc3RcIj5cblxuICAgICAgICAgIHsvKjxoMT5TZWFyY2ggRm9ybTwvaDE+Ki99XG4gICAgICAgICAgey8qPFNlYXJjaEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0UmVxdWVzdC5iaW5kKHRoaXMpfS8+Ki99XG4gICAgICAgICAgPGgxPkJ1ZGR5IFJlcXVlc3QgRm9ybTwvaDE+XG4gICAgICAgICAgPENyZWF0ZVJlcXVlc3QgaGFuZGxlUG9zdENsaWNrPXt0aGlzLmhhbmRsZVBvc3RDbGlja30vPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcblxuICAgIH1cblxufVxuXG53aW5kb3cuRHluYW1pY0NvbnRlbnQgPSBEeW5hbWljQ29udGVudDsiXX0=