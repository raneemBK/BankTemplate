var menu = document.getElementById("menu");
var menuRes = document.getElementById("menuRes");
var menu_right = document.getElementById("menu-right");
var menu_disabl = document.getElementById("menu-disabl");
menu_right.addEventListener("click",()=>{
    menu_disabl.classList.remove("menu-disabl")
})
menu.addEventListener("click",()=>{
    menu_disabl.classList.add("menu-disabl")
})
menuRes.addEventListener("click",()=>{
    menu_disabl.classList.add("menu-disabl")
})

// // Get the button
// let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }


// transform testimonials

// var next_testimonial = document.getElementById("next-testimonial");
// var prev_testimonial = document.getElementById("prev-testimonial");
// var sildes = document.getElementById("sildes");
// next_testimonial.addEventListener("click",()=>{
//   debugger;
//   sildes.style.transform = "translateX(0px)";
// })

var nextTestimonial = document.getElementById("next-testimonial");
var prevTestimonial = document.getElementById("prev-testimonial");
var slides = document.querySelector(".testimonial-container-cards");
var slideIndex = 0;
var slideWidth = slides.offsetWidth; // Adjust this according to your card width

nextTestimonial.addEventListener("click", () => {
    slideIndex++;
    if (slideIndex * slideWidth <= slides.scrollWidth) {
        slides.style.transform = "translateX(" + -slideIndex * slideWidth + "px)";
    } else {
        slideIndex--;
    }
});

prevTestimonial.addEventListener("click", () => {
    if (slideIndex > 0) {
        slideIndex--;
        slides.style.transform = "translateX(" + -slideIndex * slideWidth + "px)";
    }
});
