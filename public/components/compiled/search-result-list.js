"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchList = function (_React$Component) {
  _inherits(SearchList, _React$Component);

  function SearchList(props) {
    _classCallCheck(this, SearchList);

    return _possibleConstructorReturn(this, (SearchList.__proto__ || Object.getPrototypeOf(SearchList)).call(this, props));
  }

  _createClass(SearchList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "table",
        { className: "table table-striped" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              "Title"
            ),
            React.createElement(
              "th",
              null,
              "Description"
            ),
            React.createElement(
              "th",
              null,
              "Posted Date"
            ),
            React.createElement(
              "th",
              null,
              "Posted Time"
            ),
            React.createElement(
              "th",
              null,
              "Age"
            ),
            React.createElement(
              "th",
              null,
              "Gender"
            ),
            React.createElement(
              "th",
              null,
              "Zip Code"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          this.props.searchResult.map(function (item) {
            return (
              // console.log('EACH ITEM', item)
              React.createElement(SearchResultItem, {
                result: item,
                handlePostClick: _this2.props.handlePostClick,
                key: item._id
              })
            );
          })
        )
      );
    }
  }]);

  return SearchList;
}(React.Component);

window.SearchList = SearchList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlYXJjaC1yZXN1bHQtbGlzdC5qc3giXSwibmFtZXMiOlsiU2VhcmNoTGlzdCIsInByb3BzIiwid2luZG93Iiwic2Nyb2xsVG8iLCJzZWFyY2hSZXN1bHQiLCJtYXAiLCJpdGVtIiwiaGFuZGxlUG9zdENsaWNrIiwiX2lkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsVTs7O0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDWEEsS0FEVztBQUVsQjs7Ozt3Q0FFb0I7QUFDbkJDLGFBQU9DLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTyxXQUFVLHFCQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQURGLFNBREY7QUFZRTtBQUFBO0FBQUE7QUFFSSxlQUFLRixLQUFMLENBQVdHLFlBQVgsQ0FBd0JDLEdBQXhCLENBQTRCLFVBQUNDLElBQUQ7QUFBQTtBQUMxQjtBQUNBLGtDQUFDLGdCQUFEO0FBQ0Usd0JBQVFBLElBRFY7QUFFRSxpQ0FBaUIsT0FBS0wsS0FBTCxDQUFXTSxlQUY5QjtBQUdFLHFCQUFLRCxLQUFLRTtBQUhaO0FBRjBCO0FBQUEsV0FBNUI7QUFGSjtBQVpGLE9BREY7QUEyQkQ7Ozs7RUFyQ3NCQyxNQUFNQyxTOztBQXdDL0JSLE9BQU9GLFVBQVAsR0FBb0JBLFVBQXBCIiwiZmlsZSI6InNlYXJjaC1yZXN1bHQtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPlRpdGxlPC90aD5cclxuICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgPHRoPlBvc3RlZCBEYXRlPC90aD5cclxuICAgICAgICAgICAgPHRoPlBvc3RlZCBUaW1lPC90aD5cclxuICAgICAgICAgICAgPHRoPkFnZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5HZW5kZXI8L3RoPlxyXG4gICAgICAgICAgICA8dGg+WmlwIENvZGU8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hSZXN1bHQubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdFQUNIIElURU0nLCBpdGVtKVxyXG4gICAgICAgICAgICAgIDxTZWFyY2hSZXN1bHRJdGVtXHJcbiAgICAgICAgICAgICAgICByZXN1bHQ9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVQb3N0Q2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlUG9zdENsaWNrfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLl9pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuU2VhcmNoTGlzdCA9IFNlYXJjaExpc3Q7XHJcbiJdfQ==