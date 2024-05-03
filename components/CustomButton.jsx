import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#FF9C01",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
        minHeight: "62px",
        marginTop: "15px",
      }}
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text
        style={{
          fontSize: "18px",
          color: "#161622",
          fontWeight: "600",
          marginTop: "15px",
        }}
        className={`text-primary font-psemibold text-lg ${textStyles}`}
      >
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          size="small"
          style={{ marginLeft: "8px", color: "#fff" }}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
