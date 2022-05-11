import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Login from "./components/Login";
import Register from "./components/Register";
import Questionnaire from "./components/Questionnaire";
import Details from "./components/Details";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  // return (
  //   <View style={styles.container}>
  //     <NavigationContainer>
  //       <Stack.Navigator>
  //         <Stack.Screen
  //           options={{ headerShown: false }}
  //           name="Login"
  //           component={Login}
  //         />
  //         <Stack.Screen
  //           options={{ headerShown: false }}
  //           name="Register"
  //           component={Register}
  //         />
  //         <Stack.Screen
  //           options={{ headerShown: false }}
  //           name="Questionnaire"
  //           component={Questionnaire}
  //         />
  //         <Stack.Screen
  //           options={{ headerShown: false }}
  //           name="Details"
  //           component={Details}
  //         />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   </View>
  // );
  return (
    <View>
      <Login />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {},
// });

export default App;
