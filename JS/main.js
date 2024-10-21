function changeColor() {
    var color = ['#041f3a', '#D3D3D3'];
    // var color = ['#041f3a', '#f7931e'];
    var change = Math.floor(Math.random() * 2);
    return color[change];
}

function bloques() {
    var contenido = document.querySelector(".container");

    for (var i = 0; i < 25; i++) {
        var block = document.createElement("div");
        block.classList.add("block");
        contenido.appendChild(block);
    }

    // var cantidadBloques = document.querySelectorAll(".block");
    // reparte(cantidadBloques);
}


function reparte(totalBloques) {
    var cantidadBloques = document.querySelectorAll(".block");

    cantidadBloques.forEach(function(elemento) {
        var traslado = posicionVariante() * 3;
        var traslado2 = posicionVariante() * 3;
        var s1 = Math.round(Math.random() + 1);
        var color = changeColor();
        // elemento.style.transform = "translate(" + traslado + "em," + traslado2 + "em)";
        elemento.style.transform = 'matrix(' + s1 + ', 0, 0,' + s1 + ',' + traslado + ', ' + traslado2 + ')';
        elemento.style.background = color;
        elemento.classList.add("shadow");

    });

}

function posicionVariante() {
    return Math.floor((0.5 - Math.random()) * 500);
}

var intervalo = setInterval(reparte, 3000);
bloques();