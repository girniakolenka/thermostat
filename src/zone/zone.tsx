import React, {useState} from 'react';

import Switch from './switch';
import {Text, View} from "react-native";
import styles from "./zone.styles";

interface IZoneProps {
    title: string,
    index: number
}

export default function Zone({ index, title }: IZoneProps) {
    const [state, setState] = useState(false);
    const [loading, setLoading] = useState(false);
    const handlePress = () => {
        setLoading(true);
        fetch('https://api.github.com/users/mralexgray/repos')
            .then((response) => response.json())
            .then(response => {
                setState(!state);
                setLoading(false);
            })
            .catch(error => {
              console.error(error);
              setLoading(false);
            });
    };

    return (
        <View style={styles.root}>
            <Text>
                <Text style={styles.title}>{ title } </Text>
                (Контур { index })
            </Text>
            <Switch loading={loading} handlePress={handlePress} state={state}/>
        </View>
    );
}