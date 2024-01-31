import styled from "styled-components";
import Background from '../../assets/shop.jpg';
import LoginImg from '../../assets/Hambuguer de queijo.jpg'
import { ConteinerButton } from "../../components/Button/style.js";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 850px){
    flex-direction: column;
  }
 
`;

export const LoginImage = styled.div`
  width: 30%;
  height: 70%;
  margin:15px 0 15px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('${LoginImg}'); 
  border-radius: 5px 0 0 5px;
  overflow-wrap: normal;
  background-size: cover;
  background-position: center;
  text-align: center;
  overflow: hidden;

  transition: width 1s, height 1s; /*coloca um transçao mais lenta ao aterar a width aconteceu que ao passar de um media para outro a tela fez uma trasiçao ate chegar ao tamanho da outra media*/
    transition-timing-function: ease;
  
  @media screen and (max-width: 850px){
    margin:15px 15px 0px 15px;
    width: 495px;
    border-radius: 5px 5px 0 0px;
  }
  @media screen and (max-width: 530px){
    margin:15px 15px 0px 15px;
    width: 94%;
  }
`;

export const Logo = styled.p`
  font-size: 40px;
  font-family: 'Changa One', sans-serif;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  color: #fff; 
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 5px 5px 0;
  height: 70%;
  padding: 25px 75px;
  margin: 15px 15px 15px 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 541.42px;
  
  transition: width 1s, height 0.5; /*coloca um transçao mais lenta ao aterar a width aconteceu que ao passar de um media para outro a tela fez uma trasiçao ate chegar ao tamanho da outra media*/
  transition-timing-function: ease;  // suavilizaçao 
  
  form{
    width: 391px;
    
  }

  @media screen and (max-width: 850px){
    margin: 0 15px 0 15px;
    margin: 0px 15px 15px 15px;
    border-radius: 0 0 5px 5px;
    padding: 25px 61px;
    width: 495px;
    form{
    width: 100%;
    }
  }
   @media screen and (max-width: 530px){
    width: 94%;
    padding: 25px 10%;
    margin: 0 0 15px 0 ;
   }
`;

export const Label = styled.p`
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  border-radius: 5px;
  outline: none;
  border: ${(props => props.error? '2px solid red' //Recebendo o Atributo 'erro'(Que Foi inventado) do input
   : 'none')}; // caso Encontre algum tipo de erro sera true entao alteramos as configuraçoes se nao,nao.
  padding-left: 10px;
  margin-top: 5px;
  box-shadow: ${(props => props.error? '0px 1px 8px 1px #ff000052' //Recebendo o Atributo 'erro'(Que Foi inventado) do input
   : '3px 2px 4px -2px #00000061')};

   @media screen and (max-width: 850px){
    width: 100%;
  }
`;     

export const Button = styled(ConteinerButton)`  // styled(ConteinerButton) Estende o estilo de ConteinerButton
  margin-top: 8px;
  margin-bottom: 25px;
  background: #c2c81f;

   @media screen and (max-width: 850px) and (min-width: 300px){
      width: 100%;
   }
`;

export const SignInLink = styled.p`
  /* Adicione aqui os estilos para SignInLink, se necessário */
`
export const Span = styled.span`
  margin-bottom: 6px;
  color: red;
  display: block;
`
export const PError = styled.p`
  text-align: center;
  height: 26px;
  color: var(--color-text-danger, #f24822);
  font-size: 14px;

   @media screen and (max-width: 530px){
    height: 32px;
   }
`


/* Interpolando componente ou seja ao passar o mouse em um altera outro ex: 
const Wrapper = styled.div`
  &:hover ${Button} {
    display: none;
  }
`
*/ 
