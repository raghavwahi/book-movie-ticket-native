import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => alert('This is the "Home" screen.')}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Home Screen
      </Text>
    </View>
  );
};

export default HomeScreen;
