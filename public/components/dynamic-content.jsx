class DynamicContent extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
      this.handleSubmitRequest = this.handleSubmitRequest.bind(this)

    }



    render() {
      return (
        <div className="searchRequest">
          <h1>Search Form</h1>
          <SearchForm onSubmit={this.handleSubmitRequest}/>
          <SearchList />
        </div>
      );

    }

}

window.DynamicContent = DynamicContent;