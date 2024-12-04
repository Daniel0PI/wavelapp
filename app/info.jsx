import React from 'react';
import { View, TouchableOpacity, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

export default function InfoScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('login'); // Redirigir a la ruta de inicio de sesión
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.header}>
        <Image source={require('@/assets/images/wavel.png')} style={styles.logo} />
        <ThemedText style={styles.title}>Wavel APP</ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText style={styles.sectionTitle}>La solución inteligente para monitoreo de agua</ThemedText>
        <ThemedText style={styles.paragraph}>
          Con Wavel APP, tienes el control total del nivel de agua en tus recipientes de hasta 25,000 litros.
          Ideal para hogares, empresas y entornos industriales, nuestro sistema combina tecnología avanzada
          y diseño robusto para brindarte tranquilidad y eficiencia en la gestión del agua.
        </ThemedText>
        <Image source={require('@/assets/images/funcionamiento.png')} style={styles.image} />
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText style={styles.sectionTitle}>Características principales</ThemedText>
        <ThemedText style={styles.paragraph}>
          🌊 *Medición precisa*: Nuestro dispositivo flotante utiliza sensores avanzados para ofrecer lecturas en tiempo real.
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          📊 *Reportes personalizados*: Genera análisis detallados sobre consumo y posibles fugas.
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          🌐 *Conectividad continua*: Sincroniza datos con la Wavel APP para acceder a la información desde cualquier lugar.
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          💧 *Diseño resistente*: Fabricado para soportar condiciones de alta humedad.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText style={styles.sectionTitle}>¿Cómo funciona?</ThemedText>
        <ThemedText style={styles.paragraph}>
          El dispositivo Wavel se mantiene flotando en el agua y mide constantemente la distancia hasta la superficie superior del recipiente.
          Esta información se transmite automáticamente a la Wavel APP, permitiéndote monitorear niveles y alertas desde tu smartphone.
        </ThemedText>
      </ThemedView>

     

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <ThemedText style={styles.buttonText}>Iniciar sesión</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',

  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  title: {

    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    color: '#555',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
    borderRadius: 8,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  developerText: {
    fontSize: 14,
    color: '#666',
  },
  developerNames: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0D47A1',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
  },
});
