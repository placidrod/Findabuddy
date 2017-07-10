/*
 Component for notifcations area of application, mainly for visibility of new messages.
 */

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
    this.notificationList = this.notificationList.bind(this)
  }

  handleClick(notification) {
    this.props.handleNotificationSelect(notification);
    this.props.handleSelect('selectMessages');
  }

  notificationList() {
    //console.log(this.props.messages)
    this.props.messages.map(notification => {
      if (notification.read === false) {
        return <NotificationMessage key={notification._id} notification={this.props.messages} handleClick={this.handleClick} />;
      }
    })
  }

  componentDidUpdate() {
    //console.log(this.props.messages)
    if (this.props.messages.length > 0) {
      this.notificationList = this.props.messages[0].messages.map(notification => {
        //console.log(notification)
        if (notification.read === false) {
          return <NotificationMessage key={notification._id} notification={notification} handleClick={this.handleClick} />;
        }
      })
      //console.log(this.notificationList)
    }
  }

  render() {
    return (
      <div className="noitifications">
        <div className="notificationTitle">Notifications</div>
        <div className="divider"></div>
          {this.notificationList}
      </div>
    );
  }
}

window.Notifications = Notifications;

/*
{this.props.messages.map(notification => {
  console.log(this.props.messages)
  if (notification.read === false) {
    return <NotificationMessage key={notification._id} notification={this.props.messages} handleClick={this.handleClick} />;
  }
})}
*/
