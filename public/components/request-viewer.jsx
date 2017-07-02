/*
 Deprecated request viewer component
 */

class RequestViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: '',
      description: '',
      postDateTime: '',
      gender: '',
      minAge: '',
      maxAge: '',
      zipCode: '',
      activityVerb: '',
      activityNoun: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePostClick = this.props.handlePostClick;
  }

  handleInputChange(event) {
    //console.log('event.target.value: ', event.target.value);
    var name = event.target.name;
    //console.log('target.name: ', event.target.name);

    this.setState({
      [name]: event.target.value
    });

    //console.log('this.state: ', this.state)
  }




  //**************need to change html****************//
  render() {
    return (
      <div class="stuff"></div>
    );
  }
}

window.RequestViewer = RequestViewer;

/*
    updated BuddyRequest schema
 user: String,
 gender: String,
 minAge: Number,
 maxAge: Number,
 zipCode: Number,
 activityNoun: String,
 activityVerb: String,
 postTitle: String,
 postDateTime: String,
 description: String,
 associatedPeople: [],
 ratings: []
 */


/* John's
 user: String,
 gender: String,
 age: Number,
 zipCode: Number,
 activityNoun: String,
 activityVerb: String,
 postTitle: String,
 postDateTime: String,
 description: String
 */



//POST Request Create Activity

/*var activityRequest = {
 User: this.requestUser,
 ActivityNoun: this.reauestActivityNoun,
 AcvtivityVerb: this.requestAactivityVerb,
 Zip: this.zipCode,
 ActivityDate: this.requestDate,
 ActivityTime: this.requestTime,
 PostDate: this.requestPostDate,
 PostTime: this.requestPostTime,
 Description:  this.requestDescription

 }*/