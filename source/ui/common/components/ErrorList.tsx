import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { IErrorsType } from '../../mocks/errorsType';
import { Colors } from '../../styles/UIColors';

export const ErrorList = ({ errors }: { errors?: IErrorsType }) => {
  return (
    <View style={styles.errorWrapper}>
      {errors ? <Text style={styles.errorText}>{errors.message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  errorWrapper: {
    marginBottom: 10
  },
  errorText: {
    fontWeight: '600',
    fontSize: 13,
    color: Colors.error,
    marginBottom: 5,
    textAlign: 'left'
  }
});
