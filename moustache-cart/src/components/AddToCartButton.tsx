type AddToCartButtonProps = {
    handleAddToCart: () => void
}

/**
 * This component is styled button with the label 'ADD TO CART'
 * @param handleAddToCart function which handles button click action 
 * @returns JSX Element
 */
const AddToCartButton = ({handleAddToCart}: AddToCartButtonProps) => {
    return (
        <button onClick={handleAddToCart} className="border-dark add-to-cart-button"><h3 className="no-margin-text">ADD TO CART</h3></button>
    )
}

export default AddToCartButton;