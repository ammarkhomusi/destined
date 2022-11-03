import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  TextInput,
  Alert,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../firebase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        Alert.alert("User Successfully Created");
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .then(() => navigation.push("Home"))
      .catch((error) => alert(error.message));
  };

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.container}
    >
      <View style={styles.top}>
        <Image
          style={styles.logo}
          source={require("../assets/images/destinedlogocropped.png")}
        />
        <Text style={styles.logoName}>DESTINED</Text>
      </View>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleLogin}
            style={[styles.button, styles.buttonLogin]}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  top: {},
  logo: {
    width: 100,
    height: 100,
    bottom: 100,
    alignContent: "center",
    left: 50,
  },
  logoName: {
    bottom: 60,
    fontSize: 40,
    fontWeight: "800",
    color: "white",
    textAlign: "center",
  },
  inputContainer: {
    width: 332,
  },
  input: {
    backgroundColor: "#6C70A4",
    color: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    height: 45,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  button: {
    backgroundColor: "#C5E5E3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: 332,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#C5E5E3",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "#C5E5E3",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default Login;
