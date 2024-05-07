import { Popover, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { CartItem } from "../generalTypes";
import CartItemCard from "./CartItemCard";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

type CartPopoverProps = {
    cartTotal: number,
    cartItems: CartItem[]
}

/**
 * This component displays a button with a cart label which toggles a div to be displayed or hidden.
 * The div displays information for products in the cart. 
 * @param cartTotal is a number of the total amount of items in the cart
 * @param cartItems is a list of the items in the cart
 * @returns JSX ELement
 */
const CartPopover = ({cartTotal, cartItems} : CartPopoverProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const isMobileAndTablet = useMediaQuery('(max-width:900px)');

    const handleToggleCartPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <button className={`cart-button ${anchorEl !== null && 'cart-button-toggled'}`} onClick={handleToggleCartPopover}><p className="no-margin-text cart-label">{isMobileAndTablet ? <ShoppingCartIcon/> : 'My Cart'} ({cartTotal})</p></button>
            <Popover
                open={anchorEl !== null}
                elevation={0}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
            >
                <div className="cart-popover-inner-container">
                    {
                        cartTotal > 0 ? <> {
                            cartItems.map((item: CartItem) => {
                                return (
                                    <CartItemCard cartItem={item} />
                                )
                            })
                        }</> : <p>No items in cart</p>
                    }
                </div>
            </Popover>
        </>
    )
}

export default CartPopover;