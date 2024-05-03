import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";

import { useGlobalContext } from "../context/GlobalProvider";
import CustomButton from "../components/CustomButton";
import { Loader } from "../components/Loader";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#161622", height: "100%" }}>
      {/* <Loader isLoading={loading} /> */}

      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          <Image
            style={{ width: "130px", height: "84px" }}
            source={images.logo}
            resizeMode="contain"
          />

          <Image
            style={{ width: "350px", height: "298px" }}
            source={images.cards}
            resizeMode="contain"
          />

          <View style={{ position: "relative", marginTop: "20px" }}>
            <Text
              style={{
                fontSize: "30px",
                color: "#fff",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Discover Endless{"\n"}
              Possibilities with <Text style={{ color: "#FF8E01" }}>Aora</Text>
            </Text>

            <Image
              style={{
                width: "136px",
                height: "15px",
                position: "absolute",
                bottom: "-8px",
                right: "-32px",
              }}
              source={images.path}
              resizeMode="contain"
            />
          </View>

          <Text
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#f3f4f6",
              marginTop: "28px",
              textAlign: "center",
            }}
          >
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            style={{
              width: "100%",
              marginTop: "28px",
            }}
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
