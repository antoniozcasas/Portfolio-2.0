// template_ikcqr8o
// service_6q7zd8s
// iaGR9B5YF0ZSk-0P6

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

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}