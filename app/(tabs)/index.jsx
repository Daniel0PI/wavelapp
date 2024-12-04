import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Platform, View, Text, ActivityIndicator, ProgressBar } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [distancia, setDistancia] = useState(null);
  const [loading, setLoading] = useState(true);
  const distanciaMaxima = 200; // Distancia máxima en cm
  useEffect(() => {
    const ipAddress = 'http://192.168.137.58'; // Cambia esta IP a la que obtuviste de tu ESP32

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

  const nivel = distancia !== null ? (distanciaMaxima - distancia) / distanciaMaxima : 0;

  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#', dark: '#fff' }}


      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">BIENVENIDO A WAVEL APP </ThemedText>
        
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        {loading ? (
          <View>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.text}>Verifica la conexion de Wavel...</Text>
          </View>
        ) : (
          <>
          <Text style={styles.text}>Distancia medida: {distancia} cm</Text>
          <View style={styles.progressBarContainer}>
            <ProgressBar
              styleAttr="Horizontal"
              indeterminate={false}
              progress={nivel}
              color="#00f"
            />
          </View>
        </>
      
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