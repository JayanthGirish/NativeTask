// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   ScrollView,
//   AsyncStorage,
//   ActivityIndicator,
// } from "react-native";
// import { connect } from "react-redux";
// import jwt_decode from "jwt-decode";
// import { isAuthenticated } from "../utils/tokenUtils";

// export default class AuthLoadingScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = {};

//     this._bootstrapAsync();
//   }

//   _bootstrapAsync = async () => {
//     // console.log('isAuthenticated did mount',await isAuthenticated() );
//     this.props.navigation.navigate(
//       (await isAuthenticated()) ? "TaskDetailList" : "IndivisualTaskList"
//     );
//   };

//   // async componentDidUpdate(prevProps, prevState) {
//   //   console.log('isAuthenticated did update',await isAuthenticated() );
//   //   this.props.navigation.navigate( await isAuthenticated() ? "BottomTabNavigator" : "login")

//   // }
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Loading...</Text>
//         <ActivityIndicator size="large" animate={true} color="#48A66E" />
//       </View>
//     );
//   }
// }
