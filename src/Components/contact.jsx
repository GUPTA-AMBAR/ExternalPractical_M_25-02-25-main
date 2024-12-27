// import styles from "./contact.module.css";
// import co4 from './contactImage/co-4.png';
// import mail from './contactImage/mail.png';
// import location from './contactImage/location.png';
// import emailjs from '@emailjs/browser';
// import { useState } from "react";


// const Contact=()=>{



//     const [formData, setFormData] = useState({
//         name: '',
//         email: '', 
//         message: '' 
//     });
//     const [isSubmitted, setIsSubmitted] = useState(false);
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
  
//       emailjs
//         .send(
//           process.env.REACT_APP_EMAILJS_SERVICE_ID,
//           process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//           formData,
//           process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//         )
//         .then(
//           (response) => {
//             console.log('Email sent successfully:', response.status, response.text);
//             setIsSubmitted(true);
//           },
//           (error) => {
//             console.error('Error sending email:', error);
//           }
//         );
//     };




    
// return(

// <section className= {`${styles.contact}`}>
// <div className={`${styles.input}`}>
//     <p className={`${styles.contactheading}`}>CONTACT US</p>
//     <p className={`${styles.getwork}`}>Get we contact work</p>
//     <form onSubmit={handleSubmit}>
//         <div>
//             <div className={`${styles.nameEmail}`}>
//                 <input type="text" placeholder="Name" value={formData.name}  onChange={handleChange} required/>
//             </div>
//             <div className={`${styles.nameEmail}`}>
//                 <input type="email" placeholder="E-mail" value={formData.email} onChange={handleChange}  required/>
//             </div>
//             <textarea className={`${styles.message}`} name="" id="" rows="10" placeholder="Message" value={formData.message} onChange={handleChange} required ></textarea>
//         </div>
//         <br/>
//         <button type="submit" className={`${styles.sendMessage}`}>Send Message</button>
//     </form>
// </div>
// <div className= {`${styles.contactinfo}`}>
//     <div className= {`${styles.info}`}>
//         <div><img src={co4} alt="" height="60px" width="60px"/></div>
//         <div className=  {`${styles.infotypeinfogive}`}>
//             <p className={`${styles.infotype}`}>Call Me</p>
//             <p className= {`${styles.giveinfo}`}>+91 8534004080 , 9149066047</p>
//         </div>
//     </div>
//     <div className="info">
//         <div><img src={mail} alt="" height="60px" width="60px"/></div>
//         <div className= {`${styles.infotypeinfogive}`}>
//             <p className= {`${styles.infotype}`}>Email Us</p>
//             <p className= {`${styles.giveinfo}`}>ambargupta1290@gmail.com</p>
//         </div>
//     </div>
//     <div className="info">
//         <div><img src={location} alt="" height="60px" width="60px"/></div>
//         <div className= {`${styles.infotypeinfogive}`}>
//             <p className={`${styles.infotype}`}>Address</p>
//             <p className= {`${styles.giveinfo}`}>K.I.E.T College, Muradnagar, Ghaziabad</p>
//         </div>
//     </div>
// </div>
// </section>
// )
// }

// export default Contact;




















import styles from "./contact.module.css";
import co4 from './contactImage/co-4.png';
import mail from './contactImage/mail.png';
import location from './contactImage/location.png';
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('Environment variables for EmailJS are missing.');
      return;
    }

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(
        (response) => {
          console.log('Email sent successfully:', response.status, response.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );
      setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className={`${styles.contact}`}>
      <div className={`${styles.input}`}>
        <p className={`${styles.contactheading}`}>CONTACT US</p>
        <p className={`${styles.getwork}`}>Get we contact work</p>
        <form onSubmit={handleSubmit}>
          <div>
            <div className={`${styles.nameEmail}`}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={`${styles.nameEmail}`}>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              className={`${styles.message}`}
              name="message"
              rows="10"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <br />
          <button type="submit" className={`${styles.sendMessage}`}>
            Send Message
          </button>
        </form>
      </div>
      <div className={`${styles.contactinfo}`}>
        <div className={`${styles.info}`}>
          <div>
            <img src={co4} alt="" height="60px" width="60px" />
          </div>
          <div className={`${styles.infotypeinfogive}`}>
            <p className={`${styles.infotype}`}>Call Me</p>
            <p className={`${styles.giveinfo}`}>
              +91 8534004080 , 9149066047
            </p>
          </div>
        </div>
        <div className="info">
          <div>
            <img src={mail} alt="" height="60px" width="60px" />
          </div>
          <div className={`${styles.infotypeinfogive}`}>
            <p className={`${styles.infotype}`}>Email Us</p>
            <p className={`${styles.giveinfo}`}>ambargupta1290@gmail.com</p>
          </div>
        </div>
        <div className="info">
          <div>
            <img src={location} alt="" height="60px" width="60px" />
          </div>
          <div className={`${styles.infotypeinfogive}`}>
            <p className={`${styles.infotype}`}>Address</p>
            <p className={`${styles.giveinfo}`}>
              K.I.E.T College, Muradnagar, Ghaziabad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

