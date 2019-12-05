const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = document.querySelectorAll('a');

//nav bar changes with loop
links.forEach((x,i)=>{
  let newI = i + 1;
  let navItem = "nav-item-" + newI;
  console.log(navItem); 
  x.textContent = siteContent["nav"][navItem];
});


//nav bar changes
// const links = document.querySelectorAll('a');
// links[0].textContent = siteContent["nav"]["nav-item-1"];
// links[1].textContent = siteContent["nav"]["nav-item-2"];
// links[2].textContent = siteContent["nav"]["nav-item-3"];
// links[3].textContent = siteContent["nav"]["nav-item-4"];
// links[4].textContent = siteContent["nav"]["nav-item-5"];
// links[5].textContent = siteContent["nav"]["nav-item-6"];

//cta changes
const heading = document.querySelector('.cta-text h1');
heading.textContent = siteContent["cta"]["h1"];

const button = document.querySelector(".cta-text button");
button.textContent = siteContent["cta"]["button"];

const topImg = document.getElementById("cta-img");
topImg.src = siteContent["cta"]["img-src"];

//main-content changes
const h4all = document.querySelectorAll('.text-content h4');
h4all[0].textContent = siteContent["main-content"]["features-h4"];
h4all[1].textContent = siteContent["main-content"]["about-h4"];
h4all[2].textContent = siteContent["main-content"]["services-h4"];
h4all[3].textContent = siteContent["main-content"]["product-h4"];
h4all[4].textContent = siteContent["main-content"]["vision-h4"];

const mainP = document.querySelectorAll('.text-content p');
mainP[0].textContent = siteContent["main-content"]["features-content"];
mainP[1].textContent = siteContent["main-content"]["about-content"];
mainP[2].textContent = siteContent["main-content"]["services-content"];
mainP[3].textContent = siteContent["main-content"]["product-content"];
mainP[4].textContent = siteContent["main-content"]["vision-content"];

const midImg = document.getElementById("middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

//contact section changes
const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactAllP = document.querySelectorAll(".contact p");
contactAllP[0].textContent = siteContent["contact"]["address"];
contactAllP[1].textContent = siteContent["contact"]["phone"];
contactAllP[2].textContent = siteContent["contact"]["email"];

//footer changes
const footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];

//change nav links to green
links.forEach(i => {
  i.style.color = "green";
});

//add new links to beginning and end of nav bar
const firstNewLink = document.createElement('a');
firstNewLink.textContent = "Last";
firstNewLink.style.color = "green";

const secondNewLink = document.createElement('a');
secondNewLink.textContent = "First";
secondNewLink.style.color = "green";

const navBar = document.querySelector("nav");

navBar.append(firstNewLink);
navBar.prepend(secondNewLink);

//change with of contact section to break address into two lines
const contactW = document.querySelector(".contact");
contactW.style.width = "150px";

//style changes for stretch goals
const contain = document.querySelector(".container")
contain.style.background = "dodgerblue";

sections = document.querySelectorAll('section');

sections.forEach(i =>{
  i.style.padding = "10px";
});

midImg.style.width = "100%";

const header = document.querySelector("header");

header.style.background = "white";
header.style.padding = "5px";
header.style.border = "2px solid black";
header.style.marginTop = "5px";
header.style.borderRadius = "0 0 20px 20px";

navBar.style.justifyContent = "space-around";

heading.style.textShadow = "6px 6px 2px gray";





