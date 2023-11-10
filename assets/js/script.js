// header toggler
const header = document.querySelector('.header');
const toggler = document.querySelector('.header__toggler')
const header_nav = document.querySelector('.header__nav')

if(toggler){
    toggler.addEventListener('click',(e)=>{
        e.preventDefault();
        toggler.classList.toggle('header__toggler--active')
        header_nav.classList.toggle('header__nav--active')        
    })
}

window.addEventListener('scroll',(e)=>{
  if(window.scrollY > 60){
    header.classList.add('header--sticky')
  }else{
    header.classList.remove('header--sticky')
  }

  // window.screenTop > 60 ? 
  //   header.classList.add('header--sticky') 
  //   : header.classList.remove('header--sticky')
})

// reviews
$('.reviews-wrap').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
          breakpoint: 480,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });