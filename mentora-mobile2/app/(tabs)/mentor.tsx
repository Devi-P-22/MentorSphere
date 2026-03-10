import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function MentorScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mentor Dashboard</Text>

      <Text style={styles.subtitle}>
        Mentor functionality goes here.
      </Text>

      {/* Example buttons for demo */}
      <Button
        title="View My Students"
        onPress={() => alert('Student list will appear here')}
      />
      <Button
        title="Add Lesson"
        onPress={() => alert('Add Lesson functionality placeholder')}
      />
      <Button
        title="Back to Home"
        onPress={() => router.push('/')}
        color="#555"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
  },
});