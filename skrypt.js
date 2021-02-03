function policz(){
var p=document.getElementById('p').value;
var wynik=document.getElementById("wynik");
var puszki= Math.ceil(p/4);
wynik.innerHTML='Liczba jednolitrowych puszek farby potrzebnych do pomalowania wynosi:'+puszki;
}