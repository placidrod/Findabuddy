var Chat = ({message}) => (
  <tr className="row-select">
    <td>{message.sender}</td>
    <td>{message.text}</td>
  </tr>
);

window.Chat = Chat;