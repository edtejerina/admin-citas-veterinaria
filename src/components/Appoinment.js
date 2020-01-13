import React from 'react';
import PropTypes from 'prop-types';

function Appoinment({cita, eliminarCita}){
    return(
        <div className='appoinment'>
            <h3>{ cita.mascota }</h3>
            <p><span>Nombre Dueño:</span> { cita.propietario }</p>
            <p><span>Fecha:</span> { cita.fecha }</p>
            <p><span>Hora:</span> { cita.hora }</p>
            <p><span>sintomas:</span> { cita.sintomas }</p>
            <button className='btn btn-delete' onClick = { () => eliminarCita(cita.id) }>Eliminar Cita</button>
        </div>
    )
}

Appoinment.propTypes = {
    cita : PropTypes.object.isRequired,
    eliminarCita : PropTypes.func.isRequired
}

export default Appoinment;