import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>My Todo</Text>
    </View>
  )
}

  const styles = StyleSheet.create({
    header: {
      backgroundColor: '#008cffff',
      width: '100%',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      justifyContent: 'flex-end',
      height: 100,
      paddingVertical: 20,
    },
    title: {
      fontSize: 24,
      color: '#ffffffff',
    },
    });