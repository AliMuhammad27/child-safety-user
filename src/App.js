import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Header from "./screens/header/Header";
import Footer from "./screens/footer/Footer";
import Profile from "./screens/profile/Profile";
import Wishlist from "./screens/wishlist/Wishlist";
import MemberShip from "./screens/membership/Membership";
import ProductAndPackages from "./screens/productandpackages/ProductAndPackages";
import PrivateRoute from "./screens/routing/PrivateRoute";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { setAuthToken } from "./util/setAuthToken";
import { loadUser } from "./redux/action/auth";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router basename="/child-safety/user">
        <Header />
        <Route path="/" component={Home} exact />
        <PrivateRoute path="/profile" component={Profile} exact />
        <PrivateRoute path="/wishlist" component={Wishlist} exact />
        <Route path="/membership" component={MemberShip} />
        <Route path="/productsandpackages" component={ProductAndPackages} />
        <Footer />
      </Router>
    </Provider>
  );
}
export default App;
