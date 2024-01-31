import styled from "styled-components";
import CartLogo from '../../assets/Papel de parede hambutguer.png'

export const Container = styled.div`
  background-color: #e5e5e5;
  min-height: 100vh;
  background: url('${CartLogo}');
 `
export const CartImg = styled.img`
width: 100%;
height: 300px;
`
export const Wraper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 7px;
  margin: 45px;

  @media screen and (max-width: 730px) {
    flex-direction: column;
    margin-top: 30px;
    padding-bottom: 15px;
    margin: 0px;
  }
  @media screen and (max-width: 907px) {
    flex-direction: column;
    margin-top: 30px;
    padding-bottom: 15px;
  }

`

export const ContainerPhone = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
  
`
export const Phone = styled.div`
   background-color: black;
  margin: auto;
  width: 700px;
  height: 100vh;
`
