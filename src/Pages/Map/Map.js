import React, { useState, useCallback, useEffect, useMemo } from "react"
import GoogleMapReact from "google-map-react"
import Marker from "./Marker"
import "./map.css"

import restaurantsPOI from "../../assets/POI/restaurants.json"
import culturePOI from "../../assets/POI/culture.json"
import barsPOI from "../../assets/POI/bars.json"
import coffeesPOI from "../../assets/POI/coffees.json"

import MySelect from "../../components/MySelect"
import PoiInfoList from "./PoiInfoList"

const GOOGLE_MAP_KEY = "AIzaSyCdB68ioVna9Y-IRSRCWZ9UzQ8CAolJXe0"

const poiOptions = [
  { value: "DEFAULT", label: "All" },
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
  { value: "DEFAULT", label: "All" },
  { value: "HER", label: "Ηράκλειο" },
  { value: "CHQ", label: "Χανιά" },
  { value: "RETH", label: "Ρεθυμνο" },
  { value: "AGN", label: "Αγ. Νικόλαος" }
]

const cityLocations = {
  HER: {
    center: {
      lat: 35.341846,
      lng: 25.148254
    },
    zoom: 11
  },
  CHQ: {
    center: {
      lat: 35.51124,
      lng: 24.02921
    },
    zoom: 11
  },
  RETH: {
    center: {
      lat: 35.36687,
      lng: 24.47487
    },
    zoom: 11
  },
  AGN: {
    center: {
      lat: 35.19106,
      lng: 25.71524
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
  const [selectedCategory, setSelectedCategory] = useState("DEFAULT")
  const [selectedPOI, setSelectedPOI] = useState()
  const [mapFocus, setMapFocus] = useState({
    center: cityLocations[selectedCity].center,
    zoom: cityLocations[selectedCity].zoom
  })

  const onChildClickCallback = useCallback((key) => {
    setMarkerKeyClicked(key)
  }, [])

  const POI = useMemo(
    () =>
      getPOIPlaces(selectedCategory).filter(
        (poi) => poi.city === selectedCity || selectedCity === "DEFAULT"
      ),
    [selectedCategory, selectedCity]
  )

  useEffect(() => {
    setMapFocus({
      center: cityLocations[selectedCity].center,
      zoom: cityLocations[selectedCity].zoom
    })
  }, [selectedCity])

  useEffect(() => {
    if (selectedPOI) {
      setMapFocus({
        center: { lat: selectedPOI.lat, lng: selectedPOI.lng },
        zoom: 20
      })
      setMarkerKeyClicked(`${selectedPOI.type}_${selectedPOI.id}`)
    }
  }, [selectedPOI])

  return (
    <div className="mapPage">
      <div className="map__filters">
        <MySelect
          className={"map__city_filter"}
          options={cityOptions}
          onChange={setSelectedCity}
          name="City"
          value={selectedCity}
        />
        <MySelect
          options={poiOptions}
          onChange={setSelectedCategory}
          name="Category"
          value={selectedCategory}
        />
        <PoiInfoList list={POI} onPoiClick={setSelectedPOI} />
      </div>
      <div className="map__wrapper">
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }}
          defaultCenter={cityLocations.DEFAULT.center}
          defaultZoom={cityLocations.DEFAULT.zoom}
          center={mapFocus.center}
          zoom={mapFocus.zoom}
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
