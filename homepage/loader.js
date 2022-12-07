/* Loader.js

? A poor's man React
* Made to avoid html copy/pasting across files. It allows reusability. Changes can be made in a single place
! The script tag for loader.js MUST include the 'defer' attribute

? Usage:
* Make a "component" .html file
* To use it in your routes, you can do:

  * <div class="navbar_component"></div>

* It will search for a file called navbar.html and replace the div content with it.
*/

// TODO: Supporting <head> tags
// TODO: Filepath
// TODO: Fetch global variables from a config.json file

/* 
! BUG needs fix:
* There's an issue when other scripts try to interact with elements created by 'loader.js'. Attempts to retrieve elements before this has finished execution will result in null.
*/

// The suffix that must be included on the container's class name
const CLASS_SUFFIX = "_component";

/*
* When DOM finishes loading, "main" function is called to find all elements inside the document.body,
* where the element class name includes CLASS_SUFFIX
*/
function main() {
  const elements = document.body.getElementsByTagName("*");

  for (const el of elements) {
    el.classList.forEach((className) => {
      if (className.includes(CLASS_SUFFIX)) load(el);
    });
  }
}

// Replaces containers .innerHTML with html from ./path/component.html
function load(component) {
  const componentName = component.className.slice(0, CLASS_SUFFIX.length * -1);
  fetch(`./components/${componentName}.html`)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector(`.${component.className}`).innerHTML = data;
    });
}

main();