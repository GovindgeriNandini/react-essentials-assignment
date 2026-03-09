import "./App.css";
import MovieSearch from "./components/MovieSearch";
import { useState } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(false);

   const handleTheme = () =>{
        setDarkMode(!darkMode);
    }

  return (
    <div className={`App ${darkMode ? "dark-theme": "light-theme"}`}>
      <button  className = 'toggle-btn' onClick={handleTheme}>Toggle theme</button>
      <MovieSearch />
    </div>
  );
}

export default App;
