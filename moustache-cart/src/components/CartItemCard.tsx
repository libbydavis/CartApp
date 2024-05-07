import { CartItem } from "../generalTypes";
import priceFormatter from "./PriceFormatter";
import ClassicTshirt from '../media/classic-tee.jpg';

type CartItemCardProps = {
    cartItem: CartItem
}

/**
 * This component is a card which displays product information in a condensed way for the cart
 * @param cartItem is an object containing product information to display 
 * @returns JSX Element
 */
const CartItemCard = ({cartItem}: CartItemCardProps) => {
    return (
        <div className="cart-item-container">
            <div>
                <img src={ClassicTshirt} alt="tshirt" className="thumbnail-image"/>
            </div>
            <div>
                <p>{cartItem.title}</p>
                <p>{cartItem.quantity}x <strong>{priceFormatter(cartItem.price)}</strong></p>
                <p>Size: {cartItem.size}</p>
            </div>
        </div>
    )
}

export default CartItemCard;