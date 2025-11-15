import ContactForm from "./ContactForm";
import EmailForm from "./EmailForm";
import { Link } from "react-router-dom";


function Contact() {
    return (
        <div className="contact-body">
            <img id="contact-alien" src="/images/trans.webp" alt="" />
            <img id="contact-bluestar" src="/images/trans.webp" alt="" />
            <img id="contact-anteaters" src="/images/trans.webp" alt="" />
            <div className="contact-general">
                <h1 className="contact-header">GOT QUESTIONS? CONTACT US!</h1>
                <div  className="contact-us">
                    <p className="contact-basic">Send us a DM on <a href="https://www.instagram.com/404delsol.uci/">Instagram</a>, or send us an email!</p>
                    <EmailForm />
                </div>
            </div>
        </div>
    )
};

export default Contact;