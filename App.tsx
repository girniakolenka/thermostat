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
            imageStyle={styles.backgroundImage}
        >
            <Zone index={1} title="Ванна"/>
            <Zone index={2} title="Гардероб"/>
            <Zone index={3} title="Душ"/>
            <Zone index={4} title="Коридор"/>
            <Zone index={5} title="Кухня"/>
            <StatusBar style="auto" />
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    backgroundImage: {
        opacity: 0.7
    }
});
