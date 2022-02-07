import React, { Component } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import ProfileLogo from "../assets//profilelogo";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";

export class CardDetails extends Component {
  render() {
    return (
      <View style={styles.HomeCard}>
        <View style={styles.innerDiv}>
          <View style={styles.textStyles}>
            <ProfileLogo />
          </View>
          <View style={styles.innerTextCard}>
            <Text style={styles.interiorCleanText}>{this.props.plandata}</Text>
          </View>
        </View>
        <View>
          {this.props.status === "Delayed" ? (
            <View
              style={{
                backgroundColor: "#D3D3D3",
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 16, fontWeight: "600" }}
              >
                {this.props.status}
              </Text>
            </View>
          ) : (
            <View
              style={{
                backgroundColor: "#FFFDD0",
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 16, fontWeight: "600" }}
              >
                {this.props.status}
              </Text>
            </View>
          )}
        </View>
        <View style={styles.innerDiv1}>
          <View style={styles.textStyles1}>
            <Text>Due Date:{this.props.date}</Text>
          </View>
          <View style={styles.innerTextCard}>
            <Text style={{ color: "black" }}>{this.props.messagecount}</Text>
            <Icon name="enter" size={18} color={"blue"} />
          </View>
          <View style={styles.innerTextCard}>
            <Icon1 name="comment-text-outline" size={30} color={"black"} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imgstyles: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  textStyles: {
    padding: 15,
    paddingHorizontal: 10,
    // backgroundColor: "#2F7DC9",
    borderRadius: 5,
    alignItems: "center",
  },
  textStyles1: {
    color: "black",
    padding: 15,
    paddingHorizontal: -20,
    borderRadius: 5,
    alignItems: "center",
  },
  toptexts: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 10,
  },

  background1: {
    backgroundColor: "#E8F4FF",
    alignSelf: "center",
    padding: 14,
    borderRadius: 50,
  },
  timeText: {
    alignItems: "flex-end",
  },
  textprops: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 27,
  },
  innerDiv: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // justifyContent: "space-around",
  },
  innerDiv1: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  innertext: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 9,
  },

  HomeCard: {
    backgroundColor: "#fff",
    borderColor: "#D0DCE7",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    // alignSelf: "center",
    padding: 10,
    width: "100%",
    // paddingBottom: 20
  },
  wrapperDiv: {
    backgroundColor: "#4B4B4B29",
    width: 40,
    height: 40,
    marginRight: 200,
    justifyContent: "center",
    borderRadius: 50,
    padding: 30,
  },
  textSize: {
    color: "#002E5B",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 190,
  },
  innerTextCard: {
    marginLeft: 10,
    marginVertical: 15,
  },
  interiorCleanText: {
    fontSize: 15,
    width: "90%",
    fontWeight: "bold",
  },
  MonthlyText: {
    width: "100%",
    fontSize: 10,
    color: "#2F7DC9",
  },
});

export default CardDetails;
