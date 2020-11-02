import React from "react";
import EditarVehiculo  from './EditarVehiculo'
import InsertarVehiculo from './InsertarVehiculo'

import "./Vehiculos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
} from "reactstrap";

const data = [
  { id: 1, marca: "VW", modelo: "Suran", color:"Rojo", patente:"ABC123" },
];

class Vehiculos extends React.Component {
 
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    modalEliminar:false,
    form: {
      id: "",
      modelo: "",
      marca: "",
      color: "",
      patente: "",
    },
  };
  
  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <Container>
        <br />
          <Button color="success" onClick={this.state.modalInsertar = true}>Crear</Button>
          <InsertarVehiculo mostrarModalInsertar={this.state.modalInsertar} />
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Color</th>
                <th>Patente</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.modelo}</td>
                  <td>{dato.marca}</td>
                  <td>{dato.color}</td>
                  <td>{dato.patente}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.EditarVehiculo.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}

                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}
export default Vehiculos;
