import React, { useState, useEffect } from 'react';

import Switch from './switch';
import {Text, View} from "react-native";
import styles from "./zone.styles";
import { getApi, updateApi } from '../shared';

interface IZoneProps {
    title: string,
    index: number
};

const ID = 'zoneId';
const STATUS = 'heatingEnabled';
const URL = 'https://httpbin.org/anything';

export default function Zone({ index, title }: IZoneProps) {
    const [state, setState] = useState(false);
    const url = `${URL}/${index}`;

    const handleSuccess = ({ json }: any) => {
        const data = json ? !!json[index] : false;
        setState(data);
    };

    const handleError = () => {};

    const handlePress = () => {
        const data = {
            [STATUS]: !state
        }
        updateApi(URL, data, handleSuccess, handleError);
    };

    useEffect(() => {
        getApi(URL, handleSuccess, handleError);
    }, []);

    return (
        <View style={styles.root}>
            <Text style={styles.titleContainer}>
                <Text style={styles.title}>{ title } </Text>
                (Контур { index })
            </Text>
            <Switch handlePress={handlePress} state={state}/>
        </View>
    );
}