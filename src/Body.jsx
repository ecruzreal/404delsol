import {useState} from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const images = [
    "IMG_6154.jpeg",
    "IMG_6169.jpeg",
    "IMG_6157.jpeg",
    "IMG_6174.jpeg"
]

console.log(images);

function Body(){
    return (
        <div className="body-container">
            <div className="upcoming-container">
                <h1 className="upcoming-title">UPCOMING: SHOW 6</h1> 
                <div className="upcoming-card">
                    <img className="flyer-img" src="images/show-6-flyer.jpeg" alt="" />
                </div>
                <div className="apply-now">
                    <Link className="apply-main-link" to={'/apply'}>APPLY NOW!</Link>
                </div>
            </div>
        </div>
    )
}

/*
<div className="carousel-container">
                
                <div className="carousel-track">
                    {[...images, ...images].map((src, i) => (
                        <img key={i} src={`/images/${src}`} className="carousel-img" alt={`Slide ${i}`} />
                    ))}
                </div>
</div>
*/

export default Body;