class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: '',
      sender: this.props.username,
      message: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
   handleSend = this.handleSend.bind(this);
  }

  handleInputChange(event) {
    var name = event.target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  handleSend() {
    event.preventDefault();
    if (this.state.message === '') {
      console.log('Please type a message');
    } else if (this.state.recipient === '') {
      console.log('Please choose a recipient');
    } else {
      $.ajax({
        url: 'http://localhost:3000/message',
        type: 'POST',
        data: this.state,
        //dataType: dataType,
        success: function() {
          console.log('success');

          this.setState({
            recipient: '',
            sender: this.props.username,
            message: ''
          });
        }.bind(this),
        error: function(err) {
          console.log('failed to post message', err);
        }
      });
    }
  }

  render() {
    return (
      <form className="form-horizon">
        <h2>Send a Message</h2>
        <div className="form-group">
          <input type="text" value={this.state.recipient}
          className="form-control" placeholder="Enter a recipient" name="recipient" onChange={(e) => handleInputChange(e)}/>
        </div>

        <div className="form-group">
          <textarea type="text" value={this.state.message} className="form-control" rows="3" placeholder="Let the person know you're interested in the activity" name="message" onChange={(e) => this.handleInputChange(e)}></textarea>
        </div>
        <button type="submit" className="btn btn-default" onClick={() => this.handleSend()}>Send</button>
      </form>
    );
  }
}

window.SendMessage = SendMessage;
