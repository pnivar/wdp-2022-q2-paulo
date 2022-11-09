window.onload = function(){

document.getElementById('download__resume').addEventListener('click', function(){
document.querySelector('.bg__modal').style.display = 'flex';
});

document.querySelector('#close').addEventListener('click', function(){
document.querySelector('.bg__modal').style.display = 'none';
});


}