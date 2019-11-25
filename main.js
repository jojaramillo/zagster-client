// a memeory location that never changes
// const BASE_URL = "https://zagster-service.herokuapp.com"
//const PI = 3.14159

// jQuery command. wait until web page loads, then call function 
// whose name is in the parantheses
// function call means run the code
$(greeter)


// call function add (use it - make it run)
add(2,3);
//greeter is the function identirier. name is the funtions
//argument (info needed to do its job)
function add(num1 , num2){
  answer = num1 + num2;
  console.log("The answer is: " + answer);
  return answer;
}
function greeter (name) {
  alert("Welcome to" + name +"data visualization")
}
greeter ("Jo Jaramillo's")


var = {name: "Jo", age: 25, car: {model: "Subaru", year: 2012}}
console.log (" my name is " + person.name)
console.log (" my age " + person.age)
console.log (" my car model is " + person.car.model)

// $(updateGraph)

// function updateView() {
//   $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
// }

// function updateRideCount(data) {
//   numberOfRides = data.count
//   $("h2#rideCount").html(numberOfRides)
//   alert(numberOfRides);
//   console.log(numberOfRides);
// }

// function updateGraph() {
// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

//     // Configuration options go here
//     options: {}
// });
// }