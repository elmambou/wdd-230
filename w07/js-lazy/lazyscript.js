// Creating options object
const options = {
    lazyImages: document.querySelectorAll("img[data-src]"),
    rootMargin:  "0% 0% 15% 0%",
    threshold: 1
};


const lazyLoad = (image) => {
   
    // Adds data-src's attribute to src
    image.setAttribute('src', image.getAttribute('data-src'));
    
    // When the image loads, the data-src section is removed
    image.onload = () => {
      image.removeAttribute('data-src');
   };
};

// Creating IntersectionObserver instance
const iobserver = new IntersectionObserver((items, observer) => {
   items.forEach((item) => {
       if(item.isIntersecting){
           lazyLoad(item.target);
           observer.unobserve(item.target);
       }});
}, options);

// IF the image is in viewport it will load the target image
if ('IntersectionObserver' in window) {
      options.lazyImages.forEach((img) => {
         iobserver.observe(img);
    });

} else {
    options.lazyImages.forEach((img) => {
        lazyLoad(img);
    });
}
