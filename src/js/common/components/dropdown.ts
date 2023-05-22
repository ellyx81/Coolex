const dropdownCollapse = () => {

  //const header = document.querySelector(".js-header") as HTMLElement;
  const menu = document.querySelector(".js-nav");
  if (menu) {
    const menuItems = menu.querySelectorAll(".js-nav-item .js-main-menu"); //select all from header__nav-item

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", () => {
        menuItem.classList.toggle("is-active"); //add is-active class
        console.log("active main menu"); //test
    });

    //submenu 
    const dropdown = menuItem.nextElementSibling; // Select the next sibling element
    //const dropdown = menu.querySelector(".js-dropdown");
    if (dropdown) {
      const submenus = dropdown.querySelectorAll(".js-submenu");
      submenus.forEach((submenu) => {
        submenu.addEventListener("click", () => {
          submenu.classList.toggle("is-active");
          console.log("active submenu");
        })
      });   
      
      //remove active state from submenu when the sidebar is closed
      menu.addEventListener("mouseleave", () => {
        submenus.forEach((submenu) => {
          submenu.classList.remove("is-active");
        });
        console.log("sub menu item not active"); //test
      });
      
    }
    });
    
    //remove active state from main menu when the sidebar is closed
    menu.addEventListener("mouseleave", () => {
      menuItems.forEach((menuItem) => {
        menuItem.classList.remove("is-active");
      });
      console.log("menu item not active"); //test
    });
  }


};

export default dropdownCollapse;
