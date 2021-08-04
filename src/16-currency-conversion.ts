export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 * Find a way to add 1% to all currency conversions (think about the DRY (don't repeat yourself) principle)
 */

const gbp_to_usd_rate = 1.4;
const gbp_to_brl_rate = 5.6;
const transaction_fee_multiplier = 1.01;

function convertToForeignCurrency(amount: number, currencyRate: number) : string{
    return (amount * currencyRate * transaction_fee_multiplier).toFixed(2);
}
function convertToUSD(amount: number): string{
    return convertToForeignCurrency(amount, gbp_to_usd_rate);
}
function convertToBRL(amount: number): string{
    return convertToForeignCurrency(amount, gbp_to_brl_rate);
}

/*// You are allowed to change this function
function convertToUSD(amount: number): string {
    return (amount * 1.4 * 1.01).toFixed(2);
}
// You are allowed to change this function
function convertToBRL(amount: number): string {
    return (amount * 5.6 * 1.01).toFixed(2);
}*/

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/