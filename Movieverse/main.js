//TMDB urls assigned in  variables
const API_KEY = "api_key=8033488aac94f6595663fe9fc6ac54fb";
const WEB_BASE_URL = "https://api.themoviedb.org/3";
const API_URL =
  WEB_BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY; //recyclerview api
  const IMG_URL = 'https://image.tmdb.org/t/p/w500' // for displaying poster images with their relative path 
const SEARCH_URL  = WEB_BASE_URL + "/search/movie?" + API_KEY + "&language=en-US&page=1&include_adult=false"
  // const query  = WEB_BASE_URL + "search/movie" + API_KEY + "&query=";
const main  = document.getElementById('main')
const form = document.getElementById('form')
const searchBar = document.getElementById('search-bar')



//nested function for fetching data and then calling display function
function getPopularMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
    
      displayMovies(data.results);
      
    })
    .catch(()=>{
      alert("server not responding , kindly try again later")
    })
}
getPopularMovies(API_URL);

//function for displaying  popular movies on load

function displayMovies(data) {
    main.innerHTML='' //to clear the default main element display
  data.forEach((movie) => {
      const {title, poster_path, vote_average,overview,}=movie //destructuring objects
     
    const movieDiv = document.createElement('div');
    movieDiv.classList.add ='movie' //adding movie class in each element
    movieDiv.innerHTML = `
    <img class ="movie-img" src="${IMG_URL+ poster_path }" alt="${title}" />
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${rateColor(vote_average)}">${vote_average}</span>
    </div>

    <div class="overview"> 
      <h4>Overview</h4>
     ${overview}
    </div>`
    main.appendChild(movieDiv);
 
  });

}


//function to change bg color of rating div based on audience vote average
function rateColor(rating){
    if (rating >=8){
        return "cyan" 
    }
    else if (rating <=5){
        return "red"
    }
    else{
        return "orange"
    }
}

 
 //  , search bar functionality 
 form.addEventListener("submit",(event)=>{
   event.preventDefault();
const searchText = searchBar.value;
if(searchText){
getPopularMovies(SEARCH_URL+ "&query=" +searchText);


}else{
  getPopularMovies(API_URL)
}

 })
