import React from "react";
import "./App.css";
import AboutPage from "./Pages/AboutPage";
import TechnologiesPage from "./Pages/TechnologiesPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ludzik1 from "./assets/images/ludzik.png";
import ludzik2 from "./assets/images/ludzik2.png";
import ludzik3 from "./assets/images/ludzik3.png";
import ludzik4 from "./assets/images/ludzik4.png";
import ludzik5 from "./assets/images/ludzik5.png";

function App() {
  return (
    <Router>
      <div className="ludziki">
        <img src={ludzik1} alt="pamper" />
        <img src={ludzik2} alt="pamper" />
        <img src={ludzik3} alt="pamper" />
        <img src={ludzik4} alt="pamper" />
        <img src={ludzik5} alt="pamper" />
      </div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route exact path="/technologies" exact component={TechnologiesPage} />
        <Route exact path="/projects" exact component={ProjectsPage} />
        <Route exact path="/contact" exact component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
