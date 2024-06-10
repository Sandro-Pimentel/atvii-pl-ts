import { Component } from "react";

type props = {
    tema: string
}

export default class FormRemocaoPet extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="alert alert-info" role="alert">
                        Remoção de Pet
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>CPF do Dono</span>
                        <input type="text" className="form-control" placeholder="456.123.789-10" aria-label="CPFDono" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Remover</button>
                    </div>
                </form>
            </div>
        )
    }
}