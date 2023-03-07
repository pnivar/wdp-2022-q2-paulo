
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
