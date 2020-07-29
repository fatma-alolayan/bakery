import React from "react";
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

// component
import Home from "../Home";
import List from "../List";
import ItemDetail from "../ItemDetail";

import BakeryList from "../BakeryList";
import BakeryDetail from "../BakeryDetail";
// store
import itemStore from "../../stores/itemStore";

const Routes = () => {
  return (
    <Switch>
      <Route path="/bakeries/:bakerySlug">
        <BakeryDetail />
      </Route>

      <Route path="/bakeries">
        <BakeryList />
      </Route>

      <Route path="/Bakery/:itemSlug">
        <ItemDetail />
      </Route>

      <Route path="/Bakery">
        <List items={itemStore.items} />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
