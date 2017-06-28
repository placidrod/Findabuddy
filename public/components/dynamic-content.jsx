class DynamicContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // renderResults: this.props.render.renderResults,
      results: []
    };
    this.handleSubmitRequest = this.handleSubmitRequest.bind(this);
    this.handlePostClick = this.handlePostClick.bind(this);
  }

  handleSubmitRequest(data) {
    console.log('You submitted a BuddyRequest search', data);
    // console.log(this.props.render.renderResults);
    this.setState({
      // renderResults: true,
      results: data
    });
  }

  handlePostClick() {
  }

  render() {
    if (this.props.render.selectSearch) {
      return (
        <div className="searchRequest">
          <h1>Search Form</h1>
          <SearchForm
          handleSubmitRequest={this.handleSubmitRequest}
          showResults={this.props.showResults}
          />
        </div>
      );
    } else if (this.props.render.selectRequest) {
      return (
        <div className="searchRequest">
          <h1>Buddy Request Form</h1>
          <CreateRequest handlePostClick={this.handlePostClick}
          showResults={this.props.showResults}
          />
        </div>
      );
    } else if (this.props.render.selectProfile) {
      return (
        <div className="searchRequest">
          <h1>Profile</h1>
          <Profile />
        </div>
      );
    } else if (this.props.render.renderResults) {
      return (
        <div className="searchRequest">
          <h1>Search Result</h1>
          <SearchList
             searchResult={this.state.results}
          />
        </div>
      );
    }
  }
}

window.DynamicContent = DynamicContent;