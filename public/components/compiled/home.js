"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.mapTab;

    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "ul",
          { className: "nav nav-tabs", role: "tablist", id: "requestTab" },
          React.createElement(
            "li",
            { role: "presentation" },
            React.createElement(
              "a",
              { href: "#map", id: "mapSelector", className: "active", "aria-controls": "map", role: "tab", "data-toggle": "tab" },
              "View Map"
            )
          ),
          React.createElement(
            "li",
            { role: "presentation" },
            React.createElement(
              "a",
              { href: "#browse", "aria-controls": "browse", role: "tab", "data-toggle": "tab" },
              "Browse Requests"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "tab-content" },
          React.createElement(
            "div",
            { role: "tabpanel", className: "tab-pane active", id: "map" },
            React.createElement(MapView, { requests: this.props.requests, handleMarkerClick: this.props.handleMarkerClick, handleInfoClose: this.props.handleInfoClose, handlePostClick: this.props.handlePostClick })
          ),
          React.createElement(
            "div",
            { role: "tabpanel", className: "tab-pane", id: "browse" },
            React.createElement(BrowseRequests, {
              requests: this.props.requests,
              handlePostClick: this.props.handlePostClick
            })
          )
        )
      );
    }
  }]);

  return Home;
}(React.Component);

window.Home = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2hvbWUuanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsIm1hcFRhYiIsInJlcXVlc3RzIiwiaGFuZGxlTWFya2VyQ2xpY2siLCJoYW5kbGVJbmZvQ2xvc2UiLCJoYW5kbGVQb3N0Q2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxJOzs7QUFDSixnQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDRHQUNWQSxLQURVOztBQUVoQixVQUFLQyxNQUFMOztBQUZnQjtBQUlqQjs7Ozs2QkFHTztBQUNOLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUksV0FBVSxjQUFkLEVBQTZCLE1BQUssU0FBbEMsRUFBNEMsSUFBRyxZQUEvQztBQUVFO0FBQUE7QUFBQSxjQUFJLE1BQUssY0FBVDtBQUNFO0FBQUE7QUFBQSxnQkFBRyxNQUFLLE1BQVIsRUFBZSxJQUFHLGFBQWxCLEVBQWdDLFdBQVUsUUFBMUMsRUFBbUQsaUJBQWMsS0FBakUsRUFBdUUsTUFBSyxLQUE1RSxFQUFrRixlQUFZLEtBQTlGO0FBQUE7QUFBQTtBQURGLFdBRkY7QUFNRTtBQUFBO0FBQUEsY0FBSSxNQUFLLGNBQVQ7QUFBeUI7QUFBQTtBQUFBLGdCQUFHLE1BQUssU0FBUixFQUFrQixpQkFBYyxRQUFoQyxFQUF5QyxNQUFLLEtBQTlDLEVBQW9ELGVBQVksS0FBaEU7QUFBQTtBQUFBO0FBQXpCO0FBTkYsU0FERjtBQVdFO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUVFO0FBQUE7QUFBQSxjQUFLLE1BQUssVUFBVixFQUFxQixXQUFVLGlCQUEvQixFQUFpRCxJQUFHLEtBQXBEO0FBQ0UsZ0NBQUMsT0FBRCxJQUFTLFVBQVUsS0FBS0QsS0FBTCxDQUFXRSxRQUE5QixFQUF3QyxtQkFBbUIsS0FBS0YsS0FBTCxDQUFXRyxpQkFBdEUsRUFBeUYsaUJBQWlCLEtBQUtILEtBQUwsQ0FBV0ksZUFBckgsRUFBc0ksaUJBQWlCLEtBQUtKLEtBQUwsQ0FBV0ssZUFBbEs7QUFERixXQUZGO0FBTUU7QUFBQTtBQUFBLGNBQUssTUFBSyxVQUFWLEVBQXFCLFdBQVUsVUFBL0IsRUFBMEMsSUFBRyxRQUE3QztBQUNFLGdDQUFDLGNBQUQ7QUFDRSx3QkFBVSxLQUFLTCxLQUFMLENBQVdFLFFBRHZCO0FBRUUsK0JBQWlCLEtBQUtGLEtBQUwsQ0FBV0s7QUFGOUI7QUFERjtBQU5GO0FBWEYsT0FERjtBQTRCRDs7OztFQXJDZ0JDLE1BQU1DLFM7O0FBd0N6QkMsT0FBT1QsSUFBUCxHQUFjQSxJQUFkIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLm1hcFRhYjtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiIGlkPVwicmVxdWVzdFRhYlwiPlxyXG5cclxuICAgICAgICAgIDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjbWFwXCIgaWQ9XCJtYXBTZWxlY3RvclwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiIGFyaWEtY29udHJvbHM9XCJtYXBcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5WaWV3IE1hcDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIiA+PGEgaHJlZj1cIiNicm93c2VcIiBhcmlhLWNvbnRyb2xzPVwiYnJvd3NlXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+QnJvd3NlIFJlcXVlc3RzPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzc05hbWU9XCJ0YWItcGFuZSBhY3RpdmVcIiBpZD1cIm1hcFwiPlxyXG4gICAgICAgICAgICA8TWFwVmlldyByZXF1ZXN0cz17dGhpcy5wcm9wcy5yZXF1ZXN0c30gaGFuZGxlTWFya2VyQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlTWFya2VyQ2xpY2t9IGhhbmRsZUluZm9DbG9zZT17dGhpcy5wcm9wcy5oYW5kbGVJbmZvQ2xvc2V9IGhhbmRsZVBvc3RDbGljaz17dGhpcy5wcm9wcy5oYW5kbGVQb3N0Q2xpY2t9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzTmFtZT1cInRhYi1wYW5lXCIgaWQ9XCJicm93c2VcIj5cclxuICAgICAgICAgICAgPEJyb3dzZVJlcXVlc3RzXHJcbiAgICAgICAgICAgICAgcmVxdWVzdHM9e3RoaXMucHJvcHMucmVxdWVzdHN9XHJcbiAgICAgICAgICAgICAgaGFuZGxlUG9zdENsaWNrPXt0aGlzLnByb3BzLmhhbmRsZVBvc3RDbGlja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LkhvbWUgPSBIb21lOyJdfQ==