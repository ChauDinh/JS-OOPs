// Constructor 

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

//getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

// Revise / Change year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

//Instatiate an Object
const book1 = new Book("Book One", "John Doe", "2013");
const book2 = new Book("Book Two", "Jame Doe", "2018");

console.log(book1);
console.log(book2);
console.log(book2.getSummary()); //the getSummary function was not in the actual object
// But it is in proto

// The reason we do that is because we do want title, author and year for every book but getSummary

console.log(book2.getAge());
book1.revise("2018");
console.log(book1);