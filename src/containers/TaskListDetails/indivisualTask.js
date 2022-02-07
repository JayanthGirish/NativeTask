import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileLogo from "../../assets/profilelogo";
import InputField from "../../components/atoms/InputField";
import { Button } from "../../components/atoms/Button";
import DatePickerComponent from "../../components/atoms/DatePicker";

class IndivisualTaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let data = this.props && this.props.route && this.props.route.params;
    this.setState({ data: data });
    console.log("Data>>>>>>", data);
  }

  backhandler = () => {
    this.props && this.props.navigation && this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.taskIndivisualWrapper}>
          <TouchableOpacity onPress={this.backhandler}>
            <Icon name={"arrow-left"} color={"black"} size={25} />
          </TouchableOpacity>
          <View style={styles.taskheaderText}>
            <Text style={styles.taskheaderText}>Task Indivisual</Text>
          </View>
        </View>
        <View style={styles.linedrawersunmi} />

        <ScrollView>
          <View style={styles.taskIndivisualMan}>
            <Text style={styles.taskIndivisualMan}>Task</Text>
          </View>
          <View>
            <Text style={styles.taskIndivisualSubject}>
              {this.state.data &&
                this.state.data.item &&
                this.state.data.item.description}
            </Text>
          </View>

          <View style={styles.container3}>
            <View style={styles.DueDateWrapper}>
              <Text style={styles.assignedTo}>Status</Text>
            </View>
            <View style={styles.DueDateWrapper2}>
              <Text style={styles.assignedTo}>Due Date</Text>
              <View style={styles.datePicker}>
                <DatePickerComponent
                  date={
                    this.state.data &&
                    this.state.data.item &&
                    this.state.data.item.duedate
                  }
                />
              </View>
            </View>
          </View>

          <View style={styles.container1}>
            <View style={styles.processwrapper}>
              <Text style={styles.assignedTo}>Assigned to</Text>
              <View style={styles.ProfileLogo}>
                <ProfileLogo />
              </View>
            </View>

            <View style={styles.processwrapper2}>
              <View>
                <Text style={styles.processText}>Process</Text>
              </View>
              <View style={styles.InputField}>
                <InputField
                  style={styles.InputField}
                  value={
                    this.state.data &&
                    this.state.data.item &&
                    this.state.data.item.process
                  }
                />
              </View>
            </View>
          </View>

          <View style={styles.DescriptionWrapper}>
            <Text style={styles.DescriptionText}>Description</Text>
            <TextInput
              style={styles.input}
              multiline={true}
              numberOfLines={10}
              value={
                this.state.data &&
                this.state.data.item &&
                this.state.data.item.description2
              }
              //     onChangeText={onChangeNumber}
              //     value={number}
              //     placeholder="useless placeholder"
              keyboardType="default"
            />
          </View>

          <View style={styles.SubTaskWrapper}>
            <Text style={styles.DescriptionText}>SubTask</Text>

            <TextInput
              style={styles.input1}
              multiline={true}
              numberOfLines={3}
              value={
                this.state.data &&
                this.state.data.item &&
                this.state.data.item.subtasks
              }
              //     onChangeText={onChangeNumber}
              //     value={number}
              //     placeholder="useless placeholder"
              keyboardType="default"
            />

            <Text style={styles.DescriptionText}>Status</Text>
          </View>

          <View style={styles.ButtonWrapperstyle}>
            <Button
              style={styles.buttonViewStyle}
              buttonTextStyle={styles.buttonTextStyle}
              text={"Add SubTask"}
              icon={<Icon name="plus" size={25} color="white" />}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default IndivisualTaskList;

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 10,
    backgroundColor: "#fff",
    flex: 1,
  },
  taskheaderText: {
    fontSize: 18,
    textAlign: "center",
    alignItems: "center",
    marginRight: 80,
  },
  taskIndivisualWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingVertical: 10,
    alignItems: "center",
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
  assignedTo: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 18,
    color: "#808080",
    fontWeight: "bold",
  },
  linedrawersunmi: {
    height: 1.5,
    backgroundColor: "#00000014",
    marginVertical: 8,
    display: "flex",
    alignItems: "center",
    // alignContent : 'center',
    // alignSelf : "center"
  },
  ProfileLogo: {
    paddingHorizontal: 20,
    backgroundColor: "#F9F9FB",
    width: "50%",
  },
  processText: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 18,
    color: "#808080",
    fontWeight: "bold",
  },
  InputField: {
    width: "20%",
  },
  container1: {
    display: "flex",
    flexDirection: "row",
  },
  processwrapper2: {
    marginLeft: 120,
  },
  DescriptionText: {
    color: "#808080",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#808080",
    width: "90%",
    height: 100,
    marginLeft: 10,
  },
  input1: {
    borderWidth: 1,
    borderColor: "#808080",
    width: "90%",
    height: 30,
    marginLeft: 10,
  },
  buttonTextStyle: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  datePicker: {
    //     width: "50%",
  },
  container3: {
    display: "flex",
    flexDirection: "row",
  },
  DueDateWrapper2: {
    marginLeft: 120,
  },
});
