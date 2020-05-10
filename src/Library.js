function createLibrary(libName) {
  return {
    name: libName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
};

function addBook(libName, newBook) {
  libName.shelves[newBook.genre].unshift(newBook);
  // if (newBook.genre == 'fantasy') {
  //   libName.shelves.fantasy.unshift(newBook)
  // } else if (newBook.genre == 'fiction') {
  //   libName.shelves.fiction.unshift(newBook)
  // } else if (newBook.genre == 'nonFiction') {
  //   libName.shelves.nonFiction.unshift(newBook)
  // }
};


function checkoutBook (library, book) {
  var punchCards = library.shelves.fantasy.concat(library.shelves.fiction).concat(library.shelves.nonFiction);
  var confirmation = `You have now checked out ${book} from the ${library.name}`;
  var genre;
  for (i = 0; i <= punchCards.length - 1; i++) {
  if (punchCards[i].title.includes(book) == true) {
    genre = punchCards[i].genre
  }
  }
  if (genre == undefined){
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
  } else {
  for (j = 0; j <= library.shelves[genre].length - 1; j++) {
    if (library.shelves[genre][j].title == book) {
      library.shelves[genre].splice(j, 1);
      return confirmation;
    }
  }
  }
}

// first attempt, works:
// function checkoutBook(libName, book){
//
//   var punchCards = libName.shelves.fantasy.concat(libName.shelves.fiction).concat(libName.shelves.nonFiction)
//
//   var confirmation = `You have now checked out ${book} from the ${libName.name}`;

  // for (i = 0; i <= punchCards.length - 1; i++) {
  //     if (punchCards[i].title == book) {
  //       if (punchCards[i].genre == "fantasy") {
  //         for (j = 0; j <= libName.shelves.fantasy.length - 1; j++) {
  //         if (libName.shelves.fantasy[j].title == book) {
  //           libName.shelves.fantasy.splice(j, 1);
  //           return confirmation;
  //         }
  //       }
  //     }
  //       else if (punchCards[i].genre == "fiction") {
  //         for (j = 0; j <= libName.shelves.fiction.length - 1; j++) {
  //           if (libName.shelves.fiction[j].title == book) {
  //             libName.shelves.fiction.splice(j, 1);
  //             return confirmation;
  //           }
  //         }
  //       }
  //       else if (punchCards[i].genre == "nonFiction") {
  //         for (j = 0; j <= libName.shelves.nonFiction.length - 1; j++) {
  //           if (libName.shelves.nonFiction[j].title == book) {
  //             libName.shelves.nonFiction.splice(j, 1);
  //             return confirmation;
  //           }
  //         }
  //       }
  //     }
  //   } return `Sorry, there are currently no copies of ${book} available at the ${libName.name}`
  // }


module.exports = {
   createLibrary: createLibrary,
   addBook: addBook,
   checkoutBook: checkoutBook
};
