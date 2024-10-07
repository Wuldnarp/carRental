import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {CarList} from './components/carlist';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarsProvider } from './components/CarContext';
import { Sort } from './components/Sort';


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style = {styles.container}>
      <CarList navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <CarsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: {
            backgroundColor: '#0B0D1B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{
            title: 'Maximus Rentus Meridius',}}/>
          <Stack.Screen name="Sort" component={Sort} options={{title: 'Sort'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CarsProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0B0D1B',
  }
}); 

