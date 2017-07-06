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
      profilePic: '',
      // interests: interests,
      // friends: friends,
      // interactions: interactions,
      editing: false
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
          bioExist: true,
          editing: false
        });
      }.bind(this),
      error: function() {
        console.log('failed to show profile');
      }
    });
  }

  toggleEdit() {
    this.setState({editing: !this.state.editing});
  }

  showProfileEdit() {
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
              <button type="submit" className="btn btn-default"
                onClick={e => {
                  e.preventDefault();
                  this.postProfileInfo();
                }}
              >Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  showProfileView() {
    return (
      <div className="profile">
        <button
          id="profile-edit-btn"
          className="btn btn-default"
          onClick={() => this.toggleEdit()}
        >Edit</button>
        <div className="panel panel-warning">
          <div className="panel-heading"><h4>{this.state.bioTitle}</h4></div>
          <div className="panel-body">
            <p>{this.state.bio}</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let profile;
    if (!this.state.bioExist || this.state.editing) {
      profile = this.showProfileEdit();
    } else {
      profile = this.showProfileView();
    }

    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
          <li role="presentation"><a href="#interests" aria-controls="interests" role="tab" data-toggle="tab">Interests</a></li>
        </ul>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="profile">
            {profile}
          </div>
          <div role="tabpanel" className="tab-pane" id="interests">...</div>
        </div>
      </div>
    );
  }
}

const editInterests = ({}) => {

};



window.Profile = Profile;
