class Home extends React.Component {
  constructor(props){
    super(props);
    this.mapTab;

  }


  render(){
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist" id="requestTab">

          <li role="presentation">
            <a href="#map" id="mapSelector" className="active" aria-controls="map" role="tab" data-toggle="tab">View Map</a>
          </li>

          <li role="presentation" ><a href="#browse" aria-controls="browse" role="tab" data-toggle="tab">Browse Requests</a>
          </li>

        </ul>
        <div className="tab-content">

          <div role="tabpanel" className="tab-pane active" id="map">
            <MapView requests={this.props.requests} handleMarkerClick={this.props.handleMarkerClick} handleInfoClose={this.props.handleInfoClose} handlePostClick={this.props.handlePostClick} />
          </div>

          <div role="tabpanel" className="tab-pane" id="browse">
            <BrowseRequests
              requests={this.props.requests}
              handlePostClick={this.props.handlePostClick}
            />
          </div>

        </div>
      </div>
    );
  }
}

window.Home = Home;