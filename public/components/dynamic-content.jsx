/*
 Main dynamic container for bulk of application content.  The state, and visibility of components, changes based on
 how the user interacts with the frontend UI
 */

class DynamicContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // renderResults: this.props.render.renderResults,
      results: [],
      currentPost: ''
    };
    this.handleSubmitRequest = this.handleSubmitRequest.bind(this);
    this.handlePostClick = this.handlePostClick.bind(this);
  }
  //click event handler for search submit & new buddy request submit
  handleSubmitRequest(data) {
    data = data.reverse();

    this.setState({
      results: data
    });
  }
  //renders a specific request when it is clicked on in the search results list
  handlePostClick(post) {
    // var results = this.state.results;
    //console.log('CURRENT POST', post)
    this.props.handleSelect('renderPost');

    this.setState({
      currentPost: post,
    });
  }

  render() {
    if (this.props.render.selectSearch) {
      return (
        <div className="componentWindow">
          <h1>Search Form</h1>
          <SearchForm
          handleSubmitRequest={this.handleSubmitRequest}
          handleSelect={this.props.handleSelect}
          />
        </div>
      );
    } else if (this.props.render.selectRequest) {
      return (
        <div className="componentWindow">
          <h1>Buddy Request Form</h1>
          <CreateRequest
            handleSelect={this.props.handleSelect}
            handleSubmitRequest={this.handleSubmitRequest}
            user={this.props.user}
          />
        </div>
      );
    } else if (this.props.render.renderPost) {
      return (
        <div className="componentWindow">
          <h1>Post Info</h1>
          <PostInfo
            post={this.state.currentPost}
            user={this.props.user}
          />
        </div>
      );
    } else if (this.props.render.selectProfile) {
      return (
        <div className="componentWindow">
          <h1>About Me</h1>
          <Profile
            user={this.props.user}
          />
        </div>
      );
    } else if (this.props.render.renderResults) {
      return (
        <div className="componentWindow">
          <h1>Search Result</h1>
          <SearchList
            searchResult={this.state.results}
            handlePostClick={this.handlePostClick}
          />
        </div>
      );
    } else if (this.props.render.selectMessages) {
      return (
        <div className="componentWindow">
          <h1>Messages</h1>
          <MessageList
            handleNotificationSelect={this.props.handleNotificationSelect}
            selectedNotification={this.props.selectedNotification}
            user={this.props.user}
            messages={this.props.messages}
          />
        </div>
      );
    }
  }
}

window.DynamicContent = DynamicContent;