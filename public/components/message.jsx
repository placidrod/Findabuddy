var Message = ({message, handleMessageClick}) => (
 <tr onClick={() => handleMessageClick(message)} className="row-select">
  <td>{message.sender}</td>
  <td>{message.message}</td>
 </tr>
);

window.Message = Message;
