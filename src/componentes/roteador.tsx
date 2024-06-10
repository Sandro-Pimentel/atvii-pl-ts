import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaClientes from "./cliente/listaClientes";
import FormCadastroCliente from "./cliente/formCadastroCliente";
import FormAlteracaoCliente from "./cliente/formAlteracaoCliente";
import FormRemocaoCliente from "./cliente/formRemocaoCliente";
import ListaProdutos from "./produto/listaProdutos";
import FormCadastroProduto from "./produto/formCadastroProduto";
import FormAlteracaoProduto from "./produto/formAlteracaoProduto";
import FormRemocaoProduto from "./produto/formRemocaoProduto";
import ListaServicos from "./servico/listaServicos";
import FormCadastroServico from "./servico/formCadastroServico";
import FormAlteracaoServico from "./servico/formAlteracaoServico";
import FormRemocaoServico from "./servico/formRemocaoServico";
import ListaPets from "./pet/listaPets";
import FormCadastroPet from "./pet/formCadastroPet";
import FormAlteracaoPet from "./pet/formAlteracaoPet";
import FormRemocaoPet from "./pet/formRemocaoPet";
import FormAdicaoProduto from "./compra/formAdicaoProduto";
import FormAdicaoServico from "./compra/formAdicaoServico";
import ProdutosMaisConsumidos from "./listagens/produtosMaisConsumidos";
import ServicosMaisConsumidos from "./listagens/servicosMaisConsumidos";
import ProdutosMaisConsumidosTipo from "./listagens/produtosMaisConsumidosTipo";
import ServicosMaisConsumidosTipo from "./listagens/servicosMaisConsumidosTipo";
import ProdutosMaisConsumidosRaca from "./listagens/produtosMaisConsumidosRaca";
import ServicosMaisConsumidosRaca from "./listagens/servicosMaisConsumidosRaca";
import ClientesMaisConsumiramQtd from "./listagens/clientesMaisConsumiramQtd";
import ClientesMaisConsumiramValor from "./listagens/clientesMaisConsumiramValor";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Listagem de Clientes'
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
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" titulos={["Cliente", "Produto", "Serviço", "Pet", "Compra", "Listagens"]} botoes={[['Listagem de Clientes', 'Cadastro de Cliente', 'Alteração de Cliente', 'Remoção de Cliente'], ['Listagem de Produtos', 'Cadastro de Produto', 'Alteração de Produto', 'Remoção de Produto'], ['Listagem de Serviços', 'Cadastro de Serviço', 'Alteração de Serviço', 'Remoção de Serviço'], ['Listagem de Pets', 'Cadastro de Pet', 'Alteração de Pet', 'Remoção de Pet'], ['Adição de Produto', 'Adição de Serviço'], ['Clientes que mais consumiram(quantidade)', 'Clientes que mais consumiram(valor)','Produtos Mais Consumidos', 'Serviços Mais Consumidos','Produtos Mais Consumidos(tipo de pet)', 'Serviços Mais Consumidos(tipo de pet)','Produtos Mais Consumidos(raça de pet)', 'Serviços Mais Consumidos(raça de pet)']]} />
        if(this.state.tela === 'Listagem de Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaClientes tema="#e3f2fd" />
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
        } else if(this.state.tela === 'Listagem de Produtos'){
            return(
                <>
                    {barraNavegacao}
                    <ListaProdutos tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Cadastro de Produto'){
            return(
                <>
                    {barraNavegacao}
                    <FormCadastroProduto tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Alteração de Produto'){
            return(
                <>
                    {barraNavegacao}
                    <FormAlteracaoProduto tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Remoção de Produto'){
            return(
                <>
                    {barraNavegacao}
                    <FormRemocaoProduto tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Listagem de Serviços'){
            return(
                <>
                    {barraNavegacao}
                    <ListaServicos tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Cadastro de Serviço'){
            return(
                <>
                    {barraNavegacao}
                    <FormCadastroServico tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Alteração de Serviço'){
            return(
                <>
                    {barraNavegacao}
                    <FormAlteracaoServico tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Remoção de Serviço'){
            return(
                <>
                    {barraNavegacao}
                    <FormRemocaoServico tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Listagem de Pets'){
            return(
                <>
                    {barraNavegacao}
                    <ListaPets tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Cadastro de Pet'){
            return(
                <>
                    {barraNavegacao}
                    <FormCadastroPet tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Alteração de Pet'){
            return(
                <>
                    {barraNavegacao}
                    <FormAlteracaoPet tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Remoção de Pet'){
            return(
                <>
                    {barraNavegacao}
                    <FormRemocaoPet tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Adição de Produto'){
            return(
                <>
                    {barraNavegacao}
                    <FormAdicaoProduto tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Adição de Serviço'){
            return(
                <>
                    {barraNavegacao}
                    <FormAdicaoServico tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Clientes que mais consumiram(quantidade)'){
            return(
                <>
                    {barraNavegacao}
                    <ClientesMaisConsumiramQtd tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Clientes que mais consumiram(valor)'){
            return(
                <>
                    {barraNavegacao}
                    <ClientesMaisConsumiramValor tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Produtos Mais Consumidos'){
            return(
                <>
                    {barraNavegacao}
                    <ProdutosMaisConsumidos tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Serviços Mais Consumidos'){
            return(
                <>
                    {barraNavegacao}
                    <ServicosMaisConsumidos tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Produtos Mais Consumidos(tipo de pet)'){
            return(
                <>
                    {barraNavegacao}
                    <ProdutosMaisConsumidosTipo tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Serviços Mais Consumidos(tipo de pet)'){
            return(
                <>
                    {barraNavegacao}
                    <ServicosMaisConsumidosTipo tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Produtos Mais Consumidos(raça de pet)'){
            return(
                <>
                    {barraNavegacao}
                    <ProdutosMaisConsumidosRaca tema="#e3f2fd" />
                </>
            )
        } else if(this.state.tela === 'Serviços Mais Consumidos(raça de pet)'){
            return(
                <>
                    {barraNavegacao}
                    <ServicosMaisConsumidosRaca tema="#e3f2fd" />
                </>
            )
        }
    }
}