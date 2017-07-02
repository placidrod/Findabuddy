/*
 Top level component for new user signup
 TODO: also implement password encryption here
 */
class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'username': '',
      'password': ''
    };
  }

  usernameOnChangeHandler(username) {
    //this.setState({'username': event.trigger.
    //console.log('change handler username', username);
    this.setState({ username });
  }
  passwordOnChangeHandler(newVal) {
    //this.setState({'username': event.trigger.
    //console.log('change handler password', newVal);
    this.setState({'password': newVal});
  }
  submitSignup() {
    $.ajax({
      url: '/signup',
      type: 'POST',
      data: this.state,
      dataType: 'json',
    })
      .done(function(data) {
        console.log('signup success ',data);
        if (data.status === '200') {
          window.location.replace('/');
        }
      })
      .fail(function(failInfo) {
        console.log('FAIL',failInfo);
          window.location.replace('/signup');
      });
  }
  goLogin() {
    window.location.replace('/login');
  }
  render() {
    return (
      <div className="panel panel-default col-md-2">
        Signup
        <input
          onChange={(e) => this.usernameOnChangeHandler(e.target.value)}
          className="form-control col-md-2"
          type="text"
        />
        <input
          onChange={(e) => this.passwordOnChangeHandler(e.target.value)}
          type="password"
          className="form-control col-md-2"
        />
        <button className="button col-md-6"
                onClick={() => this.submitSignup()}>Signup</button>
        <button className="button col-md-6"
                onClick={() => this.goLogin()}>Login</button>
      </div>
    );
  }

}


ReactDOM.render(
  <Signup />, document.getElementById('signup')
);