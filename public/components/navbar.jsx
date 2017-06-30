var Nav = (props) => (

  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="#" onClick={() => { props.handleSelectSearch() }}><img className="nav-logo" src="../img/findabuddy_icon2_orange.png"/></a>
      </div>
      <ul className="nav navbar-nav navbar-left">
        <li className="nav-name" ><a href="#" onClick={() => { props.handleSelectProfile() }}>How ya doin, {props.user}!</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-link"><a href="#" onClick={() => { props.handleSelectSearch() }} >Search</a></li>
        <li className="nav-link"><a href="#" onClick={() => { props.handleSelectRequest() }} >New Request</a></li>
        <li className="nav-link"><a href="#" onClick={() => { props.handleSelectProfile() }}>Profile</a></li>
        <li className="nav-link"><a href="http://localhost:3000/logout" ><span className="glyphicon glyphicon-log-out"></span>Logout</a></li>
      </ul>
    </div>
  </nav>

);


window.Nav = Nav;