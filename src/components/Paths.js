const api = '8edd3ebaa6a2f8eae165726f7342cf27'
const apiPath = {
    movies: `https://api.themoviedb.org/3/trending/movie/day?api_key=${api}`,
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${api}`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}`,
    upComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}`,
}

export default apiPath;