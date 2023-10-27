import React, { ReactNode } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

import { Colors } from '../../styles/UIColors';

interface centeredWidget {
  title?: ReactNode | string;
  loading?: boolean;
  children: ReactNode;
  copyright?: string;
}

export const CenteredWidget = ({
  title,
  loading,
  children,
  copyright
}: centeredWidget) => {
  return (
    <View style={styles.logWrapper}>
      <View style={styles.logWidget}>
        {title ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        ) : null}
        {loading ? (
          <ActivityIndicator size="large" color={Colors.primaryColor} />
        ) : (
          children
        )}
      </View>
      {copyright ? (
        <View style={styles.copyrightContainer}>
          <Text style={styles.copyright}>{copyright}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  logWrapper: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 25,
    paddingRight: 25
  },
  logWidget: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    elevation: 15,
    shadowColor: Colors.black,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4
  },
  titleContainer: { marginBottom: 16 },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center'
  },
  copyrightContainer: {
    marginTop: 20,
    opacity: 0.6
  },
  copyright: {
    textAlign: 'center'
  }
});
