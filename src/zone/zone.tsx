import React, { useState, useEffect } from 'react';

import Switch from './switch';
import {Text, View} from "react-native";
import styles from "./zone.styles";
import { getApi, updateApi } from '../shared';

interface IZoneProps {
    title: string,
    index: number
};

const URL = 'https://httpbin.org/anything';

export default function Zone({ index, title }: IZoneProps) {
    const [state, setState] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSuccess = ({ json }: any) => {
        setState(!!json[index]);
        setLoading(false);
    };

    const handleError = () => setLoading(false);

    const handlePress = () => {
        setLoading(true);
        updateApi(URL, { [index]: !state }, handleSuccess, handleError);
    };

    useEffect(() => {
        setLoading(true);
        getApi(URL, handleSuccess, handleError);
    }, []);

    return (
        <View style={styles.root}>
            <Text style={styles.titleContainer}>
                <Text style={styles.title}>{ title } </Text>
                (Контур { index })
            </Text>
            <Switch loading={loading} handlePress={handlePress} state={state}/>
        </View>
    );
}