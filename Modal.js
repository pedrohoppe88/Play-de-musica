const aceitar = document.getElementById('bnt_aceitar');
const resusar = document.getElementById('bnt_resusar');

const Div_Modal = document.getElementById('Modal');


aceitar.addEventListener('click', function() {
      Div_Modal.style.display = 'none';
      document.cookie = "cookieByyy = teste; max-age= " + 60 * 60 * 24 * 30;
            
});

const WebsiteCookie = document.cookie.indexOf('cookieByyy=');

if(WebsiteCookie != -1) {
      Div_Modal.style.display = 'none';
}
