import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Header } from "@react-navigation/stack";

const destinationImage = require("../assets/images/newyork2.jpg");

const Details = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={destinationImage}
        style={styles.destinationPicture}
      >
        <TouchableOpacity>
          <Image
            style={styles.back}
            source={require("../assets/images/back.png")}
          />
        </TouchableOpacity>
        <FontAwesome
          style={styles.location}
          name="map-marker"
          size={25}
          color="white"
        />
        <Text style={styles.destinationName}>NEW YORK</Text>
        <Text style={styles.destinationCountry}>USA</Text>
      </ImageBackground>
      <View style={styles.destinationWrapper}>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionBio}>
            New York, also known as the Big Apple, is a city which offers
            infinite things to do and places to see. The city of skyscrapers has
            starred in films and novels that have made it a dream destination
            for many. A trip to New York is a unique experience, what are you
            waiting for?
          </Text>
          <View style={styles.destinationInfo}>
            <View style={styles.priceDescription}>
              <Text style={styles.priceTitle}>PRICE</Text>
              <View style={styles.priceInfo}>
                <Text style={styles.priceTag}>$350</Text>
                <Text style={styles.pricePP}>/person</Text>
              </View>
            </View>
            <View style={styles.ratingDescription}>
              <Text style={styles.ratingTitle}>RATING</Text>
              <View style={styles.ratingInfo}>
                <Text style={styles.rating}>4.5</Text>
                <Text style={styles.ratingScale}>/5</Text>
              </View>
            </View>
            <View style={styles.durationDescription}>
              <Text style={styles.durationTitle}>DURATION</Text>
              <View style={styles.durationInfo}>
                <Text style={styles.duration}>3</Text>
                <Text style={styles.durationLength}>hours</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert("You booked a trip!")}
          >
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  destinationPicture: {
    height: windowHeight * 0.55,
  },
  destinationWrapper: {
    height: 450,
    backgroundColor: `#ffffff`,
    marginTop: -20,
    borderRadius: 25,
  },
  back: {
    top: 60,
    left: 30,
  },
  location: {
    top: 360,
    left: 30,
  },
  destinationName: {
    fontWeight: "bold",
    fontSize: 32,
    color: "white",
    top: 290,
    left: 28,
  },
  destinationCountry: {
    top: 298,
    left: 50,
    color: "white",
    fontSize: 18,
  },
  descriptionTextWrapper: {
    marginTop: 30,
    marginHorizontal: 23,
  },
  descriptionTitle: {
    fontSize: 24,
    fontWeight: "800",
  },
  descriptionBio: {
    marginTop: 20,
    fontSize: 16,
    color: "rgba(173, 173, 173, 1)",
  },
  destinationInfo: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceDescription: {},
  priceTitle: {
    fontSize: 15,
    color: "rgba(209, 211, 210, 1)",
  },
  priceInfo: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 5,
  },
  priceTag: {
    fontSize: 24,
    fontWeight: "600",
    color: "rgba(159, 223, 205, 1)",
  },
  pricePP: {
    color: "rgba(209, 211, 210, 1)",
    marginLeft: 2,
  },
  ratingDescription: {},
  ratingTitle: {
    fontSize: 15,
    color: "rgba(209, 211, 210, 1)",
  },
  ratingInfo: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 5,
  },
  rating: {
    fontSize: 24,
    fontWeight: "600",
    color: "rgba(159, 223, 205, 1)",
  },
  ratingScale: {
    color: "rgba(209, 211, 210, 1)",
    marginLeft: 2,
  },
  durationDescription: {},
  durationTitle: {
    fontSize: 15,
    color: "rgba(209, 211, 210, 1)",
  },
  durationInfo: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 5,
  },
  duration: {
    fontSize: 24,
    fontWeight: "600",
    color: "rgba(159, 223, 205, 1)",
  },
  durationLength: {
    color: "rgba(209, 211, 210, 1)",
    marginLeft: 2,
  },
  button: {
    // marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: "rgba(159, 223, 205, 1)",
    alignItems: "center",
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
  },
});

export default Details;
