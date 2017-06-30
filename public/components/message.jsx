
var message = ({message, handleMessageClick}) => (
 <tr onClick={() => handleMessageClick(message.sender)} className="row-select">
  <td>message.sender</td>
  <td>message.message</td>
 </tr>
);

window.message = message;
