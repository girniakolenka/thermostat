import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

import Zone from './src/zone';
const backgroundImage = require('./assets/background.jpg');

export default function App() {
  return (
    <View style={styles.container}>
        <ImageBackground
            source={backgroundImage}
            style={styles.background}
        >
            <Zone index={1} title="Bath"/>
            <Zone index={2} title="Wardrobe"/>
            <Zone index={3} title="Shower"/>
            <Zone index={4} title="Corridor"/>
            <Zone index={5} title="Kitchen"/>
            <StatusBar style="auto" />
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
