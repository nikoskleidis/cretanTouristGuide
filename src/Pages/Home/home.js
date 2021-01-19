import React, { useState, useCallback } from "react"
import GoogleMapReact from "google-map-react"
import Select from "react-select"
import Marker from "./Marker"
import "./home.css"

import restaurantsPOI from "../../assets/POI/restaurants.json"
import culturePOI from "../../assets/POI/culture.json"
import barsPOI from "../../assets/POI/bars.json"
import coffeesPOI from "../../assets/POI/coffees.json"

import rethPhoto from "../../assets/cities/rethymno.png"

const GOOGLE_MAP_KEY = "AIzaSyCdB68ioVna9Y-IRSRCWZ9UzQ8CAolJXe0"

const poiOptions = [
  { value: "RESTAURANT", label: "Εστιατόρια" },
  { value: "CULTURE", label: "Πολιτιστικά" },
  { value: "BAR", label: "Μπαρ" },
  { value: "COFFEE", label: "Καφέ" }
]

const poiInfo = {
  RESTAURANT: restaurantsPOI,
  CULTURE: culturePOI,
  BAR: barsPOI,
  COFFEE: coffeesPOI
}

function getPOIPlaces(POI) {
  if (POI === "DEFAULT") {
    return [].concat.apply([], Object.values(poiInfo))
  }
  return poiInfo[POI]
}

const cityOptions = [
  { value: "HER", label: "Ηράκλειο" },
  { value: "CHQ", label: "Χανιά" },
  { value: "RETH", label: "Ρεθυμνο" },
  { value: "LAS", label: "Αγ. Νικόλαος" }
]

const cityLocations = {
  HER: {
    center: {
      lat: 35.0,
      lng: 25.0
    },
    zoom: 9
  },
  CHQ: {
    center: {
      lat: 33.0,
      lng: 20.0
    },
    zoom: 11
  },
  RETH: {
    center: {
      lat: 31.0,
      lng: 21.0
    },
    zoom: 11
  },
  LAS: {
    center: {
      lat: 37.0,
      lng: 23.0
    },
    zoom: 11
  },
  DEFAULT: {
    center: {
      lat: 35.0,
      lng: 25.0
    },
    zoom: 9
  }
}

const SimpleMap = () => {
  const [markerKeyClicked, setMarkerKeyClicked] = useState()
  const [selectedCity, setSelectedCity] = useState("DEFAULT")
  const [selectedPOI, setSelectedPOI] = useState("DEFAULT")

  const onChildClickCallback = useCallback((key) => {
    setMarkerKeyClicked(key)
  }, [])

  const POI = getPOIPlaces(selectedPOI)
  return (
    <div className="homePage" style={{ backgroundImage: `url(${rethPhoto})` }}>
      <div className="map__filters">
        <Select
          options={cityOptions}
          onChange={(val) => setSelectedCity(val ? val.value : "DEFAULT")}
          isClearable
        />
        <Select
          options={poiOptions}
          onChange={(val) => setSelectedPOI(val ? val.value : "DEFAULT")}
          isClearable
        />
      </div>
      <div className="map__wrapper">
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }}
          defaultCenter={cityLocations.DEFAULT.center}
          defaultZoom={cityLocations.DEFAULT.zoom}
          center={cityLocations[selectedCity].center}
          zoom={cityLocations[selectedCity].zoom}
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
    </div>
  )
}

export default SimpleMap
