const imageness = ['./images/pc1.webp',`./images/pc2.webp`,`./images/pc3.webp`,`./images/pc4.webp`,`./images/pc5.webp`,`./images/pc6.webp`,`./images/pc7.webp`]
let contt = 0;

function carrousell (contenedorr){
contenedorr.addEventListener(`click`, (e) => {
    let atras = contenedorr.querySelector(".atrass")
    let adelante = contenedorr.querySelector(".adelantee")
    let imgg = contenedorr.querySelector("#img2")
    let tgt = e.target;
    

    if (tgt == atras){
        if (cont > 0){
            imgg.src = imageness[cont - 1];
            cont--;
        } else {
            imgg.src = imageness[imageness.length - 1];
            cont = imageness.length - 1;
        }
    } else if (tgt == adelante) {
        if (cont < imageness.length - 1){
            imgg.src = imageness[cont + 1];
            cont++;
        } else {
            imgg.src = imageness[0];
            cont = 0;
            
        }
    }
});
}
document.addEventListener("DOMContentLoaded", () =>{
    let contenedorr = document.querySelector(`.contenedor2`)
    carrousell(contenedorr);  
})