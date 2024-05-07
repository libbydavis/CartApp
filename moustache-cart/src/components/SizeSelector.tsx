
type SizeSelectorProps = {
    sizes: string[],
    selectedSize: string | undefined,
    setSelectedSize: (size: string) => void
}

/**
 * This component displays a title and a list of sizes that can be selected.
 * The style changes for the selected size to show the user it has been selected.
 * @param sizes is a string array list of sizes e.g. ["S", "M"]
 * @param selectedSize is a string of the size that has been selected by the user
 * @param setSelectedSize is a function to set a new selected size
 * @returns JSX Element
 */
const SizeSelector = ({sizes, selectedSize, setSelectedSize}: SizeSelectorProps) => {

    const handleSizeSelection = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedSize(currentTarget.value);
    };

    return (
        <div>
            <h4 className="font-light">SIZE<span className="red-pointer">*</span></h4>
            <div className="sizes-group-container">
                {
                    sizes.map((size, index) => {
                        return (
                            <button key={index} className={`${selectedSize === size ? 'border-dark' : ''} size-button`} onClick={handleSizeSelection} value={size}>
                                <p>{size}</p>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SizeSelector;