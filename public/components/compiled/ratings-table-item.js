'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RatingsTableItem = function (_React$Component) {
  _inherits(RatingsTableItem, _React$Component);

  function RatingsTableItem(props) {
    _classCallCheck(this, RatingsTableItem);

    var _this = _possibleConstructorReturn(this, (RatingsTableItem.__proto__ || Object.getPrototypeOf(RatingsTableItem)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(RatingsTableItem, [{
    key: 'render',
    value: function render() {
      console.log('ratings table item: ', this.props.rating);
      return React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          this.props.rating.reviewer
        ),
        React.createElement(
          'td',
          null,
          this.props.rating.reviewee
        ),
        React.createElement(
          'td',
          null,
          React.createElement(
            'a',
            { href: '/request/' + this.props.rating.BuddyRequestId },
            this.props.rating.BuddyRequestId
          )
        ),
        React.createElement(
          'td',
          null,
          this.props.rating.rating
        ),
        React.createElement(
          'td',
          null,
          this.props.rating.reviewText
        )
      );
    }
  }]);

  return RatingsTableItem;
}(React.Component);

window.RatingsTableItem = RatingsTableItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3JhdGluZ3MtdGFibGUtaXRlbS5qc3giXSwibmFtZXMiOlsiUmF0aW5nc1RhYmxlSXRlbSIsInByb3BzIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwicmF0aW5nIiwicmV2aWV3ZXIiLCJyZXZpZXdlZSIsIkJ1ZGR5UmVxdWVzdElkIiwicmV2aWV3VGV4dCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGdCOzs7QUFFSiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUtsQjs7Ozs2QkFHUTtBQUNQQyxjQUFRQyxHQUFSLENBQVksc0JBQVosRUFBb0MsS0FBS0gsS0FBTCxDQUFXSSxNQUEvQztBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUssZUFBS0osS0FBTCxDQUFXSSxNQUFYLENBQWtCQztBQUF2QixTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUssZUFBS0wsS0FBTCxDQUFXSSxNQUFYLENBQWtCRTtBQUF2QixTQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGNBQUcsTUFBTSxjQUFjLEtBQUtOLEtBQUwsQ0FBV0ksTUFBWCxDQUFrQkcsY0FBekM7QUFBMEQsaUJBQUtQLEtBQUwsQ0FBV0ksTUFBWCxDQUFrQkc7QUFBNUU7QUFBSixTQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUssZUFBS1AsS0FBTCxDQUFXSSxNQUFYLENBQWtCQTtBQUF2QixTQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUssZUFBS0osS0FBTCxDQUFXSSxNQUFYLENBQWtCSTtBQUF2QjtBQUxGLE9BREY7QUFTRDs7OztFQXJCNEJDLE1BQU1DLFM7O0FBeUJyQ0MsT0FBT1osZ0JBQVAsR0FBMEJBLGdCQUExQiIsImZpbGUiOiJyYXRpbmdzLXRhYmxlLWl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBSYXRpbmdzVGFibGVJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcblxyXG4gICAgfTtcclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZygncmF0aW5ncyB0YWJsZSBpdGVtOiAnLCB0aGlzLnByb3BzLnJhdGluZyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkPnt0aGlzLnByb3BzLnJhdGluZy5yZXZpZXdlcn08L3RkPlxyXG4gICAgICAgIDx0ZD57dGhpcy5wcm9wcy5yYXRpbmcucmV2aWV3ZWV9PC90ZD5cclxuICAgICAgICA8dGQ+PGEgaHJlZj17Jy9yZXF1ZXN0LycgKyB0aGlzLnByb3BzLnJhdGluZy5CdWRkeVJlcXVlc3RJZH0+e3RoaXMucHJvcHMucmF0aW5nLkJ1ZGR5UmVxdWVzdElkfTwvYT48L3RkPlxyXG4gICAgICAgIDx0ZD57dGhpcy5wcm9wcy5yYXRpbmcucmF0aW5nfTwvdGQ+XHJcbiAgICAgICAgPHRkPnt0aGlzLnByb3BzLnJhdGluZy5yZXZpZXdUZXh0fTwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbndpbmRvdy5SYXRpbmdzVGFibGVJdGVtID0gUmF0aW5nc1RhYmxlSXRlbTtcclxuIl19