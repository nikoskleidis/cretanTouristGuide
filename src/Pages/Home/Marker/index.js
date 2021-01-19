import React from "react"
import "./styles.css"
import cultureMarker from "../../../assets/markers/culture.png"
import restaurantMarker from "../../../assets/markers/restaurant.png"
import barMarker from "../../../assets/markers/bar.png"
import coffeeMarker from "../../../assets/markers/coffee.png"

const MARKER_ICONS = {
  CULTURE: cultureMarker,
  RESTAURANT: restaurantMarker,
  BARS: barMarker,
  COFFEE: coffeeMarker
}

const Balloon = ({ marker }) => (
  <div className="marker__balloon">
    <div className="marker_ballonName"><strong>{marker.name}</strong></div>
    <div className="marker_ballobDesc">{marker.desc}</div>
    <div>{marker.link}</div>
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
