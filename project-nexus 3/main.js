var sidenavbar = document.querySelector(".side-navbar");

function shownavbar() {
    sidenavbar.style.left = "0";
}

function closenavbar() {
    sidenavbar.style.left = "-60%";
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

// Example email sending function (using a different approach, such as an email sending service or backend implementation)
function sendemail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "praveenramesh5267@gmail.com",
        Password: "your-email-password",
        To: 'praveenkumar755017@gmail.com',
        From: "your-email@example.com",
        Subject: "Subject Text",
        Body: "Email Body Text"
    }).then(
        message => alert("mail sent successfully")
    );
}
