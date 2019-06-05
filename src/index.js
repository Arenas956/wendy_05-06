import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router-3";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import registroPresupuesto from "./components/RegistrarPresupuesto";
import ModuloPresupuesto from "./components/ModuloPresupuesto";

class Index extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={ModuloPresupuesto} />
        <Route
        
          path="/vista/registrarPresupuesto"
          component={registroPresupuesto}
        />
        
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
registerServiceWorker();
