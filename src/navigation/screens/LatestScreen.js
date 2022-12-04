import { Text, View } from "react-native";

const LatestScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => alert('This is the "Latest" screen.')}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Latest Screen
      </Text>
    </View>
  );
};

export default LatestScreen;
