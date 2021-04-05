// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = arr => [... new Set(arr.map(a => a.director))];
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    return movies.filter((ele) => {
        return ele.director == `Steven Spielberg` && ele.genre.includes(`Drama`)
    }).length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (movies) {
    if (movies.length === 0) return 0;
    console.log(movies);
    let sum = movies.reduce((acc, value) => {
        console.log(acc, value);
        return acc + (value.rate || 0);
        // return value.rate ? acc + value.rate : acc + 0;
        // return value.rate == undefined || value.rate == '' ? acc + 0 : acc + value.rate;
    }, 0);
    console.log(sum);
    return Number((sum/movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
