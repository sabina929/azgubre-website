// const languagesContainer = document.querySelector('li.languages')


// NAVIGATION
// Toggle menu
const hamburgerMenuButton = document.querySelector('header.small-screen .menu-btn');
const menuContainer = document.querySelector('header.small-screen nav.menu-nav');
const menuItemLinks = document.querySelectorAll('header.small-screen nav.menu-nav ul li>a');

const menuIcon = document.querySelector('header.small-screen .menu-btn .menu-icon');


let isMenuOpened = false;

hamburgerMenuButton.addEventListener("click", checkMenuIsOpened);
function checkMenuIsOpened(){
    if(isMenuOpened === false){
        openMenu()
    } else if(isMenuOpened === true){
        closeMenu()
        // console.log("clicked")
    }
}
function openMenu(){
    isMenuOpened = true;
    console.log("openMenu()", isMenuOpened)

    // menuContainer.style.display = "flex"
    // menuContainer.style.transform = "translate(-50%, 0px)"
    menuIcon.classList.add('opened')
    setTimeout(() => {
      menuContainer.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"           

    }, 20)



   
}
function closeMenu(){
    isMenuOpened = false;
    console.log("closeMenu()", isMenuOpened)

    // menuList.classList.remove("menu-items-appear");
    menuIcon.classList.remove('clicked')

    // menuItemLink1.parentNode.classList.remove('opened')
    
    setTimeout(() => {
      
     

              setTimeout(() => {

                menuIcon.classList.remove('opened')
                setTimeout(() => {
                menuContainer.style.clipPath = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"       
           
                },400)
              },40)
      
    },120)

  
}


menuItemLinks.forEach(menuItemLink => {
  menuItemLink.addEventListener("click",()=>{
    setTimeout(()=>{
      closeMenu()
    }, 20)
  })
   
});