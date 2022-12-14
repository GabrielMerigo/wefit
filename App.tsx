
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { RepositoryContextProvider } from './src/contexts/RepositoryContext';

import { 
  useFonts,
  Roboto_500Medium
} from '@expo-google-fonts/roboto';

import { 
  Inter_400Regular,
  Inter_700Bold
} from '@expo-google-fonts/inter';

import Routes from './src/routes/index.routes';
import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Inter_400Regular,
    Inter_700Bold
  });

  return (
    <RepositoryContextProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar hidden={true} />
          {fontsLoaded && <Routes />}
        </NavigationContainer>
      </ThemeProvider>
    </RepositoryContextProvider>
  );
}
