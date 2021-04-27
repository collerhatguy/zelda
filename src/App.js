import React, {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './style/App.css';
import ItemsPage from "./components/ItemsPage";
import PlacesPage from "./components/PlacesPage";
import DungeonsPage from "./components/DungeonsPage";
import BossesPage from "./components/BossesPage";
import MonstersPage from "./components/MonstersPage";
import CharactersPage from "./components/CharactersPage";
import GamesPage from "./components/GamesPage";

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
          <Route path={`/places`} component={PlacesPage} />
          <Route path={`/dungeons`} component={DungeonsPage} />
          <Route path={`/bosses`} component={BossesPage} />
          <Route path={`/monsters`} component={MonstersPage} />
          <Route path={`/characters`} component={CharactersPage} />
          <Route path={`/games`} component={GamesPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
