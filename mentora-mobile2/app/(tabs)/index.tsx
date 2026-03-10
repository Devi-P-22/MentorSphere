import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (role: 'parent' | 'mentor') => {
    // Simple demo logic, you can replace with real auth
    if (username && password) {
      router.push(role === 'parent' ? '/parent' : '/mentor');
    } else {
      alert('Enter username and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mentora Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login as Parent" onPress={() => handleLogin('parent')} />
      <View style={{ height: 10 }} />
      <Button title="Login as Mentor" onPress={() => handleLogin('mentor')} />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginVertical: 8,
    borderRadius: 6,
  },
});

<Button
  title="Login as Mentor"
  onPress={() => router.push('/mentor')}
/>