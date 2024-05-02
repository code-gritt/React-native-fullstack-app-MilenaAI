import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={modalstyles.container}>
      <Text style={modalstyles.font}>Milena AI</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-pblack">
        Go to Home
      </Link>
    </View>
  );
}

const modalstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    fontSize: 30,
  },
});
