class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ActivityVerb: '',
      ActivityNoun: '',
      ActivityDate: '',
      ActivityTime: '',
      ZipCode: '',
      Age: {
        $gte: '',
        $lte: ''
      },
      Gender: '',
      Description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    // this.handleAgeInput = this.handleInput.bind(this);
  }

  handleInput(e){
    var target = e.target;
    var name = target.name;
    console.log('name', name, 'value', target.value);

    if (name === '$gte') {
      this.setState({
        Age: {'$gte': target.value},
      });
      console.log(this.state)
    } else if (name === '$lte'){
      this.setState({
        Age: {'$lte': target.value},
      });
      console.log(this.state)
    } else {
      this.setState({
        [name]: target.value,
      });
    }

  }

  // handleAgeInput(e){
  //   var target = e.target;
  //   var name = target.name;
  //   console.log(this.state)
  //   if (name === '$gte') {
  //     this.setState({
  //       Age: {'$gte': target.value},
  //     });
  //   } else if (name === '$lte'){
  //     this.setState({
  //       Age: {'$lte': target.value},
  //     });
  //   }
  // }

  handleSubmit(e) {
    // this.props.handleSubmitRequest(this);
    e.preventDefault();
    var self = this;
    var age = this.state.Age;

    console.log(age)
    // fetch('http://127.0.0.1:3000/buddyRequest', {
    //     method: 'POST',
    //     data: {
    //       ActivityVerb: self.ActivityVerb,
    //       ActivityNoun: self.ActivityNoun,
    //       ActivityDate: self.ActivityDate,
    //       ActivityTime: self.ActivityTime,
    //       ZipCode: self.ZipCode,
    //       Age: {
    //         $gte: age.$gte,
    //         $lte: age.$lte
    //       },
    //       Description: self.Description
    //     }
    //   })
    //   .then(function(response) {
    //     return response.json()
    //   }).then(function(body) {
    //     console.log(body);
    // });
  }


  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="control-label" htmlFor="verb">Activty Verb</label>
          <input type="text" className="form-control"
            name="ActivityVerb"
            onChange={this.handleInput}
            value={this.state.ActivityVerb}/>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="noun">Activity Noun</label>
          <input type="text" className="form-control"
            name="ActivityNoun"
            onChange={this.handleInput}
            value={this.state.ActivityNoun}/>
        </div>


        <div className="form-group">
          <label className="control-label" htmlFor="date">Date</label>
          <input type="text" className="form-control"
            name="ActivityDate"
            onChange={this.handleInput}
            value={this.state.ActivityDate}/>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="time">Time</label>
          <input type="password" className="form-control"
            name="ActivityTime"
            onChange={this.handleInput}
            value={this.state.ActivityTime}/>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="zip">Zip</label>
          <input type="text" className="form-control"
            name="ZipCode"
            onChange={this.handleInput}
            value={this.state.ZipCode} />
        </div>
        <div className="form-group">
          <label className="control-label age" htmlFor="age">Age Min</label>
          <input type="text" className="form-control input-medium"
            name="$gte"
            onChange={this.handleInput}
            value={this.state.Age.$gte} />
          <label className="control-label age" htmlFor="age">Age Max</label>
          <input type="text" className="form-control input-medium"
            name="$lte"
            onChange={this.handleInput}
            value={this.state.Age.$lte} />
          <label className="control-label" htmlFor="age">Select Gender</label>
          <select className="form-control">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="No Preference">No Preference</option>
          </select>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="info">Description</label>
          <input type="text" className="form-control"
            name="Description"
            onChange={this.handleInput}
            value={this.state.Description} />
        </div>

        <div className="form-group">
          <div className="col-sm-offset-10">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </div>
      </form>
    );
  }

}

//POST Request Activity Search


window.SearchForm = SearchForm;