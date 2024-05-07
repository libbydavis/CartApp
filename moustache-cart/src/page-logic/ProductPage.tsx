import { useEffect, useState } from "react";
import ProductPageUI from "../ui-pages/ProductPageUI";
import { CartItem, Product } from "../generalTypes";
import ClassicTshirt from '../media/classic-tee.jpg';

type ProductPageProps = {
    addToCart: (cartItem: CartItem | undefined) => void
}

/**
 * This component handles all the business logic for a product page and then displays the UI page inside.
 * It handles an API call, tracking the product information and selected size in state, 
 * passing the correct information to the cart function when add to cart is clicked.
 * @param addToCart is a function which allows the user to add a product to the cart 
 * @returns JSX Element
 */
const ProductPageLoader = ({addToCart}: ProductPageProps) => {
    const [product, setProduct] = useState<Product>();
    const [selectedSize, setSelectedSize] = useState<string>();

    const productTransformer = (apiData: any): Product => {
        const sizes: string[] = [];
        apiData.sizeOptions.forEach((size: {id: number, label: string}) => sizes.push(size.label));

        return {
            title: apiData.title,
            price: apiData.price,
            description: apiData.description,
            sizes: sizes
        }
    }

    useEffect(() => {
        fetch("https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product").then(response => {
            response.json().then(jsonData => {
                const transformedData: Product = productTransformer(jsonData);
                setProduct(transformedData);
            })
        })
    }, []);

    const handleAddToCart = () => {
        
        const cartItem: CartItem | undefined = product && selectedSize ? {
            title: product?.title,
            quantity: 1,
            price: product?.price,
            size: selectedSize
        } : undefined;
        addToCart(cartItem)
        console.log('adding to cart' + selectedSize)
    }


    return (
        <>
        {
            product && <ProductPageUI imageSource={ClassicTshirt} imageAlt='tshirt' product={product} selectedSize={selectedSize} setSelectedSize={setSelectedSize} addToCart={handleAddToCart}/>
        }
        </>
        
    )
}

export default ProductPageLoader;