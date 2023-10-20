
const hamberger = document.querySelector('.hamberger');
const mobile = document.querySelector('.mobile__List');
const headerL = document.querySelector('.header__List');
const brightness = document.querySelector('.brightness');
const text = document.querySelector('.circle__text p');
const Text = document.querySelector('.circle__text');
const btn = document.querySelector('.btn');
const List = document.querySelectorAll('.header__List > nav > ul > li > a');
const div = document.querySelector('.div');
const textL = document.querySelector('.div p');
const headerH2 = document.querySelector('.header__discription-head ');
function selectedTab(e) {
    for (let i = 0; i < List.length; i++) {
        List[i].removeAttribute('class');
    }
    e.target.classList.add('active');

}
for (let i = 0; i < List.length; i++) {
    List[i].addEventListener('click', selectedTab);
}

let counter = [];
let value = false;
let degree = 10;
let num = 1;
window.addEventListener('scroll', () => {
    const pageTop = window.pageYOffset;
    counter.push(pageTop);
    let lastElement = counter[counter.length - 1];
    let prevElement = counter[counter.length - 2];
    if (lastElement > prevElement) {
        /*    console.log(`Scrolling Down the page`); */
        Text.style.rotate = `${degree}deg`;
        text.style.fontWeight = 'bolder';
        Text.style.transition = 'all .4s easeIn';
        Text.classList.add('animLeft');
        Text.classList.remove('animRight');
        degree = degree + 10;
        num++;
    }
    else {
        /*  console.log(`Scrolling Up the page`); */
        Text.style.rotate = `${degree}deg`;
        text.style.fontWeight = 'lighter';
        Text.style.transition = 'all .4s easeIn';
        Text.classList.add('animRight');
        Text.classList.remove('animLeft');
        degree = degree - 10;
        num--;
    }

})


const Dark = () => {
    if (value === false) {
        document.documentElement.setAttribute('data-theme', 'dark');
        brightness.innerHTML = `<i class="fa-regular fa-sun fa-2xl" style="color: #fff;"></i>`;
        value = true;
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        brightness.innerHTML = `<i class="fa-solid fa-sun fa-2xl"></i>`;
        value = false;
    }
}

brightness.addEventListener('click', Dark);
hamberger.addEventListener('click', () => {
    mobile.classList.toggle('none');

});
text.innerHTML = text.innerText.split("").map((char, i) =>
    ` <span style='transform:rotate(${i * 11}deg)'>${char}</span>`).join("");

textL.innerHTML = textL.innerText.split('').map((char, i) => `<span class='letter${i}' style='left:${i * 15}px'>${char}</span>`).join("");
const span = document.querySelectorAll('.div p span');

window.addEventListener("load", (event) => {
    for (let i = 0; i < span.length; i++) {
        span[i].classList.toggle(`animate`);
        console.log(span[i]);
    }
});