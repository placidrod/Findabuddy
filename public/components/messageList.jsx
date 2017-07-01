class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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

  //This allows the recipient of the users message to be changed when a notification is clicked
    //while the user is viewing messages
  //https://stackoverflow.com/questions/32414308/updating-state-on-props-change-in-react-form
  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.selectedNotification.sender !== this.state.recipient) {
      this.setState({ recipient: nextProps.selectedNotification.sender });
    }
  }

  handleMessageClick(message){
    this.setState({
      recipient: message.sender
    });
    this.props.handleNotificationSelect(message);
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
                  this.props.messages.map((message) =>
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
