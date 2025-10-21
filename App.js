import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [name, setName] = useState('Abdulla Almarzooq');
  const [age, setAge] = useState('32');


  return (
    <View style={styles.container}>
      <Text>Enter your name:</Text>
      <TextInput style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 5 }}
       placeholder='Ahmed'
       onChangeText={text => setName(text)} />
      <Text>Enter your age:</Text>
      <TextInput style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 5 }}
       placeholder='35'
       onChangeText={text => setAge(text)} 
       keyboardType='numeric'/>
      <Text>Your name is: {name}</Text>
      <Text>Your age is: {age}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
