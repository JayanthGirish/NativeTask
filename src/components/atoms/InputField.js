import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Picker,
  Platform,
} from "react-native";
export default function InputField(props) {
  return (
    <View style={inputFieldStyle.mainView}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TextInput
          editable={!props.editable}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
          style={
            props.error
              ? inputFieldStyle.textInputError
              : props.inputFieldStyle
              ? props.inputFieldStyle
              : inputFieldStyle.textInput
          }
          value={props.value}
          placeholder={props.inputPlaceholder}
          placeholderTextColor={
            props.placeholderTextColor ? props.placeholderTextColor : "#B3AEA8"
          }
          defaultValue={props.defaultValue}
          onChangeText={(inputText) => props.handleInputChange(inputText)}
          maxLength={props.maxLength}
        />
      </View>
      <Text style={inputFieldStyle.errorText}>{props.errorText} </Text>
    </View>
  );
}

const inputFieldStyle = StyleSheet.create({
  hintText: {
    color: "#080808",
    // fontFamily: "Mark_Medium",
    fontSize: 14,
  },
  errorText: {
    color: "red",
  },

  mainView: {},

  textInput: {
    // fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 16,
    color: "black",
    width: 100,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  textInputError: {
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 16,
    color: "black",
    width: 250,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  inputStyle: {
    flex: 1,
    // fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 36,
    // padding:15,
  },
});
