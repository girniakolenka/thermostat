import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    View,
    ActivityIndicator
} from 'react-native';

const switchSprite =  require('./../../../assets/switch-sprite.png');

interface ISwitchProps {
    state: boolean;
    loading: boolean,
    handlePress: () => void
};

const ON_STATE = -80;
const OFF_STATE = 0;

import styles from './switch.styles';

export default function Switch({ handlePress, state, loading }: ISwitchProps ) {
    const imageStyles =  StyleSheet.flatten([
        styles.imageStyles,
        {
            top: state ? ON_STATE : OFF_STATE,
            opacity: loading ? 0.1 : 1
        }
    ]);
    const loadingStyles = StyleSheet.flatten(loading ? [styles.loading] : []);

    return (
      <View style={styles.root}>
          <TouchableOpacity onPress={handlePress}>
              <ImageBackground
                  source={switchSprite}
                  style={styles.imageBackground}
                  imageStyle={imageStyles}
              />
          </TouchableOpacity>
          <View style={loadingStyles}>
              <ActivityIndicator animating={loading} size='large'/>
          </View>
      </View>
    );
}

