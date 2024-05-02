import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={bookmarkstyles.head}>
      <Text style={bookmarkstyles.font}>Home</Text>
    </View>
  );
};

export default Home;

const bookmarkstyles = StyleSheet.create({
  head: {
    paddingTop: 24,
    marginBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    height: "100%",
    backgroundColor: "#161622",
  },
  font: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
  },
});
