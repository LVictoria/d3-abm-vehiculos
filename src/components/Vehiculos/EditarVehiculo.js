import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
  } from "reactstrap";
  
class EditarVehiculo extends React.Component {
    
    mostrarModalActualizar = (dato) => {
        this.setState({
          form: dato,
          modalActualizar: true,
        });
      };
    
      cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
      };
    
    render() {
        
        return (
            <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
            <div><h3>Editar Registro</h3></div>
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
                onClick={() => this.editar(this.state.form)}
            >
                Editar
            </Button>
            <Button
                color="danger"
                onClick={() => this.cerrarModalActualizar()}
            >
                Cancelar
            </Button>
            </ModalFooter>
            </Modal>
    
    );
    }
    }
    export default EditarVehiculo;