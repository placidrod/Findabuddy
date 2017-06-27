'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
          value: 'john doe1',
          className: 'form-control col-md-2',
          type: 'text'
        }),
        React.createElement('input', _defineProperty({
          onChange: function onChange(e) {
            return _this2.passwordOnChangeHandler(e.target.value);
          },
          type: 'password',
          value: '123',
          className: 'form-control col-md-2'
        }, 'type', 'text')),
        React.createElement(
          'button',
          { className: 'button col-md-6',
            onClick: function onClick() {
              return _this2.submitRequest();
            } },
          'Submit'
        )
      );
    }
  }]);

  return Login;
}(React.Component);

ReactDOM.render(React.createElement(Login, null), document.getElementById('login'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvZ2luLmpzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInNldFN0YXRlIiwibmV3VmFsIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsImRhdGFUeXBlIiwiZG9uZSIsImNvbnNvbGUiLCJsb2ciLCJmYWlsIiwiZmFpbEluZm8iLCJzdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJlIiwidXNlcm5hbWVPbkNoYW5nZUhhbmRsZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhc3N3b3JkT25DaGFuZ2VIYW5kbGVyIiwic3VibWl0UmVxdWVzdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBRUosaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1gsa0JBQVksV0FERDtBQUVYLGtCQUFZO0FBRkQsS0FBYjtBQUZpQjtBQU1sQjs7Ozs0Q0FFdUJDLFEsRUFBVTtBQUNoQztBQUNBO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEVBQUVELGtCQUFGLEVBQWQ7QUFDRDs7OzRDQUN1QkUsTSxFQUFRO0FBQzlCO0FBQ0E7QUFDQSxXQUFLRCxRQUFMLENBQWMsRUFBQyxZQUFZQyxNQUFiLEVBQWQ7QUFDRDs7O29DQUNlO0FBQ2RDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLDZCQURBO0FBRUxDLGNBQU0sTUFGRDtBQUdMQyxjQUFNLEtBQUtSLEtBSE47QUFJTFMsa0JBQVU7QUFKTCxPQUFQLEVBTUdDLElBTkgsQ0FNUSxVQUFTRixJQUFULEVBQWU7QUFDbkJHLGdCQUFRQyxHQUFSLENBQVksT0FBWixFQUFvQkosSUFBcEI7QUFDRCxPQVJILEVBU0dLLElBVEgsQ0FTUSxVQUFTQyxRQUFULEVBQW1CO0FBQ3ZCSCxnQkFBUUMsR0FBUixDQUFZLE1BQVosRUFBbUJFLFFBQW5CO0FBQ0EsWUFBSUEsU0FBU0MsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQkMsaUJBQU9DLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLHVCQUF4QjtBQUNEO0FBQ0YsT0FkSDtBQWVEOzs7NkJBQ1E7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsOEJBQWY7QUFBQTtBQUVFO0FBQ0Usb0JBQVUsa0JBQUNDLENBQUQ7QUFBQSxtQkFBTyxPQUFLQyx1QkFBTCxDQUE2QkQsRUFBRUUsTUFBRixDQUFTQyxLQUF0QyxDQUFQO0FBQUEsV0FEWjtBQUVFLGlCQUFNLFdBRlI7QUFHRSxxQkFBVSx1QkFIWjtBQUlFLGdCQUFLO0FBSlAsVUFGRjtBQVFFO0FBQ0Usb0JBQVUsa0JBQUNILENBQUQ7QUFBQSxtQkFBTyxPQUFLSSx1QkFBTCxDQUE2QkosRUFBRUUsTUFBRixDQUFTQyxLQUF0QyxDQUFQO0FBQUEsV0FEWjtBQUVFLGdCQUFLLFVBRlA7QUFHRSxpQkFBTSxLQUhSO0FBSUUscUJBQVU7QUFKWixtQkFLTyxNQUxQLEVBUkY7QUFlRTtBQUFBO0FBQUEsWUFBUSxXQUFVLGlCQUFsQjtBQUNFLHFCQUFTO0FBQUEscUJBQU0sT0FBS0UsYUFBTCxFQUFOO0FBQUEsYUFEWDtBQUFBO0FBQUE7QUFmRixPQURGO0FBb0JEOzs7O0VBMURpQkMsTUFBTUMsUzs7QUErRDFCQyxTQUFTQyxNQUFULENBQ0Usb0JBQUMsS0FBRCxPQURGLEVBQ2FDLFNBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FEYiIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgJ3VzZXJuYW1lJzogJ2pvaG4gZG9lMScsXG4gICAgICAncGFzc3dvcmQnOiAnMTIzJ1xuICAgIH07XG4gIH1cblxuICB1c2VybmFtZU9uQ2hhbmdlSGFuZGxlcih1c2VybmFtZSkge1xuICAgIC8vdGhpcy5zZXRTdGF0ZSh7J3VzZXJuYW1lJzogZXZlbnQudHJpZ2dlci5cbiAgICAvL2NvbnNvbGUubG9nKCdjaGFuZ2UgaGFuZGxlciB1c2VybmFtZScsIHVzZXJuYW1lKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWUgfSk7XG4gIH1cbiAgcGFzc3dvcmRPbkNoYW5nZUhhbmRsZXIobmV3VmFsKSB7XG4gICAgLy90aGlzLnNldFN0YXRlKHsndXNlcm5hbWUnOiBldmVudC50cmlnZ2VyLlxuICAgIC8vY29uc29sZS5sb2coJ2NoYW5nZSBoYW5kbGVyIHBhc3N3b3JkJywgbmV3VmFsKTtcbiAgICB0aGlzLnNldFN0YXRlKHsncGFzc3dvcmQnOiBuZXdWYWx9KTtcbiAgfVxuICBzdWJtaXRSZXF1ZXN0KCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4nLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YTogdGhpcy5zdGF0ZSxcbiAgICAgIGRhdGFUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSlcbiAgICAgIC5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgJyxkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuZmFpbChmdW5jdGlvbihmYWlsSW5mbykge1xuICAgICAgICBjb25zb2xlLmxvZygnRkFJTCcsZmFpbEluZm8pO1xuICAgICAgICBpZiAoZmFpbEluZm8uc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0IGNvbC1tZC0yXCI+XG4gICAgICAgIExvZ2luXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy51c2VybmFtZU9uQ2hhbmdlSGFuZGxlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdmFsdWU9XCJqb2huIGRvZTFcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtbWQtMlwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMucGFzc3dvcmRPbkNoYW5nZUhhbmRsZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdmFsdWU9XCIxMjNcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBjb2wtbWQtMlwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBjb2wtbWQtNlwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXRSZXF1ZXN0KCl9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cblxuUmVhY3RET00ucmVuZGVyKFxuICA8TG9naW4gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpXG4pOyJdfQ==