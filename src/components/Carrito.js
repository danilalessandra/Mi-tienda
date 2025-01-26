// src/components/Carrito.js
import React from 'react';

const Carrito = ({ carrito }) => {
    return (
        <div>
            <h2>Carrito de Compras</h2>
            {carrito.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <ul>
                    {carrito.map((producto, index) => (
                        <li key={index}>{producto.nombre} - ${producto.precio}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Carrito;
