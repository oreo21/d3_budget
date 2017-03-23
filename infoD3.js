var dataDef = [530.9, 629.8];
var dataEnergy = [4.0, 12.1];
var dataTrans = [76.5, 85.2];
var dataEdu = [66.1, 68.9];
var dataHealth = [55.0, 56.6];
var m = 2, dur = 1000;

var generateBars = function(){
    d3.select(".defense")
      .selectAll("div")
      .data(dataDef)
      .enter().append("div")
      .style("width", function(d){ return d + "px"; })
      .text(function(d){ return "$" + d; });

    d3.select(".energy")
      .selectAll("div")
      .data(dataEnergy)
      .enter().append("div")
      .style("width", function(d){ return d * 80 + "px"; })
      .text(function(d){ return "$" + d; });

    d3.select(".transportation")
      .selectAll("div")
      .data(dataTrans)
      .enter().append("div")
      .style("width", function(d){ return d * 10 + "px"; })
      .text(function(d){ return "$" + d; });

    d3.select(".education")
      .selectAll("div")
      .data(dataEdu)
      .enter().append("div")
      .style("width", function(d){ return d * 10 + "px"; })
      .text(function(d){ return "$" + d; });

    d3.select(".health")
      .selectAll("div")
      .data(dataHealth)
      .enter().append("div")
      .style("width", function(d){ return d * 10 + "px"; })
      .text(function(d){ return "$" + d; });
};

generateBars();

// var myFirstTransition = function(m) {
//   chart.selectAll('div')
// 	.data(nums)
// 	.transition()
// 	.style('width', function(d) {
// 	    return d * m + "px";
// 	});
// };
//
// var mySecondTransition = function(m, dur) {
//     chart.selectAll('div')
// 	.data(nums)
// 	.transition()
// 	.duration(dur)
// 	.style('width', function(d) {
// 	    return d * m + "px";
// 	});
// };
