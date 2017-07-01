class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.getNotifications = this.getNotifications.bind(this);
  }

  componentDidMount() {
    this.getNotifications();
  }

  handleClick(notification) {
    this.props.handleNotificationSelect(notification);
    this.props.handleSelect('selectMessages');
    //Perform ajax put request
  }

  getNotifications() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/message/recipient',
      data: {recipient: this.props.user},
      success: function(messages) {
        this.setState({
          notifications: messages,
        });
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
            if (notification.read === false) {
              return <NotificationMessage key={notification._id} notification={notification} handleClick={this.handleClick} />
            }
          })}
        </aside>
      </div>
    );
  }
}

window.Notifications = Notifications;
