import styled from "styled-components";
import { ConteinerButton } from "../Button/style.js";

export const Carrousel = styled.div`
    margin: auto;
    display: grid;
    grid-template-rows: 1fr;
    max-width: 60em;
    overflow: hidden;
` 

export const Namedowcategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  @media screen and (min-width: 450px){
    display: -webkit-box;
    display: -ms-flexbox;
    grid-row: 1/2; 
    grid-column: 1/2;
    display: flex;  
    flex-direction: row;
    width: 0;
    transform: translateX(0%);
  }
`
export const Container = styled.div`

  @media screen and (min-width: 450px){
    html, body, ul, li, img, button {
      margin: 0;
      padding: 0;
      border: 0;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      vertical-align: baseline;
    }
    li {
      list-style-type: none;
    }
    #swiper{
      width: 400px;
    }
  }
`
export const CategoryImg = styled.img`
  width: 100%;
`
export const H1 = styled.h1`
  text-align: center;
`
export const Img = styled.img`
  width: 93%;
  margin:  0 10px;
  margin-right: 15px;
  
  @media screen and (min-width: 450px){
    width: 225px;
    margin: 0 10px;
    height: 150px;
  }
`
export const Containeritens = styled.div`

`
export const Button = styled(ConteinerButton)`
  width: 208.81px;
  height: 50.13px;
  margin-top: 10px;
  background-color: #A6AB24;
  
`
export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`
export const Infop = styled.div`
  display: flex;
  flex-direction: column;
  height: 104px;
  padding:  19px 19px 0 19px;
  gap: 4px;
  font-size: 16px;
  width: 100%;
`
export const Fewp = styled.p`
  font-size: 12px;
`
export const Puntos = styled.ul`
  position: relative;
  top:-323px;
  color: red;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  margin: 1em 0 0;
  padding: 0.4em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  @media screen and (max-width: 450px){
    display: none;
  }

 `
 export const NextPunto = styled.li`
  cursor: pointer;
  width: 50px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span{
    transform: rotateY(-180deg);
    font-size: 40px;
    color: #EA1D2C;
  }
 `
 export const PrevPunto = styled.li`
  cursor: pointer;
  width: 50px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  span{
    font-size: 40px;
    color: #EA1D2C;
  }
 `
