"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 Component for notifcations area of application, mainly for visibility of new messages.
 */

var Notifications = function (_React$Component) {
  _inherits(Notifications, _React$Component);

  function Notifications(props) {
    _classCallCheck(this, Notifications);

    var _this = _possibleConstructorReturn(this, (Notifications.__proto__ || Object.getPrototypeOf(Notifications)).call(this, props));

    _this.state = {};
    _this.handleClick = _this.handleClick.bind(_this);
    _this.notificationList = _this.notificationList.bind(_this);
    return _this;
  }

  _createClass(Notifications, [{
    key: "handleClick",
    value: function handleClick(notification) {
      this.props.handleNotificationSelect(notification);
      this.props.handleSelect('selectMessages');
    }
  }, {
    key: "notificationList",
    value: function notificationList() {
      var _this2 = this;

      //console.log(this.props.messages)
      this.props.messages.map(function (notification) {
        if (notification.read === false) {
          return React.createElement(NotificationMessage, { key: notification._id, notification: _this2.props.messages, handleClick: _this2.handleClick });
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;

      //console.log(this.props.messages)
      if (this.props.messages.length > 0) {
        this.notificationList = this.props.messages[0].messages.map(function (notification) {
          //console.log(notification)
          if (notification.read === false) {
            return React.createElement(NotificationMessage, { key: notification._id, notification: notification, handleClick: _this3.handleClick });
          }
        });
        //console.log(this.notificationList)
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "noitifications" },
        React.createElement(
          "div",
          { className: "notificationTitle" },
          "Notifications"
        ),
        React.createElement("div", { className: "divider" }),
        this.notificationList
      );
    }
  }]);

  return Notifications;
}(React.Component);

window.Notifications = Notifications;

/*
{this.props.messages.map(notification => {
  console.log(this.props.messages)
  if (notification.read === false) {
    return <NotificationMessage key={notification._id} notification={this.props.messages} handleClick={this.handleClick} />;
  }
})}
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vdGlmaWNhdGlvbnMuanN4Il0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbnMiLCJwcm9wcyIsInN0YXRlIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwibm90aWZpY2F0aW9uTGlzdCIsIm5vdGlmaWNhdGlvbiIsImhhbmRsZU5vdGlmaWNhdGlvblNlbGVjdCIsImhhbmRsZVNlbGVjdCIsIm1lc3NhZ2VzIiwibWFwIiwicmVhZCIsIl9pZCIsImxlbmd0aCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7SUFJTUEsYTs7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFFQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JELElBQXRCLE9BQXhCO0FBTGlCO0FBTWxCOzs7O2dDQUVXRSxZLEVBQWM7QUFDeEIsV0FBS0wsS0FBTCxDQUFXTSx3QkFBWCxDQUFvQ0QsWUFBcEM7QUFDQSxXQUFLTCxLQUFMLENBQVdPLFlBQVgsQ0FBd0IsZ0JBQXhCO0FBQ0Q7Ozt1Q0FFa0I7QUFBQTs7QUFDakI7QUFDQSxXQUFLUCxLQUFMLENBQVdRLFFBQVgsQ0FBb0JDLEdBQXBCLENBQXdCLHdCQUFnQjtBQUN0QyxZQUFJSixhQUFhSyxJQUFiLEtBQXNCLEtBQTFCLEVBQWlDO0FBQy9CLGlCQUFPLG9CQUFDLG1CQUFELElBQXFCLEtBQUtMLGFBQWFNLEdBQXZDLEVBQTRDLGNBQWMsT0FBS1gsS0FBTCxDQUFXUSxRQUFyRSxFQUErRSxhQUFhLE9BQUtOLFdBQWpHLEdBQVA7QUFDRDtBQUNGLE9BSkQ7QUFLRDs7O3lDQUVvQjtBQUFBOztBQUNuQjtBQUNBLFVBQUksS0FBS0YsS0FBTCxDQUFXUSxRQUFYLENBQW9CSSxNQUFwQixHQUE2QixDQUFqQyxFQUFvQztBQUNsQyxhQUFLUixnQkFBTCxHQUF3QixLQUFLSixLQUFMLENBQVdRLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJBLFFBQXZCLENBQWdDQyxHQUFoQyxDQUFvQyx3QkFBZ0I7QUFDMUU7QUFDQSxjQUFJSixhQUFhSyxJQUFiLEtBQXNCLEtBQTFCLEVBQWlDO0FBQy9CLG1CQUFPLG9CQUFDLG1CQUFELElBQXFCLEtBQUtMLGFBQWFNLEdBQXZDLEVBQTRDLGNBQWNOLFlBQTFELEVBQXdFLGFBQWEsT0FBS0gsV0FBMUYsR0FBUDtBQUNEO0FBQ0YsU0FMdUIsQ0FBeEI7QUFNQTtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsbUJBQWY7QUFBQTtBQUFBLFNBREY7QUFFRSxxQ0FBSyxXQUFVLFNBQWYsR0FGRjtBQUdLLGFBQUtFO0FBSFYsT0FERjtBQU9EOzs7O0VBNUN5QlMsTUFBTUMsUzs7QUErQ2xDQyxPQUFPaEIsYUFBUCxHQUF1QkEsYUFBdkI7O0FBRUEiLCJmaWxlIjoibm90aWZpY2F0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiBDb21wb25lbnQgZm9yIG5vdGlmY2F0aW9ucyBhcmVhIG9mIGFwcGxpY2F0aW9uLCBtYWlubHkgZm9yIHZpc2liaWxpdHkgb2YgbmV3IG1lc3NhZ2VzLlxyXG4gKi9cclxuXHJcbmNsYXNzIE5vdGlmaWNhdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgfTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm5vdGlmaWNhdGlvbkxpc3QgPSB0aGlzLm5vdGlmaWNhdGlvbkxpc3QuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2sobm90aWZpY2F0aW9uKSB7XHJcbiAgICB0aGlzLnByb3BzLmhhbmRsZU5vdGlmaWNhdGlvblNlbGVjdChub3RpZmljYXRpb24pO1xyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTZWxlY3QoJ3NlbGVjdE1lc3NhZ2VzJyk7XHJcbiAgfVxyXG5cclxuICBub3RpZmljYXRpb25MaXN0KCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLm1lc3NhZ2VzKVxyXG4gICAgdGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAobm90aWZpY2F0aW9uID0+IHtcclxuICAgICAgaWYgKG5vdGlmaWNhdGlvbi5yZWFkID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiA8Tm90aWZpY2F0aW9uTWVzc2FnZSBrZXk9e25vdGlmaWNhdGlvbi5faWR9IG5vdGlmaWNhdGlvbj17dGhpcy5wcm9wcy5tZXNzYWdlc30gaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IC8+O1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLm1lc3NhZ2VzKVxyXG4gICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbkxpc3QgPSB0aGlzLnByb3BzLm1lc3NhZ2VzWzBdLm1lc3NhZ2VzLm1hcChub3RpZmljYXRpb24gPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cobm90aWZpY2F0aW9uKVxyXG4gICAgICAgIGlmIChub3RpZmljYXRpb24ucmVhZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHJldHVybiA8Tm90aWZpY2F0aW9uTWVzc2FnZSBrZXk9e25vdGlmaWNhdGlvbi5faWR9IG5vdGlmaWNhdGlvbj17bm90aWZpY2F0aW9ufSBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja30gLz47XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMubm90aWZpY2F0aW9uTGlzdClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9pdGlmaWNhdGlvbnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvblRpdGxlXCI+Tm90aWZpY2F0aW9uczwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAge3RoaXMubm90aWZpY2F0aW9uTGlzdH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93Lk5vdGlmaWNhdGlvbnMgPSBOb3RpZmljYXRpb25zO1xyXG5cclxuLypcclxue3RoaXMucHJvcHMubWVzc2FnZXMubWFwKG5vdGlmaWNhdGlvbiA9PiB7XHJcbiAgY29uc29sZS5sb2codGhpcy5wcm9wcy5tZXNzYWdlcylcclxuICBpZiAobm90aWZpY2F0aW9uLnJlYWQgPT09IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gPE5vdGlmaWNhdGlvbk1lc3NhZ2Uga2V5PXtub3RpZmljYXRpb24uX2lkfSBub3RpZmljYXRpb249e3RoaXMucHJvcHMubWVzc2FnZXN9IGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSAvPjtcclxuICB9XHJcbn0pfVxyXG4qL1xyXG4iXX0=