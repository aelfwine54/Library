class Book {
  constructor (title, author, year, price, imgUrl) {
    this.id = Book.incrementId();
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;
    this.imgUrl = imgUrl;
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
  new Book('David Copperfield', 'Charles Dickens', 1850, 19.99,
      'http://thebookmusings.com/wp-content/uploads/2014/09/David-Copperfield-by-Charles-Dickens.jpg'),
  new Book('A study in Scarlet', 'Arthur Conan Doyle', 1887, 15.49,
      'https://upload.wikimedia.org/wikipedia/commons/2/2c/ArthurConanDoyle_AStudyInScarlet_annual.jpg'),
  new Book('Le comte de Monte-Cristo', 'Alexandre Dumas', 1845, 34.35,
      'https://upload.wikimedia.org/wikipedia/commons/d/d6/Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg'),
  new Book('Mathias Sandorf', 'Jules Verne', 1885, 20.95,
      'https://images-na.ssl-images-amazon.com/images/I/5194CoDcbqL._SY344_BO1,204,203,200_.jpg')
];

module.exports.books = books;
module.exports.Book = Book;
