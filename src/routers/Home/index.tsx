import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// Config
import { bottomBarNavigation } from "../../config/screen/"
import IconHome from "../../config/screen/Icons/bottomNavigator/Home"
import IconLike from "../../config/screen/Icons/bottomNavigator/Likes"
import IconBirdcast from "../../config/screen/Icons/bottomNavigator/Birdcast"

// Pages
import Home from "../../pages/Home"

const Tabs = createBottomTabNavigator()

export default () => <Tabs.Navigator
  initialRouteName="Home"
  tabBarOptions={bottomBarNavigation}
>
  <Tabs.Screen
    name="Home"
    component={Home}
    options={{
      tabBarIcon: ({ focused }) => IconHome(focused)
    }}
  />
  <Tabs.Screen
    name="Like"
    component={Home}
    options={{
      tabBarIcon: ({ focused }) => IconLike(focused)
    }}
  />
  <Tabs.Screen
    name="Birdcast"
    component={Home}
    options={{
      tabBarIcon: ({ focused }) => IconBirdcast(focused),
    }}
  />
</Tabs.Navigator>

