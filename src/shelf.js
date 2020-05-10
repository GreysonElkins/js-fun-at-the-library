function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
}
function unshelfBook(bookName, shelf) {
  var index;
  for (i = 0; i <= shelf.length - 1; i++) {
    if (shelf[i].title == bookName) {
      index = shelf.indexOf(shelf[i])
    }
  }
    shelf.splice(index, 1);
}
function listTitles (shelf) {
  var titleList = [];
  for (i = 0; i <= shelf.length - 1; i++) {
    titleList.push(shelf[i].title)
  }
  // this also works: titleList = titleList.join(', '); return titleList
  return titleList.join(', ');
}
  function searchShelf(shelf, query) {
  for (var i = 0; i <= shelf.length - 1; i++) {
    if (shelf[i].title == query ) {
      return true;
    }
  } return false;
  }
module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
