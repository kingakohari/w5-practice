
function loadEvent() {
    let rootElement = document.getElementById("root");

    let card2 = function (title, year, rate){
        
            return `
            <div class="card">
                <h2>${title}</h2>
                <time>${year}</time>
                <p>${rate}</p>
            </div>
            `;
    }

    let renderAllCardElements = function(incomingMoviesArray) {

        let renderedCardList = "";  
        
        //for ciklus, végigmegy a movies array-n -> minden lépcsőjénél hozzáadja a renderedCardList-hez az adott elemet a megfelelő div card-ban -> returnöli az elkészült elemekkel feltöltött cardList-et//
        
        for (const incomingMovie of incomingMoviesArray){
            renderedCardList += `
            <div class="card">
                <h2>${incomingMovie.title}</h2>
                <time>${incomingMovie.year}</time>
                <p>${incomingMovie.rate}</p>
            </div>
            `;
        }

        console.log(renderedCardList);

        return renderedCardList;
    }

    let newGoodMovies = [];

    for (const movieSend of movies) {
        /* let newerThan2000 = false;

        if (movieSend.year > 2000) {
            newerThan2000 = true;
        }

        if (newerThan2000){
        rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate));
    } */

   /*  let floorRate = Math.floor(movieSend.rate) */

        if (movieSend.year > 2000 && movieSend.rate >= 8) {

            newGoodMovies.push(movieSend);

            /* rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, floorRate)); */
        }

/*  
        points.sort(function(a, b){return a - b});
        document.getElementById("demo2").innerHTML = points; */
        
    newGoodMovies.sort(function(a, b){return a.year - b.year});

    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies))
    }
}

window.addEventListener("load", loadEvent);
