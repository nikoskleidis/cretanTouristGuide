import React from "react"
import "./styles.css"
import cultureMarker from "../../../assets/markers/culture.png"
import restaurantMarker from "../../../assets/markers/restaurant.png"

const MARKER_ICONS = {
  CULTURE: cultureMarker,
  RESTAURANT: restaurantMarker
}

const Balloon = ({ marker }) => (
  <div className="marker__balloon">
    <div>{marker.name}</div>
    <div>{marker.desc}</div>
  </div>
)

const Marker = ({ marker, showBalloon }) => {
  return (
    <div>
      <img src={MARKER_ICONS[marker.type]} alt={marker.name} />
      {showBalloon && <Balloon marker={marker} />}
    </div>
  )
}

export default Marker
