// Original code
// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// Own line plot
// Plotly.newPlot("plotArea", [{x: [5, 9, 11], y: [22, 33, 44]}]);

// Bar chart 12.1.3
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };

// Plotly.newPlot("plotArea", [trace], layout);

// 12.1.3 Skill Drill
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Bar' Chart",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "% of Drinks Ordered"}
//    };
//    Plotly.newPlot("plotArea", data, layout);

// 12.1.4 Pie Chart
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Pie' Chart",
//    };
//    Plotly.newPlot("plotArea", data, layout);

// 12.1.4 skill drill - Scatter Plot
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     mode: 'markers',
//     type: 'scatter',
//     marker: { size: 12 }
//    };

// var data = [trace];

// var layout = {
//     title: "Scattered Drinks",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "% of Drinks Ordered"}
//    };

//    Plotly.newPlot("plotArea", data, layout);

// 12.2.1
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(function(num){
//     return num * 2;
// });
// console.log(doubled);

// 12.2.1 skill drill
// var numbers = [0,2,4,6,8];
// var addFive = numbers.map(function(num){
//     return num + 5;
// });
// console.log(addFive);

// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);

// 12.2.1 skill drill
// var cityPop = cities.map(function(city){
//     return city.population;
// });
// console.log(cityPop);

// var numbers = [1,2,3,4,5];

// var larger = numbers.filter(function(num){
//     return num > 1;
// });

// console.log(larger);

// 12.2.1 skill drill - answer found at https://stackoverflow.com/questions/40454296/filter-a-list-element-starting-with-a-letter-in-javascript
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// var startsWithS = words.filter((word) => word.startsWith("s"));
// console.log(startsWithS);

// var numbers = [1,2,3,4,5];

// var doubled = numbers.map(num => num * 2);
// console.log(doubled);

// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b);
// console.log(sortedAge);

// var integers = [0,1,2,3,4,5];
// var slice1 = integers.slice(0,2);

// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// var slice = words.slice(0,3);
// console.log(slice);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice = words.slice(3, );
console.log(slice);