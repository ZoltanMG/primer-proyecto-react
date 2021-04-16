import React, { Fragment } from 'react';

function Hola(){
    const saludo = 'Zoltán'
    return(
        <Fragment>
            <h2>
                Primer componente Hola {saludo}
            </h2>
            <p>Segundo texto</p>
        </Fragment>
    );
}

export default Hola;