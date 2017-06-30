class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
    this.username = this.props.username;
    this.handleClick = this.handleClick.bind(this);
    this.getNotifications = this.getNotifications.bind(this);
    setTimeout(this.getNotifications, 3000);
  }

  handleClick(notification) {
    console.log('clicked, need to render the message in dynamic content');
    console.log('notification:', notification);
  }

  getNotifications() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/message',
      data: this.username || 'testName',
      success: function(messages) {
        this.setState({
          notifications: messages
        });
        console.log(messages);
      }.bind(this),
      error: function(err) {
        console.log('Couldn\'t get notifications:', err)
      }
    });
    setTimeout(this.getNotifications, 3000);
  }

  render() {
    return(
      <div className="noitifications">
        <h2>Notifications</h2>
        <aside>
          {this.state.notifications.map(notification => {
            console.log('notification:', notification);
            return <NotificationMessage key={notification._id} notification={notification} handleClick={this.handleClick} />
          })}
        </aside>
      </div>
    );
  }
}

window.Notifications = Notifications;
