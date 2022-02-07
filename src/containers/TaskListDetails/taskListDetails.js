import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  BackHandler,
  AsyncStorage,
  Alert,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OrderedFoodData: [
        {
          orderConfirmation: "Order Confirmed",
          mainItem: "Margherita Pizza",
          quantity: "1",
          date: "16-09-2021",
          time: "8.30",
          type: "Crust: Freash Pan Pizza, Size : Regular",
          price: "$36",
        },
        {
          orderConfirmation: "Order Confirmed",
          mainItem: "Burger Cheese",
          quantity: "2",
          date: "19-02-21",
          time: "12.30",
          type: "Crust: Freash Pan Pizza,Size : Regular",
          price: "$100",
        },
      ],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={this.state.isVisible ? styles.mainView1 : styles.mainView}>
        <View style={styles.homeheaderwrapper1}>
          {/* <Icon name={"arrow-left"} color={"black"} size={25} /> */}
          <Text style={styles.taskText}>Task</Text>
        </View>
        <View style={styles.linedrawersunmi} />
      </View>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     orderReducer: state.orderReducer,
//     restaurantReducer: state.restaurantReducer,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     orderActions: bindActionCreators(OrderAction, dispatch),
//     restaurantActions: bindActionCreators(RestaurantAction, dispatch),
//   };
// };

export default TaskList;

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 10,
    backgroundColor: "#fff",
    flex: 1,
  },
  mainView1: {
    paddingTop: 10,
    backgroundColor: "#fff",
    flex: 1,
    opacity: 0.3,
  },
  taskText: {
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
  },
  homeheaderwrapper1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal: 40,
    // alignItems: "center",
  },
  homeheaderwrapper2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  homeheaderwrapperIcon1: {
    marginTop: 5,
    padding: 10,
  },

  homeheaderwrappertext2: {
    padding: "2%",
    fontSize: 14,
    fontWeight: "bold",
    color: "#111111",
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

  Modal1Styles: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  ModalWrapper: {
    // marginTop: "0%",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    borderRadius: 35,
    backgroundColor: "white",
    height: "auto",
    // borderWidth: 1,
    padding: 10,
  },
  chooseDifferentmethod: {
    textAlign: "center",
    fontSize: 13,
    color: "#111111",
  },
  restaurantOpen: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: "5%",
    color: "#111111",
  },
  chooseButtonWrapper: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#00000014",
    width: "99%",
    marginLeft: "2%",
    marginTop: "5%",
  },
  chooseButtonWrapper1: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#00000014",
    width: "99%",
    marginLeft: "2%",
    marginVertical: "8%",
  },
  changeLockWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  chooseLock: {
    padding: 15,
    textAlign: "center",
  },
  changetoClose: {
    marginTop: "3%",
    fontSize: 17,
    color: "#111111",
    fontWeight: "bold",
  },
  changetoChoose: {
    marginTop: "3%",
    fontSize: 10,
    color: "#111111",
    fontWeight: "normal",
  },
  newOrderHeadingWrapper: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    padding: 5,
    width: "95%",
    alignSelf: "center",
    flex: 1,
    marginVertical: 15,
  },
  newOrderText: {
    fontSize: 25,
    fontWeight: "700",
    marginLeft: 5,
  },
  scrollView: {
    marginVertical: 5,
  },
  confirmStatus: {
    color: "#3FC75B",
    fontSize: 13,
  },
  rejectedStatus: {
    color: "#D62828",
    fontSize: 13,
  },
  innerMainView: {
    marginVertical: 5,
    padding: 5,
  },
  innerView2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  itemNameStyle: {
    fontSize: 21,
    fontWeight: "600",
    marginRight: 10,
    maxWidth: 190,
  },
  itemQuantStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "red",
  },
  timestampStyleView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeStampText: {
    fontSize: 11,
    color: "#585653",
  },
  priceStyle: {
    fontSize: 18,
    fontWeight: "600",
  },
  innerViewWithPrice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  iconText1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 42,
    backgroundColor: "#3FC75B",
    borderRadius: 5,
    // marginRight : 5
  },
  iconText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 42,
    backgroundColor: "#D62828",
    marginRight: 8,
    borderRadius: 5,
  },
  rejectText: {
    color: "white",
    fontSize: 15,
  },
});
