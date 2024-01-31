import { redirect } from "react-router-dom"
import Homelogo from "../../assets/img 1 1.png"
import { CategoryImg,Container } from './style.js'
import CategoryCarousel from "../../components/CategoryCarousel/index.js"
import OffersCarrosel from "../../components/offersCarousel/index.js"
import Hamburheand from '../../assets/Tropical hambur.jpg'
import Header from "../../components/Header/index.js"

const Home = () => {
  
  return(
    <Container>
    <Header />
    <CategoryImg src={Hamburheand}  />

    <CategoryCarousel/>
      <OffersCarrosel/>
    </Container>  
  )
}

export default Home