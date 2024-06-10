/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ProdutosMaisConsumidosRaca extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="alert alert-info" role="alert">
                    Produtos Mais Consumidos por Raça
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">1° - Produto 1 - 7 unidades vendidas</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>2° - Produto 2 - 6 unidades vendidas</a>
                    <a href="#" className="list-group-item list-group-item-action">3° - Produto 3 - 5 unidades vendidas</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>4° - Produto 4 - 4 unidades vendidas</a>
                    <a href="#" className="list-group-item list-group-item-action">5° - Produto 5 - 3 unidades vendidas</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>6° - Produto 6 - 2 unidades vendidas</a>
                </div>
            </div>
        )
    }
}