import React from "react";
import "./styles.css"


function AboutPage() {
  return (
    <div className={"AboutPage"}>
      <div class="p-gnwrimia">
        <p>Ονομάζομαι Βογιατζής Γεώργιος και η πτυχιακή μου εργασία αφορά  έναν πλήρη τουριστικό οδηγό της Κρήτης</p>
      </div>
      <div class="p-ergaleia">
        <p>Τα εργαλεια που θα χρησιμοποιήσω για την διεκπεραίωσή της είναι τα εξής:</p>
        </div>
      <ul>
        <li>Vs Code(Visual Studio Code)</li>
        <li>React</li>
        <li>React-router</li>
      </ul>
      
    </div>
  )
  
}

export default AboutPage
