import React, { useMemo, useState } from 'react';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import CityPin from './pin';

const UserMap = ({ user }) => {
  const [popupInfo, setPopupInfo] = useState(null);
  const TOKEN = 'pk.eyJ1Ijoic2tpcHM5NCIsImEiOiJja3p4ZGd1MzcwMGhzMnZvM25kdmk3bzljIn0.inJ_pDVebgYSC1mGG22mQA';

  const pins = useMemo(
    () => <Marker
          key={user.login.username}
          longitude={user.location.coordinates.longitude}
          latitude={user.location.coordinates.latitude}
          anchor="bottom"
        >
          <CityPin size={20} onClick={() => setPopupInfo(user)} />
        </Marker>,
    [user]
  );
  return (
    <div id="map">
    <Map
    initialViewState={{
      latitude: user.location.coordinates.latitude,
      longitude: user.location.coordinates.longitude,
      zoom: 2
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
              {popupInfo.location.city}, {popupInfo.location.state}
            </div>
            <img width="100%" src={popupInfo.picture.large} alt='userPicture' />
          </Popup>
    )}
  </Map>
</div>
  );
};
export default UserMap;
