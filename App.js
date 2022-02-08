import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import MainStackNavigator from "./src/navigation/mainStackNavigator";
// import TaskDetailList from "./src/containers/TaskListDetails/taskListDetails";
// import IndivisualTaskList from "./src/containers/TaskListDetails/indivisualTask";

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
  componentDidMount() {}

  render() {
    return (
      <PaperProvider theme={theme}>
        <MainStackNavigator />
      </PaperProvider>
    );
  }
}
