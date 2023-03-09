
/* Active Nav Links on Click */

const links = document.querySelectorAll('.nav-links--container li');

links.forEach(li=>{
    li.addEventListener('click',()=>{
        resetLinks();
        li.classList.add('active-link');
    })
})

function resetLinks(){
    links.forEach(li=>{
        li.classList.remove('active-link')
    })
}

/* Scroll on Mouse wheel */




/* Hamberger Menu Function */

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
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
