var Nav = (props) => {
  var friendList;
  if (!props.friends) {
    friendList = <option value="browse">Why not browse Requests?</option>
  } else {
    friendList = props.friends.map((friend) => {
      return <option value={friend}>{friend}</option>
    })
  }
  return (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="#" name="selectSearch" onClick={(e) => { props.handleSelect(e, true); }}><img name="selectSearch" className="nav-logo" src="../img/findabuddy_icon2_orange.png"/></a>
      </div>
      <ul className="nav navbar-nav navbar-left">
        <li className="nav-name" ><a href="#" name="selectProfile" onClick={(e) => { props.handleSelect(e, true); }}>How ya doin, {props.user}?!</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-link"><a href="#" name="selectSearch" onClick={(e) => { props.handleSelect(e, true); }} ><span className="glyphicon glyphicon-search"></span>Search</a></li>
        <li className="nav-link"><a href="#" name="selectRequest" onClick={(e) => { props.handleSelect(e, true); }} ><span className="glyphicon glyphicon-file"></span>New Request</a></li>
        <li className="nav-link"><a href="#" name="selectProfile" onClick={(e) => { props.handleSelect(e, true); }}><span className="glyphicon glyphicon-user"></span>Profile</a></li>
        <li className="nav-link"><a href="#" name="selectMessages" onClick={(e) => { props.handleSelect(e, true); }}><span className="glyphicon glyphicon-envelope"></span>Messages</a></li>
        <li className="dropdown">
           <a href="#" data-toggle="dropdown" className="dropdown-toggle">Friends <b className="caret"></b></a>
           <ul className="dropdown-menu">
               {friendList}
               <li className="divider"></li>
               <li>
                <input type="text" className="typehead tt-query" autoComplete="off" spellCheck="false"/>
               </li>
           </ul>
        </li>
        <li className="dropdown">
            <a href="#" data-toggle="dropdown" className="dropdown-toggle"><span className="glyphicon glyphicon-bell"></span></a>
            <ul className="dropdown-menu">
                <Notifications
                  handleNotificationSelect={props.handleNotificationSelect}
                  handleSelect={props.handleSelect}
                  user={props.userName}
                  messages={props.messages}
                />
            </ul>
        </li>
        <li className="nav-link"><a href="/logout" ><span className="glyphicon glyphicon-log-out"></span>Logout</a></li>
      </ul>
    </div>
  </nav>

  );

};



window.Nav = Nav;
