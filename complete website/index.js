const imgs=document.querySelectorAll('.headerimage ul img');
const back=document.querySelector('.back');
const next= document.querySelector('.next');
let n=0;
back.addEventListener("click",()=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    showimg();
})
next.addEventListener("click",()=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    showimg();
})
function showimg(){
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}


showimg();
// let scroller=document.querySelectorAll('.product');
// for(let item of scroller)
// item.addEventListener("wheel",(evt)=>{
//     evt.predefult();
//     item.sscrollleft+=evt.deltaY;
// });
const scroller=document.querySelectorAll('.product');
for(const item of scroller){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft+=evt.deltaY;
    });
}


