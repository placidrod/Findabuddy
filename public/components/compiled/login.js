'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      'username': 'john doe1',
      'password': '123'
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
      $.ajax({
        url: 'http://localhost:3000/login',
        type: 'POST',
        data: this.state,
        dataType: 'application/json'
      }).done(function (data) {
        console.log('data ', data);
      }).fail(function (failInfo) {
        console.log('FAIL', failInfo);
        if (failInfo.status === 200) {
          window.location.replace('http://localhost:3000');
        }
      });
    }
  }, {
    key: 'goSignup',
    value: function goSignup() {
      window.location.replace('http://localhost:3000/signup');
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
          type: 'text'
        }),
        React.createElement('input', {
          onChange: function onChange(e) {
            return _this2.passwordOnChangeHandler(e.target.value);
          },
          type: 'password',
          className: 'form-control col-md-2'
        }),
        React.createElement(
          'button',
          { className: 'button col-md-6',
            onClick: function onClick() {
              return _this2.submitRequest();
            } },
          'Login'
        ),
        React.createElement(
          'button',
          { className: 'button col-md-6',
            onClick: function onClick() {
              return _this2.goSignup();
            } },
          'Signup'
        )
      );
    }
  }]);

  return Login;
}(React.Component);

ReactDOM.render(React.createElement(Login, null), document.getElementById('login'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvZ2luLmpzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInNldFN0YXRlIiwibmV3VmFsIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsImRhdGFUeXBlIiwiZG9uZSIsImNvbnNvbGUiLCJsb2ciLCJmYWlsIiwiZmFpbEluZm8iLCJzdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJlIiwidXNlcm5hbWVPbkNoYW5nZUhhbmRsZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhc3N3b3JkT25DaGFuZ2VIYW5kbGVyIiwic3VibWl0UmVxdWVzdCIsImdvU2lnbnVwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBRUosaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1gsa0JBQVksV0FERDtBQUVYLGtCQUFZO0FBRkQsS0FBYjtBQUZpQjtBQU1sQjs7Ozs0Q0FFdUJDLFEsRUFBVTtBQUNoQztBQUNBO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEVBQUVELGtCQUFGLEVBQWQ7QUFDRDs7OzRDQUN1QkUsTSxFQUFRO0FBQzlCO0FBQ0E7QUFDQSxXQUFLRCxRQUFMLENBQWMsRUFBQyxZQUFZQyxNQUFiLEVBQWQ7QUFDRDs7O29DQUNlO0FBQ2RDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLDZCQURBO0FBRUxDLGNBQU0sTUFGRDtBQUdMQyxjQUFNLEtBQUtSLEtBSE47QUFJTFMsa0JBQVU7QUFKTCxPQUFQLEVBTUdDLElBTkgsQ0FNUSxVQUFTRixJQUFULEVBQWU7QUFDbkJHLGdCQUFRQyxHQUFSLENBQVksT0FBWixFQUFvQkosSUFBcEI7QUFDRCxPQVJILEVBU0dLLElBVEgsQ0FTUSxVQUFTQyxRQUFULEVBQW1CO0FBQ3ZCSCxnQkFBUUMsR0FBUixDQUFZLE1BQVosRUFBbUJFLFFBQW5CO0FBQ0EsWUFBSUEsU0FBU0MsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQkMsaUJBQU9DLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLHVCQUF4QjtBQUNEO0FBQ0YsT0FkSDtBQWVEOzs7K0JBQ1U7QUFDVEYsYUFBT0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsOEJBQXhCO0FBRUQ7Ozs2QkFDUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSw4QkFBZjtBQUFBO0FBRUU7QUFDRSxvQkFBVSxrQkFBQ0MsQ0FBRDtBQUFBLG1CQUFPLE9BQUtDLHVCQUFMLENBQTZCRCxFQUFFRSxNQUFGLENBQVNDLEtBQXRDLENBQVA7QUFBQSxXQURaO0FBRUUscUJBQVUsdUJBRlo7QUFHRSxnQkFBSztBQUhQLFVBRkY7QUFPRTtBQUNFLG9CQUFVLGtCQUFDSCxDQUFEO0FBQUEsbUJBQU8sT0FBS0ksdUJBQUwsQ0FBNkJKLEVBQUVFLE1BQUYsQ0FBU0MsS0FBdEMsQ0FBUDtBQUFBLFdBRFo7QUFFRSxnQkFBSyxVQUZQO0FBR0UscUJBQVU7QUFIWixVQVBGO0FBWUU7QUFBQTtBQUFBLFlBQVEsV0FBVSxpQkFBbEI7QUFDRSxxQkFBUztBQUFBLHFCQUFNLE9BQUtFLGFBQUwsRUFBTjtBQUFBLGFBRFg7QUFBQTtBQUFBLFNBWkY7QUFjRTtBQUFBO0FBQUEsWUFBUSxXQUFVLGlCQUFsQjtBQUNRLHFCQUFTO0FBQUEscUJBQU0sT0FBS0MsUUFBTCxFQUFOO0FBQUEsYUFEakI7QUFBQTtBQUFBO0FBZEYsT0FERjtBQW1CRDs7OztFQTdEaUJDLE1BQU1DLFM7O0FBa0UxQkMsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEtBQUQsT0FERixFQUNhQyxTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBRGIiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICd1c2VybmFtZSc6ICdqb2huIGRvZTEnLFxuICAgICAgJ3Bhc3N3b3JkJzogJzEyMydcbiAgICB9O1xuICB9XG5cbiAgdXNlcm5hbWVPbkNoYW5nZUhhbmRsZXIodXNlcm5hbWUpIHtcbiAgICAvL3RoaXMuc2V0U3RhdGUoeyd1c2VybmFtZSc6IGV2ZW50LnRyaWdnZXIuXG4gICAgLy9jb25zb2xlLmxvZygnY2hhbmdlIGhhbmRsZXIgdXNlcm5hbWUnLCB1c2VybmFtZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lIH0pO1xuICB9XG4gIHBhc3N3b3JkT25DaGFuZ2VIYW5kbGVyKG5ld1ZhbCkge1xuICAgIC8vdGhpcy5zZXRTdGF0ZSh7J3VzZXJuYW1lJzogZXZlbnQudHJpZ2dlci5cbiAgICAvL2NvbnNvbGUubG9nKCdjaGFuZ2UgaGFuZGxlciBwYXNzd29yZCcsIG5ld1ZhbCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7J3Bhc3N3b3JkJzogbmV3VmFsfSk7XG4gIH1cbiAgc3VibWl0UmVxdWVzdCgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJyxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHRoaXMuc3RhdGUsXG4gICAgICBkYXRhVHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pXG4gICAgICAuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhICcsZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmZhaWwoZnVuY3Rpb24oZmFpbEluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZBSUwnLGZhaWxJbmZvKTtcbiAgICAgICAgaWYgKGZhaWxJbmZvLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuICBnb1NpZ251cCgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3NpZ251cCcpO1xuXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHQgY29sLW1kLTJcIj5cbiAgICAgICAgTG9naW5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnVzZXJuYW1lT25DaGFuZ2VIYW5kbGVyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLW1kLTJcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnBhc3N3b3JkT25DaGFuZ2VIYW5kbGVyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtbWQtMlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGNvbC1tZC02XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnN1Ym1pdFJlcXVlc3QoKX0+TG9naW48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gY29sLW1kLTZcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuZ29TaWdudXAoKX0+U2lnbnVwPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxMb2dpbiAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luJylcbik7Il19