import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#535353ff" />
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#dbdbdbff',
    borderWidth: 1,
    borderRadius: 15,
    alignContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});
