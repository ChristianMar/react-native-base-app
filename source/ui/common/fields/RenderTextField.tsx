import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Colors } from '../../styles/UIColors';

interface renderTextField {
  input: object;
  label?: string;
  containerStyle?: object;
  inputStyle?: object;
  labelStyle?: object;
  helperTextStyle?: object;
  helperText?: string;
  meta: {
    touched?: boolean;
    error?: string;
  };
}

export const RenderTextField = ({
  input,
  label,
  containerStyle,
  inputStyle,
  labelStyle,
  helperTextStyle,
  helperText,
  meta: { touched, error },
  ...props
}: renderTextField) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <Text
        style={[
          styles.label,
          labelStyle,
          error && touched ? styles.labelInvalid : {}
        ]}
      >
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          inputStyle,
          error && touched ? styles.inputInvalid : {}
        ]}
        placeholder={label}
        {...input}
        {...props}
      />
      {error && touched ? (
        <Text style={styles.error}>{error}</Text>
      ) : helperText ? (
        <Text style={[styles.helper, helperTextStyle]}>{helperText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8
  },
  label: {
    marginBottom: 4,
    color: Colors.darkGrey,
    fontSize: 14,
    fontWeight: '500'
  },
  labelInvalid: {
    color: Colors.error
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.lightGrey,
    borderRadius: 4,
    fontSize: 16
  },
  inputInvalid: {
    backgroundColor: Colors.lightError
  },
  error: {
    fontSize: 12,
    color: Colors.error,
    marginTop: 2
  },
  helper: {
    fontSize: 12,
    color: Colors.darkGrey,
    marginTop: 2
  }
});
