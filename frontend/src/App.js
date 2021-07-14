import ReactPlayer from "react-player";
import "./App.css";
import { baseUrl } from "./baseUrl";
function App() {
  return (
    <div className="App">
      <ReactPlayer
        url={baseUrl}
        className="react-player"
        playing
        width="100%"
        height="100%"
        controls
      />
      
    </div>
  );
}

export default App;