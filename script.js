document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    if (scrollPosition < windowHeight) {
        image1.style.opacity = 1 - (scrollPosition / windowHeight);
        image2.style.opacity = scrollPosition / windowHeight;
    } else {
        image1.style.opacity = 0;
        image2.style.opacity = 1;
    }
});

document.getElementById('joinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name');
    const age = formData.get('age');
    const email = formData.get('email');

    const mailtoLink = `mailto:nferhart@example.com?subject=New%20HackNovato%20Member&body=Name:%20${name}%0AAge:%20${age}%0AEmail:%20${email}`;

    window.location.href = mailtoLink;

    alert('Thank you for joining! We\'ll send you the meeting details soon.');
});
