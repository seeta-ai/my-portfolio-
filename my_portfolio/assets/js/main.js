const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter').toLowerCase();
        
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category').toLowerCase();
            if (filterValue === 'all' || category === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


//navbar background change on scroll
// window.addEventListener('scroll',function(){
//     const navbar = document.querySelector('.navbar');
//     if(window.scrollY > 50){
//        navbar.classList.add('scrolled');

//     }else{
//         backToTop.classList.remove('scrolled')
//     }
   // back to top button visibility
// const backToTop = document.querySelector('.back-to-top');
// if(window.scrollY > 300){
//     backToTop.classList.add('active');
// }else{
//     backToTop.classList.remove('active');
// } 

// });

//smoth scrolling for navigation links
//  document.querySelector('a.nav-link, .back-to-top').forEach(anchor =>{
//     anchor.addEventListener('click', function(e){
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         if(targetElement === '#')return;
//         const targetElement = document.querySelector(targetId);
//         if(targetElement){
//             targetElement.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//  });
// });

// Navbar + Back to top button
// window.addEventListener('scroll', function(){
//     const navbar = document.querySelector('.navbar');
//     const backToTop = document.querySelector('.back-to-top');
    
//     // navbar background
//     if(window.scrollY > 50){
//        navbar.classList.add('scrolled');
//     } else {
//        navbar.classList.remove('scrolled');
//     }

//     // back to top button visibility
//     if(window.scrollY > 300){
//         backToTop.classList.add('active');
//     } else {
//         backToTop.classList.remove('active');
//     } 
// });

// smooth scrolling
// document.querySelectorAll('a.nav-link, .back-to-top').forEach(anchor => {
//     anchor.addEventListener('click', function(e){
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         if(targetId === '#') return;
//         const targetElement = document.querySelector(targetId);
//         if(targetElement){
//             targetElement.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

window.addEventListener('scroll', function(){
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  // 1. Top line fill
  document.querySelector('.scroll-progress').style.width = scrollPercent + '%';

  // 2. Button circle fill
  const circle = document.querySelector('.progress-ring circle');
  const circumference = 138;
  const offset = circumference - (scrollPercent / 100) * circumference;
  circle.style.strokeDashoffset = offset;

  // 3. Button show/hide
  const backToTop = document.querySelector('.back-to-top');
  if(scrollTop > 300){
    backToTop.classList.add('active');
  } else {
    backToTop.classList.remove('active');
  }
});

//skill section






