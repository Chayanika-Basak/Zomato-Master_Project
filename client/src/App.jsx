import Temp from "./components/temp.component";
import HomeLayoutHOC from "./HOC/Home.HOC";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp} />
    </>
  );
}

export default App;
