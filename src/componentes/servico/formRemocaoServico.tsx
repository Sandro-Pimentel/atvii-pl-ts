import { Component } from "react";

type props = {
    tema: string
}

export default class FormRemocaoServico extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="alert alert-info" role="alert">
                        Remoção de Serviço
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Código</span>
                        <input type="text" className="form-control" placeholder="472" aria-label="Codigo" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Remover</button>
                    </div>
                </form>
            </div>
        )
    }
}