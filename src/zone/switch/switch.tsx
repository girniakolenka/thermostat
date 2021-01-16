import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

const switchSprite =  require('./../../../assets/switch-sprite.png');

interface ISwitchProps {
    state: boolean;
    handlePress: () => void
};

const ON_STATE = -80;
const OFF_STATE = 0;

import styles from './switch.styles';

export default function Switch({ handlePress, state }: ISwitchProps ) {
    const imageStyles =  StyleSheet.flatten([
        styles.imageStyles,
        {
            top: state ? ON_STATE : OFF_STATE
        }
    ]);

    return (
          <TouchableOpacity style={styles.root} onPress={handlePress}>
              <ImageBackground
                  source={switchSprite}
                  style={styles.imageBackground}
                  imageStyle={imageStyles}
              />
          </TouchableOpacity>
    );
}

