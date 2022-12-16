import { View, Text, StyleSheet, Image } from "react-native"
import React from "react"
import LinearGradient from "react-native-linear-gradient"
import { colors } from "../theme"
export default function ProfileImage({ image, style, height, width }) {
  return (
    <LinearGradient
      colors={["#225529", "#7D9E49"]}
      style={[
        styles.linearGradient,
        {
          height: height ? height : 80,
          width: width ? width : 80,
          borderRadius: width ? width / 2 : 40
        },
        style
      ]}
    >
      <Image source={image} resizeMode="contain" style={styles.image} />
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  linearGradient: {
    height: 80,
    width: 80,
    // borderRadius: ,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  image: {
    width: "94%",
    height: "94%"
    // borderRadius: 30,
  }
})
