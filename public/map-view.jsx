import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";


const RequestInfo = ({request, handlePostClick, handleInfoClose, idx}) => {
  if (request.showInfo) {
    return (
       <InfoWindow onCloseClick={() => handleInfoClose(idx)}>
        <div  onClick={() => handlePostClick(request)}>
          <div>{request.user}</div>
          <div>{request.postTitle}</div>
          <div>{request.postDateTime}</div>
          <div>{request.description}</div>
        </div>
      </InfoWindow>
    );
  } else {
    return null;
  }
}


const MapWrapper = withGoogleMap(({requests, handlePostClick, handleMarkerClick, handleInfoClose}) => (
  <GoogleMap defaultZoom={4} defaultCenter={{ lat: 18.0178743, lng: -76.8099041 }}>
    {requests.map(function(request, idx) {
      if (request.lat && request.lng){
        return (
          <Marker key={idx} position={{ lat: request.lat, lng: request.lng }} onClick={() => handleMarkerClick(idx)}>

            <RequestInfo handleInfoClose={handleInfoClose} handlePostClick={handlePostClick} idx={idx} request={request}/>
          </Marker>
        );
      }
    })}
  </GoogleMap>
));

const MapView = ({requests, handleMarkerClick, handlePostClick, handleInfoClose}) => (

  <div  style={{width: 1000, height: 400}}>
    <MapWrapper
    containerElement={
      <div style={{ height: `100%` }} />
    }
    mapElement={
      <div style={{ height: `100%` }} />
    }
    requests={requests}

    handleMarkerClick={handleMarkerClick}

    handlePostClick={handlePostClick}

    handleInfoClose={handleInfoClose}
    />
  </div>
);


window.MapView = MapView;