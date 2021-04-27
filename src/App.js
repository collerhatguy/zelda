import React, {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import useAPI from "./hooks/useAPI";
import './App.css';

function App() {
  
  const queries = ["items", "places", "dungeons", "bosses", "monsters", "characters", "games"];
  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            {queries.map(query => {
              return <Link to={`/${query}`}>{query}</Link>
            })}
          </nav>
        </header>
        <Switch>
          {queries.map(query => {
            return <Route path={`/${query}`} component={[`PageFor${query}`]} />
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
