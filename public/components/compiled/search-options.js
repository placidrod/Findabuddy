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

      console.log(this.state
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlYXJjaC1vcHRpb25zLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hGb3JtIiwicHJvcHMiLCJzdGF0ZSIsIkFjdGl2aXR5VmVyYiIsIkFjdGl2aXR5Tm91biIsIkFjdGl2aXR5RGF0ZSIsIkFjdGl2aXR5VGltZSIsIlppcENvZGUiLCJBZ2UiLCIkZ3RlIiwiJGx0ZSIsIkdlbmRlciIsIkRlc2NyaXB0aW9uIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZUlucHV0IiwiZSIsInRhcmdldCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0Iiwic2VsZiIsImFnZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsVTs7O0FBRUosc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG9CQUFjLEVBREg7QUFFWEMsb0JBQWMsRUFGSDtBQUdYQyxvQkFBYyxFQUhIO0FBSVhDLG9CQUFjLEVBSkg7QUFLWEMsZUFBUyxFQUxFO0FBTVhDLFdBQUs7QUFDSEMsY0FBTSxFQURIO0FBRUhDLGNBQU07QUFGSCxPQU5NO0FBVVhDLGNBQVEsRUFWRztBQVdYQyxtQkFBYTtBQVhGLEtBQWI7O0FBY0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFDQTtBQWxCaUI7QUFtQmxCOzs7O2dDQUVXRSxDLEVBQUU7QUFDWixVQUFJQyxTQUFTRCxFQUFFQyxNQUFmO0FBQ0EsVUFBSUMsT0FBT0QsT0FBT0MsSUFBbEI7QUFDQUMsY0FBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JGLElBQXBCLEVBQTBCLE9BQTFCLEVBQW1DRCxPQUFPSSxLQUExQzs7QUFFQSxVQUFJSCxTQUFTLE1BQWIsRUFBcUI7QUFDbkIsYUFBS0ksUUFBTCxDQUFjO0FBQ1pkLGVBQUssRUFBQyxRQUFRUyxPQUFPSSxLQUFoQjtBQURPLFNBQWQ7QUFHQUYsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLbEIsS0FBakI7QUFDRCxPQUxELE1BS08sSUFBSWdCLFNBQVMsTUFBYixFQUFvQjtBQUN6QixhQUFLSSxRQUFMLENBQWM7QUFDWmQsZUFBSyxFQUFDLFFBQVFTLE9BQU9JLEtBQWhCO0FBRE8sU0FBZDtBQUdBRixnQkFBUUMsR0FBUixDQUFZLEtBQUtsQixLQUFqQjtBQUNELE9BTE0sTUFLQTtBQUNMLGFBQUtvQixRQUFMLHFCQUNHSixJQURILEVBQ1VELE9BQU9JLEtBRGpCO0FBR0Q7QUFFRjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O2lDQUVhTCxDLEVBQUc7QUFDZDtBQUNBQSxRQUFFTyxjQUFGO0FBQ0EsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSUMsTUFBTSxLQUFLdkIsS0FBTCxDQUFXTSxHQUFyQjs7QUFFQVcsY0FBUUMsR0FBUixDQUFZLEtBQUtsQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBcUJEOzs7NkJBR1E7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFNLFdBQVUsaUJBQWhCLEVBQWtDLFVBQVUsS0FBS1csWUFBakQ7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTyxXQUFVLGVBQWpCLEVBQWlDLFNBQVEsTUFBekM7QUFBQTtBQUFBLFdBREY7QUFFRSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsV0FBVSxjQUE3QjtBQUNFLGtCQUFLLGNBRFA7QUFFRSxzQkFBVSxLQUFLRSxXQUZqQjtBQUdFLG1CQUFPLEtBQUtiLEtBQUwsQ0FBV0MsWUFIcEI7QUFGRixTQURGO0FBUUU7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU8sV0FBVSxlQUFqQixFQUFpQyxTQUFRLE1BQXpDO0FBQUE7QUFBQSxXQURGO0FBRUUseUNBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVUsY0FBN0I7QUFDRSxrQkFBSyxjQURQO0FBRUUsc0JBQVUsS0FBS1ksV0FGakI7QUFHRSxtQkFBTyxLQUFLYixLQUFMLENBQVdFLFlBSHBCO0FBRkYsU0FSRjtBQWlCRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTyxXQUFVLGVBQWpCLEVBQWlDLFNBQVEsTUFBekM7QUFBQTtBQUFBLFdBREY7QUFFRSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsV0FBVSxjQUE3QjtBQUNFLGtCQUFLLGNBRFA7QUFFRSxzQkFBVSxLQUFLVyxXQUZqQjtBQUdFLG1CQUFPLEtBQUtiLEtBQUwsQ0FBV0csWUFIcEI7QUFGRixTQWpCRjtBQXdCRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTyxXQUFVLGVBQWpCLEVBQWlDLFNBQVEsTUFBekM7QUFBQTtBQUFBLFdBREY7QUFFRSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsV0FBVSxjQUE3QjtBQUNFLGtCQUFLLGNBRFA7QUFFRSxzQkFBVSxLQUFLVSxXQUZqQjtBQUdFLG1CQUFPLEtBQUtiLEtBQUwsQ0FBV0ksWUFIcEI7QUFGRixTQXhCRjtBQStCRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTyxXQUFVLGVBQWpCLEVBQWlDLFNBQVEsS0FBekM7QUFBQTtBQUFBLFdBREY7QUFFRSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsV0FBVSxjQUE3QjtBQUNFLGtCQUFLLFNBRFA7QUFFRSxzQkFBVSxLQUFLUyxXQUZqQjtBQUdFLG1CQUFPLEtBQUtiLEtBQUwsQ0FBV0ssT0FIcEI7QUFGRixTQS9CRjtBQXNDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTyxXQUFVLG1CQUFqQixFQUFxQyxTQUFRLEtBQTdDO0FBQUE7QUFBQSxXQURGO0FBRUUseUNBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVUsMkJBQTdCO0FBQ0Usa0JBQUssTUFEUDtBQUVFLHNCQUFVLEtBQUtRLFdBRmpCO0FBR0UsbUJBQU8sS0FBS2IsS0FBTCxDQUFXTSxHQUFYLENBQWVDLElBSHhCLEdBRkY7QUFNRTtBQUFBO0FBQUEsY0FBTyxXQUFVLG1CQUFqQixFQUFxQyxTQUFRLEtBQTdDO0FBQUE7QUFBQSxXQU5GO0FBT0UseUNBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVUsMkJBQTdCO0FBQ0Usa0JBQUssTUFEUDtBQUVFLHNCQUFVLEtBQUtNLFdBRmpCO0FBR0UsbUJBQU8sS0FBS2IsS0FBTCxDQUFXTSxHQUFYLENBQWVFLElBSHhCLEdBUEY7QUFXRTtBQUFBO0FBQUEsY0FBTyxXQUFVLGVBQWpCLEVBQWlDLFNBQVEsS0FBekM7QUFBQTtBQUFBLFdBWEY7QUFZRTtBQUFBO0FBQUEsY0FBUSxXQUFVLGNBQWxCO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLE9BQU0sTUFBZDtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLFFBQWQ7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxlQUFkO0FBQUE7QUFBQTtBQUhGO0FBWkYsU0F0Q0Y7QUF3REU7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU8sV0FBVSxlQUFqQixFQUFpQyxTQUFRLE1BQXpDO0FBQUE7QUFBQSxXQURGO0FBRUUseUNBQU8sTUFBSyxNQUFaLEVBQW1CLFdBQVUsY0FBN0I7QUFDRSxrQkFBSyxhQURQO0FBRUUsc0JBQVUsS0FBS0ssV0FGakI7QUFHRSxtQkFBTyxLQUFLYixLQUFMLENBQVdVLFdBSHBCO0FBRkYsU0F4REY7QUFnRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSxpQkFBaEM7QUFBQTtBQUFBO0FBREY7QUFERjtBQWhFRixPQURGO0FBd0VEOzs7O0VBcEtzQmMsTUFBTUMsUzs7QUF3Sy9COzs7QUFHQUMsT0FBTzVCLFVBQVAsR0FBb0JBLFVBQXBCIiwiZmlsZSI6InNlYXJjaC1vcHRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIEFjdGl2aXR5VmVyYjogJycsXG4gICAgICBBY3Rpdml0eU5vdW46ICcnLFxuICAgICAgQWN0aXZpdHlEYXRlOiAnJyxcbiAgICAgIEFjdGl2aXR5VGltZTogJycsXG4gICAgICBaaXBDb2RlOiAnJyxcbiAgICAgIEFnZToge1xuICAgICAgICAkZ3RlOiAnJyxcbiAgICAgICAgJGx0ZTogJydcbiAgICAgIH0sXG4gICAgICBHZW5kZXI6ICcnLFxuICAgICAgRGVzY3JpcHRpb246ICcnXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUlucHV0ID0gdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuaGFuZGxlQWdlSW5wdXQgPSB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVJbnB1dChlKXtcbiAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgdmFyIG5hbWUgPSB0YXJnZXQubmFtZTtcbiAgICBjb25zb2xlLmxvZygnbmFtZScsIG5hbWUsICd2YWx1ZScsIHRhcmdldC52YWx1ZSk7XG5cbiAgICBpZiAobmFtZSA9PT0gJyRndGUnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgQWdlOiB7JyRndGUnOiB0YXJnZXQudmFsdWV9LFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJyRsdGUnKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBBZ2U6IHsnJGx0ZSc6IHRhcmdldC52YWx1ZX0sXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBbbmFtZV06IHRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgLy8gaGFuZGxlQWdlSW5wdXQoZSl7XG4gIC8vICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAvLyAgIHZhciBuYW1lID0gdGFyZ2V0Lm5hbWU7XG4gIC8vICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgLy8gICBpZiAobmFtZSA9PT0gJyRndGUnKSB7XG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgICAgQWdlOiB7JyRndGUnOiB0YXJnZXQudmFsdWV9LFxuICAvLyAgICAgfSk7XG4gIC8vICAgfSBlbHNlIGlmIChuYW1lID09PSAnJGx0ZScpe1xuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICAgIEFnZTogeyckbHRlJzogdGFyZ2V0LnZhbHVlfSxcbiAgLy8gICAgIH0pO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgLy8gdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXRSZXF1ZXN0KHRoaXMpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGFnZSA9IHRoaXMuc3RhdGUuQWdlO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICAvLyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdC9idWRkeVJlcXVlc3QnLCB7XG4gICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIC8vICAgICBkYXRhOiB7XG4gICAgLy8gICAgICAgQWN0aXZpdHlWZXJiOiBzZWxmLkFjdGl2aXR5VmVyYixcbiAgICAvLyAgICAgICBBY3Rpdml0eU5vdW46IHNlbGYuQWN0aXZpdHlOb3VuLFxuICAgIC8vICAgICAgIEFjdGl2aXR5RGF0ZTogc2VsZi5BY3Rpdml0eURhdGUsXG4gICAgLy8gICAgICAgQWN0aXZpdHlUaW1lOiBzZWxmLkFjdGl2aXR5VGltZSxcbiAgICAvLyAgICAgICBaaXBDb2RlOiBzZWxmLlppcENvZGUsXG4gICAgLy8gICAgICAgQWdlOiB7XG4gICAgLy8gICAgICAgICAkZ3RlOiBhZ2UuJGd0ZSxcbiAgICAvLyAgICAgICAgICRsdGU6IGFnZS4kbHRlXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICBEZXNjcmlwdGlvbjogc2VsZi5EZXNjcmlwdGlvblxuICAgIC8vICAgICB9XG4gICAgLy8gICB9KVxuICAgIC8vICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAvLyAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIC8vICAgfSkudGhlbihmdW5jdGlvbihib2R5KSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgIC8vIH0pO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cInZlcmJcIj5BY3RpdnR5IFZlcmI8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBuYW1lPVwiQWN0aXZpdHlWZXJiXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuQWN0aXZpdHlWZXJifS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJub3VuXCI+QWN0aXZpdHkgTm91bjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG5hbWU9XCJBY3Rpdml0eU5vdW5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5BY3Rpdml0eU5vdW59Lz5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiIGh0bWxGb3I9XCJkYXRlXCI+RGF0ZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIG5hbWU9XCJBY3Rpdml0eURhdGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5BY3Rpdml0eURhdGV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cInRpbWVcIj5UaW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgbmFtZT1cIkFjdGl2aXR5VGltZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLkFjdGl2aXR5VGltZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPVwiemlwXCI+WmlwPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgbmFtZT1cIlppcENvZGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5aaXBDb2RlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgYWdlXCIgaHRtbEZvcj1cImFnZVwiPkFnZSBNaW48L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dC1tZWRpdW1cIlxuICAgICAgICAgICAgbmFtZT1cIiRndGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5BZ2UuJGd0ZX0gLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBhZ2VcIiBodG1sRm9yPVwiYWdlXCI+QWdlIE1heDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucHV0LW1lZGl1bVwiXG4gICAgICAgICAgICBuYW1lPVwiJGx0ZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLkFnZS4kbHRlfSAvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCIgaHRtbEZvcj1cImFnZVwiPlNlbGVjdCBHZW5kZXI8L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWFsZVwiPk1hbGU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGZW1hbGVcIj5GZW1hbGU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJObyBQcmVmZXJlbmNlXCI+Tm8gUHJlZmVyZW5jZTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIiBodG1sRm9yPVwiaW5mb1wiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgbmFtZT1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuRGVzY3JpcHRpb259IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLW9mZnNldC0xMFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cblxufVxuXG4vL1BPU1QgUmVxdWVzdCBBY3Rpdml0eSBTZWFyY2hcblxuXG53aW5kb3cuU2VhcmNoRm9ybSA9IFNlYXJjaEZvcm07Il19