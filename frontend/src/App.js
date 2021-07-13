import ReactPlayer from "react-player";
import "./App.css";
function App() {
  return (
    <div className="App">
      <ReactPlayer
        url="http://localhost:4000"
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
