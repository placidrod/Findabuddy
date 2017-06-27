class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSearch: true
    };
  }

  handleSelectSearch() {
    this.setState({
      selectSearch: true
    });
  }

  handleSelectRequest() {
    this.setState({
      selectSearch: false
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
            />
        <div className="dynamicContent">

          <DynamicContent
            renderSearch={this.state.selectSearch}

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