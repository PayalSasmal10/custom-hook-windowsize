import "./App.css";
import useSize from "./UseSize";

function App() {
  const windowSize = useSize();

  return (
    <div className="App">
      <div>
        Width : <span>{windowSize[0]}</span>
      </div>
      <div>
        Height : <span>{windowSize[1]}</span>
      </div>
    </div>
  );
}

export default App;
