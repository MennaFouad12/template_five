//color palette to the website
let maincolors=localStorage.getItem('color_option');
if (maincolors!==null){
    document.documentElement.style.setProperty("--main--color", maincolors);
    document.querySelectorAll(".colors-list li").forEach(element=>{
        element.classList.remove("active");
        if(element.dataset.color===maincolors) {

            element.classList.add("active");
      
          }
    });
    
}
const colorli=document.querySelectorAll(".colors-list li");

Array.from(colorli).forEach(li=>{
li.addEventListener("click",(e)=>{
//set color in the root element
document.documentElement.style.setProperty("--main--color", e.target.dataset.color);
//set color in local storage
localStorage.setItem("color_option", e.target.dataset.color);
//remove active class from all childrens
handleActive(e);
});
});





let landingpage=document.querySelector(".landingpage")
// console.log(landingpage);
let imges=["download (1).jpg", "images (1).jpg", "images.jpg"];
let backgroundoption=true;
 let backgroundinterval;
let backgroundlocalitem=localStorage.getItem('background_option');



if(backgroundlocalitem!==null){

    console.log(backgroundlocalitem);
    console.log(typeof(backgroundlocalitem));
if(backgroundlocalitem==='true'){
backgroundoption=true;
}
else{
    backgroundoption=false;
}

document.querySelectorAll(".random-background span").forEach(element=>{
    element.classList.remove("active");
});

if(backgroundlocalitem==='true'){
    document.querySelector(".random-background .yes").classList.add("active");
}
else{
    document.querySelector(".random-background .no").classList.add("active");
}

}




function randomizeimg(){
    if(backgroundoption===true){
        backgroundinterval=setInterval(()=> {
            let random=Math.floor(Math.random()*(imges.length));
            landingpage.style.backgroundImage = 'url("img/'+imges[random]+'")';
            
            },1000);

    }
}





let btn=document.querySelector(".fa-gear");
let sidebar=document.querySelector(".settings-box");
btn.onclick=function(){
    this.classList.toggle("fa-spin");
    sidebar.classList.toggle("opend");
}




//switch random background
const randomback=document.querySelectorAll(".random-background span");

Array.from(randomback).forEach(span=>{
span.addEventListener("click",(e)=>{
//remove active class from all childrens
handleActive(e);

if(e.target.dataset.background==='yes'){
backgroundoption=true;
randomizeimg();
localStorage.setItem("background_option",true);
}
else{
   backgroundoption=false;
  clearInterval(backgroundinterval);
  localStorage.setItem("background_option",false);
}
});
});




//select skills selector
let ourskills=document.querySelector(".skills");
window.onscroll=function(){
    let skillstop=ourskills.offsetTop;//الطول مبين اول حاجه فالبيدج وال skills
    let skillsheight=ourskills.offsetHeight;//طول ال skills
    let windowheight=this.innerHeight;//طول ال window
    let windowscrolltop=this.pageYOffset;//طول الجزء اللي انا عملتله سكرول لحد دلوقتي
    // console.log(skillstop);//1092
    // console.log(skillsheight);//635
    // console.log(windowheight);//739
    // console.log( windowscrolltop);
    //windowscrolltop>(skillstop-skillsheight)//كدا اول ما هوصل للاسكيل هيعمل الانيميشن
if(windowscrolltop>(skillstop+skillsheight-windowheight)){//اول ما هوصل لاخر الاسكيل هيعمل الانيميشن
    console.log((skillsheight+skillstop-windowheight));//988
   
    let allskills=document.querySelectorAll('.skill-box .skill-progress span'); 
allskills.forEach(skill=>{
    skill.style.width=skill.dataset.progress;
}

)
}
}







let ourgallary=document.querySelectorAll(".gallary img");
ourgallary.forEach(img=>{
    img.addEventListener('click',(e)=>{
        let overlay=document.createElement('div');
        overlay.className="popup-overlay";
        document.body.appendChild(overlay);

        let popupbox=document.createElement('div');
        popupbox.className="popup-box";
        
        let popupimg=document.createElement('img');
        popupimg.src=img.src;
        if(img.alt!==null){
let imgheadings=document.createElement('h3');
let imgtext=document.createTextNode(img.alt);
imgheadings.appendChild(imgtext);
popupbox.appendChild(imgheadings);

        }
        popupbox.appendChild(popupimg);
        document.body.appendChild(popupbox);
        //creat the close span
        let closespan=document.createElement('span');
        closespan.className="close-span";
        let closespantext=document.createTextNode('X');
        closespan.appendChild(closespantext);
        popupbox.appendChild(closespan);

        //click on the close span
        closespan.onclick=function(){
overlay.remove();
popupbox.remove();

        }
    });
    
});


// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

  elements.forEach(ele => {

    ele.addEventListener("click", (e) => {
  
      e.preventDefault();
  
      document.querySelector(e.target.dataset.section).scrollIntoView({
  
        behavior: 'smooth'
  
      });
  
    });
  
  });

}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);
// Handle Active State
function handleActive(ev) {

    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
  
      element.classList.remove("active");
  
    });
  
    // Add Active Class On Self
    ev.target.classList.add("active");
  
  }

   let bulletsSpan=document.querySelectorAll(".bullets-option span");
   let bulletsContainer =document.querySelector('.nav-bullets');
   let bulletLocalItem =localStorage.getItem("bullets-option");
   if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {
  
      span.classList.remove("active");
  
    });
  
    if (bulletLocalItem === 'block') {
  
      bulletsContainer.style.display = 'block';
  
      document.querySelector(".bullets-option .yes").classList.add("active");
  
    } else {
  
      bulletsContainer.style.display = 'none';
  
      document.querySelector(".bullets-option .no").classList.add("active");
  
    }
  
  }

bulletsSpan.forEach(element => {
element.addEventListener("click",(ev) => {

if(ev.target.dataset.display=='show'){
bulletsContainer.style.display="block";
localStorage.setItem("bullets-option","block");

}
else{
    bulletsContainer.style.display="none";
    localStorage.setItem("bullets-option","none");
}
handleActive(ev);
});
});
document.querySelector(".reset-options").onclick=function() {
localStorage.clear();//remove everything in localStorage
localStorage.removeItem("color_option");
localStorage.removeItem("bullets-option");


window.location.reload();

}

// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

  // Stop Propagation
 // e.stopPropagation();

  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  tLinks.classList.toggle("open");

};
// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

  if (e.target !== toggleBtn && e.target !== tLinks) {

    // Check If Menu Is Open
    if (tLinks.classList.contains("open")) {

      // Toggle Class "menu-active" On Button
      toggleBtn.classList.toggle("menu-active");

      // Toggle Class "open" On Links
      tLinks.classList.toggle("open");

    }

  }

});

// Stop Propagation On Menu 
tLinks.onclick = function (e) {
  e.stopPropagation();
}