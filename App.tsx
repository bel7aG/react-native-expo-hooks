import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'components';

export default () => {
  return (
    <View style={styles.container}>
      <Header searchBar rounded>
        <Text>Open up App.tsx to start working on your app!</Text>
      </Header>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
