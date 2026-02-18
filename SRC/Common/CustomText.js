import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({
  children,
  size = 14,
  color = '#000',
  weight = '400',
  align = 'left',
  style,
  numberOfLines,
}) => {
  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: size,
          color,
          fontWeight: weight,
          textAlign: align,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});


export default CustomText;
