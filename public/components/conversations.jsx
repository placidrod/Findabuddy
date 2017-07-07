var Conversations = ({user, conversations, handleMessageClick}) => (

  <div>
    <div className="messageList">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Recipient</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {
            conversations.map((convo) =>
              <Message
                convo={convo}
                user={user}
                handleMessageClick={handleMessageClick}
                key={convo._id}
              />
            )
          }
        </tbody>
      </table>
    </div>
  </div>

);

window.Conversations = Conversations;