'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 Deprecated request viewer component
 */

var RequestViewer = function (_React$Component) {
  _inherits(RequestViewer, _React$Component);

  function RequestViewer(props) {
    _classCallCheck(this, RequestViewer);

    var _this = _possibleConstructorReturn(this, (RequestViewer.__proto__ || Object.getPrototypeOf(RequestViewer)).call(this, props));

    _this.state = {
      postTitle: '',
      description: '',
      postDateTime: '',
      gender: '',
      minAge: '',
      maxAge: '',
      zipCode: '',
      activityVerb: '',
      activityNoun: ''
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handlePostClick = _this.props.handlePostClick;
    return _this;
  }

  _createClass(RequestViewer, [{
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      //console.log('event.target.value: ', event.target.value);
      var name = event.target.name;
      //console.log('target.name: ', event.target.name);

      this.setState(_defineProperty({}, name, event.target.value));

      //console.log('this.state: ', this.state)
    }

    //**************need to change html****************//

  }, {
    key: 'render',
    value: function render() {
      return React.createElement('div', { 'class': 'stuff' });
    }
  }]);

  return RequestViewer;
}(React.Component);

window.RequestViewer = RequestViewer;

/*
    updated BuddyRequest schema
 user: String,
 gender: String,
 minAge: Number,
 maxAge: Number,
 zipCode: Number,
 activityNoun: String,
 activityVerb: String,
 postTitle: String,
 postDateTime: String,
 description: String,
 associatedPeople: [],
 ratings: []
 */

/* John's
 user: String,
 gender: String,
 age: Number,
 zipCode: Number,
 activityNoun: String,
 activityVerb: String,
 postTitle: String,
 postDateTime: String,
 description: String
 */

//POST Request Create Activity

/*var activityRequest = {
 User: this.requestUser,
 ActivityNoun: this.reauestActivityNoun,
 AcvtivityVerb: this.requestAactivityVerb,
 Zip: this.zipCode,
 ActivityDate: this.requestDate,
 ActivityTime: this.requestTime,
 PostDate: this.requestPostDate,
 PostTime: this.requestPostTime,
 Description:  this.requestDescription

 }*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3JlcXVlc3Qtdmlld2VyLmpzeCJdLCJuYW1lcyI6WyJSZXF1ZXN0Vmlld2VyIiwicHJvcHMiLCJzdGF0ZSIsInBvc3RUaXRsZSIsImRlc2NyaXB0aW9uIiwicG9zdERhdGVUaW1lIiwiZ2VuZGVyIiwibWluQWdlIiwibWF4QWdlIiwiemlwQ29kZSIsImFjdGl2aXR5VmVyYiIsImFjdGl2aXR5Tm91biIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVBvc3RDbGljayIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsInNldFN0YXRlIiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7SUFJTUEsYTs7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXLEVBREE7QUFFWEMsbUJBQWEsRUFGRjtBQUdYQyxvQkFBYyxFQUhIO0FBSVhDLGNBQVEsRUFKRztBQUtYQyxjQUFRLEVBTEc7QUFNWEMsY0FBUSxFQU5HO0FBT1hDLGVBQVMsRUFQRTtBQVFYQyxvQkFBYyxFQVJIO0FBU1hDLG9CQUFjO0FBVEgsS0FBYjs7QUFZQSxVQUFLQyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsT0FBekI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCLE1BQUtiLEtBQUwsQ0FBV2EsZUFBbEM7QUFmaUI7QUFnQmxCOzs7O3NDQUVpQkMsSyxFQUFPO0FBQ3ZCO0FBQ0EsVUFBSUMsT0FBT0QsTUFBTUUsTUFBTixDQUFhRCxJQUF4QjtBQUNBOztBQUVBLFdBQUtFLFFBQUwscUJBQ0dGLElBREgsRUFDVUQsTUFBTUUsTUFBTixDQUFhRSxLQUR2Qjs7QUFJQTtBQUNEOztBQUtEOzs7OzZCQUNTO0FBQ1AsYUFDRSw2QkFBSyxTQUFNLE9BQVgsR0FERjtBQUdEOzs7O0VBdkN5QkMsTUFBTUMsUzs7QUEwQ2xDQyxPQUFPdEIsYUFBUCxHQUF1QkEsYUFBdkI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7Ozs7Ozs7OztBQWNBOztBQUVBIiwiZmlsZSI6InJlcXVlc3Qtdmlld2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuIERlcHJlY2F0ZWQgcmVxdWVzdCB2aWV3ZXIgY29tcG9uZW50XHJcbiAqL1xyXG5cclxuY2xhc3MgUmVxdWVzdFZpZXdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBvc3RUaXRsZTogJycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgcG9zdERhdGVUaW1lOiAnJyxcclxuICAgICAgZ2VuZGVyOiAnJyxcclxuICAgICAgbWluQWdlOiAnJyxcclxuICAgICAgbWF4QWdlOiAnJyxcclxuICAgICAgemlwQ29kZTogJycsXHJcbiAgICAgIGFjdGl2aXR5VmVyYjogJycsXHJcbiAgICAgIGFjdGl2aXR5Tm91bjogJydcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlUG9zdENsaWNrID0gdGhpcy5wcm9wcy5oYW5kbGVQb3N0Q2xpY2s7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnZXZlbnQudGFyZ2V0LnZhbHVlOiAnLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgdmFyIG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgIC8vY29uc29sZS5sb2coJ3RhcmdldC5uYW1lOiAnLCBldmVudC50YXJnZXQubmFtZSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtuYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKCd0aGlzLnN0YXRlOiAnLCB0aGlzLnN0YXRlKVxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbiAgLy8qKioqKioqKioqKioqKm5lZWQgdG8gY2hhbmdlIGh0bWwqKioqKioqKioqKioqKioqLy9cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzPVwic3R1ZmZcIj48L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuUmVxdWVzdFZpZXdlciA9IFJlcXVlc3RWaWV3ZXI7XHJcblxyXG4vKlxyXG4gICAgdXBkYXRlZCBCdWRkeVJlcXVlc3Qgc2NoZW1hXHJcbiB1c2VyOiBTdHJpbmcsXHJcbiBnZW5kZXI6IFN0cmluZyxcclxuIG1pbkFnZTogTnVtYmVyLFxyXG4gbWF4QWdlOiBOdW1iZXIsXHJcbiB6aXBDb2RlOiBOdW1iZXIsXHJcbiBhY3Rpdml0eU5vdW46IFN0cmluZyxcclxuIGFjdGl2aXR5VmVyYjogU3RyaW5nLFxyXG4gcG9zdFRpdGxlOiBTdHJpbmcsXHJcbiBwb3N0RGF0ZVRpbWU6IFN0cmluZyxcclxuIGRlc2NyaXB0aW9uOiBTdHJpbmcsXHJcbiBhc3NvY2lhdGVkUGVvcGxlOiBbXSxcclxuIHJhdGluZ3M6IFtdXHJcbiAqL1xyXG5cclxuXHJcbi8qIEpvaG4nc1xyXG4gdXNlcjogU3RyaW5nLFxyXG4gZ2VuZGVyOiBTdHJpbmcsXHJcbiBhZ2U6IE51bWJlcixcclxuIHppcENvZGU6IE51bWJlcixcclxuIGFjdGl2aXR5Tm91bjogU3RyaW5nLFxyXG4gYWN0aXZpdHlWZXJiOiBTdHJpbmcsXHJcbiBwb3N0VGl0bGU6IFN0cmluZyxcclxuIHBvc3REYXRlVGltZTogU3RyaW5nLFxyXG4gZGVzY3JpcHRpb246IFN0cmluZ1xyXG4gKi9cclxuXHJcblxyXG5cclxuLy9QT1NUIFJlcXVlc3QgQ3JlYXRlIEFjdGl2aXR5XHJcblxyXG4vKnZhciBhY3Rpdml0eVJlcXVlc3QgPSB7XHJcbiBVc2VyOiB0aGlzLnJlcXVlc3RVc2VyLFxyXG4gQWN0aXZpdHlOb3VuOiB0aGlzLnJlYXVlc3RBY3Rpdml0eU5vdW4sXHJcbiBBY3Z0aXZpdHlWZXJiOiB0aGlzLnJlcXVlc3RBYWN0aXZpdHlWZXJiLFxyXG4gWmlwOiB0aGlzLnppcENvZGUsXHJcbiBBY3Rpdml0eURhdGU6IHRoaXMucmVxdWVzdERhdGUsXHJcbiBBY3Rpdml0eVRpbWU6IHRoaXMucmVxdWVzdFRpbWUsXHJcbiBQb3N0RGF0ZTogdGhpcy5yZXF1ZXN0UG9zdERhdGUsXHJcbiBQb3N0VGltZTogdGhpcy5yZXF1ZXN0UG9zdFRpbWUsXHJcbiBEZXNjcmlwdGlvbjogIHRoaXMucmVxdWVzdERlc2NyaXB0aW9uXHJcblxyXG4gfSovXHJcbiJdfQ==