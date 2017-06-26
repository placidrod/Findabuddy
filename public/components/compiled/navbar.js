"use strict";

var Nav = function Nav() {
  return React.createElement(
    "nav",
    { className: "navbar navbar-inverse" },
    React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "div",
        { className: "navbar-header" },
        React.createElement(
          "a",
          { className: "navbar-brand", href: "#" },
          "FindABuddy"
        )
      ),
      React.createElement(
        "ul",
        { className: "nav navbar-nav navbar-right" },
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#" },
            "Search"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#" },
            "New Request"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#" },
            "Profile"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#" },
            React.createElement("span", { className: "glyphicon glyphicon-log-out" }),
            "Logout"
          )
        )
      )
    )
  );
};

window.Nav = Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25hdmJhci5qc3giXSwibmFtZXMiOlsiTmF2Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU0sU0FBTkEsR0FBTTtBQUFBLFNBRVI7QUFBQTtBQUFBLE1BQUssV0FBVSx1QkFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsaUJBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsWUFBRyxXQUFVLGNBQWIsRUFBNEIsTUFBSyxHQUFqQztBQUFBO0FBQUE7QUFERixPQURGO0FBS0U7QUFBQTtBQUFBLFVBQUksV0FBVSw2QkFBZDtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxjQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFBSixTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQUFKLFNBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsY0FBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBQUosU0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxjQUFHLE1BQUssR0FBUjtBQUFhLDBDQUFNLFdBQVUsNkJBQWhCLEdBQWI7QUFBQTtBQUFBO0FBQUo7QUFKRjtBQUxGO0FBREYsR0FGUTtBQUFBLENBQVY7O0FBb0JBQyxPQUFPRCxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE5hdiA9ICgpID0+IChcblxuICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItaW52ZXJzZVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5GaW5kQUJ1ZGR5PC9hPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgPlNlYXJjaDwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiA+TmV3IFJlcXVlc3Q8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgPlByb2ZpbGU8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgPjxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tbG9nLW91dFwiPjwvc3Bhbj5Mb2dvdXQ8L2E+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvbmF2PlxuXG4pO1xuXG5cbndpbmRvdy5OYXYgPSBOYXY7Il19