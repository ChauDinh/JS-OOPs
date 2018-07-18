const s1 = "Hello";
const s2 = new String("Hello");
console.log(typeof s1); //displays string
console.log(typeof s2); //displays object

// s1 is a string, not an object, but when we call a method like the case of s2, s2 is an object

console.log(window); // window is actually the absolute parent object, including a bunch of method

window.alert(1); // alert 1

//Cause there is nothing above window so we don't have to add window. , but simply do alert(1)

// Object Literals

const book1 = {
    title: "Book One",
    author: "John Doe",
    year: "2013",

    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}
console.log(book1);
console.log(Object.value(book1)); //displays all values listed in book1: Book One, John Doe, 2013 and f (a function)

const book2 = {
    title: "Book Two",
    author: "Jame Doe",
    year: "2018",

    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}
console.log(book2);
console.log(Object.keys(book2)); //displays all keys listed in book2: title, author, year, and getSummary

