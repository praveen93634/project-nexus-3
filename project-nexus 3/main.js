var sidenavbar=document.querySelector(".side-navbar")
function shownavbar()
{
    sidenavbar.style.left="0"
}
function closenavbar()
{
    sidenavbar.style.left="-60%"
}
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navbaritem a, .side-navbar-link a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

function shownavbar() {
    document.querySelector('.side-navbar').style.left = '0';
}

function closenavbar() {
    document.querySelector('.side-navbar').style.left = '-60%';
}
function sendemail(){
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}