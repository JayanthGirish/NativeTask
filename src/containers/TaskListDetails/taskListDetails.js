import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import CardDetails from "../../components/cardTask";

class TaskDetailList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          taskname: "UI/UX mobile design of Testing 1",
          status: "Delayed",
          duedate: "12/10/2021",
          assignto: "Jayanth",
          process: "OnGoing",
          description: "UI/UX mobile design of Testing 1",
          description2: " we are working on the data",
          subtasks: "check the alignment and css issues",
          commentcount: "1",
        },
        {
          id: 2,
          taskname: "UI/UX mobile design Task 2",
          status: "Delayed",
          duedate: "14/10/2021",
          assignto: "Tester",
          process: "Pending",
          description: "UI/UX mobile design Task 2",
          description2: " we are working on the data",
          subtasks: "check the alignment and css issues",
          commentcount: "2",
        },
        {
          id: 3,
          taskname: "Design task of 3",
          status: "Completed",
          duedate: "7/1/2022",
          assignto: "Tester2",
          process: "Completed",
          description: "Design task of 3",
          description2: " we are working on the data",
          subtasks: "check the alignment and css issues",
          commentcount: "1",
        },
        {
          id: 4,
          taskname: "UI/UX  Task 5",
          status: "Ongoing",
          duedate: "18/10/2022",
          assignto: "Tester3",
          process: "Pending",
          description: "UI/UX  Task 5",
          description2: " we are working on the data",
          subtasks: "check the alignment and css issues",
          commentcount: "2",
        },
      ],
    };
  }

  componentDidMount() {
    console.log("Heyy");
  }

  handlePress = () => {
    this.props &&
      this.props.navigation &&
      this.props.navigation.navigate &&
      this.props.navigation.navigate({});
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.container}>
          <View style={styles.taskIndivisualWrapper}>
            <Icon name="carryout" size={28} />
            <View style={styles.taskheaderText}>
              <Text style={styles.taskheaderText}>Task Details</Text>
            </View>
          </View>
        </View>

        <ScrollView>
          <View>
            {this.state.data.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    this.props &&
                      this.props.navigation &&
                      this.props.navigation.navigate &&
                      this.props.navigation.navigate({
                        name: "IndivisualTaskList",
                        params: { item },
                      });
                  }}
                >
                  <CardDetails
                    plandata={item.taskname}
                    date={item.duedate}
                    status={item.status}
                    messagecount={item.commentcount}
                  />
                  <View style={styles.paddingextra}></View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default TaskDetailList;

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 10,
    backgroundColor: "#fff",
    flex: 1,
  },
  taskheaderText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    marginRight: 60,
  },
  taskIndivisualWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingVertical: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
  },
  button: {
    marginRight: 10,
  },
  card: {
    width: 300,
  },
  taskIndivisualMan: {
    padding: 5,
    color: "#808080",
    fontSize: 18,
    fontWeight: "bold",
  },
  taskIndivisualSubject: {
    fontSize: 20,
    color: "black",
    fontStyle: "italic",
    textDecorationLine: "underline",
    width: "90%",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  paddingextra: {
    paddingBottom: 10,
  },
});
