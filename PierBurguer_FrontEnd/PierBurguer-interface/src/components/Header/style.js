import styled from "styled-components";
import Arrowimg from "../../assets/Arrow.svg";

export const Container = styled.div`
  height: 72px;
  background-color: #ffffff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`
export const ContainerLeft = styled.div `
  display: flex;
  gap: 20px;
  
`

export const Arrow = styled.label`


  @media screen and (max-width: 450px) {
    display: block;
    background: url(${Arrowimg}) no-repeat;
    margin-bottom: 10px;
    width: 20px;
    height: 23px;
    margin: 0;
  }
`
export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.$isActive ? '#975BA6':'#555555'};  // 
  font-size: 16px;
  line-height: 19px;
  padding: 4px;
  font-weight: ${props => props.$isActive ? 'bold':'normal'};
`
export const PageLinkProduct = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.$isActive ? '#975BA6':'#555555'};  // 
  font-size: 16px;
  line-height: 19px;
  padding: 4px;
  font-weight: ${props => props.$isActive ? 'bold':'normal'};
  display: flex;
  align-items: center;

  @media screen and (max-width: 450px) {
    display: ${props => props.$isUrl == '/products' ? 'none' : 'flex' }; 
    
  }
`

export const PageLinkHome = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.$isActive ? '#975BA6':'#555555'};   
  font-size: 16px;
  line-height: 19px;
  padding: 4px;
  font-weight: ${props => props.$isActive ? 'bold':'normal'};
  display: flex;
  align-items: center;
  
  .material-symbols-outlined {
    font-weight: 300;
  }
  span{
    font-size: 19px;
    width: 15px;
    height: 17px;

    @media screen and (min-width: 450px){
      display: none;
    }
  }
  @media screen and (max-width: 450px) {
    display: ${props => props.$isUrl == '/cart' || props.$isUrl == '/' ? 'none' : 'flex' };
  }
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const ContainerText = styled.div`

  p{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;

    color: #555555;
    }
`
export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`
export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #9758a6;
`