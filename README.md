# Homepage  

This is my solution for [CS50x Problem Set 8: Homepage](https://cs50.harvard.edu/x/2025/psets/8/homepage/#homepage).  

I designed and built a website using **HTML**, **vanilla CSS**, **JavaScript**, and **Bootstrap**. The project includes many features, such as:  
- A responsive design.  
- A custom footer and navigation bar (navbar).  
- Interactive elements for a rich user experience like a hamburger menu, or carousel.
- Dark mode support.  
- Over 500 lines of plain CSS.
- Assets sourced from [https://undraw.co/](https://undraw.co/).  

### Extra Challenge: A Component-Based Approach Without Frameworks  

Since this project doesn't use Node.js, I couldn’t rely on React or similar libraries/frameworks. To address this, I developed a [custom component loader script](https://github.com/mstarrk/Homepage/blob/main/homepage/loader.js)—`loader.js`—which functions as a basic HTML injector. This script enables reusability and eliminates repetitive code by dynamically loading reusable HTML components, allowing me to implement a composite approach. 

The script allows you to use reusable components like this:  

```html
<div class="navbar_component"></div>
```

It dynamically loads the content of `./components/navbar.html` into the div.
