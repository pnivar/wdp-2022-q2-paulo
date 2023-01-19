window.onload = function(){
    // Horizontal scrolling.
    const container = document.querySelector('.container');
    let scrollLine = document.querySelector('.scroll');
    
    container.addEventListener('wheel', (e)=> {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
        scrollLine.style.width = container.scrollLeft / 4 + 'px';
    });

   /* Email submision */

   function sendEmail(){
    const params = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    const serviceId = 'nivarpaulo@gmail.com';
    const templateId = 'template_td6nztn';

    emailjs
    .send(serviceId,templateId,params)
    .then((res) => {
            document.getElementById('name').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            console.log(res);
            alert('Your message was sent successfullly');
        })
    .catch((err) => console.log(err));
   }
}