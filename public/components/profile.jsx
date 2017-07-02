/*
 Component for viewing user profile
 */
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      bioTitle: '',
      bioExist: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.postProfileInfo = this.postProfileInfo.bind(this);
  }

  componentDidMount() {
    this.getProfileInfo();
  }

  handleInputChange(e) {
    var name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  getProfileInfo() {

    $.ajax({
      url: '/profile',
      type: 'GET',
      data: {username: this.props.user},
      success: function(profile) {
        console.log('recieved profile info', profile);
        if (profile.bio && profile.bioTitle) {
          this.setState({
            bio: profile.bio,
            bioTitle: profile.bioTitle,
            bioExist: true
          });
        }
      }.bind(this),
      error: function() {
        console.log('failed to show profile');
      }
    });
  }

  postProfileInfo() {
    $.ajax({
      url: '/profile',
      type: 'POST',
      data: {
        username: this.props.user,
        bioTitle: this.state.bioTitle,
        bio: this.state.bio
      },
      //dataType: dataType,
      success: function(profile) {
        console.log('recieved an update for profile info', profile);
        this.setState({
          bio: profile.bio,
          bioTitle: profile.bioTitle,
          bioExist: true
        });
      }.bind(this),
      error: function() {
        console.log('failed to show profile');
      }
    });
  }

  render() {

    if (!this.state.bioExist) {
      return (
        <div className="profile">
          <h3>Say something about yourself</h3>
          <form className="form">
            <div className="form-group">
              <label htmlFor="noun">Profile title</label>
              <input type="text"
                value={this.state.bioTitle}
                className="form-control"
                placeholder="Enter a quick title about your bio"
                name="bioTitle"
                onChange={this.handleInputChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="noun">User bio</label>
              <textarea type="text"
                value={this.state.bio}
                className="form-control"
                rows="5"
                placeholder="Write a brief description about yourself"
                name="bio"
                onChange={this.handleInputChange} required>
              </textarea>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default" onClick={this.postProfileInfo}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      )
    } else  {
        return (
          <div className="profile">
            <div className="panel panel-warning">
              <div className="panel-heading"><h4>{this.state.bioTitle}</h4></div>
              <div className="panel-body">
                <p>{this.state.bio}</p>
              </div>
            </div>
          </div>
        )
    }
  }
}

window.Profile = Profile;