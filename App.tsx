
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { 
  useFonts,
  Roboto_500Medium
} from '@expo-google-fonts/roboto';

import { 
  Inter_400Regular,
  Inter_700Bold
} from '@expo-google-fonts/inter';

import Routes from './src/routes';
import theme from './src/styles/theme';
import { Modalize } from 'react-native-modalize';

import { useRef } from 'react';
import { ModalContextProvider } from './src/context/ModalContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Inter_400Regular,
    Inter_700Bold
  });

  return (
    <ModalContextProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar hidden={true} />
          {fontsLoaded && <Routes />}
        </NavigationContainer>
      </ThemeProvider>
    </ModalContextProvider>
  );
}
