import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: 100%;

  @media screen and (max-width:730px) {
    width: 90%;
    margin: auto;
  }
 `
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;
  gap: 21px;
  p{
    font-size: 16px;
    color: #b5b5b5;
    text-align: center;
  }
`
export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-top: 10px;
  justify-content: center;
  text-align: center;
  width: 100%;

  .quantityContainer{
    display: flex;
    gap: 20px;
    justify-content: center;
    button {
    height: 30px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    }
    p {
    margin-top: 5px;
    }
  }
`
export const Img = styled.img`
  width: 100%;
  min-width: 60px;
  max-width: 150px;
`
export const EmptyCart = styled.div` 
  font-weight: bold;
  padding: 20px;
  text-align: center;

`
export const QuantityContainer = styled.div`
  grid-column: 4/5;
`
export const P = styled.p`
  width: 60px;
 
`
export const Pitens = styled.p` 

   @media screen and (max-width: 730px) {
    grid-column: 2/3;
  }
`
export const Pquantid = styled.p` 
  
  @media screen and (max-width: 730px) {
    grid-column: 4/5;
  }
`
export const Pprice = styled.p`
  text-align: center;

  @media screen and (max-width: 730px) {
    display: none;
  }
`
export const Ptotal = styled.p`
  text-align: center;

  @media screen and (max-width: 730px) {
    display: none;
  }
` 
export const Price = styled.p`

  @media screen and (max-width: 730px) {
    display: none;
  }
`
export const Total = styled.p`

  @media screen and (max-width: 730px) {
    display: none;
  }
`
export const Name = styled.p`
  padding-left: 10px;
`
