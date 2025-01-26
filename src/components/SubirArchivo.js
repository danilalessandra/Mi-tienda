import React, { useState } from 'react';
import { storage } from './firebase'; // Asegúrate de importar Firebase Storage

const SubirArchivo = () => {
  const [archivo, setArchivo] = useState(null);

  // Función para manejar la selección del archivo
  const manejarCambioArchivo = (e) => {
    setArchivo(e.target.files[0]); // Guarda el archivo seleccionado
  };

  // Función para subir el archivo
  const manejarSubida = () => {
    if (!archivo) return;
    
    const storageRef = storage.ref(`uploads/${archivo.name}`);
    const uploadTask = storageRef.put(archivo);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Aquí podrías mostrar el progreso de la subida si quieres
      },
      (error) => {
        console.error('Error al subir archivo:', error);
      },
      () => {
        alert('Archivo subido con éxito');
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={manejarCambioArchivo} />
      <button onClick={manejarSubida}>Subir archivo</button>
    </div>
  );
};

export default SubirArchivo;
