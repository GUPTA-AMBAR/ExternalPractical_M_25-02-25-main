import styles from "./skills.module.css";
import html from './skillsImage.jsx/html.png';
import css from './skillsImage.jsx/css.png';
import tailwind from './skillsImage.jsx/tailwind.png';
import bootstrap from './skillsImage.jsx/bootstrap.png';
import javascript from './skillsImage.jsx/javascript.png';
import react from './skillsImage.jsx/react.jpg';
import redux from './skillsImage.jsx/redux.png';
import c from './skillsImage.jsx/c.png';
import cplus from './skillsImage.jsx/c++.jpg';

const Skills=()=>{
    return(
        <>        
        <div className={`${styles.skillheading}`}>
            <h1>Skills</h1>
        </div>

        <div className={`${styles.skills}`}>
        <img src={html} alt=''className={`${styles.image1}`} /> 
        <img src={css} alt=''className={`${styles.image1}`} /> 
        <img src={tailwind} alt=''className={`${styles.image1}`} />

        <img src={bootstrap} alt=''className={`${styles.image2}`} /> 
        <img src={javascript} alt=''className={`${styles.image2}`} /> 
        <img src={react} alt=''className={`${styles.image2}`} />

        <img src={redux} alt=''className={`${styles.image3}`} />
        <img src={c} alt=''className={`${styles.image3}`} />
        <img src={cplus} alt=''className={`${styles.image3}`} />
        </div>
        </>
    )
}
export default Skills;