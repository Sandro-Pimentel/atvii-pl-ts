/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ServicosMaisConsumidosTipo extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <div className="alert alert-info" role="alert">
                    Serviços Mais Consumidos por Tipo
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">1° - Serviço 1 - 7 unidades vendidas</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>2° - Serviço 2 - 6 unidades vendidas</a>
                    <a href="#" className="list-group-item list-group-item-action">3° - Serviço 3 - 5 unidades vendidas</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>4° - Serviço 4 - 4 unidades vendidas</a>
                    <a href="#" className="list-group-item list-group-item-action">5° - Serviço 5 - 3 unidades vendidas</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>6° - Serviço 6 - 2 unidades vendidas</a>
                </div>
            </div>
        )
    }
}