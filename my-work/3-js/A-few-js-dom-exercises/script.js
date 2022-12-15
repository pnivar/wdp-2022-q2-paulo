window.onload = function() {
    const btn1 = document.querySelector('#btn-1');
    const textbox1 = document.querySelector('#textbox-1');
    const output = document.querySelector('#output');
    
    btn1.addEventListener("click", (event) => {
        console.log(textbox1.value);
    });
}   