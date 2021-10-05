import Master from "./components/master";
import Temp from "./components/temp.component";
import HomeLayoutHOC from "./HOC/Home.HOC";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp} />
      <HomeLayoutHOC path="/:type" exact component={Master} />
    </>
  );
}

export default App;
