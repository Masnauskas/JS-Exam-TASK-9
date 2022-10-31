/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

//ES6
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    if (this.budget >= 100000000) {
      console.log(`${this.title} is a very expensive movie`);
    } else {
      console.log(`${this.title} is not an expensive movie`);
    }
  }
}

const expensiveMovie = new Movie(
  "Blockbuster 9000",
  "Mr. Best Director",
  10000000000
);

const cheapMovie = new Movie("B grade Movie", "Random Guy", 50000);
