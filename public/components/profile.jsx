class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleInputChange(event) {
    this.setState({
    });
  }

  submitBuddyRequest(event) {
    event.preventDefault();
    $.ajax({
      url: '/buddyRequest',
      type: 'GET',
      data: this.state,
      //dataType: dataType,
      success: function() {
        console.log('success');
      }.bind(this),
      error: function() {
        console.log('failed to show profile');
      }
    });
  }

  //**************need to change htmlFors****************//
  render() {
    return (
    	<img src="https://www.w3schools.com/images/w3schools_green.jpg"/>
    );
  }
}

window.Profile = Profile;