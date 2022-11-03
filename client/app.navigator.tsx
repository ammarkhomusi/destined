import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/Login";
import Details from "./components/Details";
import Home from "./components/Home";
import QuestionnairePageOne from "./components/QuestionnairePageOne";
import QuestionnairePageTwo from "./components/QuestionnairePageTwo";
import QuestionnairePageThree from "./components/QuestionnairePageThree";
import QuestionnairePageFour from "./components/QuestionnairePageFour";
import QuestionnairePageFive from "./components/QuestionnairePageFive";
import QuestionnairePageSix from "./components/QuestionnairePageSix";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Screen name="Login" component={Login}></Screen>
        <Screen name="Home" component={Home}></Screen>
        <Screen
          name="QuestionnairePageOne"
          component={QuestionnairePageOne}
        ></Screen>
        <Screen
          name="QuestionnairePageTwo"
          component={QuestionnairePageTwo}
        ></Screen>
        <Screen
          name="QuestionnairePageThree"
          component={QuestionnairePageThree}
        ></Screen>
        <Screen
          name="QuestionnairePageFour"
          component={QuestionnairePageFour}
        ></Screen>
        <Screen
          name="QuestionnairePageFive"
          component={QuestionnairePageFive}
        ></Screen>
        <Screen
          name="QuestionnairePageSix"
          component={QuestionnairePageSix}
        ></Screen>
        <Screen name="Details" component={Details}></Screen>
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
