import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export function Button(props) {
  return (
    <TouchableOpacity disabled={props.disabled} onPress={props.pressed}>
      <View
        style={
          props.style
            ? props.style
            : props.secondary
            ? styles.secondary
            : styles.primary
        }
      >
        <Text
          style={
            props.buttonTextStyle
              ? props.buttonTextStyle
              : props.secondary
              ? styles.secondaryText
              : styles.primaryText
          }
        >
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primary: {
    justifyContent: "center",
    alignSelf: "center",
    height: 45.23,
    width: 210,
    backgroundColor: "#2F7DC9",
    borderRadius: 11,
  },
  secondary: {
    justifyContent: "center",
    alignSelf: "center",
    height: 40,
    width: 120,
    backgroundColor: "#fff",
    borderRadius: 11,
    borderColor: "blue",
    borderWidth: 1,
  },
});
