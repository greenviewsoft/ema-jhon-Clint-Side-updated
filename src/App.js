import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Componets/Header/Header';
import Shop from './Componets/Shop/Shop';
import Inventory from './Componets/Inventory/Inventory';
import OrderReview from './Componets/OrderReview/OrderReview';
import NotFound from './Componets/NotFound/NotFound';
import Home from './Componets/Home/Home';
import PlaceOrder from './Componets/PlaceOrder/PlaceOrder';
import Login from './Componets/Login/Login';
import Register from './Componets/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Componets/PrivateRoute/PrivateRoute';
import Shipping from './Componets/Shipping/Shipping';
import Orders from './Componets/Orders/Orders';

function App() {
  return (


    <div>
<AuthProvider>

<Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home" >
            <Home></Home>
          </Route>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          

          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>

          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>

          <PrivateRoute path="/shipping" >
            <Shipping></Shipping>
          </PrivateRoute>

          <PrivateRoute path="/PlaceOrder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>


          <PrivateRoute path="/orders">
            <Orders></Orders> 
          </PrivateRoute>

          <Route path="/login" >
            <Login></Login>
           
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>

</AuthProvider>
     
    </div>
  );
}

export default App;
