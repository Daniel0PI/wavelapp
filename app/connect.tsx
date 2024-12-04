import React from 'react';
import './connect.css';

const BluetoothSetup: React.FC = () => {
  return (
    <div className="bluetooth-setup">
      <h1>Configurar Dispositivo</h1>
      <p>Para configurar su dispositivo, por favor habilite Bluetooth en su dispositivo.</p>
      <button className="enable-bluetooth-button">Habilitar Bluetooth</button>
    </div>
  );
};

export default BluetoothSetup;
