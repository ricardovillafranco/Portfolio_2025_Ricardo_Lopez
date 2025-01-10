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
   btn.value = 'Sending...';
   btn.disabled = true;
   spinner.style.display = 'block'; // Mostrar el spinner

   const serviceID = 'default_service';
   const templateID = 'template_aboykwv';

   // Enviar formulario con EmailJS
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      btn.disabled = false;
      spinner.style.display = 'none'; // Ocultar el spinner

      // Mostrar el modal con mensaje de éxito
      modalMessage.textContent = 'Message sent successfully!';
      modal.style.display = 'flex';
    }, (err) => {
      btn.value = 'Send';
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

//Seccion Experience

const projects = [
  {
    title: "Landing Page Mascotas",
    url: "https://www.vrim.com.mx/lp-mascotas/",
    image: "./img/landing_page_mascotas.jpg",
    description: "Custom landing page built with WordPress and Elementor, following design mockups closely. Focused on attention to detail, design consistency, and user experience.",
    icons: ["./img/wordpress-logo.png", "./img/elementor-logo.png"]
  },
  {
    title: "Render Zero",
    url: "https://renderzero.com/",
    image: "./img/render_zero_project.jpg",
    description: "High-design corporate website for a creative agency, built with HTML, CSS, and vanilla JavaScript. Features smooth animations and a modern user interface, delivering an engaging and visually striking user experience.",
    icons: ["./img/javascript.svg", "./img/html.png", "./img/css3.png"]
  },
  {
    title: "This Way",
    url: "https://thisway.axismetrica.com/",
    image: "./img/this_way_project_img.jpg",
    description: "E-commerce website for a fast-food business, built with WordPress, WooCommerce, Elementor, and custom code. Includes order status tracking for customers and a management system for restaurant staff to view and update orders across three branches.",
    icons: ["./img/wordpress-logo.png", "./img/elementor-logo.png", "./img/Premium addons-logo.png", "./img/acf-logo.png"]
  },
  {
    title: "Esferas Esnaviso",
    url: "https://esferasesnaviso.com.mx/",
    image: "./img/esferas_esnaviso__project_img.jpg",
    description: "Online store for glass spheres and decorative ornaments, developed with WordPress, WooCommerce, Elementor, and custom code. Built based on a client-provided mockup, ensuring a visually appealing and user-friendly design that showcases the unique products.",
    icons: ["./img/wordpress-logo.png", "./img/elementor-logo.png", "./img/Premium addons-logo.png", "./img/acf-logo.png"]
  },
  {
    title: "Blog Ponto Icarus",
    url: "https://blog.pontoicarus.com.br/",
    image: "./img/blog_ponto_icarus_project_img.jpg",
    description: "Custom blog for a human resources company in Brazil, developed with WordPress and Elementor. Fully tailored to the client’s specifications, focusing on clean design, readability, and an intuitive user experience.",
    icons: ["./img/wordpress-logo.png", "./img/elementor-logo.png", "./img/Premium addons-logo.png", "./img/acf-logo.png"]
  },
  {
    title: "Vrim Connect",
    url: "https://vrimconnect.com/home/",
    image: "./img/VRIM_Connect.png",
    description: "Dynamic website with WordPress, Elementor, Astra theme. Followed design mockups, enhanced with ACF plugin. Dedication to design and usability.",
    icons: ["./img/wordpress-logo.png", "./img/elementor-logo.png", "./img/Premium addons-logo.png", "./img/acf-logo.png"]
  },
  {
    title: "Vrim Blog",
    url: "https://www.vrim.com.mx/blog-vrim/",
    image: "./img/vrim_blog_project_img.jpg",
    description: "Health and wellness blog built with WordPress and Elementor, customized according to the client's requirements. Features personalized design elements and numerous adjustments to enhance user engagement, readability, and overall user experience.",
    icons: ["./img/wordpress-logo.png", "./img/elementor-logo.png", "./img/Premium addons-logo.png", "./img/acf-logo.png"]
  },
  {
    title: "Koi ecommerce",
    url: "https://koicbd.com.mx/tienda/",
    image: "./img/Koi_page.png",
    description: "Built a sleek e-commerce site with Elementor Pro, WooCommerce, and ACF for a seamless shopping experience.",
    icons: ["./img/wordpress-logo.png", "./img/elementor-logo.png", "./img/crocoblock-logo.webp", "./img/acf-logo.png"]
  },
  {
    title: "Pokemon Game",
    url: "https://ricardovillafranco.github.io/pokemon-game/",
    image: "./img/Pokemon_page.png",
    description: "Developed a Pokémon battle game using HTML, CSS, and JavaScript with unique abilities and effects.",
    icons: ["./img/javascript.svg", "./img/css3.png", "./img/html.png"]
  }
];


// const container = document.getElementById("projects-container");

// projects.forEach((project) => {
//   const projectHTML = `
//     <div class="project-container">
//       <a href="${project.url}" class="project">
//         <h4 class="project-title">${project.title}</h4>
//         <img class="project-window" src="${project.image}" alt="${project.title} Image">
//       </a>
//       <span class="project-description">${project.description}</span>
//       <div class="project-icons">
//         ${project.icons
//           .map(
//             (icon) => `
//             <div class="project-icon-container">
//               <img class="profile-icons-item" src="${icon}" alt="Icon">
//             </div>`
//           )
//           .join("")}
//       </div>
//     </div>
//   `;
//   container.innerHTML += projectHTML;
// });
 const container = document.getElementById("projects-container");
 projects.forEach((project)=> {
  const projectHTML = `
  <div class="project-container">
  <a href="${project.url}" class="project">
  <h4 class="project-title">${project.title}</h4>
  <img class="project-window" src="${project.image}" alt="${project.title}">
  </a>
  <span class="project-description">${project.description}</span>
  <div class="project-icons">
  ${project.icons.map((icon)=> `<div class="project-icon-container">
    <img class="profile-icons-item" src="${icon}" alt="Icon">
    </div>`).join("")}
    </div>
    </div>
  `;
  container.innerHTML+= projectHTML
 });





