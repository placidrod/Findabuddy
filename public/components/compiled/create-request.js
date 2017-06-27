'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var CreateRequest = (props) => (
var CreateRequest = function (_React$Component) {
  _inherits(CreateRequest, _React$Component);

  function CreateRequest(props) {
    _classCallCheck(this, CreateRequest);

    var _this = _possibleConstructorReturn(this, (CreateRequest.__proto__ || Object.getPrototypeOf(CreateRequest)).call(this, props));

    _this.state = {
      postTitle: '',
      description: '',
      postDateTime: '',
      gender: '',
      age: 0,
      zipCode: 0,
      activityVerb: '',
      activityNoun: ''
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);
    return _this;
  }

  _createClass(CreateRequest, [{
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      //console.log('event.target.value: ', event.target.value);
      var name = event.target.name;
      //console.log('target.name: ', event.target.name);

      this.setState(_defineProperty({}, name, event.target.value));

      //console.log('this.state: ', this.state)
    }
  }, {
    key: 'showObject',
    value: function showObject(event) {
      event.preventDefault();
      console.log(this.state);
      $.ajax({
        url: 'http://localhost:3000/buddyRequest',
        type: 'POST',
        data: this.state,
        //dataType: dataType,
        success: function success() {
          console.log('success');
        },
        error: function error() {
          console.log('failed to post buddy request');
        }
      });
    }

    /*
        app.startSpinner();
        $.ajax({
          url: app.server,
          type: 'POST',
          data: message,
          success: function() {
            app.$message.val('');
            app.fetch();
          },
          error: function (error) {
            // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
            console.error('chatterbox: Failed to send message', error);
          }
        });
    
    */

    //**************need to change htmlFors****************//

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { className: 'form-horizon' },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Post Title'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Enter a Post Title', name: 'postTitle', onChange: this.handleInputChange })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Event Description'
          ),
          React.createElement('textarea', { type: 'text', className: 'form-control', rows: '3', placeholder: 'Enter a Description of the Event', name: 'description', onChange: this.handleInputChange })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Event Date/Time'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Enter the Date/Time of the Event', name: 'postDateTime', onChange: this.handleInputChange })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Gender'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Enter Preferred Buddy Gender', name: 'gender', onChange: this.handleInputChange })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Age'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Enter Preferred Buddy Age', name: 'age', onChange: this.handleInputChange })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Zip Code'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Enter Preferred Buddy Zip Code', name: 'zipCode', onChange: this.handleInputChange })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Activity Verb'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Enter a Verb', name: 'activityVerb', onChange: this.handleInputChange })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Activity Noun'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Enter a Noun', name: 'activityNoun', onChange: this.handleInputChange })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'div',
            { className: 'col-sm-offset-2 col-sm-10' },
            React.createElement(
              'button',
              { type: 'submit', className: 'btn btn-default', onClick: this.showObject.bind(this) },
              'Submit'
            )
          )
        )
      );
    }
  }]);

  return CreateRequest;
}(React.Component);

window.CreateRequest = CreateRequest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NyZWF0ZS1yZXF1ZXN0LmpzeCJdLCJuYW1lcyI6WyJDcmVhdGVSZXF1ZXN0IiwicHJvcHMiLCJzdGF0ZSIsInBvc3RUaXRsZSIsImRlc2NyaXB0aW9uIiwicG9zdERhdGVUaW1lIiwiZ2VuZGVyIiwiYWdlIiwiemlwQ29kZSIsImFjdGl2aXR5VmVyYiIsImFjdGl2aXR5Tm91biIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsInNldFN0YXRlIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwic3VjY2VzcyIsImVycm9yIiwic2hvd09iamVjdCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtJQUNNQSxhOzs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVcsRUFEQTtBQUVYQyxtQkFBYSxFQUZGO0FBR1hDLG9CQUFjLEVBSEg7QUFJWEMsY0FBUSxFQUpHO0FBS1hDLFdBQUssQ0FMTTtBQU1YQyxlQUFTLENBTkU7QUFPWEMsb0JBQWMsRUFQSDtBQVFYQyxvQkFBYztBQVJILEtBQWI7O0FBV0EsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLE9BQXpCO0FBYmlCO0FBY2xCOzs7O3NDQUVpQkMsSyxFQUFPO0FBQ3ZCO0FBQ0EsVUFBSUMsT0FBT0QsTUFBTUUsTUFBTixDQUFhRCxJQUF4QjtBQUNBOztBQUVBLFdBQUtFLFFBQUwscUJBQ0dGLElBREgsRUFDVUQsTUFBTUUsTUFBTixDQUFhRSxLQUR2Qjs7QUFJQTtBQUNEOzs7K0JBRVVKLEssRUFBTztBQUNoQkEsWUFBTUssY0FBTjtBQUNBQyxjQUFRQyxHQUFSLENBQVksS0FBS2xCLEtBQWpC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QUFBO0FBQUEsY0FBSyxXQUFVLDJCQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGlCQUFoQyxFQUFrRCxTQUFTLEtBQUtpQixVQUFMLENBQWdCaEIsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBM0Q7QUFBQTtBQUFBO0FBREY7QUFERjtBQWxDSCxPQUREO0FBMENEOzs7O0VBL0d5QmlCLE1BQU1DLFM7O0FBa0hsQ0MsT0FBTy9CLGFBQVAsR0FBdUJBLGFBQXZCOztBQUVBOzs7Ozs7Ozs7Ozs7QUFjQTs7QUFFQSIsImZpbGUiOiJjcmVhdGUtcmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZhciBDcmVhdGVSZXF1ZXN0ID0gKHByb3BzKSA9PiAoXG5jbGFzcyBDcmVhdGVSZXF1ZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBvc3RUaXRsZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBwb3N0RGF0ZVRpbWU6ICcnLFxuICAgICAgZ2VuZGVyOiAnJyxcbiAgICAgIGFnZTogMCxcbiAgICAgIHppcENvZGU6IDAsXG4gICAgICBhY3Rpdml0eVZlcmI6ICcnLFxuICAgICAgYWN0aXZpdHlOb3VuOiAnJ1xuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdldmVudC50YXJnZXQudmFsdWU6ICcsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgdmFyIG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICAvL2NvbnNvbGUubG9nKCd0YXJnZXQubmFtZTogJywgZXZlbnQudGFyZ2V0Lm5hbWUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuXG4gICAgLy9jb25zb2xlLmxvZygndGhpcy5zdGF0ZTogJywgdGhpcy5zdGF0ZSlcbiAgfVxuXG4gIHNob3dPYmplY3QoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYnVkZHlSZXF1ZXN0JyxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHRoaXMuc3RhdGUsXG4gICAgICAvL2RhdGFUeXBlOiBkYXRhVHlwZSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0byBwb3N0IGJ1ZGR5IHJlcXVlc3QnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4vKlxuICAgIGFwcC5zdGFydFNwaW5uZXIoKTtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBhcHAuc2VydmVyLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgZGF0YTogbWVzc2FnZSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICBhcHAuJG1lc3NhZ2UudmFsKCcnKTtcbiAgICAgICAgYXBwLmZldGNoKCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9jb25zb2xlLmVycm9yXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NoYXR0ZXJib3g6IEZhaWxlZCB0byBzZW5kIG1lc3NhZ2UnLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiovXG5cblxuXG5cbiAgLy8qKioqKioqKioqKioqKm5lZWQgdG8gY2hhbmdlIGh0bWxGb3JzKioqKioqKioqKioqKioqKi8vXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIFx0PGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9uXCI+IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vdW5cIj5Qb3N0IFRpdGxlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGEgUG9zdCBUaXRsZVwiIG5hbWU9XCJwb3N0VGl0bGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0vPlxuICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm91blwiPkV2ZW50IERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByb3dzPVwiM1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBEZXNjcmlwdGlvbiBvZiB0aGUgRXZlbnRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vdW5cIj5FdmVudCBEYXRlL1RpbWU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIERhdGUvVGltZSBvZiB0aGUgRXZlbnRcIiBuYW1lPVwicG9zdERhdGVUaW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9Lz5cbiAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vdW5cIj5HZW5kZXI8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJlZmVycmVkIEJ1ZGR5IEdlbmRlclwiIG5hbWU9XCJnZW5kZXJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub3VuXCI+QWdlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFByZWZlcnJlZCBCdWRkeSBBZ2VcIiBuYW1lPVwiYWdlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm91blwiPlppcCBDb2RlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFByZWZlcnJlZCBCdWRkeSBaaXAgQ29kZVwiIG5hbWU9XCJ6aXBDb2RlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm91blwiPkFjdGl2aXR5IFZlcmI8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBWZXJiXCIgbmFtZT1cImFjdGl2aXR5VmVyYlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfS8+XG4gICAgICAgIDwvZGl2PiAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub3VuXCI+QWN0aXZpdHkgTm91bjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBhIE5vdW5cIiBuYW1lPVwiYWN0aXZpdHlOb3VuXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9Lz5cbiAgICAgICAgPC9kaXY+ICAgICBcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS1vZmZzZXQtMiBjb2wtc20tMTBcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e3RoaXMuc2hvd09iamVjdC5iaW5kKHRoaXMpfT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuQ3JlYXRlUmVxdWVzdCA9IENyZWF0ZVJlcXVlc3Q7XG5cbi8qIEpvaG4nc1xuXHR1c2VyOiBTdHJpbmcsXG5cdGdlbmRlcjogU3RyaW5nLFxuXHRhZ2U6IE51bWJlcixcblx0emlwQ29kZTogTnVtYmVyLFxuICBhY3Rpdml0eU5vdW46IFN0cmluZyxcbiAgYWN0aXZpdHlWZXJiOiBTdHJpbmcsXG5cdHBvc3RUaXRsZTogU3RyaW5nLFxuICBwb3N0RGF0ZVRpbWU6IFN0cmluZyxcblx0ZGVzY3JpcHRpb246IFN0cmluZ1xuKi9cblxuXG5cbi8vUE9TVCBSZXF1ZXN0IENyZWF0ZSBBY3Rpdml0eVxuXG4vKnZhciBhY3Rpdml0eVJlcXVlc3QgPSB7XG4gIFVzZXI6IHRoaXMucmVxdWVzdFVzZXIsXG4gIEFjdGl2aXR5Tm91bjogdGhpcy5yZWF1ZXN0QWN0aXZpdHlOb3VuLFxuICBBY3Z0aXZpdHlWZXJiOiB0aGlzLnJlcXVlc3RBYWN0aXZpdHlWZXJiLFxuICBaaXA6IHRoaXMuemlwQ29kZSxcbiAgQWN0aXZpdHlEYXRlOiB0aGlzLnJlcXVlc3REYXRlLFxuICBBY3Rpdml0eVRpbWU6IHRoaXMucmVxdWVzdFRpbWUsXG4gIFBvc3REYXRlOiB0aGlzLnJlcXVlc3RQb3N0RGF0ZSxcbiAgUG9zdFRpbWU6IHRoaXMucmVxdWVzdFBvc3RUaW1lLFxuICBEZXNjcmlwdGlvbjogIHRoaXMucmVxdWVzdERlc2NyaXB0aW9uXG5cbn0qLyJdfQ==