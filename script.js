function locomotiveAnimaiton(){
   gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
tablet: { smooth: true },
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}

locomotiveAnimaiton();

function loadingAnimation() {
    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h4, #page1 h2, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
loadingAnimation();
function resnavanimation(){

   var renav = document.querySelector("#resnav")

   var cross = document.querySelector("#resnav i")
   var menu = document.querySelector("nav i")
   
   var tl = gsap.timeline()
   
   
   tl.to("#resnav", {
       duration: 0.6,
    })
    tl.from("#resnav h3 , #resnav button",{
      x:150,
      duration:0.6,
      
      opacity:0,
      stagger: 0.2
   })
   
   tl.from("#resnav i",{
      opacity:0
   })
    tl.pause()
   menu.addEventListener("click", function(){
      renav.style.display = "block" 
      tl.play()
   })
   cross.addEventListener("click", function(){
      tl.reverse()
      renav.style.display = "none" 
      
    })
    
    var navbtn = document.querySelector("nav button")
   
    navbtn.addEventListener("mouseenter", function(){
      navbtn.style.color = "black"
      navbtn.style.backgroundColor = "white"
    })
    navbtn.addEventListener("mouseleave", function(){
      navbtn.style.color = "white"
      navbtn.style.backgroundColor = "green"
    })
}
resnavanimation();

function navAnimation(){
   let nav = document.querySelector("nav")



nav.addEventListener("mouseenter", function(){
 let tl = gsap.timeline()
 tl.to(".nav-bottom",{
   height: "18vh"
})
tl.to(".nav-part2 h5",{
   display:"block"
})
tl.to(".nav-part2 h5 span",{
   y:0,
   
   stagger:{
      amount:0.2
   }

})
})
nav.addEventListener("mouseleave", function(){
   let tl = gsap.timeline()
  
  tl.to(".nav-part2 h5 span",{
     y:25,
     stagger:{
        amount:0.2
     }
})
tl.to(".nav-part2 h5",{
   display:"none",
   duration:0.1
})
tl.to(".nav-bottom",{
   height: 0,
   duration:0.2
})
  })
}
navAnimation();

 function page2Animation(){
   var rightElems = document.querySelectorAll(".right-elem")

   rightElems.forEach(function (elem) {
       elem.addEventListener("mouseenter", function () {
    gsap.to(elem.childNodes[3], {
               opacity: 1,
               scale: 1
           })
       })
       elem.addEventListener("mouseleave", function () {
           gsap.to(elem.childNodes[3], {
               opacity: 0,
               scale: 0
           })
       })
       elem.addEventListener("mousemove", function (dets) {
   
           gsap.to(elem.childNodes[3], {
               x: dets.x - elem.getBoundingClientRect().x -90,
               y: dets.y - elem.getBoundingClientRect().y -100
            
           })
       })
   })
 }
page2Animation()

function page3VideoAnimation() {
   var page3Center = document.querySelector(".page3-center");
   var video = document.querySelector("#page3 video");
   var isVideoOpen = false;

   // Pehle video ko initial state pr le aao (hidden)
 

   page3Center.addEventListener("click", function () {
       if (!isVideoOpen) {
           video.style.pointerEvents = "auto";
           video.style.display = "block";
           video.currentTime = 0;
           video.play();

           gsap.to(video, {
               transform: "scaleX(1) scaleY(1)",
               opacity: 1,
               borderRadius: 0,
               duration: 0.5
           });
           isVideoOpen = true;
       }
   });

   video.addEventListener("click", function () {
       if (isVideoOpen) {
           gsap.to(video, {
               transform: "scaleX(0.7) scaleY(0)",
               opacity: 0,
               borderRadius: "30px",
               duration: 0.5,
               onComplete: function () {
                   video.pause();
                   video.currentTime = 0;
                   video.style.pointerEvents = "none";
                   video.style.display = "none";
                   isVideoOpen = false;  // Important! Flag reset karo on complete pr
               }
           });
       }
   });
}

page3VideoAnimation();

function page6Animation(){
   
gsap.from(".btm-page6-content h4",{
   x:0,
   duration:1,
   scrollTrigger:{
      trigger : ".btm-page6-content",
      scroller : "#main",
     // markers:true,
      start : "top 70%",
      end: "top 10%",
      scrub: true,

   }


   
})
}
page6Animation();