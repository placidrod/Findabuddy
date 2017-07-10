"use strict";

var NotificationMessage = function NotificationMessage(_ref) {
  var notification = _ref.notification,
      handleClick = _ref.handleClick;
  return React.createElement(
    "div",
    { className: "notificationMessage", onClick: function onClick() {
        return handleClick(notification);
      } },
    React.createElement(
      "div",
      { className: "notificationSender" },
      notification.sender
    ),
    React.createElement(
      "p",
      null,
      notification.text === undefined ? '' : notification.text.length > 20 ? notification.text.slice(0, 20) + '...' : notification.text
    )
  );
};

window.NotificationMessage = NotificationMessage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vdGlmaWNhdGlvbi1tZXNzYWdlLmpzeCJdLCJuYW1lcyI6WyJOb3RpZmljYXRpb25NZXNzYWdlIiwibm90aWZpY2F0aW9uIiwiaGFuZGxlQ2xpY2siLCJzZW5kZXIiLCJ0ZXh0IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwic2xpY2UiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsc0JBQXNCLFNBQXRCQSxtQkFBc0I7QUFBQSxNQUFFQyxZQUFGLFFBQUVBLFlBQUY7QUFBQSxNQUFnQkMsV0FBaEIsUUFBZ0JBLFdBQWhCO0FBQUEsU0FDeEI7QUFBQTtBQUFBLE1BQUssV0FBVSxxQkFBZixFQUFxQyxTQUFTO0FBQUEsZUFBTUEsWUFBWUQsWUFBWixDQUFOO0FBQUEsT0FBOUM7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLG9CQUFmO0FBQXFDQSxtQkFBYUU7QUFBbEQsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUVJRixtQkFBYUcsSUFBYixLQUFzQkMsU0FBdEIsR0FBa0MsRUFBbEMsR0FDR0osYUFBYUcsSUFBYixDQUFrQkUsTUFBbEIsR0FBMkIsRUFBM0IsR0FBZ0NMLGFBQWFHLElBQWIsQ0FBa0JHLEtBQWxCLENBQXdCLENBQXhCLEVBQTJCLEVBQTNCLElBQWlDLEtBQWpFLEdBQXlFTixhQUFhRztBQUg3RjtBQUZGLEdBRHdCO0FBQUEsQ0FBMUI7O0FBWUFJLE9BQU9SLG1CQUFQLEdBQTZCQSxtQkFBN0IiLCJmaWxlIjoibm90aWZpY2F0aW9uLW1lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTm90aWZpY2F0aW9uTWVzc2FnZSA9ICh7bm90aWZpY2F0aW9uLCBoYW5kbGVDbGlja30pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbk1lc3NhZ2VcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhub3RpZmljYXRpb24pfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uU2VuZGVyXCI+e25vdGlmaWNhdGlvbi5zZW5kZXJ9PC9kaXY+XHJcbiAgICA8cD5cclxuICAgICAge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbi50ZXh0ID09PSB1bmRlZmluZWQgPyAnJyA6XHJcbiAgICAgICAgICAobm90aWZpY2F0aW9uLnRleHQubGVuZ3RoID4gMjAgPyBub3RpZmljYXRpb24udGV4dC5zbGljZSgwLCAyMCkgKyAnLi4uJyA6IG5vdGlmaWNhdGlvbi50ZXh0KVxyXG4gICAgICB9XHJcbiAgICA8L3A+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG53aW5kb3cuTm90aWZpY2F0aW9uTWVzc2FnZSA9IE5vdGlmaWNhdGlvbk1lc3NhZ2U7XHJcbiJdfQ==