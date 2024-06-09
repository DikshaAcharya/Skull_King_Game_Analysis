// Main script which contains the 3 functions for the visual anaylsis of one game of SkullKing: 
    // Network on the left side
    // Plot 1 on top right side
    // pPlot 2 on bottom right side.
// For infotmation:
        // ---------- Title ----------
        // comments...
        // ~~~~~ Start/End of generated code ~~~~~~

// ----------- Layout margins ----------- 
var margin = {top:10, right:40, bottom:30, left:40}
var width = 600;
var height = 600;

// ----------- Network SVG -----------

var NetworkContainer = d3.select("#network");

// Adjust positioning --> source: https://www.youtube.com/watch?v=g5bp02-CRAc
var network = NetworkContainer.append("svg")
    .attr("width", width + margin.left + margin.right )
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

network.append("rect")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "none")
    //.style("stroke", "black")
    //.style("stroke-width", "2px");

// Function loop generated through chatGPT --> source: https://chatgpt.com/share/27813a50-127b-447c-aebf-7aa9d08b8247
// The network was created by following 3 sources mentionned at line 43-45
// Some positions and colours might differ from the code provided from chatGPT as some adjustments where required at the end

function createNetwork(dataset) {


    NetworkContainer.selectAll("svg").remove();
    
    // Repeat to appear
    var network = NetworkContainer.append("svg")
        .attr("width", width + margin.left + margin.right )
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
    network.append("rect")
        .attr("width", width)
        .attr("height", height)
        .style("fill", "none")
        //.style("stroke", "black")
        //.style("stroke-width", "2px");

    // Main source for network = github --> source: https://github.com/BlastWind/D3.js-Tutorial/blob/master/d3.js%20tutorial/Part%205/starting_code.html
    //                                  --> source: https://maladesimaginaires.github.io/intnetviz/?author=moliere&play=l_avare
    //                           youtube --> source: https://www.youtube.com/watch?v=1vHjMxe-4kI&list=PLPtgdQ4YE9cgdPwOKShhPHdVEseLPGd_t&index=6
    // Network style (for inspiration): https://gist.github.com/emeeks/c2822e1067ff91abe24e
    // Basic function were inspired by in class
    var simulation = d3.forceSimulation(dataset.nodes)
        .force("link", d3.forceLink(dataset.links).id(function(d){return d.id}))
        .force("charge", d3.forceManyBody().strength(-4000))
        .force("center", d3.forceCenter(width/2+80, height/2-90))
        .on("tick", ticked);

    var links = network
        .append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(dataset.links)
        .enter()
        .append("line")
        // code adapted    
        // If condition --> source: http://www.d3noob.org/2013/01/select-items-with-if-statement-in-d3js.html
        .style("stroke-width", "2px")
        .style("fill", "none")
        .style("stroke", function(d) {
            if (d.weight == "0") {return "darkgrey"} 
            else if (d.weight == "1") {return "green"} 
            else if (d.weight == "2") {return "red"};    
        });

    var nodes = network.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(dataset.nodes)
        .enter()
        .append("circle")
        // code adapted
        .attr("r", d => (d.points + 28)/d.tours)
        .attr("fill", "green")
        .classed("node-hover", true)
        .on('mouseover', function (event, d){
            d3.select(this).transition()
                .duration('100')
                .attr("r", d => ((d.points + 28)/d.tours)+10);})
        .on('mouseout', function (event, d) {
            d3.select(this).transition()
                    .duration('200')
                    .attr("r", d => (d.points + 28)/d.tours);
            d3.select("#label").remove();
        }); 

    // To adjust the size of the node with respect to the player's points (code adapted)
    var maxPoints = d3.max(dataset.nodes, (d) => d.points);
    nodes.attr("fill", function(d){
        if (d.points == maxPoints) {return "gold"}
        else {return "darkgrey"};
    });
   
    nodes.call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    // Add labels for the nodes (code adapted)
    var texts_1 = network
        .append("g")
        .selectAll("circle")
        .data(dataset.nodes)
        .enter()
        .append("text")
        .text(d=> "Player " + d.id)
        .attr("font-size", "18px");

    function ticked() {
        texts_1.attr('x', d=>d.x+5);
        texts_1.attr('y', d=>d.y+5);
        links
            .attr("x1", function(d) {
                return d.source.x;
            })
            .attr("y1", function(d) {
                return d.source.y;
            })
            .attr("x2", function(d) {
                return d.target.x;
            })
            .attr("y2", function(d) {
                return d.target.y;
            });
        nodes
            .attr("cx", function(d) {
                return d.x;    
            })
            .attr("cy", function(d) {
                return d.y;
            });
    } 
    // Error in drag functions solved through chatGPT --> source: https://chatgpt.com/share/3144c16b-37b3-43b0-9781-fe2f86afe804
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }
    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    // ------ Add Title ------- 
    network.append("text")
        .data(dataset.nodes)
        .attr("x", width/2-85)
        .attr("y", height-200)
        .attr("font-size", "16px")
        .attr("font-family", "Papyrus, sans-serif")
        .text(d => "Round " + d.tours)

    // ------ Add legend ------- 
    // nodes and text --> source: https://d3-graph-gallery.com/graph/custom_legend.html
    network.append("circle")
        .attr("cx", width/2-100)
        .attr("cy", height-180)
        .attr("r", 8)
        .style("fill", "darkgrey");
    network.append("text")
        .attr("x", width/2-85)
        .attr("y", height-175)
        .attr("font-size", "16px")
        .text("Player number");

    network.append("circle")
        .attr("cx", width/2-100)
        .attr("cy", height-155)
        .attr("r", 8)
        .style("fill", "yellow");
    network.append("text")
        .attr("x", width/2-85)
        .attr("y", height-150)
        .attr("font-size", "16px")
        .text("Player with maximum points");
     
    // Links --> source : https://d3-graph-gallery.com/graph/shape.html
    // Green line 
    network.append("line")
        .attr("x1", width/2+175)
        .attr("x2", width/2+125)        
        .attr("y1", height-180)
        .attr("y2", height-180)
        .attr("stroke", 'green')
        .style("stroke-width", "2px");
    network.append("text")
        .attr("x", width/2+180)
        .attr("y", height-175)
        .attr("font-size", "16px")
        .text("Mutually winning");

    // Red line
    network.append("line")
        .attr("x1", width/2+175)
        .attr("x2", width/2+125)        
        .attr("y1", height-155)
        .attr("y2", height-155)
        .attr("stroke", 'red')
        .style("stroke-width", "2px");
    network.append("text")
        .attr("x", width/2+180)
        .attr("y", height-150)
        .attr("font-size", "16px")
        .text("Mutually loosing");
    // -------- Click on a node = activate player function --------
    // Inspired by : https://github.com/maladesimaginaires/intnetviz/blob/master/include/js/main.js
    nodes.on("click", function(event, d) {
        createPlot_player(P_1.nodes, d.id, d.tours)
    });
}
// To display the first round 
createNetwork(T_1);

// -------- Loop through all T --------- 
// Generated with chatGPT --> source: https://chatgpt.com/share/27813a50-127b-447c-aebf-7aa9d08b8247
// ~~~~~~ Start of generated code ~~~~~~~~
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to each button to display the associated network
    for (var i = 1; i <= 10; i++) {
        var button = document.getElementById("T" + i);
        button.addEventListener("click", function(event) {   
        
            var buttonId = event.target.id;
            console.log("Button id:", buttonId);
            var tourNumber = buttonId.substring(1); 
            console.log("Tour number:", tourNumber)
            network.selectAll("*").remove()
            createNetwork(window["T_"+ tourNumber]);
        

            createPlot_round(window["T_"+ tourNumber]); // added later to have this function also activated when a round is clicked (not from chatGPT)
            //PlotContainer2.selectAll("svg").remove();
            PlotContainer2.selectAll(".player-info").remove();
        });
    }
});
// ~~~~~~ End of generated code ~~~~~~~~

// ----------- Plot SVG -----------
var PlotContainer1 = d3.select("#plot1");

// Adjust positioning --> source: https://d3js.org/d3-axis and https://www.youtube.com/watch?v=g5bp02-CRAc
var plot1 = PlotContainer1.append("svg")
    .attr("width", width + margin.left + margin.right )
    .attr("height", height/2 + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); 
plot1.append("rect")
    .attr("width", width)
    .attr("height", height/2)
    .style("fill", "none")
    //.style("stroke", "black")
    //.style("stroke-width", "2px");
plot1.append("text")
    .attr("x", width/2-margin.left-margin.right-200)
    .attr("y", 200)
    .attr("font-family", "Papyrus")
    .attr("font-size", "20px")
    //.text("YoHoHo! Please select a round or a player");

// ------- Plot linked to rounds -------
function createPlot_round(dataset) {
    
    PlotContainer1.selectAll("svg").remove();

    var plot_round = PlotContainer1.append("svg")
        .attr("width", width + margin.left + margin.right )
        .attr("height", height/2 + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    plot_round.append("rect")
        .attr("width", width)
        .attr("height", height/2)
        .style("fill", "none")
        //.style("stroke", "black")
        //.style("stroke-width", "2px");

    // Access data from data.js
    const player = dataset.nodes.map(node => node.id);
    const tours = dataset.nodes.map(node => node.tours);
    const points = dataset.nodes.map(node => node.points);
    const mise = dataset.nodes.map(node => node.mise);
    
    console.log("Player id:", d3.max(player));
    console.log("Round", tours);
    console.log("Player points:", points);
    console.log("Player mise:", mise);

    // Inspired by : course content
    // Scale axis 
    const xScale = d3.scaleLinear()
        .domain(d3.extent(player))
        .range([margin.left,width-2*(margin.right+margin.left)+margin.left]);
    
    const yScale = d3.scaleLinear()
        .domain([-10,d3.max(points)])
        .range([height/2, 20]);
    
    const yScale2 = d3.scaleLinear()
        .domain([0, 5])
        .range([height/2, 20])

    // ------- Plotting points --------
    // Mouseover effect --> source: https://medium.com/@kj_schmidt/hover-effects-for-your-scatter-plot-447df80ea116
    plot_round.selectAll("dot")
        .data(points)
        .enter()
        .append("circle")
        .attr("cx", (d,i) => xScale(player[i]))
        .attr("cy", (d) => yScale(d))
        .attr("r", 5)
        .on('mouseover', function (event, d){
            d3.select(this).transition()
                .duration('100')
                .attr("r", 7);
            // Labels on hover generated from chatGPT --> source: https://chatgpt.com/share/62ac1403-bbef-447f-8a01-8ae5157d78c6
            plot_round.append("text")
                //.attr("x", (d) => d.cx-10) not working
                //.attr("y", (d) => d.cy-10) not working
                //.text(points) not working
            // ~~~~ Start of generated code ~~~~~
                .attr("id", "label")
                .attr("x", d3.select(this).attr("cx")-20)
                .attr("y", d3.select(this).attr("cy"))
                .text(d)
            // ~~~~~ End of generated code ~~~~
                .attr("font-family", "Papyrus")
                .attr("font-size", "12px");})
        .on('mouseout', function (event, d) {
            d3.select(this).transition()
                    .duration('200')
                    .attr("r", 5);  
            // ~~~~ Start of generated code ~~~~~ link on line 307
            d3.select("#label").remove();
            // ~~~~~ End of generated code ~~~~
        })
        .style("fill", "green");

    // ------- Plotting bids --------
    plot_round.selectAll("dot")
        .data(mise)
        .enter()
        .append("circle")
        .attr("cx", (d, i) =>  xScale(player[i]))
        .attr("cy", (d) => yScale2(d))
        .attr("font-family", "Papyrus")
        .attr("font-size", "12px")
        .attr("r", 5)
        .on('mouseover', function (event, d){
            d3.select(this).transition()
                .duration('100')
                .attr("r", 7);
            plot_round.append("text")
                .attr("id", "label")
                .attr("x", d3.select(this).attr("cx")-7)
                .attr("y", d3.select(this).attr("cy")- 10)
                .text(d)
                .attr("font-family", "Papyrus")
                .attr("font-size", "12px");})
        .on('mouseout', function (event, d) {
            d3.select(this).transition()
                    .duration('200')
                    .attr("r", 5);
            d3.select("#label").remove();
        })
        .style("fill", "brown");
    
    // Display axis --> source: https://d3js.org/d3-axis
    // Axis without decimal values --> source: https://jesperkiledal.com/blog/d3-axis-tips-and-tricks/
    plot_round.append("g")
        .attr("transform", `translate(0,${height/2})`)
        .call(d3.axisBottom(xScale).ticks(6)); 
    
    plot_round.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale));

    plot_round.append("g")
        .attr("transform", `translate(${width-2*(margin.right+margin.left)+margin.left},0)`)
        .call(d3.axisRight(yScale2).ticks(5));
    
    //------- Title and legend -------
    plot_round.append("text")
        .attr("x", width/2-margin.left-margin.right-70)
        .attr("y", 5)
        .attr("font-family", "Papyrus")
        .attr("font-size", "20px")
        .text("Points and bids of round " + tours[1]);

    plot_round.append("text")
        .attr("x", width/2-margin.left-margin.right+20)
        .attr("y", height/2+23)
        .attr("font-family", "Papyrus")
        .attr("font-size", "18px")
        .text("Pirates");

    plot_round.append("text")
        .attr("y", 10)
        .attr("x", -height/4-20)
        .attr("transform", "rotate(-90)")
        .attr("font-family", "Papyrus")
        .attr("font-size", "18px")
        .style("fill", "green")
        .text("Points");

    plot_round.append("text")
        .attr("y", width-margin.right-margin.left-10)
        .attr("x", -height/4-20)
        .attr("transform", "rotate(-90)")
        .attr("font-family", "Papyrus")
        .attr("font-size", "16px")
        .style("fill", "brown")
        .text("Bids");
}

// ----------- Plot 2 SVG -----------
var PlotContainer2 = d3.select("#plot2");

// Adjust positioning --> source: https://d3js.org/d3-axis and https://www.youtube.com/watch?v=g5bp02-CRAc
var plot2 = PlotContainer2.append("svg")
    .attr("width", width + margin.left + margin.right )
    .attr("height", height/2 + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
plot2.append("rect")
    .attr("width", width)
    .attr("height", height/2)
    .style("fill", "none")
    //.style("stroke", "black")
    //.style("stroke-width", "2px");
plot2.append("text")
    .attr("x", width/2-margin.left-margin.right-70)
    .attr("y", 150)
    .attr("font-family", "Papyrus")
    .attr("font-size", "20px")
    //.text("YoHoHo! Please select a player");

// ------- Plot linked to players -------
function createPlot_player(dataset, playerID, clickedround) {

    PlotContainer2.selectAll("svg").remove();

    var plot_player = PlotContainer2.append("svg")
        .attr("width", width + margin.left + margin.right )
        .attr("height",  height/2 + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    plot_player.append("rect")
        .attr("width", width)
        .attr("height", height/2)
        .style("fill", "none")
        //.style("stroke", "black")
        //.style("stroke-width", "2px");

    // Access data from data.js (P_1)
    // .find() function --> source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    var playerdata = dataset.find(d => d.id == playerID);
    const tours = playerdata.tours;
    const points = playerdata.points;
    const estimation = playerdata.estimation;
    const mise = playerdata.mise;

    console.log("dataset P_1:", dataset);
    console.log("playerdata:", playerdata)
    console.log("Tours:", tours);
    console.log("Points:", points)
    console.log("Estimation:", estimation)
    console.log("Mise:", mise)    
    console.log("clicked round",clickedround)
    
    // Scale axis --> Inspired by: course content and source: https://www.youtube.com/watch?v=g5bp02-CRAc
    const xScale = d3.scaleLinear()
        .domain(d3.extent(tours))
        .range([margin.left, width-2*(margin.right+margin.left)+margin.left]);

    const yScale = d3.scaleLinear()
        .domain([-50, 400])
        .range([height/2+20, 20]);
    
    // ------- Plotting lines --------
    // add lines --> source: https://d3-graph-gallery.com/graph/line_basic.html
    plot_player.append("path")
            .datum(estimation)
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-width", 1,5)
            .attr("d", d3.line()
                .x((d,i) => xScale(i+1))
                .y(d => yScale(d)))

    plot_player.append("path")
        .datum(points)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 1,5)
        .attr("d", d3.line()
            .x((d,i) => xScale(i+1))
            .y(d => yScale(d)))

    // Add cercles and mouseover effect : https://medium.com/@kj_schmidt/hover-effects-for-your-scatter-plot-447df80ea116
    plot_player.selectAll("dot")
    .data(estimation)
    .enter()
    .append("circle")
    .attr("cx", function(d, i) { return xScale(i + 1); })
    .attr("cy", function(d) { return yScale(d); })
    .attr("r", 5)
    .on('mouseover', function (event, d){
        d3.select(this).transition()
            .duration('100')
            .attr("r", 7);
        plot_player.append("text")
            .attr("id", "label")
            .attr("x", d3.select(this).attr("cx")-7)
            .attr("y", d3.select(this).attr("cy") - 10)
            .text(d)
            .attr("font-size", "12px")
            .attr("font-family", "Papyrus");})
    .on('mouseout', function (event, d) {
        d3.select(this).transition()
             .duration('200')
             .attr("r", 5);
        d3.select("#label").remove();
        })
    .style("fill", "blue")    
  /*       .style("fill", function(d, i) {
            if (i == clickedround-1) {return "red"}
            else {return "grey"};
        })
        .style("r", function(d, i) {
            if (i == clickedround-1) {return "10"}
            else {return "5"};
        }); */
        
    plot_player.selectAll("dot")
        .data(points)
        .enter()
        .append("circle")
        .attr("cx", (d, i) => xScale(i+1))
        .attr("cy", (d) =>  yScale(d))
        .attr("r", 5)
        .on('mouseover', function (event, d){
            d3.select(this).transition()
                .duration('100')
                .attr("r", 7);
            plot_player.append("text")
                .attr("id", "label")
                .attr("x", d3.select(this).attr("cx")-20)
                .attr("y", d3.select(this).attr("cy"))
                .text(d)
                .attr("font-size", "12px")
                .attr("font-family", "Papyrus");})
        .on('mouseout', function (event, d) {
            d3.select(this).transition()
                 .duration('200')
                 .attr("r", 5);
            d3.select("#label").remove();
        })
        .style("fill", "green")

    plot_player.append("g")
        .attr("transform", `translate(0,${height/2})`)
        .call(d3.axisBottom(xScale));
    
    plot_player.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale));

    //------- Title and legend -------
    plot_player.append("text")
        .attr("x", width/2-margin.left-margin.right-100)
        .attr("y", 30)
        .attr("font-size", "20px")
        .attr("font-family", "Papyrus")
        .text("Points gained vs estimated by Player " + playerID);

    plot_player.append("text")
        .attr("x", width/2-margin.left-margin.right+20)
        .attr("y", height / 2 + 30)
        .attr("font-family", "Papyrus")
        .attr("font-size", "16px")
        .text("Round");

    plot_player.append("text")
        .attr("y", 10)
        .attr("x", -height/4-70)
        .attr("transform", "rotate(-90)")
        .attr("font-family", "Papyrus")
        .attr("font-size", "18px")
        .style("fill", "green")
        .text("Points/");
    plot_player.append("text")
        .attr("y", 10)
        .attr("x", -height/4-10)
        .attr("transform", "rotate(-90)")
        .attr("font-family", "Papyrus")
        .attr("font-size", "18px")
        .style("fill", "blue")
        .text("Estimates");
    
    // Supplementary information on Information     
    PlotContainer2.selectAll("#player-info").remove();
    //mutltiple text lines to be displayed like in html --> source: https://www.codecademy.com/resources/docs/d3/styling/html
    PlotContainer2.append("div")
        .attr("id", "player-info")
        .style("left", (width + 100) + "px")
        //.style("top", (height/2)+ "px")
        .style("font-size", "14px")
        .style("margin-top", "-250px")
        .style("margin-left", "100px")
        .html(`Player: ${playerID}<br>Round: ${tours[clickedround - 1]}<br>Points: ${points[clickedround - 1]}<br>Estimation: ${estimation[clickedround - 1]}<br>Bet: ${mise[clickedround - 1]}`);
}

// ----------- Game Rules -----------
// Slide div generated by chatGPT --> source: https://chatgpt.com/share/df03fe9d-234c-45e5-b257-52507abdf9c4
//~~~~ Start of generated code ~~~~~
document.addEventListener('DOMContentLoaded', function() {
    // text content --> source: https://stoysnetcdn.com/gdpa/gdpa3056/gdpa3056.jpg
    // text variable --> source: https://stackoverflow.com/questions/58771487/create-a-button-to-hide-show-rect-and-text-in-d3-js
    var rules = [
        { text: "Objective:"},
        { text: "The goal of the game is to score the most points by correctly predicting the number of bids you will win each round."},
        //{ text: "correctly predicting the number of bids you will"},
        //{ text: "win each round."},
        { text: "Scoring:"},
        { text: "1) If a player's bid matches the number of wins:"},
        { text: "  They score 20 points per bid"},
        { text: "2) Plus a bonus in case of:"},
        { text: "- Winning a bid with the Skull King = 50pts"},
        { text: "- Catching the Mermaid with the Skull King = 30pts"},
        { text: "3) If a player's bid is incorrect:"},
        { text: "They lose 10 points for each bid they were off"},
    ];

    var rulesTextDiv = document.getElementById('rules_text');

    rules.forEach(function(line) {
        var p = document.createElement('p');
        p.textContent = line.text;
        rulesTextDiv.appendChild(p);
    });

    var infoButton = document.getElementById('Rules_div');
    infoButton.addEventListener('click', function() {
        if (rulesTextDiv.style.display === 'none' || rulesTextDiv.style.display === '') {
            rulesTextDiv.classList.remove('slide-out');
            rulesTextDiv.classList.add('slide-in');
            rulesTextDiv.style.display = 'block';
        } else {
            rulesTextDiv.classList.remove('slide-in');
            rulesTextDiv.classList.add('slide-out');
            setTimeout(function() {
                rulesTextDiv.style.display = 'none';
            }, 500);
        }
    });

});
//~~~~ End of generated code ~~~~~

// Game information Audio --> source: https://www.youtube.com/watch?v=0R6rZngcHGg
/*var game_text = [
    { text: "AHOY MATEY!"},
    { text: "Get ready for a challenge" },
    { text: "you'll enjoy for years to come!"},
    { text: "Consider yer cards to"},
    { text: "make a scheme:"},
    { text: "Make yer bid on the"},
    { text: "count of three..."},
    { text: "With a Yo,Ho,Ho,"},
    { text: "you will see"},
    { text: "What each player's bid will be!"},
    { text: "Bid one, bid big,"},
    { text: "or even bid zero!"},
    { text: "Get yer exact bid to"},
    { text: "advance yer score"},
    { text: "Beware of the Jolly Roger,"},
    { text: "Pirates, Tigress & Skull King!"},
    { text: "Every hand can be"},
    { text: "a winning hand!"},
    { text: "Bid right! Then get yer bid!"}
];*/
// Converted text to audio --> source: https://voicemaker.in/
const audio = new Audio();
audio.src="./Data/pirate_speech.mp3";
audio.classed("info-hover", true);
