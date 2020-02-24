import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Dashboard from "../screens/Dashboard";
import Settings from "../screens/Settings";




import dash1 from "../screens/dash1";
import dash2 from "../screens/dash2";
import dash3 from "../screens/dash3";
import dash4 from "../screens/dash4";


export default createStackNavigator(
  {
    Dashboard,
	dash1,
	dash2,
	dash3,
	dash4,
    Settings
  },
  {
    initialRouteName: "Dashboard"
  }
);