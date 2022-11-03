import theme from "../styles/theme";

import { AntDesign, Entypo } from '@expo/vector-icons';
import { Host } from 'react-native-portalize';
import { StackRoutesHome } from "./stack.routes.home";
import { StackRoutesFavorites } from "./stack.routes.favorites";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
          component={StackRoutesHome} 
          options={{ 
            headerShown: false, 
            tabBarIcon: ({ focused, size }) => (
              <AntDesign name="github" size={size} color={focused ? theme.colors.blue : theme.colors.gray_dark} />
            )
          }} 
        />

        <Screen
          name="Favoritos" 
          component={StackRoutesFavorites} 
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