// src/components/Producto.js
import React from 'react';

const Producto = ({ producto, agregarAlCarrito }) => {
    return (
        <div className="producto">
            <h2>{producto.nombre}</h2>
            <p>Precio: ${producto.precio}</p>
            <img src={producto.imagen} alt={producto.nombre} style={{ width: "100px", height: "100px" }} />
            <button onClick={() => agregarAlCarrito(producto)}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default Producto;
