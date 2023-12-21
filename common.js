'use strict'

// перемикання вкладок секції services

const servicesTabs = document.querySelectorAll('.tab');
const servicesContent = document.querySelectorAll('.content');

servicesTabs.forEach(function (item) {
    item.addEventListener('click', function () {
        let activeServicesTab = item;
        let tabAttribute = activeServicesTab.getAttribute('data-tab');
        let activeContent = document.querySelector(tabAttribute);

        servicesTabs.forEach(function (item) {
            item.classList.remove('active-tab');
        })
        servicesContent.forEach(function (item) {
            item.classList.remove('active-content');
        })
        activeServicesTab.classList.add('active-tab');
        activeContent.classList.add('active-content');
    })
})

// створення масиву додаткових фото секції amazing

const imgBlock = document.querySelector('.img-block');
let imgArray = [
    ["imgs/graphic5.jpg", "imgs/graphic7.jpg", "imgs/graphic6.jpg"],
    ["imgs/landing4.jpg", "imgs/landing5.jpg", "imgs/landing6.jpg"],
    ["imgs/web4.jpg", "imgs/web5.jpg", "imgs/web6.jpg"],
    ["imgs/wordpress3.jpg", "imgs/wordpress4.jpg", "imgs/wordpress6.jpg"]
];

imgArray.forEach(function (item, index) {
    item.forEach(function (subitem) {
        let newImg = document.createElement('img');
        newImg.setAttribute('src', `${subitem}`);
        let newImgContainer = document.createElement('div');
        imgBlock.append(newImgContainer);
        newImgContainer.append(newImg);
        newImgContainer.classList.add('am-img');
        switch (index) {
            case 0:
                return newImgContainer.classList.add('graphic');
            case 1:
                return newImgContainer.classList.add('landing');
            case 2:
                return newImgContainer.classList.add('web');
            case 3:
                return newImgContainer.classList.add('wordpress');
        }
    })
})

// завантаження масиву додаткових фото секції amazing

const amImg = document.querySelectorAll('.am-img');
const amazingBtn = document.querySelector('.amazing-btn');

amazingBtn.addEventListener('click', function (e) {
    amImg.forEach(function (item) {
        item.classList.add('open')
    })
    e.preventDefault()
    amazingBtn.style.visibility = 'hidden';
    if (activeTab) {
        activeTab.click();
    }
})

// перемикання вкладок секції amazing

const amTab = document.querySelectorAll('.am-tab');
let activeTab = null;

amTab.forEach(function (item) {
    item.addEventListener('click', function () {
        activeTab = item;
        let tabAttribute = activeTab.getAttribute('data-tab');
        let activeImg = document.querySelectorAll(`.${tabAttribute}`);
        if (tabAttribute === 'all') {
            amTab.forEach(function (item) {
                item.classList.remove('active-am-tab');
            })
            activeTab.classList.add('active-am-tab');
            amImg.forEach(function (item) {
                if (item.classList.contains('open')) {
                    item.style.display = 'block';
                }
            })
        } else {
            amTab.forEach(function (item) {
                item.classList.remove('active-am-tab');
            })
            amImg.forEach(function (item) {
                item.style.display = 'none';
            })
            activeTab.classList.add('active-am-tab');
            activeImg.forEach(function (item) {
                if (item.classList.contains('open')) {
                    item.style.display = 'block';
                }
            })
        }
    })
})

// ефект ховеру зображень секції amazing

let hover = document.querySelector('.hover');
let hoverName = document.querySelector('.hover-name');

amImg.forEach(function (item) {
    item.addEventListener('mouseover', function () {
        item.prepend(hover);
        hover.style.visibility = 'visible';
        hover.style.width = '100%';
        if (item.classList.contains('graphic')) {
            hoverName.textContent = 'Graphic Design'
        } else if (item.classList.contains('landing')) {
            hoverName.textContent = 'Landing Pages'
        } else if (item.classList.contains('web')) {
            hoverName.textContent = 'Web Design'
        } else {
            hoverName.textContent = 'Wordpress'
        }
    })
    item.addEventListener('mouseout', function () {
        hover.style.visibility = 'hidden';
    })
})

let picture = document.querySelectorAll('.img-block img');

picture.forEach(function (item) {
    item.addEventListener('mouseover', function () {
        item.style.opacity = '0';
    })
    item.addEventListener('mouseout', function () {
        item.style.opacity = '1';
        item.style.transitionDuration = '0.5s';
    })
})

// перемикання вкладок секції people_say табами

const peopleSayContent = document.querySelectorAll('.people_say-content');
const peopleSayTab = document.querySelectorAll('.people_say-tab');
let activePeopleSayTab;
let activePeopleSayContent;
let index = 0;

peopleSayTab.forEach(function (item, _index) {
    item.addEventListener('click', function () {
        activePeopleSayTab = item;
        let peopleSayTabAttribute = activePeopleSayTab.getAttribute('data-tab');
        activePeopleSayContent = document.querySelector(`#${peopleSayTabAttribute}`);
        peopleSayTab.forEach(function (item) {
            item.style.marginTop = '';
        })
        peopleSayContent.forEach(function (item) {
            item.classList.remove('active-people_say');
        })
        activePeopleSayTab.style.marginTop = '-12px';
        activePeopleSayTab.style.transitionDuration = '0.3s';
        activePeopleSayContent.classList.add('active-people_say');
        index = _index;
    })
})

// перемикання вкладок секції people_say стрілками

let arrows = document.querySelectorAll('.arrow');

arrows.forEach(function (arrowItem) {
    arrowItem.addEventListener('click', function () {
        if (arrowItem.classList.contains('left')) {
            if (index === 0) {
                peopleSayTab[peopleSayTab.length - 1].click();
            } else {
                peopleSayTab[index - 1].click();
            }
        } else if (arrowItem.classList.contains('right')) {
            if (index === peopleSayTab.length - 1) {
                peopleSayTab[0].click();
            } else {
                peopleSayTab[index + 1].click();
            }
        }
    })
})



