import { Serie } from './Serie.js';
import { series } from './datos.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
let promedio: HTMLElement = document.getElementById("promedioTemporadas")!;

TablaSeries(series);
promedio.innerHTML = `<b>Seasons average:</b> ${prom(series)}`;

function TablaSeries(datosSeries: Serie[]): void {
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for (let serie of datosSeries) {
        console.log("cargo")
        let tr: HTMLElement = document.createElement("tr"); 
        tr.classList.add("table-light");
        tr.innerHTML = `<td>${serie.id}</td>
        <td>${serie.nom} </td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(tr);
    }
    seriesTable.appendChild(seriesTbody);
}

function prom(series: Serie[]): number {
    let sum: number = 0;
    series.forEach(serie => {
        sum += serie.temporadas;

    });
    return sum / series.length;
}
