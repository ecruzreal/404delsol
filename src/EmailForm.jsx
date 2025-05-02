import { useState } from "react";
import axios from "axios";

function EmailForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        if (name === 'attachment') {
            setFormData({ ...formData, attachment: files[0] });
          } else {
            setFormData({ ...formData, [name]: value });
          }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post("/api/submit-email", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setFormStatus('sent message');
            setFormData({
                name: '',
                email: '',
                message: '',
            })
        } catch (err){
            console.error(err);
            setFormStatus('an error has occured');
        }
    };

    return (
        <form id="contact-form" method="POST" onSubmit={handleSubmit} className="email-form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Your name..." className="form-control for-text" onChange={handleChange} value={formData.name} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Your email..." className="form-control for-text" onChange={handleChange} value={formData.email} required />
            </div>
            <div className="form-group comments email-comments">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control for-area" name="message" placeholder="Your message..." onChange={handleChange} rows="5" value={formData.message} required />
            </div>
            <button type="submit" className="email-submit">Send</button>
            {formStatus && <p className="form-status">{formStatus}</p>}
        </form>
    );
};

export default EmailForm;