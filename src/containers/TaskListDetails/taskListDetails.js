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
import ProfileLogo1 from "../../assets/profilelogo2.svg";
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
        // console.log("this is api calling", response.data);
        this.setState({ data: response.data.jobTitles });
      })
      .catch((error) => {
        console.log("here is erororo", error);
        // alert("error");
      });
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.container}>
          <View style={styles.taskIndivisualWrapper}>
            <Icon name="carryout" size={28} />
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
