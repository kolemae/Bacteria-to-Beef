// var sortedCities = cityGrowths.sort( => a.Increase_from_2016 -
//     b.Increase_from_2016);

// var topFiveCities = sortedCities.slice(0,5);

// var topFiveCityNames = cityGrowths.map(city => city.City);
// var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

var sortedPop = cityGrowths.sort( => a.population - 
    b.population);

var sevenLargestCities = sortedPop.slice(0,7);

var largestCityNames = cityGrowths.map(city => city.City);
var largestCityPop = cityGrowths.map(city => parseInt(city.population));

var trace = {
    x: largestCityNames,
    y: largestCityPop,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Seven Largest Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);