import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

const Questionnaire = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity>
          <Image
            style={styles.back}
            source={require("../assets/images/back.png")}
          />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../assets/images/destinedlogo(2).png")}
        />
        <Text>DESTINED</Text>
      </View>
      <View style={styles.question}>
        <Text>This is the question</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text>Answer1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Answer2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Answer3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Answer4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <View style={styles.next}>
          <TouchableOpacity>
            <Image source={require("../assets/images/next.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.page}>
          <Image
            style={styles.circleOne}
            source={require("../assets/images/currentpage.png")}
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
            source={require("../assets/images/otherpage.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(141, 145, 204, 1)",
    height: "100%",
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
    maxHeight: 130,
    maxWidth: 130,
    bottom: 40,
    left: 5,
  },
  options: {
    marginVertical: 30,
    flex: 1,
    marginLeft: 50,
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
