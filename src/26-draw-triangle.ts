export {};

function draw(rows: number) {
    var stars: string = "";
    for(var i = 1; i <= rows; i++) {
        for(var j = 0; j < i; j++) {
            stars += "*";
        }
        stars += "\n";
    }
    return console.log(stars);
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
