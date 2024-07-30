import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { Input } from "@ui-kitten/components";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const LOGIN = () => {
  return (
    <View style={styles.login}>
      <Text style={[styles.welcome, styles.welcomeTypo]}>Welcome</Text>
      <Text style={[styles.logInTo, styles.logInToTypo]}>
        Log in to your account
      </Text>
      <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
        Remember me
      </Text>
      <Text style={[styles.forgotPassword, styles.forgotPasswordClr]}>
        Forgot Password?
      </Text>
      <Text style={[styles.dontHaveAnContainer, styles.forgotPasswordClr]}>
        <Text style={styles.dontHaveAn}>{`Don’t have an account?  `}</Text>
        <Text style={styles.signUp}>Sign up</Text>
      </Text>
      <Text style={[styles.continueWithGoogle, styles.image28IconPosition]}>
        Continue with Google
      </Text>
      <View style={[styles.loginChild, styles.loginLayout]} />
      <View style={[styles.loginItem, styles.loginLayout]} />
      <Pressable style={[styles.loginInner, styles.loginLayout]} />
      <Image
        style={styles.lockIcon}
        contentFit="cover"
        source={require("../assets/lock.png")}
      />
      <Image
        style={styles.userIcon}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <Text style={[styles.logIn, styles.orTypo]}>Log in</Text>
      <Input
        style={[styles.fullName, styles.fullNamePosition]}
        placeholder="Full Name"
        placeholderTextColor="#4b8d23"
        textStyle={styles.fullNameTextInputText}
      />
      <Input
        style={[styles.password, styles.fullNamePosition]}
        placeholder="Password"
        placeholderTextColor="#4b8d23"
        textStyle={styles.passwordTextInputText}
      />
      <Image
        style={[styles.image28Icon, styles.image28IconPosition]}
        contentFit="cover"
        source={require("../assets/image-28.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.or, styles.orTypo]}>OR</Text>
      <View style={[styles.loginChild1, styles.lineIconPosition]} />
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
  welcomeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  logInToTypo: {
    height: 23,
    color: Color.colorDarkolivegreen,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  rememberMeTypo: {
    fontSize: FontSize.size_smi,
    top: 459,
  },
  forgotPasswordClr: {
    color: Color.colorForestgreen,
    height: 23,
    textAlign: "left",
    position: "absolute",
  },
  image28IconPosition: {
    top: 753,
    position: "absolute",
  },
  loginLayout: {
    height: 65,
    width: 333,
    left: 46,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  orTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  fullNamePosition: {
    left: 108,
    position: "absolute",
  },
  lineIconPosition: {
    width: 335,
    left: 44,
    position: "absolute",
  },
  welcome: {
    top: 113,
    left: 77,
    fontSize: FontSize.size_36xl,
    lineHeight: 55,
    color: Color.colorOlivedrab,
    width: 270,
    height: 88,
    position: "absolute",
  },
  logInTo: {
    top: 179,
    left: 99,
    width: 226,
    fontSize: FontSize.size_xl,
  },
  rememberMe: {
    left: 71,
    width: 107,
    height: 23,
    color: Color.colorDarkolivegreen,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  forgotPassword: {
    left: 261,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    width: 125,
    fontSize: FontSize.size_smi,
    top: 459,
  },
  dontHaveAn: {
    fontFamily: FontFamily.poppinsRegular,
  },
  signUp: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  dontHaveAnContainer: {
    top: 627,
    left: 76,
    fontSize: FontSize.size_base,
    width: 288,
  },
  continueWithGoogle: {
    left: 114,
    height: 38,
    width: 226,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkolivegreen,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  loginChild: {
    top: 278,
    backgroundColor: Color.colorLightgoldenrodyellow_200,
    width: 333,
    left: 46,
  },
  loginItem: {
    top: 375,
    backgroundColor: Color.colorLightgoldenrodyellow_200,
    width: 333,
    left: 46,
  },
  loginInner: {
    top: 543,
    backgroundColor: Color.colorForestgreen,
    width: 333,
    left: 46,
  },
  lockIcon: {
    top: 389,
    left: 66,
    width: 30,
    height: 39,
    position: "absolute",
  },
  userIcon: {
    top: 294,
    left: 58,
    width: 41,
    height: 34,
    position: "absolute",
  },
  logIn: {
    top: 557,
    left: 175,
    fontSize: FontSize.size_6xl,
    color: Color.colorGray,
  },
  fullName: {
    top: 297,
  },
  password: {
    top: 392,
  },
  image28Icon: {
    left: 59,
    width: 33,
    height: 31,
  },
  lineIcon: {
    top: 694,
    height: 2,
  },
  rectangleView: {
    top: 675,
    left: 189,
    width: 46,
    height: 41,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  or: {
    top: 678,
    left: 198,
    color: Color.colorDarkolivegreen,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  loginChild1: {
    top: 735,
    backgroundColor: "rgba(242, 242, 242, 0)",
    borderStyle: "solid",
    borderColor: Color.colorForestgreen,
    borderWidth: 1,
    height: 67,
    borderRadius: Border.br_3xs,
    width: 335,
    left: 44,
  },
  login: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default LOGIN;
