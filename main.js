var botaoDosDadosFinais = document.getElementById("botaoDeEnvioDeDados");
var botaoCongelarDados = document.getElementById("congelarDados");
var form =  new FormData(document.querySelector('form'));// perguntar para a karla sobre formdata
var valoresDoFormulario = form.get("name");


// ----------------------------------------------------------



botaoDosDadosFinais.addEventListener('click', function(event){
event.preventDefault();
// console.log(valoresDoFormulario);
});




