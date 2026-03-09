import { useState } from "react";

import "./PortfolioCard.css";

const PortfolioCard = ({
  name,
  title,
  description,
  image,
  skills,
  darkMode,
  toggleTheme,
  nextPhoto,
  prevPhoto,
  addLike,
  likes,
}) => {

  const [showContact, setShowContact] = useState(false);

  return (

    <div className="portfolio-card">
     

      <div className="portfolio-header">
        <div className="profile-image">
          <img
            src={image}
            alt={name}
            onClick={nextPhoto}
            className="image-container"
          />
        </div>
        <div className="profile-info">
          <h1>{name}</h1>
          <h3>{title}</h3>
        </div>
      </div>

      <div className="portfolio-upperbody">
        <p>{description}</p>
      </div>

      <div className="portfolio-lowerbody">
        <h4>Skills</h4>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="skill-tag"
              onClick={() => alert(`You clicked on ${skill}`)}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="portfolio-footer">

        <div className="footer-btns">

          <button onClick={toggleTheme} className="dark-btn">
            {darkMode ? " ☀️ Light" : " 🌚Dark"}
          </button>

          <button onClick={prevPhoto} className="left-btn">
            ❮ 
          </button>

          <button onClick={nextPhoto} className="right-btn">
              ❯
          </button>

          <button onClick={addLike} className="likes-btn">
            
            ❤️{likes}

          </button>

          <button
            onClick={() => {
              setShowContact(!showContact);
            }}
            className="contact-btn"
          >
             ✉ Contact
          </button>
          {showContact && (
            <p className="email">Email:naveenbabu7@gmail.com</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default PortfolioCard;
