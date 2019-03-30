/////////////////////////Home Page\\\\\\\\\\\\\\\\\\\\\\\\\

let portfolioBtn = document.getElementById("portfolioBtn");
let home = document.getElementById("home");
let subTxt = document.getElementById("subTxt");
let ryan = document.getElementById("ryan");
let container = document.getElementById("container");
let icon = document.getElementById("icon");

const closeHome = () => {
	home.style.height = "0";
	container.style.display = "inline"
	openPort();
	setTimeout(function(){
			portfolioBtn.style.display = "none";
			subTxt.style.visibility = "hidden";
			ryan.style.visibility = "hidden";
	}, 500);
}

const openHome = () => {
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

portfolioBtn.addEventListener("click", closeHome);
icon.addEventListener("click", openHome);

//header text rotate\\

let TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};
  
TxtRotate.prototype.tick = function() {
	let i = this.loopNum % this.toRotate.length;
	let fullTxt = this.toRotate[i];
  
	if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
  
	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
	let that = this;
	let delta = 300 - Math.random() * 100;
  
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
	let elements = document.getElementsByClassName('txt-rotate');
	for (let i=0; i<elements.length; i++) {
	  let toRotate = elements[i].getAttribute('data-rotate');
	  let period = elements[i].getAttribute('data-period');
	  if (toRotate) {
		new TxtRotate(elements[i], JSON.parse(toRotate), period);
	  }
	}
	
  }, 3000);
};


/////////////////////////Nav Bar\\\\\\\\\\\\\\\\\\\\\\\\\

let homeNav = document.getElementById("homeBtn");
let portNav = document.getElementById("portBtn");
let aboutNav = document.getElementById("aboutBtn");
let conNav = document.getElementById("conBtn");

let portfolio = document.getElementById("portfolio");
let about = document.getElementById("about");
let contact = document.getElementById("contact");

const removePage = () => {
	portNav.classList.remove("active");
	aboutNav.classList.remove("active");
	conNav.classList.remove("active");

	portfolio.style.display = "none";
	about.style.display = "none";
	contact.style.display = "none";
}

const openPort = () => {
	closeNav();
	removePage();
	portNav.classList.add("active");
	portfolio.style.display = "inline";
}
const openAbout = () => {
	closeNav();
	removePage();
	aboutNav.classList.add("active");
	about.style.display = "inline";
}
const openCon = () => {
	closeNav();
	removePage();
	conNav.classList.add("active");
	contact.style.display = "inline";
}

homeNav.addEventListener("click", openHome);
portNav.addEventListener("click", openPort);
aboutNav.addEventListener("click", openAbout);
conNav.addEventListener("click", openCon);


/////////////////////////Mobile Nav\\\\\\\\\\\\\\\\\\\\\\\\\

let hamburger = document.getElementById("hamburger");
let mobileCloseBtn = document.getElementById("mobileCloseBtn");
let mySidenav = document.getElementById("mySidenav");

const openNav = () => {
	mySidenav.style.width = "100%";
	hamburger.style.opacity = "0";
}
			
const closeNav = () => {
	mySidenav.style.width = "0";
	hamburger.style.opacity = "1";
}

hamburger.addEventListener("click", openNav);
mobileCloseBtn.addEventListener("click", closeNav);


/////////////////////////Form Labels\\\\\\\\\\\\\\\\\\\\\\\\\

let nameTxt = document.getElementById("name");
let nameLbl = document.getElementById("nameLbl").classList;
let emailTxt = document.getElementById("email");
let emailLbl = document.getElementById("emailLbl").classList;
let messageTxt = document.getElementById("message");
let messageLbl = document.getElementById("messageLbl").classList;

const visible = (label) => {
		label.remove("invisible");
		label.add("visible");
}
const invisible = (label) => {
		label.remove("visible");
		label.add("invisible");
}

const checkFocus = (focus, label) => {
		if (focus === "focus") {
			visible(label);
		}
		else if (focus === "unfocus") {
			invisible(label);
		}
}

const check = (field, focus) => {
	let label;
	switch (field) {
		case "name":
			label = nameLbl;
			checkFocus(focus, label);
			break;
		case "email":
			label = emailLbl;
			checkFocus(focus, label);
			break;
		case "message":
			label = messageLbl;
			checkFocus(focus, label);
			break;
	}
}

nameTxt.addEventListener("focus", function(){check("name","focus")});
nameTxt.addEventListener("focusout", function(){check("name","unfocus")});
emailTxt.addEventListener("focus", function(){check("email","focus")});
emailTxt.addEventListener("focusout", function(){check("email","unfocus")});
messageTxt.addEventListener("focus", function(){check("message","focus")});
messageTxt.addEventListener("focusout", function(){check("message","unfocus")});

