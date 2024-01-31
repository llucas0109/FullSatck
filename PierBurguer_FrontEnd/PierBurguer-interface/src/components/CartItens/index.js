import { Container,Header,Body,Img,EmptyCart,P,Ptotal,Pquantid,Pprice,Pitens,Total,Price,QuantityContainer,Name } from './style.js'
import { useCart } from '../../hooks/CartContext.js'
import formatCurrency from '../../Utils/formatCurrency.js'

const CartItens = () => {
  const { cartData,increaseProducts,decreaseProducts } = useCart()
  
  return(
    <Container>
      <Header>
        <P></P>
        <Pitens>Itens</Pitens>
        <Pprice>Preço</ Pprice>
        <Pquantid>Quantidade</Pquantid>
        <Ptotal>Total</Ptotal>
      </Header>
      {cartData && cartData.length > 0 ?
      cartData.map(product => (
      <Body key={product.id}>
        <Img src={product.url}/>
        <Name>{product.name}</Name>
        <Price>{formatCurrency(product.price)}</Price>
        <QuantityContainer className='quantityContainer'>
          <button onClick={() => decreaseProducts(product.id)}>-</button>
            <p>{product.quantity}</p>
          <button onClick={() => increaseProducts(product.id)} >+</button>
        </QuantityContainer>
        <Total>{formatCurrency(product.quantity * product.price)}</Total>
      </Body>
      ))
        : (
          <EmptyCart>Carrinho Vazio</EmptyCart>
        )
    }
    </Container>  
    
  )
}

export default CartItens