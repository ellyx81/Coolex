const toggler = () => {
  const header = document.querySelector(".js-header") as HTMLElement;
  const html = document.querySelector('html') as HTMLElement;

  if (header) {
    const toggle = header.querySelector(".js-toggler");
    console.log(toggle); // Check if the toggle button is being selected properly

    if (toggle) {
      toggle.addEventListener("click", () => {
        console.log("Toggle button clicked"); // Check if the click event listener is being added
        
        if (header.classList.contains("is-active")) {
          header.classList.remove("is-active");
          console.log("not active"); //test
          html.style.overflowY = 'visible';
        } else {
          header.classList.add("is-active");
          console.log("active"); //test
          html.style.overflowY = 'hidden';
        }
      });
      
      header.addEventListener("mouseleave", () => {
        header.classList.remove("is-active");
        html.style.overflowY = 'visible';
      });
    }
  }

}

export default toggler


