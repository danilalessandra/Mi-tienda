import React, { useState } from 'react';
import { auth, db } from '../firebase/firebaseConfig';  // Asegúrate de importar tanto Firebase Auth como Firestore
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Esquema de validación con Yup
const validationSchema = Yup.object({
  nombre: Yup.string().required('El nombre es obligatorio'),
  correo: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo es obligatorio'),
  contraseña: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
});

const FormularioAutenticacion = () => {
  const [error, setError] = useState('');

  const handleSubmit = async (values) => {
    try {
      // Registro en Firebase Auth
      const userCredential = await auth.createUserWithEmailAndPassword(values.correo, values.contraseña);
      const user = userCredential.user;

      // Guardar datos en Firestore
      await db.collection('usuarios').doc(user.uid).set({
        nombre: values.nombre,
        correo: values.correo,
      });

      alert('Usuario registrado con éxito');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h2>Formulario de Registro</h2>
      {error && <p className="text-danger">{error}</p>}

      <Formik
        initialValues={{ nombre: '', correo: '', contraseña: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre:</label>
            <Field
              type="text"
              className="form-control"
              name="nombre"
              placeholder="Tu nombre"
            />
            <ErrorMessage name="nombre" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo:</label>
            <Field
              type="email"
              className="form-control"
              name="correo"
              placeholder="Tu correo"
            />
            <ErrorMessage name="correo" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="contraseña" className="form-label">Contraseña:</label>
            <Field
              type="password"
              className="form-control"
              name="contraseña"
              placeholder="Tu contraseña"
            />
            <ErrorMessage name="contraseña" component="div" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-primary">Registrar</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormularioAutenticacion;
















































































 





















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































