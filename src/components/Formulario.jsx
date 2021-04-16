import React from 'react';

const Formulario = () => {
    return (
        <div className="container">
            <form className="form-group">
                <input placeholder="Nombre" className="form-control mb-3" type="text" name="" id=""/>
                <input placeholder="Edad" className="form-control mb-3" type="text" name="" id=""/>
                <input className="btn btn-info w-100" type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default Formulario;