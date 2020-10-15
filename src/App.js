import React from "react";
import "./App.css";
import AboutPage from "./Pages/AboutPage";
import TechnologiesPage from "./Pages/TechnologiesPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
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
