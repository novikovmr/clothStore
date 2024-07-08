const menuBtn = document.querySelector(".menuBtn");
console.log(menuBtn);
const dropMenu = document.querySelector(".dropdown");
console.log(dropMenu);

menuBtn.addEventListener('click', (event) => {
    
    dropMenu.classList.toggle('menu-hidden');

    // if (window.getComputedStyle(dropMenu).display == 'block') {
        
    //     dropMenu.style.display = 'none'
    // }
    // else {
    //     dropMenu.style.display = 'block';
    //     setTimeout(dropMenu.classList.toggle('menu-hidden'), 1000);
    // }
     
});

