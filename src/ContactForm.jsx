import {useState} from "react";
import './ContactForm.css'
import axios from 'axios';


function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        studentID: '' ,
        socials: '',
        names_instruments: '',
        genre: '',
        songs: '',
        bringing: [],
        bringing_other: '',
        needs: [],
        needs_other: '',
        video_link: '',
        message: '',
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        if (name === 'attachment') {
            setFormData({ ...formData, attachment: files[0] });
          } else {
            setFormData({ ...formData, [name]: value });
          }
    };

    const handleCheckboxChange = (e, group) => {
        const { value, checked } = e.target;
      
        setFormData((prev) => {
          const updatedGroup = checked
            ? [...prev[group], value]
            : prev[group].filter((v) => v !== value);
      
          return { ...prev, [group]: updatedGroup };
        });
      };
      
      

    const realFormData = new FormData();
    realFormData.append('name', formData.name);
    realFormData.append('email', formData.email);
    realFormData.append('message', formData.message);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('loading');
        setModalOpen(true);
        try{
            await axios.post("/api/submit", formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setFormStatus('success');
            setFormData({
                name: '',
                email: '',
                studentID: '' ,
                socials: '',
                names_instruments: '',
                genre: '',
                songs: '',
                bringing: [],
                bringing_other: '',
                needs: [],
                needs_other: '',
                video_link: '',
                message: '',
            })
        } catch (err){
            console.error(err);
            setFormStatus('error');
        }
    };

    const closeModal = () => {
        setModalOpen(false);
        setFormStatus('');
    };

    return (
        <div className="formContainer" id="form-container">
            <p className="form-info">This form is if you are a current UCI Student interested in performing at 404 Del Sol. We are a DIY venue with a passion for providing <br /> a space for artists to perform and cultivate a supportive music-loving community. For equipment, we can provide a PA system, mics, mixer, etc. Each act will be given roughly 30 minutes (6-8 songs). It's okay to be slightly over or under but please do not abuse this freedom.
                    DISCLAIMER: THE "VENUE" WILL LIKELY BE OUTDOORS. 
                    If you have any urgent questions please DM @404delsol.uci on Instagram! <br />IMPORTANT: APPLICATIONS CLOSE MAY 25th!</p>
            <form id="contact-form" method="POST" onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                <div className="first-section">
                    <div className="form-group">
                        <label htmlFor="name">Band or Artist Name</label>
                        <input type="text" name="name" placeholder="Your Artist or Band name..." className="form-control for-text" onChange={handleChange} value={formData.name} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">UCI Email</label>
                        <input type="email" name="email" placeholder="Your email..." className="form-control for-text" onChange={handleChange} value={formData.email} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="studentID">Student ID</label>
                        <input className="form-control for-text" name="studentID" placeholder="Your UCI Student ID..." onChange={handleChange} value={formData.studentID} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="socials">Band/Artist Socials</label>
                        <input className="form-control for-text" name="socials" placeholder="Socials..." onChange={handleChange} value={formData.socials} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name-instruments">EACH band member's name AND instrument (If applicable)
                        Ex. John - Bass, Mike - Guitar, Etc.</label>
                        <textarea id="names-instruments" className="form-control for-text" name="names_instruments" placeholder="Names and Instruments..." onChange={handleChange} value={formData.names_instruments} rows={5} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">What is your main genre?</label>
                        <input className="form-control for-text" name="genre" placeholder="Genre..." onChange={handleChange} value={formData.genre} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="songs">What songs will you be playing? (~30 minutes/6-8 songs) They can be covers but originals are greatly appreciated! Please put the song title and artist name if it is a cover!</label>
                        <textarea id="songs-id" className="form-control for-text" name="songs" placeholder="Songs..." onChange={handleChange} value={formData.songs} rows={5} required />
                    </div>
                </div>
                
                <div className="venue-terms">
                    <h3>IMPORTANT: The venue will no longer be at an ACC apartment but at an off-campus location that is around a 30 minute drive from UCI.</h3>
                    <div className="form-group venue-agreement">
                        <input type="checkbox" className="form-control" name="venue" required />
                        <label htmlFor="venue">I understand</label>
                    </div>
                </div>
        
                <div className="form-group">
                    <div className="instrument-checks">
                    <label htmlFor="instruments">IMPORTANT: What equipment are you bringing?</label>

                        <div className="check-group">
                            <input id="guitar" type="checkbox" className="form-control" name="instruments-1" onChange={(e) => handleCheckboxChange(e, "bringing")} checked={formData.bringing.includes("Guitar(s)")} value="Guitar(s)"  />
                            <label htmlFor="guitar">Guitar(s)</label>
                        </div>
                    
                        <div className="check-group">
                            <input id="bass-guitar" type="checkbox" className="form-control" name="instruments-2" onChange={(e) => handleCheckboxChange(e, "bringing")} checked={formData.bringing.includes("Bass Guitar(s)")} value="Bass Guitar(s)"  />
                            <label htmlFor="bass-guitar">Bass Guitar(s)</label>
                        </div>

                        <div className="check-group">
                            <input id="guitar-amp" type="checkbox" className="form-control" name="instruments-3" onChange={(e) => handleCheckboxChange(e, "bringing")} checked={formData.bringing.includes("Guitar Amp(s)")} value="Guitar Amp(s)" />
                            <label htmlFor="guitar-amp">Guitar Amp(s)</label>
                        </div>

                        <div className="check-group">
                            <input id="bass-amp" type="checkbox" className="form-control" name="instruments-4" onChange={(e) => handleCheckboxChange(e, "bringing")} checked={formData.bringing.includes("Bass Amp(s)")} value="Bass Amp(s)"  />
                            <label htmlFor="bass-amp">Bass Amp(s)</label>
                        </div>

                        <div className="check-group">
                            <input id="pedalboard" type="checkbox" className="form-control" name="instruments-5" onChange={(e) => handleCheckboxChange(e, "bringing")} checked={formData.bringing.includes("Pedalboards")} value="Pedalboards" />
                            <label htmlFor="pedalboard">Pedalboards</label>
                        </div>

                        <div className="check-group">
                            <input id="microphones" type="checkbox" className="form-control" name="instruments-6" onChange={(e) => handleCheckboxChange(e, "bringing")} checked={formData.bringing.includes("Microphones")} value="Microphones"  />
                            <label htmlFor="microphones">Microphones</label>
                        </div>

                        <div className="check-group">
                            <input id="drum-kit" type="checkbox" className="form-control" name="instruments-12" onChange={(e) => handleCheckboxChange(e, "bringing")} checked={formData.bringing.includes("Drum Kit")} value="Drum Kit"  />
                            <label htmlFor="drum-kit">Drum Kit</label>
                        </div>

                        <div className="check-group">
                            <input id="drum-kit-breakables" type="checkbox" className="form-control" name="instruments-7" onChange={(e) => handleCheckboxChange(e, "bringing")} checked={formData.bringing.includes("Drum Kit Breakables")} value="Drum Kit Breakables"  />
                            <label htmlFor="drum-kit-breakables">Drum Kit Breakables (Snare, Cymbals, Pedals)</label>
                        </div>

                        <div className="check-group">
                            <input id="keybaord" type="checkbox" className="form-control" name="instruments-8" onChange={(e) => handleCheckboxChange(e, "bringing")} checked={formData.bringing.includes("Keyboard")} value="Keyboard" />
                            <label htmlFor="keyboard">Keyboard</label>
                        </div>

                        <div className="check-group">
                            <input id="brass" type="checkbox" className="form-control" name="instruments-9" onChange={(e) => handleCheckboxChange(e, "bringing")} checked={formData.bringing.includes("Brass")} value="Brass"  />
                            <label htmlFor="brass">Brass Instruments</label>
                        </div>

                        <div className="check-group">
                            <input id="woodwinds" type="checkbox" className="form-control" name="instruments-10" onChange={(e) => handleCheckboxChange(e, "bringing")} checked={formData.bringing.includes("Woodwinds")} value="Woodwinds" />
                            <label htmlFor="woodwinds">Woodwind Instruments</label>
                        </div>

                        <div className="check-group">
                            <label htmlFor="other">Other: </label>
                            <input id="other" className="form-control" name="bringing_other" onChange={handleChange} value={formData.bringing_other}/>
                        </div>
                    
                    </div>

                    <div className="instrument-bringing-group" id="bringing">
                    <label htmlFor="bringing">IMPORTANT: What equipment do you need? Please mark the equipment you only absolutely need!</label>
                        <div className="check-group">
                            <input id="PA" type="checkbox" className="form-control" name="bringing-1" onChange={(e) => handleCheckboxChange(e, "needs")} checked={formData.needs.includes("PA Speakers")} value="PA Speakers"  />
                            <label htmlFor="PA">PA Speakers</label>
                        </div>

                        <div className="check-group">
                            <input id="mics" type="checkbox" className="form-control" name="bringing-2" onChange={(e) => handleCheckboxChange(e, "needs")} checked={formData.needs.includes("Microphones")} value="Microphones"  />
                            <label htmlFor="mics">Microphones</label>
                        </div>

                        <div className="check-group">
                            <input id="bg-amp" type="checkbox" className="form-control" name="bringing-3" onChange={(e) => handleCheckboxChange(e, "needs")} checked={formData.needs.includes("Guitar Amp")} value="Guitar Amp"   />
                            <label htmlFor="bg-amp">Guitar Amp</label>
                        </div>
                        
                        <div className="check-group">
                            <input id="bb-amp" type="checkbox" className="form-control" name="bringing-4" onChange={(e) => handleCheckboxChange(e, "needs")} checked={formData.needs.includes("Bass Amp")} value="Bass Amp"   />
                            <label htmlFor="bb-amp">Bass Amp</label>
                        </div>

                        <div className="check-group">
                            <input id="b-drums" type="checkbox" className="form-control" name="bringing-5" onChange={(e) => handleCheckboxChange(e, "needs")} checked={formData.needs.includes("Drum Kit")} value="Drum Kit"   />
                            <label htmlFor="b-drums">Drum Kit</label>
                        </div>

                        <div className="check-group">
                            <input id="b-break" type="checkbox" className="form-control" name="bringing-6" onChange={(e) => handleCheckboxChange(e, "needs")} checked={formData.needs.includes("Drum Kit Breakables")} value="Drum Kit Breakables"   />
                            <label htmlFor="b-break">Drum Kit Breakables (Snare, Cymbals, Pedals)</label>
                        </div>

                        <div className="check-group">
                            <label htmlFor="b-other">Other: </label>
                            <input id="b-other" className="form-control" name="needs_other" onChange={handleChange} value={formData.needs_other}  />
                        </div>
                    </div>

                    <div className="form-group video_submission">
                        <label htmlFor="video-link">We require a LINK to an audition video in the application to get a sense of your live show! Past performance videos are allowed! The video should be at least one song long (1-3 minutes)</label>
                        <input className="form-control" name="video_link" placeholder="Video Link..." onChange={handleChange} value={formData.video_link} required />
                    </div>

                    <div className="form-group dont-flake">
                        <h4>Show 6 is on MAY 31st, 2025 (Make sure you are 100% available, if you flake you will be ineligible to play at any future events)</h4>
                        <div>
                            <input className="form-control" type="checkbox" name="show-up" required />
                            <label htmlFor="show-up">I Understand</label>
                        </div>
                    </div>

                </div>
                <div className="form-group comments">
                    <label htmlFor="message">Questions, Comments, Concerns?</label>
                    <textarea id="apply-message" className="form-control for-area" name="message" placeholder="Comments..." onChange={handleChange} rows="5" value={formData.message} required />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>

            {modalOpen && (
                <div className="modal">
                     <div className="modal-content">
                        {formStatus === 'loading' && <p>Sending...</p>}
                        {formStatus === 'success' && <p>Application sent succesfully! We'll be in touch soon. If you have any urgent questions, please message @404delsol.uci on Instagram.</p>}
                        {formStatus === 'error' && <p>Failed to send application, please try again later.</p>}
                        <button onClick={closeModal}>Close</button>
                     </div>
                </div>
            )}
        </div>
    );

}

export default ContactForm;