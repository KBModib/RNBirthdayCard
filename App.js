import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground 
      source={require('./assets/cardbackground.png')} 
      resizeMode="cover" 
      style={styles.image}>
        <View style={styles.card}>
          <ImageBackground
          source={require('./assets/cardbackground.gif')} 
          resizeMode="cover"
          style={styles.imagecard}>
            <Text style={styles.heading}>Happy Birthday Simphiwe</Text>
            <Text style={styles.text}>Hope all your birthday wishes come true.</Text>
          </ImageBackground>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

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
  card: {
    flex: 1,
    justifyContent: 'center',
    width: '90%',
    height: '50%',
    alignItems: 'center',
    backgroundColor: '#000',
    marginTop: '40%',
    marginBottom: '40%',
    borderRadius: 0,
    padding: 15,
    transform: [{ rotate: '-2deg' }],
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FD49A0',
    textAlign: 'center',
    marginTop: 350,
    fontFamily: 'sans-serif-condensed',  
},
text: {
    fontSize: 30,
    color: '#B4FEE7',
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'sans-serif-condensed',
    fontStyle: 'italic',
},
imagecard: {
    flex: 1,
    width: '100%',
    height: '60%',
    marginTop: '10%',
  }

});