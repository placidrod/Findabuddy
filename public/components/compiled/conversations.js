"use strict";

var Conversations = function Conversations(_ref) {
  var user = _ref.user,
      conversations = _ref.conversations,
      handleConvoClick = _ref.handleConvoClick;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "messageList" },
      React.createElement(
        "table",
        { className: "table table-striped" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              "Recipient"
            ),
            React.createElement(
              "th",
              null,
              "Preview"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          conversations.map(function (convo) {
            return React.createElement(Message, {
              convo: convo,
              user: user,
              handleConvoClick: handleConvoClick,
              key: convo._id
            });
          })
        )
      )
    )
  );
};

window.Conversations = Conversations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbnZlcnNhdGlvbnMuanN4Il0sIm5hbWVzIjpbIkNvbnZlcnNhdGlvbnMiLCJ1c2VyIiwiY29udmVyc2F0aW9ucyIsImhhbmRsZUNvbnZvQ2xpY2siLCJtYXAiLCJjb252byIsIl9pZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFHQSxJQUFJQSxnQkFBZ0IsU0FBaEJBLGFBQWdCO0FBQUEsTUFBRUMsSUFBRixRQUFFQSxJQUFGO0FBQUEsTUFBUUMsYUFBUixRQUFRQSxhQUFSO0FBQUEsTUFBdUJDLGdCQUF2QixRQUF1QkEsZ0JBQXZCO0FBQUEsU0FFbEI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQU8sV0FBVSxxQkFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFERixTQURGO0FBT0U7QUFBQTtBQUFBO0FBRUlELHdCQUFjRSxHQUFkLENBQWtCLFVBQUNDLEtBQUQ7QUFBQSxtQkFDaEIsb0JBQUMsT0FBRDtBQUNFLHFCQUFPQSxLQURUO0FBRUUsb0JBQU1KLElBRlI7QUFHRSxnQ0FBa0JFLGdCQUhwQjtBQUlFLG1CQUFLRSxNQUFNQztBQUpiLGNBRGdCO0FBQUEsV0FBbEI7QUFGSjtBQVBGO0FBREY7QUFERixHQUZrQjtBQUFBLENBQXBCOztBQTZCQUMsT0FBT1AsYUFBUCxHQUF1QkEsYUFBdkIiLCJmaWxlIjoiY29udmVyc2F0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbnZhciBDb252ZXJzYXRpb25zID0gKHt1c2VyLCBjb252ZXJzYXRpb25zLCBoYW5kbGVDb252b0NsaWNrfSkgPT4gKFxyXG5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlTGlzdFwiPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPlJlY2lwaWVudDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5QcmV2aWV3PC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbnMubWFwKChjb252bykgPT5cclxuICAgICAgICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgY29udm89e2NvbnZvfVxyXG4gICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgIGhhbmRsZUNvbnZvQ2xpY2s9e2hhbmRsZUNvbnZvQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2NvbnZvLl9pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuKTtcclxuXHJcbndpbmRvdy5Db252ZXJzYXRpb25zID0gQ29udmVyc2F0aW9ucztcclxuIl19