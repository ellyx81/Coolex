const videoPlayer = () => {
  const html = document.querySelector('html') as HTMLElement;
  const parent = document.querySelector(".video");
  if (parent) {
    const videos = parent.querySelectorAll(".video__item");

    videos.forEach((video) => {
      const videoOverlay = video.nextElementSibling as HTMLElement;
      const close = videoOverlay.querySelector(".video__close") as HTMLElement;
      const vidFrame = videoOverlay.querySelector('.video__frame') as HTMLElement;
      const originalSrc = vidFrame.getAttribute('src') as string;
      
      video.addEventListener("click", () => {
        video.classList.add("is-opened");
        html.style.overflowY = 'hidden';
      })

       close.addEventListener("click", () => {
         video.classList.remove("is-opened");
         html.style.overflowY = 'visible';
         vidFrame.setAttribute('src', originalSrc);
       })
    })
  }
}
  
export default videoPlayer