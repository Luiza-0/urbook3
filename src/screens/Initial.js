import React from 'react';

import {ImageBackground,  StyleSheet, Image, Dimensions, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import cadeira from '../../assets/cadeira.png';
import title from '../../assets/titulo.png';

const width = Dimensions.get('screen').width;
const back = require('../../assets/back.png');

const Stack = createStackNavigator();

export default function Initial(){
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Home');
  };
    return <>
    <TouchableOpacity onPress={handlePress}>
      <View>
        <ImageBackground source={back} style={estilos.back}>
          <Image source={cadeira} style={estilos.cadeira} />
          <Image source={title} style={estilos.title} />
        </ImageBackground>
      </View>
    </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
   back:{
    width: '100%',
    height: '100%',
   },
    cadeira: {
        marginTop: 39,
        width: null,
        resizeMode: 'contain',
        height: 356,
    },
    title:{
        width: null,
        resizeMode: 'contain',
        height: 169,
    },
  });