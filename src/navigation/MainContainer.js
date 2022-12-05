import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PARAMS } from "../static/config";
import BookingScreen from "./screens/BookingScreen";
import DetailsScreen from "./screens/DetailsScreen";
import LatestScreen from "./screens/LatestScreen";

const Stack = createNativeStackNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PARAMS.LATEST_MOVIES}>
        <Stack.Screen name={PARAMS.LATEST_MOVIES} component={LatestScreen} />
        <Stack.Screen name={PARAMS.MOVIE_DETAILS} component={DetailsScreen} />
        <Stack.Screen name={PARAMS.BOOKING_DETAILS} component={BookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
