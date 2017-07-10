'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
  Top level component for application
 */
var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.socket = io();
    _this.state = {
      userName: '',
      render: {
        home: true,
        selectSearch: false,
        selectRequest: false,
        selectProfile: false,
        selectMessages: false,
        renderResults: false,
        renderPost: false,
        chat: false
      },
      selectedNotification: {},
      conversations: [],
      requests: [],
      users: [],
      friends: [],
      prevIdx: -1
    };
    _this.getMessages = _this.getMessages.bind(_this);
    _this.handleNotificationSelect = _this.handleNotificationSelect.bind(_this);
    _this.handleSelect = _this.handleSelect.bind(_this);
    _this.handleMarkerClick = _this.handleMarkerClick.bind(_this);
    _this.handleInfoClose = _this.handleInfoClose.bind(_this);

    _this.socket.on('new-request', function () {
      _this.getRequests();
    });

    return _this;
  }

  //grab logged in user after session is authenticated


  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var self = this;

      $.ajax({
        url: '/user',
        type: 'GET',
        success: function success(user) {
          self.socket.emit('user', user);
          self.setState(function () {
            return { userName: user };
          });
        }
      }) /*eslint-disable indent*/
      .then(function () {
        return _this2.getRequests();
      }).then(function () {
        return _this2.getMessages();
      }).then(function () {
        return _this2.getFriends();
      }).then(function () {
        return _this2.getUsers();
      })
      // .then(() => this.getInterests())
      .fail(function (err) {
        console.log('ERROR', err);
      });
    } /* eslint-enable indent*/

    //helper function

  }, {
    key: 'getMessages',
    value: function getMessages() {
      $.ajax({
        type: 'GET',
        url: '/message',
        success: function (convos) {
          this.setState({
            conversations: convos
          });
        }.bind(this),
        error: function error(err) {
          console.log('Couldn\'t get messages:', err);
        }
      });
    }

    // getInterests() {
    //   if (this.state.userName.length) {
    //     $.ajax({
    //       type: 'GET',
    //       url: '/interests',
    //       success: (res) => {
    //         this.setState({
    //           interests: res.interests
    //         });
    //       },
    //       error: (err) => {
    //         console.log('Couldn\'t get interests:', err);
    //       }
    //     });
    //   }
    // }

  }, {
    key: 'getRequests',
    value: function getRequests() {
      var _this3 = this;

      $.ajax({
        type: 'GET',
        url: '/buddyRequest',
        success: function success(requests) {
          console.log(requests);
          _this3.setState({
            requests: requests
          });
        }
      });
    }
  }, {
    key: 'getUsers',
    value: function getUsers() {
      var _this4 = this;

      if (this.state.userName.length) {
        $.ajax({
          type: 'GET',
          url: '/users',
          success: function success(res) {
            var users = [];
            for (var i = 0; i < res.length; i++) {
              users.push(res[i].username);
            }
            _this4.setState({
              users: users
            });
            console.log(_this4.state);
          },
          error: function error(err) {
            console.log('Couldn\'t get users:', err);
          }
        });
      }
    }
  }, {
    key: 'getFriends',
    value: function getFriends() {
      var _this5 = this;

      if (this.state.userName.length) {
        $.ajax({
          type: 'GET',
          url: '/friends',
          success: function success(res) {
            _this5.setState({
              friends: res.friends
            });
          },
          error: function error(err) {
            console.log('Couldn\'t get friends:', err);
          }
        });
      }
    }
  }, {
    key: 'addFriend',
    value: function addFriend(friend) {
      var _this6 = this;

      //if (this.state.userName.length) {
      $.ajax({
        type: 'POST',
        url: '/friends',
        data: { username: friend },
        success: function success(res) {
          _this6.setState({
            friends: res
          });
        },
        error: function error(err) {
          console.log('Couldn\'t add Friend:', err);
        }
      });
      //}
    }
  }, {
    key: 'handleNotificationSelect',
    value: function handleNotificationSelect(notification) {
      this.setState({
        selectedNotification: notification
      });
    }
  }, {
    key: 'handleMarkerClick',
    value: function handleMarkerClick(idx) {
      console.log('marker click');

      var requests = this.state.requests;
      var prevIdx = this.state.prevIdx;
      if (prevIdx > -1) {
        requests[prevIdx].showInfo = false;
      }

      requests[idx].showInfo = true;

      this.setState({
        requests: requests,
        prevIdx: idx

      });
    }
  }, {
    key: 'handleInfoClose',
    value: function handleInfoClose(idx) {
      console.log('this ===', this);
      var requests = this.state.requests;
      requests[idx].showInfo = false;

      this.setState({
        requests: requests,
        prevIdx: -1
      });
    }
  }, {
    key: 'handleMessagClick',
    value: function handleMessagClick() {}

    //When a link in the navbar is clicked its render state is set to true
    //and all other render states are to false
    //If the event flag is set then the link is being pulled from an on click event

  }, {
    key: 'handleSelect',
    value: function handleSelect(e, eventFlag) {
      var link;
      var errorFlag = false;

      if (eventFlag) {
        if (e.target.name) {
          link = e.target.name;
        } else {
          errorFlag = true;
        }
      } else {
        if (e) {
          link = e;
        } else {
          errorFlag = true;
        }
      }
      //Error handling
      if (errorFlag === true && eventFlag === true) {
        console.error('Received ', e, ' with eventFlag set to true. The on click event that called handleSelect does not have a name property.');
      } else if (errorFlag === true && !eventFlag) {
        console.error('Received', e, 'with eventFlag not set. The invocation of handleSelect did not provide a render link.');
      } else if (this.state.render.hasOwnProperty(link) === false) {
        console.error('Received', e, '; this is not a valid key. Check the render object in App\'s state. The key is either not there or it has been spelled incorrectly.');
        errorFlag = true;
      }
      if (errorFlag === true) {
        console.error('An error has a occurred, the function will return to prevent undefined behavior/cryptic react error message.');
        console.error('React\'s default error message is:\nUncaught Error: DynamicContent.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.');
        return 1;
      }
      this.setState(function (prevState) {
        var newRenderState = Object.assign(prevState.render);

        for (var renderLink in newRenderState) {
          if (renderLink === link) {
            newRenderState[renderLink] = true;
          } else {
            newRenderState[renderLink] = false;
          }
        }
        return {
          render: newRenderState
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'mainApp' },
        React.createElement(Nav, {
          handleSelect: this.handleSelect,
          user: this.state.userName,
          messages: this.state.conversations,
          handleNotificationSelect: this.handleNotificationSelect,
          users: this.state.users,
          friends: this.state.friends,
          addFriend: this.addFriend.bind(this)
        }),
        React.createElement(
          'div',
          { className: 'dynamicContent col-md-9' },
          React.createElement(DynamicContent, {
            handleNotificationSelect: this.handleNotificationSelect,
            render: this.state.render,
            handleSelect: this.handleSelect,
            handleMessagClick: this.handleMessagClick,
            handleMarkerClick: this.handleMarkerClick,
            handleInfoClose: this.handleInfoClose,
            user: this.state.userName,
            selectedNotification: this.state.selectedNotification,
            conversations: this.state.conversations,
            requests: this.state.requests,
            users: this.state.users,
            getUsers: this.getUsers.bind(this),
            friends: this.state.friends,
            addFriend: this.addFriend.bind(this),
            getMessages: this.getMessages,
            socket: this.socket
          })
        ),
        React.createElement('div', { className: 'col-md-3' })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

/*<div className="notificationWindow col-md-3">
          <Notifications
            handleNotificationSelect={this.handleNotificationSelect}
            handleSelect={this.handleSelect}
            user={this.state.userName}
            messages={this.state.messages}
          />
        </div>*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzb2NrZXQiLCJpbyIsInN0YXRlIiwidXNlck5hbWUiLCJyZW5kZXIiLCJob21lIiwic2VsZWN0U2VhcmNoIiwic2VsZWN0UmVxdWVzdCIsInNlbGVjdFByb2ZpbGUiLCJzZWxlY3RNZXNzYWdlcyIsInJlbmRlclJlc3VsdHMiLCJyZW5kZXJQb3N0IiwiY2hhdCIsInNlbGVjdGVkTm90aWZpY2F0aW9uIiwiY29udmVyc2F0aW9ucyIsInJlcXVlc3RzIiwidXNlcnMiLCJmcmllbmRzIiwicHJldklkeCIsImdldE1lc3NhZ2VzIiwiYmluZCIsImhhbmRsZU5vdGlmaWNhdGlvblNlbGVjdCIsImhhbmRsZVNlbGVjdCIsImhhbmRsZU1hcmtlckNsaWNrIiwiaGFuZGxlSW5mb0Nsb3NlIiwib24iLCJnZXRSZXF1ZXN0cyIsInNlbGYiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJzdWNjZXNzIiwidXNlciIsImVtaXQiLCJzZXRTdGF0ZSIsInRoZW4iLCJnZXRGcmllbmRzIiwiZ2V0VXNlcnMiLCJmYWlsIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNvbnZvcyIsImVycm9yIiwibGVuZ3RoIiwicmVzIiwiaSIsInB1c2giLCJ1c2VybmFtZSIsImZyaWVuZCIsImRhdGEiLCJub3RpZmljYXRpb24iLCJpZHgiLCJzaG93SW5mbyIsImUiLCJldmVudEZsYWciLCJsaW5rIiwiZXJyb3JGbGFnIiwidGFyZ2V0IiwibmFtZSIsImhhc093blByb3BlcnR5IiwicHJldlN0YXRlIiwibmV3UmVuZGVyU3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJyZW5kZXJMaW5rIiwiYWRkRnJpZW5kIiwiaGFuZGxlTWVzc2FnQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxNQUFMLEdBQWNDLElBQWQ7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFEQztBQUVYQyxjQUFRO0FBQ05DLGNBQU0sSUFEQTtBQUVOQyxzQkFBYyxLQUZSO0FBR05DLHVCQUFlLEtBSFQ7QUFJTkMsdUJBQWUsS0FKVDtBQUtOQyx3QkFBZ0IsS0FMVjtBQU1OQyx1QkFBZSxLQU5UO0FBT05DLG9CQUFZLEtBUE47QUFRTkMsY0FBTTtBQVJBLE9BRkc7QUFZWEMsNEJBQXNCLEVBWlg7QUFhWEMscUJBQWUsRUFiSjtBQWNYQyxnQkFBVSxFQWRDO0FBZVhDLGFBQU8sRUFmSTtBQWdCWEMsZUFBUyxFQWhCRTtBQWlCWEMsZUFBUyxDQUFDO0FBakJDLEtBQWI7QUFtQkEsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLFVBQUtDLHdCQUFMLEdBQWdDLE1BQUtBLHdCQUFMLENBQThCRCxJQUE5QixPQUFoQztBQUNBLFVBQUtFLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkYsSUFBbEIsT0FBcEI7QUFDQSxVQUFLRyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkgsSUFBdkIsT0FBekI7QUFDQSxVQUFLSSxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJKLElBQXJCLE9BQXZCOztBQUVBLFVBQUtwQixNQUFMLENBQVl5QixFQUFaLENBQWUsYUFBZixFQUE4QixZQUFNO0FBQ2xDLFlBQUtDLFdBQUw7QUFDRCxLQUZEOztBQTdCaUI7QUFrQ2xCOztBQUVEOzs7Ozt3Q0FDb0I7QUFBQTs7QUFDbEIsVUFBSUMsT0FBTyxJQUFYOztBQUVBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxPQURBO0FBRUxDLGNBQU0sS0FGRDtBQUdMQyxpQkFBUyxpQkFBU0MsSUFBVCxFQUFlO0FBQ3RCTixlQUFLM0IsTUFBTCxDQUFZa0MsSUFBWixDQUFpQixNQUFqQixFQUF5QkQsSUFBekI7QUFDQU4sZUFBS1EsUUFBTCxDQUFjO0FBQUEsbUJBQU8sRUFBQ2hDLFVBQVU4QixJQUFYLEVBQVA7QUFBQSxXQUFkO0FBQ0Q7QUFOSSxPQUFQLEVBT0c7QUFQSCxPQVFDRyxJQVJELENBUU07QUFBQSxlQUFNLE9BQUtWLFdBQUwsRUFBTjtBQUFBLE9BUk4sRUFTQ1UsSUFURCxDQVNNO0FBQUEsZUFBTSxPQUFLakIsV0FBTCxFQUFOO0FBQUEsT0FUTixFQVVDaUIsSUFWRCxDQVVNO0FBQUEsZUFBTSxPQUFLQyxVQUFMLEVBQU47QUFBQSxPQVZOLEVBV0NELElBWEQsQ0FXTTtBQUFBLGVBQU0sT0FBS0UsUUFBTCxFQUFOO0FBQUEsT0FYTjtBQVlBO0FBWkEsT0FhQ0MsSUFiRCxDQWFNLFVBQVNDLEdBQVQsRUFBYztBQUNsQkMsZ0JBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixHQUFyQjtBQUNELE9BZkQ7QUFnQkQsSyxDQUFDOztBQUVGOzs7O2tDQUNjO0FBQ1paLFFBQUVDLElBQUYsQ0FBTztBQUNMRSxjQUFNLEtBREQ7QUFFTEQsYUFBSyxVQUZBO0FBR0xFLGlCQUFTLFVBQVNXLE1BQVQsRUFBaUI7QUFDeEIsZUFBS1IsUUFBTCxDQUFjO0FBQ1pyQiwyQkFBZTZCO0FBREgsV0FBZDtBQUdELFNBSlEsQ0FJUHZCLElBSk8sQ0FJRixJQUpFLENBSEo7QUFRTHdCLGVBQU8sZUFBU0osR0FBVCxFQUFjO0FBQ25CQyxrQkFBUUMsR0FBUixDQUFZLHlCQUFaLEVBQXVDRixHQUF2QztBQUNEO0FBVkksT0FBUDtBQVlEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O2tDQUVjO0FBQUE7O0FBQ1paLFFBQUVDLElBQUYsQ0FBTztBQUNMRSxjQUFNLEtBREQ7QUFFTEQsYUFBSyxlQUZBO0FBR0xFLGlCQUFTLGlCQUFDakIsUUFBRCxFQUFjO0FBQ3JCMEIsa0JBQVFDLEdBQVIsQ0FBWTNCLFFBQVo7QUFDQSxpQkFBS29CLFFBQUwsQ0FBYztBQUNacEIsc0JBQVVBO0FBREUsV0FBZDtBQUdEO0FBUkksT0FBUDtBQVVEOzs7K0JBRVU7QUFBQTs7QUFDVCxVQUFJLEtBQUtiLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQjBDLE1BQXhCLEVBQWdDO0FBQzlCakIsVUFBRUMsSUFBRixDQUFPO0FBQ0xFLGdCQUFNLEtBREQ7QUFFTEQsZUFBSyxRQUZBO0FBR0xFLG1CQUFTLGlCQUFDYyxHQUFELEVBQVM7QUFDaEIsZ0JBQUk5QixRQUFRLEVBQVo7QUFDQSxpQkFBSyxJQUFJK0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxJQUFJRCxNQUF4QixFQUFnQ0UsR0FBaEMsRUFBcUM7QUFDbkMvQixvQkFBTWdDLElBQU4sQ0FBV0YsSUFBSUMsQ0FBSixFQUFPRSxRQUFsQjtBQUNEO0FBQ0QsbUJBQUtkLFFBQUwsQ0FBYztBQUNabkIscUJBQU9BO0FBREssYUFBZDtBQUdBeUIsb0JBQVFDLEdBQVIsQ0FBWSxPQUFLeEMsS0FBakI7QUFDRCxXQVpJO0FBYUwwQyxpQkFBTyxlQUFDSixHQUFELEVBQVM7QUFDZEMsb0JBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0YsR0FBcEM7QUFDRDtBQWZJLFNBQVA7QUFpQkQ7QUFDRjs7O2lDQUVZO0FBQUE7O0FBQ1gsVUFBSSxLQUFLdEMsS0FBTCxDQUFXQyxRQUFYLENBQW9CMEMsTUFBeEIsRUFBZ0M7QUFDOUJqQixVQUFFQyxJQUFGLENBQU87QUFDTEUsZ0JBQU0sS0FERDtBQUVMRCxlQUFLLFVBRkE7QUFHTEUsbUJBQVMsaUJBQUNjLEdBQUQsRUFBUztBQUNoQixtQkFBS1gsUUFBTCxDQUFjO0FBQ1psQix1QkFBUzZCLElBQUk3QjtBQURELGFBQWQ7QUFHRCxXQVBJO0FBUUwyQixpQkFBTyxlQUFDSixHQUFELEVBQVM7QUFDZEMsb0JBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ0YsR0FBdEM7QUFDRDtBQVZJLFNBQVA7QUFZRDtBQUNGOzs7OEJBRVNVLE0sRUFBUTtBQUFBOztBQUNoQjtBQUNBdEIsUUFBRUMsSUFBRixDQUFPO0FBQ0xFLGNBQU0sTUFERDtBQUVMRCxhQUFLLFVBRkE7QUFHTHFCLGNBQU0sRUFBQ0YsVUFBVUMsTUFBWCxFQUhEO0FBSUxsQixpQkFBUyxpQkFBQ2MsR0FBRCxFQUFTO0FBQ2hCLGlCQUFLWCxRQUFMLENBQWM7QUFDWmxCLHFCQUFTNkI7QUFERyxXQUFkO0FBR0QsU0FSSTtBQVNMRixlQUFPLGVBQUNKLEdBQUQsRUFBUztBQUNkQyxrQkFBUUMsR0FBUixDQUFZLHVCQUFaLEVBQXFDRixHQUFyQztBQUNEO0FBWEksT0FBUDtBQWFBO0FBQ0Q7Ozs2Q0FFd0JZLFksRUFBYztBQUNyQyxXQUFLakIsUUFBTCxDQUFjO0FBQ1p0Qiw4QkFBc0J1QztBQURWLE9BQWQ7QUFHRDs7O3NDQUVpQkMsRyxFQUFLO0FBQ3JCWixjQUFRQyxHQUFSLENBQVksY0FBWjs7QUFFQSxVQUFJM0IsV0FBVyxLQUFLYixLQUFMLENBQVdhLFFBQTFCO0FBQ0EsVUFBSUcsVUFBVSxLQUFLaEIsS0FBTCxDQUFXZ0IsT0FBekI7QUFDQSxVQUFJQSxVQUFVLENBQUMsQ0FBZixFQUFrQjtBQUNoQkgsaUJBQVNHLE9BQVQsRUFBa0JvQyxRQUFsQixHQUE2QixLQUE3QjtBQUNEOztBQUVEdkMsZUFBU3NDLEdBQVQsRUFBY0MsUUFBZCxHQUF5QixJQUF6Qjs7QUFFQSxXQUFLbkIsUUFBTCxDQUFjO0FBQ1pwQixrQkFBVUEsUUFERTtBQUVaRyxpQkFBU21DOztBQUZHLE9BQWQ7QUFLRDs7O29DQUVlQSxHLEVBQUs7QUFDbkJaLGNBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXVCLElBQXZCO0FBQ0EsVUFBSTNCLFdBQVcsS0FBS2IsS0FBTCxDQUFXYSxRQUExQjtBQUNBQSxlQUFTc0MsR0FBVCxFQUFjQyxRQUFkLEdBQXlCLEtBQXpCOztBQUVBLFdBQUtuQixRQUFMLENBQWM7QUFDWnBCLGtCQUFVQSxRQURFO0FBRVpHLGlCQUFTLENBQUM7QUFGRSxPQUFkO0FBS0Q7Ozt3Q0FFbUIsQ0FFbkI7O0FBRUQ7QUFDQTtBQUNBOzs7O2lDQUNhcUMsQyxFQUFHQyxTLEVBQVc7QUFDekIsVUFBSUMsSUFBSjtBQUNBLFVBQUlDLFlBQVksS0FBaEI7O0FBR0EsVUFBSUYsU0FBSixFQUFlO0FBQ2IsWUFBSUQsRUFBRUksTUFBRixDQUFTQyxJQUFiLEVBQW1CO0FBQ2pCSCxpQkFBT0YsRUFBRUksTUFBRixDQUFTQyxJQUFoQjtBQUNELFNBRkQsTUFFTztBQUNMRixzQkFBWSxJQUFaO0FBQ0Q7QUFDRixPQU5ELE1BTU87QUFDTCxZQUFJSCxDQUFKLEVBQU87QUFDTEUsaUJBQU9GLENBQVA7QUFDRCxTQUZELE1BRU87QUFDTEcsc0JBQVksSUFBWjtBQUNEO0FBQ0Y7QUFDRDtBQUNBLFVBQUtBLGNBQWMsSUFBZixJQUF5QkYsY0FBYyxJQUEzQyxFQUFrRDtBQUNoRGYsZ0JBQVFHLEtBQVIsQ0FBYyxXQUFkLEVBQTJCVyxDQUEzQixFQUE4Qix5R0FBOUI7QUFDRCxPQUZELE1BRU8sSUFBS0csY0FBYyxJQUFmLElBQXlCLENBQUNGLFNBQTlCLEVBQTBDO0FBQy9DZixnQkFBUUcsS0FBUixDQUFjLFVBQWQsRUFBMEJXLENBQTFCLEVBQTZCLHVGQUE3QjtBQUNELE9BRk0sTUFFQSxJQUFJLEtBQUtyRCxLQUFMLENBQVdFLE1BQVgsQ0FBa0J5RCxjQUFsQixDQUFpQ0osSUFBakMsTUFBMkMsS0FBL0MsRUFBc0Q7QUFDM0RoQixnQkFBUUcsS0FBUixDQUFjLFVBQWQsRUFBMEJXLENBQTFCLEVBQTZCLHFJQUE3QjtBQUNBRyxvQkFBWSxJQUFaO0FBQ0Q7QUFDRCxVQUFJQSxjQUFjLElBQWxCLEVBQXdCO0FBQ3RCakIsZ0JBQVFHLEtBQVIsQ0FBYyw4R0FBZDtBQUNBSCxnQkFBUUcsS0FBUixDQUFjLHdNQUFkO0FBQ0EsZUFBTyxDQUFQO0FBQ0Q7QUFDRCxXQUFLVCxRQUFMLENBQWMsVUFBQzJCLFNBQUQsRUFBZTtBQUMzQixZQUFJQyxpQkFBaUJDLE9BQU9DLE1BQVAsQ0FBY0gsVUFBVTFELE1BQXhCLENBQXJCOztBQUVBLGFBQUssSUFBSThELFVBQVQsSUFBdUJILGNBQXZCLEVBQXVDO0FBQ3JDLGNBQUlHLGVBQWVULElBQW5CLEVBQXlCO0FBQ3ZCTSwyQkFBZUcsVUFBZixJQUE2QixJQUE3QjtBQUNELFdBRkQsTUFFTztBQUNMSCwyQkFBZUcsVUFBZixJQUE2QixLQUE3QjtBQUNEO0FBQ0Y7QUFDRCxlQUFPO0FBQ0w5RCxrQkFBUTJEO0FBREgsU0FBUDtBQUdELE9BYkQ7QUFjRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRSw0QkFBQyxHQUFEO0FBQ0Usd0JBQWMsS0FBS3pDLFlBRHJCO0FBRUUsZ0JBQU0sS0FBS3BCLEtBQUwsQ0FBV0MsUUFGbkI7QUFHRSxvQkFBVSxLQUFLRCxLQUFMLENBQVdZLGFBSHZCO0FBSUUsb0NBQTBCLEtBQUtPLHdCQUpqQztBQUtFLGlCQUFPLEtBQUtuQixLQUFMLENBQVdjLEtBTHBCO0FBTUUsbUJBQVMsS0FBS2QsS0FBTCxDQUFXZSxPQU50QjtBQU9FLHFCQUFXLEtBQUtrRCxTQUFMLENBQWUvQyxJQUFmLENBQW9CLElBQXBCO0FBUGIsVUFERjtBQVVFO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFDRSw4QkFBQyxjQUFEO0FBQ0Usc0NBQTBCLEtBQUtDLHdCQURqQztBQUVFLG9CQUFRLEtBQUtuQixLQUFMLENBQVdFLE1BRnJCO0FBR0UsMEJBQWMsS0FBS2tCLFlBSHJCO0FBSUUsK0JBQW1CLEtBQUs4QyxpQkFKMUI7QUFLRSwrQkFBbUIsS0FBSzdDLGlCQUwxQjtBQU1FLDZCQUFpQixLQUFLQyxlQU54QjtBQU9FLGtCQUFNLEtBQUt0QixLQUFMLENBQVdDLFFBUG5CO0FBUUUsa0NBQXNCLEtBQUtELEtBQUwsQ0FBV1csb0JBUm5DO0FBU0UsMkJBQWUsS0FBS1gsS0FBTCxDQUFXWSxhQVQ1QjtBQVVFLHNCQUFVLEtBQUtaLEtBQUwsQ0FBV2EsUUFWdkI7QUFXRSxtQkFBTyxLQUFLYixLQUFMLENBQVdjLEtBWHBCO0FBWUUsc0JBQVUsS0FBS3NCLFFBQUwsQ0FBY2xCLElBQWQsQ0FBbUIsSUFBbkIsQ0FaWjtBQWFFLHFCQUFTLEtBQUtsQixLQUFMLENBQVdlLE9BYnRCO0FBY0UsdUJBQVcsS0FBS2tELFNBQUwsQ0FBZS9DLElBQWYsQ0FBb0IsSUFBcEIsQ0FkYjtBQWVFLHlCQUFhLEtBQUtELFdBZnBCO0FBZ0JFLG9CQUFRLEtBQUtuQjtBQWhCZjtBQURGLFNBVkY7QUE4QkUscUNBQUssV0FBVSxVQUFmO0FBOUJGLE9BREY7QUFvQ0Q7Ozs7RUFsU2VxRSxNQUFNQyxTOztBQXVTeEJDLFNBQVNuRSxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBQ1dvRSxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBRFg7O0FBSUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICBUb3AgbGV2ZWwgY29tcG9uZW50IGZvciBhcHBsaWNhdGlvblxyXG4gKi9cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc29ja2V0ID0gaW8oKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHVzZXJOYW1lOiAnJyxcclxuICAgICAgcmVuZGVyOiB7XHJcbiAgICAgICAgaG9tZTogdHJ1ZSxcclxuICAgICAgICBzZWxlY3RTZWFyY2g6IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdFJlcXVlc3Q6IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdFByb2ZpbGU6IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdE1lc3NhZ2VzOiBmYWxzZSxcclxuICAgICAgICByZW5kZXJSZXN1bHRzOiBmYWxzZSxcclxuICAgICAgICByZW5kZXJQb3N0OiBmYWxzZSxcclxuICAgICAgICBjaGF0OiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICBzZWxlY3RlZE5vdGlmaWNhdGlvbjoge30sXHJcbiAgICAgIGNvbnZlcnNhdGlvbnM6IFtdLFxyXG4gICAgICByZXF1ZXN0czogW10sXHJcbiAgICAgIHVzZXJzOiBbXSxcclxuICAgICAgZnJpZW5kczogW10sXHJcbiAgICAgIHByZXZJZHg6IC0xXHJcbiAgICB9O1xyXG4gICAgdGhpcy5nZXRNZXNzYWdlcyA9IHRoaXMuZ2V0TWVzc2FnZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlTm90aWZpY2F0aW9uU2VsZWN0ID0gdGhpcy5oYW5kbGVOb3RpZmljYXRpb25TZWxlY3QuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU2VsZWN0ID0gdGhpcy5oYW5kbGVTZWxlY3QuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlTWFya2VyQ2xpY2sgPSB0aGlzLmhhbmRsZU1hcmtlckNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUluZm9DbG9zZSA9IHRoaXMuaGFuZGxlSW5mb0Nsb3NlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5zb2NrZXQub24oJ25ldy1yZXF1ZXN0JywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmdldFJlcXVlc3RzKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgLy9ncmFiIGxvZ2dlZCBpbiB1c2VyIGFmdGVyIHNlc3Npb24gaXMgYXV0aGVudGljYXRlZFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJy91c2VyJyxcclxuICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICBzZWxmLnNvY2tldC5lbWl0KCd1c2VyJywgdXNlcik7XHJcbiAgICAgICAgc2VsZi5zZXRTdGF0ZSgoKSA9PiAoe3VzZXJOYW1lOiB1c2VyfSkpO1xyXG4gICAgICB9XHJcbiAgICB9KSAvKmVzbGludC1kaXNhYmxlIGluZGVudCovXHJcbiAgICAudGhlbigoKSA9PiB0aGlzLmdldFJlcXVlc3RzKCkpXHJcbiAgICAudGhlbigoKSA9PiB0aGlzLmdldE1lc3NhZ2VzKCkpXHJcbiAgICAudGhlbigoKSA9PiB0aGlzLmdldEZyaWVuZHMoKSlcclxuICAgIC50aGVuKCgpID0+IHRoaXMuZ2V0VXNlcnMoKSlcclxuICAgIC8vIC50aGVuKCgpID0+IHRoaXMuZ2V0SW50ZXJlc3RzKCkpXHJcbiAgICAuZmFpbChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0VSUk9SJywgZXJyKTtcclxuICAgIH0pO1xyXG4gIH0gLyogZXNsaW50LWVuYWJsZSBpbmRlbnQqL1xyXG5cclxuICAvL2hlbHBlciBmdW5jdGlvblxyXG4gIGdldE1lc3NhZ2VzKCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9tZXNzYWdlJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oY29udm9zKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBjb252ZXJzYXRpb25zOiBjb252b3NcclxuICAgICAgICB9KTtcclxuICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvdWxkblxcJ3QgZ2V0IG1lc3NhZ2VzOicsIGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2V0SW50ZXJlc3RzKCkge1xyXG4gIC8vICAgaWYgKHRoaXMuc3RhdGUudXNlck5hbWUubGVuZ3RoKSB7XHJcbiAgLy8gICAgICQuYWpheCh7XHJcbiAgLy8gICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgLy8gICAgICAgdXJsOiAnL2ludGVyZXN0cycsXHJcbiAgLy8gICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICAgIGludGVyZXN0czogcmVzLmludGVyZXN0c1xyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICBlcnJvcjogKGVycikgPT4ge1xyXG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ0NvdWxkblxcJ3QgZ2V0IGludGVyZXN0czonLCBlcnIpO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICBnZXRSZXF1ZXN0cygpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICB1cmw6ICcvYnVkZHlSZXF1ZXN0JyxcclxuICAgICAgc3VjY2VzczogKHJlcXVlc3RzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdHMpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgcmVxdWVzdHM6IHJlcXVlc3RzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcnMoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS51c2VyTmFtZS5sZW5ndGgpIHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICB1cmw6ICcvdXNlcnMnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgIHZhciB1c2VycyA9IFtdO1xyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdXNlcnMucHVzaChyZXNbaV0udXNlcm5hbWUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlcnM6IHVzZXJzXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0NvdWxkblxcJ3QgZ2V0IHVzZXJzOicsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEZyaWVuZHMoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS51c2VyTmFtZS5sZW5ndGgpIHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgICB1cmw6ICcvZnJpZW5kcycsXHJcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZyaWVuZHM6IHJlcy5mcmllbmRzXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnQ291bGRuXFwndCBnZXQgZnJpZW5kczonLCBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRGcmllbmQoZnJpZW5kKSB7XHJcbiAgICAvL2lmICh0aGlzLnN0YXRlLnVzZXJOYW1lLmxlbmd0aCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvZnJpZW5kcycsXHJcbiAgICAgIGRhdGE6IHt1c2VybmFtZTogZnJpZW5kfSxcclxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZnJpZW5kczogcmVzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvdWxkblxcJ3QgYWRkIEZyaWVuZDonLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlTm90aWZpY2F0aW9uU2VsZWN0KG5vdGlmaWNhdGlvbikge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlbGVjdGVkTm90aWZpY2F0aW9uOiBub3RpZmljYXRpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTWFya2VyQ2xpY2soaWR4KSB7XHJcbiAgICBjb25zb2xlLmxvZygnbWFya2VyIGNsaWNrJyk7XHJcblxyXG4gICAgdmFyIHJlcXVlc3RzID0gdGhpcy5zdGF0ZS5yZXF1ZXN0cztcclxuICAgIHZhciBwcmV2SWR4ID0gdGhpcy5zdGF0ZS5wcmV2SWR4O1xyXG4gICAgaWYgKHByZXZJZHggPiAtMSkge1xyXG4gICAgICByZXF1ZXN0c1twcmV2SWR4XS5zaG93SW5mbyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RzW2lkeF0uc2hvd0luZm8gPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICByZXF1ZXN0czogcmVxdWVzdHMsXHJcbiAgICAgIHByZXZJZHg6IGlkeFxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5mb0Nsb3NlKGlkeCkge1xyXG4gICAgY29uc29sZS5sb2coJ3RoaXMgPT09Jyx0aGlzKTtcclxuICAgIHZhciByZXF1ZXN0cyA9IHRoaXMuc3RhdGUucmVxdWVzdHM7XHJcbiAgICByZXF1ZXN0c1tpZHhdLnNob3dJbmZvID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHJlcXVlc3RzOiByZXF1ZXN0cyxcclxuICAgICAgcHJldklkeDogLTFcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGhhbmRsZU1lc3NhZ0NsaWNrKCkge1xyXG5cclxuICB9XHJcblxyXG4gIC8vV2hlbiBhIGxpbmsgaW4gdGhlIG5hdmJhciBpcyBjbGlja2VkIGl0cyByZW5kZXIgc3RhdGUgaXMgc2V0IHRvIHRydWVcclxuICAvL2FuZCBhbGwgb3RoZXIgcmVuZGVyIHN0YXRlcyBhcmUgdG8gZmFsc2VcclxuICAvL0lmIHRoZSBldmVudCBmbGFnIGlzIHNldCB0aGVuIHRoZSBsaW5rIGlzIGJlaW5nIHB1bGxlZCBmcm9tIGFuIG9uIGNsaWNrIGV2ZW50XHJcbiAgaGFuZGxlU2VsZWN0KGUsIGV2ZW50RmxhZykge1xyXG4gICAgdmFyIGxpbms7XHJcbiAgICB2YXIgZXJyb3JGbGFnID0gZmFsc2U7XHJcblxyXG5cclxuICAgIGlmIChldmVudEZsYWcpIHtcclxuICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICBsaW5rID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlcnJvckZsYWcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoZSkge1xyXG4gICAgICAgIGxpbmsgPSBlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVycm9yRmxhZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vRXJyb3IgaGFuZGxpbmdcclxuICAgIGlmICgoZXJyb3JGbGFnID09PSB0cnVlKSAmJiAoZXZlbnRGbGFnID09PSB0cnVlKSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdSZWNlaXZlZCAnLCBlLCAnIHdpdGggZXZlbnRGbGFnIHNldCB0byB0cnVlLiBUaGUgb24gY2xpY2sgZXZlbnQgdGhhdCBjYWxsZWQgaGFuZGxlU2VsZWN0IGRvZXMgbm90IGhhdmUgYSBuYW1lIHByb3BlcnR5LicpO1xyXG4gICAgfSBlbHNlIGlmICgoZXJyb3JGbGFnID09PSB0cnVlKSAmJiAoIWV2ZW50RmxhZykpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignUmVjZWl2ZWQnLCBlLCAnd2l0aCBldmVudEZsYWcgbm90IHNldC4gVGhlIGludm9jYXRpb24gb2YgaGFuZGxlU2VsZWN0IGRpZCBub3QgcHJvdmlkZSBhIHJlbmRlciBsaW5rLicpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnJlbmRlci5oYXNPd25Qcm9wZXJ0eShsaW5rKSA9PT0gZmFsc2UpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignUmVjZWl2ZWQnLCBlLCAnOyB0aGlzIGlzIG5vdCBhIHZhbGlkIGtleS4gQ2hlY2sgdGhlIHJlbmRlciBvYmplY3QgaW4gQXBwXFwncyBzdGF0ZS4gVGhlIGtleSBpcyBlaXRoZXIgbm90IHRoZXJlIG9yIGl0IGhhcyBiZWVuIHNwZWxsZWQgaW5jb3JyZWN0bHkuJyk7XHJcbiAgICAgIGVycm9yRmxhZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZXJyb3JGbGFnID09PSB0cnVlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIGhhcyBhIG9jY3VycmVkLCB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gdG8gcHJldmVudCB1bmRlZmluZWQgYmVoYXZpb3IvY3J5cHRpYyByZWFjdCBlcnJvciBtZXNzYWdlLicpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdSZWFjdFxcJ3MgZGVmYXVsdCBlcnJvciBtZXNzYWdlIGlzOlxcblVuY2F1Z2h0IEVycm9yOiBEeW5hbWljQ29udGVudC5yZW5kZXIoKTogQSB2YWxpZCBSZWFjdCBlbGVtZW50IChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgdW5kZWZpbmVkLCBhbiBhcnJheSBvciBzb21lIG90aGVyIGludmFsaWQgb2JqZWN0LicpO1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICB2YXIgbmV3UmVuZGVyU3RhdGUgPSBPYmplY3QuYXNzaWduKHByZXZTdGF0ZS5yZW5kZXIpO1xyXG5cclxuICAgICAgZm9yICh2YXIgcmVuZGVyTGluayBpbiBuZXdSZW5kZXJTdGF0ZSkge1xyXG4gICAgICAgIGlmIChyZW5kZXJMaW5rID09PSBsaW5rKSB7XHJcbiAgICAgICAgICBuZXdSZW5kZXJTdGF0ZVtyZW5kZXJMaW5rXSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5ld1JlbmRlclN0YXRlW3JlbmRlckxpbmtdID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVuZGVyOiBuZXdSZW5kZXJTdGF0ZVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5BcHBcIj5cclxuICAgICAgICA8TmF2XHJcbiAgICAgICAgICBoYW5kbGVTZWxlY3Q9e3RoaXMuaGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgdXNlcj17dGhpcy5zdGF0ZS51c2VyTmFtZX1cclxuICAgICAgICAgIG1lc3NhZ2VzPXt0aGlzLnN0YXRlLmNvbnZlcnNhdGlvbnN9XHJcbiAgICAgICAgICBoYW5kbGVOb3RpZmljYXRpb25TZWxlY3Q9e3RoaXMuaGFuZGxlTm90aWZpY2F0aW9uU2VsZWN0fVxyXG4gICAgICAgICAgdXNlcnM9e3RoaXMuc3RhdGUudXNlcnN9XHJcbiAgICAgICAgICBmcmllbmRzPXt0aGlzLnN0YXRlLmZyaWVuZHN9XHJcbiAgICAgICAgICBhZGRGcmllbmQ9e3RoaXMuYWRkRnJpZW5kLmJpbmQodGhpcyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR5bmFtaWNDb250ZW50IGNvbC1tZC05XCI+XHJcbiAgICAgICAgICA8RHluYW1pY0NvbnRlbnRcclxuICAgICAgICAgICAgaGFuZGxlTm90aWZpY2F0aW9uU2VsZWN0PXt0aGlzLmhhbmRsZU5vdGlmaWNhdGlvblNlbGVjdH1cclxuICAgICAgICAgICAgcmVuZGVyPXt0aGlzLnN0YXRlLnJlbmRlcn1cclxuICAgICAgICAgICAgaGFuZGxlU2VsZWN0PXt0aGlzLmhhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgaGFuZGxlTWVzc2FnQ2xpY2s9e3RoaXMuaGFuZGxlTWVzc2FnQ2xpY2t9XHJcbiAgICAgICAgICAgIGhhbmRsZU1hcmtlckNsaWNrPXt0aGlzLmhhbmRsZU1hcmtlckNsaWNrfVxyXG4gICAgICAgICAgICBoYW5kbGVJbmZvQ2xvc2U9e3RoaXMuaGFuZGxlSW5mb0Nsb3NlfVxyXG4gICAgICAgICAgICB1c2VyPXt0aGlzLnN0YXRlLnVzZXJOYW1lfVxyXG4gICAgICAgICAgICBzZWxlY3RlZE5vdGlmaWNhdGlvbj17dGhpcy5zdGF0ZS5zZWxlY3RlZE5vdGlmaWNhdGlvbn1cclxuICAgICAgICAgICAgY29udmVyc2F0aW9ucz17dGhpcy5zdGF0ZS5jb252ZXJzYXRpb25zfVxyXG4gICAgICAgICAgICByZXF1ZXN0cz17dGhpcy5zdGF0ZS5yZXF1ZXN0c31cclxuICAgICAgICAgICAgdXNlcnM9e3RoaXMuc3RhdGUudXNlcnN9XHJcbiAgICAgICAgICAgIGdldFVzZXJzPXt0aGlzLmdldFVzZXJzLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgIGZyaWVuZHM9e3RoaXMuc3RhdGUuZnJpZW5kc31cclxuICAgICAgICAgICAgYWRkRnJpZW5kPXt0aGlzLmFkZEZyaWVuZC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICBnZXRNZXNzYWdlcz17dGhpcy5nZXRNZXNzYWdlc31cclxuICAgICAgICAgICAgc29ja2V0PXt0aGlzLnNvY2tldH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXHJcbik7XHJcblxyXG4vKjxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uV2luZG93IGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICA8Tm90aWZpY2F0aW9uc1xyXG4gICAgICAgICAgICBoYW5kbGVOb3RpZmljYXRpb25TZWxlY3Q9e3RoaXMuaGFuZGxlTm90aWZpY2F0aW9uU2VsZWN0fVxyXG4gICAgICAgICAgICBoYW5kbGVTZWxlY3Q9e3RoaXMuaGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICB1c2VyPXt0aGlzLnN0YXRlLnVzZXJOYW1lfVxyXG4gICAgICAgICAgICBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+Ki9cclxuIl19