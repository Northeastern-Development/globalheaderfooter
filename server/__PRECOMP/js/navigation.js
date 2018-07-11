// function getEventTarget(e) {
//   e = e || window.event;
//   return e.target || e.srcElement;
// }
//
// var cNav = null;
//
// var navItem = document.getElementById("nu__globalheader").getElementsByTagName("ul")[0];
//
// navItem.onclick = function(event) {
//     var target = getEventTarget(event);
//     document.querySelector(".active").classList.remove("active");
//     target.classList.add('active');
// };



function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}




//var navItem = document.getElementById("nu__mainmenu-supernav").getElementsByTagName("a")[0];

// navItem.onclick = function(event) {
//     var target = getEventTarget(event);
//     document.querySelector(".active").classList.remove("active");
//     target.classList.add('active');
// };



// $(this).addClass('active').focus().html('Close').next('div').addClass('open');
// $(this).next('div').find('div.items > ul').attr('aria-hidden','false');

var openNav = document.getElementById("nu__globalheader").getElementsByTagName("a")[1];

openNav.onclick = function(event) {
  event.preventDefault();
  var target = getEventTarget(event);
  var baseElement = document.querySelector("ul");

  if (document.querySelector("a.js__mainmenu-item").classList.contains("active")) {//closing
    openNav.classList.remove('active');//changes the icon from x to carrot
    target.textContent = "EXPLORE NORTHEASTERN";
    target.nextSibling.classList.remove('open');
    baseElement.setAttribute('aria-hidden', true);
    //console.log(openNav);
    //document.querySelector("#nu__supernav > section > div > ul > li.active").classList.remove("active");
  }else {//opening
    target.classList.add('active');
    target.blur();
    target.textContent = "Close";
    target.nextSibling.classList.add('open');
    //target.nextSibling.baseElement.setAttribute('aria-hidden', false);
    baseElement.setAttribute('aria-hidden', false);



    //target.nextSibling.findUl.setAttribute(aria-hidden, false);
  }

};

// var inputElem = document.getElementById("nu__supernav").getElementsByTagName("ul")[0].getElementsByTagName("li");
// for(var i = 0; i < inputElem.length; i++) {
//
//     inputElem[i].addEventListener('click', function(){
//         alert(this.value);
//     }, false);
// }



// var myElements = document.querySelector('div#nu__supernav > section > div.items > ul > li');
// var myElement.firstElementChild
// console.log(myElements);


// var myElements = document.querySelector('div#nu__supernav > section > div.items > ul > li');
// for (var i = 0; i < myElements.length; i++) {
//   // access to individual element:
//   var elem = myElements[i];
//
// }

// var myElements = document.querySelectorAll('div#nu__supernav > section > div.items > ul > li');
// //var myElements = document.querySelectorAll('div');
// Array.prototype.forEach.call(myElements, function (item) {
//   // Individual access to element:
//   var elem = item;
//   console.log(elem.firstChild);
//   // if ( myElements.className !== 'featured' ) {
//   //   console.log(elem);
//   // }
// });

// myElements.onclick = function(event) {
//   var target = getEventTarget(event);
//   //console.log(myElement);
//   document.querySelector("div#nu__supernav > section > div.items > ul > li.active").classList.remove("active");
//   target.classList.add('active');
// };



// var myElements = document.getElementById("nu__globalheader").getElementsByTagName("ul")[0];
//
// myElements.addEventListener('click', function(e){
//     var target = e.target; // Clicked element
//
//     Array.prototype.forEach.call(myElements.querySelectorAll('li'), function (event) {
//         if (event === e.target) {
//             //console.log(target);
//
//     });
// });



//CONTROLS CLICKING OTHER NAV ITEMS ONCE THE NAV IS OPENED

var navItem = document.getElementById("nu__globalheader").getElementsByTagName("ul")[0];  // Parent

navItem.addEventListener('click', function(e) {

    if (e.target.tagName === 'LI'){
      //alert(e.target.title);  // Check if the element is a LI
      document.querySelector("div#nu__supernav > section > div.items > ul > li.active").classList.remove("active");
      e.target.classList.add('active');
    }
});










//var navItem = document.getElementById("nu__supernav").getElementsByTagName("ul")[0].getElementsByTagName("li");
// console.log(myElement);
// myElement.onclick = function(event) {
//   var target = getEventTarget(event);
//   //console.log(myElement);
//   document.querySelector("div#nu__supernav > section > div.items > ul > li.active").classList.remove("active");
//   target.classList.add('active');
// };

// var navItem = document.getElementById("nu__supernav").getElementsByTagName("ul")[0];
// document.getElementById("nu__supernav").addEventListener("click", function(event){
//   event.preventDefault();
//   var subTarget = getEventTarget(event);
//     target.classList.add('active');
//   //console.log(subTarget);
// });
// $('div.navigational > section > div.items > ul').on('click','li:not(.featured)',function(e){
//
//   // // we need to handle activating the correct aria-hidden values as we change categories
//   // $(this).parent().find('li ul').attr('aria-hidden','true');
//   // $(this).find('ul').first().attr('aria-hidden','false');
//   //
//   // // if we are clicking on cats in the iamnav, we may need to swap the background image
//   // if($(this).parent().parent().parent().parent().attr('id') == 'nu__iamnav' && iamnavbgs.length > 0 && iamnavbgs[0] != ''){
//   //   $('div#nu__iamnav').attr('style','background-image: url('+iamnavbgs[$(this).index()]+');');
//   // }
//
//
//
//
//   $('div.navigational > section > div > ul li').removeClass('active');
//   $(this).addClass('active');
// });












// $('nav').on('click','a.js__mainmenu-item',function(e){
//
//   // prevent the default link action
//   e.preventDefault();
//
//   // determine which nav we are looking at and whether it is the currently active one, in which case close it
//   if(cNav == null){  // if no menu is currently open
//     $(this).addClass('active').focus().html('Close').next('div').addClass('open');
//     $(this).next('div').find('div.items > ul').attr('aria-hidden','false');
//     //$(this).next('div').find('div.items > ul > li > ul').first().attr('aria-hidden','false');
//     cNav = $(this).attr('id');
//   }else if($(this).attr('id') == cNav){  // if we have clicked the same menu item again after it was open
//     $(this).removeClass('active').blur().html($(this).attr('data-title')).next('div').removeClass('open');
//     $(this).next('div').find('div.items ul').attr('aria-hidden','true');
//     cNav = null;
//   }else{ // if we have clicked another menu item while one was already open
//
//     $('nav a.js__mainmenu-item').each(function(i){  // force all of them closed/clear
//       $(this).removeClass('active').blur().html($(this).attr('data-title')).next('div').removeClass('open');
//       $('div.items > ul').attr('aria-hidden','true');
//     });
//
//     $(this).addClass('active').html('Close').focus().next('div').addClass('open');  // activate the one that was selected
//     $(this).next('div').find('div.items ul').attr('aria-hidden','true');
//     cNav = $(this).attr('id');
//   }
//
//   // need to reset the first item in the supernav and iamnav menu to be active
//   navReset();
//
//   // if we are on the search page, we need to restrict opening the search again on top of itself
//   if($('body').hasClass('search')){
//     $('#nu__search-toggle').removeClass('active');
//   }
//
//   // check to see if we need to collapse the footer if it is already open (homepage only)
//   if($('body').hasClass('home') && !$('footer#nu__global-footer').hasClass('collapse')){
//     $('footer#nu__global-footer').addClass('collapse');
//   }
//
// });
