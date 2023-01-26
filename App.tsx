import React from 'react';

import {StyleSheet, View} from 'react-native';
import {LoginScreen} from './screens/LoginScreen';

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b1d5ca',
  },
});
