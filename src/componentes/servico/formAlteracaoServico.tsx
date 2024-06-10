import { Component } from "react";

type props = {
    tema: string
}

export default class FormAlteracaoServico extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="alert alert-info" role="alert">
                        Alteração de Serviço
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Código</span>
                        <input type="text" className="form-control" placeholder="472" aria-label="Codigo" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Nome</span>
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Preço</span>
                        <input type="number" className="form-control" placeholder="15.99" aria-label="Preco" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Alterar</button>
                    </div>
                </form>
            </div>
        )
    }
}