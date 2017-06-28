class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   selectSearch: true
    // };
    this.state = {
      render: {
        selectSearch: true,
        selectRequest: false,
        selectProfile: false
      }
    };
  }

  handleSelectSearch() {
    // this.setState({
    //   selectSearch: true
    // });
    this.setState({
      render: {
        selectSearch: true,
        selectRequest: false,
        selectProfile: false
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
        selectProfile: false
      }
    });
  }

  handleSelectProfile() {
    this.setState({
      render: {
        selectSearch: false,
        selectRequest: false,
        selectProfile: true
      }
    });
  }

  searchHandler() {

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
            />
        <div className="dynamicContent">

          <DynamicContent
            render={this.state.render}

          />

        </div>
        <div className="notificationWindow">

        </div>
      </div>
    );
  }

}


ReactDOM.render(
  <App />, document.getElementById('app')
);