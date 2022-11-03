import { GestureHandlerRootView } from "react-native-gesture-handler";


import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();
import Favorites from "../pages/Favorites";
import RepositoryDetails from "../pages/RepositoryDetails";

export function StackRoutesFavorites() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="Favorites"
          component={Favorites}
          
        />
        <Screen
          name="RepositoryDetails"
          component={RepositoryDetails}
        />
      </Navigator>
    </GestureHandlerRootView>
  )
}