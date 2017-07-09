var Home = ({requests, handlePostClick, handleMarkerClick, handleInfoClose}) => (
  <div>
    <ul className="nav nav-tabs" role="tablist">
      <li role="presentation" className="active"><a href="#browse" aria-controls="browse" role="tab" data-toggle="tab">Browse Requests</a></li>
      <li role="presentation">
        <a href="#map" aria-controls="map" role="tab" data-toggle="tab">View Map</a>
      </li>
    </ul>
    <div className="tab-content">
      <div role="tabpanel" className="tab-pane active" id="browse">
        <BrowseRequests
          requests={requests}
          handlePostClick={handlePostClick}
        />
      </div>
      <div role="tabpanel" className="tab-pane" id="map">
        <MapView requests={requests} handleMarkerClick={handleMarkerClick} handleInfoClose={handleInfoClose} handlePostClick={handlePostClick} />
      </div>
    </div>
  </div>
);

window.Home = Home;