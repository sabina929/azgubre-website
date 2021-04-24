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

document.addEventListener('click', (e)=>{
    if(!e.target.closest('header.small-screen')) {
        closeMenu()
    }
})

// LANGUAGE SELECTIONS
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

document.addEventListener('click', (e)=>{
    if(!e.target.closest('div.header-big-screen-languages')) {
        optionsContainerHeaderBig.classList.remove('opened')
    }
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

document.addEventListener('click', (e)=>{
    if(!e.target.closest('div.header-small-screen-languages')) {
        optionsContainerHeaderSmall.classList.remove('opened')
    }
})

// SALES POINT SELECTION
const selectedPointContainer = document.querySelector('section#our-sales-points div.dropdown>div.selected');
const selectedPoint = document.querySelector('section#our-sales-points div.dropdown>div.selected>p');
const selectedPointDownArrow = document.querySelector('section#our-sales-points div.dropdown>div.selected>span>img');
const pointOptionsContainer = document.querySelector('section#our-sales-points div.dropdown>div.options');
// const pointOptions = document.querySelectorAll('section#our-sales-points div.dropdown>div.options>a.option');
const pointOptions = document.querySelectorAll('section#our-sales-points div.dropdown>div.options>p.option');

const tooltip = document.querySelector('.location-tooltip');
const tooltipHeading = document.querySelector('.location-tooltip div.location-info>h4');
const tooltipAddress = document.querySelector('.location-tooltip div.location-info>div>p.address>span');
const tooltipPhoneNumber = document.querySelector('.location-tooltip div.location-info>div>p.phone>span');
const mapPaths = document.querySelectorAll('section#our-sales-points>article>div.map-container>svg>g>path');
const mapContainer = document.querySelector('section#our-sales-points>article>div.map-container');

let districtsArr = [
    {
        id: 'AZE1690',
        name: 'Abşeron',
        address: 'Abşeron, Azərbaycan',
        phoneNumber: '055 355 35 35'
    },
    {
        id: 'AZE1698',
        name: 'Biləsuvar',
        address: 'Biləsuvar, Azərbaycan',
        phoneNumber: '055 495 49 49'
    },
    {
        id: 'AZE1700',
        name: 'Cəlilabad',
        address: 'Cəlilabad, Azərbaycan',
        phoneNumber: '055 535 53 53'
    },
    {
        id: 'AZE1711',
        name: 'Qobustan',
        address: 'Qobustan, Azərbaycan',
        phoneNumber: '055 285 28 28'
    },
]

selectedPointContainer.addEventListener('click',openPointOptionsContainer)

function openPointOptionsContainer(){
  pointOptionsContainer.classList.toggle('opened')
  selectedPointDownArrow.classList.toggle('rotate')
}

pointOptions.forEach(pointOption => {
    pointOption.addEventListener("click", getTooltipLocationOnSelection);
})


function getTooltipLocationOnSelection(e){
    
        selectedPoint.innerHTML = e.target.innerHTML
        let selectedDistrict = districtsArr.filter(district => district.id === e.target.dataset.districtid)
        //   console.log(selectedDistrict)
        mapPaths.forEach(function(item) {  
            
            item.classList.remove('active')
            if(item.id === selectedDistrict[0].id){
                item.classList.add('active')
                // pos = item.getBBox()
                tooltipHeading.innerHTML = selectedDistrict[0].name
                tooltipAddress.innerHTML = selectedDistrict[0].address
                tooltipPhoneNumber.innerHTML = selectedDistrict[0].phoneNumber
                
                if(selectedDistrict[0].name === 'Abşeron'){
                    let mapContainerPos = mapContainer.getBoundingClientRect()
                    let pos = item.getBoundingClientRect()
                    tooltip.style.top = (pos.top - mapContainerPos.top + pos.height/2) + 'px';
                    tooltip.style.left = (pos.left -mapContainerPos.left + pos.width/2) + 'px';
                    // console.log(pos)
                }
                if(selectedDistrict[0].name === 'Biləsuvar'){
                    let mapContainerPos = mapContainer.getBoundingClientRect()
                    let pos = item.getBoundingClientRect()
                    tooltip.style.top = (pos.top - mapContainerPos.top + pos.height/2) + 'px';
                    tooltip.style.left = (pos.left -mapContainerPos.left + pos.width/2) + 'px';
                    // console.log(pos)
                }
                if(selectedDistrict[0].name === 'Cəlilabad'){
                    let mapContainerPos = mapContainer.getBoundingClientRect()
                    let pos = item.getBoundingClientRect()
                    tooltip.style.top = (pos.top - mapContainerPos.top + pos.height/2) + 'px';
                    tooltip.style.left = (pos.left -mapContainerPos.left + pos.width/2) + 'px';
                    console.log(pos)
                }
                if(selectedDistrict[0].name === 'Qobustan'){
                    console.log(mapContainer.getBoundingClientRect())
                    let mapContainerPos = mapContainer.getBoundingClientRect()
                    let pos = item.getBoundingClientRect()
                    tooltip.style.top = (pos.top - mapContainerPos.top + pos.height/2) + 'px';
                    tooltip.style.left = (pos.left -mapContainerPos.left + pos.width/2) + 'px';
                    console.log(pos)
                }
            }
        });    
}

    mapPaths.forEach(function(item) {  
        item.classList.remove('active')
        if(item.id === 'AZE1711'){
            item.classList.add('active')
            tooltipHeading.innerHTML = districtsArr[3].name
            tooltipAddress.innerHTML = districtsArr[3].address
            tooltipPhoneNumber.innerHTML = districtsArr[3].phoneNumber
            if(tooltipHeading.innerHTML === 'Qobustan'){
                let mapContainerPos = mapContainer.getBoundingClientRect()
                let pos = item.getBoundingClientRect()
                tooltip.style.top = (pos.top - mapContainerPos.top + pos.height/2) + 'px';
                tooltip.style.left = (pos.left -mapContainerPos.left + pos.width/2) + 'px';
                // console.log('executed')
            }
        }
    });

document.addEventListener('click', (e)=>{
    if(!e.target.closest('section#our-sales-points div.dropdown')) {
        pointOptionsContainer.classList.remove('opened')
    }
})
