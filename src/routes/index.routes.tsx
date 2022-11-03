import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import theme from "../styles/theme";

import { AntDesign, Entypo } from '@expo/vector-icons';
import { StackRoutes } from "./stack.routes";
import Favorites from "../pages/Favorites";
import { Host } from 'react-native-portalize';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Routes(){
  return (
    <Host>
      <Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.colors.white,
            paddingBottom: 10,
            borderTopWidth: 0,
            height: 60
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
    </Host>
  )
}