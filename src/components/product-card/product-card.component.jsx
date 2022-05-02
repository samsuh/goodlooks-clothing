import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles.jsx'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        + To Cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
