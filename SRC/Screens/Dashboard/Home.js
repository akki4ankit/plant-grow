import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Header from '../../Component/Header';
const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <Header
        value={search}
        onChangeText={setSearch}
        onCartPress={() => console.log('Cart pressed')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default Home;
