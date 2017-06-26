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

      console.log(age
      // fetch('http://127.0.0.1:3000/buddyRequest', {
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
      );
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
          React.createElement('input', { type: 'password', className: 'form-control',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlYXJjaC1vcHRpb25zLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hGb3JtIiwicHJvcHMiLCJzdGF0ZSIsIkFjdGl2aXR5VmVyYiIsIkFjdGl2aXR5Tm91biIsIkFjdGl2aXR5RGF0ZSIsIkFjdGl2aXR5VGltZSIsIlppcENvZGUiLCJBZ2UiLCIkZ3RlIiwiJGx0ZSIsIkdlbmRlciIsIkRlc2NyaXB0aW9uIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUlucHV0IiwiZSIsInRhcmdldCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0Iiwic2VsZiIsImFnZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsVTs7O0FBRUosc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG9CQUFjLEVBREg7QUFFWEMsb0JBQWMsRUFGSDtBQUdYQyxvQkFBYyxFQUhIO0FBSVhDLG9CQUFjLEVBSkg7QUFLWEMsZUFBUyxFQUxFO0FBTVhDLFdBQUs7QUFDSEMsY0FBTSxFQURIO0FBRUhDLGNBQU07QUFGSCxPQU5NO0FBVVhDLGNBQVEsRUFWRztBQVdYQyxtQkFBYTtBQVhGLEtBQWI7O0FBY0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFDQTtBQWxCaUI7QUFtQmxCOzs7O2dDQUVXRSxDLEVBQUU7QUFDWixVQUFJQyxTQUFTRCxFQUFFQyxNQUFmO0FBQ0EsVUFBSUMsT0FBT0QsT0FBT0MsSUFBbEI7QUFDQUMsY0FBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JGLElBQXBCLEVBQTBCLE9BQTFCLEVBQW1DRCxPQUFPSSxLQUExQzs7QUFFQSxV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O0FBQUEsY0FBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGlCQUFoQztBQUFBO0FBQUE7QUFERjtBQURGO0FBaEVGLE9BREY7QUF3RUQ7Ozs7RUFwS3NCYyxNQUFNQyxTOztBQXdLL0I7OztBQUdBQyxPQUFPNUIsVUFBUCxHQUFvQkEsVUFBcEIiLCJmaWxlIjoic2VhcmNoLW9wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2hGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgQWN0aXZpdHlWZXJiOiAnJyxcbiAgICAgIEFjdGl2aXR5Tm91bjogJycsXG4gICAgICBBY3Rpdml0eURhdGU6ICcnLFxuICAgICAgQWN0aXZpdHlUaW1lOiAnJyxcbiAgICAgIFppcENvZGU6ICcnLFxuICAgICAgQWdlOiB7XG4gICAgICAgICRndGU6ICcnLFxuICAgICAgICAkbHRlOiAnJ1xuICAgICAgfSxcbiAgICAgIEdlbmRlcjogJycsXG4gICAgICBEZXNjcmlwdGlvbjogJydcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlSW5wdXQgPSB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5oYW5kbGVBZ2VJbnB1dCA9IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0KGUpe1xuICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICB2YXIgbmFtZSA9IHRhcmdldC5uYW1lO1xuICAgIGNvbnNvbGUubG9nKCduYW1lJywgbmFtZSwgJ3ZhbHVlJywgdGFyZ2V0LnZhbHVlKTtcblxuICAgIGlmIChuYW1lID09PSAnJGd0ZScpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBBZ2U6IHsnJGd0ZSc6IHRhcmdldC52YWx1ZX0sXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnJGx0ZScpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIEFnZTogeyckbHRlJzogdGFyZ2V0LnZhbHVlfSxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtuYW1lXTogdGFyZ2V0LnZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICAvLyBoYW5kbGVBZ2VJbnB1dChlKXtcbiAgLy8gICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gIC8vICAgdmFyIG5hbWUgPSB0YXJnZXQubmFtZTtcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAvLyAgIGlmIChuYW1lID09PSAnJGd0ZScpIHtcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgICBBZ2U6IHsnJGd0ZSc6IHRhcmdldC52YWx1ZX0sXG4gIC8vICAgICB9KTtcbiAgLy8gICB9IGVsc2UgaWYgKG5hbWUgPT09ICckbHRlJyl7XG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgICAgQWdlOiB7JyRsdGUnOiB0YXJnZXQudmFsdWV9LFxuICAvLyAgICAgfSk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICAvLyB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdFJlcXVlc3QodGhpcyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgYWdlID0gdGhpcy5zdGF0ZS5BZ2U7XG5cbiAgICBjb25zb2xlLmxvZyhhZ2UpXG4gICAgLy8gZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9idWRkeVJlcXVlc3QnLCB7XG4gICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIC8vICAgICBkYXRhOiB7XG4gICAgLy8gICAgICAgQWN0aXZpdHlWZXJiOiBzZWxmLkFjdGl2aXR5VmVyYixcbiAgICAvLyAgICAgICBBY3Rpdml0eU5vdW46IHNlbGYuQWN0aXZpdHlOb3VuLFxuICAgIC8vICAgICAgIEFjdGl2aXR5RGF0ZTogc2VsZi5BY3Rpdml0eURhdGUsXG4gICAgLy8gICAgICAgQWN0aXZpdHlUaW1lOiBzZWxmLkFjdGl2aXR5VGltZSxcbiAgICAvLyAgICAgICBaaXBDb2RlOiBzZWxmLlppcENvZGUsXG4gICAgLy8gICAgICAgQWdlOiB7XG4gICAgLy8gICAgICAgICAkZ3RlOiBhZ2UuJGd0ZSxcbiAgICAvLyAgICAgICAgICRsdGU6IGFnZS4kbHRlXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICBEZXNjcmlwdGlvbjogc2VsZi5EZXNjcmlwdGlvblxuICAgIC8vICAgICB9XG4gICAgLy8gICB9KVxuICAgIC8vICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAvLyAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIC8vICAgfSkudGhlbihmdW5jdGlvbihib2R5KSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgIC8vIH0pO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cInZlcmJcIj5BY3RpdnR5IFZlcmI8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBuYW1lPVwiQWN0aXZpdHlWZXJiXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuQWN0aXZpdHlWZXJifS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJub3VuXCI+QWN0aXZpdHkgTm91bjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG5hbWU9XCJBY3Rpdml0eU5vdW5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5BY3Rpdml0eU5vdW59Lz5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJkYXRlXCI+RGF0ZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG5hbWU9XCJBY3Rpdml0eURhdGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5BY3Rpdml0eURhdGV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cInRpbWVcIj5UaW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG5hbWU9XCJBY3Rpdml0eVRpbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5BY3Rpdml0eVRpbWV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cInppcFwiPlppcDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG5hbWU9XCJaaXBDb2RlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuWmlwQ29kZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGFnZVwiIGh0bWxGb3I9XCJhZ2VcIj5BZ2UgTWluPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbWVkaXVtXCJcbiAgICAgICAgICAgIG5hbWU9XCIkZ3RlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuQWdlLiRndGV9IC8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgYWdlXCIgaHRtbEZvcj1cImFnZVwiPkFnZSBNYXg8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dC1tZWRpdW1cIlxuICAgICAgICAgICAgbmFtZT1cIiRsdGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5BZ2UuJGx0ZX0gLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJhZ2VcIj5TZWxlY3QgR2VuZGVyPC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1hbGVcIj5NYWxlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmVtYWxlXCI+RmVtYWxlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm8gUHJlZmVyZW5jZVwiPk5vIFByZWZlcmVuY2U8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cImluZm9cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG5hbWU9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLkRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS1vZmZzZXQtMTBcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG5cbn1cblxuLy9QT1NUIFJlcXVlc3QgQWN0aXZpdHkgU2VhcmNoXG5cblxud2luZG93LlNlYXJjaEZvcm0gPSBTZWFyY2hGb3JtOyJdfQ==