/*

In-class activity 08 starter code
Prof. Mosca 
Modified: 12/08/21 

*/

// Build your scatterplot in this file 

const width = 900; 
const height = 450; 
const margin = {left:50, right:50, bottom:50, top:50}; 
const yTooltipOffset = 15; 

const svg3 = d3
  .select("#csv-scatter")
  .append("svg")
  .attr("width", width-margin.left-margin.right)
  .attr("height", height - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, width, height]);


d3.csv("data/scatter.csv").then((data) => { 

// Finding the maximum score value
let maxY3 = d3.max(data, function(d) {return d.score; });

// Finding the maximum score value
let maxX3 = d3.max(data, function(d) {return d.day;});

// Creates a Y scale based on MaxY value  
let yScale3 = d3.scaleLinear()
            .domain([0,maxY3])
            .range([height-margin.bottom,margin.top]); 

// creates an X scale based on number of data entries
let xScale3 = d3.scaleLinear()
            .domain([0,maxX3])
            .range([margin.left, width - margin.right])
            .padding(0.1); 

// Adding Y axis 
svg3.append("g")
   .attr("transform", `translate(${margin.left}, 0)`) 
   .call(d3.axisLeft(yScale3)) 
   .attr("font-size", '20px'); 

// Adding X axis
svg3.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`) 
    .call(d3.axisBottom(xScale3) 
            .tickFormat(i => data[i].name))  
    .attr("font-size", '20px');

}





