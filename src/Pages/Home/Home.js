import React from "react"
import Slider from "react-slick"

import RethPhoto from "../../assets/cities/Rethymno.png"
import HerPhoto from "../../assets/cities/Heraklion.png"
import ChqPhoto from "../../assets/cities/Chania.jpg"
import AGNPhoto from "../../assets/cities/Ag.Nikolaos.jpg"

import next from "../../assets/slider/next.png"
import prev from "../../assets/slider/back.png"

import "../../assets/slider/slick.css"
import "../../assets/slider/slick-theme.css"
import "./home.css"

const sliderConfig = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  centerMode: true, // enable center mode
  centerPadding: "50px",
  nextArrow: <img src={next} alt="next_photo" />,
  prevArrow: <img src={prev} alt="previous_photo" />
}

const products = [
  {
    image: RethPhoto,
    title: "Ρέθυμνο"
  },
  {
    image: HerPhoto,
    title: "Ηράκλειο"
  },
  {
    image: ChqPhoto,
    title: "Χανιά"
  },
  {
    image: AGNPhoto,
    title: "Άγιος Νικόλαος"
  }
]

function App() {
  return (
    <div className="Home">
      <h1>
        <strong className="app-title">WELCOME TO CRETE</strong>
      </h1>
      <div className="Home__sliderWrapper">
        <Slider {...sliderConfig}>
          {products.map((x, i) => {
            return (
              <div key={i} className="img-card">
                <img className="img" src={x.image} alt="sgewhh" />
                <div className="card-body">
                  <div className="card-title">{x.title}</div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default App
