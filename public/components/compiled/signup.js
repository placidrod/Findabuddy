'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup(props) {
    _classCallCheck(this, Signup);

    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));

    _this.state = {
      'username': 'odb',
      'password': '123'
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
    key: 'submitSignup',
    value: function submitSignup() {
      $.ajax({
        url: 'http://localhost:3000/signup',
        type: 'POST',
        data: this.state,
        dataType: 'application/json'
      }).done(function (data) {
        console.log('signup success ', data);
        if (data.status === 200) {
          window.location.replace('http://localhost:3000');
        }
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
        'Signup',
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
              return _this2.submitSignup();
            } },
          'Signup'
        )
      );
    }
  }]);

  return Signup;
}(React.Component);

ReactDOM.render(React.createElement(Signup, null), document.getElementById('signup'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NpZ251cC5qc3giXSwibmFtZXMiOlsiU2lnbnVwIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwic2V0U3RhdGUiLCJuZXdWYWwiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwiZGF0YVR5cGUiLCJkb25lIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImZhaWwiLCJmYWlsSW5mbyIsImUiLCJ1c2VybmFtZU9uQ2hhbmdlSGFuZGxlciIsInRhcmdldCIsInZhbHVlIiwicGFzc3dvcmRPbkNoYW5nZUhhbmRsZXIiLCJzdWJtaXRTaWdudXAiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFFSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWCxrQkFBWSxLQUREO0FBRVgsa0JBQVk7QUFGRCxLQUFiO0FBRmlCO0FBTWxCOzs7OzRDQUV1QkMsUSxFQUFVO0FBQ2hDO0FBQ0E7QUFDQSxXQUFLQyxRQUFMLENBQWMsRUFBRUQsa0JBQUYsRUFBZDtBQUNEOzs7NENBQ3VCRSxNLEVBQVE7QUFDOUI7QUFDQTtBQUNBLFdBQUtELFFBQUwsQ0FBYyxFQUFDLFlBQVlDLE1BQWIsRUFBZDtBQUNEOzs7bUNBQ2M7QUFDYkMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssOEJBREE7QUFFTEMsY0FBTSxNQUZEO0FBR0xDLGNBQU0sS0FBS1IsS0FITjtBQUlMUyxrQkFBVTtBQUpMLE9BQVAsRUFNR0MsSUFOSCxDQU1RLFVBQVNGLElBQVQsRUFBZTtBQUNuQkcsZ0JBQVFDLEdBQVIsQ0FBWSxpQkFBWixFQUE4QkosSUFBOUI7QUFDQSxZQUFJQSxLQUFLSyxNQUFMLEtBQWdCLEdBQXBCLEVBQXlCO0FBQ3ZCQyxpQkFBT0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsdUJBQXhCO0FBQ0Q7QUFDRixPQVhILEVBWUdDLElBWkgsQ0FZUSxVQUFTQyxRQUFULEVBQW1CO0FBQ3ZCUCxnQkFBUUMsR0FBUixDQUFZLE1BQVosRUFBbUJNLFFBQW5CO0FBQ0EsWUFBSUEsU0FBU0wsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQkMsaUJBQU9DLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLHVCQUF4QjtBQUNEO0FBQ0YsT0FqQkg7QUFrQkQ7Ozs2QkFDUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSw4QkFBZjtBQUFBO0FBRUU7QUFDRSxvQkFBVSxrQkFBQ0csQ0FBRDtBQUFBLG1CQUFPLE9BQUtDLHVCQUFMLENBQTZCRCxFQUFFRSxNQUFGLENBQVNDLEtBQXRDLENBQVA7QUFBQSxXQURaO0FBRUUscUJBQVUsdUJBRlo7QUFHRSxnQkFBSztBQUhQLFVBRkY7QUFPRTtBQUNFLG9CQUFVLGtCQUFDSCxDQUFEO0FBQUEsbUJBQU8sT0FBS0ksdUJBQUwsQ0FBNkJKLEVBQUVFLE1BQUYsQ0FBU0MsS0FBdEMsQ0FBUDtBQUFBLFdBRFo7QUFFRSxnQkFBSyxVQUZQO0FBR0UscUJBQVU7QUFIWixVQVBGO0FBWUU7QUFBQTtBQUFBLFlBQVEsV0FBVSxpQkFBbEI7QUFDUSxxQkFBUztBQUFBLHFCQUFNLE9BQUtFLFlBQUwsRUFBTjtBQUFBLGFBRGpCO0FBQUE7QUFBQTtBQVpGLE9BREY7QUFpQkQ7Ozs7RUExRGtCQyxNQUFNQyxTOztBQStEM0JDLFNBQVNDLE1BQVQsQ0FDRSxvQkFBQyxNQUFELE9BREYsRUFDY0MsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQURkIiwiZmlsZSI6InNpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNpZ251cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICd1c2VybmFtZSc6ICdvZGInLFxuICAgICAgJ3Bhc3N3b3JkJzogJzEyMydcbiAgICB9O1xuICB9XG5cbiAgdXNlcm5hbWVPbkNoYW5nZUhhbmRsZXIodXNlcm5hbWUpIHtcbiAgICAvL3RoaXMuc2V0U3RhdGUoeyd1c2VybmFtZSc6IGV2ZW50LnRyaWdnZXIuXG4gICAgLy9jb25zb2xlLmxvZygnY2hhbmdlIGhhbmRsZXIgdXNlcm5hbWUnLCB1c2VybmFtZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lIH0pO1xuICB9XG4gIHBhc3N3b3JkT25DaGFuZ2VIYW5kbGVyKG5ld1ZhbCkge1xuICAgIC8vdGhpcy5zZXRTdGF0ZSh7J3VzZXJuYW1lJzogZXZlbnQudHJpZ2dlci5cbiAgICAvL2NvbnNvbGUubG9nKCdjaGFuZ2UgaGFuZGxlciBwYXNzd29yZCcsIG5ld1ZhbCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7J3Bhc3N3b3JkJzogbmV3VmFsfSk7XG4gIH1cbiAgc3VibWl0U2lnbnVwKCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvc2lnbnVwJyxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHRoaXMuc3RhdGUsXG4gICAgICBkYXRhVHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pXG4gICAgICAuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaWdudXAgc3VjY2VzcyAnLGRhdGEpO1xuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdodHRwOi8vbG9jYWxob3N0OjMwMDAnKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5mYWlsKGZ1bmN0aW9uKGZhaWxJbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGQUlMJyxmYWlsSW5mbyk7XG4gICAgICAgIGlmIChmYWlsSW5mby5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdodHRwOi8vbG9jYWxob3N0OjMwMDAnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHQgY29sLW1kLTJcIj5cbiAgICAgICAgU2lnbnVwXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy51c2VybmFtZU9uQ2hhbmdlSGFuZGxlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGNvbC1tZC0yXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wYXNzd29yZE9uQ2hhbmdlSGFuZGxlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgY29sLW1kLTJcIlxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBjb2wtbWQtNlwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXRTaWdudXAoKX0+U2lnbnVwPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxTaWdudXAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXAnKVxuKTsiXX0=