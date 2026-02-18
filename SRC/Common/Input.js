
import React from 'react';
import { View, TextInput,StyleSheet } from 'react-native';
import fontStyles from './fontStyles';

export const CustomInput = ({ label, value, secureTextEntry, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={label}
        placeholderTextColor="#aaa"
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        autoCapitalize="none"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 22,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#c8e6c9',
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#000',
    ...fontStyles.Montserrat_Regular
  },
});
