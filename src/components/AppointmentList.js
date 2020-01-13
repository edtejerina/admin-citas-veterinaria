import React from 'react';
import Appoinment from './Appoinment';
import PropTypes from 'prop-types';

function AppoinmentList(props){

    //Imprimir mensaje en base a si hay citas o no
    const mensaje = Object.keys(props.citas).length === 0 ? 'No hay citas agendadas' : 'Citas Agendadas';
    return(
        <div className='container'>
            <div className='box-container appoinment-list'>
                <h2 className='title'>{mensaje}</h2>
                <div className='appoinment-container'>
                    { props.citas.map(cita => (
                        <Appoinment
                            key = { cita.id }
                            cita = { cita }
                            eliminarCita = { props.eliminarCita }
                        />
                    )) }
                </div>
            </div>
        </div>
    )
}

AppoinmentList.propTypes = {
    citas : PropTypes.array.isRequired,
    eliminarCita : PropTypes.func.isRequired
}

export default AppoinmentList;