import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarList from './carlist';

export default function App() {
  return (
    <View>
      <CarList />
      <StatusBar style="auto" />
    </View>
  );
}

