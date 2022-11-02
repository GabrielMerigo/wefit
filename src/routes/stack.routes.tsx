import { GestureHandlerRootView } from "react-native-gesture-handler";


import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();
import Home from "../pages/Home";
import RepositoryDetails from "../pages/RepositoryDetails";

export function StackRoutes() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="Home"
          component={Home}
        />
        <Screen
          name="RepositoryDetails"
          component={RepositoryDetails}
        />
      </Navigator>
    </GestureHandlerRootView>
  )
}