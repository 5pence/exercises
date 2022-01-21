// TODO: define addFavoriteBook(..) function
addFavoriteBook = bookname => {
  if (!bookname.includes("Great")) {
    favoriteBooks.push(bookname);
  }
}

// TODO: define printFavoriteBooks() function
printFavoriteBooks = () => {
  console.log("Favourite Books: ", favoriteBooks.length);
  for (book of favoriteBooks) {
    console.log(book);
  }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();
