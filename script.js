 const movies =  [
    {
        id : 533535,
        title : "Deadpool & Wolverine",
        release_date : "2024-07-24",
        backdrop_path : "image/download.jpg",
        poster_path : "image/jkjkjk.jpg",
        category : "Action",
    },
     
    {
        id : 533536,
        title : "rama & shama",
        release_date : "2024-07-24",
        backdrop_path : " image/jkjkjk.jpg",
        poster_path : " image/download.jpg",
        category : "Thriller",
    },

    {
        id : 533537,
        title : "Deadpool & Wolverine",
        release_date : "2024-07-24",
        backdrop_path : " image/OIP(1).jpg",
        poster_path : "image/download.jpg",
        category : "Horrer",
    },

    {
        id : 533538,
        title : "mahesh nana pateker",
        release_date : "2024-07-24",
        backdrop_path : " image/OIP(2).jpg",
        poster_path : "image/download.jpg",
        category : "Action",
    },

    {
        id : 533539,
        title : "Deadpool & Wolverine",
        release_date : "2024-07-24",
        backdrop_path : " image/OIP(3).jpg",
        poster_path : " image/download.jpg",
        category : "Thriller",
    },

    {
        id : 533540,
        title : "rameshvar gangapure",
        release_date : "2024-07-24",
        backdrop_path : "image/OIP(4).jpg ",
        poster_path : "image/download.jpg",
        category : "Horrer",
    },

    {
        id : 533541,
        title : "Deadpool & Wolverine",
        release_date : "2024-07-24",
        backdrop_path : "image/OIP.jpg ",
        poster_path : " image/th.jpg",
        category : "Drama",
    },

    {
        id : 533542,
        title : "Deadpool & Wolverine",
        release_date : "2024-07-24",
        backdrop_path : " image/th.jpg",
        poster_path : "image/OIP.jpg ",
        category : "Animation",
    },

    {
        id : 533543,
        title : "Soham Mohite",
        release_date : "2024-07-24",
        backdrop_path : "image/jkjkjk.jpg ",
        poster_path : " image/download.jpg",
        category : "Animation",
    },

    {
        id : 533544,
        title : "Deadpool & Wolverine",
        release_date : "2024-07-24",
        backdrop_path : "image/download.jpg ",
        poster_path : "image/jkjkjk.jpg ",
        category : "Thriller",
    },

    {
        id : 533548,
        title : "Deadpool & Wolverine",
        release_date : "2024-07-24",
        backdrop_path : "image/download.jpg ",
        poster_path : "image/jkjkjk.jpg ",
        category : "Scifi",
    }
]

let dom_contener = document.querySelector(".dom_contener");

let All = document.getElementById("All");
let Action = document.querySelector("#Action");
let Thriller = document.getElementById("Thriller");
let Animation = document.getElementById("Animation");
let Horrer = document.getElementById("Horrer");
let Drama = document.getElementById("Drama");
let Scifi = document.getElementById("Scifi");

let showData = (movies) =>{
    dom_contener.innerHTML = movies.map( (movie) => `
 <div style = "max-width:280px; text-align:center;">
     <div style = "padding:15px;" class = "hover_effect">
         <img src = ${movie.poster_path} class="imgg" />
     </div>
     <h3>${movie.title}</h3>
     <h5 style="color:orange;">${movie.release_date}</h5>
     <p>${movie.category}</p>
 </div>
`).join("");
}
showData(movies);

Action.addEventListener("click",() => {
    let newmovie = movies.filter( (movie) => movie.category === 'Action')
    showData(newmovie);
})

Thriller.addEventListener("click",() => {
    let newdata = movies.filter( (movie) => movie.category === "Thriller" )
    showData(newdata);
})

Animation.addEventListener("click",() => {
    let newmovie = movies.filter( (movie) => movie.category === "Animation" )
    showData(newmovie);
})

Horrer.addEventListener("click",() => {
    let newmovie = movies.filter( (movie) => movie.category === "Horrer" )
    showData(newmovie);
})

Drama.addEventListener("click",() => {
    let newmovie = movies.filter( (movie) => movie.category === "Drama" )
    showData(newmovie);
})

Scifi.addEventListener("click",() => {
    let newmovie = movies.filter( (movie) => movie.category === "Scifi" )
    showData(newmovie);
})

All.addEventListener("click", () => {
    let showData = (movies) =>{
        dom_contener.innerHTML = movies.map( (movie) => `
     <div style = "max-width:280px; text-align:center;">
         <div style = "padding:15px;" class = "hover_effect">
             <img src = ${movie.poster_path} class="imgg" />
         </div>
         <h3>${movie.title}</h3>
         <h5 style="color:orange;">${movie.release_date}</h5>
         <p>${movie.category}</p>
     </div>
    `).join("");
    }

    showData(movies);
})

//hidden menubar

 
