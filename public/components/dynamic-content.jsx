class DynamicContent extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
      this.handleSubmitRequest = this.handleSubmitRequest.bind(this)

    }

    handleSubmitRequest(data) {
      console.log('You submitted a form', data)
    }

    handlePostClick() {
    }

    render() {
      return (
        <div className="searchRequest">

          <h1>Search Form</h1>
          <SearchForm onSubmit={this.handleSubmitRequest.bind(this)}/>
          <h1>Buddy Request Form</h1>
          <CreateRequest handlePostClick={this.handlePostClick}/>

        </div>
      );

    }

}

window.DynamicContent = DynamicContent;