import ContactForm from "./ContactForm";
import EmailForm from "./EmailForm";
import { Link } from "react-router-dom";


function Contact() {
    return (
        <div className="contact-body">
            
            <div className="contact-general">
                <h1 className="contact-header">GOT QUESTIONS? CONTACT US!</h1>
                <div  className="contact-us">
                    <p className="contact-basic">Send us a DM on <a className="aemail" target="_" href="https://www.instagram.com/404delsol.uci/">Instagram</a>, or send us an email!</p>
                    <EmailForm />
                </div>
            </div>
        </div>
    )
};

/*
<div className="apply-contact">
                <h1 className="contact-header"><br />INTERESTED IN PERFORMING? APPLY <Link to={'/apply'}>HERE</Link><br /> <br />☆ ☆ ☆</h1>
            </div>
*/

export default Contact;