/* ***********************************************************************

NU Global Navigation (NUGN)

*********************************************************************** */



function NUGlobalNav(){

  this.trigger = document.getElementById("nu__supernav-toggle");  // this is our main nav trigger element
  this.category = document.querySelector("div.items > ul"); // these are the main category options within the nav

  // this will be triggered when the menu is actioned by the user, either to open or close it
  this.trigger.onclick = function(e){

    e.preventDefault();

    this.navText = Array('EXPLORE NORTHEASTERN','CLOSE'); // text values for nav open and closed

    this.textContent = (this.classList.contains("active")?this.navText[0]:this.navText[1]);
    this.classList.contains("active") ? this.classList.remove('active') : this.classList.add('active');
    this.classList.contains("active") ? this.nextSibling.classList.add('open') : this.nextSibling.classList.remove('open');
    this.classList.contains("active") ? document.querySelector("div.items > ul").setAttribute('aria-hidden', false) : document.querySelector("div.items > ul").setAttribute('aria-hidden', true);
  };

  // add an event listener to each of the main category items in the navigation
  this.category.addEventListener('click',function(e){
    if (e.target.tagName === 'LI'){
      document.querySelector("div.items > ul > li.active").classList.remove("active");
      e.target.classList.add('active');
    }
  });

}


if(document.getElementById("nu__supernav-toggle") !== null){  // let's check to see if the global nav is even in the DOM
  var NUGN = new NUGlobalNav();
}else{  // the global nav element was not found, throw an error
  alert('ERROR: global navigation element not found');
}
