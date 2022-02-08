import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import ProfileLogo from "../../assets/profilelogo";
import CardDetails from "../../components/cardTask";
import { Button } from "../../components/atoms/Button";
import axios from "axios";

class TaskDetailList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.getdata();
    }, 1000);
  }
  getdata() {
    axios
      .get(`http://13.208.190.226:5007/api/get`)
      .then((response) => {
        this.setState({ data: response.data.jobTitles });
      })
      .catch((error) => {
        console.log("Error in Getting the data", error);
      });
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.container}>
          <View style={styles.taskIndivisualWrapper}>
            <View style={styles.IconWrapper}>
              <Icon name="carryout" color="green" size={28} />
            </View>
            <View style={styles.taskheaderText}>
              <Text style={styles.taskheaderText}>Task Lists</Text>
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
                    date={item.duedate.substring(0, 10)}
                    status={item.status}
                    messagecount={item.commentcount}
                    onPress={() =>
                      this.props &&
                      this.props.navigation &&
                      this.props.navigation.navigate("TaskDetailList", {
                        params: { item },
                      })
                    }
                  />
                  <View style={styles.paddingextra}></View>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.ButtonWrapperstyle}>
            <Button
              style={styles.buttonViewStyle}
              buttonTextStyle={styles.buttonTextStyle}
              text={" + Task"}
              icon={<Icon name="plus" size={25} color="white" />}
            />
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
    marginRight: 80,
  },
  taskIndivisualWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 70,
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
  IconWrapper: {
    padding: 10,
  },
  ButtonWrapperstyle: {
    paddingVertical: 15,
  },
  buttonTextStyle: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
});
