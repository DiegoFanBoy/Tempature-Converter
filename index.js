let fahrenheit;
let celsius;
let celsius1;
let celsius2;
let celsius3;
let fahrenheit1;
let fahrenheit2;
let fahrenheit3;
let button1 = document.getElementById('button1');
let button2 = document.getElementById("button2");
button1.addEventListener('click', function(){
    document.getElementById("h3").innerHTML = ("Celsius to Fahrenheit");
    document.getElementById("button2").onclick = function () {
    let fahrenheit = document.getElementById("input1").value
   let celsius = (fahrenheit * 1.8);
   let celsius1 = (celsius + 32);
   console.log(celsius1);
   celsius2 = Math.round(celsius1);
   console.log(celsius2);
   document.getElementById("da").innerHTML = ("Tempature in Fahrenheit is " + celsius2 + "°" )
    }
});
button2.addEventListener('click', function () {
    button2 === true 
    let celsius3 = document.getElementById("input1").value
    let fahrenheit1 = (celsius3 - 32);
let fahrenheit2 = (fahrenheit1 * 0.556);
let fahrenheit3 = Math.round(fahrenheit2);
document.getElementById("da"). innerHTML = ("Tempature in Celsius " + fahrenheit3 + "°")
   });