import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/bg.png')}
          resizeMode="cover"
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Aplicación rastreadora de la EEI</Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={()=> this.props.navigation.navigate('IssLocation')}>
            <Text style={styles.routeText}>Localización EEI</Text>
            <Text style={styles.knowMore}>{'Más información --->'}</Text>
            <Image
              source={require('../assets/iss_icon.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.routeCard}
          onPress={()=> this.props.navigation.navigate('Meteors')}>
            <Text style={styles.routeText}>Meteoritos</Text>
            <Text style={styles.knowMore}>{'Más información --->'}</Text>
            <Image
              source={require('../assets/meteor_icon.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.routeCard}
          onPress={()=> this.props.navigation.navigate('Updates')}>
            <Text style={styles.routeText}>Actualizaciones</Text>
            <Text style={styles.knowMore}>{'Más información --->'}</Text>
            <Image
              source={require('../assets/rocket_icon.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  routeCard: {
    flex: 0.35,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  routeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 75,
    paddingLeft: 30,
  },
  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  iconImage: {
    position: 'absolute',
    height: 200,
    width: 200,
    resizeMode: 'contain',
    right: 20,
    top: -80,
  },
});