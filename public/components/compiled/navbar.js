"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  //console.log(props.users)
  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

    _this.newFriend;
    //this.friendList
    //this.notificationBell

    _this.state = {
      friends: [],
      messages: [],
      counter: 0
    };
    return _this;
  }

  _createClass(Nav, [{
    key: "friendList",
    value: function friendList() {
      return this.state.friends.map(function (friend, i) {
        return React.createElement(
          "option",
          { value: friend, key: i, onClick: function onClick() {
              return console.log(friend);
            } },
          friend
        );
      });
    }
  }, {
    key: "notificationBell",
    value: function notificationBell() {
      if (this.state.counter === 0) {
        return React.createElement(
          "a",
          { href: "#", "data-toggle": "dropdown", className: "dropdown-toggle" },
          React.createElement(
            "span",
            { className: "glyphicon glyphicon-bell" },
            this.state.counter
          )
        );
      } else {
        return React.createElement(
          "a",
          { href: "#", "data-toggle": "dropdown", className: "dropdown-toggle" },
          React.createElement(
            "span",
            { className: "glyphicon glyphicon-bell unread" },
            this.state.counter
          )
        );
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.counter = 0;
      if (this.state.messages[0]) {
        console.log(this.state.messages[0].messages);
        for (var i = 0; i < this.state.messages[0].messages.length; i++) {
          if (this.state.messages[0].messages[i].read === false) {
            this.counter++;
            //console.log(this.counter)
          }
        }
      }
      this.setState({ friends: nextProps.friends, messages: nextProps.messages, counter: this.counter });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      //this.counter = 0
      var users = this.props.users;
      var users = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: users
      });

      $('.typeahead').typeahead({
        hint: false,
        highlight: true,
        minLength: 1
      }, {
        name: 'users',
        source: users
      });

      /*if (this.state.messages[0]) {
        console.log(this.state.messages[0].messages)
        for (var i = 0; i < this.state.messages[0].messages.length; i++) {
          if (this.state.messages[0].messages[i].read === false) {
            this.counter++
            console.log(this.counter)
          }
        }
      }
      if (this.counter === 0) {
        this.notificationBell = <a href="#" data-toggle="dropdown" className="dropdown-toggle"><span className="glyphicon glyphicon-bell">{this.counter}</span></a>
      } else {
        this.notificationBell = <a href="#" data-toggle="dropdown" className="dropdown-toggle"><span className="glyphicon glyphicon-bell unread">{this.counter}</span></a>
      }*/
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "nav",
        { className: "navbar navbar-inverse navbar-fixed-top" },
        React.createElement(
          "div",
          { className: "container-fluid" },
          React.createElement(
            "div",
            { className: "navbar-header" },
            React.createElement(
              "a",
              { href: "#", name: "home", onClick: function onClick(e) {
                  _this2.props.handleSelect(e, true);
                } },
              React.createElement("img", { name: "home", className: "nav-logo", src: "../img/findabuddy_icon2_orange.png" })
            )
          ),
          React.createElement(
            "ul",
            { className: "nav navbar-nav navbar-left" },
            React.createElement(
              "li",
              { className: "nav-name" },
              React.createElement(
                "a",
                { href: "#", name: "selectProfile", onClick: function onClick(e) {
                    _this2.props.handleSelect(e, true);
                  } },
                "How ya doin, ",
                this.props.user,
                "?!"
              )
            )
          ),
          React.createElement(
            "ul",
            { className: "nav navbar-nav navbar-right" },
            React.createElement(
              "li",
              { className: "nav-link" },
              React.createElement(
                "a",
                { href: "#", name: "selectSearch", onClick: function onClick(e) {
                    _this2.props.handleSelect(e, true);
                  } },
                React.createElement("span", { className: "glyphicon glyphicon-search" }),
                "Search"
              )
            ),
            React.createElement(
              "li",
              { className: "nav-link" },
              React.createElement(
                "a",
                { href: "#", name: "selectRequest", onClick: function onClick(e) {
                    _this2.props.handleSelect(e, true);
                  } },
                React.createElement("span", { className: "glyphicon glyphicon-file" }),
                "New Request"
              )
            ),
            React.createElement(
              "li",
              { className: "nav-link" },
              React.createElement(
                "a",
                { href: "#", name: "selectProfile", onClick: function onClick(e) {
                    _this2.props.handleSelect(e, true);
                  } },
                React.createElement("span", { className: "glyphicon glyphicon-user" }),
                "Profile"
              )
            ),
            React.createElement(
              "li",
              { className: "nav-link" },
              React.createElement(
                "a",
                { href: "#", name: "selectMessages", onClick: function onClick(e) {
                    _this2.props.handleSelect(e, true);
                  } },
                React.createElement("span", { className: "glyphicon glyphicon-envelope" }),
                "Messages"
              )
            ),
            React.createElement(
              "li",
              { className: "dropdown" },
              React.createElement(
                "a",
                { href: "#", "data-toggle": "dropdown", className: "dropdown-toggle" },
                "Buddies ",
                React.createElement("b", { className: "caret" })
              ),
              React.createElement(
                "ul",
                { className: "dropdown-menu" },
                this.friendList(),
                React.createElement("li", { className: "divider" }),
                React.createElement(
                  "li",
                  null,
                  React.createElement(
                    "form",
                    { method: "post", onSubmit: function onSubmit(e) {
                        e.preventDefault();
                        console.log(e);
                        _this2.props.addFriend(_this2.newFriend.value);
                        $('.typeahead').typeahead('val', '');
                      } },
                    React.createElement("input", { type: "text", className: "typeahead tt-query form-control", autoComplete: "off", spellCheck: "false", ref: function ref(node) {
                        _this2.newFriend = node;
                      } })
                  )
                )
              )
            ),
            React.createElement(
              "li",
              { className: "dropdown" },
              this.notificationBell(),
              React.createElement(
                "ul",
                { className: "dropdown-menu" },
                React.createElement(Notifications, {
                  handleNotificationSelect: this.props.handleNotificationSelect,
                  handleSelect: this.props.handleSelect,
                  user: this.props.userName,
                  messages: this.state.messages
                })
              )
            ),
            React.createElement(
              "li",
              { className: "nav-link" },
              React.createElement(
                "a",
                { href: "/logout" },
                React.createElement("span", { className: "glyphicon glyphicon-log-out" }),
                "Logout"
              )
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(React.Component);

window.Nav = Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25hdmJhci5qc3giXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJuZXdGcmllbmQiLCJzdGF0ZSIsImZyaWVuZHMiLCJtZXNzYWdlcyIsImNvdW50ZXIiLCJtYXAiLCJmcmllbmQiLCJpIiwiY29uc29sZSIsImxvZyIsIm5leHRQcm9wcyIsImxlbmd0aCIsInJlYWQiLCJzZXRTdGF0ZSIsInVzZXJzIiwiQmxvb2Rob3VuZCIsImRhdHVtVG9rZW5pemVyIiwidG9rZW5pemVycyIsIndoaXRlc3BhY2UiLCJxdWVyeVRva2VuaXplciIsImxvY2FsIiwiJCIsInR5cGVhaGVhZCIsImhpbnQiLCJoaWdobGlnaHQiLCJtaW5MZW5ndGgiLCJuYW1lIiwic291cmNlIiwiZSIsImhhbmRsZVNlbGVjdCIsInVzZXIiLCJmcmllbmRMaXN0IiwicHJldmVudERlZmF1bHQiLCJhZGRGcmllbmQiLCJ2YWx1ZSIsIm5vZGUiLCJub3RpZmljYXRpb25CZWxsIiwiaGFuZGxlTm90aWZpY2F0aW9uU2VsZWN0IiwidXNlck5hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSjtBQUNBLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsU0FBTDtBQUNBO0FBQ0E7O0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVMsRUFERTtBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLGVBQVM7QUFIRSxLQUFiO0FBTmlCO0FBV2xCOzs7O2lDQUVZO0FBQ1gsYUFDRSxLQUFLSCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJHLEdBQW5CLENBQXVCLFVBQUNDLE1BQUQsRUFBU0MsQ0FBVCxFQUFlO0FBQ3BDLGVBQU87QUFBQTtBQUFBLFlBQVEsT0FBT0QsTUFBZixFQUF1QixLQUFLQyxDQUE1QixFQUErQixTQUFTO0FBQUEscUJBQU1DLFFBQVFDLEdBQVIsQ0FBWUgsTUFBWixDQUFO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QztBQUVFLGdDQUFjLEtBQUt0QyxLQUFMLENBQVc4QixZQUYzQjtBQUdFLHdCQUFNLEtBQUs5QixLQUFMLENBQVd1QyxRQUhuQjtBQUlFLDRCQUFVLEtBQUtyQyxLQUFMLENBQVdFO0FBSnZCO0FBREY7QUFGSixhQXhCRjtBQW1DRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxVQUFkO0FBQXlCO0FBQUE7QUFBQSxrQkFBRyxNQUFLLFNBQVI7QUFBbUIsOENBQU0sV0FBVSw2QkFBaEIsR0FBbkI7QUFBQTtBQUFBO0FBQXpCO0FBbkNGO0FBUEY7QUFERixPQURBO0FBa0REOzs7O0VBcEllb0MsTUFBTUMsUzs7QUEySXhCQyxPQUFPM0MsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6Im5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgLy9jb25zb2xlLmxvZyhwcm9wcy51c2VycylcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLm5ld0ZyaWVuZFxyXG4gICAgLy90aGlzLmZyaWVuZExpc3RcclxuICAgIC8vdGhpcy5ub3RpZmljYXRpb25CZWxsXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZnJpZW5kczogW10sXHJcbiAgICAgIG1lc3NhZ2VzOiBbXSxcclxuICAgICAgY291bnRlcjogMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnJpZW5kTGlzdCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuc3RhdGUuZnJpZW5kcy5tYXAoKGZyaWVuZCwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtmcmllbmR9IGtleT17aX0gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coZnJpZW5kKX0+e2ZyaWVuZH08L29wdGlvbj5cclxuICAgICAgfSlcclxuICAgIClcclxuICB9XHJcblxyXG4gIG5vdGlmaWNhdGlvbkJlbGwoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jb3VudGVyID09PSAwKSB7XHJcbiAgICAgIHJldHVybiAoPGEgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCI+PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1iZWxsXCI+e3RoaXMuc3RhdGUuY291bnRlcn08L3NwYW4+PC9hPilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoPGEgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCI+PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1iZWxsIHVucmVhZFwiPnt0aGlzLnN0YXRlLmNvdW50ZXJ9PC9zcGFuPjwvYT4pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgdGhpcy5jb3VudGVyID0gMFxyXG4gICAgaWYgKHRoaXMuc3RhdGUubWVzc2FnZXNbMF0pIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5tZXNzYWdlc1swXS5tZXNzYWdlcylcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLm1lc3NhZ2VzWzBdLm1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVzc2FnZXNbMF0ubWVzc2FnZXNbaV0ucmVhZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHRoaXMuY291bnRlcisrXHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuY291bnRlcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe2ZyaWVuZHM6IG5leHRQcm9wcy5mcmllbmRzLCBtZXNzYWdlczogbmV4dFByb3BzLm1lc3NhZ2VzLCBjb3VudGVyOiB0aGlzLmNvdW50ZXJ9KVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgICAvL3RoaXMuY291bnRlciA9IDBcclxuICAgICAgdmFyIHVzZXJzID0gdGhpcy5wcm9wcy51c2VycztcclxuICAgICAgIHZhciB1c2VycyA9IG5ldyBCbG9vZGhvdW5kKHtcclxuICAgICAgICAgICBkYXR1bVRva2VuaXplcjogQmxvb2Rob3VuZC50b2tlbml6ZXJzLndoaXRlc3BhY2UsXHJcbiAgICAgICAgICAgcXVlcnlUb2tlbml6ZXI6IEJsb29kaG91bmQudG9rZW5pemVycy53aGl0ZXNwYWNlLFxyXG4gICAgICAgICAgIGxvY2FsOiB1c2Vyc1xyXG4gICAgICAgfSk7XHJcblxyXG4gICAgICAgJCgnLnR5cGVhaGVhZCcpLnR5cGVhaGVhZCh7XHJcbiAgICAgICAgICAgaGludDogZmFsc2UsXHJcbiAgICAgICAgICAgaGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgIG1pbkxlbmd0aDogMVxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgICBuYW1lOiAndXNlcnMnLFxyXG4gICAgICAgICAgIHNvdXJjZTogdXNlcnNcclxuICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAvKmlmICh0aGlzLnN0YXRlLm1lc3NhZ2VzWzBdKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubWVzc2FnZXNbMF0ubWVzc2FnZXMpXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5tZXNzYWdlc1swXS5tZXNzYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1lc3NhZ2VzWzBdLm1lc3NhZ2VzW2ldLnJlYWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICB0aGlzLmNvdW50ZXIrK1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb3VudGVyKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY291bnRlciA9PT0gMCkge1xyXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbkJlbGwgPSA8YSBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIj48c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWJlbGxcIj57dGhpcy5jb3VudGVyfTwvc3Bhbj48L2E+XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbkJlbGwgPSA8YSBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIj48c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWJlbGwgdW5yZWFkXCI+e3RoaXMuY291bnRlcn08L3NwYW4+PC9hPlxyXG4gICAgfSovXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBuYW1lPVwiaG9tZVwiIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuaGFuZGxlU2VsZWN0KGUsIHRydWUpOyB9fT48aW1nIG5hbWU9XCJob21lXCIgY2xhc3NOYW1lPVwibmF2LWxvZ29cIiBzcmM9XCIuLi9pbWcvZmluZGFidWRkeV9pY29uMl9vcmFuZ2UucG5nXCIvPjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLWxlZnRcIj5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtbmFtZVwiID48YSBocmVmPVwiI1wiIG5hbWU9XCJzZWxlY3RQcm9maWxlXCIgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5oYW5kbGVTZWxlY3QoZSwgdHJ1ZSk7IH19PkhvdyB5YSBkb2luLCB7dGhpcy5wcm9wcy51c2VyfT8hPC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj48YSBocmVmPVwiI1wiIG5hbWU9XCJzZWxlY3RTZWFyY2hcIiBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLnByb3BzLmhhbmRsZVNlbGVjdChlLCB0cnVlKTsgfX0gPjxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPlNlYXJjaDwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+PGEgaHJlZj1cIiNcIiBuYW1lPVwic2VsZWN0UmVxdWVzdFwiIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuaGFuZGxlU2VsZWN0KGUsIHRydWUpOyB9fSA+PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1maWxlXCI+PC9zcGFuPk5ldyBSZXF1ZXN0PC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj48YSBocmVmPVwiI1wiIG5hbWU9XCJzZWxlY3RQcm9maWxlXCIgb25DbGljaz17KGUpID0+IHsgdGhpcy5wcm9wcy5oYW5kbGVTZWxlY3QoZSwgdHJ1ZSk7IH19PjxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tdXNlclwiPjwvc3Bhbj5Qcm9maWxlPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj48YSBocmVmPVwiI1wiIG5hbWU9XCJzZWxlY3RNZXNzYWdlc1wiIG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMucHJvcHMuaGFuZGxlU2VsZWN0KGUsIHRydWUpOyB9fT48c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlXCI+PC9zcGFuPk1lc3NhZ2VzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiPkJ1ZGRpZXMgPGIgY2xhc3NOYW1lPVwiY2FyZXRcIj48L2I+PC9hPlxyXG4gICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICB7dGhpcy5mcmllbmRMaXN0KCl9XHJcbiAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkRnJpZW5kKHRoaXMubmV3RnJpZW5kLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICQoJy50eXBlYWhlYWQnKS50eXBlYWhlYWQoJ3ZhbCcsICcnKTtcclxuICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInR5cGVhaGVhZCB0dC1xdWVyeSBmb3JtLWNvbnRyb2xcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBzcGVsbENoZWNrPVwiZmFsc2VcIiAgcmVmPXtub2RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0ZyaWVuZCA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgIHt0aGlzLm5vdGlmaWNhdGlvbkJlbGwoKX1cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlTm90aWZpY2F0aW9uU2VsZWN0PXt0aGlzLnByb3BzLmhhbmRsZU5vdGlmaWNhdGlvblNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgaGFuZGxlU2VsZWN0PXt0aGlzLnByb3BzLmhhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgdXNlcj17dGhpcy5wcm9wcy51c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+PGEgaHJlZj1cIi9sb2dvdXRcIiA+PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1sb2ctb3V0XCI+PC9zcGFuPkxvZ291dDwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcblxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG53aW5kb3cuTmF2ID0gTmF2O1xyXG4iXX0=