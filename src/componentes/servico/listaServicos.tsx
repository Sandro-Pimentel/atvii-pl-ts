/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaServicos extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="alert alert-info" role="alert">
                    Lista de Serviços
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">Servico 1</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>Servico 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Servico 3</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>Servico 4</a>
                    <a href="#" className="list-group-item list-group-item-action">Servico 5</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>Servico 6</a>
                </div>
            </div>
        )
    }
}