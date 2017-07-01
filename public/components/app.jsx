class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   selectSearch: true
    // };
    this.state = {
      userName: '',
      render: {
        selectSearch: true,
        selectRequest: false,
        selectProfile: false,
        selectMessages: false,
        renderResults: false,
        renderPost: false
      },
      selectedNotification: {}
    };
    this.handleNotificationSelect = this.handleNotificationSelect.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount(){
    var self = this;

    $.ajax({
      url: 'http://localhost:3000/user',
      type: 'GET'
    })
    .done(function(user) {
      console.log('RESPONSE', user)
      self.setState({
        userName: user
      });
    })
    .fail(function(err) {
      console.log('ERROR', err)
    })
  }

  handleNotificationSelect(notification){
    this.setState({
      selectedNotification: notification
    });
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
      console.error(`Received `, e,` with eventFlag set to true. The on click event that called handleSelect does not have a name property.`);
    } else if ((errorFlag === true) && (!eventFlag)) {
      console.error(`Received`, e,`with eventFlag not set. The invocation of handleSelect did not provide a render link.`);
    } else if (this.state.render.hasOwnProperty(link) === false) {
      console.error(`Received`, e,`; this is not a valid key. Check the render object in App's state. The key is either not there or it has been spelled incorrectly.`);
      errorFlag = true;
    }
    if (errorFlag === true) {
      console.error(`An error has a occurred, the function will return to prevent undefined behavior/cryptic react error message.`);
      console.error(`React's default error message is:\nUncaught Error: DynamicContent.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.`);
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
      }
    });
  }

  render() {
    return (
      <div className="mainApp">
        <Nav
          handleSelect={this.handleSelect}
          user={this.state.userName}
        />
        <div className="dynamicContent col-md-9">
          <DynamicContent
            render={this.state.render}
            handleSelect={this.handleSelect}
            user={this.state.userName}
            selectedNotification={this.state.selectedNotification}
          />
        </div>
        <div className="notificationWindow col-md-3">
          <Notifications
            handleNotificationSelect={this.handleNotificationSelect}
            handleSelect={this.handleSelect}
            user={this.state.userName}
          />
        </div>
      </div>
    );
  }

}


ReactDOM.render(
  <App />, document.getElementById('app')
);