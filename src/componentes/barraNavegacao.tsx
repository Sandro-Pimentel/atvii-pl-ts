/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    tema: string,
    botoes: string[][],
    titulos: string[],
    seletorView: Function
}

export default class BarraNavegacao extends Component<props>{
    constructor(props: props | Readonly<props>) {
        super(props)
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this)
    }


    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = this.props.botoes.map((valores, index) =>
                // <li class="nav-item dropdown">
                //     <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                //         Dropdown
                //     </a>
                //     <ul class="dropdown-menu">
                //         <li><a class="dropdown-item" href="#">Action</a></li>
                //         <li><a class="dropdown-item" href="#">Another action</a></li>
                //         <li><hr class="dropdown-divider"></li>
                //         <li><a class="dropdown-item" href="#">Something else here</a></li>
                //     </ul>
                // </li>
                <li key={index} className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">{this.props.titulos[index]}</a>
                    <ul className="dropdown-menu">
                        {valores.map((valor) => (
                            <li><a className="dropdown-item" href="#" onClick={(e) => this.props.seletorView(valor, e)}>{valor}</a></li>
                        ))}
                    </ul>
                </li>
            )
            return lista
        }
    }

    render() {
        let tema = this.props.tema
        return (
            <>
                <nav className="navbar navbar-expand-lg" data-bs-theme="light" style={{ backgroundColor: tema, marginBottom: 10 }}>
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">PetLovers</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {this.gerarListaBotoes()}
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}