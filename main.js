var botaoDosDadosFinais = document.getElementById("botaoDeEnvioDeDados");
var botaoCongelarDados = document.getElementById("congelarDados");

// ----------------------------------------------------------


function enviar(e) {


    var data= document.getElementById("dateDeNascimento").value;
    console.log("Data:" + " " + data );
    var nome = document.getElementById("nomeDoUsuario").value;
    console.log( "Nome"+ " " + nome);
    var Idade = document.getElementById("idadeDoUsuario").value;
    console.log( "Idade"+ " " + Idade);
    var Cidade = document.getElementById("enderecoDoUsuario").value;
    console.log( "Cidade"+ " " + Cidade );
    var Estado = document.getElementById("estadoDoUsuario").value;
    console.log( "Estado"+ " " + Estado);
    var CEP = document.getElementById("cepDoUsuario").value;
    console.log( "CEP"+ " " + CEP);
    var radio = document.querySelector('input[name="status"]:checked').value;
    console.log( "Status"+ " " + radio);
    var checkBoxBens = document.getElementsByName('bensDoUsuario');
    for (var i = 0; i < checkBoxBens.length; i++) {
        if (checkBoxBens[i].checked) {
            if (checkBoxBens[i].value == "casa") {
                console.log("Bens" + " " + "casa")
            } else if (checkBoxBens[i].value == "apartamento") {
                console.log("Bens" + " " + "apartamento")
            } 
        }
    }
    var checkBoxTransporte = document.getElementsByName('transporteDoUsuario');
    for (var i = 0; i < checkBoxTransporte.length; i++) {
        if (checkBoxTransporte[i].checked) {
            if (checkBoxTransporte[i].value == "carro") {
                console.log("Bens" + " " + "carro")
            } else if (checkBoxTransporte[i].value == "moto") {
                console.log("Bens" + " " + "moto")
            } 
        }
    }



    // var fm =document.forms["formularioPrincipal"].elements[1].value;
}

botaoDosDadosFinais.addEventListener('click', function(event){
event.preventDefault();
})







//aplicar uma class no htlm somente par input de texto
//aplicar uma class no html para os radios button e verificar quem esta checado, para isso usa o .checked
//pegar todo os chechbox e verificar quem esta checado .checked
//selecionar o select e pegar o valor dele
// dividirr em tres funcoes
// estudar setar atributos; onread




// VALOR CHEKADO DO RADIO
//             <script>
// function myFunction() {
//   var checkBox = document.getElementById("myCheck");
//   var text = document.getElementById("text");
//   if (checkBox.checked == true){
//     text.style.display = "block";
//   } else {
//      text.style.display = "none";
//   }
// }
// </scrip>
        