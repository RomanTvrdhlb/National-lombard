import {ElementReplacer} from '../functions/replacer'

new ElementReplacer({
  element: document.querySelector('.header__nav'),
  parentDesktop: document.querySelector('.header__box'),
  parentMobile: document.querySelector('.mobile__menu'),
  breakpoint: 1024,
  mobilePlace: "beforeend",
  desktopPlace: "beforeend"
});



// 'beforebegin': перед самим элементом targetElement.
// 'afterbegin': внутри элемента targetElement, перед его первым потомком.
// 'beforeend': внутри элемента targetElement, после его последнего потомка.
// 'afterend': после самого элемента targetElement.


