for (let i = 0 initial expression)
for (let i = 0; condition)
for (let i = 0; i < 5; incremint expression)
for (let i = 0; i < 5; i++) {
    // display 'hello world on the console//
    console.log('Hello World');
    // 5 hello world messages//
}
//the conditoin is evaluated and because the condition is true the condition is executed//
console.log('Hello World', i); 
    //Hello World 0
    //Hello World 1
    //2
    //3
    //4
for (let i =1; i <= 5; i++) {

}
console.log('Hello World')
    //Hello World 1
    //Hello World 2
    //3
    //4
    //5
document.createElement //dynamically create html elements 
let newElement = document.createElement('div') ;

console.log(newElement)
    //<div></div>
console.dir(newElement)
    //see all the properties of this object in f12
let newElement = document.createElement('input') ;
    //making it into an import element
document.body.appendChild(newElement);
    //adds this element to the body tag
<style>
.wrapper{
    display:grid;
    grid-teplate-colums: 40% 30% 40%;
    //splitting it into 3 collumns
}
.wrapper > div{
    background:#eee;
    padding:1em;
}
.wrapper > div:nth-child(odd) {
    background:#ddd;
}
</style>
    <div class="wrapper">
    </div>
    text
    </div>
</div>
//grid layout 
//<!DOCTYPE html>
//<head>
  //<title>Anna Dowlin</title>
  //<style>
    //body {
    //  text-align: center;
    //  background: url("http://dash.ga.co/assets/anna-bg.png");
    //  background-size: cover;
    //  background-position: center;
    //  color: white;
    //  font-family: helvetica;
    //}
    //p {
    //  font-size: 22px;
    //}
    //input {
    //  border: 0;
    //  padding: 10px;
    //  font-size: 18px;
    //}
    //input[type="submit"] {
    //  background: red;
    //  color: white;
    //}
  //</style>
//</head>
//<body>
  //<img src="/assets/anna.png">
  //<p>Hi! I'm Anna, a NYC-based marketer. Say hello!</p>
  //<input type="email" placeholder="Your email">
  //<input type="submit">
//</body>

// ARROW FUNCTIONS //

function multiplyBy2(input) { return input * 2; }

const multiplyBy2 = (input) => { return input*2 }
//peramiter name is input//
//declare function and multiplly it by 2 and there is no change//
const multiplyBy2 = (input) => input*2

const multiplyBy2 = input => input*2 
 
const output = multiplyBy2(3) //6
//read out//
// the constant output running the function multiplyBy2 execution contenxt//
//left side- return input by 2 
//^ 3*2
// 6
