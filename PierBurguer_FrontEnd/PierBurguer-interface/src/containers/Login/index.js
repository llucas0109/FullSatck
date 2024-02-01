import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import api from "../../services/api.js";
import { Link,useNavigate, Navigate } from "react-router-dom";  // 'Link'  permite Criar como se fosse uma ancora para uma outra pagina
import { toast } from 'react-toastify'; 
import { useUser } from "../../hooks/UserContext.js";  // Pega os context

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
  PError
} from './style.js'

function Login(){
  const {putUserData,userData} = useUser()

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().max(15)
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async clientData => {
    
  
    const response = await api.post('sessions',{  // api.post(pastaCaminhoUrl,DadosQueSeramEnviados) Faz o envio dos dados para o back end pelo metodo post.
      email: clientData.email,
      password: clientData.password
    },{ validateStatus: () => true }) // 'validateStatus: () => true' PerMite Que caso de erro ele Continue a ler o try
  
    const { data } = response
    putUserData(data)  // Passando os dados para o use context que disponibiliza o token no local storege
    const valid = data.admin
    if(valid == true){
      return window.location.href = '/admin';
    }if(valid == false){
      return window.location.href = '/home';
    }
    document.getElementById('NotFound').innerHTML = 'Essa combinação de e-mail e senha está incorreta'
  }

  return (
    <Container>
      <LoginImage>
      <Logo> Bela Hambugueria </Logo>
      </LoginImage>
      <ContainerItens>
        <PError id='NotFound' ></PError>
        <h1> Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}> {/* Ao clicar em enviar ele envia os dados para o onSubmit */}
          {/* type="email" pelo fato de estar dentro do form é configurado automaticamente assim como o type="password" Isso é do html  caso nao queiramos passamos uma configuraçao no form 'noValidate' para validar somente pelo reactHookForm*/}
          <Label>Email</ Label>
          {/*// ...register chama a funçao register e cadastra o campo e ja da um name  */}
          {/*Podemos passar validaçoes no segundo parametro de '...register()' */}
          <Input placeholder="Email" id="email" {...register('email', { required: true })} error={errors.email?.type} />
          {/*O type do erro é o que definimos no objeto da segunda prop do ...register*/}
          {errors.email && errors.email.type === "required" && <Span>Preencha O Campo De Email</Span>}  {/* Se ouver um erro em : 'errors.email', Ele exibira a mensagem de erro. */}
          <Label>Senha</ Label>
          <Input placeholder="Senha"  id="password" {...register('password', { required: true, maxLength: 15 })} error={errors.password?.type} />
            {errors.password && errors.password.type === "required" &&  <Span>Preencha O Campo De Senha</Span>}   {/*errors.NomeDoCampo.message     Para exibir o erro ao usuario*/}
            {errors.password && errors.password.type === "maxLength" &&  <Span>Sua Senha Não Pode Conter Mais do Que 15 caracteres </Span>}
          <Button type="submit" > Logar </ Button>  {/* type="submit"  por estar dentro do formulario vai submeter os dados */}
        </form>
        <SignInLink>
        Não possui conta ? <Link style={{color:'#b5b5b5' }}  to="/register">Sing-up</Link>  { /* to="/register" Aponta para qual url deve ser acessada ao clicar nas palavras */ }
        </SignInLink>
      </ ContainerItens>
    </ Container>
  )
}
// type="submit" Faz com que  onSubmite Seja executado.

export default Login