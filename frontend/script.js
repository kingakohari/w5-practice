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

let h = {
    anotherMethod: function (text){
        return `You sent the following argument to this method: ${text}`
    }
}

let i = h.anotherMethod("argument")
console.log(i);
console.log(h.anotherMethod("another argument"));