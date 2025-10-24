import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function AddToDo({ submitHandler }) {

    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New Todo'
                onChangeText={changeHandler}
                value={text}
            />
            <Button title='Add Todo' onPress={() => submitHandler(text)} />
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});
