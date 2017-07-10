'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 Component for viewing previously created buddy request posts
 */

var PostInfo = function (_React$Component) {
  _inherits(PostInfo, _React$Component);

  function PostInfo(props) {
    _classCallCheck(this, PostInfo);

    var _this = _possibleConstructorReturn(this, (PostInfo.__proto__ || Object.getPrototypeOf(PostInfo)).call(this, props));

    _this.state = {
      ratingsArray: []
    };
    return _this;
  }

  _createClass(PostInfo, [{
    key: 'handleBackButton',
    value: function handleBackButton() {}
    //loads in ratings for post once component is mounted

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      //console.log('postInfo loaded: ',this.props.post,this.state.ratingsArray);
      $.ajax({
        url: '/rating/' + this.props.post._id,
        type: 'GET'
      }).done(function (data) {
        this.setState({ ratingsArray: data });
        // console.log('rating data for post ',data, this.state.ratingsArray);
      }.bind(this)).fail(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR, textStatus, errorThrown);
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'post' },
          React.createElement(
            'div',
            { className: 'media' },
            React.createElement(
              'div',
              { className: 'media-body' },
              React.createElement(
                'h4',
                { className: 'media-heading' },
                this.props.post.postTitle
              ),
              React.createElement(
                'p',
                null,
                this.props.post.description
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'ratings' },
          React.createElement(RatingsTable, { ratings: this.state.ratingsArray })
        ),
        React.createElement(
          'div',
          { className: 'sendMessage' },
          React.createElement(SendMessage, { recipient: this.props.post.user, sender: this.props.user })
        )
      );
    }
  }]);

  return PostInfo;
}(React.Component);

window.PostInfo = PostInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Bvc3QtaW5mby5qc3giXSwibmFtZXMiOlsiUG9zdEluZm8iLCJwcm9wcyIsInN0YXRlIiwicmF0aW5nc0FycmF5IiwiJCIsImFqYXgiLCJ1cmwiLCJwb3N0IiwiX2lkIiwidHlwZSIsImRvbmUiLCJkYXRhIiwic2V0U3RhdGUiLCJiaW5kIiwiZmFpbCIsImpxWEhSIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwiY29uc29sZSIsImxvZyIsInBvc3RUaXRsZSIsImRlc2NyaXB0aW9uIiwidXNlciIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7SUFJTUEsUTs7O0FBRUosb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG9CQUFjO0FBREgsS0FBYjtBQUZpQjtBQUtsQjs7Ozt1Q0FFa0IsQ0FFbEI7QUFDRDs7Ozt3Q0FDcUI7QUFDbkI7QUFDQUMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGFBQUssYUFBYSxLQUFLTCxLQUFMLENBQVdNLElBQVgsQ0FBZ0JDLEdBRDdCO0FBRUxDLGNBQU07QUFGRCxPQUFQLEVBSUdDLElBSkgsQ0FJUSxVQUFTQyxJQUFULEVBQWU7QUFDbkIsYUFBS0MsUUFBTCxDQUFjLEVBQUNULGNBQWNRLElBQWYsRUFBZDtBQUNBO0FBQ0QsT0FISyxDQUdKRSxJQUhJLENBR0MsSUFIRCxDQUpSLEVBUUdDLElBUkgsQ0FRUSxVQUFTQyxLQUFULEVBQWdCQyxVQUFoQixFQUE0QkMsV0FBNUIsRUFBeUM7QUFDN0NDLGdCQUFRQyxHQUFSLENBQVlKLEtBQVosRUFBbUJDLFVBQW5CLEVBQStCQyxXQUEvQjtBQUNELE9BVkg7QUFXRDs7OzZCQUVROztBQUdQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxPQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBSSxXQUFVLGVBQWQ7QUFBK0IscUJBQUtoQixLQUFMLENBQVdNLElBQVgsQ0FBZ0JhO0FBQS9DLGVBREY7QUFHRTtBQUFBO0FBQUE7QUFBSSxxQkFBS25CLEtBQUwsQ0FBV00sSUFBWCxDQUFnQmM7QUFBcEI7QUFIRjtBQURGO0FBREYsU0FERjtBQVdFO0FBQUE7QUFBQSxZQUFLLFdBQVUsU0FBZjtBQUNFLDhCQUFDLFlBQUQsSUFBYyxTQUFTLEtBQUtuQixLQUFMLENBQVdDLFlBQWxDO0FBREYsU0FYRjtBQWNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUNFLDhCQUFDLFdBQUQsSUFBYSxXQUFXLEtBQUtGLEtBQUwsQ0FBV00sSUFBWCxDQUFnQmUsSUFBeEMsRUFBOEMsUUFBUSxLQUFLckIsS0FBTCxDQUFXcUIsSUFBakU7QUFERjtBQWRGLE9BREY7QUFvQkQ7Ozs7RUFuRG9CQyxNQUFNQyxTOztBQXVEN0JDLE9BQU96QixRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJwb3N0LWluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gQ29tcG9uZW50IGZvciB2aWV3aW5nIHByZXZpb3VzbHkgY3JlYXRlZCBidWRkeSByZXF1ZXN0IHBvc3RzXHJcbiAqL1xyXG5cclxuY2xhc3MgUG9zdEluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcmF0aW5nc0FycmF5OiBbXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUJhY2tCdXR0b24oKSB7XHJcblxyXG4gIH1cclxuICAvL2xvYWRzIGluIHJhdGluZ3MgZm9yIHBvc3Qgb25jZSBjb21wb25lbnQgaXMgbW91bnRlZFxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ3Bvc3RJbmZvIGxvYWRlZDogJyx0aGlzLnByb3BzLnBvc3QsdGhpcy5zdGF0ZS5yYXRpbmdzQXJyYXkpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdXJsOiAnL3JhdGluZy8nICsgdGhpcy5wcm9wcy5wb3N0Ll9pZCxcclxuICAgICAgdHlwZTogJ0dFVCdcclxuICAgIH0pXHJcbiAgICAgIC5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtyYXRpbmdzQXJyYXk6IGRhdGF9KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmF0aW5nIGRhdGEgZm9yIHBvc3QgJyxkYXRhLCB0aGlzLnN0YXRlLnJhdGluZ3NBcnJheSk7XHJcbiAgICAgIH0uYmluZCh0aGlzKSlcclxuICAgICAgLmZhaWwoZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nXCI+e3RoaXMucHJvcHMucG9zdC5wb3N0VGl0bGVcclxuICAgICAgICAgICAgICB9PC9oND5cclxuICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5wb3N0LmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3NcIj5cclxuICAgICAgICAgIDxSYXRpbmdzVGFibGUgcmF0aW5ncz17dGhpcy5zdGF0ZS5yYXRpbmdzQXJyYXl9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmRNZXNzYWdlXCI+XHJcbiAgICAgICAgICA8U2VuZE1lc3NhZ2UgcmVjaXBpZW50PXt0aGlzLnByb3BzLnBvc3QudXNlcn0gc2VuZGVyPXt0aGlzLnByb3BzLnVzZXJ9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbndpbmRvdy5Qb3N0SW5mbyA9IFBvc3RJbmZvO1xyXG4iXX0=