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

  handleSubmitRequest(data) {
    data = data.reverse();
    
    this.setState({
      results: data
    });
  }

  handlePostClick(post) {
    // var results = this.state.results;
    // console.log('CURRENT POST', post)
    this.props.showPost();

    this.setState({
      currentPost: post
    });
  }

  render() {
    if (this.props.render.selectSearch) {
      return (
        <div className="componentWindow">
          <h1>Search Form</h1>
          <SearchForm
          handleSubmitRequest={this.handleSubmitRequest}
          showResults={this.props.showResults}
          />
        </div>
      );
    } else if (this.props.render.selectRequest) {
      return (
        <div className="componentWindow">
          <h1>Buddy Request Form</h1>
          <CreateRequest
            showResults={this.props.showResults}
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
          />
        </div>
      );
    } else if (this.props.render.selectProfile) {
      return (
        <div className="componentWindow">
          <h1>Profile</h1>
          <Profile />
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
    }
  }
}

window.DynamicContent = DynamicContent;