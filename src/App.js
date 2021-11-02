import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      {/* navbar */}
      <MyNav />

      <div className="container custom-container">
        {/* Routing added */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
      {/* Footer */}
      <MyFooter />
    </Router>
  );
}

export default App;
