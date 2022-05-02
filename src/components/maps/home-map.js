import React, { useMemo, useState } from 'react';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import { Link } from 'react-router-dom';
import CityPin from './pin';

const HomeMap = ({ users }) => {
  const [popupInfo, setPopupInfo] = useState(null);
  const TOKEN = 'pk.eyJ1Ijoic2tpcHM5NCIsImEiOiJja3p4ZGd1MzcwMGhzMnZvM25kdmk3bzljIn0.inJ_pDVebgYSC1mGG22mQA';

  const pins = useMemo(
    () => users.map((item) => (
        <Marker
          key={item.login.username}
          longitude={item.location.coordinates.longitude}
          latitude={item.location.coordinates.latitude}
          // anchor="bottom"
        >
          <CityPin size={25} onClick={() => setPopupInfo(item)} />
        </Marker>
    )),
    [users, setPopupInfo]
  );
  return (
    <div id="map">
    <Map
    initialViewState={{
      latitude: 48.50,
      longitude: 2.20,
      zoom: 1
    }}
    mapStyle="mapbox://styles/mapbox/streets-v11"
    style={{ height: 500 }}
    mapboxAccessToken={TOKEN}>
    <GeolocateControl position="top-left" />
    <FullscreenControl position="top-left" />
    <NavigationControl position="top-left" />
    <ScaleControl />
    {pins}
    {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.location.coordinates.longitude)}
            latitude={Number(popupInfo.location.coordinates.latitude)}
            closeOnClick={false}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo.name.title} {popupInfo.name.first} {popupInfo.name.last}<br/>
              {popupInfo.location.city}, {popupInfo.location.state}<br/>
              <Link to={`/user/${popupInfo.login.username}`}>Show profile</Link>
            </div>
            <img width="100%" src={popupInfo.picture.large} alt='userPicture' />
          </Popup>
    )}
  </Map>
</div>
  );
};
export default HomeMap;
