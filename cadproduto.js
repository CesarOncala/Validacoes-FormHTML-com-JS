

const args = {

    prefix: 'R$ ',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'move'
  };

  // Select the element
  const input = SimpleMaskMoney.setMask('#preco', args);
  // Convert the input value to a number, which you can save e.g. to a database:
  input.formatToNumber();

  
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