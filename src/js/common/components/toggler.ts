const toggler = () => {
  const nav = document.querySelector(".js-header");
  console.log(nav); // Check if the nav is being selected properly

  if (nav) {
    const toggle = nav.querySelector(".js-toggler");
    console.log(toggle); // Check if the toggle button is being selected properly

    if (toggle) {
      toggle.addEventListener("click", () => {
        console.log("Toggle button clicked"); // Check if the click event listener is being added
        if (nav.classList.contains("is-active")) {
          nav.classList.remove("is-active");
          console.log("active");
        } else {
          nav.classList.add("is-active");
        }
      });
      
      nav.addEventListener("mouseleave", () => {
        nav.classList.remove("is-active");
      });
    }
  }

}

export default toggler


