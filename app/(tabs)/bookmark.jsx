import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";

const Bookmark = () => {
  return (
    <SafeAreaView style={bookmarkstyles.head}>
      <Text style={bookmarkstyles.font}>Bookmark</Text>
    </SafeAreaView>
  );
};

export default Bookmark;

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
