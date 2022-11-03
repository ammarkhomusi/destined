import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Login from "./components/Login";
import Questionnaire from "./components/QuestionnairePageOne";
import Details from "./components/Details";

// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from "./app.navigator";

const Stack = createStackNavigator();

const App = () => {
  return <AppNavigator />;

  // return <Login />;
};

// const styles = StyleSheet.create({
//   container: {},
// });

export default App;
