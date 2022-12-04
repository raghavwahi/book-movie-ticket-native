import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import LatestScreen from "./screens/LatestScreen";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === "Latest") {
              iconName = focused ? "list" : "list-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Latest" component={LatestScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
