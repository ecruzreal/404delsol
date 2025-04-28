import {useState} from "react";

function Body(){
    return (
        <div className="body-container">
            <h1 className="upcoming-title">UPCOMING</h1>
            <div className="upcoming-container">
                <img className="upcoming-img" src="assets/IKnowImFunny.jpg" alt="" />
                <div className="upcoming-card">
                    <h2>SHOW 6</h2>
                    <p>This is some sample text! Very exciting!</p>
                </div>
            </div>
        </div>
    )
}

export default Body;