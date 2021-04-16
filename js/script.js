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
    // console.log("openMenu()", isMenuOpened)

    menuIcon.classList.add('opened')
    setTimeout(() => {
      menuContainer.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"           

    }, 20)



   
}
function closeMenu(){
    isMenuOpened = false;
    // console.log("closeMenu()", isMenuOpened)

    menuIcon.classList.remove('clicked') 

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


// LANGUAGE SELECTION
// HEADER - BIG SCREEN
const selectedLanguageContainerHeaderBig = document.querySelector('div.header-big-screen-languages>div.selected');
const selectedLanguageHeaderBig = document.querySelector('div.header-big-screen-languages>div.selected>p');
const selectedLanguageDownArrowHeaderBig = document.querySelector('div.header-big-screen-languages>div.selected>span>img');
const optionsContainerHeaderBig = document.querySelector('div.header-big-screen-languages>div.options');
const languageOptionsHeaderBig = document.querySelectorAll('div.header-big-screen-languages>div.options>a.option');


selectedLanguageContainerHeaderBig.addEventListener('click',openOptionsContainerHeaderBig)


function openOptionsContainerHeaderBig(){
    optionsContainerHeaderBig.classList.toggle('opened')
    selectedLanguageDownArrowHeaderBig.classList.toggle('rotate')
}

languageOptionsHeaderBig.forEach(languageOption => {
    languageOption.addEventListener("click", e => {
        selectedLanguageHeaderBig.innerHTML = e.target.innerHTML
    });
})


// HEADER - SMALL SCREEN
const selectedLanguageContainerHeaderSmall = document.querySelector('div.header-small-screen-languages>div.selected');
const selectedLanguageHeaderSmall = document.querySelector('div.header-small-screen-languages>div.selected>p');
const selectedLanguageDownArrowHeaderSmall = document.querySelector('div.header-small-screen-languages>div.selected>span>img');
const optionsContainerHeaderSmall = document.querySelector('div.header-small-screen-languages>div.options');
const languageOptionsHeaderSmall = document.querySelectorAll('div.header-small-screen-languages>div.options>a.option');


selectedLanguageContainerHeaderSmall.addEventListener('click',openOptionsContainerHeaderSmall)


function openOptionsContainerHeaderSmall(){
    optionsContainerHeaderSmall.classList.toggle('opened')
    selectedLanguageDownArrowHeaderSmall.classList.toggle('rotate')
}

languageOptionsHeaderSmall.forEach(languageOption => {
    languageOption.addEventListener("click", e => {
        selectedLanguageHeaderSmall.innerHTML = e.target.innerHTML
    });
})