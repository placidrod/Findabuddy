/*
 Component for notifcations area of application, mainly for visibility of new messages.
 */

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
    return (
      <div className="noitifications">
        <div>Notifications</div>
        <div className="divider"></div>
          {this.props.messages.map(notification => {
            if (notification.read === false) {
              return <NotificationMessage key={notification._id} notification={notification} handleClick={this.handleClick} />;
            }
          })}

      </div>
    );
  }
}

window.Notifications = Notifications;
