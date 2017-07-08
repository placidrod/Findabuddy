/*
  Top level component for application
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.socket = io();
    this.state = {
      userName: '',
      render: {
        browseRequests: false,
        selectSearch: false,
        selectRequest: false,
        selectProfile: false,
        selectMessages: false,
        renderResults: false,
        renderPost: false,
        chat:false,
        map: true
      },
      selectedNotification: {},
      conversations: [],
      requests: [],
      users: [],
      friends: [],
      prevIdx: -1
    };
    this.getMessages = this.getMessages.bind(this);
    this.handleNotificationSelect = this.handleNotificationSelect.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleInfoClose = this.handleInfoClose.bind(this);


  }

  //grab logged in user after session is authenticated
  componentDidMount() {
    var self = this;

    $.ajax({
      url: '/user',
      type: 'GET',
      success: function(user) {
        self.socket.emit('user', user);
        self.setState(() => ({userName: user}));
      }
    }) /*eslint-disable indent*/
    .then(() => this.getRequests())
    .then(() => this.getMessages())
    .then(() => this.getFriends())
    .then(() => this.getUsers())
    // .then(() => this.getInterests())
    .fail(function(err) {
      console.log('ERROR', err);
    });
  } /* eslint-enable indent*/

  //helper function
  getMessages() {
    $.ajax({
      type: 'GET',
      url: '/message',
      success: function(convos) {
        this.setState({
          conversations: convos
        });
      }.bind(this),
      error: function(err) {
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

  getRequests() {
    $.ajax({
      type: 'GET',
      url: '/buddyRequest',
      success: (requests) => {
        console.log(requests);
        this.setState({
          requests: requests
        });
      }
    });
  }

  getUsers() {
    if (this.state.userName.length) {
      $.ajax({
        type: 'GET',
        url: '/users',
        success: (res) => {
          var users = [];
          for (var i = 0; i < res.length; i++) {
            users.push(res[i].username)
          }
          this.setState({
            users: users
          });
          console.log(this.state)
        },
        error: (err) => {
          console.log('Couldn\'t get users:', err);
        }
      });
    }
  }

  getFriends() {
    if (this.state.userName.length) {
      $.ajax({
        type: 'GET',
        url: '/friends',
        success: (res) => {
          this.setState({
            friends: res.friends
          });
        },
        error: (err) => {
          console.log('Couldn\'t get friends:', err);
        }
      });
    }
  }

  addFriend(friend) {
    //if (this.state.userName.length) {
      $.ajax({
        type: 'POST',
        url: '/friends',
        data: {username: friend},
        success: (res) => {
          this.setState({
            friends: res
          });
        },
        error: (err) => {
          console.log('Couldn\'t add Friend:', err)
        }
      })
    //}
  }

  handleNotificationSelect(notification) {
    this.setState({
      selectedNotification: notification
    });
  }

  handleMarkerClick(idx) {
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

    })
  }

  handleInfoClose(idx) {
    console.log('this ===',this);
    var requests = this.state.requests;
    requests[idx].showInfo = false;

    this.setState({
      requests: requests,
      prevIdx: -1
    });

  }

  handleMessagClick() {

  }

  //When a link in the navbar is clicked its render state is set to true
  //and all other render states are to false
  //If the event flag is set then the link is being pulled from an on click event
  handleSelect(e, eventFlag) {
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
    if ((errorFlag === true) && (eventFlag === true)) {
      console.error('Received ', e, ' with eventFlag set to true. The on click event that called handleSelect does not have a name property.');
    } else if ((errorFlag === true) && (!eventFlag)) {
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
    this.setState((prevState) => {
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

  render() {
    return (
      <div className="mainApp">
        <Nav
          handleSelect={this.handleSelect}
          user={this.state.userName}
          messages={this.state.conversations}
          handleNotificationSelect={this.handleNotificationSelect}
          users={this.state.users}
          friends={this.state.friends}
          addFriend={this.addFriend.bind(this)}
        />
        <div className="dynamicContent col-md-9">
          <DynamicContent
            handleNotificationSelect={this.handleNotificationSelect}
            render={this.state.render}
            handleSelect={this.handleSelect}
            handleMessagClick={this.handleMessagClick}
            handleMarkerClick={this.handleMarkerClick}
            handleInfoClose={this.handleInfoClose}
            user={this.state.userName}
            selectedNotification={this.state.selectedNotification}
            conversations={this.state.conversations}
            requests={this.state.requests}
            friends={this.state.friends}
            getMessages={this.getMessages}
            socket={this.socket}
          />
        </div>
        <div className="col-md-3">

        </div>
      </div>
    );
  }

}


ReactDOM.render(
  <h1>hello world</h1>, document.getElementById('app')
);

/*<div className="notificationWindow col-md-3">
          <Notifications
            handleNotificationSelect={this.handleNotificationSelect}
            handleSelect={this.handleSelect}
            user={this.state.userName}
            messages={this.state.messages}
          />
        </div>*/
