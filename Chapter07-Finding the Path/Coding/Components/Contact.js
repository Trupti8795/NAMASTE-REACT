import { useState } from "react";
import contactImg from "../images/contact us.png";

const Contact = () => {
    [message, setMessage] = useState(false)

    handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact-pge">
            <div className="contact-left">
                <img src={contactImg} alt="contact us"/> 
            </div>
            <div className="contact-right">
                <form onSubmit={handleSubmit}                                               >
                    <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" required/>
                    <textarea placeholder="Type Your Message Here...." required></textarea>
                    <button type="submit">Submit</button>
                    {message && <span className="greeting-message">Thanks for contacting <strong style={{color:"#D42A58"}}>foodvery</strong>, we will reply ASAP. </span>}
                </form>
            </div>
    </div>
    )
}

export default Contact;