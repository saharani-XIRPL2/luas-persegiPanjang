var panjangInput = document.querySelector(".panjang");
var lebarInput = document.querySelector(".lebar");
var luasButton = document.querySelector(".luas");
var Luas, panjang, lebar;

function myFunction(){
    panjang = panjangInput.value;
    lebar = lebarInput.value;
    Luas = panjang * lebar;
    alert("persegi panjang adalah :" + Luas);
}