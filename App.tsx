import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Zone from './src/zone';

export default function App() {
  return (
    <View style={styles.container}>
        <Zone index={1} title="Ванна"/>
        <Zone index={2} title="Гардероб"/>
        <Zone index={3} title="Душ"/>
        <Zone index={4} title="Коридор"/>
        <Zone index={5} title="Кухня"/>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
});
