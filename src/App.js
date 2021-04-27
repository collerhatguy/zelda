
import './App.css';

function App() {
  fetch("https://the-legend-of-zelda.p.rapidapi.com/bosses", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": process.env.REACT_APP_API_KEY,
		"x-rapidapi-host": "the-legend-of-zelda.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response.json());
})
.catch(err => {
	console.error(err);
});
  return (
    <div className="App">
    </div>
  );
}

export default App;
