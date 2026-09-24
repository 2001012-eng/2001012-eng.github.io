

// =============================
// Smooth Scrolling
// =============================


document.querySelectorAll("nav a").forEach(link => {


    link.addEventListener("click", function(e){


        e.preventDefault();


        const section =
        document.querySelector(
        this.getAttribute("href")
        );


        if(section){

            section.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});






// =============================
// Navbar Background Change
// =============================


window.addEventListener("scroll",()=>{


    const nav =
    document.querySelector("nav");


    if(window.scrollY > 60){


        nav.style.background =
        "rgba(5,8,22,0.98)";


    }

    else{


        nav.style.background =
        "rgba(5,8,22,0.95)";


    }


});







// =============================
// Typing Effect
// =============================


const roles = [


"IoT & Robotics Engineer",

"Embedded Systems Developer",

"Robotics Researcher",

"AI & Automation Enthusiast"


];



let roleIndex = 0;

let charIndex = 0;

let deleting = false;



const roleText =
document.querySelector(".hero-text h2");




function typeAnimation(){



    let current =
    roles[roleIndex];



    if(!deleting){



        roleText.textContent =
        current.substring(
            0,
            charIndex++
        );



        if(charIndex > current.length){


            deleting=true;


            setTimeout(typeAnimation,1500);


            return;


        }


    }



    else{


        roleText.textContent =
        current.substring(
            0,
            charIndex--
        );



        if(charIndex < 0){


            deleting=false;


            roleIndex++;



            if(roleIndex >= roles.length){

                roleIndex=0;

            }


        }


    }



    setTimeout(typeAnimation,
    deleting ? 50 : 100);


}



typeAnimation();







// =============================
// Scroll Reveal Animation
// =============================



const revealElements =

document.querySelectorAll(

".card, .project-card, .certificate, .thesis, .skills p"

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


},{

threshold:0.15

});





revealElements.forEach(element=>{


element.style.opacity="0";


element.style.transform=
"translateY(40px)";


element.style.transition=
"all .7s ease";



observer.observe(element);



});






// =============================
// Current Year Footer
// =============================


const year =
new Date().getFullYear();


const footer =
document.querySelector("footer");


if(footer){


footer.innerHTML =
`
© ${year} Iftekhar Rahman.
All Rights Reserved.
`;


}