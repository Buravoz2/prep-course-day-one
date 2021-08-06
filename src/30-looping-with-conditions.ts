export {};

function onlyTheAces(arr) {
    var newArray = [];
    const checkWord = "Ace";
    for (let i = 0; i < arr.length; i++) {
        if(checkWord === arr[i]) {
            newArray.push(arr[i]);
        }
        
    }
    return newArray;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
