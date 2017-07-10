'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 Frontend component for login
 TODO: implement password encryption
 */

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      'username': '',
      'password': ''
    };
    return _this;
  }

  _createClass(Login, [{
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
    key: 'submitRequest',
    value: function submitRequest() {
      console.log('about to submit login request via jquery ajax');
      $.ajax({
        url: '/login',
        type: 'POST',
        data: this.state,
        dataType: 'json'
      }).done(function (data) {
        console.log('data ', data);
        if (data.status === '200') {
          console.log('login successful');
          window.location.replace('/');
        }
      }).fail(function (failInfo) {
        console.log('FAIL', failInfo);
        window.location.replace('/login');
      });
    }
  }, {
    key: 'goSignup',
    value: function goSignup() {
      window.location.replace('/signup');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'panel panel-default col-md-2' },
        'Login',
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
          className: 'form-control col-md-2',
          placeholder: 'password'
        }),
        React.createElement(
          'button',
          { className: 'button col-md-6',
            onClick: function onClick() {
              return _this2.submitRequest();
            }
          },
          'Login'
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'a',
            { style: { float: 'left', clear: 'left' }, onClick: function onClick() {
                return _this2.goSignup();
              } },
            'New to findabuddy?',
            React.createElement('br', null),
            'Create an account'
          )
        )
      );
    }
  }]);

  return Login;
}(React.Component);

ReactDOM.render(React.createElement(Login, null), document.getElementById('login'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvZ2luLmpzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInNldFN0YXRlIiwibmV3VmFsIiwiY29uc29sZSIsImxvZyIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGEiLCJkYXRhVHlwZSIsImRvbmUiLCJzdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJmYWlsIiwiZmFpbEluZm8iLCJlIiwidXNlcm5hbWVPbkNoYW5nZUhhbmRsZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhc3N3b3JkT25DaGFuZ2VIYW5kbGVyIiwic3VibWl0UmVxdWVzdCIsImZsb2F0IiwiY2xlYXIiLCJnb1NpZ251cCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7O0lBS01BLEs7OztBQUVKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYLGtCQUFZLEVBREQ7QUFFWCxrQkFBWTtBQUZELEtBQWI7QUFGaUI7QUFNbEI7Ozs7NENBRXVCQyxRLEVBQVU7QUFDaEM7QUFDQTtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxFQUFFRCxrQkFBRixFQUFkO0FBQ0Q7Ozs0Q0FDdUJFLE0sRUFBUTtBQUM5QjtBQUNBO0FBQ0EsV0FBS0QsUUFBTCxDQUFjLEVBQUMsWUFBWUMsTUFBYixFQUFkO0FBQ0Q7OztvQ0FDZTtBQUNkQyxjQUFRQyxHQUFSLENBQVksK0NBQVo7QUFDQUMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssUUFEQTtBQUVMQyxjQUFNLE1BRkQ7QUFHTEMsY0FBTSxLQUFLVixLQUhOO0FBSUxXLGtCQUFVO0FBSkwsT0FBUCxFQU1HQyxJQU5ILENBTVEsVUFBU0YsSUFBVCxFQUFlO0FBQ25CTixnQkFBUUMsR0FBUixDQUFZLE9BQVosRUFBcUJLLElBQXJCO0FBQ0EsWUFBSUEsS0FBS0csTUFBTCxLQUFnQixLQUFwQixFQUEyQjtBQUN6QlQsa0JBQVFDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBUyxpQkFBT0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsR0FBeEI7QUFDRDtBQUNGLE9BWkgsRUFhR0MsSUFiSCxDQWFRLFVBQVNDLFFBQVQsRUFBbUI7QUFDdkJkLGdCQUFRQyxHQUFSLENBQVksTUFBWixFQUFvQmEsUUFBcEI7QUFDQUosZUFBT0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsUUFBeEI7QUFDRCxPQWhCSDtBQWlCRDs7OytCQUNVO0FBQ1RGLGFBQU9DLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLFNBQXhCO0FBRUQ7Ozs2QkFDUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSw4QkFBZjtBQUFBO0FBRUU7QUFDRSxvQkFBVSxrQkFBQ0csQ0FBRDtBQUFBLG1CQUFPLE9BQUtDLHVCQUFMLENBQTZCRCxFQUFFRSxNQUFGLENBQVNDLEtBQXRDLENBQVA7QUFBQSxXQURaO0FBRUUscUJBQVUsdUJBRlo7QUFHRSxnQkFBSyxNQUhQO0FBSUUsdUJBQVk7QUFKZCxVQUZGO0FBUUU7QUFDRSxvQkFBVSxrQkFBQ0gsQ0FBRDtBQUFBLG1CQUFPLE9BQUtJLHVCQUFMLENBQTZCSixFQUFFRSxNQUFGLENBQVNDLEtBQXRDLENBQVA7QUFBQSxXQURaO0FBRUUsZ0JBQUssVUFGUDtBQUdFLHFCQUFVLHVCQUhaO0FBSUUsdUJBQVk7QUFKZCxVQVJGO0FBY0U7QUFBQTtBQUFBLFlBQVEsV0FBVSxpQkFBbEI7QUFDRSxxQkFBUztBQUFBLHFCQUFNLE9BQUtFLGFBQUwsRUFBTjtBQUFBO0FBRFg7QUFBQTtBQUFBLFNBZEY7QUFpQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUcsT0FBTyxFQUFDQyxPQUFPLE1BQVIsRUFBZ0JDLE9BQU8sTUFBdkIsRUFBVixFQUEwQyxTQUFTO0FBQUEsdUJBQU0sT0FBS0MsUUFBTCxFQUFOO0FBQUEsZUFBbkQ7QUFBQTtBQUNvQiwyQ0FEcEI7QUFBQTtBQUFBO0FBREY7QUFqQkYsT0FERjtBQXlCRDs7OztFQXRFaUJDLE1BQU1DLFM7O0FBMkUxQkMsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEtBQUQsT0FERixFQUNhQyxTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBRGIiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gRnJvbnRlbmQgY29tcG9uZW50IGZvciBsb2dpblxyXG4gVE9ETzogaW1wbGVtZW50IHBhc3N3b3JkIGVuY3J5cHRpb25cclxuICovXHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAndXNlcm5hbWUnOiAnJyxcclxuICAgICAgJ3Bhc3N3b3JkJzogJydcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1c2VybmFtZU9uQ2hhbmdlSGFuZGxlcih1c2VybmFtZSkge1xyXG4gICAgLy90aGlzLnNldFN0YXRlKHsndXNlcm5hbWUnOiBldmVudC50cmlnZ2VyLlxyXG4gICAgLy9jb25zb2xlLmxvZygnY2hhbmdlIGhhbmRsZXIgdXNlcm5hbWUnLCB1c2VybmFtZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWUgfSk7XHJcbiAgfVxyXG4gIHBhc3N3b3JkT25DaGFuZ2VIYW5kbGVyKG5ld1ZhbCkge1xyXG4gICAgLy90aGlzLnNldFN0YXRlKHsndXNlcm5hbWUnOiBldmVudC50cmlnZ2VyLlxyXG4gICAgLy9jb25zb2xlLmxvZygnY2hhbmdlIGhhbmRsZXIgcGFzc3dvcmQnLCBuZXdWYWwpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7J3Bhc3N3b3JkJzogbmV3VmFsfSk7XHJcbiAgfVxyXG4gIHN1Ym1pdFJlcXVlc3QoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYWJvdXQgdG8gc3VibWl0IGxvZ2luIHJlcXVlc3QgdmlhIGpxdWVyeSBhamF4Jyk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICcvbG9naW4nLFxyXG4gICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgIGRhdGE6IHRoaXMuc3RhdGUsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICB9KVxyXG4gICAgICAuZG9uZShmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgJywgZGF0YSk7XHJcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAnMjAwJykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuZmFpbChmdW5jdGlvbihmYWlsSW5mbykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGQUlMJywgZmFpbEluZm8pO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbG9naW4nKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIGdvU2lnbnVwKCkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9zaWdudXAnKTtcclxuXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdCBjb2wtbWQtMlwiPlxyXG4gICAgICAgIExvZ2luXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXNlcm5hbWVPbkNoYW5nZUhhbmRsZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC1tZC0yXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMucGFzc3dvcmRPbkNoYW5nZUhhbmRsZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtbWQtMlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGNvbC1tZC02XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3VibWl0UmVxdWVzdCgpfVxyXG4gICAgICAgID5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YSBzdHlsZT17e2Zsb2F0OiAnbGVmdCcsIGNsZWFyOiAnbGVmdCd9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLmdvU2lnbnVwKCl9PlxyXG4gICAgICAgICAgICBOZXcgdG8gZmluZGFidWRkeT88YnIgLz5DcmVhdGUgYW4gYWNjb3VudFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8TG9naW4gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpXHJcbik7XHJcbiJdfQ==