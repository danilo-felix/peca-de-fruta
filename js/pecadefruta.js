let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });




  //Função para alterar a navbar com o scroll
  window.onscroll = function() {scrollFunction()};

  let header = document.querySelector('.navbar')

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      header.classList.add("navscroll")
    } else {
      header.classList.remove("navscroll")
    }
  }



  //Função para fechar menu hamb ao clicar
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarsExampleDefault')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})