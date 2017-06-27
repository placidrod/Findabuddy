var Nav = (props) => (

  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">FindABuddy</a>
      </div>

      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={() => { props.handleSelectSearch() }} >Search</a></li>
        <li><a href="#" onClick={() => { props.handleSelectRequest() }} >New Request</a></li>
        <li><a href="#" >Profile</a></li>
        <li><a href="http://localhost:3000/logout" ><span className="glyphicon glyphicon-log-out"></span>Logout</a></li>
      </ul>
    </div>
  </nav>

);


window.Nav = Nav;