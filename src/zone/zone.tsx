import React, { useState, useEffect } from 'react';

import Switch from './switch';
import { Text, View, Alert } from 'react-native';
import styles from "./zone.styles";
import { getApi, getSyncApi, updateApi, useInterval } from '../shared';

interface IZoneProps {
    title: string,
    index: number
};

const ID = 'zoneId';
const STATUS = 'heatingEnabled';
const INTERVAL = 5000;
const URL = 'http://192.168.1.35:8080/heat-automation/zones';
const ERROR_ALERT = 'Something went wrong';

export default function Zone({ index, title }: IZoneProps) {
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(false);
    const GET_URL = `${URL}/${index}/status`;
    const POST_URL = `${URL}/${index}/control`;
    const titleMessage = `${title} #${index}`;

    const handleStatusSuccess = (heatingEnabled: any) => {
        setLoading(false);
        setState(heatingEnabled);
    };

    const handleGETSuccess = ({ heatingEnabled }: any) => {
        const isPressed = heatingEnabled === state && loading;
        const isChanged = heatingEnabled !== state && !loading;

        if( isPressed || isChanged) {
            handleStatusSuccess(heatingEnabled);
        }
    };

    const handleError = (err: any) => {
        Alert.alert(err || ERROR_ALERT);
        setLoading(false);
    }

    const handlePress = () => {
        const newState = !state;
        const data = {
            [STATUS]: newState
        };
        setState(newState);
        setLoading(true);
        updateApi(POST_URL, data, () => {}, handleError);
    };

    useEffect(() => {
        getApi(GET_URL, ({ heatingEnabled }) => {
            handleStatusSuccess(heatingEnabled);
        }, handleError);
    }, []);

     const getData = async () => {
         try {
             const response = await getSyncApi(GET_URL);
             handleGETSuccess(response);
         } catch(err) {
             handleError(err);
         }
    };

    useInterval(getData, INTERVAL);

    return (
        <View style={styles.root}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{ titleMessage }</Text>
            </View>
            <Switch loading={loading} handlePress={handlePress} state={state}/>
        </View>
    );
}