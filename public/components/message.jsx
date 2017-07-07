/*
 Component for displaying messages
 */

var Message = ({user, convo, handleMessageClick}) => (
  <tr onClick={() => handleMessageClick(message)} className="row-select">
    <td>{(convo.participants[0] === user) ? convo.participants[1] : convo.participants[0]}</td>
    <td>{convo.messages[convo.messages.length - 1].sender}: {convo.messages[convo.messages.length - 1].text}</td>
  </tr>
);

window.Message = Message;
