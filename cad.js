document.querySelector("#nascimento").addEventListener("blur", (e)=>{

 //   console.log(e.target.dataset) // Lista de dataatributes, no Jquery é elemento.data("nome").value

    datetyped = new Date(e.target.value);
    dateatually = new Date();
    let newDate = new Date(datetyped.getUTCFullYear()+18, datetyped.getUTCMonth(),datetyped.getUTCDate());

    if(!(newDate <= dateatually)){
          e.target.setCustomValidity("Você é criança, vai brincar ! :D")
    }
    else{
      e.target.setCustomValidity("")

    }

})

document.querySelector("#cpf").addEventListener("blur", (e)=>{
 
  let bool ;
   for (let index = 0; index <   e.target.value.length; index++) {

    if(e.target.value[0] != e.target.value[index]){
       bool =true;
    }
   }
   if(!bool)
      e.target.setCustomValidity("Número repetido não pode !")
   else 
      e.target.setCustomValidity("");

});



document.querySelector("#cep").addEventListener("blur", (e)=>{
  e.target.value = e.target.value.replace(/\D/g,'');
   let cep ;
  $.ajax({
    url: "https://viacep.com.br/ws/"+ e.target.value +"/json/",
    type: "GET",
    async: false,
    success: (result)=>{
        cep = result;
    },
    complete: ()=> {
       console.log(cep)
      document.querySelector("#logradouro").value = cep.logradouro
      document.querySelector("#cidade").value = cep.localidade
      document.querySelector("#estado").value = cep.uf
    }
 });


});


document.querySelector(".botao").addEventListener("click", ()=>{

document.querySelectorAll(".input-container").forEach((o)=>{
  if(!(o.querySelector(".input").validity.valid)){
      o.classList.add("input-container--invalido");
      let newFieldValue = o.querySelector(".input-mensagem-erro").textContent.replace("campo",o.querySelector(".input").getAttribute("placeholder"))
      o.querySelector(".input-mensagem-erro").textContent = newFieldValue
  }
  else{
     o.classList.remove("input-container--invalido")
  }
});

});

