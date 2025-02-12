let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }  
}

function toggleContrast () {
  contrastToggle = !contrastToggle
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  }
  else {
    document.body.classList.remove("dark-theme");
  }
}

 function contact (event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
           'service_6q7zd8s', 
           'template_ikcqr8o',
           event.target,
           'iaGR9B5YF0ZSk-0P6'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
          loading.classList.remove("modal__overlay--visible");
          alert(
            "The email service is temporarily unavailable. Please contact me directly at antoniozcasas@gmail.com"
          );  
        })
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}