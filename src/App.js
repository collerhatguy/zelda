import React, {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './style/App.css';
import ItemsPage from "./components/ItemsPage";

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
          <Route path={`/items`} component={ItemsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
