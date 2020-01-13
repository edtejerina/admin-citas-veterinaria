import React, {Component, Fragment} from 'react';
import './style.css';
import Header from './components/Header';
import NewAppoinment from './components/NewAppointment';
import AppoinmentList from './components/AppointmentList';


class App extends Component {
  state = { 
    citas : []
  }

  //Cuando la aplicación carga
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    
    if(citasLS){
      this.setState({
        citas : JSON.parse(citasLS)
      })
    }
  }

  //Cuando eliminamos o agregamos una nueva cita, sufre cambios
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  //Crear cita
  crearNuevaCita = datos => {

    //Copiar state actual y agregarle la nueva cita
    const citas = [...this.state.citas, datos];

    //Agregar el nuevo state
    this.setState({
      citas : citas
    });
  }

  //Eliminar cita
  eliminarCita = id => {

    //Generar copia del state
    const citasActuales = [...this.state.citas];

    //Filtrar citas que sean distinto al elemento con el @ID pasado por parametro
    const citas = citasActuales.filter(cita => cita.id !== id);

    //Actualizar state con las citas, esta vez sin el elemento con el @ID, quedando asi eliminado
    this.setState({
      citas : [...citas]
    })
  }
  render() { 
    return (
        <Fragment>
          <Header title = 'Administrador de veterinaria 🐶'/>
          <NewAppoinment crearNuevaCita = { this.crearNuevaCita } />
          <AppoinmentList 
            citas = { this.state.citas }
            eliminarCita = { this.eliminarCita }
          />
        </Fragment>
    );
  }
}
 
export default App;