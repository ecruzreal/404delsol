import {useState} from "react";
import './ContactForm.css'
import axios from 'axios';

function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:3000/submit", formData);
            setFormStatus('sent message');
            setFormData({
                name: '',
                email: '',
                message: ''
            })
        } catch (err){
            console.error(err);
            setFormStatus('an error has occured');
        }
    };

    return (
        <div className="formContainer" id="form-container">
            <h2>Interested in performing? Send us a message!</h2>
            <form id="contact-form" method="POST" onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Your name..." className="form-control" onChange={handleChange} value={formData.name} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Your email..." className="form-control" onChange={handleChange} value={formData.email} required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" name="message" placeholder="Your message..." onChange={handleChange} rows="5" value={formData.message} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                {formStatus && <p>{formStatus}</p>}
            </form>
        </div>
    );

}

export default ContactForm;