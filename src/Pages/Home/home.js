import React, { useState, useCallback } from "react"
import GoogleMapReact from "google-map-react"
import Marker from "./Marker"
import restaurantsPOI from "../../assets/POI/restaurants.json"
import culturePOI from "../../assets/POI/culture.json"

const GOOGLE_MAP_KEY = "AIzaSyCdB68ioVna9Y-IRSRCWZ9UzQ8CAolJXe0"
const POI = [...restaurantsPOI, ...culturePOI]

const defaultMapSettings = {
  center: {
    lat: 35.341846,
    lng: 25.148254
  },
  zoom: 11
}

const SimpleMap = () => {
  const { center, zoom } = defaultMapSettings
  const [markerKeyClicked, setMarkerKeyClicked] = useState()

  const onChildClickCallback = useCallback((key) => {
    setMarkerKeyClicked(key)
  }, [])

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        onClick={() => setMarkerKeyClicked(undefined)}
        onChildClick={onChildClickCallback}>
        {POI.map((poi) => {
          const markerKey = `${poi.type}_${poi.id}`
          return (
            <Marker
              lat={poi.lat}
              lng={poi.lng}
              marker={poi}
              showBalloon={markerKeyClicked === markerKey}
              key={markerKey}
            />
          )
        })}
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap
