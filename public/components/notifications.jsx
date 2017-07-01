class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(notification) {
    this.props.handleNotificationSelect(notification);
    this.props.handleSelect('selectMessages');
  }

  render() {
    return(
      <div className="noitifications">
        <h2>Notifications</h2>
        <aside>
          {this.props.messages.map(notification => {
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
