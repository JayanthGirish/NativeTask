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
import InputField from "../../components/atoms/InputField";
import { Button } from "../../components/atoms/Button";
import DatePickerComponent from "../../components/atoms/DatePicker";
import SelectDropdown from "react-native-select-dropdown";
import Icon1 from "react-native-vector-icons/AntDesign";
import axios from "axios";
class IndivisualTaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dropdowndata: ["In Progress", "yet to start", "Completed", "Delayed"],
      description: "",
      dataid: "",
    };
  }

  componentDidMount() {
    let data = this.props && this.props.route && this.props.route.params;
    this.setState({
      data: data,
      dataid:
        this.props && this.props.route && this.props.route.params.item._id,
    });
    console.log("Data>>>>>>", data);
  }

  onChangeAction(e) {
    this.setState({ description: e.target.value });
  }

  onselect(statusdata) {
    axios
      .patch(`http://13.208.190.226:5007/api/update/${this.state.dataid}`, {
        status: statusdata,
      })
      .then((response) => {
        console.log("this is api calling", response.data);
        this.props &&
          this.props.navigation &&
          this.props.navigation.navigate("TaskDetailList");
      })
      .catch((error) => {
        console.log("here is erororo", error);
        // alert("error");
      });
  }
  backhandler = () => {
    this.props && this.props.navigation && this.props.navigation.goBack();
  };

  render() {
    //     const data = this.state;
    return (
      <View style={styles.mainView}>
        <View style={styles.taskIndivisualWrapper}>
          <TouchableOpacity onPress={this.backhandler}>
            <View style={styles.IconWrapper}>
              <Icon name={"arrow-left"} color={"black"} size={25} />
            </View>
          </TouchableOpacity>
          <View style={styles.taskheaderText}>
            <Text style={styles.taskheaderText}>Task Details</Text>
          </View>
        </View>
        <View style={styles.lineDrawer} />

        <ScrollView style={styles.colorChanger}>
          <View style={styles.taskIndivisualMan}>
            <Text style={styles.taskIndivisualMan}>Task</Text>
          </View>
          <View style={styles.TaskCardWrapper}>
            <Text style={styles.taskIndivisualSubject}>
              {this.state.data &&
                this.state.data.item &&
                this.state.data.item.taskname}
            </Text>
            <View style={styles.innerTextCard}>
              <Text style={{ color: "black", fontWeight: "bold" }}>
                {this.state.data &&
                  this.state.data.item &&
                  this.state.data.item.commentcount}
              </Text>
              <Icon1 name="enter" size={24} color={"blue"} />
            </View>
          </View>

          <View style={styles.container3}>
            <View style={styles.DueDateWrapper}>
              <Text style={styles.assignedTo}>Status</Text>
              <View style={styles.InputField}>
                <SelectDropdown
                  value={
                    this.state.data &&
                    this.state.data.item &&
                    this.state.data.item.status
                  }
                  data={this.state.dropdowndata}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    this.onselect(selectedItem);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
              </View>
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
                <Text style={styles.ProfileLogo1}>
                  {this.state.data &&
                    this.state.data.item &&
                    this.state.data.item.assignto}
                </Text>
              </View>
            </View>

            <View style={styles.processwrapper2}>
              <View>
                <Text style={styles.processText}>Process</Text>
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
          </View>

          <View style={styles.DescriptionWrapper}>
            <Text style={styles.DescriptionText}>Description</Text>
            <TextInput
              style={styles.input}
              multiline={true}
              editable={false}
              numberOfLines={10}
              onChangeText={(e) => this.onChangeAction(e)}
              value={
                this.state.data &&
                this.state.data.item &&
                this.state.data.item.description
              }
              //     onChangeText={onChangeAction}
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
              //     onChangeText={onChangeAction}
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
              text={" + Add SubTask"}
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
    fontWeight: "bold",
  },
  taskIndivisualWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 80,
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
  lineDrawer: {
    height: 1.5,
    backgroundColor: "#00000014",
    marginVertical: 8,
    display: "flex",
    alignItems: "center",
  },
  ProfileLogo: {
    padding: 5,
    alignItems: "center",
    textAlign: "center",
    fontSize: 18,
    height: 40,
    marginLeft: 8,
    //     paddingHorizontal: 20,
    backgroundColor: "#DB9370",
    width: "100%",
  },
  ProfileLogo1: {
    padding: 5,
    alignItems: "center",
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#DB9370",
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
  InputField1: {
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
    padding: 8,
    borderWidth: 1,
    borderColor: "#808080",
    width: "90%",
    height: 100,
    marginLeft: 10,
    fontSize: 16,
  },
  input1: {
    borderWidth: 1,
    borderColor: "#808080",
    width: "90%",
    height: 30,
    marginLeft: 10,
    fontSize: 16,
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
    marginLeft: 4,
    marginTop: -3,
  },
  InputField: {
    width: "100%",
  },
  ButtonWrapperstyle: {
    paddingVertical: 15,
  },
  colorChanger: {
    backgroundColor: "#fff",
  },
  IconWrapper: {
    padding: 8,
  },
  innerTextCard: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 20,
  },
  TaskCardWrapper: {
    display: "flex",
    flexDirection: "row",
  },
});
