import React from "react";
import { View, StyleSheet, TouchableHighlight, Dimensions } from "react-native";
import DatePicker from "react-native-datepicker";
// import DatePicker from '@react-native-community/datetimepicker'
import Svg, { Path } from "react-native-svg";

const width = Dimensions.get("window").width;
export default class DatePickerComponent extends React.Component {
  get dateIcon() {
    return (
      <View>
        <Svg xmlns="http://www.w3.org/2000/svg" width={17.453} height={19.946}>
          <Path
            d="M0 18.076a1.87 1.87 0 001.87 1.87h13.713a1.87 1.87 0 001.87-1.87V7.48H0zm12.467-7.636a.469.469 0 01.467-.467h1.558a.469.469 0 01.467.467V12a.469.469 0 01-.467.467h-1.558a.469.469 0 01-.467-.467zm0 4.987a.469.469 0 01.467-.467h1.558a.469.469 0 01.467.467v1.558a.469.469 0 01-.467.467h-1.558a.469.469 0 01-.467-.467zM7.48 10.441a.469.469 0 01.467-.467h1.559a.469.469 0 01.467.467V12a.469.469 0 01-.467.467H7.947A.469.469 0 017.48 12zm0 4.987a.469.469 0 01.467-.467h1.559a.469.469 0 01.467.467v1.558a.469.469 0 01-.467.467H7.947a.469.469 0 01-.467-.467zm-4.987-4.987a.469.469 0 01.467-.467h1.559a.469.469 0 01.467.467V12a.469.469 0 01-.467.467H2.961A.469.469 0 012.493 12zm0 4.987a.469.469 0 01.467-.467h1.559a.469.469 0 01.467.467v1.558a.469.469 0 01-.467.467H2.961a.469.469 0 01-.467-.467zm13.09-12.935h-1.87V.623A.625.625 0 0013.09 0h-1.247a.625.625 0 00-.623.623v1.87H6.233V.623A.625.625 0 005.61 0H4.363a.625.625 0 00-.623.623v1.87H1.87A1.87 1.87 0 000 4.363v1.87h17.453v-1.87a1.87 1.87 0 00-1.87-1.87z"
            fill="#111111"
          />
        </Svg>
      </View>
    );
  }
  render() {
    const { date, placeholder, onDateChange, maxDate, minDate } = this.props;
    return (
      <TouchableHighlight style={styles.datepickerWrapper}>
        <DatePicker
          style={styles.datepicker}
          date={date}
          maxDate={maxDate}
          minDate={minDate}
          mode="date"
          placeholder={placeholder}
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          iconComponent={this.dateIcon}
          customStyles={{
            dateIcon: {},
            dateInput: {
              backgroundColor: "#D3D3D3",
              borderWidth: 1,
              borderColor: "#D3D3D3",
              display: "flex",
              flexDirection: "row",
            },
            dateText: {
              textAlign: "left",
              color: "#111111",
              fontSize: 15,
            },
            placeholderText: {
              color: "#111111",
              fontSize: 15,
            },
          }}
          onDateChange={onDateChange}
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  datepicker: {
    width: 150,
  },
  datepickerWrapper: {
    height: 50,
    width: "100%",
    marginLeft: "2%",
    display: "flex",
    backgroundColor: "#D3D3D3",
    borderWidth: 1,
    borderColor: "#4964924D",
    borderRadius: 4,
    borderStyle: "solid",
  },
});
