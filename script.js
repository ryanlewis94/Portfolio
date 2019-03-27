var portfolioBtn = document.getElementById("portfolioBtn");
var home = document.getElementById("home");
var subTxt = document.getElementById("subTxt");
var ryan = document.getElementById("ryan");
var container = document.getElementById("container");
var icon = document.getElementById("icon");
var homeNav = document.getElementById("homeBtn");
var portNav = document.getElementById("portBtn");
var aboutNav = document.getElementById("aboutBtn");
var conNav = document.getElementById("conBtn");
var portfolio = document.getElementById("portfolio");
var about = document.getElementById("about");
var contact = document.getElementById("contact");

function closeHome() {
    home.style.height = "0";
    container.style.display = "inline"
    openPort();
    setTimeout(function(){
        portfolioBtn.style.display = "none";
        subTxt.style.visibility = "hidden";
        ryan.style.visibility = "hidden";
    }, 500);
}

function openHome() {
    home.style.height = "100vh";
    home.style.visibility = "visible";
    portfolioBtn.style.display = "inline";
    subTxt.style.visibility = "visible";
    ryan.style.visibility = "visible";
    setTimeout(function(){
        container.style.display = "none";
    }, 1000);
}

function removePage(){
    portNav.classList.remove("active");
    aboutNav.classList.remove("active");
    conNav.classList.remove("active");

    portfolio.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
}

function openPort() {
    removePage();
    portNav.classList.add("active");
    portfolio.style.display = "inline";
}
function openAbout() {
    removePage();
    aboutNav.classList.add("active");
    about.style.display = "inline";
}
function openCon() {
    removePage();
    conNav.classList.add("active");
    contact.style.display = "inline";
}

portfolioBtn.addEventListener("click", closeHome);
icon.addEventListener("click", openHome);
homeNav.addEventListener("click", openHome);
portNav.addEventListener("click", openPort);
aboutNav.addEventListener("click", openAbout);
conNav.addEventListener("click", openCon);





//////////////////header text rotate\\\\\\\\\\\\\\\\\\\\\\\\

var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
  
	if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
  
	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
	var that = this;
	var delta = 300 - Math.random() * 100;
  
	if (this.isDeleting) { delta /= 2; }
  
	if (!this.isDeleting && this.txt === fullTxt) {
	  delta = this.period;
	  this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	  this.isDeleting = false;
	  this.loopNum++;
	  delta = 500;
	}
  
	setTimeout(function() {
	  that.tick();
	}, delta);
  };
  

window.onload = function() {
  setTimeout(function(){
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i=0; i<elements.length; i++) {
	  var toRotate = elements[i].getAttribute('data-rotate');
	  var period = elements[i].getAttribute('data-period');
	  if (toRotate) {
		new TxtRotate(elements[i], JSON.parse(toRotate), period);
	  }
	}
	
  }, 3000);
};

///////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\