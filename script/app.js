const images = document.querySelectorAll("img");

const lazyImageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = entry.target;
      image.src = image.dataset.src;
      lazyImageObserver.unobserve(image);
    }
  });
});

images.forEach((entry) => {
  lazyImageObserver.observe(entry);
});
