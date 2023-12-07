import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen01 from './Screens/Screen01';
import Screen02 from './Screens/Screen02';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import {NavigationContainer} from '@react-navigation/native'; 
import { Provider } from 'react-redux';
import store from './redux/store';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen01" component={Screen01} />
          <Stack.Screen name="Screen02" component={Screen02} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
