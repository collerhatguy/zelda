import React, {useEffect} from "react";
import useAPI from "./hooks/useAPI";
import './App.css';

function App() {
  const data = useAPI(0);
  useEffect(() => {
    console.log(data);
  }, [data])
  return (
    <div className="App">
    </div>
  );
}

export default App;
