import styles from "./education.module.css";
import { IoIosSchool } from "react-icons/io";
import { BrowserRouter,Link } from "react-router-dom";
import kietimage from './educationImage/kiet.jpg';
import heritage from './educationImage/heritage.jpg';
import heritage4 from './educationImage/heritage4.jpg';

const Education=()=>{
    return(
    <div className={`${styles.container}`}>
    <div className={`${styles.educationHeader}`}>
        <h1><b>Education</b></h1>
    </div>

    <div >
    <div >
        <div className={`${styles.kietimage1}`}>
        <BrowserRouter>
        <Link to="https://www.kiet.edu/">
         <img  src={kietimage} alt="kiet" />
        </Link>
        </BrowserRouter>
        </div>

    <li  className={`${styles.educationList1}`}>
    <IoIosSchool className={`${styles.icon}`} /> 
        <h5> <b >
        BTech in CSE(AI&ML)
        <br />
        KIET group of institution Delhi-Ncr,Meerut Rd ,
        <br />
        Ghaziabad,Uttar Pradesh,201206    
        </b></h5>
    </li>
    </div>

    <div>  
        <div className={`${styles.heritageimage}`}>
        <BrowserRouter>
        <Link to="http://www.heritagemilak.com/">
         <img  src={heritage} alt="Heritage" />
        </Link>
        </BrowserRouter>
        </div>  
    <li  className={`${styles.educationList2}`}>
    <IoIosSchool className={`${styles.icon}`} /> 
        <h5> <b >
         <h3>Intermediate CBSE :</h3>
        Heritage Children Academy, 
        <br />
        Milak,(Rampur),Uttar Pradesh,243701,
        <br />
        Percentage : 92.6%   
        </b></h5>
    </li>
    </div>

    <div>
        <div className={`${styles.heritageimage4}`}>
        <BrowserRouter>
        <Link to="http://www.heritagemilak.com/">
         <img  src={heritage4} alt="Heritage" />
        </Link>
        </BrowserRouter>
        </div>
    <li  className={`${styles.educationList3}`}>
    <IoIosSchool className={`${styles.icon}`} /> 
        <h5> <b >
         <h3>Matriculation CBSE :</h3>
        Heritage Children Academy, 
        <br />
        Milak,(Rampur),Uttar Pradesh,243701,
        <br />
        Percentage : 89.2%   
        </b></h5>
    </li>
    </div>


    </div>
    </div>
)
}
export default Education;