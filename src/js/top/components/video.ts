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
      
      video.addEventListener("click", () => { //open the video
        video.classList.add("is-opened");
        html.style.overflowY = 'hidden'; //disable the vertical scrollbar when the video is opened
        html.style.pointerEvents = 'none'; //disable all link/buttons outside the video modal
        videoOverlay.style.pointerEvents = 'auto'; //excempt the video overlay from disabling
      })

       close.addEventListener("click", () => { //close the video
         video.classList.remove("is-opened");
         html.style.overflowY = 'visible'; //undo the disabling vertical scrollbar
         vidFrame.setAttribute('src', originalSrc); //stop the video by refreshing the url
         html.style.pointerEvents = 'auto'; //undo the disabling all link/buttons
       })
    })
  }
}
  
export default videoPlayer