import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./cliente/listaClientes";
import FormCadastroCliente from "./cliente/formCadastroCliente";
import FormAlteracaoCliente from "./cliente/formAlteracaoCliente";
import FormRemocaoCliente from "./cliente/formRemocaoCliente";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastro de Cliente', 'Alteração de Cliente', 'Remoção de Cliente']} />
        if(this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Cadastro de Cliente'){
            return (
                <>
                    {barraNavegacao}
                    <FormCadastroCliente tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Alteração de Cliente'){
            return(
                <>
                    {barraNavegacao}
                    <FormAlteracaoCliente tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Remoção de Cliente'){
            return(
                <>
                    {barraNavegacao}
                    <FormRemocaoCliente tema="#e3f2fd" />
                </>
            )
        }
    }
}