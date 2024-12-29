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

