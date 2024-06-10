import { Component } from "react";

type props = {
    tema: string
}

export default class FormAdicaoServico extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="alert alert-info" role="alert">
                        Adição de Serviço
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>CPF</span>
                        <input type="text" className="form-control" placeholder="123.456.789-10" aria-label="CPF" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Nome do Pet</span>
                        <input type="text" className="form-control" placeholder="Nome do Pet" aria-label="NomePet" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Código</span>
                        <input type="text" className="form-control" placeholder="Código" aria-label="Código" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Comprar Serviço</button>
                    </div>
                </form>
            </div>
        )
    }
}