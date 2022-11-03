import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
} from "react-native";

const Questionnaire = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.container}
    >
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => navigation.push("QuestionnairePageThree")}
        >
          <Image
            style={styles.back}
            source={require("../assets/images/back.png")}
          />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../assets/images/destinedlogo(2).png")}
        />
        <Text style={styles.logoName}>DESTINED</Text>
      </View>
      <Text style={styles.question}>What makes a trip feel truly special?</Text>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionOne}>
          <Text style={styles.optionOneText}>CONNECTING WITH LOCALS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionTwo}>
          <Text style={styles.optionTwoText}>BUSY WITH ACTIVITIES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionThree}>
          <Text style={styles.optionThreeText}>RELAXING WITH FRIENDS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionFour}>
          <Text style={styles.optionFourText}>FEELING AT HOME</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <View style={styles.next}>
          <TouchableOpacity
            onPress={() => navigation.push("QuestionnairePageFive")}
          >
            <Image source={require("../assets/images/next.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.page}>
          <Image
            style={styles.circleOne}
            source={require("../assets/images/otherpage.png")}
          />
          <Image
            style={styles.circleTwo}
            source={require("../assets/images/otherpage.png")}
          />
          <Image
            style={styles.circleThree}
            source={require("../assets/images/otherpage.png")}
          />
          <Image
            style={styles.circleFour}
            source={require("../assets/images/currentpage.png")}
          />
          <Image
            style={styles.circleFive}
            source={require("../assets/images/otherpage.png")}
          />
          <Image
            style={styles.circleSix}
            source={require("../assets/images/otherpage.png")}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(141, 145, 204, 1)",
    height: "100%",
  },
  logoName: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    right: 30,
  },
  top: {
    flexDirection: "row",
    marginVertical: 30,
    paddingTop: 60,
  },
  back: {
    marginLeft: 30,
  },
  logo: {
    width: 150,
    height: 150,
    bottom: 40,
  },
  question: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    bottom: 50,
    textAlign: "center",
  },
  options: {
    marginVertical: 30,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    bottom: 15,
  },
  optionOne: {
    backgroundColor: "#C5E5E3",
    marginBottom: 20,
    borderRadius: 20,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  optionOneText: {
    color: "white",
    fontWeight: "800",
  },
  optionTwo: {
    backgroundColor: "#C5E5E3",
    marginBottom: 20,
    borderRadius: 20,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  optionTwoText: {
    color: "white",
    fontWeight: "800",
  },
  optionThree: {
    backgroundColor: "#C5E5E3",
    marginBottom: 20,
    borderRadius: 20,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  optionThreeText: {
    color: "white",
    fontWeight: "800",
  },
  optionFour: {
    backgroundColor: "#C5E5E3",
    marginBottom: 20,
    borderRadius: 20,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  optionFourText: {
    color: "white",
    fontWeight: "800",
  },
  bottom: {
    marginBottom: 30,
    left: 90,
    width: 40,
    height: 50,
    flexDirection: "row",
  },
  next: {
    left: 220,
    paddingBottom: 5,
  },
  page: {
    flexDirection: "row",
    paddingVertical: 20,
    right: 90,
  },
  circleOne: {
    marginLeft: 5,
  },
  circleTwo: {
    marginLeft: 5,
  },
  circleThree: {
    marginLeft: 5,
  },
  circleFour: {
    marginLeft: 5,
  },
  circleFive: {
    marginLeft: 5,
  },
  circleSix: {
    marginLeft: 5,
  },
});

export default Questionnaire;
