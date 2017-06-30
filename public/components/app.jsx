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
        renderResults: false,
        renderPost: false
      }
    };
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

  handleSelectSearch() {
    // this.setState({
    //   selectSearch: true
    // });
    this.setState({
      render: {
        selectSearch: true,
        selectRequest: false,
        selectProfile: false,
        renderResults: false,
        renderPost: false
      }
    });
  }

  handleSelectRequest() {
    // this.setState({
    //   selectSearch: false
    // });
    this.setState({
      render: {
        selectSearch: false,
        selectRequest: true,
        renderResults: false,
        selectProfile: false,
        renderPost: false
      }
    });
  }

  handleSelectProfile() {
    this.setState({
      render: {
        selectSearch: false,
        selectRequest: false,
        selectProfile: true,
        renderResults: false,
        renderPost: false
      }
    });
  }

  handleSelectPost() {
    this.setState({
      render: {
        selectSearch: false,
        selectRequest: false,
        selectProfile: false,
        renderResults: false,
        renderPost: true
      }
    });
  }

  handleResults() {
    this.setState({
      render: {
        selectSearch: false,
        selectRequest: false,
        selectProfile: false,
        renderResults: true,
        renderPost: false
      }
    });
  }

  handleViewRequest() {

  }

  requestFormHandler() {
  }

  profileHandler() {

  }

  logoutHandler() {

  }

  render() {
    return (
      <div className="mainApp">
        <Nav handleSelectSearch={this.handleSelectSearch.bind(this)}
            handleSelectRequest={this.handleSelectRequest.bind(this)}
            handleSelectProfile={this.handleSelectProfile.bind(this)}
            user={this.state.userName}
            />
        <div className="dynamicContent col-md-9">

          <DynamicContent
            user={this.state.userName}
            render={this.state.render}
            showResults={this.handleResults.bind(this)}
            showPost={this.handleSelectPost.bind(this)}
          />

        </div>
        <div className="notificationWindow col-md-3">
          <Notifications
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