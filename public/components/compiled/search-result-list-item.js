"use strict";

var SearchResultItem = function SearchResultItem(_ref) {
  var result = _ref.result,
      handlePostClick = _ref.handlePostClick;
  return React.createElement(
    "tr",
    { onClick: function onClick() {
        return handlePostClick(result);
      }, className: "row-select" },
    React.createElement(
      "td",
      null,
      result.postTitle
    ),
    React.createElement(
      "td",
      null,
      result.description
    ),
    React.createElement(
      "td",
      null,
      result.posteDateTime
    ),
    React.createElement(
      "td",
      null,
      result.posteDateTime
    ),
    React.createElement(
      "td",
      null,
      result.age
    ),
    React.createElement(
      "td",
      null,
      result.gender
    ),
    React.createElement(
      "td",
      null,
      result.zipCode
    )
  );
};

window.SearchResultItem = SearchResultItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlYXJjaC1yZXN1bHQtbGlzdC1pdGVtLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hSZXN1bHRJdGVtIiwicmVzdWx0IiwiaGFuZGxlUG9zdENsaWNrIiwicG9zdFRpdGxlIiwiZGVzY3JpcHRpb24iLCJwb3N0ZURhdGVUaW1lIiwiYWdlIiwiZ2VuZGVyIiwiemlwQ29kZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJQSxtQkFBbUIsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLE1BQVVDLGVBQVYsUUFBVUEsZUFBVjtBQUFBLFNBRXJCO0FBQUE7QUFBQSxNQUFJLFNBQVM7QUFBQSxlQUFNQSxnQkFBZ0JELE1BQWhCLENBQU47QUFBQSxPQUFiLEVBQTRDLFdBQVUsWUFBdEQ7QUFDRTtBQUFBO0FBQUE7QUFBS0EsYUFBT0U7QUFBWixLQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtGLGFBQU9HO0FBQVosS0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFLSCxhQUFPSTtBQUFaLEtBSEY7QUFJRTtBQUFBO0FBQUE7QUFBS0osYUFBT0k7QUFBWixLQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUtKLGFBQU9LO0FBQVosS0FMRjtBQU1FO0FBQUE7QUFBQTtBQUFLTCxhQUFPTTtBQUFaLEtBTkY7QUFPRTtBQUFBO0FBQUE7QUFBS04sYUFBT087QUFBWjtBQVBGLEdBRnFCO0FBQUEsQ0FBdkI7O0FBYUFDLE9BQU9ULGdCQUFQLEdBQTBCQSxnQkFBMUIiLCJmaWxlIjoic2VhcmNoLXJlc3VsdC1saXN0LWl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIFNlYXJjaFJlc3VsdEl0ZW0gPSAoe3Jlc3VsdCwgaGFuZGxlUG9zdENsaWNrfSkgPT4gKFxyXG5cclxuICA8dHIgb25DbGljaz17KCkgPT4gaGFuZGxlUG9zdENsaWNrKHJlc3VsdCl9IGNsYXNzTmFtZT1cInJvdy1zZWxlY3RcIj5cclxuICAgIDx0ZD57cmVzdWx0LnBvc3RUaXRsZX08L3RkPlxyXG4gICAgPHRkPntyZXN1bHQuZGVzY3JpcHRpb259PC90ZD5cclxuICAgIDx0ZD57cmVzdWx0LnBvc3RlRGF0ZVRpbWV9PC90ZD5cclxuICAgIDx0ZD57cmVzdWx0LnBvc3RlRGF0ZVRpbWV9PC90ZD5cclxuICAgIDx0ZD57cmVzdWx0LmFnZX08L3RkPlxyXG4gICAgPHRkPntyZXN1bHQuZ2VuZGVyfTwvdGQ+XHJcbiAgICA8dGQ+e3Jlc3VsdC56aXBDb2RlfTwvdGQ+XHJcbiAgPC90cj5cclxuKTtcclxuXHJcbndpbmRvdy5TZWFyY2hSZXN1bHRJdGVtID0gU2VhcmNoUmVzdWx0SXRlbTtcclxuIl19