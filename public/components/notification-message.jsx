var NotificationMessage = ({notification, handleClick}) => (
  <div className="notificationMessage" onClick={() => handleClick(notification)}>
    <div className="notificationSender">{notification.sender}</div>
    <p>
      {
        notification.text === undefined ? '' :
          (notification.text.length > 20 ? notification.text.slice(0, 20) + '...' : notification.text)
      }
    </p>
  </div>
);

window.NotificationMessage = NotificationMessage;
