import AddToCartButton from "../components/AddToCartButton";
import priceFormatter from "../components/PriceFormatter";
import SizeSelector from "../components/SizeSelector";
import { Product } from "../generalTypes";

type ProductPageTypes = {
    imageSource: string,
    imageAlt: string,
    product: Product,
    selectedSize: string | undefined,
    setSelectedSize: (size: string) => void,
    addToCart: any
}

/**
 * This component displays all the detailed information for a product
 * @param imageSource is a string of the image source
 * @param imageAlt is a string that can be used instead of the actual image
 * @param product is an object with the product information inside
 * @param selectedSize is a string of the size the user has currently selected 
 * @param setSelectedSize is a function which allows the user to update the size they want selected
 * @param addToCart is a function which allows the user to add an item to the cart
 * @returns JSX Element
 */
const ProductPage = ({imageSource, imageAlt, product, selectedSize, setSelectedSize, addToCart}: ProductPageTypes) => {

    return (
        <div className="product-page-root">
            <div className="product-page-container product-page-image-container">
                <img src={imageSource} alt={imageAlt} className="product-page-image" />
            </div>
            <div className="product-page-container">
                <div className="product-page-inner-container product-page-inner-spaced">
                    <h2 className="font-dark">{product.title}</h2>
                    <h3 className="font-dark">{priceFormatter(product.price)}</h3>
                    <p className="font-light">{product.description}</p>
                </div>
                <div className="product-page-inner-container product-page-inner-condensed">
                    <SizeSelector selectedSize={selectedSize} setSelectedSize={setSelectedSize} sizes={product.sizes} />
                    <AddToCartButton handleAddToCart={addToCart} />
                </div>
            </div>
        </div>
    )
}

export default ProductPage;