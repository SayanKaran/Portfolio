var typed=new Typed(".text",{
    strings:["Frontend Developer","Photographer"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true
});

document.addEventListener('DOMContentLoaded',function(){
    let head=document.getElementsByClassName('head')[0];

    window.addEventListener('scroll',function(){
        if(window.scrollY>0){
            head.classList.add("fixed");
        }else{
            head.classList.remove("fixed");
        }
    })
})

document.addEventListener('DOMContentLoaded',function(){
   mpb('htmlProgressBar',70);
   mpb('cssProgressBar',50);
   mpb('jsProgressBar',50);
   
   mpb('cProgressBar',80);
});

function mpb(bid,tprog){
    let prog=0;

    let barid=document.getElementById(bid);

    let interval=setInterval(()=>{
       if(prog>=tprog){
        clearInterval(interval);
       }else{
        prog+=1;
        barid.style.width=prog+"%";
       }
    },10);
}

document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('nav a').forEach(anchor=>{
        anchor.addEventListener('click',function(e){
               e.preventDefault();

               let id=this.getAttribute('href').substring(1);

               document.getElementById(id).scrollIntoView({
                behavior:'smooth'
               });
        });
    });
});
document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('header a').forEach(anchor=>{
        anchor.addEventListener('click',function(e){
               e.preventDefault();

               let id=this.getAttribute('href').substring(1);

               document.getElementById(id).scrollIntoView({
                behavior:'smooth'
               });
        });
    });
});

