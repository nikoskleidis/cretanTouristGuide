import React, { useState, useCallback } from "react"
import GoogleMapReact from "google-map-react"
import Marker from "./Marker"
import "./home.css"
import homePhoto from"./rethymno.png"
import restaurantsPOI from "../../assets/POI/restaurants.json"
import culturePOI from "../../assets/POI/culture.json"
import barsPOI from "../../assets/POI/bars.json"
import coffeesPOI from "../../assets/POI/coffees.json"

const GOOGLE_MAP_KEY = "AIzaSyCdB68ioVna9Y-IRSRCWZ9UzQ8CAolJXe0"
const POI = [...restaurantsPOI, ...culturePOI, ...barsPOI, ...coffeesPOI]

const defaultMapSettings = {
  center: {
    lat: 35.0,
    lng: 25.0
  },
  zoom: 9
}

const SimpleMap = () => {
  const { center, zoom } = defaultMapSettings
  const [markerKeyClicked, setMarkerKeyClicked] = useState()

  const onChildClickCallback = useCallback((key) => {
    setMarkerKeyClicked(key)
  }, [])

/*<div className="homePhoto">
      <img src={homePhoto} alt="HomePhoto" />
      </div>*/
  return (
    <div className="homePage">
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
