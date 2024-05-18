import fetchHTML from "./assets/js/fetchHTML.js";

document.addEventListener("DOMContentLoaded", e => {

  let $header = document.querySelector("header");
  let $footer = document.querySelector("footer");

  fetchHTML({
    url: 'assets/elements/header.html',
    success: (header) => {
      $header.innerHTML = header;
      let classActive = $header.getAttribute("data-header");
      let $linkActive = document.querySelector(`.my-header__text[class='my-header__text ${classActive}']`);
      $linkActive.classList.add("my-header__text--is-active");
    }
  });

  fetchHTML({
    url: 'assets/elements/footer.html',
    success: (footer) => $footer.innerHTML = footer
  });


})