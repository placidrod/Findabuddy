class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: props.messages,
      recipient: ''
    };
    this.username = this.props.username;
    this.handleMessageClick = this.handleMessageClick.bind(this);
  }

  handleMessageClick(recipient){
    this.setState({
      recipient: recipient
    });
  };

  render(){
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
                messages.map((message) =>
                  <Message
                    result={message}
                    handlePostClick={handleMessageClick}
                    key={message._id}
                  />
              )}
            </tbody>
      </table>
      <Send-Message recipient={this.state.recipient} sender={'testSender'}/>
    </div>
  };
}

window.MessageList = MessageList;
