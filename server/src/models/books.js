class Book {
  constructor (title, author, year, price) {
    this.id = Book.incrementId();
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;
  }

  static incrementId () {
    if (!this.latestId) {
      this.latestId = 1;
    } else {
      this.latestId++;
    }
    return this.latestId;
  }
}

const books = [
  new Book('David Copperfield', 'Charles Dickens', 1850, 19.99),
  new Book('A study in Scarlet', 'Arthur Conan Doyle', 1887, 15.49),
  new Book('Le comte de Monte-Cristo', 'Alexandre Dumas', 1845, 34.35),
  new Book('Mathias Sandorf', 'Jules Verne', 1885, 20.95)
];

module.exports.books = books;
module.exports.Book = Book;
