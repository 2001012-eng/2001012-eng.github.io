// ======================================
// DYNAMIC ACHIEVEMENT GALLERY
// ======================================


const achievementContainer = 
document.getElementById(
"achievement-container"
);



if(achievementContainer){


    achievements.forEach(item => {


        achievementContainer.innerHTML += `


        <div class="certificate">


            <img src="assets/achievements/${item.image}"
            alt="${item.title}">


            <h3>
            ${item.title}
            </h3>


            <p>
            ${item.description}
            </p>


        </div>


        `;


    });


}







// ======================================
// DYNAMIC CERTIFICATE GALLERY
// ======================================



const certificateContainer =

document.getElementById(
"certificate-container"
);





if(certificateContainer){



    certificates.forEach(item=>{


        certificateContainer.innerHTML += `


        <div class="certificate">


            <img src="assets/certificates/${item.image}"
            alt="${item.title}">


            <h3>
            ${item.title}
            </h3>


            <p>
            ${item.description}
            </p>


        </div>


        `;


    });


}








// ======================================
// SMOOTH SCROLL
// ======================================



document.querySelectorAll("nav a")
.forEach(link=>{


    link.addEventListener("click",function(e){


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









// ======================================
// NAVBAR EFFECT
// ======================================



window.addEventListener(
"scroll",
()=>{


const nav =
document.querySelector("nav");



if(window.scrollY > 50){


nav.style.background =
"rgba(5,8,22,0.98)";


}


else{


nav.style.background =
"rgba(5,8,22,0.95)";


}


}

);










// ======================================
// TYPING EFFECT
// ======================================



const roles = [


"IoT & Robotics Engineer",

"Embedded Systems Developer",

"AI & Automation Enthusiast",

"Robotics Researcher"


];



let roleIndex = 0;

let charIndex = 0;

let deleting = false;



const roleElement =
document.querySelector(".hero-text h2");





function typing(){


if(!roleElement)
return;



let current =
roles[roleIndex];




if(!deleting){


roleElement.textContent =
current.substring(
0,
charIndex++
);



if(charIndex > current.length){


deleting=true;


setTimeout(
typing,
1500
);


return;


}



}

else{


roleElement.textContent =
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




setTimeout(

typing,

deleting ? 50 : 100

);



}



typing();









// ======================================
// SCROLL REVEAL ANIMATION
// ======================================



const revealElements =

document.querySelectorAll(

".card, .certificate, .project-card, .thesis, .skills p"

);





const observer =

new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";


entry.target.style.transform=
"translateY(0)";


}



});


},

{

threshold:0.15

}

);







revealElements.forEach(element=>{


element.style.opacity="0";


element.style.transform=
"translateY(40px)";


element.style.transition=
"all .7s ease";



observer.observe(element);


});










// ======================================
// FOOTER YEAR
// ======================================



const footer =
document.querySelector("footer");



if(footer){


footer.innerHTML =

`
© ${new Date().getFullYear()}
Iftekhar Rahman.
All Rights Reserved.
`;



}