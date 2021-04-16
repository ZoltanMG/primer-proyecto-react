import React, { useState } from 'react';

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')
    const [estado, setEstado] = useState([])

    const validar = (event) => {
        event.preventDefault()
        console.log('pulsado el boton');
        if (!nombre.trim()) {
            console.log('nombre esta vacio');
            return
        }
        if (!edad.trim()) {
            console.log('Edad esta vacio');
            return
        }
    }

    return (
        <div className="container">
            <form onSubmit={validar} className="form-group">
                <input
                    placeholder="Nombre"
                    className="form-control mb-3"
                    type="text"
                    onChange={(e) => { setNombre(e.target.value) }}
                />
                <input
                    placeholder="Edad"
                    className="form-control mb-3"
                    type="text"
                    onChange={(e) => { setEdad(e.target.value) }}
                />
                <input
                    className="btn btn-info w-100"
                    type="submit"
                    value="Enviar"
                />
            </form>
        </div>
    )
}

export default Formulario;