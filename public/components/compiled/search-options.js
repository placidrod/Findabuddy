'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchForm = function (_React$Component) {
  _inherits(SearchForm, _React$Component);

  function SearchForm(props) {
    _classCallCheck(this, SearchForm);

    var _this = _possibleConstructorReturn(this, (SearchForm.__proto__ || Object.getPrototypeOf(SearchForm)).call(this, props));

    _this.state = {
      ActivityVerb: '',
      ActivityNoun: '',
      ActivityDate: '',
      ActivityTime: '',
      ZipCode: '',
      Age: {
        $gte: '',
        $lte: ''
      },
      Gender: '',
      Description: ''
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleInput = _this.handleInput.bind(_this);
    // this.handleAgeInput = this.handleInput.bind(this);
    return _this;
  }

  _createClass(SearchForm, [{
    key: 'handleInput',
    value: function handleInput(e) {
      var target = e.target;
      var name = target.name;
      console.log('name', name, 'value', target.value);

      if (name === '$gte') {
        this.setState({
          Age: { '$gte': target.value }
        });
        console.log(this.state);
      } else if (name === '$lte') {
        this.setState({
          Age: { '$lte': target.value }
        });
        console.log(this.state);
      } else {
        this.setState(_defineProperty({}, name, target.value));
      }
    }

    // handleAgeInput(e){
    //   var target = e.target;
    //   var name = target.name;
    //   console.log(this.state)
    //   if (name === '$gte') {
    //     this.setState({
    //       Age: {'$gte': target.value},
    //     });
    //   } else if (name === '$lte'){
    //     this.setState({
    //       Age: {'$lte': target.value},
    //     });
    //   }
    // }

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      // this.props.handleSubmitRequest(this);
      e.preventDefault();
      var self = this;
      var age = this.state.Age;

      console.log(this.state);
      // fetch('http://localhost/buddyRequest', {
      //     method: 'POST',
      //     data: {
      //       ActivityVerb: self.ActivityVerb,
      //       ActivityNoun: self.ActivityNoun,
      //       ActivityDate: self.ActivityDate,
      //       ActivityTime: self.ActivityTime,
      //       ZipCode: self.ZipCode,
      //       Age: {
      //         $gte: age.$gte,
      //         $lte: age.$lte
      //       },
      //       Description: self.Description
      //     }
      //   })
      //   .then(function(response) {
      //     return response.json()
      //   }).then(function(body) {
      //     console.log(body);
      // });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { className: 'form-horizontal', onSubmit: this.handleSubmit },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { className: 'control-label', htmlFor: 'verb' },
            'Activty Verb'
          ),
          React.createElement('input', { type: 'text', className: 'form-control',
            name: 'ActivityVerb',
            onChange: this.handleInput,
            value: this.state.ActivityVerb })
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
            name: 'ActivityNoun',
            onChange: this.handleInput,
            value: this.state.ActivityNoun })
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
            name: 'ActivityDate',
            onChange: this.handleInput,
            value: this.state.ActivityDate })
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
            name: 'ActivityTime',
            onChange: this.handleInput,
            value: this.state.ActivityTime })
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
            name: 'ZipCode',
            onChange: this.handleInput,
            value: this.state.ZipCode })
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
            onChange: this.handleInput,
            value: this.state.Age.$gte }),
          React.createElement(
            'label',
            { className: 'control-label age', htmlFor: 'age' },
            'Age Max'
          ),
          React.createElement('input', { type: 'text', className: 'form-control input-medium',
            name: '$lte',
            onChange: this.handleInput,
            value: this.state.Age.$lte }),
          React.createElement(
            'label',
            { className: 'control-label', htmlFor: 'age' },
            'Select Gender'
          ),
          React.createElement(
            'select',
            { className: 'form-control' },
            React.createElement(
              'option',
              { value: 'Male' },
              'Male'
            ),
            React.createElement(
              'option',
              { value: 'Female' },
              'Female'
            ),
            React.createElement(
              'option',
              { value: 'No Preference' },
              'No Preference'
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
            name: 'Description',
            onChange: this.handleInput,
            value: this.state.Description })
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

//POST Request Activity Search


window.SearchForm = SearchForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlYXJjaC1vcHRpb25zLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hGb3JtIiwicHJvcHMiLCJzdGF0ZSIsIkFjdGl2aXR5VmVyYiIsIkFjdGl2aXR5Tm91biIsIkFjdGl2aXR5RGF0ZSIsIkFjdGl2aXR5VGltZSIsIlppcENvZGUiLCJBZ2UiLCIkZ3RlIiwiJGx0ZSIsIkdlbmRlciIsIkRlc2NyaXB0aW9uIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUlucHV0IiwiZSIsInRhcmdldCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0Iiwic2VsZiIsImFnZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsVTs7O0FBRUosc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG9CQUFjLEVBREg7QUFFWEMsb0JBQWMsRUFGSDtBQUdYQyxvQkFBYyxFQUhIO0FBSVhDLG9CQUFjLEVBSkg7QUFLWEMsZUFBUyxFQUxFO0FBTVhDLFdBQUs7QUFDSEMsY0FBTSxFQURIO0FBRUhDLGNBQU07QUFGSCxPQU5NO0FBVVhDLGNBQVEsRUFWRztBQVdYQyxtQkFBYTtBQVhGLEtBQWI7O0FBY0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFDQTtBQWxCaUI7QUFtQmxCOzs7O2dDQUVXRSxDLEVBQUU7QUFDWixVQUFJQyxTQUFTRCxFQUFFQyxNQUFmO0FBQ0EsVUFBSUMsT0FBT0QsT0FBT0MsSUFBbEI7QUFDQUMsY0FBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JGLElBQXBCLEVBQTBCLE9BQTFCLEVBQW1DRCxPQUFPSSxLQUExQzs7QUFFQSxV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O0FBQUE7QUFBQSxjQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsaUJBQWhDO0FBQUE7QUFBQTtBQURGO0FBREY7QUFoRUYsT0FERjtBQXdFRDs7OztFQXBLc0JjLE1BQU1DLFM7O0FBd0svQjs7O0FBR0FDLE9BQU81QixVQUFQLEdBQW9CQSxVQUFwQiIsImZpbGUiOiJzZWFyY2gtb3B0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBBY3Rpdml0eVZlcmI6ICcnLFxuICAgICAgQWN0aXZpdHlOb3VuOiAnJyxcbiAgICAgIEFjdGl2aXR5RGF0ZTogJycsXG4gICAgICBBY3Rpdml0eVRpbWU6ICcnLFxuICAgICAgWmlwQ29kZTogJycsXG4gICAgICBBZ2U6IHtcbiAgICAgICAgJGd0ZTogJycsXG4gICAgICAgICRsdGU6ICcnXG4gICAgICB9LFxuICAgICAgR2VuZGVyOiAnJyxcbiAgICAgIERlc2NyaXB0aW9uOiAnJ1xuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVJbnB1dCA9IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLmhhbmRsZUFnZUlucHV0ID0gdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlSW5wdXQoZSl7XG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIHZhciBuYW1lID0gdGFyZ2V0Lm5hbWU7XG4gICAgY29uc29sZS5sb2coJ25hbWUnLCBuYW1lLCAndmFsdWUnLCB0YXJnZXQudmFsdWUpO1xuXG4gICAgaWYgKG5hbWUgPT09ICckZ3RlJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIEFnZTogeyckZ3RlJzogdGFyZ2V0LnZhbHVlfSxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICckbHRlJyl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgQWdlOiB7JyRsdGUnOiB0YXJnZXQudmFsdWV9LFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgW25hbWVdOiB0YXJnZXQudmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIGhhbmRsZUFnZUlucHV0KGUpe1xuICAvLyAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgLy8gICB2YXIgbmFtZSA9IHRhcmdldC5uYW1lO1xuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gIC8vICAgaWYgKG5hbWUgPT09ICckZ3RlJykge1xuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICAgIEFnZTogeyckZ3RlJzogdGFyZ2V0LnZhbHVlfSxcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJyRsdGUnKXtcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgICBBZ2U6IHsnJGx0ZSc6IHRhcmdldC52YWx1ZX0sXG4gIC8vICAgICB9KTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIC8vIHRoaXMucHJvcHMuaGFuZGxlU3VibWl0UmVxdWVzdCh0aGlzKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBhZ2UgPSB0aGlzLnN0YXRlLkFnZTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgLy8gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3QvYnVkZHlSZXF1ZXN0Jywge1xuICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAvLyAgICAgZGF0YToge1xuICAgIC8vICAgICAgIEFjdGl2aXR5VmVyYjogc2VsZi5BY3Rpdml0eVZlcmIsXG4gICAgLy8gICAgICAgQWN0aXZpdHlOb3VuOiBzZWxmLkFjdGl2aXR5Tm91bixcbiAgICAvLyAgICAgICBBY3Rpdml0eURhdGU6IHNlbGYuQWN0aXZpdHlEYXRlLFxuICAgIC8vICAgICAgIEFjdGl2aXR5VGltZTogc2VsZi5BY3Rpdml0eVRpbWUsXG4gICAgLy8gICAgICAgWmlwQ29kZTogc2VsZi5aaXBDb2RlLFxuICAgIC8vICAgICAgIEFnZToge1xuICAgIC8vICAgICAgICAgJGd0ZTogYWdlLiRndGUsXG4gICAgLy8gICAgICAgICAkbHRlOiBhZ2UuJGx0ZVxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAgRGVzY3JpcHRpb246IHNlbGYuRGVzY3JpcHRpb25cbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSlcbiAgICAvLyAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgLy8gICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAvLyAgIH0pLnRoZW4oZnVuY3Rpb24oYm9keSkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhib2R5KTtcbiAgICAvLyB9KTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWhvcml6b250YWxcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJ2ZXJiXCI+QWN0aXZ0eSBWZXJiPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgbmFtZT1cIkFjdGl2aXR5VmVyYlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLkFjdGl2aXR5VmVyYn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPVwibm91blwiPkFjdGl2aXR5IE5vdW48L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBuYW1lPVwiQWN0aXZpdHlOb3VuXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuQWN0aXZpdHlOb3VufS8+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPVwiZGF0ZVwiPkRhdGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBuYW1lPVwiQWN0aXZpdHlEYXRlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuQWN0aXZpdHlEYXRlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJ0aW1lXCI+VGltZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG5hbWU9XCJBY3Rpdml0eVRpbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5BY3Rpdml0eVRpbWV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cInppcFwiPlppcDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG5hbWU9XCJaaXBDb2RlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuWmlwQ29kZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGFnZVwiIGh0bWxGb3I9XCJhZ2VcIj5BZ2UgTWluPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbWVkaXVtXCJcbiAgICAgICAgICAgIG5hbWU9XCIkZ3RlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuQWdlLiRndGV9IC8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgYWdlXCIgaHRtbEZvcj1cImFnZVwiPkFnZSBNYXg8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dC1tZWRpdW1cIlxuICAgICAgICAgICAgbmFtZT1cIiRsdGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5BZ2UuJGx0ZX0gLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJhZ2VcIj5TZWxlY3QgR2VuZGVyPC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hbGVcIj5NYWxlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmVtYWxlXCI+RmVtYWxlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm8gUHJlZmVyZW5jZVwiPk5vIFByZWZlcmVuY2U8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cImluZm9cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG5hbWU9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLkRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS1vZmZzZXQtMTBcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG5cbn1cblxuLy9QT1NUIFJlcXVlc3QgQWN0aXZpdHkgU2VhcmNoXG5cblxud2luZG93LlNlYXJjaEZvcm0gPSBTZWFyY2hGb3JtOyJdfQ==