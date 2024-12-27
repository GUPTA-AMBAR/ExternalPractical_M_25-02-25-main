import styles from "./contact.module.css";
import co4 from './contactImage/co-4.png';
import mail from './contactImage/mail.png';
import location from './contactImage/location.png';


const Contact=()=>{

    
                                   // template for connection of my email with the help of email .js

    // const sendEmail = (e) => {
    //     e.preventDefault(); // Prevent page reload
    
    //     emailjs
    //       .sendForm(
    //         "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
    //         "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
    //         e.target,           // Form element
    //         "YOUR_USER_ID"      // Replace with your EmailJS user ID
    //       )
    //       .then(
    //         (response) => {
    //           alert("Email sent successfully!");
    //           console.log("SUCCESS!", response.status, response.text);
    //         },
    //         (error) => {
    //           alert("Failed to send the email. Please try again.");
    //           console.error("FAILED...", error);
    //         }
    //       );
    
    //     e.target.reset(); // Clear the form after submission
    //   };












return(

<section className= {`${styles.contact}`}>
<div className={`${styles.input}`}>
    <p className={`${styles.contactheading}`}>CONTACT US</p>
    <p className={`${styles.getwork}`}>Get we contact work</p>
    <form onSubmit={sendEmail}>
        <div>
            <div className={`${styles.nameEmail}`}>
                <input type="text" placeholder="Name" required/>
            </div>
            <div className={`${styles.nameEmail}`}>
                <input type="email" placeholder="E-mail" required/>
            </div>
            <textarea className={`${styles.message}`} name="" id="" rows="10" placeholder="Message"></textarea>
        </div>
        <br/>
        <button type="submit" className={`${styles.sendMessage}`}>Send Message</button>
    </form>
</div>
<div className= {`${styles.contactinfo}`}>
    <div className= {`${styles.info}`}>
        <div><img src={co4} alt="" height="60px" width="60px"/></div>
        <div className=  {`${styles.infotypeinfogive}`}>
            <p className={`${styles.infotype}`}>Call Me</p>
            <p className= {`${styles.giveinfo}`}>+91 8534004080 , 9149066047</p>
        </div>
    </div>
    <div className="info">
        <div><img src={mail} alt="" height="60px" width="60px"/></div>
        <div className= {`${styles.infotypeinfogive}`}>
            <p className= {`${styles.infotype}`}>Email Us</p>
            <p className= {`${styles.giveinfo}`}>ambargupta1290@gmail.com</p>
        </div>
    </div>
    <div className="info">
        <div><img src={location} alt="" height="60px" width="60px"/></div>
        <div className= {`${styles.infotypeinfogive}`}>
            <p className={`${styles.infotype}`}>Address</p>
            <p className= {`${styles.giveinfo}`}>K.I.E.T College, Muradnagar, Ghaziabad</p>
        </div>
    </div>
</div>
</section>
)
}

export default Contact;
















