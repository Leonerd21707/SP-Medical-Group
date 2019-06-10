import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
  } from "react-navigation";

  import Main from "../Main";
  import App from "../App"


const AuthStack = createStackNavigator({App});


const MainNavigator = createStackNavigator(
  {
    App,
    Main
  },
  {
    initialRouteName: "Main",
    swipeEnabled: true,
    headerMode: "none",
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveBackgroundColor: "#df99ff",
      activeBackgroundColor: "#B707FF",
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