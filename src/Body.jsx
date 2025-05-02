import {useState} from "react";
import Carousel from "react-multi-carousel";

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
                <h1 className="upcoming-title">UPCOMING</h1> 
                <div className="upcoming-card">
                    <p>Nothing to see here, for now..</p>
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