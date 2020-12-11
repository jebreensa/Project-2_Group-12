var stateselect2 = "US"
var Yearselect2 = "2019"


function getState2()
{
    var stateselect2 = document.getElementById("list2").value;
    console.log(stateselect2);

    Plotly.d3.json("https://raw.githubusercontent.com/jebreensa/Project-2_Group12/main/static/js/data.json", function(err, rows){
        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
      }

    var data2 = [{
        type: 'bar',
        x: unpack(rows, 'Drug Name'),
        y: unpack(rows, 'Death Count'),
        transforms: [
        {
        type: 'filter',
        target: unpack(rows, 'Year'),
        operation: '=',
        // want to change the value below to something defined by a dropdown
        value: Yearselect2
        }, 
        {
        type: 'filter',
        target: unpack(rows, 'State'),
        // want to change the value below to something defined by a dropdown
        operation: '=',
        value: stateselect2
        },
        {
        //   type: 'filter',
        //   target: unpack(rows, 'Month'),
        //   // want to change the value below to something defined by a dropdown
        //   operation: '=',
        //   value: 'July'
        },
        {
            type: 'aggregate',
            groups: unpack(rows, 'Month'),
            aggregations: [
            {target: 'y', func: 'avg'},
            ]
        }
        ]
        }]
      

      
      var layout2 = {
          // title: "Comparison 1",
          xaxis: { title: "Drug Type"},
          yaxis: { title: "Total Deaths"}
        }
      
      Plotly.newPlot('plot2', data2, layout2)
      
    });
}
getState2();

function getYear2()
{
    var Yearselect2 = document.getElementById("list3").value;
    console.log(Yearselect2);

    Plotly.d3.json("https://raw.githubusercontent.com/jebreensa/Project-2_Group12/main/static/js/data.json", function(err, rows){
        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
      }

    var data2 = [{
        type: 'bar',
        x: unpack(rows, 'Drug Name'),
        y: unpack(rows, 'Death Count'),
        transforms: [
        {
        type: 'filter',
        target: unpack(rows, 'Year'),
        operation: '=',
        // want to change the value below to something defined by a dropdown
        value: Yearselect2
        }, 
        {
        type: 'filter',
        target: unpack(rows, 'State'),
        // want to change the value below to something defined by a dropdown
        operation: '=',
        value: stateselect2
        },
        {
        //   type: 'filter',
        //   target: unpack(rows, 'Month'),
        //   // want to change the value below to something defined by a dropdown
        //   operation: '=',
        //   value: 'July'
        },
        {
            type: 'aggregate',
            groups: unpack(rows, 'Month'),
            aggregations: [
            {target: 'y', func: 'avg'},
            ]
        }
        ]
        }]
      

      
      var layout2 = {
          // title: "Comparison 1",
          xaxis: { title: "Drug Type"},
          yaxis: { title: "Total Deaths"}
        }
      
      Plotly.newPlot('plot2', data2, layout2)
      
    });
}
getYear2();