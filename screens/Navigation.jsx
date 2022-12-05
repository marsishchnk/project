import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FullFilmscreen } from './FullFilm';
import { HomeScreen } from './Home';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Film' }} />
        <Stack.Screen name="FullFilm" component={FullFilmscreen} options={{ title: 'DescriptionFilm' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
