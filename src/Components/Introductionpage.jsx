import styles from "./Introductionpage.module.css";
import { FaHome } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";



const Introduction =({selectedTab,setSelectedTab})=>{
   return( 
    <div className={styles.navbar}>
<ul className="nav justify-content-center">
  <li className={`nav-item ${styles.navItem}`}   onClick={()=>{setSelectedTab("Home")}}>
  <a className={`nav-link ${styles.button} ${selectedTab==='Home'&&"active"}`} href="#"><h4><FaHome /> </h4></a>
  </li>
  <li className="nav-item" onClick={()=>{setSelectedTab("education")}}>
  <a className={`nav-link ${styles.button} ${selectedTab==='education'&&"active"}`}  href="#"><h4><IoSchool /></h4></a>
  </li>
  <li className="nav-item"  onClick={()=>{setSelectedTab("skills")}}>
  <a className={`nav-link ${styles.button} ${selectedTab==='skills'&&"active"}`} href="#"><h4><GiSkills /></h4></a>
  </li>
  <li className="nav-item" onClick={()=>{setSelectedTab("project")}}>
  <a className={`nav-link ${styles.button} ${selectedTab==='project'&&"active"}`} href="#"><h4><GrProjects /></h4></a>
  </li>
  <li className="nav-item" onClick={()=>{setSelectedTab("contact")}}>
  <a className={`nav-link ${styles.button} ${selectedTab==='contact'&&"active"}`}href="#"><h4><MdContactMail /></h4></a>
  </li>
</ul>


</div>
   )
};

export default Introduction;