import styled from "styled-components";
import {Link} from 'react-router-dom'


 export const Carrousel = styled.div`
  margin: auto;
  display: grid;
  grid-template-rows: 1fr 0px;
  max-width: 60em;
  overflow: hidden;
 ` 

export const Namedowcategory = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  gap: 15px;
  grid-row: 1/2; 
  grid-column: 1/2;
  display: flex;  
  width: 0;
  transform: translateX(0%);

  
 `

 export const Puntos = styled.ul`
  position: relative;
  top: -135px;
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

 export const Container = styled.div`
 
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
 `
export const H1 = styled.h1`
  text-align: center;
  background-color: #efefef;
`
export const Img = styled.img`
  width: 225px;
  margin-right: 23px;
  height: 150px;
  margin-right: 15px;
`
export const Containeritens = styled.div`

`
export const Button = styled(Link)`
  width: 200.81px;
  height: 50.13px;
  background: #A6AB24;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #eeeeee;
  margin-top: 10px;

  &:hover {
  opacity: 0.8;
  }

  &:active {
  opacity: 0.6;
  }

  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Itens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
