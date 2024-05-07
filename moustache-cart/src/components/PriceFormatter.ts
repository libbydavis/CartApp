/**
 * This function formats a whole number to include a $ and .00 to look like a dollar amount
 * @param unformattedPrice the whole number to be formatted
 * @returns string of the formatted price
 */
const priceFormatter = (unformattedPrice: number): string => {
    // could add more functionality later for different currencies or prices that aren't whole numbers but I left it simple for now
    return `$${unformattedPrice}.00`;
}

export default priceFormatter;