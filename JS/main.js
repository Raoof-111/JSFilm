

// Taskiniz: Mehsur filmlerin movcud oldugu bir api url tapin. O apiden istifade ederek, filmin adlarini console-da gosterin








const key = "4cc43c9591f08a993e37d3de55e50a72";

fetch(
  `https://api.themoviedb.org/3/movie/popular?language=tr-TR&page=1&api_key=${key}`
).then((response) => response.json()
.then((data) => data.results
.map((movie)=>console.log(`${movie.title}`))));





