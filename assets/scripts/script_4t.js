nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true);

    d3.select("#chart svg")
        .datum(exampleData())
        .transition().duration(350)
        .call(chart);

  return chart;
});

nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true)     
      .labelThreshold(.05) 
      .labelType("percent")
      .donut(true)         
      .donutRatio(0.35)     
  .growOnHover(false)
      ;

    d3.select("#chart2 svg")
        .datum(exampleData())
        .transition().duration(350)
        .call(chart);

  return chart;
});

function exampleData() {
  return  [
      { 
        "label": "Μηλιές",
        "value" : 12697
      } , 
      { 
        "label": "Αχλαδιές",
        "value" : 7973
      } , 
      { 
        "label": "Ροδακινιές",
        "value" : 20550
      } , 
      { 
        "label": "Βερικοκιές",
        "value" : 8362
      } , 
      { 
        "label": "Κερασιές",
        "value" : 15162
      } , 
      { 
        "label": "Πορτοκαλιές",
        "value" : 53982
      } , 
      { 
        "label": "Λεμονιές",
        "value" : 22724
      } , 
      { 
        "label": "Μικρόκαρπα εσπεριδοειδή",
        "value" : 17070
      },
	  { 
        "label": "Ελιές",
        "value" : 463889
      }
    ];
}
