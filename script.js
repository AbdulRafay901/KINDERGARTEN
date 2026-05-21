const menu = document.querySelector("#menu");
const links = document.querySelector(".links");

menu.addEventListener("click", (() => {
   links.classList.toggle("links-java");
}))





 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
           breakpoints: {
           0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },          
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 40,
        },

      },
    });

    // S8 Swiper 

          var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 2,
      spaceBetween: 30,
      speed:900,
      loop: true,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      
           breakpoints: {
           0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },          
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },

      },

    });



    // About Slider 

     var swiper = new Swiper(".mySwiper-About", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {

        576:{
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
   
      },
    });

    // Program Slider 

     var swiper = new Swiper(".mySwiper-program1", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      speed: 900,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // breakpoints: {

        
   
      // },
    });
      // Program 2 Start
    var swiper = new Swiper(".mySwiper-program2", {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination program-pagination",
        clickable: true,
      },
      breakpoints: {


        425:{
          slidesPerView: 2,
          spaceBetween: 0,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 0,
        },
      },
    });


    function button(section){

         const btns = document.querySelectorAll(".buttons button");
         btns.forEach(b => b.classList.remove("active")); 
         event.target.classList.add("active"); 



    const ids = ["main","all","toddler","preschool","kindergarten","pre-k-program","before"];

    ids.forEach(id => {
        let el = document.getElementById(id);
        el.classList.remove("show");
        el.style.display = "none";
    });

    let selected = document.getElementById(section);
    selected.style.display = "flex";  

    setTimeout(() => {
        selected.classList.add("show"); 
    }, 50);
}

let counter1 = 164;
let endValue = 864;
let increment = 22;

let intervalid = setInterval(() => {
    counter1 += increment;

    if (counter1 >= endValue) {
        counter1 = endValue;       // ensure final value is exact
        clearInterval(intervalid);
    }

    document.getElementById("counter1").innerHTML = counter1;

}, 50);  // 50ms interval for smoother counting


let counter2 = 164;
let c2_endValue = 928;
let c2_increment = 22;

let c2_intervalid = setInterval(() => {
    counter2 += c2_increment;

    if (counter2 >= c2_endValue) {
        counter2 = c2_endValue;       // ensure final value is exact
        clearInterval(intervalid);
    }

    document.getElementById("counter2").innerHTML = counter2;
}, 50);  // 50ms interval for smoother counting


let counter3 = 0;

let C3_clear = setInterval(() => {

  counter3++;

  if(counter3 > 45){
    clearInterval(C3_clear);
  }
  
  document.getElementById("counter3").innerHTML = counter3;
}, 40)

let counter4 = 0;

let C4_clear = setInterval(() => {

  counter4++;

  if(counter4 > 64){
    clearInterval(C4_clear);
  }
  
  document.getElementById("counter4").innerHTML = counter4;
}, 30)

let counter5 = 0;

let C5_clear = setInterval(() => {

  counter5++;

  if(counter5 > 53){
    clearInterval(C5_clear);
  }
  
  document.getElementById("counter5").innerHTML = counter5;
}, 30)


const video_btn = document.querySelector(".section1-video");
const video_div = document.querySelector("#section1-video-play");
video_btn.addEventListener("click", (() => {
     
      video_div.style.visibility= "visible";
      video_div.style.opacity = 1;
     document.getElementById("section1-video-play").innerHTML = `<iframe width="90%" height="90%" src="https://www.youtube.com/embed/9kHJhALlzBA?si=VAZaqYcNLDexYxcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}))





 


