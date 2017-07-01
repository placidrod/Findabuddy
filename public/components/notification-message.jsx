var NotificationMessage = ({notification, handleClick}) => (
  <div className="notificationMessage" onClick={() => handleClick(notification)}>
    <div className="notificationSender">{notification.sender}</div>
    <p>
      {
        notification.message === undefined ? '' :
          (notification.message.length > 20 ? notification.message.slice(0, 20) + '...' : notification.message)
      }
    </p>
  </div>
);

window.NotificationMessage = NotificationMessage;
