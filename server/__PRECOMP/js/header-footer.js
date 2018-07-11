//adds the header tag to the document with the id of globalheader
function addHeader(){
  var elemDiv = document.createElement('div');
  elemDiv.setAttribute('id','nu__globalheader')
  document.body.appendChild(elemDiv);
}

function loadXMLDocHeader() {

    var xmlhttp = new XMLHttpRequest();
    //var url = 'http://newnu.edu/resources/components/?return=main-menu'; //local development
    var url = 'https://www.northeastern.edu/resources/components/?return=main-menu';
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
              addHeader();
                document.getElementById("nu__globalheader").innerHTML = xmlhttp.responseText;
                nuscripts();
            } else if (xmlhttp.status == 400) {
                console.log('There was an error 400');
            } else {
                console.log('something else other than 200 was returned');
            }
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};

loadXMLDocHeader();


//alert('afs');

  function loadjscssfile(filename, filetype, pos){
    var fileref;
      if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
      }
      else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
        //fileref.async = false;
        //fileref.setAttribute("async", true)
      }
      else if (filetype=="text"){ //if filename is an external CSS file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.textContent = filename
      }
      if (typeof fileref !="undefined"){
        //document.getElementsByTagName("head")[0].appendChild(fileref)
        // if(filetype == "js"){
          // document.getElementsByTagName(pos)[0].prependChild(fileref);
        // }else{
          document.getElementsByTagName(pos)[0].appendChild(fileref);
        // }
      }


  }

  function nuscripts(){

   loadjscssfile("https://www.northeastern.edu/nuglobalutils/common/css/headerfooter.css", "css", "head") ////dynamically load and add this .css file
   loadjscssfile("https://www.northeastern.edu/nuglobalutils/common/js/navigation-min.js", "js" , "html") ////dynamically load and add this .css file
}








//FOOOTER


//adds the header tag to the document with the id of globalheader
function addFooter(){
  var elemDiv = document.createElement('div');
  elemDiv.setAttribute('id','nu__global-footer')
  document.body.appendChild(elemDiv);
}

function loadXMLDocFooter() {

    var xmlhttp = new XMLHttpRequest();

    var url = 'https://www.northeastern.edu/resources/includes/?r=footer';
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
              addFooter();
                document.getElementById("nu__global-footer").innerHTML = xmlhttp.responseText;
                nuFooterScripts();
            } else if (xmlhttp.status == 400) {
                console.log('There was an error 400');
            } else {
                console.log('something else other than 200 was returned');
            }
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};

loadXMLDocFooter();




  function loadjscssfile(filename, filetype, pos){
    var fileref;
      if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
      }
      else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
        //fileref.async = false;
        //fileref.setAttribute("async", true)
      }
      else if (filetype=="text"){ //if filename is an external CSS file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.textContent = filename
      }
      if (typeof fileref !="undefined"){
        //document.getElementsByTagName("head")[0].appendChild(fileref)
        // if(filetype == "js"){
          // document.getElementsByTagName(pos)[0].prependChild(fileref);
        // }else{
          document.getElementsByTagName(pos)[0].appendChild(fileref);
        // }
      }


  }

  function nuFooterScripts(){

   //loadjscssfile("http://dynamicnav.nudev.net/global/common/css/footer.css", "css", "head") ////dynamically load and add this .css file

}
