import {useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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


function Header(){
    return (
        <div className="header-container">
            <div className="header-top">
                <div className="logo-text">
                    <img className="logo" src="assets/404logo.png" alt="" />
                    404 Del Sol
                </div>
                <nav className="nav-buttons">
                    <button><a href="">About</a></button>
                    <button><a href="">Archive</a></button>
                    <button><a href="">Contact</a></button>
                    <button><a href="">FAQ</a></button>
                </nav>
            </div>
            <div className="banner">
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                        },
                        mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                        },
                        tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    >
                <div><img src="assets/flowerboy.jpg" className="cara-img" alt="" /></div>
                <div><img src="assets/arushofbloodtothehead.jpg" className="cara-img" alt="" /></div>
                <div><img src="assets/inrainbows.png" className="cara-img" alt="" /></div>
            </Carousel>
            </div>
        </div>
    );
}

export default Header
