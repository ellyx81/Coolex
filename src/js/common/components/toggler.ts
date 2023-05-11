const toggler = () => {
  const header = document.querySelector(".js-header") as HTMLElement;
  
  if (header) {
    const toggle = header.querySelector(".js-toggler");
    console.log(toggle); // Check if the toggle button is being selected properly

    if (toggle) {
      toggle.addEventListener("click", () => {
        console.log("Toggle button clicked"); // Check if the click event listener is being added
        
        if (header.classList.contains("is-active")) {
          header.classList.remove("is-active");
          console.log("not active"); //test
        } else {
          header.classList.add("is-active");
          console.log("active"); //test
        }
      });
      
      header.addEventListener("mouseleave", () => {
        header.classList.remove("is-active");
      });
    }
  }

}

export default toggler


