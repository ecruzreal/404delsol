function BodyAbout(){
    return (
        <div className="about-body-container">
            <h1>ABOUT US</h1>
            <img id="abt-orangebtn" src="images/trans.webp" alt="" />
            <img id="abt-starbtn" src="images/trans.webp" alt="" />
            <div className="about-content">
                <div className="about-summary">
                    <h2 className="about-header">WHAT WE DO</h2>
                    <p>
                        We are a DIY venue with a passion for providing a space for artists
                        to perform and help cultivate a supportive music-loving community. <br />
                        If you are interested in performing please fill out an application form when it becomes available.
                        No forms of hate will be tolerated. Be respectful, and have fun!
                    </p>
                </div>
                <img id="abt-bluestar" src="images/trans.webp" alt="" />
                <h2>MEET THE ORGANIZERS</h2>
                <img id="abt-redstar" src="images/trans.webp" alt="" />
                <img id="abt-guitar" src="images/guitarpatch.webp" alt="" />
                <div className="about-planners">
                    <div className="about-section">
                        <img className="about-img" src="/images/IMG_6179.jpeg" alt="" />
                        <p className="coord-info"><strong>EKY</strong> <br /> <br /> Yo I'm Eky, one of the creators behind 404 DelSol. I wanted to help musicians and artists to come together and have a safe space to perform!</p>
                    </div>
                    <div className="about-section">
                        <img className="about-img" src="/images/IMG_6180.jpeg" alt="" />
                        <p className="coord-info"> <strong>JONATHAN</strong><br /> <br /> Hey, I'm Jonathan, the other organizer of 404DelSol. I want to create a social space that fosters connections among musicians. Of course, everyone is invited!</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BodyAbout;