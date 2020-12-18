google.charts.load('current', {packages: ['corechart']});
//Libreria que se quiere cargar
google.charts.setOnLoadCallback(drawChart);
var poblacion=
    [
        ["2017", 0, "color:green; opacity:0.2"],
        ["2018", 0, "color:green; opacity:0.5"],
        ["2019", 0, "color:green; opacity:0.8"],
        ["2020", 0, "color:green; opacity:0.4"],
    ];
function drawChart() {
    //Crear  dataTable
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Año');
    data.addColumn('number', 'Poblacion');
    data.addColumn({role:"style"});
    data.addRows(poblacion);

    var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Evolución de la población de Navalcarnero",
        width: 700,
        height: 400,
        backgroundColor: 'blue',
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        animation:{
          duration: 1000,
          easing: 'out',
        },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("poblacion"));
      chart.draw(view, options);
      window.setTimeout(()=>{   
        data.setValue(0,1,14252);
        data.setValue(1,1,23360);
        data.setValue(2,1,40421);
        data.setValue(3,1,43500);
        chart.draw(view, options);
      },1000)


}