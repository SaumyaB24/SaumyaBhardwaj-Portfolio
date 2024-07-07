document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("loader-container").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000); // Adjust the timeout as needed
});


window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('nav-scroll',window.scrollY>0);
});
document.querySelector('.open').addEventListener('click', () =>{
    document.querySelector('.close').style.display = 'block'; 
    document.querySelector('.open').style.display = 'none';
    document.querySelector('ul').style.left = '0';
});
document.querySelector('.close').addEventListener('click', () =>{
    document.querySelector('.close').style.display = 'none'; 
    document.querySelector('.open').style.display = 'block';
    document.querySelector('ul').style.left = '-270px';
})