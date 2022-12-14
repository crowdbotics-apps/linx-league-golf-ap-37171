import React, { useEffect } from "react"
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable
} from "react-native"
import Container from "../../Components/Container"
import AppHeader from "../../Components/AppHeader"
import { colors } from "../../theme"
import { Center } from "native-base"
import RoundCard from "./components/RoundCard"
import DateTimePicker from "./components/DateTimePicker"
import CommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { useNavigation } from "@react-navigation/core"
import RoutesKey from "../../Navigation/routesKey"
import Row from "../../Components/Row"
import { useSelector } from "react-redux"
import AsyncStorage from "@react-native-async-storage/async-storage"
export default function Home() {
  const navigation = useNavigation()
  const { user } = useSelector(state => state.auth)
  // const userObj = JSON.parse(user)
  data = [
    { id: 1, title: "St Johns Golf & Country Club",date:'18/05/2022 8:00 am' },
    { id: 2, title: "Johns & Country Club",date:'18/07/2022 8:00 am'  }
    // { title: 'St Johns Golf & Country Club' },
  ]
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    //    const user = await AsyncStorage.getItem('user')
  }
  return (
    <Container title={"Home"}>
      <AppHeader
        leftIcon={
          <TouchableOpacity
            onPress={() => navigation.navigate(RoutesKey.NOTIFICATIONS)}
          >
            <FontAwesome name="bell-o" size={30} color={colors.white} />
          </TouchableOpacity>
        }
        rightIcon={
          <Row style={{ justifyContent: "center", alignSelf: "flex-end" }}>
            <Pressable onPress={() => navigation.navigate(RoutesKey.INBOX)}>
              <CommunityIcon
                name="comment-outline"
                size={30}
                color={colors.white}
              />
            </Pressable>
            <Pressable onPress={() => navigation.navigate(RoutesKey.PROFILE)}>
              <Image
                source={require("../../assets/images/profileImg.png")}
                style={{ width: 30, height: 30, marginLeft: 15 }}
              />
            </Pressable>
          </Row>
        }
      />
      <Image
        source={require("../../assets/images/logoWhite.png")}
        resizeMode="contain"
        style={styles.logo}
      />

      <View style={{ flex: 1, alignItems: "center" }}>
        <ImageBackground
          source={require("../../assets/images/bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={{ paddingTop: 30 }}>
            <Text style={styles.h3}>Welcome,</Text>
            <Text style={[styles.h3, { fontWeight: "700" }]}>
              {user?.user?.name}
            </Text>
            <View style={{ paddingHorizontal: 25, marginTop: 20 }}>
              <Text style={[styles.h4, { fontWeight: "700" }]}>
                Add Upcoming Round{" "}
              </Text>

              <DateTimePicker />
            </View>
            <View style={{ marginTop: 30 }}>
              <View style={{ paddingStart: 25 }}>
                <Text style={[styles.h4]}>Upcoming Rounds </Text>
              </View>
              <FlatList
                data={data}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                  paddingBottom: 20,
                  height: "100%",
                  paddingTop: 5
                }}
                renderItem={({ item }) => <RoundCard item={item} containerStyle={{marginTop:5}} />}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </Container>
  )
}
const styles = StyleSheet.create({
  h3: {
    color: colors.white,
    fontSize: 20,
    textAlign: "center"
  },
  h4: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700"
  },
  logo: {
    width: 150,
    height: 60,
    alignSelf: "center",
    marginBottom: 4
  }
})
