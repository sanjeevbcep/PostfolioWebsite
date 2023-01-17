
// this for about section showing and hiding contents

// all tab links come
var tablinks = document.getElementsByClassName("tab-links");
// all tab contents come
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabName){
    // remove jaha bhe active dikhe isko
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// for sidemenu show and hide now we are adding js show and hide

var sidemenu = document.getElementById("sidemenu");

function openMenu(){
    // npw show this side wala jo show kiya tha
    sidemenu.style.right = "0";
}

function closeMenu(){
    // npw show this side wala jo hide kiya tha
    sidemenu.style.right = "-200px";
}


// for form using github
const scriptURL = 'https://script.google.com/macros/s/AKfycbyi90ta4VC0aXuwgdwiIZgfZqECdavpralmOwmnA5iw3Y2YyD0dm8HnbFDhQwcTkfrD/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML = "Message Sent Successfully";
        // bcz this will be shown continously so time out function used
        setTimeout(function(){
            msg.innerHTML = "";
        },5000)
        form.reset();
      })
    .catch(error => console.error('Error!', error.message))
})

// for changing text
var typed = new Typed(".auto",{
    strings: ["Student","Competitive Programmer","Web Developer"],
    typeSpeed:110,
    backSpeed:60,
    loop:true
})

// for scroll up
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
