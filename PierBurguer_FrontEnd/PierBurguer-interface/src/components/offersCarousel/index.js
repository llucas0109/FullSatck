import { Swiper, SwiperSlide } from 'swiper/react'
import { useState,useEffect } from 'react'
import apiPierBurguer from '../../services/api.js'
import { Img, H1, Container, Button,Namedowcategory,Product,Infop,Fewp,Puntos,NextPunto,PrevPunto,Carrousel} from './style.js'
import formatCurrency from '../../Utils/formatCurrency.js'
import { useCart } from '../../hooks/CartContext.js'
import { useNavigate } from 'react-router-dom'
// import Moviment from './NextPrev.js'
import React, { lazy, Suspense } from 'react';  
import Moviment from './NextPrev.js'

function OffersCarrosel(){
  const [offers,setoffers] = useState([])
  const { putProductsInCart } = useCart()
  const Navigate = useNavigate()

  useEffect(() => {
    async function loadOffers() {
      const { data } = await apiPierBurguer.get('products')

      const onlyOffers = data.filter(product => product.offer).map(product =>{ // Esta Pegando Somente os offer que sao true E jogando no map
        return { ...product,formatedPrice:formatCurrency(product.price) }  // Criando Metodo de conversao da moeda
      })  

      setoffers(onlyOffers) // Atualizando o useState
    }
    loadOffers() // Chamando a funçao para q ela possa ser executado

  }, [])
    
  return(
    <Container>
      <H1>OFERTAS</H1>
      <Carrousel>  
        <Namedowcategory id='grandeoffers1'>
        {offers && offers.map( (item) => (   // Slice Limita O numero de renderizaçoes a 5
        <Product key={item.id} id={item.id} >
          <Img
          src={item.url}
          alt="Slider"
          className="slide-item" />
          <Infop>
            <p>{item.name}</p>
            <Fewp>{item.name} Feito com...</Fewp>
            <p>{item.formatedPrice}</p>
          </Infop>
          <Button onClick={() => { 
            putProductsInCart(item)
            Navigate('/cart')}
            } >Peça Agora</Button>
        </Product>
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
export default OffersCarrosel