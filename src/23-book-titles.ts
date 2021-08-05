export {};

const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

const getTheTitles = (arr) => {for(var i = 0; i < arr.length; i++) {return arr[i].title};  //???
};

console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
