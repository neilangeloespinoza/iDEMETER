import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Input } from "@ui-kitten/components";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const REGISTER = () => {
  return (
    <View style={styles.register}>
      <Text style={styles.register1}>Register</Text>
      <Text style={[styles.createYourAccount, styles.createYourAccountLayout]}>
        Create your account
      </Text>
      <View style={[styles.registerChild, styles.registerChildLayout]} />
      <View style={[styles.registerItem, styles.registerChildLayout]} />
      <Pressable style={[styles.registerInner, styles.registerChildLayout]} />
      <Image
        style={[styles.lockIcon, styles.lockIconLayout]}
        contentFit="cover"
        source={require("../assets/lock.png")}
      />
      <Image
        style={styles.userIcon}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <Text style={[styles.signUp, styles.logInTypo]}>Sign up</Text>
      <Input
        style={[styles.fullName, styles.passwordPosition]}
        placeholder="Full Name"
        placeholderTextColor="#4b8d23"
        textStyle={styles.fullNameTextInputText}
      />
      <Input
        style={[styles.password, styles.passwordPosition]}
        placeholder="Password"
        placeholderTextColor="#4b8d23"
        textStyle={styles.passwordTextInputText}
      />
      <View style={[styles.rectangleView, styles.registerChildLayout]} />
      <Image
        style={[styles.lockIcon1, styles.lockIconLayout]}
        contentFit="cover"
        source={require("../assets/lock.png")}
      />
      <Input
        style={[styles.confirmPassword, styles.passwordPosition]}
        placeholder="Confirm Password"
        placeholderTextColor="#4b8d23"
        textStyle={styles.confirmPasswordTextInputText}
      />
      <View style={[styles.registerChild1, styles.registerChildLayout]} />
      <Input
        style={[styles.emailAddress, styles.passwordPosition]}
        placeholder="Email address"
        placeholderTextColor="#4b8d23"
        textStyle={styles.emailAddressTextInputText}
      />
      <Text style={[styles.alreadyHaveAnContainer, styles.containerClr]}>
        <Text style={styles.alreadyHaveAn}>{`Already have an account?  `}</Text>
        <Text style={styles.logInTypo}>Log in</Text>
      </Text>
      <Text style={[styles.bySigningUpContainer, styles.containerClr]}>
        <Text style={styles.alreadyHaveAn}>
          By signing up, you agree to our
        </Text>
        <Text style={styles.logInTypo}> Terms</Text>
        <Text style={styles.alreadyHaveAn}>{` `}</Text>
        <Text style={styles.logInTypo}>of Service</Text>
        <Text style={styles.alreadyHaveAn}>{` and `}</Text>
        <Text style={styles.logInTypo}>Privacy Policy</Text>
        <Text style={styles.alreadyHaveAn}>{` `}</Text>
      </Text>
      <Image
        style={styles.emailIcon}
        contentFit="cover"
        source={require("../assets/email.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fullNameTextInputText: {
    fontWeight: "300",
    fontFamily: "Poppins-Light",
    color: "#4b8d23",
  },
  passwordTextInputText: {
    fontWeight: "300",
    fontFamily: "Poppins-Light",
    color: "#4b8d23",
  },
  confirmPasswordTextInputText: {
    fontWeight: "300",
    fontFamily: "Poppins-Light",
    color: "#4b8d23",
  },
  emailAddressTextInputText: {
    fontWeight: "300",
    fontFamily: "Poppins-Light",
    color: "#4b8d23",
  },
  createYourAccountLayout: {
    height: 23,
    textAlign: "left",
  },
  registerChildLayout: {
    height: 65,
    width: 333,
    borderRadius: Border.br_3xs,
    left: 49,
    position: "absolute",
  },
  lockIconLayout: {
    height: 39,
    width: 30,
    left: 69,
    position: "absolute",
  },
  logInTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  passwordPosition: {
    left: 109,
    position: "absolute",
  },
  containerClr: {
    color: Color.colorForestgreen,
    position: "absolute",
  },
  register1: {
    top: 115,
    left: 99,
    fontSize: FontSize.size_36xl,
    lineHeight: 55,
    color: Color.colorOlivedrab,
    width: 232,
    height: 53,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  createYourAccount: {
    top: 187,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkolivegreen,
    width: 207,
    fontFamily: FontFamily.poppinsRegular,
    left: 109,
    position: "absolute",
  },
  registerChild: {
    top: 279,
    backgroundColor: Color.colorLightgoldenrodyellow_200,
    width: 333,
    borderRadius: Border.br_3xs,
    left: 49,
  },
  registerItem: {
    top: 451,
    backgroundColor: Color.colorLightgoldenrodyellow_200,
    width: 333,
    borderRadius: Border.br_3xs,
    left: 49,
  },
  registerInner: {
    top: 733,
    backgroundColor: Color.colorForestgreen,
    width: 333,
    borderRadius: Border.br_3xs,
    left: 49,
  },
  lockIcon: {
    top: 464,
  },
  userIcon: {
    top: 294,
    left: 61,
    width: 41,
    height: 34,
    position: "absolute",
  },
  signUp: {
    top: 747,
    left: 167,
    fontSize: FontSize.size_6xl,
    color: Color.colorGray,
    textAlign: "center",
    position: "absolute",
  },
  fullName: {
    top: 297,
  },
  password: {
    top: 467,
  },
  rectangleView: {
    top: 537,
    backgroundColor: Color.colorLightgoldenrodyellow_200,
    width: 333,
    borderRadius: Border.br_3xs,
    left: 49,
  },
  lockIcon1: {
    top: 550,
  },
  confirmPassword: {
    top: 554,
  },
  registerChild1: {
    top: 365,
    backgroundColor: Color.colorLightgoldenrodyellow_200,
    width: 333,
    borderRadius: Border.br_3xs,
    left: 49,
  },
  emailAddress: {
    top: 382,
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.poppinsRegular,
  },
  alreadyHaveAnContainer: {
    top: 817,
    left: 71,
    fontSize: FontSize.size_base,
    width: 288,
    height: 23,
    textAlign: "left",
  },
  bySigningUpContainer: {
    top: 640,
    left: 77,
    fontSize: FontSize.size_smi,
    width: 277,
    height: 47,
    textAlign: "center",
  },
  emailIcon: {
    top: 381,
    height: 33,
    width: 30,
    left: 69,
    position: "absolute",
  },
  register: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default REGISTER;
