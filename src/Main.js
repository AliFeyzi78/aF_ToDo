import React from 'react';
import {SafeAreaView,  StyleSheet,  ScrollView,  View,  Text, } from 'react-native';

import styles from './styles'

const Main = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
          <View style={styles.container}>
              <View style={styles.banner}>
                  <Text style={styles.todoText}>TODO</Text>
                  <Text style={styles.todoCount}> 10</Text>
              </View>
          </View>
      </SafeAreaView>
    </>
  );
};



export default Main;
