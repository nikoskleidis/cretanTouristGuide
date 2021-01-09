import React from "react"
import "./styles.css"
import Photo from '../me.png'
import rethymno from "../rethymno.png"

function AboutPage() {
  return (
    <div className={"AboutPage"}>
      <div className="top">
        <img src={Photo} alt="Egw"/>
        <p>Ονομάζομαι <strong class="strong-n">Βογιατζής Γεώργιος</strong> και η πτυχιακή μου εργασία αφορά έναν πλήρη τουριστικό οδηγό της Κρήτης</p>
      </div>

      <div className="bottom">
        <img src={rethymno} class="botPhoto" alt="rethymno"/>
        <div className="bottom-p">
          <p>Τα εργαλεια που θα χρησιποποιήσω για την διεκπεραίωση της πτυχιακής εργασίας είναι τα εξής:</p>
          <div className="bottom-erg">
            <ul>
              <a  href="https://code.visualstudio.com//"><li>Vs Code(Visual Studio Code)</li></a>  
              <a  href="https://reactjs.org/docs/getting-started.html"><li>React</li></a>  
              <a  href="https://reacttraining.com/react-router"><li>React-router</li></a> 
            </ul> 
          </div>
        </div>
      </div>
    </div>  
  )
  
}

export default AboutPage
