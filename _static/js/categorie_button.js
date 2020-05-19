const navSlide = ()=> {
  const burger = document.querySelector('#page-main-sidebar');
  const nav = document.querySelector('#taxonomy-sidebar-menu-nav');
  const navLinks = document.querySelectorAll('#taxonomy-sidebar-menu-nav a')
  
  burger.addEventListener('click',()=>{
    //Toggle Nav
    nav.classList.toggle('#taxonomy-sidebar-menu-nav');
      //Animate Links
  navLinks.forEach((link, index) =>{
    if(link.style.animation) {
      link.style.animation = ''
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.3}s`;
    }
  });
  //burger animation
  page-main-sidebar.classList.toggle('toggle');
  });

}

navSlide();