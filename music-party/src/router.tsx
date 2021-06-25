import React, { FC } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { FirstLoad } from "./pages/FirstLoad";
import { MainMenu } from "./pages/MainMenu";
import { NameSetup } from "./pages/NameSetup";

export const Router: FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={FirstLoad} />
        <Route path="/nameSetup" component={NameSetup} />
        <Route path="/mainMenu" component={MainMenu} />
      </Switch>
    </HashRouter>
  );
};
