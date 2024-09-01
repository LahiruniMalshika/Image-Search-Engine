import logo from "./logo.svg";
import "./App.css";
import Background from "./components/background";
import SearchField from "./components/searchField";
import Images from "./components/images";

function App() {
  return (
    <div className="App">
      <Background>
        <SearchField />
      </Background>
      <Images/>
    </div>
  );
}

export default App;
