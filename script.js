
// navbar
const navbar = document.getElementById("navbar");
window.addEventListener("scroll",function(){
    if(this.scrollY > 20){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
    
    
});


// menu btn
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
// list items
const lists = document.querySelectorAll('li');
// array
const listArray = Array.from(lists);

listArray.forEach((li) => {
    li.addEventListener("click", () => {
        menu.classList.toggle('active');
    })
})

menuBtn.addEventListener("click",function(){
    menu.classList.toggle('active'); 
});

    
    
    


// scroll btn
const scrollBtn = document.querySelector(".scrollBtn");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 100){
        scrollBtn.classList.add('show');
    }
    else{
        scrollBtn.classList.remove('show');
    }

})

// read more read less btn
const readMore =document.querySelector(".read-more-btn");

const texts = document.querySelector('.texts');

readMore.addEventListener('click',(e)=>{
    texts.classList.toggle('show-more');
    if(readMore.innerHTML === "Read more"){
        readMore.innerHTML = "Read less";

    }else{
        readMore.innerHTML = "Read more";
    }

})