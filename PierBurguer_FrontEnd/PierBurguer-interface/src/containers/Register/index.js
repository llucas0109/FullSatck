import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import api from "../../services/api.js";
import { Link } from "react-router-dom";
import { useState,useRef } from "react";
import { toast } from "react-toastify";
import { validate,AskinAlert } from './Alert.js'

// import { yupResolver } from "@hookform/resolvers/yup"

import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  Button,
  Logo,
  Span,
  InfoAlert, 
  DivAlert,
  SpanRed
} from './style.js'
import styled from "styled-components";

function Register(){
  const schema = yup.object().shape({
    name: yup.string('O seu nome é obrigatório').required(),
    email: yup.string()
    .email('Digite um e-mail válido')
    .required('0 e-mail é obrigatório'),
    password: yup.string()
    .required('A senha é obrigatória')
    .min(5, 'A senha deve ter pelo 6 digítos'),
    confirmPassword: yup.string()
    .required('A senha é obrigatória').oneOf([yup.ref('password')], 'As Senha deve, ser iguais')  // oneOf() Compara dois campos 
  })
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm()
  const {
    register, // Registra o campo
    handleSubmit, 
    watch,
    formState: { errors }, // Pega os erros se existirem nos parametros passados em register
  } = useForm()

  const HandleonSubmitData = async clientData => { // clientData Esta recebendo os Dados dos Campos de input
    try{ 
      const { status } = await api.post('users',{  // api.post(pastaCaminhoUrl,DadosQueSeramEnviados) Faz o envio dos dados para o back end Passando Um 'corpo',body,{}.
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    }, { validateStatus: () => true }
    )
    if (status ===201 || status ===200) {
      toast.success('Cadastro criado com sucesso')
      } else if (status === 409) {
      toast.error('E-mail ja cadastrado! Faça login para continuar')
      } else {
      throw new Error()
      }
    }catch(err){
      toast.error('Falha no sistema! Tente novamente' )
    }
  }  

  return (
    <Container>
      <ContainerItens>
        <h1> Cadastre-se </h1>
         <form onSubmit={handleSubmit(HandleonSubmitData)}> {/* handleSubmit Recebe Os dados E Envia Para A dentro da sua prop que é uma funçao, os dados dos campos . */}
          {/* type="email" pelo fato de estar dentro do form é configurado automaticamente assim como o type="password" Isso é do html  caso nao queiramos passamos uma configuraçao no form 'noValidate' para validar somente pelo reactHookForm*/}

          <InfoAlert>
            <Label>Nome</ Label>
            {errors.name && errors.name.type === "required" &&  <DivAlert><Span>Nome é Obrigatorio</Span></DivAlert>} 
          </InfoAlert>
          <Input placeholder="Nome" type="text" id="name" {...register('name', { required: true })} error={errors.name?.type}/>  
          
          <InfoAlert>
            <Label>Email</ Label>
            {/*// ...register chama a funçao register e cadastra o campo e ja da um name automaticamente  como se fosse Um 'ref' */}
            {/*Podemos passar validaçoes no segundo parametro de '...register()' */}
            {errors.email && errors.email.type === "required" && <DivAlert><Span >Email é Obrigatorio</Span></DivAlert> }    {/* Se ouver um erro em : 'errors.email', Ele exibira a mensagem de erro. */}
          </InfoAlert>
          <Input placeholder="Email" id="email" {...register('email', { required: true })} error={errors.email?.type} />   
          <InfoAlert>
            <Label>Senha</ Label>

              {errors.password && errors.password.type === "required" && <DivAlert><Span id="AlertMensage" >Senha é Obrigatorio</Span></DivAlert> }   {/*errors.NomeDoCampo.message     Para exibir o erro ao usuario*/}
               {errors.password && errors.password.type === "minLength" &&  <DivAlert><Span>Sua Senha Nao pode possuir mais que 5 caracteres</Span></DivAlert>}

          </InfoAlert>
          <Input placeholder="Sua Senha" type="password"  id="password" {...register('password', { required: true, minLength: 5 })} error={errors.password?.type}  onChange={validate}
           />   
          <SpanRed id="validSAmePassword1" ></SpanRed>
          <InfoAlert>
            <Label>Confirme a Senha</ Label>

              {errors.ConfirmPassword && errors.ConfirmPassword.type === "required" &&<DivAlert> <Span id="AlertMensage" >Senha é Obrigatorio</Span></DivAlert> }
               {errors.ConfirmPassword && errors.ConfirmPassword.type === "minLength" &&  <DivAlert><Span>Sua Senha Nao pode possuir mais que 5 caracteres</Span></DivAlert>}

          </InfoAlert>
          <Input placeholder="Confirme Sua Senha" id="ConfirmPassword"  type="password"  {...register('ConfirmPassword', { required: true, minLength: '5' })} error={errors.ConfirmPassword?.type}  onChange={validate}
            />   
           <SpanRed id="validSAmePassword2" ></SpanRed>

          <Button type="submit" > Confirme </ Button>  {/* type="submit"  por estar dentro do formulario vai submeter os dados */}
        </form>
        <SignInLink>
        Já possui conta ? <Link style={{color:'#b5b5b5' }} to="/login">Sing-in</Link>
        </SignInLink>
      </ ContainerItens>
    </ Container>
  )
}


export default Register