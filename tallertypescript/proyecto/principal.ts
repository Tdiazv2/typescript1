import { Serie } from './Serie.js';
import { series } from './datos.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
let promedioTemporadasElement: HTMLElement = document.getElementById("promedioTemporadas")!;

mostrarTablaSeries(series);
promedioTemporadasElement.innerHTML = `<b>Seasons average:</b> ${promedio(series)}`;

function mostrarTablaSeries(datosSeries: Serie[]): void {
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for (let serie of datosSeries) {
        console.log("cargo")
        let trElement: HTMLElement = document.createElement("tr"); 
        trElement.classList.add("table-light");
        trElement.innerHTML = `<td>${serie.id}</td>
        <td>${serie.nom} </td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}

function promedio(series: Serie[]): number {
    let sum: number = 0;
    series.forEach(serie => {
        sum += serie.temporadas;

    });
    return sum / series.length;
}
