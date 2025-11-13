function inserirTitulo() {
    const texto = document.getElementById("txt-titulo").value;
    const h1 = document.getElementById("titulo");

    h1.innerText = texto;
    h1.style.color = "blue";
}
