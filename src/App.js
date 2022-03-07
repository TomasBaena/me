import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import  Home  from './components/home.js';
import  Lumaki  from './components/lumaki.js';
import  Breadhound  from './components/breadhound.js';
import Fitr from "./components/fitr.js";
import This from "./components/this.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />  
          <Route exact path="/lumaki" component={Lumaki} />  
          <Route exact path="/breadhound" component={Breadhound} />  
          <Route exact path="/fitr" component={Fitr} />  
          <Route exact path="/this" component={This} />  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
