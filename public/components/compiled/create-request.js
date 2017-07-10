'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 Component to handle creating of BuddyRequests on the frontend
 */

var CreateRequest = function (_React$Component) {
  _inherits(CreateRequest, _React$Component);

  function CreateRequest(props) {
    _classCallCheck(this, CreateRequest);

    var _this = _possibleConstructorReturn(this, (CreateRequest.__proto__ || Object.getPrototypeOf(CreateRequest)).call(this, props));

    _this.state = {
      user: _this.props.user,
      postTitle: '',
      description: '',
      postDateTime: '',
      gender: '',
      minAge: '',
      maxAge: '',
      zipCode: '',
      city: '',
      country: '',
      activityVerb: '',
      activityNoun: ''
    };

    _this.handleInputChange = _this.handleInputChange.bind(_this);
    return _this;
  }
  //keeps state updated with value of a HTML form element associated with its variable


  _createClass(CreateRequest, [{
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      //console.log('event.target.value: ', event.target.value);
      var name = e.target.name;
      //console.log('target.name: ', event.target.name);

      this.setState(_defineProperty({}, name, e.target.value));

      //console.log('this.state: ', this.state)
    }
  }, {
    key: 'submitBuddyRequest',
    value: function submitBuddyRequest(e) {
      e.preventDefault();
      $.ajax({
        url: '/buddyRequest',
        type: 'POST',
        data: this.state,

        success: function () {
          $.ajax({
            url: '/buddyRequest',
            type: 'GET'
          }) /*eslint-disable indent*/
          .done(function (response) {
            this.props.handleSubmitRequest(response);
            this.props.handleSelect('renderResults');
          }.bind(this)).fail(function (err) {
            console.log('ERROR fetching', err);
          }); /*eslint-enable indent*/
        }.bind(this),
        error: function error() {
          console.log('failed to post buddy request');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { className: 'form' },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Post Title'
          ),
          React.createElement('input', { type: 'text', value: this.state.postTitle, className: 'form-control', placeholder: 'Enter a title for your post', name: 'postTitle', onChange: this.handleInputChange, required: true })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Event Description'
          ),
          React.createElement('textarea', { type: 'text', value: this.state.description, className: 'form-control', rows: '3', placeholder: 'Enter a description of the event', name: 'description', onChange: this.handleInputChange, required: true })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Event Date/Time'
          ),
          React.createElement('input', { type: 'text', value: this.state.postDateTime, className: 'form-control', placeholder: 'Enter the date/time of the event', name: 'postDateTime', onChange: this.handleInputChange })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Gender'
          ),
          React.createElement(
            'select',
            { className: 'form-control', name: 'gender', onChange: this.handleInputChange, defaultValue: 'No Preference' },
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
            { htmlFor: 'noun' },
            'Minimum Age'
          ),
          React.createElement('input', { type: 'text', value: this.state.minAge, className: 'form-control', placeholder: 'Enter minimum preferred buddy age', name: 'minAge', onChange: this.handleInputChange })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Maximum Age'
          ),
          React.createElement('input', { type: 'text', value: this.state.maxAge, className: 'form-control', placeholder: 'Enter maximum preferred buddy age', name: 'maxAge', onChange: this.handleInputChange })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Zip Code'
          ),
          React.createElement('input', { type: 'text', value: this.state.zipCode, className: 'form-control', placeholder: 'Enter preferred buddy zip code', name: 'zipCode', onChange: this.handleInputChange })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'City'
          ),
          React.createElement('input', { type: 'text', value: this.state.city, className: 'form-control', placeholder: 'Enter a city', name: 'city', onChange: this.handleInputChange })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Country'
          ),
          React.createElement('input', { type: 'text', value: this.state.country, className: 'form-control', placeholder: 'Enter the country', name: 'country', onChange: this.handleInputChange })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Activity Verb'
          ),
          React.createElement('input', { type: 'text', value: this.state.activityVerb, className: 'form-control', placeholder: 'Enter a verb', name: 'activityVerb', onChange: this.handleInputChange, required: true })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'noun' },
            'Activity Noun'
          ),
          React.createElement('input', { type: 'text', value: this.state.activityNoun, className: 'form-control', placeholder: 'Enter a noun', name: 'activityNoun', onChange: this.handleInputChange, required: true })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'div',
            { className: 'col-sm-offset-2 col-sm-10' },
            React.createElement(
              'button',
              { type: 'submit', className: 'btn btn-default', onClick: this.submitBuddyRequest.bind(this) },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NyZWF0ZS1yZXF1ZXN0LmpzeCJdLCJuYW1lcyI6WyJDcmVhdGVSZXF1ZXN0IiwicHJvcHMiLCJzdGF0ZSIsInVzZXIiLCJwb3N0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInBvc3REYXRlVGltZSIsImdlbmRlciIsIm1pbkFnZSIsIm1heEFnZSIsInppcENvZGUiLCJjaXR5IiwiY291bnRyeSIsImFjdGl2aXR5VmVyYiIsImFjdGl2aXR5Tm91biIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsImUiLCJuYW1lIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsInN1Y2Nlc3MiLCJkb25lIiwicmVzcG9uc2UiLCJoYW5kbGVTdWJtaXRSZXF1ZXN0IiwiaGFuZGxlU2VsZWN0IiwiZmFpbCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInN1Ym1pdEJ1ZGR5UmVxdWVzdCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztJQUlNQSxhOzs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxNQUFLRixLQUFMLENBQVdFLElBRE47QUFFWEMsaUJBQVcsRUFGQTtBQUdYQyxtQkFBYSxFQUhGO0FBSVhDLG9CQUFjLEVBSkg7QUFLWEMsY0FBUSxFQUxHO0FBTVhDLGNBQVEsRUFORztBQU9YQyxjQUFRLEVBUEc7QUFRWEMsZUFBUyxFQVJFO0FBU1hDLFlBQUssRUFUTTtBQVVYQyxlQUFRLEVBVkc7QUFXWEMsb0JBQWMsRUFYSDtBQVlYQyxvQkFBYztBQVpILEtBQWI7O0FBZUEsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLE9BQXpCO0FBakJpQjtBQWtCbEI7QUFDRDs7Ozs7c0NBQ2tCQyxDLEVBQUc7QUFDbkI7QUFDQSxVQUFJQyxPQUFPRCxFQUFFRSxNQUFGLENBQVNELElBQXBCO0FBQ0E7O0FBRUEsV0FBS0UsUUFBTCxxQkFDR0YsSUFESCxFQUNVRCxFQUFFRSxNQUFGLENBQVNFLEtBRG5COztBQU1BO0FBQ0Q7Ozt1Q0FFa0JKLEMsRUFBRztBQUNwQkEsUUFBRUssY0FBRjtBQUNBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxlQURBO0FBRUxDLGNBQU0sTUFGRDtBQUdMQyxjQUFNLEtBQUt6QixLQUhOOztBQUtMMEIsaUJBQVMsWUFBVztBQUNsQkwsWUFBRUMsSUFBRixDQUFPO0FBQ0xDLGlCQUFLLGVBREE7QUFFTEMsa0JBQU07QUFGRCxXQUFQLEVBR0c7QUFISCxXQUlDRyxJQUpELENBSU0sVUFBU0MsUUFBVCxFQUFtQjtBQUN2QixpQkFBSzdCLEtBQUwsQ0FBVzhCLG1CQUFYLENBQStCRCxRQUEvQjtBQUNBLGlCQUFLN0IsS0FBTCxDQUFXK0IsWUFBWCxDQUF3QixlQUF4QjtBQUNELFdBSEssQ0FHSmhCLElBSEksQ0FHQyxJQUhELENBSk4sRUFRQ2lCLElBUkQsQ0FRTSxVQUFTQyxHQUFULEVBQWM7QUFDbEJDLG9CQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLEdBQTlCO0FBQ0QsV0FWRCxFQURrQixDQVdkO0FBQ0wsU0FaUSxDQVlQbEIsSUFaTyxDQVlGLElBWkUsQ0FMSjtBQWtCTHFCLGVBQU8saUJBQVc7QUFDaEJGLGtCQUFRQyxHQUFSLENBQVksOEJBQVo7QUFDRDtBQXBCSSxPQUFQO0FBc0JEOzs7NkJBR1E7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFNLFdBQVUsTUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTyxTQUFRLE1BQWY7QUFBQTtBQUFBLFdBREY7QUFFRSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLbEMsS0FBTCxDQUFXRSxTQUFyQyxFQUFnRCxXQUFVLGNBQTFELEVBQXlFLGFBQVksNkJBQXJGLEVBQW1ILE1BQUssV0FBeEgsRUFBb0ksVUFBVSxLQUFLVyxpQkFBbkosRUFBc0ssY0FBdEs7QUFGRixTQURGO0FBS0U7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU8sU0FBUSxNQUFmO0FBQUE7QUFBQSxXQURGO0FBRUUsNENBQVUsTUFBSyxNQUFmLEVBQXNCLE9BQU8sS0FBS2IsS0FBTCxDQUFXRyxXQUF4QyxFQUFxRCxXQUFVLGNBQS9ELEVBQThFLE1BQUssR0FBbkYsRUFBdUYsYUFBWSxrQ0FBbkcsRUFBc0ksTUFBSyxhQUEzSSxFQUF5SixVQUFVLEtBQUtVLGlCQUF4SyxFQUEyTCxjQUEzTDtBQUZGLFNBTEY7QUFTRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTyxTQUFRLE1BQWY7QUFBQTtBQUFBLFdBREY7QUFFRSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLYixLQUFMLENBQVdJLFlBQXJDLEVBQW1ELFdBQVUsY0FBN0QsRUFBNEUsYUFBWSxrQ0FBeEYsRUFBMkgsTUFBSyxjQUFoSSxFQUErSSxVQUFVLEtBQUtTLGlCQUE5SjtBQUZGLFNBVEY7QUFhRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTyxTQUFRLE1BQWY7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBUSxXQUFVLGNBQWxCLEVBQWlDLE1BQUssUUFBdEMsRUFBK0MsVUFBVSxLQUFLQSxpQkFBOUQsRUFBaUYsY0FBYSxlQUE5RjtBQUNFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLE1BQWQ7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxRQUFkO0FBQUE7QUFBQSxhQUZGO0FBR0U7QUFBQTtBQUFBLGdCQUFRLE9BQU0sZUFBZDtBQUFBO0FBQUE7QUFIRjtBQUZGLFNBYkY7QUFxQkU7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU8sU0FBUSxNQUFmO0FBQUE7QUFBQSxXQURGO0FBRUUseUNBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sS0FBS2IsS0FBTCxDQUFXTSxNQUFyQyxFQUE2QyxXQUFVLGNBQXZELEVBQXNFLGFBQVksbUNBQWxGLEVBQXNILE1BQUssUUFBM0gsRUFBb0ksVUFBVSxLQUFLTyxpQkFBbko7QUFGRixTQXJCRjtBQXlCRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTyxTQUFRLE1BQWY7QUFBQTtBQUFBLFdBREY7QUFFRSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLYixLQUFMLENBQVdPLE1BQXJDLEVBQTZDLFdBQVUsY0FBdkQsRUFBc0UsYUFBWSxtQ0FBbEYsRUFBc0gsTUFBSyxRQUEzSCxFQUFvSSxVQUFVLEtBQUtNLGlCQUFuSjtBQUZGLFNBekJGO0FBNkJFO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFPLFNBQVEsTUFBZjtBQUFBO0FBQUEsV0FERjtBQUVFLHlDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtiLEtBQUwsQ0FBV1EsT0FBckMsRUFBOEMsV0FBVSxjQUF4RCxFQUF1RSxhQUFZLGdDQUFuRixFQUFvSCxNQUFLLFNBQXpILEVBQW1JLFVBQVUsS0FBS0ssaUJBQWxKO0FBRkYsU0E3QkY7QUFpQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU8sU0FBUSxNQUFmO0FBQUE7QUFBQSxXQURGO0FBRUUseUNBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sS0FBS2IsS0FBTCxDQUFXUyxJQUFyQyxFQUEyQyxXQUFVLGNBQXJELEVBQW9FLGFBQVksY0FBaEYsRUFBK0YsTUFBSyxNQUFwRyxFQUEyRyxVQUFVLEtBQUtJLGlCQUExSDtBQUZGLFNBakNGO0FBcUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFPLFNBQVEsTUFBZjtBQUFBO0FBQUEsV0FERjtBQUVFLHlDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtiLEtBQUwsQ0FBV1UsT0FBckMsRUFBOEMsV0FBVSxjQUF4RCxFQUF1RSxhQUFZLG1CQUFuRixFQUF1RyxNQUFLLFNBQTVHLEVBQXNILFVBQVUsS0FBS0csaUJBQXJJO0FBRkYsU0FyQ0Y7QUF5Q0U7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU8sU0FBUSxNQUFmO0FBQUE7QUFBQSxXQURGO0FBRUUseUNBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sS0FBS2IsS0FBTCxDQUFXVyxZQUFyQyxFQUFtRCxXQUFVLGNBQTdELEVBQTRFLGFBQVksY0FBeEYsRUFBdUcsTUFBSyxjQUE1RyxFQUEySCxVQUFVLEtBQUtFLGlCQUExSSxFQUE2SixjQUE3SjtBQUZGLFNBekNGO0FBNkNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFPLFNBQVEsTUFBZjtBQUFBO0FBQUEsV0FERjtBQUVFLHlDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtiLEtBQUwsQ0FBV1ksWUFBckMsRUFBbUQsV0FBVSxjQUE3RCxFQUE0RSxhQUFZLGNBQXhGLEVBQXVHLE1BQUssY0FBNUcsRUFBMkgsVUFBVSxLQUFLQyxpQkFBMUksRUFBNkosY0FBN0o7QUFGRixTQTdDRjtBQWlERTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDJCQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGlCQUFoQyxFQUFrRCxTQUFTLEtBQUt1QixrQkFBTCxDQUF3QnRCLElBQXhCLENBQTZCLElBQTdCLENBQTNEO0FBQUE7QUFBQTtBQURGO0FBREY7QUFqREYsT0FERjtBQXlERDs7OztFQXhIeUJ1QixNQUFNQyxTOztBQTJIbENDLE9BQU96QyxhQUFQLEdBQXVCQSxhQUF2Qjs7QUFFQTs7Ozs7Ozs7Ozs7O0FBY0E7O0FBRUEiLCJmaWxlIjoiY3JlYXRlLXJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gQ29tcG9uZW50IHRvIGhhbmRsZSBjcmVhdGluZyBvZiBCdWRkeVJlcXVlc3RzIG9uIHRoZSBmcm9udGVuZFxyXG4gKi9cclxuXHJcbmNsYXNzIENyZWF0ZVJlcXVlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB1c2VyOiB0aGlzLnByb3BzLnVzZXIsXHJcbiAgICAgIHBvc3RUaXRsZTogJycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgcG9zdERhdGVUaW1lOiAnJyxcclxuICAgICAgZ2VuZGVyOiAnJyxcclxuICAgICAgbWluQWdlOiAnJyxcclxuICAgICAgbWF4QWdlOiAnJyxcclxuICAgICAgemlwQ29kZTogJycsXHJcbiAgICAgIGNpdHk6JycsXHJcbiAgICAgIGNvdW50cnk6JycsXHJcbiAgICAgIGFjdGl2aXR5VmVyYjogJycsXHJcbiAgICAgIGFjdGl2aXR5Tm91bjogJydcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgLy9rZWVwcyBzdGF0ZSB1cGRhdGVkIHdpdGggdmFsdWUgb2YgYSBIVE1MIGZvcm0gZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggaXRzIHZhcmlhYmxlXHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnZXZlbnQudGFyZ2V0LnZhbHVlOiAnLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgdmFyIG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgLy9jb25zb2xlLmxvZygndGFyZ2V0Lm5hbWU6ICcsIGV2ZW50LnRhcmdldC5uYW1lKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW25hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKCd0aGlzLnN0YXRlOiAnLCB0aGlzLnN0YXRlKVxyXG4gIH1cclxuXHJcbiAgc3VibWl0QnVkZHlSZXF1ZXN0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogJy9idWRkeVJlcXVlc3QnLFxyXG4gICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgIGRhdGE6IHRoaXMuc3RhdGUsXHJcblxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdXJsOiAnL2J1ZGR5UmVxdWVzdCcsXHJcbiAgICAgICAgICB0eXBlOiAnR0VUJ1xyXG4gICAgICAgIH0pIC8qZXNsaW50LWRpc2FibGUgaW5kZW50Ki9cclxuICAgICAgICAuZG9uZShmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXRSZXF1ZXN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgIHRoaXMucHJvcHMuaGFuZGxlU2VsZWN0KCdyZW5kZXJSZXN1bHRzJyk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxyXG4gICAgICAgIC5mYWlsKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIGZldGNoaW5nJywgZXJyKTtcclxuICAgICAgICB9KTsgLyplc2xpbnQtZW5hYmxlIGluZGVudCovXHJcbiAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgdG8gcG9zdCBidWRkeSByZXF1ZXN0Jyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm91blwiPlBvc3QgVGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUucG9zdFRpdGxlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGEgdGl0bGUgZm9yIHlvdXIgcG9zdFwiIG5hbWU9XCJwb3N0VGl0bGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub3VuXCI+RXZlbnQgRGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJvd3M9XCIzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBhIGRlc2NyaXB0aW9uIG9mIHRoZSBldmVudFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZD48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub3VuXCI+RXZlbnQgRGF0ZS9UaW1lPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBvc3REYXRlVGltZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgZGF0ZS90aW1lIG9mIHRoZSBldmVudFwiIG5hbWU9XCJwb3N0RGF0ZVRpbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub3VuXCI+R2VuZGVyPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImdlbmRlclwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBkZWZhdWx0VmFsdWU9XCJObyBQcmVmZXJlbmNlXCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYWxlXCI+TWFsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmVtYWxlXCI+RmVtYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJObyBQcmVmZXJlbmNlXCI+Tm8gUHJlZmVyZW5jZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vdW5cIj5NaW5pbXVtIEFnZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5taW5BZ2V9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbWluaW11bSBwcmVmZXJyZWQgYnVkZHkgYWdlXCIgbmFtZT1cIm1pbkFnZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vdW5cIj5NYXhpbXVtIEFnZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5tYXhBZ2V9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbWF4aW11bSBwcmVmZXJyZWQgYnVkZHkgYWdlXCIgbmFtZT1cIm1heEFnZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vdW5cIj5aaXAgQ29kZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS56aXBDb2RlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHByZWZlcnJlZCBidWRkeSB6aXAgY29kZVwiIG5hbWU9XCJ6aXBDb2RlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm91blwiPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuY2l0eX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBhIGNpdHlcIiBuYW1lPVwiY2l0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vdW5cIj5Db3VudHJ5PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmNvdW50cnl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGNvdW50cnlcIiBuYW1lPVwiY291bnRyeVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5vdW5cIj5BY3Rpdml0eSBWZXJiPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmFjdGl2aXR5VmVyYn0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBhIHZlcmJcIiBuYW1lPVwiYWN0aXZpdHlWZXJiXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm91blwiPkFjdGl2aXR5IE5vdW48L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuYWN0aXZpdHlOb3VufSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGEgbm91blwiIG5hbWU9XCJhY3Rpdml0eU5vdW5cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e3RoaXMuc3VibWl0QnVkZHlSZXF1ZXN0LmJpbmQodGhpcyl9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuQ3JlYXRlUmVxdWVzdCA9IENyZWF0ZVJlcXVlc3Q7XHJcblxyXG4vKiBKb2huJ3NcclxuXHR1c2VyOiBTdHJpbmcsXHJcblx0Z2VuZGVyOiBTdHJpbmcsXHJcblx0YWdlOiBOdW1iZXIsXHJcblx0emlwQ29kZTogTnVtYmVyLFxyXG4gIGFjdGl2aXR5Tm91bjogU3RyaW5nLFxyXG4gIGFjdGl2aXR5VmVyYjogU3RyaW5nLFxyXG5cdHBvc3RUaXRsZTogU3RyaW5nLFxyXG4gIHBvc3REYXRlVGltZTogU3RyaW5nLFxyXG5cdGRlc2NyaXB0aW9uOiBTdHJpbmdcclxuKi9cclxuXHJcblxyXG5cclxuLy9QT1NUIFJlcXVlc3QgQ3JlYXRlIEFjdGl2aXR5XHJcblxyXG4vKnZhciBhY3Rpdml0eVJlcXVlc3QgPSB7XHJcbiAgVXNlcjogdGhpcy5yZXF1ZXN0VXNlcixcclxuICBBY3Rpdml0eU5vdW46IHRoaXMucmVhdWVzdEFjdGl2aXR5Tm91bixcclxuICBBY3Z0aXZpdHlWZXJiOiB0aGlzLnJlcXVlc3RBYWN0aXZpdHlWZXJiLFxyXG4gIFppcDogdGhpcy56aXBDb2RlLFxyXG4gIEFjdGl2aXR5RGF0ZTogdGhpcy5yZXF1ZXN0RGF0ZSxcclxuICBBY3Rpdml0eVRpbWU6IHRoaXMucmVxdWVzdFRpbWUsXHJcbiAgUG9zdERhdGU6IHRoaXMucmVxdWVzdFBvc3REYXRlLFxyXG4gIFBvc3RUaW1lOiB0aGlzLnJlcXVlc3RQb3N0VGltZSxcclxuICBEZXNjcmlwdGlvbjogIHRoaXMucmVxdWVzdERlc2NyaXB0aW9uXHJcblxyXG59Ki9cclxuIl19