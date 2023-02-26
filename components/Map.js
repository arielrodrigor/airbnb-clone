import React from 'react';
import ReactMapGL from 'react-map-gl';
import {getCenter} from "geolib";
function Map({searchResults}) {

    // Transform the search results object into the {latitude: 52.516272, longitude: 13.377722} object

    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }))
    const center = getCenter(coordinates);
    const [viewport, setViewport] = React.useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })
    return <ReactMapGL
        mapStyle="mapbox://styles/arielrodz/clekrrler000401t7uufoyn71"
        mapboxAccessToken= {process.env.map_box_api_token}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}

    >

    </ReactMapGL>
}

export default Map;

