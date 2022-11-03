import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.container}
    >
      <View style={styles.top}>
        <Image
          style={styles.logo}
          source={require("../assets/images/destinedlogo(2).png")}
        />
        <Text style={styles.logoName}>DESTINED</Text>
        <Text style={styles.motto}>Like Never Before</Text>
      </View>

      <Image
        style={styles.img}
        source={require("../assets/images/destinedmainpage1(2).png")}
      />
      <Text style={styles.bio}>
        A few questions away from finding your dream destination
      </Text>
      <TouchableOpacity onPress={() => navigation.push("QuestionnairePageOne")}>
        <Image
          style={styles.next}
          source={require("../assets/images/next.png")}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    top: 50,
  },
  logo: {
    width: 150,
    height: 150,
    bottom: 70,
    right: 45,
  },
  logoName: {
    bottom: 180,
    left: 80,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  motto: {
    color: "white",
    bottom: 150,
    fontSize: 30,
    fontWeight: "600",
  },
  img: {
    height: 370,
    width: 493,
    bottom: 60,
  },
  bio: {
    fontSize: 20,
    color: "white",
    flexWrap: "wrap",
    width: 250,
    textAlign: "center",
    bottom: 40,
  },
  next: {
    top: 20,
    left: 140,
  },
});
