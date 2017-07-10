class Nav extends React.Component {
  //console.log(props.users)
  constructor(props) {
    super(props)
    this.newFriend
    //this.friendList
    //this.notificationBell

    this.state = {
      friends: [],
      messages: [],
      counter: 0
    }
  }

  friendList() {
    return (
      this.state.friends.map((friend, i) => {
        return <option value={friend} key={i} onClick={() => console.log(friend)}>{friend}</option>
      })
    )
  }

  notificationBell() {
    if (this.state.counter === 0) {
      return (<a href="#" data-toggle="dropdown" className="dropdown-toggle"><span className="glyphicon glyphicon-bell">{this.state.counter}</span></a>)
    } else {
      return (<a href="#" data-toggle="dropdown" className="dropdown-toggle"><span className="glyphicon glyphicon-bell unread">{this.state.counter}</span></a>)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.counter = 0
    if (this.state.messages[0]) {
      console.log(this.state.messages[0].messages)
      for (var i = 0; i < this.state.messages[0].messages.length; i++) {
        if (this.state.messages[0].messages[i].read === false) {
          this.counter++
          //console.log(this.counter)
        }
      }
    }
    this.setState({friends: nextProps.friends, messages: nextProps.messages, counter: this.counter})
  }

  componentDidUpdate() {
      //this.counter = 0
      var users = this.props.users;
       var users = new Bloodhound({
           datumTokenizer: Bloodhound.tokenizers.whitespace,
           queryTokenizer: Bloodhound.tokenizers.whitespace,
           local: users
       });

       $('.typeahead').typeahead({
           hint: false,
           highlight: true,
           minLength: 1
       },
       {
           name: 'users',
           source: users
       });


    /*if (this.state.messages[0]) {
      console.log(this.state.messages[0].messages)
      for (var i = 0; i < this.state.messages[0].messages.length; i++) {
        if (this.state.messages[0].messages[i].read === false) {
          this.counter++
          console.log(this.counter)
        }
      }
    }
    if (this.counter === 0) {
      this.notificationBell = <a href="#" data-toggle="dropdown" className="dropdown-toggle"><span className="glyphicon glyphicon-bell">{this.counter}</span></a>
    } else {
      this.notificationBell = <a href="#" data-toggle="dropdown" className="dropdown-toggle"><span className="glyphicon glyphicon-bell unread">{this.counter}</span></a>
    }*/
  }

  render() {
    return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="#" name="home" onClick={(e) => { this.props.handleSelect(e, true); }}><img name="home" className="nav-logo" src="../img/findabuddy_icon2_orange.png"/></a>
        </div>
        <ul className="nav navbar-nav navbar-left">
          <li className="nav-name" ><a href="#" name="selectProfile" onClick={(e) => { this.props.handleSelect(e, true); }}>How ya doin, {this.props.user}?!</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-link"><a href="#" name="selectSearch" onClick={(e) => { this.props.handleSelect(e, true); }} ><span className="glyphicon glyphicon-search"></span>Search</a></li>
          <li className="nav-link"><a href="#" name="selectRequest" onClick={(e) => { this.props.handleSelect(e, true); }} ><span className="glyphicon glyphicon-file"></span>New Request</a></li>
          <li className="nav-link"><a href="#" name="selectProfile" onClick={(e) => { this.props.handleSelect(e, true); }}><span className="glyphicon glyphicon-user"></span>Profile</a></li>
          <li className="nav-link"><a href="#" name="selectMessages" onClick={(e) => { this.props.handleSelect(e, true); }}><span className="glyphicon glyphicon-envelope"></span>Messages</a></li>
          <li className="dropdown">
             <a href="#" data-toggle="dropdown" className="dropdown-toggle">Buddies <b className="caret"></b></a>
             <ul className="dropdown-menu">
                 {this.friendList()}
                 <li className="divider"></li>
                 <li>
                  <form method="post" onSubmit={(e) => {
                    e.preventDefault();
                    console.log(e)
                    this.props.addFriend(this.newFriend.value)
                    $('.typeahead').typeahead('val', '');
                  }}>
                  <input type="text" className="typeahead tt-query form-control" autoComplete="off" spellCheck="false"  ref={node => {
                    this.newFriend = node;
                  }}/>
                  </form>
                 </li>
             </ul>
          </li>
          <li className="dropdown">
              {this.notificationBell()}
              <ul className="dropdown-menu">
                <Notifications
                  handleNotificationSelect={this.props.handleNotificationSelect}
                  handleSelect={this.props.handleSelect}
                  user={this.props.userName}
                  messages={this.state.messages}
                />
              </ul>
          </li>
          <li className="nav-link"><a href="/logout" ><span className="glyphicon glyphicon-log-out"></span>Logout</a></li>
        </ul>
      </div>
    </nav>

    );
  }


}



window.Nav = Nav;
