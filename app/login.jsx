import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación
    Alert.alert('Login', `Username: ${username}, Password: ${password}`);
    navigation.navigate('(tabs)'); // Redirigir a la ruta principal
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Inicia Sesion </ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="¿Qué es Wavel?"
        onPress={() => navigation.navigate('info')}
        color="#888"
      />
      <ThemedText style={styles.link} onPress={() => navigation.navigate('Register')}>
        Registrarme
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    color: '#000',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  link: {
    color: 'black',
    textAlign: 'center',
    marginTop: 16,
  },
});