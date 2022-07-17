var valor = document.querySelector("#valor");
var menos = document.querySelector("#menos");
var mais = document.querySelector("#mais");

menos.addEventListener("click", () => {
    let controle = parseInt(valor.innerHTML);
    valor.innerHTML =  (controle - 1)
});
mais.addEventListener("click", () => {
    let controle = parseInt(valor.innerHTML);
    valor.innerHTML =  (controle + 1)
});
