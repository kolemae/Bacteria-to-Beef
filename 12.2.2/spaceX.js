// const url = "https://api.spacexdata.com/v2/launchpads";

// var receivedData = d3.json(url).then(receivedData => console.log(receivedData));
// // d3.json(url).then(spaceXResults =>
// //     console.log(spaceXResults[0]));
// // d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// // 12.3.1 skill drill
// var coordinates = receivedData.map(function(station){
//     return station.location[-2];
// });
// console.log(coordinates);

d3.json("samples.json").then(function(data){
    console.log("hello");
});