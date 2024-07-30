import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MONITORING = () => {
  return (
    <View style={styles.monitoring}>
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Text style={styles.goodMorningAlex}>Good Morning, Alex!</Text>
      <Text style={[styles.heresTheSummary, styles.home11IconLayout]}>
        Here’s the summary of your plant’s health:
      </Text>
      <Image
        style={[styles.notificationIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/76notification1.png")}
      />
      <Image
        style={[styles.settingIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/44setting1.png")}
      />
      <Text style={[styles.parameters, styles.ppmLayout]}>Parameters</Text>
      <Text style={styles.ph}>pH</Text>
      <View style={styles.monitoringChild} />
      <View style={[styles.ph1, styles.ph1Layout]}>
        <View style={[styles.todaysWeather, styles.todaysShadowBox]}>
          <View style={[styles.todaysWeatherChild, styles.ph1Layout]} />
        </View>
        <Text style={[styles.ph2, styles.ph2Typo]}>pH</Text>
        <Image
          style={styles.image6Icon}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <View style={[styles.todaysWeather1, styles.todaysLayout]}>
          <View style={[styles.todaysWeatherItem, styles.todaysLayout]} />
        </View>
        <Text style={[styles.text, styles.ph2Typo]}>6.3</Text>
      </View>
      <View style={[styles.co2, styles.ph1Layout]}>
        <View style={[styles.todaysWeather2, styles.todaysShadowBox]}>
          <View style={[styles.todaysWeatherChild, styles.ph1Layout]} />
        </View>
        <Text style={[styles.co21, styles.co21Position]}>{`CO2 `}</Text>
        <Image
          style={styles.image40Icon}
          contentFit="cover"
          source={require("../assets/image-40.png")}
        />
        <View style={[styles.todaysWeather3, styles.todaysLayout]}>
          <View style={[styles.todaysWeatherItem, styles.todaysLayout]} />
        </View>
        <Text style={[styles.ppm, styles.ppmLayout]}>
          <Text style={styles.text1}>{`1016 `}</Text>
          <Text style={styles.ppm1}>PPM</Text>
        </Text>
      </View>
      <View style={[styles.temperature, styles.temperaturePosition]}>
        <View style={[styles.todaysWeather4, styles.todaysShadowBox]}>
          <View style={[styles.todaysWeatherChild, styles.ph1Layout]} />
        </View>
        <Text style={[styles.temperature1, styles.humidityTypo]}>
          Temperature
        </Text>
        <Image
          style={styles.image7Icon}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
        <View style={[styles.todaysWeather5, styles.todaysPosition]}>
          <View style={[styles.todaysWeatherItem, styles.todaysLayout]} />
        </View>
        <Text style={[styles.text2, styles.co21Position]}>
          <Text style={styles.text1}>27</Text>
          <Text style={styles.ppm1}>°</Text>
          <Text style={styles.text1}>ᶜ</Text>
        </Text>
      </View>
      <View style={[styles.todaysWeatherParent, styles.temperaturePosition]}>
        <View style={[styles.todaysWeather6, styles.todaysShadowBox]}>
          <View style={[styles.todaysWeatherChild, styles.ph1Layout]} />
        </View>
        <Text style={[styles.humidity, styles.humidityTypo]}>Humidity</Text>
        <View style={[styles.todaysWeather7, styles.todaysPosition]}>
          <View style={[styles.todaysWeatherItem, styles.todaysLayout]} />
        </View>
        <Text style={[styles.text6, styles.ppmLayout]}>
          <Text style={styles.text1}>{`33 `}</Text>
          <Text style={styles.ppm1}>%</Text>
        </Text>
      </View>
      <View style={styles.navbar}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={styles.chart1Icon}
          contentFit="cover"
          source={require("../assets/5chart1.png")}
        />
        <Image
          style={[styles.exploreIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/42explore.png")}
        />
        <Image
          style={styles.navbarItem}
          contentFit="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <View style={styles.home11Parent}>
          <Image
            style={[styles.home11Icon, styles.home11IconLayout]}
            contentFit="cover"
            source={require("../assets/2home11.png")}
          />
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/ellipse-16.png")}
          />
        </View>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home11IconLayout: {
    height: 23,
    position: "absolute",
  },
  iconLayout1: {
    height: 22,
    width: 24,
    top: 33,
    position: "absolute",
    overflow: "hidden",
  },
  ppmLayout: {
    height: 37,
    color: Color.colorDimgray,
    textAlign: "left",
    position: "absolute",
  },
  ph1Layout: {
    height: 230,
    width: 161,
    position: "absolute",
  },
  todaysShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  ph2Typo: {
    left: 67,
    width: 26,
    fontFamily: FontFamily.lexendRegular,
    height: 37,
    color: Color.colorDimgray,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  todaysLayout: {
    height: 52,
    width: 131,
    position: "absolute",
  },
  co21Position: {
    left: 61,
    height: 37,
    color: Color.colorDimgray,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  temperaturePosition: {
    top: 510,
    height: 230,
    width: 161,
    position: "absolute",
  },
  humidityTypo: {
    top: 23,
    fontFamily: FontFamily.lexendRegular,
    height: 37,
    color: Color.colorDimgray,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  todaysPosition: {
    top: 161,
    height: 52,
    width: 131,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  image5Icon: {
    top: 18,
    width: 41,
    height: 53,
    left: 15,
    position: "absolute",
  },
  goodMorningAlex: {
    top: 69,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    height: 15,
    width: 113,
    color: Color.colorDarkseagreen_200,
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
    left: 18,
    position: "absolute",
  },
  heresTheSummary: {
    top: 100,
    left: 24,
    width: 377,
    textAlign: "left",
    height: 23,
    fontSize: FontSize.size_lg,
    color: Color.colorDarkseagreen_200,
    fontFamily: FontFamily.lexendMedium,
    fontWeight: "500",
  },
  notificationIcon: {
    left: 350,
  },
  settingIcon: {
    left: 386,
  },
  parameters: {
    top: 168,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.lexendSemiBold,
    width: 143,
    color: Color.colorDimgray,
    left: 18,
  },
  ph: {
    top: 258,
    left: 103,
    width: 26,
    fontFamily: FontFamily.lexendRegular,
    height: 37,
    color: Color.colorDimgray,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  monitoringChild: {
    top: 138,
    left: 17,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_300,
    borderTopWidth: 3,
    width: 395,
    height: 3,
    position: "absolute",
  },
  todaysWeatherChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  todaysWeather: {
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    left: 0,
    top: 0,
    height: 230,
    width: 161,
    position: "absolute",
  },
  ph2: {
    top: 22,
  },
  image6Icon: {
    top: 73,
    width: 79,
    height: 68,
    left: 40,
    position: "absolute",
  },
  todaysWeatherItem: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorLightgoldenrodyellow_100,
    left: 0,
    top: 0,
  },
  todaysWeather1: {
    left: 14,
    top: 164,
    width: 131,
  },
  text: {
    top: 179,
  },
  ph1: {
    left: 36,
    top: 236,
    width: 161,
  },
  todaysWeather2: {
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    left: 0,
    top: 0,
    height: 230,
    width: 161,
    position: "absolute",
  },
  co21: {
    top: 21,
    width: 39,
    fontFamily: FontFamily.lexendRegular,
  },
  image40Icon: {
    top: 79,
    width: 82,
    height: 55,
    left: 40,
    position: "absolute",
  },
  todaysWeather3: {
    top: 164,
    width: 131,
    left: 15,
  },
  text1: {
    fontFamily: FontFamily.lexendRegular,
  },
  ppm1: {
    fontWeight: "300",
    fontFamily: FontFamily.lexendLight,
  },
  ppm: {
    top: 180,
    width: 86,
    left: 40,
    fontSize: FontSize.size_lg,
    color: Color.colorDimgray,
  },
  co2: {
    left: 228,
    top: 236,
    width: 161,
  },
  todaysWeather4: {
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    left: 0,
    top: 0,
    height: 230,
    width: 161,
    position: "absolute",
  },
  temperature1: {
    left: 23,
    width: 113,
  },
  image7Icon: {
    top: 76,
    left: 56,
    width: 48,
    height: 62,
    position: "absolute",
  },
  todaysWeather5: {
    left: 14,
  },
  text2: {
    top: 176,
    width: 37,
  },
  temperature: {
    left: 36,
  },
  todaysWeather6: {
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    left: 0,
    top: 0,
    height: 230,
    width: 161,
    position: "absolute",
  },
  humidity: {
    width: 80,
    left: 40,
  },
  todaysWeather7: {
    left: 15,
  },
  text6: {
    top: 175,
    left: 63,
    width: 57,
    fontSize: FontSize.size_lg,
    color: Color.colorDimgray,
  },
  todaysWeatherParent: {
    left: 228,
  },
  vectorIcon: {
    height: "28.57%",
    top: "52.86%",
    right: "8.46%",
    bottom: "18.57%",
    left: "85.13%",
    width: "6.41%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  chart1Icon: {
    top: 34,
    left: 263,
    width: 28,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  exploreIcon: {
    height: "35.71%",
    top: "50%",
    right: "67.95%",
    bottom: "14.29%",
    left: "25.64%",
    width: "6.41%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  navbarItem: {
    left: 165,
    width: 60,
    height: 57,
    top: 0,
    position: "absolute",
  },
  home11Icon: {
    top: 5,
    width: 25,
    left: 0,
    overflow: "hidden",
  },
  groupChild: {
    left: 79,
    width: 4,
    height: 4,
    top: 0,
    position: "absolute",
  },
  home11Parent: {
    top: 31,
    left: 31,
    width: 83,
    height: 28,
    position: "absolute",
  },
  vectorIcon1: {
    height: "34.29%",
    width: "8.21%",
    top: "27.14%",
    right: "45.9%",
    bottom: "38.57%",
    left: "45.9%",
  },
  navbar: {
    top: 810,
    left: 20,
    height: 70,
    width: 390,
    position: "absolute",
  },
  monitoring: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default MONITORING;
