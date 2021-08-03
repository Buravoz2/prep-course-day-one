export {};
function truncateString(text: string, length: number): string {
    /*if (length == null) {
        length = 100;
    } if (ending == null) {
        ending = '...';
    } if (text.length > length) {
        return text.substring(0, length - ending.length) + ending;
    } else {
        return text;
    }*/
    return text.substring(0, length);
}
console.log(truncateString("CODELEX", 4)); // Expected output: CODE
