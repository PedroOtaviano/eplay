import { useSelector, useDispatch } from 'react-redux'

import Button from '../Button'

import starwars from '../../assets/images/star_wars.png'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'

import {
  CartContainer,
  Overlay,
  Sidebar,
  Quantity,
  Price,
  CartItem
} from './styles'
import Tag from '../Tag'
import { RootReducer } from '../../store'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Price>
          Total de {formataPreco(getTotalPrice())}{' '}
          <span>em até 6x sem juros</span>
        </Price>
        <Button title="Clique aqui para continuar com a compra" type={'button'}>
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
