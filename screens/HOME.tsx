import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const HOME = () => {
  return (
    <View style={styles.home}>
      <Image
        style={styles.homeChild}
        contentFit="cover"
        source={require("../assets/rectangle-441.png")}
      />
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Text style={styles.goodMorningAlex}>Good Morning, Alex!</Text>
      <Text style={[styles.welcomeBackToday, styles.nextMisting1Layout]}>
        Welcome back! Today is June 28, 2024.
      </Text>
      <Image
        style={[styles.notificationIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/76notification.png")}
      />
      <Image
        style={[styles.settingIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/44setting.png")}
      />
      <View style={styles.homeItem} />
      <View style={[styles.homeInner, styles.homeLayout]} />
      <View style={styles.rectangleView} />
      <View style={[styles.homeChild1, styles.homeLayout]} />
      <View style={styles.todaysWeather}>
        <View style={[styles.todaysWeatherChild, styles.homeChildLayout]} />
        <Text style={[styles.todaysWeatherIs, styles.cTypo]}>
          Today’s weather is...
        </Text>
        <Text style={[styles.mostlyCloudy, styles.cTypo]}>Mostly Cloudy</Text>
        <Text style={[styles.c, styles.cTypo]}>34°C</Text>
        <Image
          style={[styles.mainCloudIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/main-cloud.png")}
        />
      </View>
      <Image
        style={[styles.cloud3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/cloud-3.png")}
      />
      <Image
        style={[styles.sunIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/sun.png")}
      />
      <Image
        style={[styles.cloud2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/cloud-2.png")}
      />
      <Image
        style={[styles.cloud1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/cloud-1.png")}
      />
      <View style={[styles.homeChild2, styles.homeChildLayout]} />
      <Text style={[styles.june2024, styles.monTypo]}>June 2024</Text>
      <Text style={[styles.fri, styles.friTypo]}>Fri</Text>
      <Text style={[styles.c1, styles.c1Typo]}>34°C</Text>
      <Text style={[styles.c2, styles.c1Typo]}>34°C</Text>
      <Text style={[styles.c3, styles.c1Typo]}>34°C</Text>
      <Text style={[styles.c4, styles.c1Typo]}>33°C</Text>
      <Text style={[styles.sat, styles.friTypo]}>Sat</Text>
      <Text style={[styles.sun, styles.friTypo]}>Sun</Text>
      <Text style={[styles.mon, styles.monTypo]}>Mon</Text>
      <View style={[styles.days, styles.groupParentLayout]}>
        <Text style={styles.s}>S</Text>
        <Text style={[styles.s1, styles.fTypo]}>S</Text>
        <Text style={[styles.f, styles.textPosition6]}>F</Text>
        <Text style={[styles.m, styles.textPosition5]}>M</Text>
        <Text style={[styles.t, styles.textPosition4]}>T</Text>
        <Text style={[styles.t1, styles.fTypo]}>T</Text>
        <Text style={[styles.w, styles.textPosition3]}>W</Text>
      </View>
      <View style={[styles.dates, styles.datesPosition]}>
        <Text style={[styles.text, styles.textTypo]}>30</Text>
        <Text style={[styles.text1, styles.text1Position]}>6</Text>
        <Text style={[styles.text2, styles.text2Position]}>13</Text>
        <View style={[styles.groupParent, styles.datesPosition]}>
          <View style={[styles.parent, styles.text6Position]}>
            <Text style={[styles.text3, styles.textTypo]}>26</Text>
            <Text style={[styles.text4, styles.textTypo]}>1</Text>
            <Text style={[styles.text5, styles.textPosition2]}>31</Text>
            <Text style={[styles.text6, styles.text6Position]}>27</Text>
            <Text style={[styles.text7, styles.textPosition1]}>28</Text>
            <Text style={[styles.text8, styles.textPosition]}>29</Text>
          </View>
          <View style={[styles.group, styles.text1Position]}>
            <Text style={[styles.text9, styles.textTypo]}>2</Text>
            <Text style={[styles.text10, styles.textTypo]}>8</Text>
            <Text style={[styles.text11, styles.textTypo]}>7</Text>
            <Text style={[styles.text12, styles.textTypo]}>3</Text>
            <Text style={[styles.text13, styles.textTypo]}>4</Text>
            <Text style={[styles.text14, styles.textTypo]}>5</Text>
          </View>
          <View style={[styles.container, styles.text2Position]}>
            <Text style={[styles.text15, styles.textTypo]}>9</Text>
            <Text style={[styles.text4, styles.textTypo]}>15</Text>
            <Text style={[styles.text17, styles.textPosition2]}>14</Text>
            <Text style={[styles.text18, styles.textTypo]}>10</Text>
            <Text style={[styles.text19, styles.textPosition1]}>11</Text>
            <Text style={[styles.text20, styles.textPosition]}>12</Text>
          </View>
          <View style={[styles.groupView, styles.text39Position]}>
            <Text style={[styles.text9, styles.textTypo]}>16</Text>
            <Text style={[styles.text10, styles.textTypo]}>22</Text>
            <Text style={[styles.text11, styles.textTypo]}>21</Text>
            <Text style={[styles.text12, styles.textTypo]}>17</Text>
            <Text style={[styles.text13, styles.textTypo]}>18</Text>
            <Text style={[styles.text14, styles.textTypo]}>19</Text>
          </View>
          <View style={[styles.parent1, styles.text40Position]}>
            <Text style={[styles.text9, styles.textTypo]}>23</Text>
            <Text style={[styles.text10, styles.textTypo]}>29</Text>
            <Text style={[styles.text29, styles.textTypo]}>28</Text>
            <Text style={[styles.text12, styles.textTypo]}>24</Text>
            <Text style={[styles.text13, styles.textTypo]}>25</Text>
            <Text style={[styles.text14, styles.textTypo]}>26</Text>
          </View>
          <View style={[styles.parent2, styles.text41Position]}>
            <Text style={[styles.text9, styles.textTypo]}>30</Text>
            <Text style={[styles.text34, styles.textTypo]}>6</Text>
            <Text style={[styles.text35, styles.textTypo]}>5</Text>
            <Text style={[styles.text36, styles.textTypo]}>1</Text>
            <Text style={[styles.text37, styles.textTypo]}>2</Text>
            <Text style={[styles.text38, styles.textTypo]}>3</Text>
          </View>
          <Text style={[styles.text39, styles.text39Position]}>20</Text>
        </View>
        <Text style={[styles.text40, styles.text40Position]}>27</Text>
        <Text style={[styles.text41, styles.text41Position]}>4</Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={styles.lineView} />
      <View style={[styles.homeChild3, styles.homeChildLayout]} />
      <Text style={[styles.nextMisting1, styles.nextMisting1Layout]}>
        Next Misting: 1 hour from now
      </Text>
      <Image
        style={[styles.navbarIcon, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/navbar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nextMisting1Layout: {
    width: 427,
    height: 23,
    fontSize: FontSize.size_lg,
  },
  iconLayout1: {
    height: 22,
    width: 24,
    top: 33,
    position: "absolute",
    overflow: "hidden",
  },
  homeLayout: {
    height: 125,
    top: 281,
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  homeChildLayout: {
    width: 390,
    position: "absolute",
  },
  cTypo: {
    left: 123,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "60.52%",
    top: "34.01%",
    height: "5.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  monTypo: {
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  friTypo: {
    width: 35,
    top: 287,
    color: Color.colorDimgray,
    height: 23,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    position: "absolute",
  },
  c1Typo: {
    width: 46,
    top: 376,
    color: Color.colorDimgray,
    height: 23,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupParentLayout: {
    width: 341,
    marginLeft: -171,
  },
  fTypo: {
    top: 1,
    fontFamily: FontFamily.lexendExtraBold,
    fontWeight: "800",
    color: Color.colorDimgray,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  textPosition6: {
    marginLeft: 93.5,
    width: 19,
    left: "50%",
    height: 23,
    position: "absolute",
  },
  textPosition5: {
    marginLeft: -110.5,
    left: "50%",
    height: 23,
    position: "absolute",
  },
  textPosition4: {
    marginLeft: -59.5,
    width: 19,
    left: "50%",
    height: 23,
    position: "absolute",
  },
  textPosition3: {
    marginLeft: -9.5,
    width: 19,
    left: "50%",
    height: 23,
    position: "absolute",
  },
  datesPosition: {
    height: 199,
    width: 342,
    left: "50%",
    marginLeft: -171,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
  },
  text1Position: {
    top: 36,
    left: "50%",
    height: 23,
    position: "absolute",
  },
  text2Position: {
    top: 70,
    left: "50%",
    height: 23,
    position: "absolute",
  },
  text6Position: {
    height: 25,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  textPosition2: {
    marginLeft: 93,
    fontSize: FontSize.size_sm,
    width: 19,
    left: "50%",
    top: 0,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    position: "absolute",
  },
  textPosition1: {
    marginLeft: -60,
    fontSize: FontSize.size_sm,
    width: 19,
    left: "50%",
    top: 0,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    position: "absolute",
  },
  textPosition: {
    marginLeft: -10,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: 0,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text39Position: {
    top: 106,
    left: "50%",
    height: 23,
    position: "absolute",
  },
  text40Position: {
    top: 140,
    left: "50%",
    height: 23,
    position: "absolute",
  },
  text41Position: {
    top: 176,
    left: "50%",
    height: 23,
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "50.73%",
    top: "48.07%",
    width: "1.53%",
    height: "1.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeChild: {
    top: 689,
    left: 186,
    width: 226,
    height: 65,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  image5Icon: {
    top: 18,
    left: 15,
    width: 41,
    height: 53,
    position: "absolute",
  },
  goodMorningAlex: {
    top: 69,
    left: 18,
    fontSize: FontSize.size_2xs,
    width: 113,
    height: 15,
    textAlign: "center",
    fontWeight: "500",
    color: Color.colorDarkseagreen_200,
    fontFamily: FontFamily.lexendMedium,
    position: "absolute",
  },
  welcomeBackToday: {
    top: 102,
    height: 23,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
    left: 20,
    color: Color.colorDarkseagreen_200,
    width: 427,
    fontFamily: FontFamily.lexendMedium,
  },
  notificationIcon: {
    left: 350,
  },
  settingIcon: {
    left: 386,
  },
  homeItem: {
    top: 280,
    height: 126,
    width: 86,
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_mini,
    left: 20,
    position: "absolute",
  },
  homeInner: {
    left: 122,
    width: 85,
  },
  rectangleView: {
    left: 325,
    height: 124,
    width: 85,
    top: 281,
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  homeChild1: {
    left: 223,
    width: 86,
  },
  todaysWeatherChild: {
    left: 0,
    backgroundColor: Color.colorBeige,
    width: 390,
    top: 0,
    height: 126,
    borderRadius: Border.br_mini,
  },
  todaysWeatherIs: {
    top: 17,
    color: Color.colorDimgray,
    height: 23,
    width: 427,
    fontSize: FontSize.size_lg,
  },
  mostlyCloudy: {
    top: 85,
    width: 158,
    color: Color.colorDimgray,
    height: 23,
    fontSize: FontSize.size_lg,
  },
  c: {
    top: 32,
    fontSize: 50,
    width: 164,
    height: 67,
    color: Color.colorDimgray,
  },
  mainCloudIcon: {
    height: "64.29%",
    width: "17.64%",
    top: "22.22%",
    right: "79.45%",
    bottom: "13.49%",
    left: "2.91%",
  },
  todaysWeather: {
    top: 135,
    left: 22,
    width: 550,
    height: 126,
    position: "absolute",
  },
  cloud3Icon: {
    height: "4.51%",
    width: "12.79%",
    top: "34.55%",
    right: "31.63%",
    bottom: "60.94%",
    left: "55.58%",
  },
  sunIcon: {
    height: "4.18%",
    width: "9.77%",
    top: "34.66%",
    right: "9.53%",
    bottom: "61.16%",
    left: "80.7%",
  },
  cloud2Icon: {
    width: "15.35%",
    right: "53.95%",
    left: "30.7%",
  },
  cloud1Icon: {
    width: "13.72%",
    right: "78.6%",
    left: "7.67%",
  },
  homeChild2: {
    top: 425,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    height: 316,
    opacity: 0.5,
    borderRadius: Border.br_mini,
    left: 20,
  },
  june2024: {
    top: 441,
    left: 168,
    width: 101,
    color: Color.colorDimgray,
    height: 23,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.lexendMedium,
    textAlign: "left",
  },
  fri: {
    left: 49,
  },
  c1: {
    left: 42,
  },
  c2: {
    left: 143,
  },
  c3: {
    left: 244,
  },
  c4: {
    left: 346,
  },
  sat: {
    left: 147,
  },
  sun: {
    left: 248,
  },
  mon: {
    top: 288,
    left: 348,
    width: 40,
    color: Color.colorDimgray,
    height: 23,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.lexendMedium,
    textAlign: "left",
  },
  s: {
    width: 19,
    fontFamily: FontFamily.lexendExtraBold,
    fontWeight: "800",
    marginLeft: -170.5,
    left: "50%",
    color: Color.colorDimgray,
    top: 0,
    height: 23,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    position: "absolute",
  },
  s1: {
    marginLeft: 151.5,
    width: 19,
    left: "50%",
    height: 23,
    position: "absolute",
  },
  f: {
    top: 1,
    fontFamily: FontFamily.lexendExtraBold,
    fontWeight: "800",
    color: Color.colorDimgray,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  m: {
    width: 20,
    top: 1,
    fontFamily: FontFamily.lexendExtraBold,
    fontWeight: "800",
    color: Color.colorDimgray,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  t: {
    top: 1,
    fontFamily: FontFamily.lexendExtraBold,
    fontWeight: "800",
    color: Color.colorDimgray,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  t1: {
    marginLeft: 42.5,
    width: 19,
    left: "50%",
    position: "absolute",
    height: 23,
  },
  w: {
    top: 1,
    fontFamily: FontFamily.lexendExtraBold,
    fontWeight: "800",
    color: Color.colorDimgray,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  days: {
    top: 485,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  text: {
    color: Color.colorDarkseagreen_100,
    marginLeft: 42,
    fontSize: FontSize.size_sm,
    width: 19,
    left: "50%",
    position: "absolute",
    top: 0,
    height: 23,
  },
  text1: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    marginLeft: 42,
    width: 19,
    color: Color.colorDimgray,
  },
  text2: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    marginLeft: 42,
    width: 19,
    color: Color.colorDimgray,
  },
  text3: {
    color: Color.colorDarkseagreen_100,
    width: 19,
    left: "50%",
    position: "absolute",
    marginLeft: -171,
    fontSize: FontSize.size_sm,
    top: 0,
    height: 23,
  },
  text4: {
    marginLeft: 152,
    width: 19,
    left: "50%",
    position: "absolute",
    color: Color.colorDimgray,
    top: 0,
    height: 23,
  },
  text5: {
    color: Color.colorDarkseagreen_100,
  },
  text6: {
    marginLeft: -110,
    width: 18,
    color: Color.colorDarkseagreen_100,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
  },
  text7: {
    color: Color.colorDarkseagreen_100,
  },
  text8: {
    color: Color.colorDarkseagreen_100,
    width: 20,
  },
  parent: {
    width: 342,
    marginLeft: -171,
  },
  text9: {
    width: 19,
    marginLeft: -170.5,
    fontSize: FontSize.size_sm,
    left: "50%",
    color: Color.colorDimgray,
    top: 0,
    height: 23,
    position: "absolute",
  },
  text10: {
    marginLeft: 151.5,
    width: 19,
    left: "50%",
    height: 23,
    position: "absolute",
    color: Color.colorDimgray,
    top: 0,
  },
  text11: {
    marginLeft: 93.5,
    width: 19,
    left: "50%",
    height: 23,
    position: "absolute",
    color: Color.colorDimgray,
    top: 0,
  },
  text12: {
    marginLeft: -110.5,
    left: "50%",
    height: 23,
    position: "absolute",
    width: 19,
    color: Color.colorDimgray,
    top: 0,
  },
  text13: {
    marginLeft: -59.5,
    width: 19,
    left: "50%",
    height: 23,
    position: "absolute",
    color: Color.colorDimgray,
    top: 0,
  },
  text14: {
    marginLeft: -9.5,
    width: 19,
    left: "50%",
    height: 23,
    position: "absolute",
    color: Color.colorDimgray,
    top: 0,
  },
  group: {
    width: 341,
    marginLeft: -171,
  },
  text15: {
    width: 19,
    left: "50%",
    position: "absolute",
    marginLeft: -171,
    fontSize: FontSize.size_sm,
    top: 0,
    height: 23,
    color: Color.colorDimgray,
  },
  text17: {
    color: Color.colorDimgray,
  },
  text18: {
    marginLeft: -111,
    width: 19,
    left: "50%",
    position: "absolute",
    color: Color.colorDimgray,
    top: 0,
    height: 23,
  },
  text19: {
    color: Color.colorDimgray,
  },
  text20: {
    width: 19,
    color: Color.colorDimgray,
  },
  container: {
    width: 342,
    marginLeft: -171,
  },
  groupView: {
    width: 341,
    marginLeft: -171,
  },
  text29: {
    color: "#ca4224",
    marginLeft: 93.5,
    width: 19,
    left: "50%",
    height: 23,
    position: "absolute",
    top: 0,
  },
  parent1: {
    width: 341,
    marginLeft: -171,
  },
  text34: {
    color: Color.colorDarkseagreen_100,
    marginLeft: 151.5,
    width: 19,
    left: "50%",
    height: 23,
    position: "absolute",
    top: 0,
  },
  text35: {
    color: Color.colorDarkseagreen_100,
    marginLeft: 93.5,
    width: 19,
    left: "50%",
    height: 23,
    position: "absolute",
    top: 0,
  },
  text36: {
    color: Color.colorDarkseagreen_100,
    marginLeft: -110.5,
    left: "50%",
    height: 23,
    position: "absolute",
    width: 19,
    top: 0,
  },
  text37: {
    color: Color.colorDarkseagreen_100,
    marginLeft: -59.5,
    width: 19,
    left: "50%",
    height: 23,
    position: "absolute",
    top: 0,
  },
  text38: {
    color: Color.colorDarkseagreen_100,
    marginLeft: -9.5,
    width: 19,
    left: "50%",
    height: 23,
    position: "absolute",
    top: 0,
  },
  parent2: {
    width: 341,
    marginLeft: -171,
  },
  text39: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    marginLeft: 42,
    width: 19,
    color: Color.colorDimgray,
  },
  groupParent: {
    top: 0,
  },
  text40: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    marginLeft: 42,
    width: 19,
    color: Color.colorDimgray,
  },
  text41: {
    color: Color.colorDarkseagreen_100,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    marginLeft: 42,
    width: 19,
  },
  dates: {
    top: 521,
  },
  vectorIcon: {
    right: "88.93%",
    left: "9.53%",
  },
  vectorIcon1: {
    right: "8.93%",
    left: "89.53%",
  },
  lineView: {
    top: 477,
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderTopWidth: 1,
    width: 347,
    height: 1,
    left: 42,
    position: "absolute",
  },
  homeChild3: {
    top: 770,
    height: 49,
    backgroundColor: Color.colorBeige,
    width: 390,
    left: 20,
    borderRadius: Border.br_3xs,
  },
  nextMisting1: {
    top: 783,
    left: 86,
    fontFamily: FontFamily.interMedium,
    color: Color.colorDimgray,
    height: 23,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  navbarIcon: {
    top: 836,
    height: 70,
    left: 20,
  },
  home: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default HOME;
