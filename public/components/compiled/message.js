"use strict";

/*
 Component for displaying messages
 */

var Message = function Message(_ref) {
  var user = _ref.user,
      convo = _ref.convo,
      handleConvoClick = _ref.handleConvoClick;
  return React.createElement(
    "tr",
    { onClick: function onClick() {
        return handleConvoClick(convo);
      }, className: "row-select" },
    React.createElement(
      "td",
      null,
      convo.participants[0] === user ? convo.participants[1] : convo.participants[0]
    ),
    React.createElement(
      "td",
      null,
      convo.messages[convo.messages.length - 1].sender,
      ": ",
      convo.messages[convo.messages.length - 1].text
    )
  );
};

window.Message = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21lc3NhZ2UuanN4Il0sIm5hbWVzIjpbIk1lc3NhZ2UiLCJ1c2VyIiwiY29udm8iLCJoYW5kbGVDb252b0NsaWNrIiwicGFydGljaXBhbnRzIiwibWVzc2FnZXMiLCJsZW5ndGgiLCJzZW5kZXIiLCJ0ZXh0Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBSUEsSUFBSUEsVUFBVSxTQUFWQSxPQUFVO0FBQUEsTUFBRUMsSUFBRixRQUFFQSxJQUFGO0FBQUEsTUFBUUMsS0FBUixRQUFRQSxLQUFSO0FBQUEsTUFBZUMsZ0JBQWYsUUFBZUEsZ0JBQWY7QUFBQSxTQUNaO0FBQUE7QUFBQSxNQUFJLFNBQVM7QUFBQSxlQUFNQSxpQkFBaUJELEtBQWpCLENBQU47QUFBQSxPQUFiLEVBQTRDLFdBQVUsWUFBdEQ7QUFDRTtBQUFBO0FBQUE7QUFBTUEsWUFBTUUsWUFBTixDQUFtQixDQUFuQixNQUEwQkgsSUFBM0IsR0FBbUNDLE1BQU1FLFlBQU4sQ0FBbUIsQ0FBbkIsQ0FBbkMsR0FBMkRGLE1BQU1FLFlBQU4sQ0FBbUIsQ0FBbkI7QUFBaEUsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUFLRixZQUFNRyxRQUFOLENBQWVILE1BQU1HLFFBQU4sQ0FBZUMsTUFBZixHQUF3QixDQUF2QyxFQUEwQ0MsTUFBL0M7QUFBQTtBQUF5REwsWUFBTUcsUUFBTixDQUFlSCxNQUFNRyxRQUFOLENBQWVDLE1BQWYsR0FBd0IsQ0FBdkMsRUFBMENFO0FBQW5HO0FBRkYsR0FEWTtBQUFBLENBQWQ7O0FBT0FDLE9BQU9ULE9BQVAsR0FBaUJBLE9BQWpCIiwiZmlsZSI6Im1lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gQ29tcG9uZW50IGZvciBkaXNwbGF5aW5nIG1lc3NhZ2VzXHJcbiAqL1xyXG5cclxudmFyIE1lc3NhZ2UgPSAoe3VzZXIsIGNvbnZvLCBoYW5kbGVDb252b0NsaWNrfSkgPT4gKFxyXG4gIDx0ciBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb252b0NsaWNrKGNvbnZvKX0gY2xhc3NOYW1lPVwicm93LXNlbGVjdFwiPlxyXG4gICAgPHRkPnsoY29udm8ucGFydGljaXBhbnRzWzBdID09PSB1c2VyKSA/IGNvbnZvLnBhcnRpY2lwYW50c1sxXSA6IGNvbnZvLnBhcnRpY2lwYW50c1swXX08L3RkPlxyXG4gICAgPHRkPntjb252by5tZXNzYWdlc1tjb252by5tZXNzYWdlcy5sZW5ndGggLSAxXS5zZW5kZXJ9OiB7Y29udm8ubWVzc2FnZXNbY29udm8ubWVzc2FnZXMubGVuZ3RoIC0gMV0udGV4dH08L3RkPlxyXG4gIDwvdHI+XHJcbik7XHJcblxyXG53aW5kb3cuTWVzc2FnZSA9IE1lc3NhZ2U7XHJcbiJdfQ==