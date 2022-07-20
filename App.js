import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Button from './components/Button';
import Card from './components/Card';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <ImageBackground 
    source={require('./assets/background.png')} 
    resizeMode="cover" 
    style={styles.image}>
      <StatusBar style="auto" />
      <Button />
    </ImageBackground>
  </View>
  );
};
const CardScreen = ({ navigation, route }) => {
  return (
  <View style={styles.container}>
  <ImageBackground 
  source={require('./assets/background.png')} 
  resizeMode="cover" 
  style={styles.image}>
    <StatusBar style="auto" />
    <Card />
  </ImageBackground>
</View>
)};

    
const Stack = createNativeStackNavigator();

  const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Card" component={CardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});

export default App;
