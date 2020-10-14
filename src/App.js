import React from "react";
import "./App.css";
import AboutPage from "./components/AboutPage";
import TechnologiesPage from "./components/TechnologiesPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={AboutPage} />
        <Route path="/technologies" exact component={TechnologiesPage} />
        <Route path="/projects" exact component={ProjectsPage} />
        <Route path="/contact" exact component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
