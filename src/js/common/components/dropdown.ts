const dropdownCollapse = () => {

  //CODE 1
  const menu = document.querySelector(".js-nav");
  if (menu) {
    const menuItems = menu.querySelectorAll(".js-nav-item .js-main-menu"); //select all from header__nav-item

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", () => {
        menuItem.classList.toggle("is-active"); //add is-active class
        console.log("active main menu"); //test
      });
    });
    
    menu.addEventListener("mouseleave", () => {
      menuItems.forEach((menuItem) => {
        menuItem.classList.remove("is-active");
      });
      console.log("not active"); //test
    });
  }

//   const item = document.querySelector(".js-nav-item");
  
//   if (item) {
//   const dropdownItems = item.querySelectorAll(".js-dropdown .js-submenu"); //select all from header__nav-item
      
//   dropdownItems.forEach((dropdownItem) => {
//     dropdownItem.addEventListener("click", () => {
//       dropdownItem.classList.toggle("is-active"); //add is-active class
//       console.log("active sub menu"); //test
//     });
//   });

// }



  //CODE 2

// Add a click event listener to each anchor element inside an element with a class of "sub-menu"
//  const subMenuLinks = document.querySelectorAll<HTMLElement>(".js-nav-item .js-main-menu");

// for (let i = 0; i < subMenuLinks.length; i++) {
//   subMenuLinks[i].addEventListener("click", function() {
//     const subMenu = this.parentElement as HTMLElement;
//     const subMenuList = subMenu.querySelector(".js-menu") as HTMLElement;
//     subMenuList.style.display = subMenuList.style.display === "none" ? "block" : "none";
//     console.log("active dropdown"); //test    
//   });
// }

};

export default dropdownCollapse;
