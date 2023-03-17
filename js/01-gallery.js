import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createElement = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
     </a>
     </div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", createElement);



gallery.addEventListener("click", (ev) => {
     ev.preventDefault();
  if (ev.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`
    <img src="${ev.target.dataset.source}" width="800" height="600">`);
    console.log(instance);
    instance.show();
  } 
});


// function keyClose(ev) {
//   if(instance.visible()) {
//     if(ev.target.code === "Escape") instance.close();
// }
// };
 
// gallery.addEventListener('keydown', keyClose)

