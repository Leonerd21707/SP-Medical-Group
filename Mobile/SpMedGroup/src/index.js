import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
  } from "react-navigation";

  import Main from "../Main";
  import App from "../App"


const AuthStack = createStackNavigator({App});


const MainNavigator = createBottomTabNavigator(
  {
    Main
  },
  {
    initialRouteName: "Main",
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveBackgroundColor: "#dd99ff",
      activeBackgroundColor: "#B727FF",
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "#FFFFFF",
      style: {
        height: 50
      }
    }
  }
);

export default createAppContainer(
    createSwitchNavigator(
      {
        MainNavigator,
        AuthStack
      },
      {
        initialRouteName: "AuthStack"
      }
    )
  );