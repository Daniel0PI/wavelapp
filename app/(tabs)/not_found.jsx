import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Platform, View, Text, ActivityIndicator } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [distancia, setDistancia] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ipAddress = 'http://192.168.1.114'; // Cambia esta IP a la que obtuviste de tu ESP32

    const fetchDistancia = async () => {
      try {
        const response = await fetch(ipAddress);
        const data = await response.text();
        setDistancia(data); // Guardar la respuesta en el estado
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Termina de cargar
      }
    };

    fetchDistancia();
    const interval = setInterval(fetchDistancia, 1000); // Actualiza cada segundo
    return () => clearInterval(interval);
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}


      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">BIENVENIDO A WAVEL APP para medir el nivel de agua!</ThemedText>
        
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        {loading ? (
          <View>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.text}>Verifica la conexion de Wavel...</Text>
          </View>
        ) : (
          <Text style={styles.text}>Distancia medida: {distancia} cm</Text>
        )}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});