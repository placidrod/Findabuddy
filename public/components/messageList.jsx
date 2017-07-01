class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recipient: ''
    };
    this.handleMessageClick = this.handleMessageClick.bind(this);
    this.updateMessagesAsRead = this.updateMessagesAsRead.bind(this);
  }

  componentDidMount () {
    var isRead = true;

    if (this.props.selectedNotification.sender) {
      this.setState({
        recipient: this.props.selectedNotification.sender
      });
    }
    for (var i = 0; i < this.props.messages.length; i++) {
      if (this.props.messages[i].read === false) {
        isRead = false;
        break;
      }
    }
    //Prevents the put request from being called if the messages have
      //already been updated as read
    if (isRead === false) {
      this.updateMessagesAsRead();
    }
  }

  //This allows the recipient of the users message to be changed when a notification is clicked
    //while the user is viewing messages
  //https://stackoverflow.com/questions/32414308/updating-state-on-props-change-in-react-form
  componentWillReceiveProps(nextProps) {
    var isRead = true;

    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.selectedNotification.sender !== this.state.recipient) {
      this.setState({ recipient: nextProps.selectedNotification.sender });
    }
    if ((nextProps.messages.length !== this.props.messages.length) ||
      (JSON.stringify(nextProps.messages) !== JSON.stringify(this.props.messages))) {
      for (var i = 0; i < nextProps.messages.length; i++) {
        if (nextProps.messages[i].read === false) {
          isRead = false;
          break;
        }
      }
      //Prevents the put request from being called twice, once because the messages
        //changed and once because the messages read property changed from true to false
      if (isRead === false) {
        this.updateMessagesAsRead();
      }
    }
  }

  handleMessageClick(message){
    this.setState({
      recipient: message.sender
    });
    this.props.handleNotificationSelect(message);
  }

  updateMessagesAsRead(){
    $.ajax({
      type: 'PUT',
      url: 'http://localhost:3000/message/recipient',
      data: {recipient: this.props.user},
      success: function() {
        console.log('PUT request succeeded!')
      }.bind(this),
      error: function(err) {
        console.log('PUT request failed!')
      }
    });
  }

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
  }
}

window.MessageList = MessageList;
