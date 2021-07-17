import "./App.css";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./feature/Checkout";
import Room from "./feature/Room";
import Auth from "./feature/Auth";
import Member from "./feature/Member";
import Dashboard from "./feature/Dashboard";
import Voucher from "./feature/Voucher";
function App() {
    return (
        <BrowserRouter>
            <Route path="/dashboard" component={Dashboard} />

            <ToastContainer autoClose={2000} />

            <Header />

            <Switch>
                <Redirect exact from="/" to="/rooms" />

                <Route path="/rooms" component={Room} />

                <Route path="/auth/:type" component={Auth} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/member/:type" component={Member} />
                <Route path="/voucher" component={Voucher} />
            </Switch>

            <Contact />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
