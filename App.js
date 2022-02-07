import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  SafeAreaView,
  AsyncStorage,
  StatusBar,
} from "react-native";
// import MainStackNavigator from "./src/navigation/mainStackNavigator";
import { Provider } from "react-redux";
// import store from "./src/store/configureStore";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import MainStackNavigator from "./src/navigation/mainStackNavigator";
// import DrawerNavigation from "./src/navigation/DrawerNav";
import { NavigationContainer } from "@react-navigation/native";
import TaskList from "./src/containers/TaskListDetails/taskListDetails";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
  mode: "adaptive",
};

export default class App extends React.Component {
  // }

  componentDidMount() {}
  async componentDidUpdate(prevProps, prevState) {
    // console.log('componenetAppUpdate', prevProps);
    const user = await AsyncStorage.getItem("user");

    if (user) {
      // console.log('user', user);

      const decoded = jwt_decode(user.token);
      // console.log('decoded', JSON.stringify(decoded));
      let diff = decoded.exp * 1000 - new Date().getTime();
      if (diff <= 0) {
        // console.log('session expired');
        await AsyncStorage.clear();

        this.props.navigation.navigate("Login-Main");
      }
    }
  }

  render() {
    return (
      <TaskList />
      // <Provider>
      //   <StatusBar />
      //   <PaperProvider theme={theme}>
      //     <MainStackNavigator />
      //   </PaperProvider>
      // </Provider>
    );
  }
}
