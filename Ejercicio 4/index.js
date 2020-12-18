var palabra;
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       palabra=this.responseText;
       ejercicio4(10, 3, "red", document.getElementById("ele"))
      }
    };
    xhttp.open("GET", "palabra.txt", true);
    xhttp.send();
}

function ejercicio4(nFilas, nCol, color, div){
    var tabla=document.createElement("table");
    for(let i=0; i<nFilas; i++){
        let tr=document.createElement("tr");
        if(i%2!=0)
            tr.style.backgroundColor=color;
        for(let j=0;j<nCol;j++){
            let td=document.createElement("td");
            td.innerText=palabra;
            td.addEventListener("click", (e)=>{
                e.target.innerText="";
                localStorage.setItem("tabla", e.target.parentNode.parentNode);
            })
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    div.appendChild(tabla);

    var celdas=[];
    var trs=Array.from(tabla.getElementsByTagName("tr"));
    trs.forEach((tr)=>{
        var tds=Array.from(tr.getElementsByTagName("td"))
        tds.forEach((td)=>{
            celdas.push(td.innerText);
        })
    })
    var tablaArray={
        trs:tabla.getElementsByTagName("tr"),
        tds:tabla.getElementsByTagName("td")
    };
    localStorage.setItem("tabla", JSON.stringify(celdas));
}
window.onload=loadDoc;