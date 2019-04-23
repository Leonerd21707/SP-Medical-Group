import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import './index.css';
import App from './Pages/Home/App';
import Usuarios from './Pages/Usuarios/Usuarios';
import * as serviceWorker from './serviceWorker';
import { usuarioAutenticado } from "../src/Services/auth";
import Consultas from './Pages/Consultas/Consultas';


ReactDOM.render(<App />, document.getElementById('root'));
const Permissao = ({ component: Component }) => (
  <Route
    render={props => usuarioAutenticado() ?
      (<Component {...props} />) :
      (<Redirect to={{ pathname: "/" }} />)
      
    }
  />
);

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/usuarios" component={Usuarios} />
        <Route exact path="/consultas" component={Consultas} />

      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
