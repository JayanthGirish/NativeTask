import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TaskDetailList from "../containers/TaskListDetails/taskListDetails";
import IndivisualTaskList from "../containers/TaskListDetails/indivisualTask";

const Stack = createStackNavigator();
const authStack = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"TaskDetailList"}
          component={TaskDetailList}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name={"IndivisualTaskList"}
          component={IndivisualTaskList}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const fontConfig = {};

export default authStack;
