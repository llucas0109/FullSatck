import styled from "styled-components";
import Background from '../../assets/shop.jpg';
import LoginImg from '../../assets/heand.jpg'
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
  color: #fff;
`;

export const Logo = styled.p`
  padding-top: 30%;
  font-size: 40px;
  font-weight: 700;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 10px 10px 10px 10px;
  height: 70%;
  width: 656px;
  padding: 25px 75px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (max-width: 520px) {
    padding: 25px 16px;
    margin: 6px;
  }
`;

export const Label = styled.p`
    /* display: block; */
    
`;

export const Input = styled.input`
  width: 100%;
  min-width: 201.42px;
  height: 38.32px;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  outline: none;
  border: ${(props => props.error? '2px solid red' //Recebendo o Atributo 'erro'(Que Foi inventado) do input
   : 'none') // caso Encontre algum tipo de erro sera true entao alteramos as configuraçoes se nao,nao.
  };
  padding-left: 10px;
  box-shadow: ${(props => props.error? '2px 2px 5px 0px #ff000052' //Recebendo o Atributo 'erro'(Que Foi inventado) do input
   : '4px 2px 4px -2px #00000080')};
   display: block;
`;

export const Button = styled(ConteinerButton)`  // styled(ConteinerButton) Estende o estilo de ConteinerButton
  margin-top: 8px;
  margin-bottom: 25px;
  background: #c2c81f;
  display: block;
`;

export const SignInLink = styled.p`
  /* Adicione aqui os estilos para SignInLink, se necessário */
`;

export const Span = styled.span`
  
  position: absolute;
  background-color: #e4caca;
  min-width: 84px;
  min-height: 34px;
  padding: 4px 7px 8px 5px;
  border-radius: 2px 5px 3px 2px;
  color: #000;
  font-size: 91%;
  transition: background-color 1s;
  animation: fadeIn 0.8s ease-out;
  margin: 10px 2px -36px 10px;
  opacity: 0.90;

  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.90;
  }
}

@keyframes moveUp {
  from {
    margin-bottom: 0;
  }
  to {
    margin-bottom: -50px; /* ajuste conforme necessário */
  }
}
`

export const InfoAlert = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`
export const DivAlert = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: end;
  gap: 7px;
  min-width: 70px;
` 
export const SpanRed = styled.span`
  color: red;
`

