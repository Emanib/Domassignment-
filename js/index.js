const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here
// imgs 
const logo = document.getElementById("logo-img"); 
logo.src =siteContent.nav['img-src'];
const imgSnip = document.getElementById("cta-img");
imgSnip.src = siteContent.cta['img-src'];
const middlehimg = document.getElementById("middle-img");
middlehimg.src = siteContent['main-content']["middle-img-src"];
// navs 
const navs =document.querySelectorAll('a');
let i =0;
while(i< navs.length)
{
  navs[i].textContent= siteContent.nav["nav-item-"+(i+1)];
  navs[i].style.color= "green"; 
  i++; 
}
// section (1)
//h1
const h1 = document.querySelector('body > div > section.cta > div > h1');
h1.textContent = siteContent.cta.h1;
//button 
const button = document.querySelector('body > div > section.cta > div > button');
button.textContent =siteContent.cta.button;

// top content 
// top (1)
const top_h4 = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(1) > h4');
console.log(top_h4);
top_h4.textContent =  siteContent["main-content"]["features-h4"];
const top_p = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(1) > p');
top_p.textContent = siteContent["main-content"]["features-content"];
// top (2)
const top_h42 = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(2) > h4');
top_h42.textContent =siteContent["main-content"]["about-h4"];
const top_p2 = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(2) > p');
top_p2.textContent =siteContent["main-content"]["about-content"];
// bottom content 
//bottom (1)
const bot_h4 = document.querySelector('body >div > section.main-content > div.bottom-content > div:nth-child(1) > h4');
bot_h4.textContent = siteContent["main-content"]["services-h4"];
const bot_p = document.querySelector('body >div > section.main-content > div.bottom-content > div:nth-child(1) > p');
bot_p.textContent = siteContent["main-content"]["services-content"];
// bottom (2)
const bot_h41 = document.querySelector('body >div > section.main-content > div.bottom-content > div:nth-child(2) > h4');
bot_h41.textContent = siteContent["main-content"]["product-h4"];
const bot_p1 = document.querySelector('body >div > section.main-content > div.bottom-content > div:nth-child(2) > p');
bot_p1.textContent = siteContent["main-content"]["product-content"];
// bottom (3)
const bot_h42 = document.querySelector('body >div > section.main-content > div.bottom-content > div:nth-child(3) > h4');
bot_h42.textContent =siteContent["main-content"]["vision-h4"];
const bot_p2 = document.querySelector('body >div > section.main-content > div.bottom-content > div:nth-child(3) > p');
bot_p2.textContent =siteContent["main-content"]["vision-content"];

