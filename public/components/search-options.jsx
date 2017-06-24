class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ActivityVerb: 'Verb',
      ActivityNoun: 'Noun'
    };
  }


  handleActivityVerb(e){
    console.log(e.target.value);
    this.setState({
      ActivityVerb: e.target.value,
    })
  }

  handleActivityNoun(e){
    console.log(e.target.value);
    this.setState({
      ActivityNoun: e.target.value,
    })
  }

  //  handleInput(e){
  //   console.log(e.target.value.AcvtivityVerb);
  //   console.log(e.target.value.AcvtivityVerb);
  //   this.setState({
  //     ActivityVerb: e.target.value.ActivityVerb,
  //     ActivityVerb: e.target.value.AcvivityNoun,
  //   })
  // }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this)
  }



  render() {
    return (

      <form className="form-horizon" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="verb">Activty Verb</label>
          <input type="text" className="form-control"
            onChange={this.handleActivityVerb.bind(this)}
            value={this.state.ActivityVerb}/>
        </div>
        <div className="form-group">
          <label htmlFor="noun">Activity Noun</label>
          <input type="text" className="form-control"
            onChange={this.handleActivityNoun.bind(this)}
            value={this.state.ActivityNoun}/>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </div>
      </form>
    );
  }

}



  /*var searchObj = {
  ActivityVerb: this.searchActivityVerb,
  ActivityNoun: this.searchAcvitityNoun,
  ActivityDate: this.searchActivityDate,
  ActivityTime: this.searchActivityTime,
  Zip: this.zipCode,
  Age: {}
  Description: this.searchDescription,

  {age: {‘$gte’: 21, ‘$lte’: 30}}

  }*/


//POST Request Activity Search





window.SearchForm = SearchForm;