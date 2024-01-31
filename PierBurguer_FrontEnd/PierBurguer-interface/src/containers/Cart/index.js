import CartLogo from '../../assets/Papel de parede hambutguer.png'
import { CartImg,Container,Wraper,ContainerPhone,Phone } from './style.js'
import CartResume from '../../components/cartResume/index.js'
import CartItens from '../../components/CartItens/index.js'
import Header from '../../components/Header/index.js'

const Cart = () => {
 
  return(
    <Container>
    <Header/>
    <Wraper>
      <CartItens />
      <CartResume />
    </Wraper>
    </Container>  
  )
}

export default Cart