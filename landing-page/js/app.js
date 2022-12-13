/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

///////////////////////////////////////////////////////////
//Define Global Variables

const navbarList = document.getElementById("navbar__list");

const sections = document.querySelectorAll("section");

const button = document.querySelector(".back_to_top");

/////////////////////////////////////////////////////////
// build the nav
function buildNaviBar(section) {
  // empty var to catch list items
  let newListItem = "";
  // looping over sections
  for (section of sections) {
    // adding list items based on section
    newListItem += `<li><a class="menu__link nav" href="#${section.id}">${section.dataset.nav}</a></li>`;
  }
  // adding list items to navigation bar
  navbarList.innerHTML = newListItem;
}
// activation of navigation bar
buildNaviBar();

/////////////////////////////////////////////////////////
// function adding active clas if section is on display
const switchActiveClass = (section) => {
  // looping over all sections
  for (section of sections) {
    // returns top position of section
    let itemTopPosition = section.getBoundingClientRect().top;
    // checking if section is in view
    if (itemTopPosition < 400 && itemTopPosition > -300) {
      // adding active class if in view
      section.classList.add("your-active-class");
    } else {
      // removing active class if in view
      section.classList.remove("your-active-class");
    }
  }
};
// adding event, that will activate function while scrolling
document.addEventListener("scroll", switchActiveClass);

/////////////////////////////////////////////////
// button that scrolls to the top page
const scrollbtn = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// adding event, that will activate function which scroll to the top of page after clicking on button
button.addEventListener("click", scrollbtn);

/////////////////////////////////////////////////
// function will add/remove active class to list in navbar, based on section displayed on the screen
const activeNavbarClass = (section) => {
  // looping over the sections
  for (section of sections) {
    // var giving us index number based on section, which will be linked with proper link from navbar
    let sectionId = section.id.slice(7, 8) - 1;
    let link = navbarList.childNodes[sectionId];
    if (section.classList.contains("your-active-class")) {
      // if section is watch on display, it adds active class to link in navbar
      link.classList.add("active");
    } else {
      // if section is not on display, it removes active class from link in navbar
      link.classList.remove("active");
    }
  }
};
// adding event that will activate on scroll
document.addEventListener("scroll", activeNavbarClass);

///////////////////////////////////////////
// developing a smoth scroll funtion after click on a link in navbar
const links = document.querySelectorAll(".menu__link");
// looping over all links
links.forEach(function (link, i) {
  // adding an event listener to all links in navbar
  link.addEventListener("click", (event) => {
    // choose to which section we want to move
    const sectionToMove = document.getElementById(`section${i + 1}`);
    event.preventDefault();
    // scrolls section into the visible area
    sectionToMove.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});
