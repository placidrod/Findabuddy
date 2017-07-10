'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
Main dynamic container for bulk of application content.  The state, and visibility of components, changes based on
how the user interacts with the frontend UI
*/

var DynamicContent = function (_React$Component) {
  _inherits(DynamicContent, _React$Component);

  function DynamicContent(props) {
    _classCallCheck(this, DynamicContent);

    var _this = _possibleConstructorReturn(this, (DynamicContent.__proto__ || Object.getPrototypeOf(DynamicContent)).call(this, props));

    _this.state = {
      // renderResults: this.props.render.renderResults,
      results: [],
      convo: {},
      currentPost: ''

    };
    _this.handleSubmitRequest = _this.handleSubmitRequest.bind(_this);
    _this.handlePostClick = _this.handlePostClick.bind(_this);
    _this.handleConvoClick = _this.handleConvoClick.bind(_this);

    _this.props.socket.on('message', function (convo) {
      console.log(convo);
      this.props.getMessages();
      this.setState({
        convo: convo
      });
    }.bind(_this));
    return _this;
  }
  //click event handler for search submit & new buddy request submit


  _createClass(DynamicContent, [{
    key: 'handleSubmitRequest',
    value: function handleSubmitRequest(data) {
      data = data.reverse();

      this.setState({
        results: data
      });
    }
  }, {
    key: 'handleConvoClick',
    value: function handleConvoClick(convo) {

      this.setState({
        convo: convo
      });
      $.ajax({
        url: "/message/read/" + convo._id,
        method: 'PUT',
        success: function success() {}
      });

      this.props.handleSelect('chat');
    }
  }, {
    key: 'handleBackToConversations',
    value: function handleBackToConversations() {
      this.props.handleSelect('conversations');
    }
  }, {
    key: 'handleCreateEmptyConvo',
    value: function handleCreateEmptyConvo(convo) {
      this.setState({ convo: convo }).bind(this);
    }

    // For case of when user adds a friend but hasn't sent any messages yet

  }, {
    key: 'createEmptyConvo',
    value: function createEmptyConvo(recipient) {
      event.preventDefault();
      var data = {
        recipient: recipient,
        justAdded: true
        // text: `FYI, ${currUsername} added you as a buddy. Feel free to add them back so it's easier to chat.`
      };
      $.ajax({
        url: '/message',
        type: 'POST',
        data: data,
        success: function success() {
          console.log('posted new convo');
        },
        error: function error(err) {
          console.log('failed to post empty convo', err);
        }
      });
    }

    //renders a specific request when it is clicked on in the search results list

  }, {
    key: 'handlePostClick',
    value: function handlePostClick(post) {
      // var results = this.state.results;
      //console.log('CURRENT POST', post)
      this.props.handleSelect('renderPost');

      this.setState({
        currentPost: post
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.render.selectSearch) {
        return React.createElement(
          'div',
          { className: 'componentWindow' },
          React.createElement(
            'h1',
            null,
            'Search Form'
          ),
          React.createElement(SearchForm, {
            handleSubmitRequest: this.handleSubmitRequest,
            handleSelect: this.props.handleSelect
          })
        );
      } else if (this.props.render.selectRequest) {
        return React.createElement(
          'div',
          { className: 'componentWindow' },
          React.createElement(
            'h1',
            null,
            'Buddy Request Form'
          ),
          React.createElement(CreateRequest, {
            handleSelect: this.props.handleSelect,
            handleSubmitRequest: this.handleSubmitRequest,
            user: this.props.user
          })
        );
      } else if (this.props.render.renderPost) {
        return React.createElement(
          'div',
          { className: 'componentWindow' },
          React.createElement(
            'h1',
            null,
            'Post Info'
          ),
          React.createElement(PostInfo, {
            post: this.state.currentPost,
            user: this.props.user
          })
        );
      } else if (this.props.render.selectProfile) {
        return React.createElement(
          'div',
          { className: 'componentWindow' },
          React.createElement(
            'h1',
            null,
            'About Me'
          ),
          React.createElement(Profile, {
            user: this.props.user,
            friends: this.props.friends,
            users: this.state.users,
            getUsers: this.props.getUsers,
            addFriend: this.props.addFriend,
            conversations: this.props.conversations,
            handleConvoClick: this.handleConvoClick,
            createEmptyConvo: Promise.promisify(this.createEmptyConvo),
            handleCreateEmptyConvo: this.handleCreateEmptyConvo
          })
        );
      } else if (this.props.render.renderResults) {
        return React.createElement(
          'div',
          { className: 'componentWindow' },
          React.createElement(
            'h1',
            null,
            'Search Result'
          ),
          React.createElement(SearchList, {
            searchResult: this.state.results,
            handlePostClick: this.handlePostClick
          })
        );
      } else if (this.props.render.selectMessages) {
        return React.createElement(
          'div',
          { className: 'componentWindow' },
          React.createElement(
            'h1',
            null,
            'Messages'
          ),
          React.createElement(Conversations, {
            user: this.props.user,
            conversations: this.props.conversations,
            handleConvoClick: this.handleConvoClick
          })
        );
      } else if (this.props.render.home) {
        return React.createElement(
          'div',
          { className: 'componentWindow' },
          React.createElement(Home, { requests: this.props.requests, handleMarkerClick: this.props.handleMarkerClick, handleInfoClose: this.props.handleInfoClose, handlePostClick: this.handlePostClick
          })
        );
      } else if (this.props.render.chat) {
        return React.createElement(
          'div',
          { className: 'componentWindow' },
          React.createElement(
            'h1',
            null,
            this.state.convo.participants.find(function (username) {
              return username !== _this2.props.user;
            })
          ),
          React.createElement(MessageList, {
            convo: this.state.convo,
            user: this.props.user
          })
        );
      }
    }
  }]);

  return DynamicContent;
}(React.Component);

window.DynamicContent = DynamicContent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2R5bmFtaWMtY29udGVudC5qc3giXSwibmFtZXMiOlsiRHluYW1pY0NvbnRlbnQiLCJwcm9wcyIsInN0YXRlIiwicmVzdWx0cyIsImNvbnZvIiwiY3VycmVudFBvc3QiLCJoYW5kbGVTdWJtaXRSZXF1ZXN0IiwiYmluZCIsImhhbmRsZVBvc3RDbGljayIsImhhbmRsZUNvbnZvQ2xpY2siLCJzb2NrZXQiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRNZXNzYWdlcyIsInNldFN0YXRlIiwiZGF0YSIsInJldmVyc2UiLCIkIiwiYWpheCIsInVybCIsIl9pZCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJoYW5kbGVTZWxlY3QiLCJyZWNpcGllbnQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwianVzdEFkZGVkIiwidHlwZSIsImVycm9yIiwiZXJyIiwicG9zdCIsInJlbmRlciIsInNlbGVjdFNlYXJjaCIsInNlbGVjdFJlcXVlc3QiLCJ1c2VyIiwicmVuZGVyUG9zdCIsInNlbGVjdFByb2ZpbGUiLCJmcmllbmRzIiwidXNlcnMiLCJnZXRVc2VycyIsImFkZEZyaWVuZCIsImNvbnZlcnNhdGlvbnMiLCJQcm9taXNlIiwicHJvbWlzaWZ5IiwiY3JlYXRlRW1wdHlDb252byIsImhhbmRsZUNyZWF0ZUVtcHR5Q29udm8iLCJyZW5kZXJSZXN1bHRzIiwic2VsZWN0TWVzc2FnZXMiLCJob21lIiwicmVxdWVzdHMiLCJoYW5kbGVNYXJrZXJDbGljayIsImhhbmRsZUluZm9DbG9zZSIsImNoYXQiLCJwYXJ0aWNpcGFudHMiLCJmaW5kIiwidXNlcm5hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFDOzs7OztJQUtLQSxjOzs7QUFFSiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWDtBQUNBQyxlQUFTLEVBRkU7QUFHWEMsYUFBTyxFQUhJ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Q0MsT0FBTzVELGNBQVAsR0FBd0JBLGNBQXhCIiwiZmlsZSI6ImR5bmFtaWMtY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAvKlxyXG4gTWFpbiBkeW5hbWljIGNvbnRhaW5lciBmb3IgYnVsayBvZiBhcHBsaWNhdGlvbiBjb250ZW50LiAgVGhlIHN0YXRlLCBhbmQgdmlzaWJpbGl0eSBvZiBjb21wb25lbnRzLCBjaGFuZ2VzIGJhc2VkIG9uXHJcbiBob3cgdGhlIHVzZXIgaW50ZXJhY3RzIHdpdGggdGhlIGZyb250ZW5kIFVJXHJcbiAqL1xyXG5cclxuY2xhc3MgRHluYW1pY0NvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgLy8gcmVuZGVyUmVzdWx0czogdGhpcy5wcm9wcy5yZW5kZXIucmVuZGVyUmVzdWx0cyxcclxuICAgICAgcmVzdWx0czogW10sXHJcbiAgICAgIGNvbnZvOiB7fSxcclxuICAgICAgY3VycmVudFBvc3Q6ICcnLFxyXG5cclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdFJlcXVlc3QgPSB0aGlzLmhhbmRsZVN1Ym1pdFJlcXVlc3QuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlUG9zdENsaWNrID0gdGhpcy5oYW5kbGVQb3N0Q2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ29udm9DbGljayA9IHRoaXMuaGFuZGxlQ29udm9DbGljay5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMucHJvcHMuc29ja2V0Lm9uKCdtZXNzYWdlJywgZnVuY3Rpb24oY29udm8pIHtcclxuICAgICAgY29uc29sZS5sb2coY29udm8pO1xyXG4gICAgICB0aGlzLnByb3BzLmdldE1lc3NhZ2VzKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGNvbnZvOiBjb252b1xyXG4gICAgICB9KTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG4gIC8vY2xpY2sgZXZlbnQgaGFuZGxlciBmb3Igc2VhcmNoIHN1Ym1pdCAmIG5ldyBidWRkeSByZXF1ZXN0IHN1Ym1pdFxyXG4gIGhhbmRsZVN1Ym1pdFJlcXVlc3QoZGF0YSkge1xyXG4gICAgZGF0YSA9IGRhdGEucmV2ZXJzZSgpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICByZXN1bHRzOiBkYXRhXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNvbnZvQ2xpY2soY29udm8pIHtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY29udm86IGNvbnZvXHJcbiAgICB9KTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogXCIvbWVzc2FnZS9yZWFkL1wiICsgY29udm8uX2lkLFxyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTZWxlY3QoJ2NoYXQnKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUJhY2tUb0NvbnZlcnNhdGlvbnMoKSB7XHJcbiAgICB0aGlzLnByb3BzLmhhbmRsZVNlbGVjdCgnY29udmVyc2F0aW9ucycpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ3JlYXRlRW1wdHlDb252byhjb252bykgeyB0aGlzLnNldFN0YXRlKHtjb252bzogY29udm99KS5iaW5kKHRoaXMpOyB9XHJcblxyXG4gIC8vIEZvciBjYXNlIG9mIHdoZW4gdXNlciBhZGRzIGEgZnJpZW5kIGJ1dCBoYXNuJ3Qgc2VudCBhbnkgbWVzc2FnZXMgeWV0XHJcbiAgY3JlYXRlRW1wdHlDb252byhyZWNpcGllbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgcmVjaXBpZW50OiByZWNpcGllbnQsXHJcbiAgICAgIGp1c3RBZGRlZDogdHJ1ZSxcclxuICAgICAgLy8gdGV4dDogYEZZSSwgJHtjdXJyVXNlcm5hbWV9IGFkZGVkIHlvdSBhcyBhIGJ1ZGR5LiBGZWVsIGZyZWUgdG8gYWRkIHRoZW0gYmFjayBzbyBpdCdzIGVhc2llciB0byBjaGF0LmBcclxuICAgIH07XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICcvbWVzc2FnZScsXHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Bvc3RlZCBuZXcgY29udm8nKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgdG8gcG9zdCBlbXB0eSBjb252bycsIGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAvL3JlbmRlcnMgYSBzcGVjaWZpYyByZXF1ZXN0IHdoZW4gaXQgaXMgY2xpY2tlZCBvbiBpbiB0aGUgc2VhcmNoIHJlc3VsdHMgbGlzdFxyXG4gIGhhbmRsZVBvc3RDbGljayhwb3N0KSB7XHJcbiAgICAvLyB2YXIgcmVzdWx0cyA9IHRoaXMuc3RhdGUucmVzdWx0cztcclxuICAgIC8vY29uc29sZS5sb2coJ0NVUlJFTlQgUE9TVCcsIHBvc3QpXHJcbiAgICB0aGlzLnByb3BzLmhhbmRsZVNlbGVjdCgncmVuZGVyUG9zdCcpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjdXJyZW50UG9zdDogcG9zdCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMucmVuZGVyLnNlbGVjdFNlYXJjaCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50V2luZG93XCI+XHJcbiAgICAgICAgICA8aDE+U2VhcmNoIEZvcm08L2gxPlxyXG4gICAgICAgICAgPFNlYXJjaEZvcm1cclxuICAgICAgICAgICAgaGFuZGxlU3VibWl0UmVxdWVzdD17dGhpcy5oYW5kbGVTdWJtaXRSZXF1ZXN0fVxyXG4gICAgICAgICAgICBoYW5kbGVTZWxlY3Q9e3RoaXMucHJvcHMuaGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5yZW5kZXIuc2VsZWN0UmVxdWVzdCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50V2luZG93XCI+XHJcbiAgICAgICAgICA8aDE+QnVkZHkgUmVxdWVzdCBGb3JtPC9oMT5cclxuICAgICAgICAgIDxDcmVhdGVSZXF1ZXN0XHJcbiAgICAgICAgICAgIGhhbmRsZVNlbGVjdD17dGhpcy5wcm9wcy5oYW5kbGVTZWxlY3R9XHJcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdFJlcXVlc3Q9e3RoaXMuaGFuZGxlU3VibWl0UmVxdWVzdH1cclxuICAgICAgICAgICAgdXNlcj17dGhpcy5wcm9wcy51c2VyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5yZW5kZXIucmVuZGVyUG9zdCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50V2luZG93XCI+XHJcbiAgICAgICAgICA8aDE+UG9zdCBJbmZvPC9oMT5cclxuICAgICAgICAgIDxQb3N0SW5mb1xyXG4gICAgICAgICAgICBwb3N0PXt0aGlzLnN0YXRlLmN1cnJlbnRQb3N0fVxyXG4gICAgICAgICAgICB1c2VyPXt0aGlzLnByb3BzLnVzZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnJlbmRlci5zZWxlY3RQcm9maWxlKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRXaW5kb3dcIj5cclxuICAgICAgICAgIDxoMT5BYm91dCBNZTwvaDE+XHJcbiAgICAgICAgICA8UHJvZmlsZVxyXG4gICAgICAgICAgICB1c2VyPXt0aGlzLnByb3BzLnVzZXJ9XHJcbiAgICAgICAgICAgIGZyaWVuZHM9e3RoaXMucHJvcHMuZnJpZW5kc31cclxuICAgICAgICAgICAgdXNlcnM9e3RoaXMuc3RhdGUudXNlcnN9XHJcbiAgICAgICAgICAgIGdldFVzZXJzPXt0aGlzLnByb3BzLmdldFVzZXJzfVxyXG4gICAgICAgICAgICBhZGRGcmllbmQ9e3RoaXMucHJvcHMuYWRkRnJpZW5kfVxyXG4gICAgICAgICAgICBjb252ZXJzYXRpb25zPXt0aGlzLnByb3BzLmNvbnZlcnNhdGlvbnN9XHJcbiAgICAgICAgICAgIGhhbmRsZUNvbnZvQ2xpY2s9e3RoaXMuaGFuZGxlQ29udm9DbGlja31cclxuICAgICAgICAgICAgY3JlYXRlRW1wdHlDb252bz17UHJvbWlzZS5wcm9taXNpZnkodGhpcy5jcmVhdGVFbXB0eUNvbnZvKX1cclxuICAgICAgICAgICAgaGFuZGxlQ3JlYXRlRW1wdHlDb252bz17dGhpcy5oYW5kbGVDcmVhdGVFbXB0eUNvbnZvfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5yZW5kZXIucmVuZGVyUmVzdWx0cykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50V2luZG93XCI+XHJcbiAgICAgICAgICA8aDE+U2VhcmNoIFJlc3VsdDwvaDE+XHJcbiAgICAgICAgICA8U2VhcmNoTGlzdFxyXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHQ9e3RoaXMuc3RhdGUucmVzdWx0c31cclxuICAgICAgICAgICAgaGFuZGxlUG9zdENsaWNrPXt0aGlzLmhhbmRsZVBvc3RDbGlja31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMucmVuZGVyLnNlbGVjdE1lc3NhZ2VzKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRXaW5kb3dcIj5cclxuICAgICAgICAgIDxoMT5NZXNzYWdlczwvaDE+XHJcbiAgICAgICAgICA8Q29udmVyc2F0aW9uc1xyXG4gICAgICAgICAgICB1c2VyPXt0aGlzLnByb3BzLnVzZXJ9XHJcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbnM9e3RoaXMucHJvcHMuY29udmVyc2F0aW9uc31cclxuICAgICAgICAgICAgaGFuZGxlQ29udm9DbGljaz17dGhpcy5oYW5kbGVDb252b0NsaWNrfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5yZW5kZXIuaG9tZSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50V2luZG93XCI+XHJcbiAgICAgICAgIDxIb21lIHJlcXVlc3RzPXt0aGlzLnByb3BzLnJlcXVlc3RzfSBoYW5kbGVNYXJrZXJDbGljaz17dGhpcy5wcm9wcy5oYW5kbGVNYXJrZXJDbGlja30gIGhhbmRsZUluZm9DbG9zZT17dGhpcy5wcm9wcy5oYW5kbGVJbmZvQ2xvc2V9IGhhbmRsZVBvc3RDbGljaz17dGhpcy5oYW5kbGVQb3N0Q2xpY2t9XHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMucmVuZGVyLmNoYXQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudFdpbmRvd1wiPlxyXG4gICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb252by5wYXJ0aWNpcGFudHMuZmluZCh1c2VybmFtZSA9PiB1c2VybmFtZSAhPT0gdGhpcy5wcm9wcy51c2VyKX1cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8TWVzc2FnZUxpc3RcclxuICAgICAgICAgICAgY29udm89e3RoaXMuc3RhdGUuY29udm99XHJcbiAgICAgICAgICAgIHVzZXI9e3RoaXMucHJvcHMudXNlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuRHluYW1pY0NvbnRlbnQgPSBEeW5hbWljQ29udGVudDtcclxuIl19