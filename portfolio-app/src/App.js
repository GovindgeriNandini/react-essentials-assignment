import "./App.css";
import { useState } from "react";

import PortfolioCard from "./components/PortfolioCard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [photo, setPhoto] = useState(0);

  const [likes, setLikes] = useState(128)

  const images = [
    "./images/profile1.jpg",
    "./images/profile2.jpg",
    "./images/profile3.jpg",
  ];
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  const nextPhoto = () => {
    setPhoto((prev) => (prev + 1) % images.length);
  };
  const prevPhoto = () => {
    setPhoto((prev)=> prev === 0 ? images.length-1 : prev-1);
  }
  const addLike = () => {
    setLikes(likes+1);
  }

  return (
    <div className= {`App ${ darkMode ? "dark-theme":"light-theme"}`}>
       <button onClick={toggleTheme} className="toggle-btn">
        Toggle Theme
      </button>
      
       
        <PortfolioCard
          name="Naveen Babu"
          title="Full Stack Developer"
          description="I am a passionate full stack developer with experience in building web applications using React, Node.js, and MongoDB. I enjoy creating user-friendly interfaces and solving complex problems through code."
          image={images[photo]}
          skills={[
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JavaScript",
            "HTML",
            "CSS",
            
          ]}
          toggleTheme = {toggleTheme}
          darkMode = {darkMode}
          nextPhoto={nextPhoto}
          prevPhoto = {prevPhoto}
          likes ={likes}
          addLike = {addLike}
          
        />
     
    </div>
  );
}

export default App;
