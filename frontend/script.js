
function loadEvent() {
 
    let rootElement = document.getElementById("root")


    let card2 = function(title, year, rate){
        return `
        <div class="card">
            <h2>${title}</h2>
            <div class="time">${year}</div>
            <div class="rate">${rate}</div>
        </div>
        `;
    }

    let renderAllCardElements = function(incomingMoviesArray){

        let renderedCardList = `<div class="cards">`;

        //for ciklus végigmegy a cards array-n//
       
        for (const incomingMovie of incomingMoviesArray) {

            renderedCardList += card2(incomingMovie.title, incomingMovie.year, incomingMovie.rate)

        }
        //for ciklus minden lépcsőjénél hozzáadja a renderedCardList-hez az adott elemet a megfelelő div card2-ben//

        renderedCardList += `</div>`

        console.log(renderedCardList)

        return renderedCardList //ez stringeket ad vissza//
    }


    let newGoodMovies = [];

    for (const movieSend of movies) {
        if (movieSend.year > 2000 && movieSend.rate >= 8) {

            newGoodMovies.push(movieSend);

        }
    }
    newGoodMovies.sort(function(a, b){return a.year - b.year})

    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies));

    // beküldi a renderAllCardElement-hez 
}

window.addEventListener("load", loadEvent);