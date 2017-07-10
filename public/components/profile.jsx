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
      // friends: props.friends,
      // interactions: interactions,
      editing: false,
      buddyProfile: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.postProfileInfo = this.postProfileInfo.bind(this);
  }

  componentDidMount() {
    this.getProfileInfo();
    this.props.getUsers();
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
            bioExist: true
          });
        }
      }.bind(this),
      error: function() {
        console.log('failed to show profile');
      }
    }).then(() => this.getRequestHistory());
  }

  getBuddyProfileInfo(friend) {
    // event.preventDefault();
    // console.log('event target', event.target.getAttribute('href'));
    // let buddyName = event.target.getAttribute('href');
    $.ajax({
      url: '/profile/' + friend,
      type: 'GET',
      success: function(buddyProfile) {
        console.log('recieved buddy profile info', buddyProfile);
        // if (buddyProfile.bio && buddyProfile.bioTitle) {
        this.setState({
          buddyProfile: buddyProfile
        });

        this.activateProfileTab();
        // }
      }.bind(this),
      error: function() {
        console.log('failed to show buddy profile');
      }
    });
  }

  activateProfileTab() {
    let $profileTab = $('#profile-tab-panes .nav-tabs a[href="#profile"]').closest('li');
    $profileTab.siblings('li').removeClass('active');
    $profileTab.addClass('active');
    let $profileTabPanel = $('#profile-tab-panes .tab-content div#profile');
    $profileTabPanel.siblings('div').removeClass('active');
    $profileTabPanel.addClass('active');
  }

  clearBuddyProfile() {
    this.setState({
      buddyProfile: {}
    });
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
    let buddyProfile = this.state.buddyProfile;
    let profileEditButton = null;
    let bioTitle = null;
    let bio = null;

    if(_.isEmpty(buddyProfile)) {
      profileEditButton = <button
                            id="profile-edit-btn"
                            className="btn btn-default"
                            onClick={() => this.toggleEdit()}
                          >Edit</button>;
      bioTitle = this.state.bioTitle;
      bio = this.state.bio;
    } else {
      bioTitle = buddyProfile.bioTitle || 'No Bio Title';
      bio = buddyProfile.bio || 'No Bio Added';
    }

    return (
      <div className="profile">
        {profileEditButton}
        <div className="panel panel-warning">
          <div className="panel-heading"><h4>{bioTitle}</h4></div>
          <div className="panel-body">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    );
  }

  renderInterestsPane() {
    let buddyProfile = this.state.buddyProfile;
    let interests = null;
    let addInterestForm = null;
    let interestsList;

    if(_.isEmpty(buddyProfile)) {
      interests = this.state.interests;
      addInterestForm = <form
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
        </form>;
    } else {
      interests = buddyProfile.interests;
    }

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
          {addInterestForm}
      </div>
    );
  }

  renderPreviousRequestsPane() {
    let buddyProfile = this.state.buddyProfile;
    let requests = null;
    let requestsList;

    if(_.isEmpty(buddyProfile)) {
      requests = this.state.requests;
    } else {
      requests = buddyProfile.requests;
    }

    if(requests && requests.length) {
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
      requestsList = <tr><td colSpan="6">No requests added yet</td></tr>;
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

  handleBuddyClick(friendUsername) {
    let currUsername = this.props.user;
    // on buddy click, go to chat log between user and the buddy clicked
    let convo = this.props.conversations.find(convo => {
      return convo.participants.includes(friendUsername, currUsername);
    });
    // if a convo between users already exists
    convo ? this.props.handleConvoClick(convo) /*eslint-disable indent*/
    // if convo does not yet exist (case: user adds friend before ever chatting) -- prevents an error from ocurring
    : this.props.createEmptyConvo(friendUsername)
    .then(convo => {
      this.props.handleCreateEmptyConvo(convo);
    });
  } /*eslint-enable indent*/

  showBuddyView() {
    let friends = this.props.friends.reverse();
    let friendList;
    // for adding friends:
    let newFriend;
    var users = this.props.users;
    var users = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: users
    });

    // Initializing the typeahead
    $('.typeahead').typeahead({
      hint: false,
      highlight: true, /* Enable substring highlighting */
      minLength: 1 /* Specify minimum characters required for showing result */
    },
    {
      name: 'users',
      source: users
    });

    let props = this.props;
    let newFriendForm = (
      <div>
        <form method="post"
          onSubmit={e => {
            e.preventDefault();
            props.addFriend(newFriend.value);
            $('.typeahead').typeahead('val', '');
          }}
        >
          <input type="text" className="typeahead tt-query form-control" autoComplete="off" spellCheck="false" placeholder="Add a buddy..." ref={node => newFriend = node}
          />
        </form>
      </div>
    );

    if (friends.length) {
      friendList = (() => friends.map((friend, i) => {
        return (
          <div key={i} className="row" name="buddy-row">
            <div className="col-xs-3"><img className="friendListPic" src="#" />
              Pic
            </div>
            <div className="col-xs-3 friend-name">{friend}</div>
            <div className="col-xs-3">
              <a onClick={() => this.handleBuddyClick(friend)}>Chat</a>
            </div>
            <div className="col-xs-3">
              <a onClick={() => this.getBuddyProfileInfo(friend)}>View Profile</a>
            </div>
          </div>
        );
      }))();

    } else {
      friendList = (() => <h6>Add a buddy to start chatting!</h6>)();
    }

    return (
      <div className="panel panel-warning">
        <div className="panel-heading"><h4>Chat with buddies:</h4></div>
        <div className="panel-body">
          {newFriendForm}
          <hr></hr>
          {friendList}
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

    const buddyView = this.showBuddyView();

    return (
      <div id="profile-tab-panes">
        <button className="btn btn-primary" onClick={() => this.clearBuddyProfile()}>Back to my Profile</button>
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active">
            <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a>
          </li>
          <li role="presentation">
            <a href="#interests" aria-controls="interests" role="tab" data-toggle="tab">Interests</a>
          </li>
          <li role="presentation">
            <a href="#requests" aria-controls="requests" role="tab" data-toggle="tab">Activity History</a>
          </li>
          <li role="presentation">
            <a href="#friends" aria-controls="friends" role="tab" data-toggle="tab">Buddies</a>
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
          <div role="tabpanel" className="tab-pane" id="friends">
            {buddyView}
          </div>
        </div>
      </div>
    );
  }
}

const editInterests = ({}) => {

};



window.Profile = Profile;

/*
<a href="kenneth" onClick={(e) => {e.preventDefault(); this.getBuddyProfileInfo(e);}}>View kenneth's profile</a>

*/