export {};

/**
 * Create a function called fullName, which concatenates two strings together
 */
function fullName(name: string, surname: string) {
    return name.concat(" ", surname);
}

console.log(fullName("John", "Doe")); //Expected output: 'John Doe'
