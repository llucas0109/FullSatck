import styled from "styled-components"
import { ConteinerButton } from '../Button/style.js'
export const Container = styled.div`
  /* background: #ffffff; */
  background: yellow;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  display: flex;
  gap: 12px;
  padding: 20px;
  height: 160px;
  width: 100%;  // O tamanho fica fixo a os dos itens nescescitam espalham ao almentar a tela 

div{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
`

export const Image = styled.img`
 
 @media screen and (max-width: 1200px ) {
  height: 100%;
  width: 155px;
  min-width: 155px;
 }
 @media screen and (max-width: 750px) {
  height: 100%;
  width: 110px;
  min-width: 110px;
 }
 @media screen and (min-width: 1200px ) {
  min-width: 155px;
 }
`

export const ProductName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px; 
  height: 19px;

  color: #000000;
`

export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-top: 30px;

  color: #000000;
`
export const Button = styled(ConteinerButton)`
  width: 100%;
  background-color: #A6AB24;
  @media screen and (max-width: 390px){
    width: 100%;
  }
  /* @media screen and (max-width: 1200px ) {
    height: 20px;
  } */
`
export const Conteudo = styled.div`
  width: 100%;
`