// var arr = ['aman','adi','aditya','matadeen','deepak','balu'];
// var btn = document.querySelector('button');

// var btn = addEventListener('click',function(){
//     var a = Math.floor(Math.random()*arr.length);
//     console.log(arr[a]);
// })

arr = [
    {
        team:'CSK',
        primary:'Yellow',
        secondary:'blue',
        Name:"Chennai Super Kings", // on screen
        Trophies:5, // on screen 
        Captian:'M.S.Dhoni' // on screen
    },
    {
        team:'RCB',
        primary:'Red',
        secondary:'Black'
    },
    {
        team:'MI',
        primary:'Blue',
        secondary:'Gold'
    },
    {
        team:'KKR',
        primary:'Purple',
        secondary:'Gold'
    },
    {
        team:'SRH',
        primary:'Orange',
        secondary:'Black'
    },
    {
        team:'DC',
        primary:'Blue',
        secondary:'crimson'
    },
    {
        team:'PKBS',
        primary:'Red',
        secondary:'Gold'
    },
    {
        team:'GT',
        primary:'DarkBlue',
        secondary:'skyblue'
    },
    {
        team:'LSG',
        primary:'Skyblue',
        secondary:'Orange'
    },
]

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[0].team);
// console.log(arr[0].primary);
// console.log(arr[0].secondary);
// console.log(arr[1].team);
// console.log(arr[2].team);
// console.log(arr[3].team);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);



var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

btn.addEventListener('click',function(){
    
    var winner = arr[Math.floor(Math.random()*arr.length)];
    // console.log(arr[num].team);
    h1.innerHTML= winner.team;
    h1.style.backgroundColor= winner.secondary;
    body.style.backgroundColor= winner.primary;


})