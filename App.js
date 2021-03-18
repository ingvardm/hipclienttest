import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import List from './src/components/List';

const App = () => {
  return <SafeAreaView style={styles.wrapper}>
      <List/>
    </SafeAreaView>
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default App;
