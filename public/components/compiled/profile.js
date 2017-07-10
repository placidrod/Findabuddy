'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 Component for viewing user profile
 */
var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

    _this.state = {
      bio: '',
      bioTitle: '',
      bioExist: false,
      profilePic: '',
      newInterest: '',
      interests: [],
      friends: [],
      requests: [],
      // friends: props.friends,
      // interactions: interactions,
      editing: false,
      buddyProfile: {}
    };
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.postProfileInfo = _this.postProfileInfo.bind(_this);
    return _this;
  }

  _createClass(Profile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getProfileInfo();
      this.props.getUsers();
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      var name = e.target.name;
      this.setState(_defineProperty({}, name, e.target.value));
    }
  }, {
    key: 'getProfileInfo',
    value: function getProfileInfo() {
      var _this2 = this;

      $.ajax({
        url: '/profile',
        type: 'GET',
        data: { username: this.props.user },
        success: function (profile) {
          console.log('recieved profile info', profile);
          if (profile.bio && profile.bioTitle) {
            this.setState({
              bio: profile.bio,
              bioTitle: profile.bioTitle,
              interests: profile.interests,
              bioExist: true
            });
          }
        }.bind(this),
        error: function error() {
          console.log('failed to show profile');
        }
      }).then(function () {
        return _this2.getRequestHistory();
      });
    }
  }, {
    key: 'getBuddyProfileInfo',
    value: function getBuddyProfileInfo(friend) {
      // event.preventDefault();
      // console.log('event target', event.target.getAttribute('href'));
      // let buddyName = event.target.getAttribute('href');
      $.ajax({
        url: '/profile/' + friend,
        type: 'GET',
        success: function (buddyProfile) {
          console.log('recieved buddy profile info', buddyProfile);
          // if (buddyProfile.bio && buddyProfile.bioTitle) {
          this.setState({
            buddyProfile: buddyProfile
          });

          this.activateProfileTab();
          // }
        }.bind(this),
        error: function error() {
          console.log('failed to show buddy profile');
        }
      });
    }
  }, {
    key: 'activateProfileTab',
    value: function activateProfileTab() {
      var $profileTab = $('#profile-tab-panes .nav-tabs a[href="#profile"]').closest('li');
      $profileTab.siblings('li').removeClass('active');
      $profileTab.addClass('active');
      var $profileTabPanel = $('#profile-tab-panes .tab-content div#profile');
      $profileTabPanel.siblings('div').removeClass('active');
      $profileTabPanel.addClass('active');
    }
  }, {
    key: 'clearBuddyProfile',
    value: function clearBuddyProfile() {
      this.setState({
        buddyProfile: {}
      });
    }
  }, {
    key: 'getRequestHistory',
    value: function getRequestHistory() {
      $.ajax({
        url: '/requests',
        type: 'GET',
        success: function (requests) {
          // console.log('recieved requests info', requests);
          this.setState({
            requests: requests
          });
        }.bind(this),
        error: function error() {
          console.log('failed to retrieve requests');
        }
      });
    }
  }, {
    key: 'postProfileInfo',
    value: function postProfileInfo() {
      $.ajax({
        url: '/profile',
        type: 'POST',
        data: {
          username: this.props.user,
          bioTitle: this.state.bioTitle,
          bio: this.state.bio
        },
        //dataType: dataType,
        success: function (profile) {
          console.log('recieved an update for profile info', profile);
          this.setState({
            bio: profile.bio,
            bioTitle: profile.bioTitle,
            bioExist: true,
            editing: false
          });
        }.bind(this),
        error: function error() {
          console.log('failed to show profile');
        }
      });
    }
  }, {
    key: 'toggleEdit',
    value: function toggleEdit() {
      this.setState({ editing: !this.state.editing });
    }
  }, {
    key: 'showProfileEdit',
    value: function showProfileEdit() {
      var _this3 = this;

      return React.createElement(
        'div',
        { className: 'profile' },
        React.createElement(
          'h3',
          null,
          'Say something about yourself'
        ),
        React.createElement(
          'form',
          { className: 'form' },
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'noun' },
              'Profile title'
            ),
            React.createElement('input', { type: 'text',
              value: this.state.bioTitle,
              className: 'form-control',
              placeholder: 'Enter a quick title about your bio',
              name: 'bioTitle',
              onChange: this.handleInputChange, required: true })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'noun' },
              'User bio'
            ),
            React.createElement('textarea', { type: 'text',
              value: this.state.bio,
              className: 'form-control',
              rows: '5',
              placeholder: 'Write a brief description about yourself',
              name: 'bio',
              onChange: this.handleInputChange, required: true })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'div',
              { className: 'col-sm-offset-2 col-sm-10' },
              React.createElement(
                'button',
                { type: 'submit', className: 'btn btn-default',
                  onClick: function onClick(e) {
                    e.preventDefault();
                    _this3.postProfileInfo();
                  }
                },
                'Submit'
              )
            )
          )
        )
      );
    }
  }, {
    key: 'showProfileView',
    value: function showProfileView() {
      var _this4 = this;

      var buddyProfile = this.state.buddyProfile;
      var profileEditButton = null;
      var bioTitle = null;
      var bio = null;

      if (_.isEmpty(buddyProfile)) {
        profileEditButton = React.createElement(
          'button',
          {
            id: 'profile-edit-btn',
            className: 'btn btn-default',
            onClick: function onClick() {
              return _this4.toggleEdit();
            }
          },
          'Edit'
        );
        bioTitle = this.state.bioTitle;
        bio = this.state.bio;
      } else {
        bioTitle = buddyProfile.bioTitle || 'No Bio Title';
        bio = buddyProfile.bio || 'No Bio Added';
      }

      return React.createElement(
        'div',
        { className: 'profile' },
        profileEditButton,
        React.createElement(
          'div',
          { className: 'panel panel-warning' },
          React.createElement(
            'div',
            { className: 'panel-heading' },
            React.createElement(
              'h4',
              null,
              bioTitle
            )
          ),
          React.createElement(
            'div',
            { className: 'panel-body' },
            React.createElement(
              'p',
              null,
              bio
            )
          )
        )
      );
    }
  }, {
    key: 'renderInterestsPane',
    value: function renderInterestsPane() {
      var _this5 = this;

      var buddyProfile = this.state.buddyProfile;
      var interests = null;
      var addInterestForm = null;
      var interestsList = void 0;

      if (_.isEmpty(buddyProfile)) {
        interests = this.state.interests;
        addInterestForm = React.createElement(
          'form',
          {
            className: 'add-interest-form form-inline',
            onSubmit: function onSubmit(e) {
              e.preventDefault();
              _this5.postInterest();
            }
          },
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement('input', {
              type: 'text',
              className: 'form-control',
              id: 'newInterest',
              name: 'newInterest',
              placeholder: 'Add New Interest',
              value: this.state.newInterest,
              onChange: this.handleInputChange
            })
          ),
          React.createElement(
            'button',
            {
              type: 'submit',
              className: 'btn btn-default'
            },
            'Add'
          )
        );
      } else {
        interests = buddyProfile.interests;
      }

      if (interests.length) {
        interestsList = interests.map(function (interest, i) {
          return React.createElement(
            'li',
            { key: i },
            interest
          );
        });
      } else {
        interestsList = React.createElement(
          'li',
          null,
          'No interests added yet'
        );
      }

      return React.createElement(
        'div',
        null,
        React.createElement(
          'ul',
          null,
          interestsList
        ),
        addInterestForm
      );
    }
  }, {
    key: 'renderPreviousRequestsPane',
    value: function renderPreviousRequestsPane() {
      var buddyProfile = this.state.buddyProfile;
      var requests = null;
      var requestsList = void 0;

      if (_.isEmpty(buddyProfile)) {
        requests = this.state.requests;
      } else {
        requests = buddyProfile.requests;
      }

      if (requests && requests.length) {
        requestsList = requests.map(function (request, i) {
          return React.createElement(
            'tr',
            { key: i },
            React.createElement(
              'td',
              null,
              request.postTitle
            ),
            React.createElement(
              'td',
              null,
              request.postDateTime
            ),
            React.createElement(
              'td',
              null,
              request.gender
            ),
            React.createElement(
              'td',
              null,
              request.zipCode
            ),
            React.createElement(
              'td',
              null,
              request.activityVerb
            ),
            React.createElement(
              'td',
              null,
              request.activityNoun
            )
          );
        });
      } else {
        requestsList = React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            { colSpan: '6' },
            'No requests added yet'
          )
        );
      }

      return React.createElement(
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
              'Title'
            ),
            React.createElement(
              'th',
              null,
              'Date'
            ),
            React.createElement(
              'th',
              null,
              'Gender'
            ),
            React.createElement(
              'th',
              null,
              'ZipCode'
            ),
            React.createElement(
              'th',
              null,
              'Min Age'
            ),
            React.createElement(
              'th',
              null,
              'Max Age'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          requestsList
        )
      );
    }
  }, {
    key: 'postInterest',
    value: function postInterest() {
      // console.log('interest before sending', this.state.newInterest);
      $.ajax({
        url: '/interests',
        type: 'POST',
        data: {
          interest: this.state.newInterest
        },
        //dataType: dataType,
        success: function (updatedInterests) {
          console.log('recieved updated interests', updatedInterests);
          this.setState({
            interests: updatedInterests,
            newInterest: ''
          });
        }.bind(this),
        error: function error() {
          console.log('failed to retrieve interests');
        }
      });
    }
  }, {
    key: 'handleBuddyClick',
    value: function handleBuddyClick(friendUsername) {
      var _this6 = this;

      var currUsername = this.props.user;
      // on buddy click, go to chat log between user and the buddy clicked
      var convo = this.props.conversations.find(function (convo) {
        return convo.participants.includes(friendUsername, currUsername);
      });
      // if a convo between users already exists
      convo ? this.props.handleConvoClick(convo) /*eslint-disable indent*/
      // if convo does not yet exist (case: user adds friend before ever chatting) -- prevents an error from ocurring
      : this.props.createEmptyConvo(friendUsername).then(function (convo) {
        _this6.props.handleCreateEmptyConvo(convo);
      });
    } /*eslint-enable indent*/

  }, {
    key: 'showBuddyView',
    value: function showBuddyView() {
      var _this7 = this;

      // let friends = this.props.friends.reverse();
      var friends = [].concat(_toConsumableArray(this.props.friends)).reverse();
      var friendList = void 0;
      // for adding friends:
      var newFriend = void 0;
      var users = this.props.users;
      var users = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: users
      });

      // Initializing the typeahead
      $('.typeahead').typeahead({
        hint: false,
        highlight: true, /* Enable substring highlighting */
        minLength: 1 /* Specify minimum characters required for showing result */
      }, {
        name: 'users',
        source: users
      });

      var props = this.props;
      var newFriendForm = React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { method: 'post',
            onSubmit: function onSubmit(e) {
              e.preventDefault();
              props.addFriend(newFriend.value);
              $('.typeahead').typeahead('val', '');
            }
          },
          React.createElement('input', { type: 'text', className: 'typeahead tt-query form-control', autoComplete: 'off', spellCheck: 'false', placeholder: 'Add a buddy...', ref: function ref(node) {
              return newFriend = node;
            }
          })
        )
      );

      if (friends.length) {
        friendList = function () {
          return friends.map(function (friend, i) {
            return React.createElement(
              'div',
              { key: i, className: 'row', name: 'buddy-row' },
              React.createElement(
                'div',
                { className: 'col-xs-6 friend-name' },
                friend
              ),
              React.createElement(
                'div',
                { className: 'col-xs-3' },
                React.createElement(
                  'a',
                  { onClick: function onClick() {
                      return _this7.handleBuddyClick(friend);
                    } },
                  'Chat'
                )
              ),
              React.createElement(
                'div',
                { className: 'col-xs-3' },
                React.createElement(
                  'a',
                  { onClick: function onClick() {
                      return _this7.getBuddyProfileInfo(friend);
                    } },
                  'View Profile'
                )
              )
            );
          });
        }();
      } else {
        friendList = function () {
          return React.createElement(
            'h6',
            null,
            'Add a buddy to start chatting!'
          );
        }();
      }

      return React.createElement(
        'div',
        { className: 'panel panel-warning' },
        React.createElement(
          'div',
          { className: 'panel-heading' },
          React.createElement(
            'h4',
            null,
            'Chat with buddies:'
          )
        ),
        React.createElement(
          'div',
          { className: 'panel-body' },
          newFriendForm,
          React.createElement('hr', null),
          friendList
        )
      );
    }
  }, {
    key: 'renderBackToOwnProfileButton',
    value: function renderBackToOwnProfileButton() {
      var _this8 = this;

      var buddyProfile = this.state.buddyProfile;
      var backToOwnProfileButton = null;

      if (!_.isEmpty(buddyProfile)) {
        backToOwnProfileButton = React.createElement(
          'button',
          { className: 'btn btn-primary', onClick: function onClick() {
              return _this8.clearBuddyProfile();
            } },
          'Back to my Profile'
        );
      }

      return backToOwnProfileButton;
    }
  }, {
    key: 'render',
    value: function render() {
      var profile = void 0;
      if (!this.state.bioExist || this.state.editing) {
        profile = this.showProfileEdit();
      } else {
        profile = this.showProfileView();
      }

      var buddyView = void 0;
      if (_.isEmpty(this.state.buddyProfile)) {
        buddyView = this.showBuddyView();
      } else {
        buddyView = 'Sorry. You cannot view buddies of your buddies.';
      }

      return React.createElement(
        'div',
        { id: 'profile-tab-panes' },
        this.renderBackToOwnProfileButton(),
        React.createElement(
          'ul',
          { className: 'nav nav-tabs', role: 'tablist' },
          React.createElement(
            'li',
            { role: 'presentation', className: 'active' },
            React.createElement(
              'a',
              { href: '#profile', 'aria-controls': 'profile', role: 'tab', 'data-toggle': 'tab' },
              'Profile'
            )
          ),
          React.createElement(
            'li',
            { role: 'presentation' },
            React.createElement(
              'a',
              { href: '#interests', 'aria-controls': 'interests', role: 'tab', 'data-toggle': 'tab' },
              'Interests'
            )
          ),
          React.createElement(
            'li',
            { role: 'presentation' },
            React.createElement(
              'a',
              { href: '#requests', 'aria-controls': 'requests', role: 'tab', 'data-toggle': 'tab' },
              'Activity History'
            )
          ),
          React.createElement(
            'li',
            { role: 'presentation' },
            React.createElement(
              'a',
              { href: '#friends', 'aria-controls': 'friends', role: 'tab', 'data-toggle': 'tab' },
              'Buddies'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'tab-content' },
          React.createElement(
            'div',
            { role: 'tabpanel', className: 'tab-pane active', id: 'profile' },
            profile
          ),
          React.createElement(
            'div',
            { role: 'tabpanel', className: 'tab-pane', id: 'interests' },
            this.renderInterestsPane()
          ),
          React.createElement(
            'div',
            { role: 'tabpanel', className: 'tab-pane', id: 'requests' },
            this.renderPreviousRequestsPane()
          ),
          React.createElement(
            'div',
            { role: 'tabpanel', className: 'tab-pane', id: 'friends' },
            buddyView
          )
        )
      );
    }
  }]);

  return Profile;
}(React.Component);

var editInterests = function editInterests(_ref) {
  _objectDestructuringEmpty(_ref);
};

window.Profile = Profile;

/*
<a href="kenneth" onClick={(e) => {e.preventDefault(); this.getBuddyProfileInfo(e);}}>View kenneth's profile</a>
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2ZpbGUuanN4Il0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwcm9wcyIsInN0YXRlIiwiYmlvIiwiYmlvVGl0bGUiLCJiaW9FeGlzdCIsInByb2ZpbGVQaWMiLCJuZXdJbnRlcmVzdCIsImludGVyZXN0cyIsImZyaWVuZHMiLCJyZXF1ZXN0cyIsImVkaXRpbmciLCJidWRkeVByb2ZpbGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImJpbmQiLCJwb3N0UHJvZmlsZUluZm8iLCJnZXRQcm9maWxlSW5mbyIsImdldFVzZXJzIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInZhbHVlIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsInVzZXJuYW1lIiwidXNlciIsInN1Y2Nlc3MiLCJwcm9maWxlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidGhlbiIsImdldFJlcXVlc3RIaXN0b3J5IiwiZnJpZW5kIiwiYWN0aXZhdGVQcm9maWxlVGFiIiwiJHByb2ZpbGVUYWIiLCJjbG9zZXN0Iiwic2libGluZ3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiJHByb2ZpbGVUYWJQYW5lbCIsInByZXZlbnREZWZhdWx0IiwicHJvZmlsZUVkaXRCdXR0b24iLCJfIiwiaXNFbXB0eSIsInRvZ2dsZUVkaXQiLCJhZGRJbnRlcmVzdEZvcm0iLCJpbnRlcmVzdHNMaXN0IiwicG9zdEludGVyZXN0IiwibGVuZ3RoIiwibWFwIiwiaW50ZXJlc3QiLCJpIiwicmVxdWVzdHNMaXN0IiwicmVxdWVzdCIsInBvc3RUaXRsZSIsInBvc3REYXRlVGltZSIsImdlbmRlciIsInppcENvZGUiLCJhY3Rpdml0eVZlcmIiLCJhY3Rpdml0eU5vdW4iLCJ1cGRhdGVkSW50ZXJlc3RzIiwiZnJpZW5kVXNlcm5hbWUiLCJjdXJyVXNlcm5hbWUiLCJjb252byIsImNvbnZlcnNhdGlvbnMiLCJmaW5kIiwicGFydGljaXBhbnRzIiwiaW5jbHVkZXMiLCJoYW5kbGVDb252b0NsaWNrIiwiY3JlYXRlRW1wdHlDb252byIsImhhbmRsZUNyZWF0ZUVtcHR5Q29udm8iLCJyZXZlcnNlIiwiZnJpZW5kTGlzdCIsIm5ld0ZyaWVuZCIsInVzZXJzIiwiQmxvb2Rob3VuZCIsImRhdHVtVG9rZW5pemVyIiwidG9rZW5pemVycyIsIndoaXRlc3BhY2UiLCJxdWVyeVRva2VuaXplciIsImxvY2FsIiwidHlwZWFoZWFkIiwiaGludCIsImhpZ2hsaWdodCIsIm1pbkxlbmd0aCIsInNvdXJjZSIsIm5ld0ZyaWVuZEZvcm0iLCJhZGRGcmllbmQiLCJub2RlIiwiaGFuZGxlQnVkZHlDbGljayIsImdldEJ1ZGR5UHJvZmlsZUluZm8iLCJiYWNrVG9Pd25Qcm9maWxlQnV0dG9uIiwiY2xlYXJCdWRkeVByb2ZpbGUiLCJzaG93UHJvZmlsZUVkaXQiLCJzaG93UHJvZmlsZVZpZXciLCJidWRkeVZpZXciLCJzaG93QnVkZHlWaWV3IiwicmVuZGVyQmFja1RvT3duUHJvZmlsZUJ1dHRvbiIsInJlbmRlckludGVyZXN0c1BhbmUiLCJyZW5kZXJQcmV2aW91c1JlcXVlc3RzUGFuZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZWRpdEludGVyZXN0cyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7SUFHTUEsTzs7O0FBQ0osbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFdBQUssRUFETTtBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLGdCQUFVLEtBSEM7QUFJWEMsa0JBQVksRUFKRDtBQUtYQyxtQkFBYSxFQUxGO0FBTVhDLGlCQUFXLEVBTkE7QUFPWEMsZUFBUyxFQVBFO0FBUVhDLGdCQUFVLEVBUkM7QUFTWDtBQUNBO0FBQ0FDLGVBQVMsS0FYRTtBQVlYQyxvQkFBYztBQVpILEtBQWI7QUFjQSxVQUFLQyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsT0FBekI7QUFDQSxVQUFLQyxlQUFM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bnRlbnQiOlsiLypcclxuIENvbXBvbmVudCBmb3Igdmlld2luZyB1c2VyIHByb2ZpbGVcclxuICovXHJcbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBiaW86ICcnLFxyXG4gICAgICBiaW9UaXRsZTogJycsXHJcbiAgICAgIGJpb0V4aXN0OiBmYWxzZSxcclxuICAgICAgcHJvZmlsZVBpYzogJycsXHJcbiAgICAgIG5ld0ludGVyZXN0OiAnJyxcclxuICAgICAgaW50ZXJlc3RzOiBbXSxcclxuICAgICAgZnJpZW5kczogW10sXHJcbiAgICAgIHJlcXVlc3RzOiBbXSxcclxuICAgICAgLy8gZnJpZW5kczogcHJvcHMuZnJpZW5kcyxcclxuICAgICAgLy8gaW50ZXJhY3Rpb25zOiBpbnRlcmFjdGlvbnMsXHJcbiAgICAgIGVkaXRpbmc6IGZhbHNlLFxyXG4gICAgICBidWRkeVByb2ZpbGU6IHt9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucG9zdFByb2ZpbGVJbmZvID0gdGhpcy5wb3N0UHJvZmlsZUluZm8uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5nZXRQcm9maWxlSW5mbygpO1xyXG4gICAgdGhpcy5wcm9wcy5nZXRVc2VycygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xyXG4gICAgdmFyIG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvZmlsZUluZm8oKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICcvcHJvZmlsZScsXHJcbiAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICBkYXRhOiB7dXNlcm5hbWU6IHRoaXMucHJvcHMudXNlcn0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHByb2ZpbGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVjaWV2ZWQgcHJvZmlsZSBpbmZvJywgcHJvZmlsZSk7XHJcbiAgICAgICAgaWYgKHByb2ZpbGUuYmlvICYmIHByb2ZpbGUuYmlvVGl0bGUpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBiaW86IHByb2ZpbGUuYmlvLFxyXG4gICAgICAgICAgICBiaW9UaXRsZTogcHJvZmlsZS5iaW9UaXRsZSxcclxuICAgICAgICAgICAgaW50ZXJlc3RzOiBwcm9maWxlLmludGVyZXN0cyxcclxuICAgICAgICAgICAgYmlvRXhpc3Q6IHRydWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0byBzaG93IHByb2ZpbGUnKTtcclxuICAgICAgfVxyXG4gICAgfSkudGhlbigoKSA9PiB0aGlzLmdldFJlcXVlc3RIaXN0b3J5KCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QnVkZHlQcm9maWxlSW5mbyhmcmllbmQpIHtcclxuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZXZlbnQgdGFyZ2V0JywgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcclxuICAgIC8vIGxldCBidWRkeU5hbWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICcvcHJvZmlsZS8nICsgZnJpZW5kLFxyXG4gICAgICB0eXBlOiAnR0VUJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oYnVkZHlQcm9maWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY2lldmVkIGJ1ZGR5IHByb2ZpbGUgaW5mbycsIGJ1ZGR5UHJvZmlsZSk7XHJcbiAgICAgICAgLy8gaWYgKGJ1ZGR5UHJvZmlsZS5iaW8gJiYgYnVkZHlQcm9maWxlLmJpb1RpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBidWRkeVByb2ZpbGU6IGJ1ZGR5UHJvZmlsZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2YXRlUHJvZmlsZVRhYigpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0byBzaG93IGJ1ZGR5IHByb2ZpbGUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZVByb2ZpbGVUYWIoKSB7XHJcbiAgICBsZXQgJHByb2ZpbGVUYWIgPSAkKCcjcHJvZmlsZS10YWItcGFuZXMgLm5hdi10YWJzIGFbaHJlZj1cIiNwcm9maWxlXCJdJykuY2xvc2VzdCgnbGknKTtcclxuICAgICRwcm9maWxlVGFiLnNpYmxpbmdzKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICRwcm9maWxlVGFiLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIGxldCAkcHJvZmlsZVRhYlBhbmVsID0gJCgnI3Byb2ZpbGUtdGFiLXBhbmVzIC50YWItY29udGVudCBkaXYjcHJvZmlsZScpO1xyXG4gICAgJHByb2ZpbGVUYWJQYW5lbC5zaWJsaW5ncygnZGl2JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJHByb2ZpbGVUYWJQYW5lbC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICBjbGVhckJ1ZGR5UHJvZmlsZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBidWRkeVByb2ZpbGU6IHt9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFJlcXVlc3RIaXN0b3J5KCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiAnL3JlcXVlc3RzJyxcclxuICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcXVlc3RzKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlY2lldmVkIHJlcXVlc3RzIGluZm8nLCByZXF1ZXN0cyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICByZXF1ZXN0czogcmVxdWVzdHNcclxuICAgICAgICB9KTtcclxuICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0byByZXRyaWV2ZSByZXF1ZXN0cycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBvc3RQcm9maWxlSW5mbygpIHtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJy9wcm9maWxlJyxcclxuICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMucHJvcHMudXNlcixcclxuICAgICAgICBiaW9UaXRsZTogdGhpcy5zdGF0ZS5iaW9UaXRsZSxcclxuICAgICAgICBiaW86IHRoaXMuc3RhdGUuYmlvXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vZGF0YVR5cGU6IGRhdGFUeXBlLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihwcm9maWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY2lldmVkIGFuIHVwZGF0ZSBmb3IgcHJvZmlsZSBpbmZvJywgcHJvZmlsZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBiaW86IHByb2ZpbGUuYmlvLFxyXG4gICAgICAgICAgYmlvVGl0bGU6IHByb2ZpbGUuYmlvVGl0bGUsXHJcbiAgICAgICAgICBiaW9FeGlzdDogdHJ1ZSxcclxuICAgICAgICAgIGVkaXRpbmc6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgdG8gc2hvdyBwcm9maWxlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRWRpdCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRpbmc6ICF0aGlzLnN0YXRlLmVkaXRpbmd9KTtcclxuICB9XHJcblxyXG4gIHNob3dQcm9maWxlRWRpdCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxyXG4gICAgICAgIDxoMz5TYXkgc29tZXRoaW5nIGFib3V0IHlvdXJzZWxmPC9oMz5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub3VuXCI+UHJvZmlsZSB0aXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmlvVGl0bGV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgcXVpY2sgdGl0bGUgYWJvdXQgeW91ciBiaW9cIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJiaW9UaXRsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm91blwiPlVzZXIgYmlvPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iaW99XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBhIGJyaWVmIGRlc2NyaXB0aW9uIGFib3V0IHlvdXJzZWxmXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiYmlvXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS1vZmZzZXQtMiBjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0UHJvZmlsZUluZm8oKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2hvd1Byb2ZpbGVWaWV3KCkge1xyXG4gICAgbGV0IGJ1ZGR5UHJvZmlsZSA9IHRoaXMuc3RhdGUuYnVkZHlQcm9maWxlO1xyXG4gICAgbGV0IHByb2ZpbGVFZGl0QnV0dG9uID0gbnVsbDtcclxuICAgIGxldCBiaW9UaXRsZSA9IG51bGw7XHJcbiAgICBsZXQgYmlvID0gbnVsbDtcclxuXHJcbiAgICBpZihfLmlzRW1wdHkoYnVkZHlQcm9maWxlKSkge1xyXG4gICAgICBwcm9maWxlRWRpdEJ1dHRvbiA9IDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvZmlsZS1lZGl0LWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGVFZGl0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPkVkaXQ8L2J1dHRvbj47XHJcbiAgICAgIGJpb1RpdGxlID0gdGhpcy5zdGF0ZS5iaW9UaXRsZTtcclxuICAgICAgYmlvID0gdGhpcy5zdGF0ZS5iaW87XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBiaW9UaXRsZSA9IGJ1ZGR5UHJvZmlsZS5iaW9UaXRsZSB8fCAnTm8gQmlvIFRpdGxlJztcclxuICAgICAgYmlvID0gYnVkZHlQcm9maWxlLmJpbyB8fCAnTm8gQmlvIEFkZGVkJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cclxuICAgICAgICB7cHJvZmlsZUVkaXRCdXR0b259XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC13YXJuaW5nXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj48aDQ+e2Jpb1RpdGxlfTwvaDQ+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgPHA+e2Jpb308L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySW50ZXJlc3RzUGFuZSgpIHtcclxuICAgIGxldCBidWRkeVByb2ZpbGUgPSB0aGlzLnN0YXRlLmJ1ZGR5UHJvZmlsZTtcclxuICAgIGxldCBpbnRlcmVzdHMgPSBudWxsO1xyXG4gICAgbGV0IGFkZEludGVyZXN0Rm9ybSA9IG51bGw7XHJcbiAgICBsZXQgaW50ZXJlc3RzTGlzdDtcclxuXHJcbiAgICBpZihfLmlzRW1wdHkoYnVkZHlQcm9maWxlKSkge1xyXG4gICAgICBpbnRlcmVzdHMgPSB0aGlzLnN0YXRlLmludGVyZXN0cztcclxuICAgICAgYWRkSW50ZXJlc3RGb3JtID0gPGZvcm1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFkZC1pbnRlcmVzdC1mb3JtIGZvcm0taW5saW5lXCJcclxuICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdEludGVyZXN0KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cIm5ld0ludGVyZXN0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibmV3SW50ZXJlc3RcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIE5ldyBJbnRlcmVzdFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3SW50ZXJlc3R9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiXHJcbiAgICAgICAgICA+QWRkPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGludGVyZXN0cyA9IGJ1ZGR5UHJvZmlsZS5pbnRlcmVzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoaW50ZXJlc3RzLmxlbmd0aCkge1xyXG4gICAgICBpbnRlcmVzdHNMaXN0ID0gaW50ZXJlc3RzLm1hcCgoaW50ZXJlc3QsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+e2ludGVyZXN0fTwvbGk+O1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGludGVyZXN0c0xpc3QgPSA8bGk+Tm8gaW50ZXJlc3RzIGFkZGVkIHlldDwvbGk+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7aW50ZXJlc3RzTGlzdH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgICAge2FkZEludGVyZXN0Rm9ybX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyUHJldmlvdXNSZXF1ZXN0c1BhbmUoKSB7XHJcbiAgICBsZXQgYnVkZHlQcm9maWxlID0gdGhpcy5zdGF0ZS5idWRkeVByb2ZpbGU7XHJcbiAgICBsZXQgcmVxdWVzdHMgPSBudWxsO1xyXG4gICAgbGV0IHJlcXVlc3RzTGlzdDtcclxuXHJcbiAgICBpZihfLmlzRW1wdHkoYnVkZHlQcm9maWxlKSkge1xyXG4gICAgICByZXF1ZXN0cyA9IHRoaXMuc3RhdGUucmVxdWVzdHM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXF1ZXN0cyA9IGJ1ZGR5UHJvZmlsZS5yZXF1ZXN0cztcclxuICAgIH1cclxuXHJcbiAgICBpZihyZXF1ZXN0cyAmJiByZXF1ZXN0cy5sZW5ndGgpIHtcclxuICAgICAgcmVxdWVzdHNMaXN0ID0gcmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8dGQ+e3JlcXVlc3QucG9zdFRpdGxlfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57cmVxdWVzdC5wb3N0RGF0ZVRpbWV9PC90ZD5cclxuICAgICAgICAgICAgPHRkPntyZXF1ZXN0LmdlbmRlcn08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3JlcXVlc3QuemlwQ29kZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3JlcXVlc3QuYWN0aXZpdHlWZXJifTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57cmVxdWVzdC5hY3Rpdml0eU5vdW59PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXF1ZXN0c0xpc3QgPSA8dHI+PHRkIGNvbFNwYW49XCI2XCI+Tm8gcmVxdWVzdHMgYWRkZWQgeWV0PC90ZD48L3RyPjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPlRpdGxlPC90aD5cclxuICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+R2VuZGVyPC90aD5cclxuICAgICAgICAgICAgPHRoPlppcENvZGU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+TWluIEFnZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5NYXggQWdlPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7cmVxdWVzdHNMaXN0fVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcG9zdEludGVyZXN0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2ludGVyZXN0IGJlZm9yZSBzZW5kaW5nJywgdGhpcy5zdGF0ZS5uZXdJbnRlcmVzdCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6ICcvaW50ZXJlc3RzJyxcclxuICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaW50ZXJlc3Q6IHRoaXMuc3RhdGUubmV3SW50ZXJlc3RcclxuICAgICAgfSxcclxuICAgICAgLy9kYXRhVHlwZTogZGF0YVR5cGUsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHVwZGF0ZWRJbnRlcmVzdHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVjaWV2ZWQgdXBkYXRlZCBpbnRlcmVzdHMnLCB1cGRhdGVkSW50ZXJlc3RzKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGludGVyZXN0czogdXBkYXRlZEludGVyZXN0cyxcclxuICAgICAgICAgIG5ld0ludGVyZXN0OiAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZmFpbGVkIHRvIHJldHJpZXZlIGludGVyZXN0cycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUJ1ZGR5Q2xpY2soZnJpZW5kVXNlcm5hbWUpIHtcclxuICAgIGxldCBjdXJyVXNlcm5hbWUgPSB0aGlzLnByb3BzLnVzZXI7XHJcbiAgICAvLyBvbiBidWRkeSBjbGljaywgZ28gdG8gY2hhdCBsb2cgYmV0d2VlbiB1c2VyIGFuZCB0aGUgYnVkZHkgY2xpY2tlZFxyXG4gICAgbGV0IGNvbnZvID0gdGhpcy5wcm9wcy5jb252ZXJzYXRpb25zLmZpbmQoY29udm8gPT4ge1xyXG4gICAgICByZXR1cm4gY29udm8ucGFydGljaXBhbnRzLmluY2x1ZGVzKGZyaWVuZFVzZXJuYW1lLCBjdXJyVXNlcm5hbWUpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBpZiBhIGNvbnZvIGJldHdlZW4gdXNlcnMgYWxyZWFkeSBleGlzdHNcclxuICAgIGNvbnZvID8gdGhpcy5wcm9wcy5oYW5kbGVDb252b0NsaWNrKGNvbnZvKSAvKmVzbGludC1kaXNhYmxlIGluZGVudCovXHJcbiAgICAvLyBpZiBjb252byBkb2VzIG5vdCB5ZXQgZXhpc3QgKGNhc2U6IHVzZXIgYWRkcyBmcmllbmQgYmVmb3JlIGV2ZXIgY2hhdHRpbmcpIC0tIHByZXZlbnRzIGFuIGVycm9yIGZyb20gb2N1cnJpbmdcclxuICAgIDogdGhpcy5wcm9wcy5jcmVhdGVFbXB0eUNvbnZvKGZyaWVuZFVzZXJuYW1lKVxyXG4gICAgLnRoZW4oY29udm8gPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmhhbmRsZUNyZWF0ZUVtcHR5Q29udm8oY29udm8pO1xyXG4gICAgfSk7XHJcbiAgfSAvKmVzbGludC1lbmFibGUgaW5kZW50Ki9cclxuXHJcbiAgc2hvd0J1ZGR5VmlldygpIHtcclxuICAgIC8vIGxldCBmcmllbmRzID0gdGhpcy5wcm9wcy5mcmllbmRzLnJldmVyc2UoKTtcclxuICAgIGxldCBmcmllbmRzID0gWy4uLnRoaXMucHJvcHMuZnJpZW5kc10ucmV2ZXJzZSgpO1xyXG4gICAgbGV0IGZyaWVuZExpc3Q7XHJcbiAgICAvLyBmb3IgYWRkaW5nIGZyaWVuZHM6XHJcbiAgICBsZXQgbmV3RnJpZW5kO1xyXG4gICAgdmFyIHVzZXJzID0gdGhpcy5wcm9wcy51c2VycztcclxuICAgIHZhciB1c2VycyA9IG5ldyBCbG9vZGhvdW5kKHtcclxuICAgICAgZGF0dW1Ub2tlbml6ZXI6IEJsb29kaG91bmQudG9rZW5pemVycy53aGl0ZXNwYWNlLFxyXG4gICAgICBxdWVyeVRva2VuaXplcjogQmxvb2Rob3VuZC50b2tlbml6ZXJzLndoaXRlc3BhY2UsXHJcbiAgICAgIGxvY2FsOiB1c2Vyc1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6aW5nIHRoZSB0eXBlYWhlYWRcclxuICAgICQoJy50eXBlYWhlYWQnKS50eXBlYWhlYWQoe1xyXG4gICAgICBoaW50OiBmYWxzZSxcclxuICAgICAgaGlnaGxpZ2h0OiB0cnVlLCAvKiBFbmFibGUgc3Vic3RyaW5nIGhpZ2hsaWdodGluZyAqL1xyXG4gICAgICBtaW5MZW5ndGg6IDEgLyogU3BlY2lmeSBtaW5pbXVtIGNoYXJhY3RlcnMgcmVxdWlyZWQgZm9yIHNob3dpbmcgcmVzdWx0ICovXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAndXNlcnMnLFxyXG4gICAgICBzb3VyY2U6IHVzZXJzXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IG5ld0ZyaWVuZEZvcm0gPSAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiXHJcbiAgICAgICAgICBvblN1Ym1pdD17ZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcHJvcHMuYWRkRnJpZW5kKG5ld0ZyaWVuZC52YWx1ZSk7XHJcbiAgICAgICAgICAgICQoJy50eXBlYWhlYWQnKS50eXBlYWhlYWQoJ3ZhbCcsICcnKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidHlwZWFoZWFkIHR0LXF1ZXJ5IGZvcm0tY29udHJvbFwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiIHNwZWxsQ2hlY2s9XCJmYWxzZVwiIHBsYWNlaG9sZGVyPVwiQWRkIGEgYnVkZHkuLi5cIiByZWY9e25vZGUgPT4gbmV3RnJpZW5kID0gbm9kZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgaWYgKGZyaWVuZHMubGVuZ3RoKSB7XHJcbiAgICAgIGZyaWVuZExpc3QgPSAoKCkgPT4gZnJpZW5kcy5tYXAoKGZyaWVuZCwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwicm93XCIgbmFtZT1cImJ1ZGR5LXJvd1wiPlxyXG4gICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0zXCI+PGltZyBjbGFzc05hbWU9XCJmcmllbmRMaXN0UGljXCIgc3JjPVwiI1wiIC8+XHJcbiAgICAgICAgICAgICAgUGljXHJcbiAgICAgICAgICAgIDwvZGl2PiovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IGZyaWVuZC1uYW1lXCI+e2ZyaWVuZH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtM1wiPlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQnVkZHlDbGljayhmcmllbmQpfT5DaGF0PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtM1wiPlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHRoaXMuZ2V0QnVkZHlQcm9maWxlSW5mbyhmcmllbmQpfT5WaWV3IFByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSkpKCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZnJpZW5kTGlzdCA9ICgoKSA9PiA8aDY+QWRkIGEgYnVkZHkgdG8gc3RhcnQgY2hhdHRpbmchPC9oNj4pKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC13YXJuaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+PGg0PkNoYXQgd2l0aCBidWRkaWVzOjwvaDQ+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICB7bmV3RnJpZW5kRm9ybX1cclxuICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAge2ZyaWVuZExpc3R9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckJhY2tUb093blByb2ZpbGVCdXR0b24oKSB7XHJcbiAgICBsZXQgYnVkZHlQcm9maWxlID0gdGhpcy5zdGF0ZS5idWRkeVByb2ZpbGU7XHJcbiAgICBsZXQgYmFja1RvT3duUHJvZmlsZUJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgaWYoIV8uaXNFbXB0eShidWRkeVByb2ZpbGUpKSB7XHJcbiAgICAgIGJhY2tUb093blByb2ZpbGVCdXR0b24gPSA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xlYXJCdWRkeVByb2ZpbGUoKX0+QmFjayB0byBteSBQcm9maWxlPC9idXR0b24+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJhY2tUb093blByb2ZpbGVCdXR0b247XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgcHJvZmlsZTtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5iaW9FeGlzdCB8fCB0aGlzLnN0YXRlLmVkaXRpbmcpIHtcclxuICAgICAgcHJvZmlsZSA9IHRoaXMuc2hvd1Byb2ZpbGVFZGl0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9maWxlID0gdGhpcy5zaG93UHJvZmlsZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYnVkZHlWaWV3O1xyXG4gICAgaWYoXy5pc0VtcHR5KHRoaXMuc3RhdGUuYnVkZHlQcm9maWxlKSkge1xyXG4gICAgICBidWRkeVZpZXcgPSB0aGlzLnNob3dCdWRkeVZpZXcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1ZGR5VmlldyA9ICdTb3JyeS4gWW91IGNhbm5vdCB2aWV3IGJ1ZGRpZXMgb2YgeW91ciBidWRkaWVzLic7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cInByb2ZpbGUtdGFiLXBhbmVzXCI+XHJcbiAgICAgICAge3RoaXMucmVuZGVyQmFja1RvT3duUHJvZmlsZUJ1dHRvbigpfVxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgICAgICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9maWxlXCIgYXJpYS1jb250cm9scz1cInByb2ZpbGVcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5Qcm9maWxlPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjaW50ZXJlc3RzXCIgYXJpYS1jb250cm9scz1cImludGVyZXN0c1wiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkludGVyZXN0czwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI3JlcXVlc3RzXCIgYXJpYS1jb250cm9scz1cInJlcXVlc3RzXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+QWN0aXZpdHkgSGlzdG9yeTwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI2ZyaWVuZHNcIiBhcmlhLWNvbnRyb2xzPVwiZnJpZW5kc1wiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkJ1ZGRpZXM8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzc05hbWU9XCJ0YWItcGFuZSBhY3RpdmVcIiBpZD1cInByb2ZpbGVcIj5cclxuICAgICAgICAgICAge3Byb2ZpbGV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3NOYW1lPVwidGFiLXBhbmVcIiBpZD1cImludGVyZXN0c1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnRlcmVzdHNQYW5lKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3NOYW1lPVwidGFiLXBhbmVcIiBpZD1cInJlcXVlc3RzXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclByZXZpb3VzUmVxdWVzdHNQYW5lKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3NOYW1lPVwidGFiLXBhbmVcIiBpZD1cImZyaWVuZHNcIj5cclxuICAgICAgICAgICAge2J1ZGR5Vmlld31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBlZGl0SW50ZXJlc3RzID0gKHt9KSA9PiB7XHJcblxyXG59O1xyXG5cclxuXHJcblxyXG53aW5kb3cuUHJvZmlsZSA9IFByb2ZpbGU7XHJcblxyXG4vKlxyXG48YSBocmVmPVwia2VubmV0aFwiIG9uQ2xpY2s9eyhlKSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLmdldEJ1ZGR5UHJvZmlsZUluZm8oZSk7fX0+VmlldyBrZW5uZXRoJ3MgcHJvZmlsZTwvYT5cclxuKi9cclxuIl19