var hamburguer = document.getElementById("hamburguer")
var menu = document.getElementById("menu")

hamburguer.addEventListener("click", function(){
  menu.classList.toggle("open")
})

window.addEventListener('load', function(){
    new Glider(document.querySelector('.courses-carousel'), {
        slidesToShow: 1,  
        slidesToScroll: 1,
  draggable: true,
  dots: '.carousel-indicators',
  arrows: {
    prev: '.carousel-back',
    next: '.carousel-next'},
    responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 775,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
          }
        }
      ]
    });
});

window.addEventListener('load', function(){
    new Glider(document.querySelector('.courses-carousel-oracle'), {
        slidesToShow: 1,  
        slidesToScroll: 1,
  draggable: true,
  dots: '.carousel-indicators-2',
  arrows: {
    prev: '.carousel-back-2',
    next: '.carousel-next-2'},
    responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 775,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
          }
        }
      ]
    });
});



const btn = document.getElementById('button'); 
const spinner = document.getElementById('spinner');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const modalClose = document.getElementById('modal-close');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   // Deshabilitar el botón y mostrar el spinner
   btn.value = 'Enviando...';
   btn.disabled = true;
   spinner.style.display = 'block'; // Mostrar el spinner

   const serviceID = 'default_service';
   const templateID = 'template_aboykwv';

   // Enviar formulario con EmailJS
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      btn.disabled = false;
      spinner.style.display = 'none'; // Ocultar el spinner

      // Mostrar el modal con mensaje de éxito
      modalMessage.textContent = '¡Mensaje enviado exitosamente!';
      modal.style.display = 'flex';
    }, (err) => {
      btn.value = 'Enviar';
      btn.disabled = false;
      spinner.style.display = 'none'; // Ocultar el spinner

      // Mostrar el modal con mensaje de error
      modalMessage.textContent = 'Hubo un error al enviar el mensaje. Intenta nuevamente.';
      modal.style.display = 'flex';
    });
});

// Cerrar el modal cuando se hace clic en la "X"
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar el modal cuando se hace clic fuera de la caja del modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});






