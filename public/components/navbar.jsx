var Nav = (props) => (

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
        <li className="nav-link"><a href="/logout" ><span className="glyphicon glyphicon-log-out"></span>Logout</a></li>
      </ul>
    </div>
  </nav>

);


window.Nav = Nav;
