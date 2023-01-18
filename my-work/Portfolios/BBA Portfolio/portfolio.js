window.onload = function(){
    // Horizontal scrolling.
    const container = document.querySelector('.container');
    let scrollLine = document.querySelector('.scroll');
    
    container.addEventListener('wheel', (e)=> {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
        scrollLine.style.width = container.scrollLeft / 4 + 'px';
    });

    function sendEmail(){
        Email.send({
            Host : "smtp.gmail.com",
            Username : "nivarpaulo@gmail.com",
            Password : "@My@Gmail2022",
            To : 'nivarpaulo@gmail.com',
            From : document.getElementById('email').value,
            Subject : "New Contact Form Enquiry",
            Body : "Name: " + document.getElementById('name').value 
                + '<br> Email; ' + document.getElementById('email').value
                + '<br> Phone no; ' + document.getElementById('phone').value
                + '<br> Message; ' + document.getElementById('message').value
        }).then(
          message => alert('Message Sent Succesfully')
        );
    }


    
   

}