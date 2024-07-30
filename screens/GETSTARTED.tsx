import * as React from "react";
import { Image } from "expo-image";
import MONITORING from "./screens/MONITORING";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";
import { FontFamily, Color, Border } from "../GlobalStyles";

const GETSTARTED = () => {
  return (
    <View style={styles.getStarted}>
      <Image
        style={styles.image27Icon}
        contentFit="cover"
        source={require("../assets/image-27.png")}
      />
      <View style={styles.getStartedChild} />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/vector-3.png")}
        />
        <Text style={styles.letsMonitorYour}>Let’s monitor your plants</Text>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Button
          style={styles.getStarted1}
          mode="text"
          labelStyle={styles.getStartedBtn}
        >
          Get Started
        </Button>
      </View>
      <Image
        style={styles.getStartedItem}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  getStartedBtn: {
    color: "rgba(255, 255, 255, 0.85)",
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
  },
  groupPosition: {
    left: 0,
    width: 640,
    top: 0,
    position: "absolute",
  },
  image27Icon: {
    left: -190,
    width: 675,
    height: 534,
    top: 0,
    position: "absolute",
  },
  getStartedChild: {
    top: -11,
    left: -29,
    backgroundColor: "rgba(217, 217, 217, 0.2)",
    width: 471,
    height: 557,
    position: "absolute",
  },
  groupChild: {
    height: 530,
  },
  groupItem: {
    height: 576,
  },
  letsMonitorYour: {
    top: 252,
    left: 155,
    fontSize: 45,
    lineHeight: 55,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorOlivedrab,
    textAlign: "center",
    width: 306,
    height: 88,
    position: "absolute",
  },
  groupInner: {
    top: 419,
    left: 199,
    borderRadius: Border.br_8xs,
    width: 219,
    height: 59,
    position: "absolute",
  },
  getStarted1: {
    top: 431,
    left: 239,
    position: "absolute",
  },
  vectorParent: {
    top: 356,
    left: -94,
    height: 576,
    width: 640,
    position: "absolute",
  },
  getStartedItem: {
    top: 689,
    left: 186,
    borderRadius: Border.br_3xs,
    width: 226,
    height: 65,
    position: "absolute",
  },
  getStarted: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default GETSTARTED;
