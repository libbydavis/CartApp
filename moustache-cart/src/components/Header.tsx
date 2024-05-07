import { CartItem } from "../generalTypes";
import CartPopover from "./CartPopover";

type HeaderProps = {
    cartTotal: number,
    cartItems: CartItem[]
}

/**
 * This component displays a header bar with a cart popover element inside
 * @param cartTotal is a number of the total amount of items in the cart
 * @param cartItems is a list of the items in the cart
 * @returns JSX Element
 */
const Header = ({cartTotal, cartItems}: HeaderProps) => {
    return (
        <div className="header">
            <div className="cart-popover-container">
                <CartPopover cartTotal={cartTotal} cartItems={cartItems} />
            </div>
        </div>
    )
}

export default Header;