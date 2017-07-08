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
      newInterest: '',
      interests: [],
      friends: [],
      requests: [],
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
            interests: profile.interests,
            bioExist: true,
          });
        }
      }.bind(this),
      error: function() {
        console.log('failed to show profile');
      }
    }).then(() => this.getRequestHistory());
  }

  getRequestHistory() {
    $.ajax({
      url: '/requests',
      type: 'GET',
      success: function(requests) {
        // console.log('recieved requests info', requests);
        this.setState({
          requests: requests
        });
      }.bind(this),
      error: function() {
        console.log('failed to retrieve requests');
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

  postInterest() {
    // console.log('interest before sending', this.state.newInterest);
    $.ajax({
      url: '/interests',
      type: 'POST',
      data: {
        interest: this.state.newInterest
      },
      //dataType: dataType,
      success: function(updatedInterests) {
        console.log('recieved updated interests', updatedInterests);
        this.setState({
          interests: updatedInterests,
          newInterest: ''
        });
      }.bind(this),
      error: function() {
        console.log('failed to retrieve interests');
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

  renderInterestsPane() {
    let interests = this.state.interests;
    let interestsList;

    if(interests.length) {
      interestsList = interests.map((interest) => {
        return <li>{interest}</li>;
      });
    } else {
      interestsList = <li>No interests added yet</li>
    }

    return (
      <div>
        <ul>
          {interestsList}
        </ul>
        <form
          className="add-interest-form form-inline"
          onSubmit={(e) => {
            e.preventDefault();
            this.postInterest();
          }}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="newInterest"
              name="newInterest"
              placeholder="Add New Interest"
              value={this.state.newInterest}
              onChange={this.handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-default"
          >Add</button>
        </form>
      </div>
    );
    // if(interests.length === 0) {
    //   return (
    //     <div>No interests added yet</div>
    //   );
    // } else {
    //    interests.map((interest) => {
    //     return (
    //       <div>Add interests form</div>
    //     );
    //    });
    // }
  };

  renderPreviousRequestsPane() {
    let requests = this.state.requests;
    let requestsList;

    if(requests.length) {
      requestsList = requests.map((request) => {
        return (
          <tr>
            <td>{request.postTitle}</td>
            <td>{request.postDateTime}</td>
            <td>{request.gender}</td>
            <td>{request.zipCode}</td>
            <td>{request.activityVerb}</td>
            <td>{request.activityNoun}</td>
          </tr>
        );
      });
    } else {
      requestsList = <tr><td colSpan="6">No requests added yet</td></tr>
    }

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Gender</th>
            <th>ZipCode</th>
            <th>Min Age</th>
            <th>Max Age</th>
          </tr>
        </thead>
        <tbody>
          {requestsList}
        </tbody>
      </table>
    );
  };

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
          <li role="presentation">
            <a href="#interests" aria-controls="interests" role="tab" data-toggle="tab">Interests</a>
          </li>
          <li role="presentation">
            <a href="#requests" aria-controls="requests"
              role="tab"
              data-toggle="tab"
            >Activity History</a>
          </li>
        </ul>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="profile">
            {profile}
          </div>
          <div role="tabpanel" className="tab-pane" id="interests">
            {this.renderInterestsPane()}
          </div>
          <div role="tabpanel" className="tab-pane" id="requests">
            {this.renderPreviousRequestsPane()}
          </div>
        </div>
      </div>
    );
  }
}

const editInterests = ({}) => {

};



window.Profile = Profile;
