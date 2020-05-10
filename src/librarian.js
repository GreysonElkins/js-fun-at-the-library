var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library) {
    this.name = name
    this.library = library
  }
    greetPatron(customer, isMorning) {
      if (isMorning == true) {
        return `Good morning, ${customer}!`
      } else {
        return `Hello, ${customer}!`
      }
    }
    findBook(query) {
      var punchCards = this.library.shelves.fantasy // I want this to be able to work with every shelf!
      var shelf;
      for (i = 0; i < punchCards.length; i++) {
        if (punchCards[0].title == query) {
          shelf = punchCards[0].genre
        }
      }
      if (searchShelf(this.library.shelves.fantasy, query)  == true) {
        return `Yes, we have ${query}`
    } // I don't want to hard code fantasy shelf :()
      else {return `Sorry, we do not have ${query}`}

  }

}

module.exports = Librarian;
