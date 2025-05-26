// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";
import CartItem from "../cart-item/index";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selector";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const {products} = useSelector(rootReducer => rootReducer.cartReducer);
  const totalPrice = useSelector(selectProductsTotalPrice);
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map((product) => <CartItem product={product}/>)}
        <p>R$ {totalPrice}</p>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
