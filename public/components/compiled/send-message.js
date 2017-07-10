'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 Component for sending in-application messages to another user
 */
var SendMessage = function (_React$Component) {
  _inherits(SendMessage, _React$Component);

  function SendMessage(props) {
    _classCallCheck(this, SendMessage);

    var _this = _possibleConstructorReturn(this, (SendMessage.__proto__ || Object.getPrototypeOf(SendMessage)).call(this, props));

    _this.state = {
      sender: _this.props.sender,
      message: ''
    };
    _this.recipient = _this.props.recipient;
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleSend = _this.handleSend.bind(_this);
    return _this;
  }

  _createClass(SendMessage, [{
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var name = event.target.name;

      this.setState(_defineProperty({}, name, event.target.value));
    }
  }, {
    key: 'handleSend',
    value: function handleSend(event) {
      event.preventDefault();
      var data = {
        recipient: this.recipient,
        text: this.state.message
      };

      if (this.state.message === '') {
        console.log('Please type a message');
      } else if (this.recipient === undefined || this.recipient === '') {
        console.log('Please select a recipient');
      } else {
        $.ajax({
          url: '/message',
          type: 'POST',
          data: data,
          success: function () {
            console.log('success');
            this.setState({
              message: ''
            });
          }.bind(this),
          error: function error(err) {
            console.log('failed to post message', err);
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.recipient = this.props.recipient;
      return React.createElement(
        'form',
        { className: 'form' },
        React.createElement(
          'h3',
          null,
          'Send a Message'
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'h4',
            null,
            'To: ',
            this.recipient
          )
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('textarea', { type: 'text', value: this.state.message, className: 'form-control', rows: '3', placeholder: 'Let the person know you\'re interested in the activity', name: 'message', onChange: function onChange(e) {
              return _this2.handleInputChange(e);
            } })
        ),
        React.createElement(
          'button',
          { type: 'submit', className: 'btn btn-default', onClick: function onClick(e) {
              return _this2.handleSend(e);
            } },
          'Send'
        )
      );
    }
  }]);

  return SendMessage;
}(React.Component);

window.SendMessage = SendMessage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlbmQtbWVzc2FnZS5qc3giXSwibmFtZXMiOlsiU2VuZE1lc3NhZ2UiLCJwcm9wcyIsInN0YXRlIiwic2VuZGVyIiwibWVzc2FnZSIsInJlY2lwaWVudCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVNlbmQiLCJldmVudCIsIm5hbWUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJzdWNjZXNzIiwiZXJyb3IiLCJlcnIiLCJlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7SUFHTUEsVzs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsTUFBS0YsS0FBTCxDQUFXRSxNQURSO0FBRVhDLGVBQVM7QUFGRSxLQUFiO0FBSUEsVUFBS0MsU0FBTCxHQUFpQixNQUFLSixLQUFMLENBQVdJLFNBQTVCO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLE9BQXpCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRCxJQUFoQixPQUFsQjtBQVJpQjtBQVNsQjs7OztzQ0FFaUJFLEssRUFBTztBQUN2QixVQUFJQyxPQUFPRCxNQUFNRSxNQUFOLENBQWFELElBQXhCOztBQUVBLFdBQUtFLFFBQUwscUJBQ0dGLElBREgsRUFDVUQsTUFBTUUsTUFBTixDQUFhRSxLQUR2QjtBQUdEOzs7K0JBRVVKLEssRUFBTztBQUNoQkEsWUFBTUssY0FBTjtBQUNBLFVBQUlDLE9BQU87QUFDVFYsbUJBQVcsS0FBS0EsU0FEUDtBQUVUVyxjQUFNLEtBQUtkLEtBQUwsQ0FBV0U7QUFGUixPQUFYOztBQUtBLFVBQUksS0FBS0YsS0FBTCxDQUFXRSxPQUFYLEtBQXVCLEVBQTNCLEVBQStCO0FBQzdCYSxnQkFBUUMsR0FBUixDQUFZLHVCQUFaO0FBQ0QsT0FGRCxNQUVPLElBQUssS0FBS2IsU0FBTCxLQUFtQmMsU0FBcEIsSUFBbUMsS0FBS2QsU0FBTCxLQUFtQixFQUExRCxFQUErRDtBQUNwRVksZ0JBQVFDLEdBQVIsQ0FBWSwyQkFBWjtBQUNELE9BRk0sTUFFQTtBQUNMRSxVQUFFQyxJQUFGLENBQU87QUFDTEMsZUFBSyxVQURBO0FBRUxDLGdCQUFNLE1BRkQ7QUFHTFIsZ0JBQU1BLElBSEQ7QUFJTFMsbUJBQVMsWUFBVztBQUNsQlAsb0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsaUJBQUtOLFFBQUwsQ0FBYztBQUNaUix1QkFBUztBQURHLGFBQWQ7QUFHRCxXQUxRLENBS1BHLElBTE8sQ0FLRixJQUxFLENBSko7QUFVTGtCLGlCQUFPLGVBQVNDLEdBQVQsRUFBYztBQUNuQlQsb0JBQVFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ1EsR0FBdEM7QUFDRDtBQVpJLFNBQVA7QUFjRDtBQUNGOzs7NkJBRVE7QUFBQTs7QUFDUCxXQUFLckIsU0FBTCxHQUFpQixLQUFLSixLQUFMLENBQVdJLFNBQTVCO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLE1BQWhCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBUyxpQkFBS0E7QUFBZDtBQURGLFNBRkY7QUFNRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRSw0Q0FBVSxNQUFLLE1BQWYsRUFBc0IsT0FBTyxLQUFLSCxLQUFMLENBQVdFLE9BQXhDLEVBQWlELFdBQVUsY0FBM0QsRUFBMEUsTUFBSyxHQUEvRSxFQUFtRixhQUFZLHdEQUEvRixFQUF1SixNQUFLLFNBQTVKLEVBQXNLLFVBQVUsa0JBQUN1QixDQUFEO0FBQUEscUJBQU8sT0FBS3JCLGlCQUFMLENBQXVCcUIsQ0FBdkIsQ0FBUDtBQUFBLGFBQWhMO0FBREYsU0FORjtBQVNFO0FBQUE7QUFBQSxZQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGlCQUFoQyxFQUFrRCxTQUFTLGlCQUFDQSxDQUFEO0FBQUEscUJBQU8sT0FBS25CLFVBQUwsQ0FBZ0JtQixDQUFoQixDQUFQO0FBQUEsYUFBM0Q7QUFBQTtBQUFBO0FBVEYsT0FERjtBQWFEOzs7O0VBaEV1QkMsTUFBTUMsUzs7QUFtRWhDQyxPQUFPOUIsV0FBUCxHQUFxQkEsV0FBckIiLCJmaWxlIjoic2VuZC1tZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuIENvbXBvbmVudCBmb3Igc2VuZGluZyBpbi1hcHBsaWNhdGlvbiBtZXNzYWdlcyB0byBhbm90aGVyIHVzZXJcclxuICovXHJcbmNsYXNzIFNlbmRNZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2VuZGVyOiB0aGlzLnByb3BzLnNlbmRlcixcclxuICAgICAgbWVzc2FnZTogJydcclxuICAgIH07XHJcbiAgICB0aGlzLnJlY2lwaWVudCA9IHRoaXMucHJvcHMucmVjaXBpZW50O1xyXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU2VuZCA9IHRoaXMuaGFuZGxlU2VuZC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHZhciBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtuYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNlbmQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgcmVjaXBpZW50OiB0aGlzLnJlY2lwaWVudCxcclxuICAgICAgdGV4dDogdGhpcy5zdGF0ZS5tZXNzYWdlXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLm1lc3NhZ2UgPT09ICcnKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdQbGVhc2UgdHlwZSBhIG1lc3NhZ2UnKTtcclxuICAgIH0gZWxzZSBpZiAoKHRoaXMucmVjaXBpZW50ID09PSB1bmRlZmluZWQpIHx8ICh0aGlzLnJlY2lwaWVudCA9PT0gJycpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdQbGVhc2Ugc2VsZWN0IGEgcmVjaXBpZW50Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJy9tZXNzYWdlJyxcclxuICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogJydcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZmFpbGVkIHRvIHBvc3QgbWVzc2FnZScsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMucmVjaXBpZW50ID0gdGhpcy5wcm9wcy5yZWNpcGllbnQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCI+XHJcbiAgICAgICAgPGgzPlNlbmQgYSBNZXNzYWdlPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxoND5Ubzoge3RoaXMucmVjaXBpZW50fTwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubWVzc2FnZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcm93cz1cIjNcIiBwbGFjZWhvbGRlcj1cIkxldCB0aGUgcGVyc29uIGtub3cgeW91J3JlIGludGVyZXN0ZWQgaW4gdGhlIGFjdGl2aXR5XCIgbmFtZT1cIm1lc3NhZ2VcIiBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoZSl9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlU2VuZChlKX0+U2VuZDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93LlNlbmRNZXNzYWdlID0gU2VuZE1lc3NhZ2U7XHJcbiJdfQ==