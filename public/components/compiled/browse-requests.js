"use strict";

var BrowseRequests = function BrowseRequests(_ref) {
  var requests = _ref.requests,
      handlePostClick = _ref.handlePostClick;
  return React.createElement(
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
          "Title"
        ),
        React.createElement(
          "th",
          null,
          "Description"
        ),
        React.createElement(
          "th",
          null,
          "Posted Date"
        ),
        React.createElement(
          "th",
          null,
          "Posted Time"
        ),
        React.createElement(
          "th",
          null,
          "Age"
        ),
        React.createElement(
          "th",
          null,
          "Gender"
        ),
        React.createElement(
          "th",
          null,
          "Zip Code"
        )
      )
    ),
    React.createElement(
      "tbody",
      null,
      requests.map(function (item) {
        return (
          // console.log('EACH ITEM', item)
          React.createElement(SearchResultItem, {
            result: item,
            handlePostClick: handlePostClick,
            key: item._id
          })
        );
      })
    )
  );
};

window.BrowseRequests = BrowseRequests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Jyb3dzZS1yZXF1ZXN0cy5qc3giXSwibmFtZXMiOlsiQnJvd3NlUmVxdWVzdHMiLCJyZXF1ZXN0cyIsImhhbmRsZVBvc3RDbGljayIsIm1hcCIsIml0ZW0iLCJfaWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLE1BQUVDLFFBQUYsUUFBRUEsUUFBRjtBQUFBLE1BQVlDLGVBQVosUUFBWUEsZUFBWjtBQUFBLFNBRW5CO0FBQUE7QUFBQSxNQUFPLFdBQVUscUJBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBREYsS0FERjtBQVlFO0FBQUE7QUFBQTtBQUVJRCxlQUFTRSxHQUFULENBQWEsVUFBQ0MsSUFBRDtBQUFBO0FBQ1g7QUFDQSw4QkFBQyxnQkFBRDtBQUNFLG9CQUFRQSxJQURWO0FBRUUsNkJBQWlCRixlQUZuQjtBQUdFLGlCQUFLRSxLQUFLQztBQUhaO0FBRlc7QUFBQSxPQUFiO0FBRko7QUFaRixHQUZtQjtBQUFBLENBQXJCOztBQTZCQUMsT0FBT04sY0FBUCxHQUF3QkEsY0FBeEIiLCJmaWxlIjoiYnJvd3NlLXJlcXVlc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEJyb3dzZVJlcXVlc3RzID0gKHtyZXF1ZXN0cywgaGFuZGxlUG9zdENsaWNrfSkgPT4gKFxyXG5cclxuICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgPHRoZWFkPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRoPlRpdGxlPC90aD5cclxuICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgIDx0aD5Qb3N0ZWQgRGF0ZTwvdGg+XHJcbiAgICAgICAgPHRoPlBvc3RlZCBUaW1lPC90aD5cclxuICAgICAgICA8dGg+QWdlPC90aD5cclxuICAgICAgICA8dGg+R2VuZGVyPC90aD5cclxuICAgICAgICA8dGg+WmlwIENvZGU8L3RoPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90aGVhZD5cclxuICAgIDx0Ym9keT5cclxuICAgICAge1xyXG4gICAgICAgIHJlcXVlc3RzLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdFQUNIIElURU0nLCBpdGVtKVxyXG4gICAgICAgICAgPFNlYXJjaFJlc3VsdEl0ZW1cclxuICAgICAgICAgICAgcmVzdWx0PXtpdGVtfVxyXG4gICAgICAgICAgICBoYW5kbGVQb3N0Q2xpY2s9e2hhbmRsZVBvc3RDbGlja31cclxuICAgICAgICAgICAga2V5PXtpdGVtLl9pZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvdGFibGU+XHJcbik7XHJcblxyXG53aW5kb3cuQnJvd3NlUmVxdWVzdHMgPSBCcm93c2VSZXF1ZXN0cztcclxuIl19