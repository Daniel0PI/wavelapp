import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const LoadScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {

    const timer = setTimeout(() => {
      navigation.navigate('login' as never); // Redirigir a la página de Info después de 3 segundos
    }, 3000);

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, [navigation]);

  return (
    <View style={[styles.background, { backgroundColor: '#fff' }]}>
      <View style={styles.overlay}>
        <Image
          source={require('@/assets/images/wavel.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Cargando...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 24,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

export default LoadScreen;