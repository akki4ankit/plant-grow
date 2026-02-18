import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';

const Header = ({
  value,
  onChangeText,
  onCartPress,
  placeholder = 'Search plants...',
}) => {
  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchBox}>
        <Image source={require('../Assets/Images/search.png')} style={styles.searchIcon} />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>

      {/* Cart Icon */}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={onCartPress}
        activeOpacity={0.7}
      >
       <Image source={require('../Assets/Images/cart.png')} style={styles.searchIcon} tintColor="#000"/>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2e7d32', // green theme 🌱
    paddingTop: Platform.OS === 'ios' ? 55 : 50,
    paddingHorizontal: 16,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchBox: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    paddingLeft: 8,
    color: '#333',
  },

  cartButton: {
    marginLeft: 14,
    height: 45,
    width: 45,
    borderRadius:30,
    // backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
});

export default Header;
