import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
 `
export const HomeImg = styled.img`
  width: 100%;
  
`
export const Menu = styled.div`
  /* width: 700px; */
  overflow: hidden;
`
export const CategoriesMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
  @media screen and (max-width: 518px) {
    justify-content: flex-start;
  }
  
`

export const Button = styled.button`
cursor: pointer;
background: none;
padding: 10px;
border: none;
border-bottom: ${props => (props.$isactivicategory ?' 2px solid red':'none'
)}; // Adiciona um alinha de birda em baixo do bottom
color: ${props => (props.$isactivicategory ?'red':'brown'
)};
font-size: 17px;
line-height: 20px;

`
export const ManegerConteiner = styled.div`
  
   @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    display: block;
  }
 `

export const ProductsConteiner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
        

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
 ` 
export const Location = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;
  position: absolute;
 `
 
