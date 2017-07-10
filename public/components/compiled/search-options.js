'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 Component for searching existing requests
 TODO: check edge cases of blank inputs returning expected search results from backend
 */

var SearchForm = function (_React$Component) {
  _inherits(SearchForm, _React$Component);

  function SearchForm(props) {
    _classCallCheck(this, SearchForm);

    var _this = _possibleConstructorReturn(this, (SearchForm.__proto__ || Object.getPrototypeOf(SearchForm)).call(this, props));

    _this.state = {
      activityVerb: '',
      activityNoun: '',
      activityDate: '',
      activityTime: '',
      zipCode: '',
      age: {
        $gte: '',
        $lte: ''
      },
      gender: '',
      description: ''
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleInput = _this.handleInput.bind(_this);
    _this.handleAgeInput = _this.handleAgeInput.bind(_this);
    _this.handleSubmitRequest = _this.props.handleSubmitRequest;
    return _this;
  }

  _createClass(SearchForm, [{
    key: 'handleInput',
    value: function handleInput(e) {
      var target = e.target;
      var name = target.name;

      this.setState(_defineProperty({}, name, target.value));
    }
  }, {
    key: 'handleAgeInput',
    value: function handleAgeInput(e) {
      var target = e.target;
      var name = target.name;
      var min = this.state.age.$gte;
      var max = this.state.age.$lte;
      // var age = this.state.Age;

      if (name === '$gte') {
        this.setState({
          age: {
            $gte: target.value,
            $lte: max
          }
        });
      } else if (name === '$lte') {
        this.setState({
          age: {
            $gte: min,
            $lte: target.value
          }
        });
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {

      e.preventDefault();
      var self = this;
      console.log('self state: ', self.state);
      // self.handleSubmitRequest(self.state);
      $.ajax({
        url: '/buddyRequest',
        type: 'GET',
        data: self.state
      }).done(function (response) {
        console.log('RESPONSE', response);
        self.handleSubmitRequest(response);
        self.props.handleSelect('renderResults');
      }).fail(function (err) {
        console.log('ERROR fetching', err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { className: 'form', onSubmit: this.handleSubmit },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { className: 'control-label', htmlFor: 'verb' },
            'Activity Verb'
          ),
          React.createElement('input', { type: 'text', className: 'form-control',
            name: 'activityVerb',
            onChange: this.handleInput,
            value: this.state.activityVerb })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { className: 'control-label', htmlFor: 'noun' },
            'Activity Noun'
          ),
          React.createElement('input', { type: 'text', className: 'form-control',
            name: 'activityNoun',
            onChange: this.handleInput,
            value: this.state.activityNoun })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { className: 'control-label', htmlFor: 'date' },
            'Date'
          ),
          React.createElement('input', { type: 'text', className: 'form-control',
            name: 'activityDate',
            onChange: this.handleInput,
            value: this.state.activityDate })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { className: 'control-label', htmlFor: 'time' },
            'Time'
          ),
          React.createElement('input', { type: 'text', className: 'form-control',
            name: 'activityTime',
            onChange: this.handleInput,
            value: this.state.activityTime })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { className: 'control-label', htmlFor: 'zip' },
            'Zip'
          ),
          React.createElement('input', { type: 'text', className: 'form-control',
            name: 'zipCode',
            onChange: this.handleInput,
            value: this.state.zipCode })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { className: 'control-label age', htmlFor: 'age' },
            'Age Min'
          ),
          React.createElement('input', { type: 'text', className: 'form-control input-medium',
            name: '$gte',
            onChange: this.handleAgeInput,
            value: this.state.age.$gte }),
          React.createElement(
            'label',
            { className: 'control-label age', htmlFor: 'age' },
            'Age Max'
          ),
          React.createElement('input', { type: 'text', className: 'form-control input-medium',
            name: '$lte',
            onChange: this.handleAgeInput,
            value: this.state.age.$lte }),
          React.createElement(
            'label',
            { className: 'control-label', htmlFor: 'age' },
            'Select Gender'
          ),
          React.createElement(
            'select',
            { className: 'form-control',
              name: 'gender',
              onChange: this.handleInput,
              defaultValue: 'No Preference'
            },
            React.createElement(
              'option',
              { value: 'No Preference' },
              'No Preference'
            ),
            React.createElement(
              'option',
              { value: 'Male' },
              'Male'
            ),
            React.createElement(
              'option',
              { value: 'Female' },
              'Female'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { className: 'control-label', htmlFor: 'info' },
            'Description'
          ),
          React.createElement('input', { type: 'text', className: 'form-control',
            name: 'description',
            onChange: this.handleInput,
            value: this.state.description })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'div',
            { className: 'col-sm-offset-10' },
            React.createElement(
              'button',
              { type: 'submit', className: 'btn btn-default' },
              'Submit'
            )
          )
        )
      );
    }
  }]);

  return SearchForm;
}(React.Component);

//POST Request activity Search


window.SearchForm = SearchForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlYXJjaC1vcHRpb25zLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hGb3JtIiwicHJvcHMiLCJzdGF0ZSIsImFjdGl2aXR5VmVyYiIsImFjdGl2aXR5Tm91biIsImFjdGl2aXR5RGF0ZSIsImFjdGl2aXR5VGltZSIsInppcENvZGUiLCJhZ2UiLCIkZ3RlIiwiJGx0ZSIsImdlbmRlciIsImRlc2NyaXB0aW9uIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUlucHV0IiwiaGFuZGxlQWdlSW5wdXQiLCJoYW5kbGVTdWJtaXRSZXF1ZXN0IiwiZSIsInRhcmdldCIsIm5hbWUiLCJzZXRTdGF0ZSIsInZhbHVlIiwibWluIiwibWF4IiwicHJldmVudERlZmF1bHQiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGEiLCJkb25lIiwicmVzcG9uc2UiLCJoYW5kbGVTZWxlY3QiLCJmYWlsIiwiZXJyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7OztJQUtNQSxVOzs7QUFFSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsb0JBQWMsRUFESDtBQUVYQyxvQkFBYyxFQUZIO0FBR1hDLG9CQUFjLEVBSEg7QUFJWEMsb0JBQWMsRUFKSDtBQUtYQyxlQUFTLEVBTEU7QUFNWEMsV0FBSztBQUNIQyxjQUFNLEVBREg7QUFFSEMsY0FBTTtBQUZILE9BTk07QUFVWEMsY0FBUSxFQVZHO0FBV1hDLG1CQUFhO0FBWEYsS0FBYjs7QUFjQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixPQUFuQjtBQUNBLFVBQUtFLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkYs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QUFBQSxjQUFRLFdBQVUsY0FBbEI7QUFDRSxvQkFBSyxRQURQO0FBRUUsd0JBQVUsS0FBS0ssV0FGakI7QUFHRSw0QkFBYTtBQUhmO0FBS0U7QUFBQTtBQUFBLGdCQUFRLE9BQU0sZUFBZDtBQUFBO0FBQUEsYUFMRjtBQU1FO0FBQUE7QUFBQSxnQkFBUSxPQUFNLE1BQWQ7QUFBQTtBQUFBLGFBTkY7QUFPRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxRQUFkO0FBQUE7QUFBQTtBQVBGO0FBWkYsU0F0Q0Y7QUE0REU7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU8sV0FBVSxlQUFqQixFQUFpQyxTQUFRLE1BQXpDO0FBQUE7QUFBQSxXQURGO0FBRUUseUNBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVUsY0FBN0I7QUFDRSxrQkFBSyxhQURQO0FBRUUsc0JBQVUsS0FBS0EsV0FGakI7QUFHRSxtQkFBTyxLQUFLYixLQUFMLENBQVdVLFdBSHBCO0FBRkYsU0E1REY7QUFvRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSxpQkFBaEM7QUFBQTtBQUFBO0FBREY7QUFERjtBQXBFRixPQURGO0FBNEVEOzs7O0VBL0pzQjJCLE1BQU1DLFM7O0FBbUsvQjs7O0FBR0FDLE9BQU96QyxVQUFQLEdBQW9CQSxVQUFwQiIsImZpbGUiOiJzZWFyY2gtb3B0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiBDb21wb25lbnQgZm9yIHNlYXJjaGluZyBleGlzdGluZyByZXF1ZXN0c1xyXG4gVE9ETzogY2hlY2sgZWRnZSBjYXNlcyBvZiBibGFuayBpbnB1dHMgcmV0dXJuaW5nIGV4cGVjdGVkIHNlYXJjaCByZXN1bHRzIGZyb20gYmFja2VuZFxyXG4gKi9cclxuXHJcbmNsYXNzIFNlYXJjaEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWN0aXZpdHlWZXJiOiAnJyxcclxuICAgICAgYWN0aXZpdHlOb3VuOiAnJyxcclxuICAgICAgYWN0aXZpdHlEYXRlOiAnJyxcclxuICAgICAgYWN0aXZpdHlUaW1lOiAnJyxcclxuICAgICAgemlwQ29kZTogJycsXHJcbiAgICAgIGFnZToge1xyXG4gICAgICAgICRndGU6ICcnLFxyXG4gICAgICAgICRsdGU6ICcnXHJcbiAgICAgIH0sXHJcbiAgICAgIGdlbmRlcjogJycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUlucHV0ID0gdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVBZ2VJbnB1dCA9IHRoaXMuaGFuZGxlQWdlSW5wdXQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0UmVxdWVzdCA9IHRoaXMucHJvcHMuaGFuZGxlU3VibWl0UmVxdWVzdDtcclxuICB9XHJcblxyXG4gIGhhbmRsZUlucHV0KGUpIHtcclxuICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIHZhciBuYW1lID0gdGFyZ2V0Lm5hbWU7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtuYW1lXTogdGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWdlSW5wdXQoZSkge1xyXG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgdmFyIG5hbWUgPSB0YXJnZXQubmFtZTtcclxuICAgIHZhciBtaW4gPSB0aGlzLnN0YXRlLmFnZS4kZ3RlO1xyXG4gICAgdmFyIG1heCA9IHRoaXMuc3RhdGUuYWdlLiRsdGU7XHJcbiAgICAvLyB2YXIgYWdlID0gdGhpcy5zdGF0ZS5BZ2U7XHJcblxyXG4gICAgaWYgKG5hbWUgPT09ICckZ3RlJykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBhZ2U6IHtcclxuICAgICAgICAgICRndGU6IHRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICRsdGU6IG1heFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnJGx0ZScpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYWdlOiB7XHJcbiAgICAgICAgICAkZ3RlOiBtaW4sXHJcbiAgICAgICAgICAkbHRlOiB0YXJnZXQudmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdChlKSB7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc29sZS5sb2coJ3NlbGYgc3RhdGU6ICcsIHNlbGYuc3RhdGUpO1xyXG4gICAgLy8gc2VsZi5oYW5kbGVTdWJtaXRSZXF1ZXN0KHNlbGYuc3RhdGUpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiAnL2J1ZGR5UmVxdWVzdCcsXHJcbiAgICAgIHR5cGU6ICdHRVQnLFxyXG4gICAgICBkYXRhOiBzZWxmLnN0YXRlXHJcbiAgICB9KVxyXG4gICAgICAuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSRVNQT05TRScsIHJlc3BvbnNlKTtcclxuICAgICAgICBzZWxmLmhhbmRsZVN1Ym1pdFJlcXVlc3QocmVzcG9uc2UpO1xyXG4gICAgICAgIHNlbGYucHJvcHMuaGFuZGxlU2VsZWN0KCdyZW5kZXJSZXN1bHRzJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5mYWlsKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBmZXRjaGluZycsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPVwidmVyYlwiPkFjdGl2aXR5IFZlcmI8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgbmFtZT1cImFjdGl2aXR5VmVyYlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hY3Rpdml0eVZlcmJ9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cIm5vdW5cIj5BY3Rpdml0eSBOb3VuPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJhY3Rpdml0eU5vdW5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWN0aXZpdHlOb3VufS8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cImRhdGVcIj5EYXRlPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJhY3Rpdml0eURhdGVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWN0aXZpdHlEYXRlfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJ0aW1lXCI+VGltZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBuYW1lPVwiYWN0aXZpdHlUaW1lXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFjdGl2aXR5VGltZX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPVwiemlwXCI+WmlwPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ6aXBDb2RlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnppcENvZGV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBhZ2VcIiBodG1sRm9yPVwiYWdlXCI+QWdlIE1pbjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbWVkaXVtXCJcclxuICAgICAgICAgICAgbmFtZT1cIiRndGVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVBZ2VJbnB1dH1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWdlLiRndGV9IC8+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBhZ2VcIiBodG1sRm9yPVwiYWdlXCI+QWdlIE1heDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbWVkaXVtXCJcclxuICAgICAgICAgICAgbmFtZT1cIiRsdGVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVBZ2VJbnB1dH1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWdlLiRsdGV9IC8+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJhZ2VcIj5TZWxlY3QgR2VuZGVyPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJObyBQcmVmZXJlbmNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vIFByZWZlcmVuY2VcIj5ObyBQcmVmZXJlbmNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYWxlXCI+TWFsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmVtYWxlXCI+RmVtYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cImluZm9cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tb2Zmc2V0LTEwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy9QT1NUIFJlcXVlc3QgYWN0aXZpdHkgU2VhcmNoXHJcblxyXG5cclxud2luZG93LlNlYXJjaEZvcm0gPSBTZWFyY2hGb3JtO1xyXG4iXX0=