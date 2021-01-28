import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    View,
    ActivityIndicator
} from 'react-native';

const onImage =  require('./../../../assets/on.png');
const offImage =  require('./../../../assets/off.png');

interface ISwitchProps {
    state: boolean;
    loading: boolean,
    handlePress: () => void
};

import styles from './switch.styles';

export default function Switch({ handlePress, state, loading }: ISwitchProps ) {
    const imageStyles =  StyleSheet.flatten([
        {
            opacity: loading ? 0.1 : 1
        }
    ]);
    const loadingStyles = StyleSheet.flatten(loading ? [styles.loading] : []);
    const imageUrl = state ? onImage : offImage;

    return (
      <View style={styles.root}>
          <TouchableOpacity onPress={handlePress} style={styles.switch}>
              <ImageBackground
                  source={imageUrl}
                  style={styles.imageBackground}
                  imageStyle={imageStyles}
              />
          </TouchableOpacity>
          {loading && <View style={loadingStyles}>
              <ActivityIndicator animating={loading} size='large'/>
          </View> }
      </View>
    );
}

