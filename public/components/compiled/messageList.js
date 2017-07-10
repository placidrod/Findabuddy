'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 Component for listing messages
 */
var MessageList = function (_React$Component) {
  _inherits(MessageList, _React$Component);

  function MessageList(props) {
    _classCallCheck(this, MessageList);

    var _this = _possibleConstructorReturn(this, (MessageList.__proto__ || Object.getPrototypeOf(MessageList)).call(this, props));

    _this.state = {
      recipient: ''
    };
    _this.handleMessageClick = _this.handleMessageClick.bind(_this);
    _this.updateMessagesAsRead = _this.updateMessagesAsRead.bind(_this);
    return _this;
  }

  _createClass(MessageList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
    // var isRead = true;

    // if (this.props.selectedNotification.sender) {
    //   this.setState({
    //     recipient: this.props.selectedNotification.sender
    //   });
    // }
    // for (var i = 0; i < this.props.messages.length; i++) {
    //   if (this.props.messages[i].read === false) {
    //     isRead = false;
    //     break;
    //   }
    // }
    // //Prevents the put request from being called if the messages have
    // //already been updated as read
    // if (isRead === false) {
    //   this.updateMessagesAsRead();
    // }


    //This allows the recipient of the users message to be changed when a notification is clicked
    //while the user is viewing messages
    //https://stackoverflow.com/questions/32414308/updating-state-on-props-change-in-react-form

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // var isRead = true;

      // // You don't have to do this check first, but it can help prevent an unneeded render
      // if (nextProps.selectedNotification.sender !== this.state.recipient) {
      //   this.setState({ recipient: nextProps.selectedNotification.sender });
      // }
      // if ((nextProps.messages.length !== this.props.messages.length) ||
      //   (JSON.stringify(nextProps.messages) !== JSON.stringify(this.props.messages))) {
      //   for (var i = 0; i < nextProps.messages.length; i++) {
      //     if (nextProps.messages[i].read === false) {
      //       isRead = false;
      //       break;
      //     }
      //   }
      //   //Prevents the put request from being called twice, once because the messages
      //   //changed and once because the messages read property changed from true to false
      //   if (isRead === false) {
      //     this.updateMessagesAsRead();
      //   }
      // }
    }
  }, {
    key: 'handleMessageClick',
    value: function handleMessageClick(message) {
      this.setState({
        recipient: message.sender
      });
      this.props.handleNotificationSelect(message);
    }
  }, {
    key: 'updateMessagesAsRead',
    value: function updateMessagesAsRead() {
      $.ajax({
        type: 'PUT',
        url: '/message/recipient',
        data: { recipient: this.props.user },
        success: function () {
          console.log('PUT request succeeded!');
        }.bind(this),
        error: function error(err) {
          console.log('PUT request failed!');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'messageList' },
          React.createElement(
            'table',
            { className: 'table table-striped' },
            React.createElement(
              'thead',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'th',
                  null,
                  'Sender'
                ),
                React.createElement(
                  'th',
                  null,
                  'Message'
                )
              )
            ),
            React.createElement(
              'tbody',
              null,
              this.props.convo.messages.map(function (message) {
                return React.createElement(Chat, {
                  message: message,
                  key: message._id
                });
              })
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'sendMessage' },
          React.createElement(SendMessage, { recipient: this.props.convo.participants[0] === this.props.user ? this.props.convo.participants[1] : this.props.convo.participants[0], sender: this.props.user })
        )
      );
    }
  }]);

  return MessageList;
}(React.Component);

window.MessageList = MessageList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21lc3NhZ2VMaXN0LmpzeCJdLCJuYW1lcyI6WyJNZXNzYWdlTGlzdCIsInByb3BzIiwic3RhdGUiLCJyZWNpcGllbnQiLCJoYW5kbGVNZXNzYWdlQ2xpY2siLCJiaW5kIiwidXBkYXRlTWVzc2FnZXNBc1JlYWQiLCJuZXh0UHJvcHMiLCJtZXNzYWdlIiwic2V0U3RhdGUiLCJzZW5kZXIiLCJoYW5kbGVOb3RpZmljYXRpb25TZWxlY3QiLCIkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwidXNlciIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJlcnIiLCJjb252byIsIm1lc3NhZ2VzIiwibWFwIiwiX2lkIiwicGFydGljaXBhbnRzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0lBR01BLFc7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVztBQURBLEtBQWI7QUFHQSxVQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkMsSUFBeEIsT0FBMUI7QUFDQSxVQUFLQyxvQkFBTCxHQUE0QixNQUFLQSxvQkFBTCxDQUEwQkQsSUFBMUIsT0FBNUI7QUFOaUI7QUFPbEI7Ozs7d0NBRW9CLENBbUJwQjtBQWxCQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Y7QUFDQTtBQUNBOzs7OzhDQUMwQkUsUyxFQUFXO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7dUNBRWtCQyxPLEVBQVM7QUFDMUIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pOLG1CQUFXSyxRQUFRRTtBQURQLE9BQWQ7QUFHQSxXQUFLVCxLQUFMLENBQVdVLHdCQUFYLENBQW9DSCxPQUFwQztBQUNEOzs7MkNBRXNCO0FBQ3JCSSxRQUFFQyxJQUFGLENBQU87QUFDTEMsY0FBTSxLQUREO0FBRUxDLGFBQUssb0JBRkE7QUFHTEMsY0FBTSxFQUFDYixXQUFXLEtBQUtGLEtBQUwsQ0FBV2dCLElBQXZCLEVBSEQ7QUFJTEMsaUJBQVMsWUFBVztBQUNsQkMsa0JBQVFDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELFNBRlEsQ0FFUGYsSUFGTyxDQUVGLElBRkUsQ0FKSjtBQU9MZ0IsZUFBTyxlQUFTQyxHQUFULEVBQWM7QUFDbkJILGtCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDRDtBQVRJLE9BQVA7QUFXRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTyxXQUFVLHFCQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFERixhQURGO0FBT0U7QUFBQTtBQUFBO0FBRUksbUJBQUtuQixLQUFMLENBQVdzQixLQUFYLENBQWlCQyxRQUFqQixDQUEwQkMsR0FBMUIsQ0FBOEIsVUFBQ2pCLE9BQUQ7QUFBQSx1QkFDNUIsb0JBQUMsSUFBRDtBQUNFLDJCQUFTQSxPQURYO0FBRUUsdUJBQUtBLFFBQVFrQjtBQUZmLGtCQUQ0QjtBQUFBLGVBQTlCO0FBRko7QUFQRjtBQURGLFNBREY7QUFxQkU7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0UsOEJBQUMsV0FBRCxJQUFhLFdBQVcsS0FBS3pCLEtBQUwsQ0FBV3NCLEtBQVgsQ0FBaUJJLFlBQWpCLENBQThCLENBQTlCLE1BQXFDLEtBQUsxQixLQUFMLENBQVdnQixJQUFoRCxHQUF1RCxLQUFLaEIsS0FBTCxDQUFXc0IsS0FBWCxDQUFpQkksWUFBakIsQ0FBOEIsQ0FBOUIsQ0FBdkQsR0FBMEYsS0FBSzFCLEtBQUwsQ0FBV3NCLEtBQVgsQ0FBaUJJLFlBQWpCLENBQThCLENBQTlCLENBQWxILEVBQW9KLFFBQVEsS0FBSzFCLEtBQUwsQ0FBV2dCLElBQXZLO0FBREY7QUFyQkYsT0FERjtBQTJCRDs7OztFQTFHdUJXLE1BQU1DLFM7O0FBNkdoQ0MsT0FBTzlCLFdBQVAsR0FBcUJBLFdBQXJCIiwiZmlsZSI6Im1lc3NhZ2VMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuIENvbXBvbmVudCBmb3IgbGlzdGluZyBtZXNzYWdlc1xyXG4gKi9cclxuY2xhc3MgTWVzc2FnZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICByZWNpcGllbnQ6ICcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVNZXNzYWdlQ2xpY2sgPSB0aGlzLmhhbmRsZU1lc3NhZ2VDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51cGRhdGVNZXNzYWdlc0FzUmVhZCA9IHRoaXMudXBkYXRlTWVzc2FnZXNBc1JlYWQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIC8vIHZhciBpc1JlYWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkTm90aWZpY2F0aW9uLnNlbmRlcikge1xyXG4gICAgLy8gICB0aGlzLnNldFN0YXRlKHtcclxuICAgIC8vICAgICByZWNpcGllbnQ6IHRoaXMucHJvcHMuc2VsZWN0ZWROb3RpZmljYXRpb24uc2VuZGVyXHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BzLm1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgIGlmICh0aGlzLnByb3BzLm1lc3NhZ2VzW2ldLnJlYWQgPT09IGZhbHNlKSB7XHJcbiAgICAvLyAgICAgaXNSZWFkID0gZmFsc2U7XHJcbiAgICAvLyAgICAgYnJlYWs7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIC8vUHJldmVudHMgdGhlIHB1dCByZXF1ZXN0IGZyb20gYmVpbmcgY2FsbGVkIGlmIHRoZSBtZXNzYWdlcyBoYXZlXHJcbiAgICAvLyAvL2FscmVhZHkgYmVlbiB1cGRhdGVkIGFzIHJlYWRcclxuICAgIC8vIGlmIChpc1JlYWQgPT09IGZhbHNlKSB7XHJcbiAgICAvLyAgIHRoaXMudXBkYXRlTWVzc2FnZXNBc1JlYWQoKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIC8vVGhpcyBhbGxvd3MgdGhlIHJlY2lwaWVudCBvZiB0aGUgdXNlcnMgbWVzc2FnZSB0byBiZSBjaGFuZ2VkIHdoZW4gYSBub3RpZmljYXRpb24gaXMgY2xpY2tlZFxyXG4gIC8vd2hpbGUgdGhlIHVzZXIgaXMgdmlld2luZyBtZXNzYWdlc1xyXG4gIC8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzI0MTQzMDgvdXBkYXRpbmctc3RhdGUtb24tcHJvcHMtY2hhbmdlLWluLXJlYWN0LWZvcm1cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgLy8gdmFyIGlzUmVhZCA9IHRydWU7XHJcblxyXG4gICAgLy8gLy8gWW91IGRvbid0IGhhdmUgdG8gZG8gdGhpcyBjaGVjayBmaXJzdCwgYnV0IGl0IGNhbiBoZWxwIHByZXZlbnQgYW4gdW5uZWVkZWQgcmVuZGVyXHJcbiAgICAvLyBpZiAobmV4dFByb3BzLnNlbGVjdGVkTm90aWZpY2F0aW9uLnNlbmRlciAhPT0gdGhpcy5zdGF0ZS5yZWNpcGllbnQpIHtcclxuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7IHJlY2lwaWVudDogbmV4dFByb3BzLnNlbGVjdGVkTm90aWZpY2F0aW9uLnNlbmRlciB9KTtcclxuICAgIC8vIH1cclxuICAgIC8vIGlmICgobmV4dFByb3BzLm1lc3NhZ2VzLmxlbmd0aCAhPT0gdGhpcy5wcm9wcy5tZXNzYWdlcy5sZW5ndGgpIHx8XHJcbiAgICAvLyAgIChKU09OLnN0cmluZ2lmeShuZXh0UHJvcHMubWVzc2FnZXMpICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLm1lc3NhZ2VzKSkpIHtcclxuICAgIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXh0UHJvcHMubWVzc2FnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICBpZiAobmV4dFByb3BzLm1lc3NhZ2VzW2ldLnJlYWQgPT09IGZhbHNlKSB7XHJcbiAgICAvLyAgICAgICBpc1JlYWQgPSBmYWxzZTtcclxuICAgIC8vICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfVxyXG4gICAgLy8gICAvL1ByZXZlbnRzIHRoZSBwdXQgcmVxdWVzdCBmcm9tIGJlaW5nIGNhbGxlZCB0d2ljZSwgb25jZSBiZWNhdXNlIHRoZSBtZXNzYWdlc1xyXG4gICAgLy8gICAvL2NoYW5nZWQgYW5kIG9uY2UgYmVjYXVzZSB0aGUgbWVzc2FnZXMgcmVhZCBwcm9wZXJ0eSBjaGFuZ2VkIGZyb20gdHJ1ZSB0byBmYWxzZVxyXG4gICAgLy8gICBpZiAoaXNSZWFkID09PSBmYWxzZSkge1xyXG4gICAgLy8gICAgIHRoaXMudXBkYXRlTWVzc2FnZXNBc1JlYWQoKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlTWVzc2FnZUNsaWNrKG1lc3NhZ2UpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICByZWNpcGllbnQ6IG1lc3NhZ2Uuc2VuZGVyXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMuaGFuZGxlTm90aWZpY2F0aW9uU2VsZWN0KG1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTWVzc2FnZXNBc1JlYWQoKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiAnUFVUJyxcclxuICAgICAgdXJsOiAnL21lc3NhZ2UvcmVjaXBpZW50JyxcclxuICAgICAgZGF0YToge3JlY2lwaWVudDogdGhpcy5wcm9wcy51c2VyfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BVVCByZXF1ZXN0IHN1Y2NlZWRlZCEnKTtcclxuICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BVVCByZXF1ZXN0IGZhaWxlZCEnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZUxpc3RcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+U2VuZGVyPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5NZXNzYWdlPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb252by5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGF0XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e21lc3NhZ2UuX2lkfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW5kTWVzc2FnZVwiPlxyXG4gICAgICAgICAgPFNlbmRNZXNzYWdlIHJlY2lwaWVudD17dGhpcy5wcm9wcy5jb252by5wYXJ0aWNpcGFudHNbMF0gPT09IHRoaXMucHJvcHMudXNlciA/IHRoaXMucHJvcHMuY29udm8ucGFydGljaXBhbnRzWzFdIDogdGhpcy5wcm9wcy5jb252by5wYXJ0aWNpcGFudHNbMF19IHNlbmRlcj17dGhpcy5wcm9wcy51c2VyfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5NZXNzYWdlTGlzdCA9IE1lc3NhZ2VMaXN0O1xyXG4iXX0=