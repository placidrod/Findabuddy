'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 Table for displaying ratings associated with a request or user
 */

var RatingsTable = function (_React$Component) {
  _inherits(RatingsTable, _React$Component);

  function RatingsTable(props) {
    _classCallCheck(this, RatingsTable);

    var _this = _possibleConstructorReturn(this, (RatingsTable.__proto__ || Object.getPrototypeOf(RatingsTable)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(RatingsTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('RatingsTable loaded: ', this.props.ratings);
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('under render');

      return React.createElement(
        'div',
        { className: 'panel panel-warning' },
        React.createElement(
          'div',
          { className: 'panel-heading' },
          'Ratings'
        ),
        React.createElement(
          'div',
          { className: 'panel-body' },
          React.createElement(
            'p',
            null,
            'These are previously submitted ratings for this Buddy Request'
          )
        ),
        React.createElement(
          'table',
          { className: 'table' },
          React.createElement(
            'thead',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'th',
                null,
                'Reviewer'
              ),
              React.createElement(
                'th',
                null,
                'Reviewee'
              ),
              React.createElement(
                'th',
                null,
                'Buddy Request Link'
              ),
              React.createElement(
                'th',
                null,
                'Rating'
              ),
              React.createElement(
                'th',
                null,
                'Comment'
              )
            )
          ),
          React.createElement(
            'tbody',
            null,
            this.props.ratings.map(function (curElement) {
              return React.createElement(RatingsTableItem, { rating: curElement });
            })
          )
        )
      );
    }
  }]);

  return RatingsTable;
}(React.Component);

window.RatingsTable = RatingsTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3JhdGluZ3MtdGFibGUuanN4Il0sIm5hbWVzIjpbIlJhdGluZ3NUYWJsZSIsInByb3BzIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwicmF0aW5ncyIsIm1hcCIsImN1ckVsZW1lbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0lBSU1BLFk7OztBQUVKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBS2xCOzs7O3dDQUVvQjtBQUNuQkMsY0FBUUMsR0FBUixDQUFZLHVCQUFaLEVBQXFDLEtBQUtILEtBQUwsQ0FBV0ksT0FBaEQ7QUFDRDs7OzZCQUVRO0FBQ1BGLGNBQVFDLEdBQVIsQ0FBWSxjQUFaOztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsZUFBZjtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUZGO0FBS0U7QUFBQTtBQUFBLFlBQU8sV0FBVSxPQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQURGLFdBREY7QUFVRTtBQUFBO0FBQUE7QUFFSSxpQkFBS0gsS0FBTCxDQUFXSSxPQUFYLENBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxVQUFELEVBQWdCO0FBQ3JDLHFCQUFPLG9CQUFDLGdCQUFELElBQWtCLFFBQVFBLFVBQTFCLEdBQVA7QUFDRCxhQUZEO0FBRko7QUFWRjtBQUxGLE9BREY7QUEwQkQ7Ozs7RUExQ3dCQyxNQUFNQyxTOztBQThDakNDLE9BQU9WLFlBQVAsR0FBc0JBLFlBQXRCIiwiZmlsZSI6InJhdGluZ3MtdGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gVGFibGUgZm9yIGRpc3BsYXlpbmcgcmF0aW5ncyBhc3NvY2lhdGVkIHdpdGggYSByZXF1ZXN0IG9yIHVzZXJcclxuICovXHJcblxyXG5jbGFzcyBSYXRpbmdzVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1JhdGluZ3NUYWJsZSBsb2FkZWQ6ICcsIHRoaXMucHJvcHMucmF0aW5ncyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZygndW5kZXIgcmVuZGVyJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC13YXJuaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+UmF0aW5nczwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgPHA+VGhlc2UgYXJlIHByZXZpb3VzbHkgc3VibWl0dGVkIHJhdGluZ3MgZm9yIHRoaXMgQnVkZHkgUmVxdWVzdDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5SZXZpZXdlcjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlJldmlld2VlPC90aD5cclxuICAgICAgICAgICAgICA8dGg+QnVkZHkgUmVxdWVzdCBMaW5rPC90aD5cclxuICAgICAgICAgICAgICA8dGg+UmF0aW5nPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Q29tbWVudDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yYXRpbmdzLm1hcCgoY3VyRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxSYXRpbmdzVGFibGVJdGVtIHJhdGluZz17Y3VyRWxlbWVudH0gLz47XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxud2luZG93LlJhdGluZ3NUYWJsZSA9IFJhdGluZ3NUYWJsZTtcclxuIl19