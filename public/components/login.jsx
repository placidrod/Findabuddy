class Login extends React.Component {

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
  submitRequest() {
    $.ajax({
      url: 'http://localhost:3000/login',
      type: 'POST',
      data: this.state,
      dataType: 'json',
    })
      .done(function(data) {
        console.log('data ',data);
        if(data.status === '200') {
          window.location.replace('http://localhost:3000');
        }
      })
      .fail(function(failInfo) {
        console.log('FAIL',failInfo);
        window.location.replace('http://localhost:3000/login');
      });
  }
  goSignup() {
    window.location.replace('http://localhost:3000/signup');

  }
  render() {
    return (
      <div className="panel panel-default col-md-2">
        Login
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
          onClick={() => this.submitRequest()}>Login</button>
        <button className="button col-md-6"
                onClick={() => this.goSignup()}>Signup</button>
      </div>
    );
  }

}


ReactDOM.render(
  <Login />, document.getElementById('login')
);