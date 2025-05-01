function resnavanimation(){
   var renav = document.querySelector("#resnav")

   var cross = document.querySelector("#resnav i")
   var menu = document.querySelector("nav i")
   
   var tl = gsap.timeline()
   
   
   tl.to("#resnav", {
       right: "0%",
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
      renav.style.display = "none" 
      
       tl.reverse()
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
      amount:0.6
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
//navAnimation();