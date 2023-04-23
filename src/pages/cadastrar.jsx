import Title from '../components/Title/index';
import { Container, Stack} from '@chakra-ui/react';
import React, { useState } from 'react';

function Cadastrar() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [cvc, setCvc] = useState('');
    const [nomeCartao, setNomeCartao] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [planoEscolhido, setPlanoEscolhido] = useState('');
    const [endereco, setEndereco] = useState('');

    
function handleNomeChange(event) {
    setNome(event.target.value);
}  

function handleTelefoneChange(event) {
    setTelefone(event.target.value);
}

function handleEmailChange(event) {
    setEmail(event.target.value);
}  

function handleCvcChange(event) {
    setCvc(event.target.value);
}

function handleNomeCartaoChange(event) {
    setNomeCartao(event.target.value);
}  

function handleNumeroCartaoChange(event) {
    setNumeroCartao(event.target.value);
}

function handlePlanoEscolhidoChange(event) {
    setPlanoEscolhido(event.target.value);
}  

function handleEnderecoChange(event) {
    setEndereco(event.target.value);
}

function handleSubmit(event) {
    event.preventDefault();
    // enviar dados de cadastro para o servidor aqui
    console.log(`Nome: ${nome}, Telefone: ${telefone}, Email: ${email}, Cvc: ${cvc}, Nome_cartao: ${nomeCartao}, Numero_cartao: ${numeroCartao}, Plano_escolhido: ${planoEscolhido}, Endereco: ${endereco}`);
}

    return (
      <Container maxW="container.xl">
        <Title text={"Mais informações sobre o site"}>
          Cadastrar
        </Title>
  
        
        <Stack className="form-custom">
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={handleNomeChange} />
                </label>
                <br/>
                <label>
                    Telefone:
                    <input type="text" value={telefone} onChange={handleTelefoneChange} />
                </label>
                <br/>
                <label>
                    Email:
                    <input type="text" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                    CVC:
                    <input type="text" value={cvc} onChange={handleCvcChange} />
                </label>
                <br />
                <label>
                    Nome Cartão:
                    <input type="text" value={nomeCartao} onChange={handleNomeCartaoChange} />
                </label>
                <br />
                <label>
                    Número Cartão:
                    <input type="text" value={numeroCartao} onChange={handleNumeroCartaoChange} />
                </label>
                <br/>
                <label>
                    Plano Escolhido:
                    <input type="text" value={planoEscolhido} onChange={handlePlanoEscolhidoChange} />
                </label>
                <br />
                <label>
                    Endereço:
                    <input type="text" value={endereco} onChange={handleEnderecoChange} />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </Stack>
  
      </Container>
    )
  }
  
  export default Cadastrar;
