/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ClientesMaisConsumiramQtd extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <>
                <div className="container-fluid">
                    <div className="alert alert-info" role="alert">
                        Clientes que mais consumiram em quantidade 
                    </div>
                    <div className="list-group"> 
                        <a href="#" className="list-group-item list-group-item-action">1° - Cliente 1 - 7 unidades vendidas</a>
                        <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>2° - Cliente 2 - 6 unidades vendidas</a>
                        <a href="#" className="list-group-item list-group-item-action">3° - Cliente 3 - 5 unidades vendidas</a>
                        <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>4° - Cliente 4 - 4 unidades vendidas</a>
                        <a href="#" className="list-group-item list-group-item-action">5° - Cliente 5 - 3 unidades vendidas</a>
                        <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>6° - Cliente 6 - 2 unidades vendidas</a>
                    </div>
                </div>
            </>
        )
    }
}