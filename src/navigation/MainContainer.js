import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PARAMS } from "../static/config";
import LatestScreen from "./screens/LatestScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={PARAMS.LATEST_MOVIES}>
          <Stack.Screen name={PARAMS.LATEST_MOVIES} component={LatestScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
