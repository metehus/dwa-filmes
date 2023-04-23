import Title from '../components/Title/index';
import { InputLeftElement, Input, InputGroup, Radio, RadioGroup, Center, Text, Grid, GridItem, Button, Container, Stack} from '@chakra-ui/react';
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
    setPlanoEscolhido(event.target.value.slice(0,20));
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
                <Grid 
                        
                        templateRows='repeat(2, 1fr)'
                        templateColumns='repeat(4,1fr)'
                        gap={3}
                    >
                        <GridItem h='400px' rowSpace={3} colSpan={2}>
                            <Text as='b' ><Center h='50px'>Dados Pessoais</Center></Text>
                            <Grid 
                            h='50px'
                            templateRows='repeat(2, 1fr)'
                            templateColumns='repeat(2,1fr)'
                            gap={4}
                            >
                                <GridItem rowSpace={1} colSpan={2}>
                                    <label>
                                        Nome:
                                        <Stack spacing={4}>
                                        
                                            <InputGroup>
                                            
                                                <Input type={'text'} value={nome} onChange={handleNomeChange} required />
                                            </InputGroup>
                                        </Stack>
                                    </label>
                                </GridItem>
                                <GridItem  rowSpace={1} colSpan={2}>
                                    <label>
                                        Telefone:
                                        <Stack spacing={4}>
                                            <InputGroup>
                                            <InputLeftElement 
                                                poiterEvents='none'
                                                children='	&#8481;' color='gray.300'/>
                                                <Input type={'tel'} value={telefone} onChange={handleTelefoneChange} required />
                                            </InputGroup>
                                        </Stack>
                                    </label>
                                </GridItem>
                                <GridItem  rowSpace={1} colSpan={2}>
                                    <label>
                                        Email:
                                        <Stack spacing={4}>
                                            <InputGroup>
                                                <Input type={'email'} value={email} onChange={handleEmailChange} required />
                                            </InputGroup>
                                        </Stack>
                                    </label>
                                </GridItem>
                                <GridItem  rowSpace={1} colSpan={2}>
                                    <label>
                                        Endereço:
                                        <Stack spacing={4}>
                                            <InputGroup>
                                                <Input type={'text'} value={endereco} onChange={handleEnderecoChange} required />
                                            </InputGroup>
                                        </Stack>
                                    </label>
                                </GridItem>
                            </Grid>
                        </GridItem>
                        <GridItem rowSpace={2} colSpan={2}>
                        <Text as='b' ><Center h='50px'>Dados do Cartão</Center></Text>
                            <Grid 
                            h='50px'
                            templateRows='repeat(2, 1fr)'
                            templateColumns='repeat(2,1fr)'
                            gap={4}
                            >
                                <GridItem rowSpace={1} colSpan={2}>
                                    <label>
                                        CVC:
                                        <Stack spacing={4}>
                                            <InputGroup>
                                                <Input type={'password'} maxLength='3' value={cvc} onChange={handleCvcChange} pattern="[0-9]*" required />
                                            </InputGroup>
                                        </Stack>
                                    </label>
                                </GridItem>
                                <GridItem rowSpace={1} colSpan={2}>
                                    <label>
                                        Nome Cartão:
                                        <Stack spacing={4}>
                                            <InputGroup>
                                                <Input type={'text'} value={nomeCartao} onChange={handleNomeCartaoChange} required />
                                            </InputGroup>
                                        </Stack>
                                    </label>
                                </GridItem>
                                <GridItem rowSpace={1} colSpan={2}>
                                    <label>
                                        Número Cartão:
                                        <Stack spacing={4}>
                                            <InputGroup>
                                                <Input type={'number'} max="99999999999999999999" value={numeroCartao} onChange={handleNumeroCartaoChange} required />
                                            </InputGroup>
                                        </Stack>
                                    </label>
                                </GridItem>
                            </Grid>
                        </GridItem>
                        <GridItem colSpan={2} >
                        <Text as='b' ><Center h='50px'>Plano Escolhido</Center></Text>
                            <label>
                                <RadioGroup>
                                    <Stack>
                                        <Radio colorScheme='purple' value='plano_A' onChange={handlePlanoEscolhidoChange}>
                                            Plano A 
                                        </Radio>
                                        <Radio colorScheme='purple' value='plano_B' onChange={handlePlanoEscolhidoChange}>
                                            Plano B 
                                        </Radio>
                                        <Radio colorScheme='purple' value='plano_C' onChange={handlePlanoEscolhidoChange}>
                                            Plano C 
                                        </Radio>
                                    </Stack>
                                </RadioGroup>
                            </label>
                        </GridItem>
                    </Grid>
                    <Center><Button type="submit" py={1} colorScheme='purple'>Assinar</Button></Center>
                
            </form>
        </Stack>
  
      </Container>
    )
  }
  
  export default Cadastrar;
