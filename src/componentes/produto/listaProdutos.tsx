/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaProdutos extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="alert alert-info" role="alert">
                    Lista de Produtos
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">Produto 1</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>Produto 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 3</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>Produto 4</a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 5</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>Produto 6</a>
                </div>
            </div>
        )
    }
}