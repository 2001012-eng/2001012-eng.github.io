// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});





// Navbar effect while scrolling

window.addEventListener("scroll", function(){


    const nav = document.querySelector("nav");


    if(window.scrollY > 50){

        nav.style.background =
        "rgba(5,8,22,0.95)";

    }

    else{

        nav.style.background =
        "rgba(5,8,22,0.8)";

    }


});







// Typing animation


const roles = [

"IoT & Robotics Engineer",

"Embedded Systems Developer",

"AI & Automation Enthusiast",

"Robotics Researcher"

];


let index = 0;

let charIndex = 0;


const roleElement =
document.querySelector(".hero-text h2");



function typeEffect(){


    if(charIndex < roles[index].length){


        roleElement.textContent +=
        roles[index].charAt(charIndex);


        charIndex++;


        setTimeout(typeEffect,100);


    }


    else{


        setTimeout(deleteEffect,1500);


    }


}





function deleteEffect(){


    if(charIndex > 0){


        roleElement.textContent =
        roles[index].substring(0,charIndex-1);


        charIndex--;


        setTimeout(deleteEffect,50);


    }


    else{


        index++;


        if(index >= roles.length){

            index=0;

        }


        setTimeout(typeEffect,500);


    }


}




// Start animation

roleElement.textContent="";

typeEffect();








// Scroll reveal animation


const cards =
document.querySelectorAll(
".card, .skill-card, .project-card"
);



const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


});



cards.forEach(card=>{


card.style.opacity="0";

card.style.transform=
"translateY(40px)";

card.style.transition=
"all .6s ease";


observer.observe(card);


});