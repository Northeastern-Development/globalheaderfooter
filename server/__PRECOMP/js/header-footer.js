/* ***********************************************************************

NU Header and Footer (NUHF)

*********************************************************************** */


function NUHeaderFooter(){

  var _this = this;

  _this.URLBase = {
    service:'https://www.northeastern.edu'
    ,brand:'https://www.northeastern.edu'
  };

  _this.targets = {
    header:{
      id:'nu__globalheader'
      ,source:'/resources/components/?return=main-menu&cache=no'
    }
    ,footer:{
      id:"nu__global-footer"
      ,source:'/resources/includes/?r=footer&cache=no'
    }
  }


  // this is the main method to start building content and adding it to the DOM
  this.buildContent = function(){


    // load the CSS right away to make the page look better right away
    this.loadResource(_this.URLBase['brand']+"/nuglobalutils/common/css/headerfooter.css", "css", "head");

    var m = Object.keys(_this.targets).length;
    var i = 0;
    for(var x in _this.targets){
      if(_this.addElement(_this.targets[x]['id'])){ // add the new elem to the DOM, and return true to proceed
        if(_this.loadData(_this.targets[x],(i + 1) === m)?true:false){
          // success handle
          delete m,i;
        }else{
          // error handle
        }
      }else{
        // error handle
      }
      i++;
    }
    delete m,i,x;
  }

  // this method will inject new div elements into the DOM to allow us to pipont delivery of content
  this.addElement = function(a){
    var e = document.createElement('div');
    e.setAttribute('id',a);
    document.body.appendChild(e);

    delete a,e;

    return true;  // return true to let the calling script know to proceed
  }


  // this method will grab the remote cotent and load it into the correct element
  this.loadData = function(a,b){

    var req = new XMLHttpRequest();

    var url = _this.URLBase['service']+a['source'];
    req.onreadystatechange = function(){
        if (req.readyState == XMLHttpRequest.DONE){
            if (req.status == 200) {
                document.getElementById(a['id']).innerHTML = req.responseText;
                if(b == true){  // this is the last item to load, set the extras!
                  setTimeout(function(){ _this.setExtras();},1000);  // there must be a more accurate way to time this!!!!!!!
                }
            } else if (req.status == 400) {
              alert('ERROR: the remote content could not be loaded');
              return false;
            }
        }
    };

    req.open("GET",url,true);
    req.send();

    delete a,b,req,url;
  };


  // this method will add any extra css or scripts to the page that we need
  this.setExtras = function(){
    this.loadResource(_this.URLBase['service']+"/nuglobalutils/common/js/navigation.js", "js" , "html");
  }


  // this method will load external resources for js, styles, etc.
	this.loadResource = function(a,b,c){
		var fileRef = null;
		switch(b){
	    case 'js':
				fileRef=document.createElement('script');
				fileRef.setAttribute("type","text/javascript");
				fileRef.setAttribute("src",a);
	      break;
	    case 'css':
				fileRef=document.createElement("link")
        fileRef.setAttribute("rel","stylesheet")
        fileRef.setAttribute("type","text/css")
        fileRef.setAttribute("href",a)
	      break;
	    default:
	        break;
		}
		document.getElementsByTagName(c)[0].appendChild(fileRef);
		delete fileRef,a,b,c;
	}

}





// instantiate a new global header footer object
var NUHF = new NUHeaderFooter();
NUHF.buildContent();  // call to build out the content to be added to the page
