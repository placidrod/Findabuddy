'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 Top level component for new user signup
 TODO: also implement password encryption here
 */
var Signup = function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup(props) {
    _classCallCheck(this, Signup);

    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));

    _this.state = {
      'username': '',
      'password': '',
      'email': ''
    };
    return _this;
  }

  _createClass(Signup, [{
    key: 'usernameOnChangeHandler',
    value: function usernameOnChangeHandler(username) {
      //this.setState({'username': event.trigger.
      //console.log('change handler username', username);
      this.setState({ username: username });
    }
  }, {
    key: 'passwordOnChangeHandler',
    value: function passwordOnChangeHandler(newVal) {
      //this.setState({'username': event.trigger.
      //console.log('change handler password', newVal);
      this.setState({ 'password': newVal });
    }
  }, {
    key: 'emailOnChangeHandler',
    value: function emailOnChangeHandler(email) {
      this.setState({ email: email });
    }
  }, {
    key: 'submitSignup',
    value: function submitSignup() {
      $.ajax({
        url: '/signup',
        type: 'POST',
        data: this.state,
        dataType: 'json'
      }).done(function (data) {
        console.log('signup success ', data);
        if (data.status === '200') {
          window.location.replace('/');
        }
      }).fail(function (failInfo) {
        console.log('FAIL', failInfo);
        window.location.replace('/signup');
      });
    }
  }, {
    key: 'goLogin',
    value: function goLogin() {
      window.location.replace('/login');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'panel panel-default col-md-2' },
        'Signup',
        React.createElement('input', {
          onChange: function onChange(e) {
            return _this2.usernameOnChangeHandler(e.target.value);
          },
          className: 'form-control col-md-2',
          type: 'text',
          placeholder: 'username'
        }),
        React.createElement('input', {
          onChange: function onChange(e) {
            return _this2.passwordOnChangeHandler(e.target.value);
          },
          type: 'password',
          className: 'form-control col-md-1',
          placeholder: 'password'
        }),
        React.createElement('input', {
          onChange: function onChange(e) {
            return _this2.emailOnChangeHandler(e.target.value);
          },
          className: 'form-control col-md-1',
          type: 'text',
          placeholder: 'email'
        }),
        React.createElement(
          'button',
          { className: 'button col-md-6',
            onClick: function onClick() {
              return _this2.submitSignup();
            } },
          'Signup'
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'a',
            { style: { float: 'left', clear: 'left' }, onClick: function onClick() {
                return _this2.goLogin();
              } },
            'Already have an account?',
            React.createElement('br', null),
            'Log in'
          )
        )
      );
    }
  }]);

  return Signup;
}(React.Component);

ReactDOM.render(React.createElement(Signup, null), document.getElementById('signup'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NpZ251cC5qc3giXSwibmFtZXMiOlsiU2lnbnVwIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwic2V0U3RhdGUiLCJuZXdWYWwiLCJlbWFpbCIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGEiLCJkYXRhVHlwZSIsImRvbmUiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZmFpbCIsImZhaWxJbmZvIiwiZSIsInVzZXJuYW1lT25DaGFuZ2VIYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJwYXNzd29yZE9uQ2hhbmdlSGFuZGxlciIsImVtYWlsT25DaGFuZ2VIYW5kbGVyIiwic3VibWl0U2lnbnVwIiwiZmxvYXQiLCJjbGVhciIsImdvTG9naW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0lBSU1BLE07OztBQUVKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYLGtCQUFZLEVBREQ7QUFFWCxrQkFBWSxFQUZEO0FBR1gsZUFBUztBQUhFLEtBQWI7QUFGaUI7QUFPbEI7Ozs7NENBRXVCQyxRLEVBQVU7QUFDaEM7QUFDQTtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxFQUFFRCxrQkFBRixFQUFkO0FBQ0Q7Ozs0Q0FDdUJFLE0sRUFBUTtBQUM5QjtBQUNBO0FBQ0EsV0FBS0QsUUFBTCxDQUFjLEVBQUMsWUFBWUMsTUFBYixFQUFkO0FBQ0Q7Ozt5Q0FDb0JDLEssRUFBTztBQUMxQixXQUFLRixRQUFMLENBQWMsRUFBQ0UsT0FBT0EsS0FBUixFQUFkO0FBQ0Q7OzttQ0FDYztBQUNiQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxTQURBO0FBRUxDLGNBQU0sTUFGRDtBQUdMQyxjQUFNLEtBQUtULEtBSE47QUFJTFUsa0JBQVU7QUFKTCxPQUFQLEVBTUdDLElBTkgsQ0FNUSxVQUFTRixJQUFULEVBQWU7QUFDbkJHLGdCQUFRQyxHQUFSLENBQVksaUJBQVosRUFBK0JKLElBQS9CO0FBQ0EsWUFBSUEsS0FBS0ssTUFBTCxLQUFnQixLQUFwQixFQUEyQjtBQUN6QkMsaUJBQU9DLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLEdBQXhCO0FBQ0Q7QUFDRixPQVhILEVBWUdDLElBWkgsQ0FZUSxVQUFTQyxRQUFULEVBQW1CO0FBQ3ZCUCxnQkFBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JNLFFBQXBCO0FBQ0FKLGVBQU9DLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLFNBQXhCO0FBQ0QsT0FmSDtBQWdCRDs7OzhCQUNTO0FBQ1JGLGFBQU9DLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLFFBQXhCO0FBQ0Q7Ozs2QkFDUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSw4QkFBZjtBQUFBO0FBRUU7QUFDRSxvQkFBVSxrQkFBQ0csQ0FBRDtBQUFBLG1CQUFPLE9BQUtDLHVCQUFMLENBQTZCRCxFQUFFRSxNQUFGLENBQVNDLEtBQXRDLENBQVA7QUFBQSxXQURaO0FBRUUscUJBQVUsdUJBRlo7QUFHRSxnQkFBSyxNQUhQO0FBSUUsdUJBQVk7QUFKZCxVQUZGO0FBUUU7QUFDRSxvQkFBVSxrQkFBQ0gsQ0FBRDtBQUFBLG1CQUFPLE9BQUtJLHVCQUFMLENBQTZCSixFQUFFRSxNQUFGLENBQVNDLEtBQXRDLENBQVA7QUFBQSxXQURaO0FBRUUsZ0JBQUssVUFGUDtBQUdFLHFCQUFVLHVCQUhaO0FBSUUsdUJBQVk7QUFKZCxVQVJGO0FBY0U7QUFDRSxvQkFBVSxrQkFBQ0gsQ0FBRDtBQUFBLG1CQUFPLE9BQUtLLG9CQUFMLENBQTBCTCxFQUFFRSxNQUFGLENBQVNDLEtBQW5DLENBQVA7QUFBQSxXQURaO0FBRUUscUJBQVUsdUJBRlo7QUFHRSxnQkFBSyxNQUhQO0FBSUUsdUJBQVk7QUFKZCxVQWRGO0FBb0JFO0FBQUE7QUFBQSxZQUFRLFdBQVUsaUJBQWxCO0FBQ0UscUJBQVM7QUFBQSxxQkFBTSxPQUFLRyxZQUFMLEVBQU47QUFBQSxhQURYO0FBQUE7QUFBQSxTQXBCRjtBQXVCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBRyxPQUFPLEVBQUNDLE9BQU8sTUFBUixFQUFnQkMsT0FBTyxNQUF2QixFQUFWLEVBQTBDLFNBQVM7QUFBQSx1QkFBTSxPQUFLQyxPQUFMLEVBQU47QUFBQSxlQUFuRDtBQUFBO0FBQzBCLDJDQUQxQjtBQUFBO0FBQUE7QUFERjtBQXZCRixPQURGO0FBK0JEOzs7O0VBN0VrQkMsTUFBTUMsUzs7QUFrRjNCQyxTQUFTQyxNQUFULENBQ0Usb0JBQUMsTUFBRCxPQURGLEVBQ2NDLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FEZCIsImZpbGUiOiJzaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gVG9wIGxldmVsIGNvbXBvbmVudCBmb3IgbmV3IHVzZXIgc2lnbnVwXHJcbiBUT0RPOiBhbHNvIGltcGxlbWVudCBwYXNzd29yZCBlbmNyeXB0aW9uIGhlcmVcclxuICovXHJcbmNsYXNzIFNpZ251cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAndXNlcm5hbWUnOiAnJyxcclxuICAgICAgJ3Bhc3N3b3JkJzogJycsXHJcbiAgICAgICdlbWFpbCc6ICcnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdXNlcm5hbWVPbkNoYW5nZUhhbmRsZXIodXNlcm5hbWUpIHtcclxuICAgIC8vdGhpcy5zZXRTdGF0ZSh7J3VzZXJuYW1lJzogZXZlbnQudHJpZ2dlci5cclxuICAgIC8vY29uc29sZS5sb2coJ2NoYW5nZSBoYW5kbGVyIHVzZXJuYW1lJywgdXNlcm5hbWUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lIH0pO1xyXG4gIH1cclxuICBwYXNzd29yZE9uQ2hhbmdlSGFuZGxlcihuZXdWYWwpIHtcclxuICAgIC8vdGhpcy5zZXRTdGF0ZSh7J3VzZXJuYW1lJzogZXZlbnQudHJpZ2dlci5cclxuICAgIC8vY29uc29sZS5sb2coJ2NoYW5nZSBoYW5kbGVyIHBhc3N3b3JkJywgbmV3VmFsKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeydwYXNzd29yZCc6IG5ld1ZhbH0pO1xyXG4gIH1cclxuICBlbWFpbE9uQ2hhbmdlSGFuZGxlcihlbWFpbCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWw6IGVtYWlsfSk7XHJcbiAgfVxyXG4gIHN1Ym1pdFNpZ251cCgpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJy9zaWdudXAnLFxyXG4gICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgIGRhdGE6IHRoaXMuc3RhdGUsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICB9KVxyXG4gICAgICAuZG9uZShmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NpZ251cCBzdWNjZXNzICcsIGRhdGEpO1xyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJzIwMCcpIHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuZmFpbChmdW5jdGlvbihmYWlsSW5mbykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGQUlMJywgZmFpbEluZm8pO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvc2lnbnVwJyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBnb0xvZ2luKCkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9sb2dpbicpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHQgY29sLW1kLTJcIj5cclxuICAgICAgICBTaWdudXBcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy51c2VybmFtZU9uQ2hhbmdlSGFuZGxlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLW1kLTJcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wYXNzd29yZE9uQ2hhbmdlSGFuZGxlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC1tZC0xXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuZW1haWxPbkNoYW5nZUhhbmRsZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC1tZC0xXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gY29sLW1kLTZcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXRTaWdudXAoKX0+U2lnbnVwXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxhIHN0eWxlPXt7ZmxvYXQ6ICdsZWZ0JywgY2xlYXI6ICdsZWZ0J319IG9uQ2xpY2s9eygpID0+IHRoaXMuZ29Mb2dpbigpfT5cclxuICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/PGJyIC8+TG9nIGluXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxTaWdudXAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXAnKVxyXG4pO1xyXG4iXX0=