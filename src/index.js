import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

function App() {
  return (
    <div className="card">
      <Avatar imgName="goat.jpg" />
      <div className="data">
        <Intro />
        <div className="skills">
          <SkillList
            skillName="Vue.js"
            emoji="&#128036;"
            badgeColor="#42b883"
          />
          <SkillList
            skillName="Tailwind CSS"
            emoji="&#128051;"
            badgeColor="#89CFF0"
          />
          <SkillList
            skillName="Python"
            emoji="	&#128013;"
            badgeColor="#EADDCA"
          />
          <SkillList
            skillName="HTML & CSS"
            emoji="&#128030;"
            badgeColor="#AA4A44"
          />
          <SkillList
            skillName="Git & Github"
            emoji="&#129460;"
            badgeColor="#36454F"
          />
          <SkillList
            skillName="Vue Router"
            emoji="&#128375;"
            badgeColor="	#9F2B68"
          />
        </div>

      </div>
    </div>
  )
}

function Avatar(props) {
  return <img src={props.imgName} alt="Profile" />
}

function Intro() {
  return (
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatem eligendi alias possimus. Nulla mollitia non
      aperiam, nesciunt
    </p>
  )
}

function SkillList(props) {
  return (
    <div className="badge" style={{ backgroundColor: props.badgeColor }}>
      <span className="badge-text">{props.skillName}</span>
      <span className="badge-icon">{props.emoji}</span>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)