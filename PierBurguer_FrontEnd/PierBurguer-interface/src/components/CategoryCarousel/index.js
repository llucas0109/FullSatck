import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useState,useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import apiPierBurguer from '../../services/api.js'
import { Img, H1, Container, CategoryImg,Namedowcategory,Button,Carrousel,Puntos,NextPunto,PrevPunto,Itens} from './style.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import Moviment from './NextPrev.js';
import { lazy } from 'react'; 

const Movi = lazy(() => import('./NextPrev.js'));  // Fazendo Pre load de informaçoes

function ImagensCarrosel(){

  const [categories,setcategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiPierBurguer.get('categories')

      setcategories(data) // Atualizando o useState
    }
    loadCategories() // Chamando a funçao para q ela possa ser executado

  }, [])

  return(
    <Container>
      <H1>Categorias</H1>
      <Carrousel>
        <Namedowcategory id='grande'>
        {categories && categories.slice(0, 5).map( (item) => (   // Slice Limita O numero de renderizaçoes a 5
        <Itens key={item.id} id={item.id} >
          <Img
          src={item.url}
          alt="Slider"
          className="slide-item" />
          <Button to= '/products'  // 'to' Rediricionando para pagina e passando um dado
            state = {{ categoryId: item.id }}
            >{item.name}</Button>
        </Itens>
        
        ))}
        </Namedowcategory>
        <Puntos >
          <PrevPunto id='PrevPunto' onClick={() => Moviment(0)}><span className="material-symbols-outlined">arrow_back_ios</span></PrevPunto>
          <NextPunto id='NextPunto' onClick={() => Moviment(1)}><span className="material-symbols-outlined">arrow_back_ios</span></NextPunto>
        </Puntos>
      </Carrousel>


    </Container>
  )
}
export default ImagensCarrosel