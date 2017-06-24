class DynamicContent extends React.Component {

    constructor(props) {
      super(props);
      this.state = {


      }
    }

    handleSubmitRequest(data) {
      console.log('You submitted a form', data)
    }

    render() {
      return (
        <div className="searchRequest">
          <h1>Search Form</h1>
          <SearchForm onSubmit={this.handleSubmitRequest.bind(this)}/>
        </div>
      );

    }

}

window.DynamicContent = DynamicContent;