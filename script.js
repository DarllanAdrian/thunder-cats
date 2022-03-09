function logar(){
var nome = document.getElementById ('nome').value;
var senha = document.getElementById('senha').value;

if(nome == "Afranio" && senha == "Afranio"){
location.href = "home.html";
}else{
alert('Esse site foi criado exclusivamente para o Afranio. Você não tem acesso');
}
}
