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
import Services from "./screens/services/Services";
import ServiceDetail from "./screens/services/ServiceDetail";
import ServiceBooking from "./screens/services/ServiceBooking";
import ServicePayment from "./screens/services/ServicePayment";
import CoursePayment from "./screens/courses/CoursePayment";
import Courses from "./screens/courses/Courses";
import CourseDetail from "./screens/courses/CourseDetail";
import Products from "./screens/product/Products";
import ProductDetails from "./screens/product/ProductDetails";
import MyCart from "./screens/product/MyCart";
import Checkout from "./screens/checkout/Checkout";
import StartQuiz from "./screens/quiz/StartQuiz";
import Quiz from "./screens/quiz/Quiz";
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
        <PrivateRoute path="/MyCart/:id?" component={MyCart} exact />
        <PrivateRoute path="/Checkout" component={Checkout} exact />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/product-details/:id" component={ProductDetails} />
        <PrivateRoute path="/profile" component={Profile} exact />
        <PrivateRoute path="/wishlist" component={Wishlist} exact />
        <PrivateRoute path="/services" component={Services} exact />
        <PrivateRoute
          path="/service-details/:id"
          component={ServiceDetail}
          exact
        />
        <PrivateRoute
          path="/service-booking/:id"
          component={ServiceBooking}
          exact
        />
        <PrivateRoute
          path="/service-payment/:id"
          component={ServicePayment}
          exact
        />
        <PrivateRoute
          path="/course-payment/:id"
          component={CoursePayment}
          exact
        />
        <PrivateRoute path="/courses" component={Courses} exact />
        <PrivateRoute
          path="/course-details/:id"
          component={CourseDetail}
          exact
        />
        <PrivateRoute path="/start-quiz" component={StartQuiz} exact />
        <PrivateRoute path="/quiz" component={Quiz} exact />
        <Route path="/membership" component={MemberShip} />
        <Route path="/productsandpackages" component={ProductAndPackages} />
        <Footer />
      </Router>
    </Provider>
  );
}
export default App;
