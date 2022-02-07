import React from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
const width = Dimensions.get("window").width;

const CustomizedDropdown = ({
  value,
  data,
  onChangeText,
  error,
  errorText,
}) => {
  return (
    <View style={inputFieldStyle.mainView}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Dropdown
          value={value}
          data={data}
          backgroundColor={"#2F7DC9"}
          baseColor={"#fff"}
          textColor={"#fff"}
          itemColor={"#fff"}
          itemPadding={8}
          // rippleCentered={true}
          selectedItemColor={"#fff"}
          fontSize={12}
          dropdownOffset={{ top: 0, bottom: 0, right: 0, left: 16 }}
          pickerStyle={{
            backgroundColor: "#2F7DC9",
            width: 200,
          }}
          containerStyle={{
            width: 220,
            borderWidth: 1,
            borderColor: "#2F7DC9",
            borderRadius: 4,
            paddingHorizontal: 10,
            paddingTop: 0,
            borderRadius: 30,
            backgroundColor: "#2F7DC9",
          }}
          overlayStyle={{
            backgroundColor: "transparent",
          }}
          inputContainerStyle={{
            borderBottomColor: "transparent",
            paddingTop: 3,
          }}
          onChangeText={(value) => onChangeText(value)}
          style={
            error
              ? inputFieldStyle.textInputError
              : inputFieldStyle
              ? inputFieldStyle
              : inputFieldStyle.textInput
          }
        />
      </View>
      <Text style={inputFieldStyle.errorText}>{errorText} </Text>
    </View>
  );
};

const inputFieldStyle = StyleSheet.create({
  errorText: {
    color: "red",
  },
  mainView: {
    width: "100%",
  },
});

export default CustomizedDropdown;
