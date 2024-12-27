import styles from "./about.module.css";
import myImage from './aboutImage/ambar-portfolio-photo.jpg';
import { BsLinkedin } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BrowserRouter, Link } from "react-router-dom";


const About=()=>{
    return(
        <>
    <div className={`${styles.container}`}> 

    <div className={`${styles.image1}`}>
    <img src={myImage} alt='profile photo'className={`${styles.image}`} />

    </div>

    <div className={`${styles.text}`} >
    <h1 className={`${styles.glow} `}><b>Hello! I'm Ambar Gupta,</b></h1>
    <br/>
    <h4 className={`${styles.secText}`}>A passionate and dedicated frontend developer with a keen interest in creating visually appealing and user-friendly web applications. As recent I am pursuing Btech in Computer science and engineering from Kiet Group Of Institution,Ghaziabad . I have honed my skills in HTML, CSS, JavaScript, and modern frontend frameworks like React and Redux.</h4>

    </div>

</div>

    <div >
        <h4 className={`${styles.followme}`}><b>Follow Me : </b></h4>
        <div className={`${styles.badges}`}>
        <BrowserRouter>
        <Link to="https://www.linkedin.com/in/ambargupta8534004080/">
            <BsLinkedin className={`${styles.badge1}`}/>
        </Link>

        <Link to="https://www.instagram.com/ambar_29_08/">
            <FaSquareInstagram className={`${styles.badge2}`}/>
        </Link>

        <Link to="https://github.com/GUPTA-AMBAR">
            <FaGithub className={`${styles.badge3}`}/>
        </Link>

        </BrowserRouter>

        </div>
    </div>
</>
)
}
export default About;