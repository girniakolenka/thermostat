import React, { useState, useEffect } from 'react';

import Switch from './switch';
import { Text, View, Alert } from 'react-native';
import styles from "./zone.styles";
import { getApi, updateApi } from '../shared';

interface IZoneProps {
    title: string,
    index: number
};

const ID = 'zoneId';
const STATUS = 'heatingEnabled';
const INTERVAL = 10000;
const URL = 'http://192.168.1.35:8080/heat-automation/zones';
const SUCCESS_ALERT = 'Your request has been sent successfully';
const ERROR_ALERT = 'Something went wrong';

export default function Zone({ index, title }: IZoneProps) {
    const [state, setState] = useState(false);
    const GET_URL = `${URL}/${index}/status`;
    const POST_URL = `${URL}/${index}/control`;

    const handleSuccess = ({ heatingEnabled }: any) => {
        setState(heatingEnabled);
    };

    const handlePOSTSuccess = (response: any) => {
        handleSuccess(response);
        Alert.alert(SUCCESS_ALERT);
    }

    const handleError = () => Alert.alert(ERROR_ALERT);

    const handlePress = () => {
        const newState = !state;
        const data = {
            [STATUS]: newState
        };
        setState(newState);
        updateApi(POST_URL, data, handlePOSTSuccess, handleError);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            getApi(GET_URL, handleSuccess, handleError);
        }, INTERVAL);

        return () => clearInterval(intervalId);
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