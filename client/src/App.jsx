import { Route, Redirect } from "react-router";
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantHOC from "./HOC/Restaurant.HOC";
import Home from "./Pages/Home";
import RestaurantPage from "./Pages/Restaurant.page";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery"/>
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantHOC path="/restaurant/page" exact component={RestaurantPage}/>
    </>
  );
}

export default App;
 