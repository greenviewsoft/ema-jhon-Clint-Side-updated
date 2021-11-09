import React from 'react';
import { BrowserRouter as Router, Switch,  Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Componets/Header/Header';
import Shop from './Componets/Shop/Shop';
import Inventory from './Componets/Inventory/Inventory';
import OrderReview from './Componets/OrderReview/OrderReview';
import  NotFound  from './Componets/NotFound/NotFound';
import Home from './Componets/Home/Home';

function App() {
  return (
    

    <div>
<Header></Header>
<Router>
    <Switch>
      <Route exact path="/" >
        <Home></Home>
      </Route>
      <Route exact path="/shop">
     <Shop></Shop>
      </Route>
      <Route path="/shop">
     <Shop></Shop>
      </Route>

      <Route path="/review">
      <OrderReview></OrderReview>
       </Route>

       <Route path="/inventory">
      <Inventory></Inventory>
       </Route>
       <Route path="*">
      <NotFound></NotFound>
       </Route>

    </Switch>
    </Router>

    </div>
  );
}

export default App;
