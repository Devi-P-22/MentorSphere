import { StyleSheet, View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ParentScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parent Dashboard</Text>
      <Button title="View Students" onPress={() => router.push('/students')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});