"use strict";

var Chat = function Chat(_ref) {
  var message = _ref.message;
  return React.createElement(
    "tr",
    { className: "row-select" },
    React.createElement(
      "td",
      null,
      message.sender
    ),
    React.createElement(
      "td",
      null,
      message.text
    )
  );
};

window.Chat = Chat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NoYXQuanN4Il0sIm5hbWVzIjpbIkNoYXQiLCJtZXNzYWdlIiwic2VuZGVyIiwidGV4dCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxPQUFPLFNBQVBBLElBQU87QUFBQSxNQUFFQyxPQUFGLFFBQUVBLE9BQUY7QUFBQSxTQUNUO0FBQUE7QUFBQSxNQUFJLFdBQVUsWUFBZDtBQUNFO0FBQUE7QUFBQTtBQUFLQSxjQUFRQztBQUFiLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFBS0QsY0FBUUU7QUFBYjtBQUZGLEdBRFM7QUFBQSxDQUFYOztBQU9BQyxPQUFPSixJQUFQLEdBQWNBLElBQWQiLCJmaWxlIjoiY2hhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDaGF0ID0gKHttZXNzYWdlfSkgPT4gKFxyXG4gIDx0ciBjbGFzc05hbWU9XCJyb3ctc2VsZWN0XCI+XHJcbiAgICA8dGQ+e21lc3NhZ2Uuc2VuZGVyfTwvdGQ+XHJcbiAgICA8dGQ+e21lc3NhZ2UudGV4dH08L3RkPlxyXG4gIDwvdHI+XHJcbik7XHJcblxyXG53aW5kb3cuQ2hhdCA9IENoYXQ7Il19