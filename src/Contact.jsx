import ContactForm from "./ContactForm";
import EmailForm from "./EmailForm";
import { Link } from "react-router-dom";


function Contact() {
    return (
        <div className="contact-body">
            <div className="contact-general">
                <h1 className="contact-header">GOT QUESTIONS? CONTACT US!</h1>
                <div  className="contact-us">
                    <p className="contact-basic">Send us a DM on <a href="https://www.instagram.com/404delsol.uci/">Instagram</a>, or send us an email!</p>
                    <EmailForm />
                </div>
                <div className="pre-form">
                    <h2>Interested in performing? <Link className="apply-link" to={'/apply'}>Apply here!</Link></h2>
                </div>
            </div>
        </div>
    )
};

export default Contact;