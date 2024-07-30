import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const HISTORICALDATAANALYSIS = () => {
  return (
    <View style={styles.historicalDataAnalysis}>
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Text style={[styles.goodMorningAlex, styles.goodMorningAlexLayout]}>
        Good Morning, Alex!
      </Text>
      <Text
        style={[styles.analysisOverviewOf, styles.generalStatisticsFlexBox]}
      >
        Analysis Overview of your Plant’s Health:
      </Text>
      <Image
        style={[styles.notificationIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/76notification1.png")}
      />
      <Image
        style={[styles.settingIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/44setting2.png")}
      />
      <View style={[styles.todaysWeather, styles.todaysLayout]}>
        <View style={[styles.todaysWeatherChild, styles.todaysLayout]} />
      </View>
      <View style={styles.historicalDataAnalysisChild} />
      <Text style={[styles.generalStatistics, styles.generalStatisticsFlexBox]}>
        General Statistics
      </Text>
      <Image
        style={styles.navbarIcon}
        contentFit="cover"
        source={require("../assets/navbar1.png")}
      />
      <Image
        style={[styles.historicalDataAnalysisItem, styles.historicalLayout]}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <Image
        style={[styles.historicalDataAnalysisInner, styles.historicalLayout]}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <Image
        style={[styles.lineIcon, styles.historicalLayout]}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <Image
        style={styles.historicalDataAnalysisChild1}
        contentFit="cover"
        source={require("../assets/line-7.png")}
      />
      <View style={styles.lineView} />
      <View
        style={[
          styles.historicalDataAnalysisChild2,
          styles.historicalChildPosition5,
        ]}
      />
      <View
        style={[
          styles.historicalDataAnalysisChild3,
          styles.historicalChildLayout2,
        ]}
      />
      <View
        style={[
          styles.historicalDataAnalysisChild4,
          styles.historicalChildLayout2,
        ]}
      />
      <Image
        style={styles.historicalDataAnalysisChild5}
        contentFit="cover"
        source={require("../assets/line-13.png")}
      />
      <View
        style={[
          styles.historicalDataAnalysisChild6,
          styles.historicalChildLayout2,
        ]}
      />
      <View
        style={[
          styles.historicalDataAnalysisChild7,
          styles.historicalChildLayout2,
        ]}
      />
      <Text style={[styles.tue, styles.tueTypo]}>TUE</Text>
      <Text style={[styles.wed, styles.tueTypo]}>WED</Text>
      <Text style={[styles.thu, styles.tueTypo]}>THU</Text>
      <Text style={[styles.fri, styles.tueTypo]}>FRI</Text>
      <Text style={[styles.sat, styles.tueTypo]}>SAT</Text>
      <Text style={[styles.sun, styles.tueTypo]}>SUN</Text>
      <Image
        style={styles.historicalDataAnalysisChild8}
        contentFit="cover"
        source={require("../assets/line-15.png")}
      />
      <Image
        style={[
          styles.historicalDataAnalysisChild9,
          styles.historicalChildPosition3,
        ]}
        contentFit="cover"
        source={require("../assets/line-16.png")}
      />
      <Image
        style={[
          styles.historicalDataAnalysisChild10,
          styles.historicalChildPosition4,
        ]}
        contentFit="cover"
        source={require("../assets/line-17.png")}
      />
      <Image
        style={[
          styles.historicalDataAnalysisChild11,
          styles.historicalChildPosition2,
        ]}
        contentFit="cover"
        source={require("../assets/line-18.png")}
      />
      <Image
        style={[
          styles.historicalDataAnalysisChild12,
          styles.historicalChildPosition2,
        ]}
        contentFit="cover"
        source={require("../assets/line-19.png")}
      />
      <Image
        style={[
          styles.historicalDataAnalysisChild13,
          styles.historicalChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/line-20.png")}
      />
      <Image
        style={[
          styles.historicalDataAnalysisChild14,
          styles.historicalChildPosition3,
        ]}
        contentFit="cover"
        source={require("../assets/line-21.png")}
      />
      <Image
        style={styles.historicalDataAnalysisChild15}
        contentFit="cover"
        source={require("../assets/line-22.png")}
      />
      <Image
        style={styles.historicalDataAnalysisChild16}
        contentFit="cover"
        source={require("../assets/line-23.png")}
      />
      <Image
        style={styles.historicalDataAnalysisChild17}
        contentFit="cover"
        source={require("../assets/line-24.png")}
      />
      <Image
        style={[
          styles.historicalDataAnalysisChild18,
          styles.historicalChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/line-25.png")}
      />
      <Image
        style={[
          styles.historicalDataAnalysisChild19,
          styles.historicalChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/line-26.png")}
      />
      <Image
        style={[
          styles.historicalDataAnalysisChild20,
          styles.historicalChildPosition5,
        ]}
        contentFit="cover"
        source={require("../assets/line-27.png")}
      />
      <Image
        style={[
          styles.historicalDataAnalysisChild21,
          styles.historicalChildLayout1,
        ]}
        contentFit="cover"
        source={require("../assets/line-28.png")}
      />
      <Image
        style={styles.historicalDataAnalysisChild22}
        contentFit="cover"
        source={require("../assets/line-29.png")}
      />
      <Image
        style={[
          styles.historicalDataAnalysisChild23,
          styles.historicalChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/line-30.png")}
      />
      <Image
        style={[
          styles.historicalDataAnalysisChild24,
          styles.goodMorningAlexLayout,
        ]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Image
        style={[
          styles.historicalDataAnalysisChild25,
          styles.historicalChildLayout1,
        ]}
        contentFit="cover"
        source={require("../assets/line-32.png")}
      />
      <Image
        style={styles.historicalDataAnalysisChild26}
        contentFit="cover"
        source={require("../assets/line-33.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[
          styles.historicalDataAnalysisChild27,
          styles.rectangleViewLayout,
        ]}
      />
      <View
        style={[
          styles.historicalDataAnalysisChild28,
          styles.historicalChildLayout,
        ]}
      />
      <View
        style={[
          styles.historicalDataAnalysisChild29,
          styles.historicalChildLayout,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goodMorningAlexLayout: {
    height: 15,
    position: "absolute",
  },
  generalStatisticsFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 22,
    top: 33,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  todaysLayout: {
    height: 456,
    width: 353,
    position: "absolute",
  },
  historicalLayout: {
    height: 1,
    width: 285,
    left: 79,
    position: "absolute",
  },
  historicalChildPosition5: {
    left: 125,
    position: "absolute",
  },
  historicalChildLayout2: {
    top: 443,
    height: 16,
    width: 2,
    borderRightWidth: 2,
    borderColor: Color.colorSilver,
    backgroundColor: Color.colorBlack,
    borderStyle: "solid",
  },
  tueTypo: {
    width: 22,
    fontSize: FontSize.size_6xs,
    height: 15,
    textAlign: "center",
    color: Color.colorDarkseagreen_200,
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    position: "absolute",
  },
  historicalChildPosition3: {
    left: 126,
    position: "absolute",
  },
  historicalChildPosition4: {
    top: 373,
    height: 53,
  },
  historicalChildPosition2: {
    top: 390,
    position: "absolute",
  },
  historicalChildPosition1: {
    width: 45,
    left: 81,
    position: "absolute",
  },
  historicalChildPosition: {
    top: 339,
    position: "absolute",
  },
  historicalChildLayout1: {
    width: 31,
    position: "absolute",
  },
  rectangleViewLayout: {
    width: 15,
    borderRadius: Border.br_8xs,
    height: 15,
    position: "absolute",
  },
  historicalChildLayout: {
    left: 213,
    width: 15,
    borderRadius: Border.br_8xs,
    height: 15,
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
    textAlign: "center",
    height: 15,
    color: Color.colorDarkseagreen_200,
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
  },
  analysisOverviewOf: {
    top: 102,
    fontSize: FontSize.size_lg,
    width: 427,
    height: 23,
    left: 20,
    color: Color.colorDarkseagreen_200,
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  notificationIcon: {
    left: 350,
  },
  settingIcon: {
    left: 386,
  },
  todaysWeatherChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
  },
  todaysWeather: {
    top: 249,
    left: 38,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
  },
  historicalDataAnalysisChild: {
    top: 138,
    left: 17,
    borderColor: Color.colorWhitesmoke_300,
    borderTopWidth: 3,
    width: 395,
    height: 3,
    borderStyle: "solid",
    position: "absolute",
  },
  generalStatistics: {
    top: 157,
    left: 16,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.lexendSemiBold,
    color: Color.colorDimgray,
    width: 212,
    height: 37,
  },
  navbarIcon: {
    top: 814,
    width: 390,
    height: 70,
    left: 20,
    position: "absolute",
  },
  historicalDataAnalysisItem: {
    top: 305,
  },
  historicalDataAnalysisInner: {
    top: 340,
  },
  lineIcon: {
    top: 375,
  },
  historicalDataAnalysisChild1: {
    top: 408,
    height: 38,
    width: 285,
    left: 79,
    position: "absolute",
  },
  lineView: {
    top: 442,
    left: 78,
    height: 16,
    width: 2,
    borderRightWidth: 2,
    borderColor: Color.colorSilver,
    backgroundColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  historicalDataAnalysisChild2: {
    top: 443,
    height: 16,
    width: 2,
    borderRightWidth: 2,
    borderColor: Color.colorSilver,
    backgroundColor: Color.colorBlack,
    borderStyle: "solid",
  },
  historicalDataAnalysisChild3: {
    left: 174,
    position: "absolute",
  },
  historicalDataAnalysisChild4: {
    left: 221,
    position: "absolute",
  },
  historicalDataAnalysisChild5: {
    top: 444,
    left: 271,
    maxWidth: "100%",
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  historicalDataAnalysisChild6: {
    left: 316,
    position: "absolute",
  },
  historicalDataAnalysisChild7: {
    left: 361,
    position: "absolute",
  },
  tue: {
    left: 115,
    top: 463,
    width: 22,
    fontSize: FontSize.size_6xs,
  },
  wed: {
    left: 164,
    top: 463,
    width: 22,
    fontSize: FontSize.size_6xs,
  },
  thu: {
    left: 211,
    top: 463,
    width: 22,
    fontSize: FontSize.size_6xs,
  },
  fri: {
    left: 260,
    top: 463,
    width: 22,
    fontSize: FontSize.size_6xs,
  },
  sat: {
    left: 307,
    top: 463,
    width: 22,
    fontSize: FontSize.size_6xs,
  },
  sun: {
    top: 462,
    left: 351,
  },
  historicalDataAnalysisChild8: {
    top: 344,
    height: 82,
    width: 47,
    left: 79,
    position: "absolute",
  },
  historicalDataAnalysisChild9: {
    width: 49,
    top: 373,
    height: 53,
  },
  historicalDataAnalysisChild10: {
    left: 175,
    width: 89,
    position: "absolute",
  },
  historicalDataAnalysisChild11: {
    left: 264,
    height: 36,
    width: 24,
    top: 390,
  },
  historicalDataAnalysisChild12: {
    left: 288,
    width: 72,
    height: 49,
  },
  historicalDataAnalysisChild13: {
    height: 114,
    top: 323,
  },
  historicalDataAnalysisChild14: {
    height: 77,
    top: 323,
    width: 47,
  },
  historicalDataAnalysisChild15: {
    top: 354,
    left: 173,
    height: 46,
    width: 47,
    position: "absolute",
  },
  historicalDataAnalysisChild16: {
    top: 352,
    left: 218,
    width: 40,
    height: 19,
    position: "absolute",
  },
  historicalDataAnalysisChild17: {
    top: 342,
    left: 256,
    width: 71,
    height: 32,
    position: "absolute",
  },
  historicalDataAnalysisChild18: {
    left: 325,
    width: 29,
    height: 3,
  },
  historicalDataAnalysisChild19: {
    top: 392,
    height: 43,
  },
  historicalDataAnalysisChild20: {
    width: 112,
    height: 55,
    top: 378,
  },
  historicalDataAnalysisChild21: {
    left: 237,
    height: 57,
    top: 378,
  },
  historicalDataAnalysisChild22: {
    top: 306,
    left: 268,
    width: 94,
    height: 129,
    position: "absolute",
  },
  historicalDataAnalysisChild23: {
    width: 121,
    height: 83,
    left: 81,
    top: 339,
  },
  historicalDataAnalysisChild24: {
    top: 337,
    left: 200,
    width: 62,
  },
  historicalDataAnalysisChild25: {
    top: 314,
    left: 261,
    height: 42,
  },
  historicalDataAnalysisChild26: {
    top: 313,
    left: 291,
    width: 69,
    height: 86,
    position: "absolute",
  },
  rectangleView: {
    left: 72,
    backgroundColor: "#26c5c8",
    top: 506,
  },
  historicalDataAnalysisChild27: {
    left: 73,
    backgroundColor: "#f6b128",
    top: 542,
  },
  historicalDataAnalysisChild28: {
    backgroundColor: "#bb44e5",
    top: 506,
  },
  historicalDataAnalysisChild29: {
    backgroundColor: "#70bb42",
    top: 542,
  },
  historicalDataAnalysis: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default HISTORICALDATAANALYSIS;
