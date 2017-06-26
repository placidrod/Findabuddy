class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
        <Nav />
        <div className="dynamicContent">

          <DynamicContent
            

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