const bar = document.querySelector('.bar');
const sidebar = document.querySelector('.sidebar')

bar.addEventListener('click',(e)=>{
    sidebar.classList.toggle('active')
})

window.addEventListener('resize',(e)=>{
    if(window.innerWidth > 1500){
       sidebar.classList.remove('active')
    }
})