/* console.log(a)
console.log(b)
console.log(c) */


/* console.log("Szia!")
console.log('Szia!')
console.log(`Szia!`)

console.log(typeof 2)
console.log(typeof NaN)
console.log(0/0)
console.log(2.14) */

/* console.log(true)
console.log(false)

console.log(typeof undefined)
console.log(typeof null) */

/* console.log(
    {
        title: "Start coding",
        "type": "solo",
        difficulty: 4.1,
        "usefulness": 4.2,
        enjoyability: 3.4,
        "materials": 3.4,
        tasks: [
            {
                title: "Bank accounts",
                description: ""
            },
            {
                title: "100 doors",
                description: ""
            },
            {
                title: "Word filter",
                description: ""
            }
        ]
    }
) */



/*  function d(){
     if(1+1===2){
        var a = "Hello1"
        let b = "Hello2"
        const c = "Hello3"
     }

    console.log(a)
    console.log(b)
    console.log(c)
}
d() */

/* let e = 1
console.log(e)
e = 2
console.log(e)
e = e*2
console.log(e) */

/* function multiplyByTwo(num){
    console.log(num)
    return num*2
}
let f = multiplyByTwo(1)

console.log(f)

console.log(multiplyByTwo (1)) 

console.log(num) //num is not defined (függvény belsejében létezik csak, itt nem) */

/* let g = {
    myMethod: function (){
        console.log("Hello");
    }
}

g.myMethod() */

/* let window = {
    addEventListener: function (eventName,eventFunction){
        if (eventName === "load"){
            eventFunction()
        }
    }
}
window.addEventListener("load", loadEvent) */

/* let h = {
    anotherMethod: function (text){
        return `You sent the following argument to this method: ${text}`
    }
}

let i = h.anotherMethod("argument")
console.log(i);
console.log(h.anotherMethod("another argument")); */

/* let myString = "Mikkamakka"
let mySecondString = myString;
let myThirdString = "Mikkamakka"

console.log(myString);
console.log(mySecondString);
console.log(myString===mySecondString);
console.log(myString===myThirdString); */

/* let myObject = {
    myString: "Mikkamakka"
}

let mySecondObject = myObject;

let myThirdObject = {
    myString: "Mikkamakka"
}

mySecondObject.myString = "domdodom";

let myFourthObject = {...myObject}

myFourthObject.myString = "Vacskamati"

console.log(myObject.myString);
console.log(myFourthObject.myString); */

/* console.log(myObject === mySecondObject);
console.log(myObject === myThirdObject); */


/* console.log(""==="");
console.log({}==={}); */

/* window. addEventListener("load", function(){
    console.log("My first function") -> anonymous function
}) */

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
};
    
    rootElement.insertAdjacentHTML("beforeend", card2(movies[7]));

    let favMovie = {
        "title": "Moulin Rouge",
        "year": 2004,
        "rate": 9.9
    }

    rootElement.insertAdjacentHTML("beforeend", card2(favMovie.title, favMovie.year, favMovie.rate));

    let anotherFavMovie = {
            "title": "The Last Scoutboy",
            "year": 1991,
            "rate": 7.0
    }
    
    rootElement.insertAdjacentHTML("beforeend", card2(anotherFavMovie.title, anotherFavMovie.year, anotherFavMovie.rate));

    for (const movieSend of movies) {
        
        /* movie.title = "Hello!" */

        rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate));
    }
    
    console.log(movies);
}

window.addEventListener("load", loadEvent)