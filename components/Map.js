import React from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import {getCenter} from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
function Map({searchResults}) {
    const [selectedLocation, setSelectedLocation] = React.useState({});
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
        onMove={evt => setViewport(evt.viewport)}

    >
        {searchResults.map(result => (
            <div key={result.long}>
                <Marker
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <p

                        onClick={() => setSelectedLocation(result)}
                        className={'cursor-pointer text-2xl animate-bounce'}
                        aria-label={'push-pin'}
                    >📌</p>
                </Marker>
                {/* The popup that should show if we click on a Marker */}

                {selectedLocation.long === result.long ? (
                    <Popup
                        onClose={() => setSelectedLocation({})}
                        closeOnClick={true}
                        latitude={result.lat}
                        longitude={result.long}
                    >
                        {result.title}
                    </Popup>
                ) : (false)
                }

            </div>
        ))}

    </ReactMapGL>
}

export default Map;

