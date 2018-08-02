import React from 'react';
import { render } from 'react-dom';

//ROUTER
import { BrowserRouter, Switch, Route } from "react-router-dom";

//REDUX
import { Provider } from "react-redux";
import store from "./redux";

import Nav from './Nav'
import App from "./App";
import Card from "./Card"
import SearchCards from "./SearchCards"
import Deck from "./Deck"

render(

    <BrowserRouter>
      <div> 
        <Nav />
      <Provider store={store}>      

        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/card" component={SearchCards} />
          <Route path="/deck" component={Deck} />
        </Switch>
      </Provider>
      </div>
    </BrowserRouter>

  , document.getElementById("root"));