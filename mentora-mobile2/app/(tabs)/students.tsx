import { StyleSheet, View, Text } from 'react-native';

export default function StudentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Students List</Text>
      <Text>Student 1</Text>
      <Text>Student 2</Text>
      <Text>Student 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 8 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});