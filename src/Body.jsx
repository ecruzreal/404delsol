import {useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { InstagramEmbed } from 'react-social-media-embed';
import { Link } from "react-router-dom";
import logo from '/src/404logo.png';

const images = [
    "DSCN5477.jpeg",
    "DSCN5478.jpeg",
    "DSCN5479.jpeg",
    "DSCN5480.jpeg"
]

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

function Body(){
    return (
        <div className="body-all">
            <div className="body-container">
                <div className="upcoming-container">
                    <img id="home-skull" className="patch" src="images/trans.webp" alt="" />
                    <img id="home-greenstar" className="patch" src="images/trans.webp" alt="" />
                    <img id="uppatch" src="/images/bluepatchfinal.webp" alt="" height={'300px'}/>
                    <h1>
                        APPLICATIONS HAVE CLOSED <br /> SEE YOU SOON!
                    </h1>
                    {/*
                    <div className="apply-now">
                        <Link className="apply-main-link" to={'/apply'}>APPLY NOW!</Link>
                        <span>APPLICATIONS CLOSE MAY 18TH</span>
                    </div>
                    */}
                    <img id="home-alien" className="patch" src="/images/trans.webp" alt="" />
                    <img id="kuci-patch" src="/images/trans.webp" className="patch" alt="" />
                    <img id="discoduck" src="images/trans.webp" alt="" />
                    <img id="home-anteaters" className="patch" src="images/trans.webp" alt="" />
                    <div className="apps-closed">
                        <img id="sunp" src='images/sunpatch.webp' alt="" />
                    </div>
                </div>
                <img id="home-heart" className="patch" src="images/trans.webp" alt="" />
                <img id="home-mic" className="patch" src="images/trans.webp" alt="" />
                <h1 className="spotify-header">OUR STAGE, YOUR SOUNDTRACKS</h1>
                <div className="spotify-container">
                    <p className="spotify-info"> <br />
                    These are the bands that brought the house down, and now they're in your headphones. Hit play, and explore the talent
                    who's performed at 404 Del Sol!</p>
                    <iframe className="spotify-playlist" src="https://open.spotify.com/embed/playlist/27c85JpJNg0jAAHE0XPwpF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

/*
<h1 className="upcoming-title">UPCOMING:</h1> 

<p className="dmphotos">If you have any photos or videos from SUNBURNT SESSION I, send us an email at
                        404delsol@gmail.com, or DM us on <a href="https://www.instagram.com/404delsol.uci/" target="blank">instagram!</a> Be sure to include your name so we can credit you!
 </p>

<div className="carousel-container">
                
                <div className="carousel-track">
                    {[...images, ...images].map((src, i) => (
                        <img key={i} src={`/images/${src}`} className="carousel-img" alt={`Slide ${i}`} />
                    ))}
                </div>
</div>

div className="insta-embed">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <InstagramEmbed url="https://www.instagram.com/p/DM8E8aIxhtB/?img_index=1" width={328}/>
                        </div>
                    </div>

<div className="apply-now">
    <Link className="apply-main-link" to={'/apply'}>APPLY NOW!</Link>
    <span>APPLICATIONS CLOSE MAY 25th</span>
 </div>

 <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>

<div className="whole-c">
            <div className="c-left"></div>
            <div className="c-container">
                <div class="carousel">
                    <div class="group">
                        <img src="images/IMG_6168.jpeg" className="card" alt="" />
                        <img src="images/IMG_6169.jpeg" className="card"  alt="" />
                        <img src="images/IMG_6170.jpeg" className="card"  alt="" />
                        <img src="images/IMG_6171.jpeg" className="card"  alt="" />
                        <img src="images/IMG_6172.jpeg" className="card"  alt="" />
                    </div>
                    <div aria-hidden class="group">
                        <img src="images/IMG_6168.jpeg" className="card" alt="" />
                        <img src="images/IMG_6169.jpeg" className="card"  alt="" />
                        <img src="images/IMG_6170.jpeg" className="card"  alt="" />
                        <img src="images/IMG_6171.jpeg" className="card"  alt="" />
                        <img src="images/IMG_6172.jpeg" className="card"  alt="" />
                    </div>
                </div>
            </div>
            <div className="c-right"></div>
  </div>

*/

export default Body;