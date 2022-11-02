import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../pages/Home';
import theme from "../styles/theme";

import { AntDesign, Entypo } from '@expo/vector-icons';
import useModal from "../hooks/useModal";
import { StackRoutes } from "./stack.routes";
import Favorites from "../pages/Favorites";

const { Navigator, Screen } = createBottomTabNavigator();

export default function Routes(){
  const { showTabBottom } = useModal();

  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.white,
          paddingBottom: 10,
          borderTopWidth: 0,
          height: 60,
          display: 'none'
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts.roboto_medium
        }
      }}
    >
      <Screen 
        name="Repositórios" 
        component={StackRoutes} 
        options={{ 
          headerShown: false, 
          tabBarIcon: ({ focused, size }) => (
            <AntDesign name="github" size={size} color={focused ? theme.colors.blue : theme.colors.gray_dark} />
          )
        }} 
      />

      <Screen
        name="Favoritos" 
        component={Favorites} 
        options={{ 
          headerShown: false, 
          tabBarIcon: ({ focused, size }) => (
            <Entypo name="star" size={size} color={focused ? theme.colors.blue : theme.colors.gray_dark} />
          )
        }} 
      />
    </Navigator>
  )
}