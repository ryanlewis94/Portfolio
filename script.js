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
var hamburger = document.getElementById("hamburger");
var mobileCloseBtn = document.getElementById("mobileCloseBtn");
var mySidenav = document.getElementById("mySidenav");

var nameTxt = document.getElementById("name");
var nameLbl = document.getElementById("nameLbl").classList;
var emailTxt = document.getElementById("email");
var emailLbl = document.getElementById("emailLbl").classList;
var messageTxt = document.getElementById("message");
var messageLbl = document.getElementById("messageLbl").classList;

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
	closeNav();
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
	closeNav();
		removePage();
    portNav.classList.add("active");
    portfolio.style.display = "inline";
}
function openAbout() {
	closeNav();
		removePage();
    aboutNav.classList.add("active");
    about.style.display = "inline";
}
function openCon() {
	closeNav();
    removePage();
    conNav.classList.add("active");
    contact.style.display = "inline";
}

//Mobile Navigation
function openNav() {
	mySidenav.style.width = "100%";
}
			
function closeNav() {
	mySidenav.style.width = "0";
}



function visible(label) {
		label.remove("invisible");
		label.add("visible");
}
function invisible(label) {
		label.remove("visible");
		label.add("invisible");
}

function checkFocus(focus) {
		if (focus === "focus") {
			return true;
		}
		else if (focus === "unfocus") {
			return false;
		}
}
function check(field, focus) {
		if (field === "name") {
			if (checkFocus(focus)) {
				var label = nameLbl;
				visible(label);
			}
			else {
				var label = nameLbl;
				invisible(label);
			}
		}
		else if (field === "email") {
			if (checkFocus(focus)) {
				var label = emailLbl;
				visible(label);
			}
			else {
				var label = emailLbl;
				invisible(label);
			}
		}
		else if (field === "message") {
			if (checkFocus(focus)) {
				var label = messageLbl;
				visible(label);
			}
			else {
				var label = messageLbl;
				invisible(label);
			}
		}
}

portfolioBtn.addEventListener("click", closeHome);
icon.addEventListener("click", openHome);
homeNav.addEventListener("click", openHome);
portNav.addEventListener("click", openPort);
aboutNav.addEventListener("click", openAbout);
conNav.addEventListener("click", openCon);
hamburger.addEventListener("click", openNav);
mobileCloseBtn.addEventListener("click", closeNav);
nameTxt.addEventListener("focus", function(){check("name","focus")});
nameTxt.addEventListener("focusout", function(){check("name","unfocus")});
emailTxt.addEventListener("focus", function(){check("email","focus")});
emailTxt.addEventListener("focusout", function(){check("email","unfocus")});
messageTxt.addEventListener("focus", function(){check("message","focus")});
messageTxt.addEventListener("focusout", function(){check("message","unfocus")});


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