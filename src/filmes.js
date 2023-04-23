const apiUrl = 'https://my-json-server.typicode.com/marycamila184'

export async function getMovies() {
  return fetch(apiUrl + '/movies/movies')
    .then(r => r.json())
}

export async function getMovie(id) {
  return fetch(apiUrl + '/moviedetails/moviedetails/' + id)
    .then(r => r.json())
}