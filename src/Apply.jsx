import Contact from "./Contact";
import ContactForm from "./ContactForm";
import logo from '/src/404logo.png';

function Apply(){
    return (
        <div className="apply-body">
            <div className="apps-closed">
                <img src={logo} alt="" />
                <p>Applications for Show 6 have now closed! If you have any questions, send us an email at
                    404delsol@gmail.com, or DM us on <a href="https://www.instagram.com/404delsol.uci/">instagram</a>
                </p>
            </div>
        </div>
    )
};

export default Apply;