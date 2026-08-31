function BodyAbout(){
    return (
        <div className="about-body-container">
            <h1 className="abtheadmain">ABOUT US</h1>
            
            <div className="about-content">

                    <div class="window-card">
                    <div class="window-card__titlebar">
                        <div class="window-card__dots">
                            <span></span><span></span><span></span>
                        </div>
                        <div class="window-card__title">whatsup.txt</div>
                    </div>
                    <div class="window-card__body">
                        <h1>What we do</h1>
                        <p>
                        We are a DIY venue with a passion for providing a space for artists
                        to perform and help cultivate a supportive music-loving community.
                        </p>
                    </div>
                    </div>

                
                <h2 className="abtmeet">MEET THE ORGANIZERS</h2>
                
                <div className="about-planners">
                    <div className="about-section">
                        <img className="about-img" src="/images/IMG_6179.jpeg" alt="" />


                        <div class="window-card">
                            <div class="window-card__titlebar">
                            <div class="window-card__dots">
                                <span></span><span></span><span></span>
                            </div>
                            <div class="window-card__title">eky.txt</div>
                            </div>
                            <div class="window-card__body">
                            <h1>Eky</h1>
                            <p>
                            Yo I'm Eky, one of the creators behind 404 DelSol. I wanted to help musicians and artists to come together and have a safe space to perform!
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="about-section">
                        <img className="about-img" src="/images/IMG_6180.jpeg" alt="" />
                        
                        <div class="window-card">
                            <div class="window-card__titlebar">
                            <div class="window-card__dots">
                                <span></span><span></span><span></span>
                            </div>
                            <div class="window-card__title">jonathan.txt</div>
                            </div>
                            <div class="window-card__body">
                            <h1>Jonathan</h1>
                            <p>
                            Hey, I'm Jonathan, the other organizer of 404DelSol. I want to create a social space that fosters connections among musicians. Of course, everyone is invited!
                            </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BodyAbout;