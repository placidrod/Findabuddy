class DynamicContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmitRequest = this.handleSubmitRequest.bind(this);
    this.handlePostClick = this.handlePostClick.bind(this);
  }

  handleSubmitRequest(data) {
    console.log('You submitted a form', data)
  }

  handlePostClick() {
  }

  render() {
    if (this.props.render.selectSearch) {
      return (
        <div className="searchRequest">
          <h1>Search Form</h1>
          <SearchForm handleSubmitRequest={this.handleSubmitRequest}/>
        </div>
      );
    } else if (this.props.render.selectRequest) {
      return (
        <div className="searchRequest">
          <h1>Buddy Request Form</h1>
          <CreateRequest handlePostClick={this.handlePostClick}/>
        </div>
      );
    } else if (this.props.render.selectProfile) {
      return (
        <div className="searchRequest">
          <h1>Profile</h1>
          <Profile />
        </div>
      );
    }
  }
}

window.DynamicContent = DynamicContent;