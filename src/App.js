// import { useRef } from "react";
import useSize from "./UseSize";
import "./App.css";

function App() {
  const windowsize = useSize();

  return (
    <div className="App">
      <div className="window">
        Width : <span>{windowsize[0]}</span>
      </div>
      <div className="window">
        Height : <span>{windowsize[1]}</span>
      </div>
    </div>
  );
}

export default App;
