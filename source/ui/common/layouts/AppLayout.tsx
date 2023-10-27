import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

import { Colors } from '../../styles/UIColors';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
