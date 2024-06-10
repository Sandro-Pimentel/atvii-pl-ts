import { Component } from "react";

type props = {
    tema: string
}

export default class FormAlteracaoCliente extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="alert alert-info" role="alert">
                        Alteração de Cliente
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>CPF</span>
                        <input type="text" className="form-control" placeholder="123.456.789-10" aria-label="CPF" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Nome</span>
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Nome Social</span>
                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </div>
                    <div>
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Escolha a opção do RG</span>
                        <select className="form-select" aria-label="Default select example" aria-describedby="basic-addon1">
                            <option selected value="1">Adicionar</option>
                            <option value="2">Alterar</option>
                        </select>
                    </div>
                    <br />
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>RG</span>
                        <input type="text" className="form-control" placeholder="12.345.678-90" aria-label="RG" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Data de emissão RG</span>
                        <input type="date" className="form-control" aria-label="EmissãoRG" aria-describedby="basic-addon1"/>
                    </div>
                    <div>
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Escolha a opção do Telefone</span>
                        <select className="form-select" aria-label="Default select example" aria-describedby="basic-addon1">
                            <option selected value="1">Adicionar</option>
                            <option value="2">Alterar</option>
                        </select>
                    </div>
                    <br />
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>Telefone</span>
                        <input type="text" className="form-control" placeholder="12 98877-6655" aria-label="Telefone" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Alterar</button>
                    </div>
                </form>
            </div>
        )
    }
}