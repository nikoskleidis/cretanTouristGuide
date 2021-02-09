import React, { useState } from 'react';
import Slider from "react-slick";

import RethPhoto from "../../assets/cities/Rethymno.png"
import HerPhoto from "../../assets/cities/Heraklion.png"
import ChqPhoto from "../../assets/cities/Chania.jpg"
import AGNPhoto from "../../assets/cities/Ag.Nikolaos.jpg"

import next from "../../assets/markers/next.png"
import prev from "../../assets/markers/back.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css"

function App(){
    const config={
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        centerMode: true, // enable center mode
        centerPadding: '50px',
        arrows: true 
    };

    const [settings, setSettings] = useState(config);

    const products= [
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

    const onChangeCenterMode = e =>{
        if(e.target.checked){
            setSettings({
                ...config,
                centerMode:true,
                centerPadding:"50px"
            });
        } else{
            setSettings(config);
        }
    }

    return(
        <div className= "App">
            <h1><strong class="app-title">WELCOME TO CRETE</strong></h1>
            <Slider {...settings}>
                {products.map((x, i) =>{
                    return <div key="{i}" classname="img-card">
                        <img className="img" src={x.image} alt="sgewhh"></img>
                        <div class="card-body">
                            <div className="card-title">{x.title}</div>
                            <div className="card-text">{x.text}</div>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    )
}

export default App;


       
     
      