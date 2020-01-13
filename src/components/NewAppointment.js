import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateInicial = {
    cita : {
        mascota : '',
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : '',
    },
    error : false
}

class NewAppoinment extends Component {
    state = {  
        cita : {
            mascota : '',
            propietario : '',
            fecha : '',
            hora : '',
            sintomas : '',
        },
        error : false
    } 
    //Leyendo los datos del formulario
    handleChange = e => {
        this.setState({
            cita : {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        });
    }
    //Validando una vez se envide el formulario
    handleSubmit = e => {
        //Previene el submit por defecto
        e.preventDefault();

        //Extrae valores del state y los gurada como una variable
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

        //Validando que el formulario no esté vacio
        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
            this.setState({
                error : true
            });
            return; //fin de la ejecucion
        }
        //Generando un nuevo objecto de citas con el id
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        //Agregando cita al state de App
        this.props.crearNuevaCita(nuevaCita);
        
        //Reseteando el state
        this.setState({...stateInicial});


    }
    render() { 
        const error = this.state.error;
        return (
            
            <div className='container'>
                <div className='box-container'>
                    <h2 className='title'>Llena el formulario para crear una nueva cita</h2>
                { error ?
                    <div className='alert'>
                        <p>* Debes ingresar todos los datos</p>
                    </div>
                : null }
                    <form onSubmit = { this.handleSubmit }>
                        <div className='input-form'>
                            <label>Nombre Mascota</label>
                            <input
                                type = 'text'
                                name = 'mascota'
                                placeholder = 'Nombre Mascota'
                                onChange = { this.handleChange }
                                value = { this.state.cita.mascota }
                            />
                        </div>
                        <div className='input-form'>
                            <label>Nombre Dueño</label>
                            <input
                                type='text'
                                name='propietario'
                                placeholder='Nombre Dueño'
                                onChange = { this.handleChange }
                                value = { this.state.cita.propietario }
                            />
                        </div>
                        <div className='input-form'>
                            <label>Fecha</label>
                            <input
                                type='date'
                                name='fecha'
                                onChange = { this.handleChange }
                                value = { this.state.cita.fecha }
                            />
                        </div>
                        <div className='input-form'>
                            <label>Hora</label>
                            <input
                                type='time'
                                name='hora'
                                onChange = { this.handleChange }
                                value = { this.state.cita.hora }
                            />
                        </div>
                        <div className='input-form'>
                            <label>Sintomas</label>
                            <textarea
                                type=''
                                name='sintomas'
                                placeholder='Sintomas'
                                onChange = { this.handleChange }
                                value = { this.state.cita.sintomas }
                            />
                        </div>
                        <div>
                            <input
                                type='submit'
                                className='btn'
                                value='Agregar cita'
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

NewAppoinment.propTypes = {
    crearNuevaCita : PropTypes.func.isRequired
}
 
export default NewAppoinment;