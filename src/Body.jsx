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
            <h1 className="spotify-header">OUR STAGE, YOUR SOUNDTRACKS</h1>
            <div className="spotify-container">
                <p className="spotify-info"> <br />
                These are the bands that brought the house down, and now they're in your headphones. Hit play, and explore the talent
                who's performed at 404 Del Sol!</p>
                <iframe className="spotify-playlist" src="https://open.spotify.com/embed/playlist/27c85JpJNg0jAAHE0XPwpF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
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