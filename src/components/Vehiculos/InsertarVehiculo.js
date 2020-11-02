import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
  } from "reactstrap";
  

class InsertarVehiculo extends React.Component {

    state = {
        modalInsertar: false,
        form: {
          id: "",
          modelo: "",
          marca: "",
          color: "",
          patente: "",
        },
      };
    

    mostrarModalInsertar = () => {
        this.setState({
          modalInsertar: true,
        });
      };
    
      cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
      };
    
      insertar= ()=>{
        var valorNuevo= {...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista= this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
      }
        
      render() {
        return (

        <Modal isOpen={this.state.modalInsertar}>
        <ModalHeader>
        <div><h3>Insertar Vehiculo</h3></div>
        </ModalHeader>

        <ModalBody>
            <FormGroup>
            <label>
            Id:
            </label>
            
            <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
            />
            </FormGroup>
            
            <FormGroup>
            <label>
                Marca: 
            </label>
            <input
                className="form-control"
                name="marca"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.marca}
            />
            </FormGroup>
            
            <FormGroup>
            <label>
                Modelo: 
            </label>
            <input
                className="form-control"
                name="modelo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.modelo}
            />
            </FormGroup>

            <FormGroup>
            <label>
                Color: 
            </label>
            <input
                className="form-control"
                name="color"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.color}
            />
            </FormGroup>

            <FormGroup>
            <label>
                Patente: 
            </label>
            <input
                className="form-control"
                name="patente"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.patente}
            />
            </FormGroup>

        </ModalBody>

        <ModalFooter>
            <Button
            color="primary"
            onClick={() => this.insertar()}
            >
            Insertar
            </Button>
            <Button
            className="btn btn-danger"
            onClick={() => this.cerrarModalInsertar()}
            >
            Cancelar
            </Button>
        </ModalFooter>
        </Modal>
         
         );
}
}

export default InsertarVehiculo;