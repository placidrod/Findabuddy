class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activityVerb: '',
      activityNoun: '',
      activityDate: '',
      activityTime: '',
      zipCode: '',
      age: {
        $gte: '',
        $lte: ''
      },
      gender: 'No Preference',
      description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleAgeInput = this.handleAgeInput.bind(this);
    this.handleSubmitRequest = this.props.handleSubmitRequest;
  }

  handleInput(e){
    var target = e.target;
    var name = target.name;

      this.setState({
        [name]: target.value,
      });

  }

  handleAgeInput(e){
    var target = e.target;
    var name = target.name;
    var min = this.state.age.$gte;
    var max = this.state.age.$lte;
    // var age = this.state.Age;

    if (name === '$gte') {
      this.setState({
        age: {
          $gte :target.value,
          $lte :max
        }
      });

    } else if (name === '$lte'){
      this.setState({
        age: {
          $gte : min,
          $lte :target.value
        }
      });

    }
  }

  handleSubmit(e) {

    e.preventDefault();
    var self = this;
    // self.handleSubmitRequest(self.state);
    fetch('http://127.0.0.1:3000/buddyRequest', {
        method: 'GET',
        data: self.state
    })
    .then(function(response) {
      console.log('RESPONSE', response.json());
      self.handleSubmitRequest(self.state);
      return response.json();
    }).catch(function(err){
      console.log('ERROR fetching', err)
    });
  }


  render() {
    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="control-label" htmlFor="verb">Activty Verb</label>
          <input type="text" className="form-control"
            name="activityVerb"
            onChange={this.handleInput}
            value={this.state.activityVerb}/>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="noun">activity Noun</label>
          <input type="text" className="form-control"
            name="activityNoun"
            onChange={this.handleInput}
            value={this.state.activityNoun}/>
        </div>


        <div className="form-group">
          <label className="control-label" htmlFor="date">Date</label>
          <input type="text" className="form-control"
            name="activityDate"
            onChange={this.handleInput}
            value={this.state.activityDate}/>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="time">Time</label>
          <input type="text" className="form-control"
            name="activityTime"
            onChange={this.handleInput}
            value={this.state.activityTime}/>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="zip">Zip</label>
          <input type="text" className="form-control"
            name="zipCode"
            onChange={this.handleInput}
            value={this.state.zipCode} />
        </div>
        <div className="form-group">
          <label className="control-label age" htmlFor="age">Age Min</label>
          <input type="text" className="form-control input-medium"
            name="$gte"
            onChange={this.handleAgeInput}
            value={this.state.age.$gte} />
          <label className="control-label age" htmlFor="age">Age Max</label>
          <input type="text" className="form-control input-medium"
            name="$lte"
            onChange={this.handleAgeInput}
            value={this.state.age.$lte} />
          <label className="control-label" htmlFor="age">Select Gender</label>
          <select className="form-control"
              name="gender"
              onChange={this.handleInput}
              >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="No Preference">No Preference</option>
          </select>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="info">Description</label>
          <input type="text" className="form-control"
            name="description"
            onChange={this.handleInput}
            value={this.state.description} />
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

//POST Request activity Search


window.SearchForm = SearchForm;