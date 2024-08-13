import styles from "./project.module.css";
import socialmedia from './projectsImage/socialmedia.png';
import bharatclock from './projectsImage/bhartclock.png';
import todo from './projectsImage/todo.png';
import currency from './projectsImage/currencyconverter.png';
import gender from './projectsImage/genderequality.png';
import calculator from './projectsImage/calculator.jpg';
import amazon from './projectsImage/amazon.png';
import tictactoe from './projectsImage/tictaktoe.png';
import rockpapersiccor from './projectsImage/rockpapersiccor.png';


const Project=()=>{

    return(
    <>
    <div className={`${styles.heading}`}>
      <h1>Projects</h1>
    </div>

<div className={`${styles.projects}`}>
{/* project1 */}
<div className={`card ${styles.card}`}>
    <img src={socialmedia} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h3 className="card-title">1. Social-Media-App</h3>
    <p className="card-text"><h6>A social media website built using React.js is designed to be user-friendly and interactive.</h6></p>
        
      <a  href="https://github.com/GUPTA-AMBAR/Social-Media-App.git" className="btn btn-primary"  >Github Link</a>
  </div>
</div>

{/* project2 */}
<div className={`card ${styles.card}`}>
    <img src={bharatclock} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h3 className="card-title">2. Bharat-Clock-App</h3>
    <p className="card-text"><h6>A Bharat Clock website built using React.js is a simple web application that displays the current time in a user-friendly interface.</h6></p>
        
      <a  href="https://github.com/GUPTA-AMBAR/Bharat-Clock-App.git" className="btn btn-primary"  >Github Link</a>
  </div>
</div>

{/* project3 */}
<div className={`card ${styles.card}`}>
    <img src={todo} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h3 className="card-title">3. Todo-List-App</h3>
    <p className="card-text"><h6>A beginner-level to-do list website built using React.js is a simple and interactive application designed to help users manage their tasks efficiently. </h6></p>
        
      <a  href="https://github.com/GUPTA-AMBAR/Todo-List-App.git" className="btn btn-primary"  >Github Link</a>
  </div>
</div>

{/* project4 */}
<div className={`card ${styles.card}`}>
    <img src={currency} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h3 className="card-title">4. Currency-Convertor-App</h3>
    <p className="card-text"><h6>A beginner-level currency converter website built using JavaScript is a simple web application that allows users to convert amounts from one currency to another.</h6></p>
        
      <a  href="https://github.com/GUPTA-AMBAR/currency-convetor-project.git" className="btn btn-primary"  >Github Link</a>
  </div>
</div>

{/* project5 */}
<div className={`card ${styles.card}`}>
    <img src={gender} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h3 className="card-title">5. Gender-Equality</h3>
    <p className="card-text"><h6>A beginner-level website on gender equality designed to spread awareness aims to educate and inform users about the importance of gender equality. </h6></p>
        
      <a  href="https://github.com/GUPTA-AMBAR/Gender-Equality.git" className="btn btn-primary"  >Github Link</a>
  </div>
</div>

{/* project6 */}
<div className={`card ${styles.card}`}>
    <img src={calculator} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h3 className="card-title">6. Calculator-App</h3>
    <p className="card-text"><h6>A beginner-level social media website built using React.js is designed to be user-friendly and interactive.</h6></p>
        
      <a  href="https://github.com/GUPTA-AMBAR/Calculator-App.git" className="btn btn-primary"  >Github Link</a>
  </div>
</div>

{/* project7 */}
<div className={`card ${styles.card}`}>
    <img src={rockpapersiccor} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h3 className="card-title">7. Rock-Paper-Scirrors</h3>
    <p className="card-text"><h6>A beginner-level Rock Paper Scissors website built using JavaScript is a simple and fun web application that allows users to play the classic game against the computer. </h6></p>
        
      <a  href="https://github.com/GUPTA-AMBAR/Rock-Paper-Scirrors.git" className="btn btn-primary"  >Github Link</a>
  </div>
</div>

{/* project8 */}
<div className={`card ${styles.card}`}>
    <img src={tictactoe} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h3 className="card-title">1. Tic-Tac-Toe</h3>
    <p className="card-text"><h6>A beginner-level Tic Tac Toe website built using JavaScript is a simple and interactive web application that allows users to play the classic game</h6></p>
        
      <a  href="https://github.com/GUPTA-AMBAR/tic-tac-toe-Game.git" className="btn btn-primary"  >Github Link</a>
  </div>
</div>

{/* project9 */}
<div className={`card ${styles.card}`}>
    <img src={amazon} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h3 className="card-title">1. Amazon-Clone</h3>
    <p className="card-text"><h6>A beginner-level Amazon clone website built using HTML and CSS is a project that replicates the basic structure and styling of the Amazon e-commerce platform.</h6></p>
        
      <a  href="https://github.com/GUPTA-AMBAR/Amazon-Project.git" className="btn btn-primary"  >Github Link</a>
  </div>
</div>

</div>

</>
    )
}


export default Project;