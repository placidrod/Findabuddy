class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: this.props.messages,
      recipient: ''
    };
    this.handleMessageClick = this.handleMessageClick.bind(this);
  }

  componentDidMount () {
    if (this.props.selectedNotification.sender) {
      this.setState({
        recipient: this.props.selectedNotification.sender
      });
    }
    //Perform ajax put request
  }

  handleMessageClick(recipient){
    this.setState({
      recipient: recipient
    });
  };

  render(){
    return (
      <div className="messageList">
        <table className="table table-striped">
              <thead>
              <tr>
                <th>Sender</th>
                <th>Message</th>
              </tr>
              </thead>
              <tbody>
                {
                  this.state.messages.map((message) =>
                    <Message
                      message={message}
                      handleMessageClick={this.handleMessageClick}
                      key={message._id}
                    />
                )}
              </tbody>
        </table>
        <SendMessage recipient={this.state.recipient} sender={this.props.user}/>
      </div>
    );
  };
}

window.MessageList = MessageList;
