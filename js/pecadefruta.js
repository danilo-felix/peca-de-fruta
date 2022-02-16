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
const btnMenu = document.querySelector('.navbar-toggler')
navLinks.forEach((l) => {
    l.addEventListener('click', () => { menuToggle.classList.remove("show"); btnMenu.classList.add('collapsed'); })
})


  //Funções para controle do modal
  let btQueroComprar, modal;

  function init() {
    btQueroComprar = document.querySelectorAll('.cta1');
    modal = document.querySelector('.modal-class');
    btCesto = document.querySelectorAll('.cta-cesto');
    console.log(btCesto)

    //eventos
    for (let i=0; i<btQueroComprar.length;i++) {
      btQueroComprar[i].addEventListener('click', abreModal);
    }

    for (let i=0; i<btCesto.length;i++) {
      btCesto[i].addEventListener('click', abreModalSelect);
    }
    
  }

  function abreModal() {
    modal.style.display = 'flex';
    let modalDentro = modal.querySelector('.form');
  }

  function abreModalSelect() {
    modal.style.display = 'flex';
    let modalDentro = modal.querySelector('.form');
  }

  function fechaModal() {
    modal.style.display = 'none';

    let modalDentro = modal.querySelector('.form');
    //modalDentro.classList.remove("active");
  }

  window.onclick = function(event) {
    if (event.target === modal) {
      fechaModal()
    }
  }