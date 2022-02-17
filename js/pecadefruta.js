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


  let hambcollapsed = document.querySelector('.navbar-toggler')
  hambclasses = document.querySelectorAll('.navbar-toggler')
  hambcollapsed.addEventListener('click', colormenu)

  function colormenu() {
    console.log(hambclasses)
    if (document.body.scrollTop <= 80 || document.documentElement.scrollTop <= 80) {
      header.classList.add("navscroll")
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
    btSubscrever = document.querySelector('.modal-cta');
    confirma = document.querySelector('.modal-confirma')
    formContent = document.querySelector('.form-content')


    //eventos
    for (let i=0; i<btQueroComprar.length;i++) {
      btQueroComprar[i].addEventListener('click', abreModal);
    }

    for (let i=0; i<btCesto.length;i++) {
      btCesto[i].addEventListener('click', abreModalSelect);
    }

    btSubscrever.addEventListener('click', abreModalSubscrever)
    
  }

  function abreModal() {
    modal.style.display = 'flex';
  }

  function abreModalSelect() {
    modal.style.display = 'flex';
  }

  function fechaModal() {
    modal.style.display = 'none';
    formContent.style.display = 'block'
    confirma.style.display ='none';
  }

  function abreModalSubscrever() {
    confirma.style.display = 'flex'
    formContent.style.display = 'none'
  }

  window.onclick = function(event) {
    if (event.target === modal) {
      fechaModal()
    }
  }