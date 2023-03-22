const bnt = document.getElementById("bnt_login");
const input_email = document.getElementById("email");
const input_senha = document.getElementById("senha");
const form = document.getElementById("myForm");


function clearImput() {
      document.getElementById("myForm").reset();
};

bnt.addEventListener('click', function(event) {
      event.preventDefault();
      if(input_senha.value === ''){
            document.getElementById("senha").classList.add('errorInput'); 
      }else {
            document.getElementById("senha").classList.add('verificadoInput');
      }
      clearImput();
});
