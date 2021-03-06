/////////////////////////Home Page\\\\\\\\\\\\\\\\\\\\\\\\\

let portfolioBtn = document.getElementById('portfolioBtn');
let home = document.getElementById('home');
let container = document.getElementById('container');
let icon = document.getElementById('icon');

const closeHome = () => {
	home.classList.add('page-home-closed')
	container.style.display = 'inline';
	pageCheck('Port');
	setTimeout(function() {
		portfolio.classList.remove('animated');
		portfolio.classList.remove('fadeInUp');
	}, 2000);
};

const openHome = () => {
	home .classList.remove('page-home-closed')
	document.title = 'Ryan Lewis | Home';
	setTimeout(function() {
		container.style.display = 'none';
	}, 1000);
};

portfolioBtn.addEventListener('click', closeHome);
icon.addEventListener('click', openHome);

//header text rotate\\

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

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	var that = this;
	var delta = 350 - Math.random() * 100;

	if (this.isDeleting) {
		delta /= 2;
	}

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 750;
	}

	setTimeout(function() {
		that.tick();
	}, delta);
};

window.onload = function() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	}
	new google.maps.Map(document.getElementById('map'), { zoom: 10, center: { lat: 51.5, lng: -3.2 } });
	new google.maps.Map(document.getElementById('map2'), { zoom: 9, center: { lat: 51.5, lng: -3.2 } });
};

/////////////////////////Nav Bar\\\\\\\\\\\\\\\\\\\\\\\\\

let homeNav = document.getElementById('homeBtn');
let portNav = document.getElementById('portBtn');
let blogNav = document.getElementById('blogBtn');
let aboutNav = document.getElementById('aboutBtn');
let conNav = document.getElementById('conBtn');

let portfolio = document.getElementById('portfolio');
let blog = document.getElementById('blog');
let about = document.getElementById('about');
let contact = document.getElementById('contact');

const removePage = () => {
	portNav.classList.remove('active');
	blogNav.classList.remove('active');
	aboutNav.classList.remove('active');
	conNav.classList.remove('active');

	portfolio.style.display = 'none';
	blog.style.display = 'none';
	about.style.display = 'none';
	contact.style.display = 'none';
	more.style.display = 'none';
};

const pageCheck = (page) => {
	removePage();
	removeMoreSection();
	switch (page) {
		case 'Port':
			portNav.classList.add('active');
			portfolio.style.display = 'inline';
			document.title = 'Ryan Lewis | Portfolio';
			break;
		case 'Blog':
			blogNav.classList.add('active');
			blog.style.display = 'inline';
			document.title = 'Ryan Lewis | Blog';
			break;
		case 'About':
			aboutNav.classList.add('active');
			about.style.display = 'inline';
			document.title = 'Ryan Lewis | About';
			break;
		case 'Con':
			conNav.classList.add('active');
			contact.style.display = 'inline';
			document.title = 'Ryan Lewis | Contact';
			break;
	}
};

homeNav.addEventListener('click', function() {
	openHome();
});
portNav.addEventListener('click', function() {
	pageCheck('Port');
});
blogNav.addEventListener('click', function() {
	pageCheck('Blog');
});
aboutNav.addEventListener('click', function() {
	pageCheck('About');
});
conNav.addEventListener('click', function() {
	pageCheck('Con');
});

/////////////////////////Read More Section\\\\\\\\\\\\\\\\\\\\\\\\\

let readMoreScores = document.getElementById('readMoreBtnScores');
let readMoreFace = document.getElementById('readMoreBtnFace');
let readMorePort = document.getElementById('readMoreBtnPort');
let readMoreWord = document.getElementById('readMoreBtnWord');
let readMoreIos = document.getElementById('readMoreBtnUniIos');
let readMoreUniPort = document.getElementById('readMoreBtnUniPort');
let more = document.getElementById('more');

let scoresApp = document.getElementById('scoresApp');
let faceApp = document.getElementById('faceApp');
let projectPort = document.getElementById('projectPort');
let wordSite = document.getElementById('wordSite');
let iOS = document.getElementById('iOS');
let simplePort = document.getElementById('simplePort');

const removeMoreSection = () => {
	scoresApp.style.display = 'none';
	faceApp.style.display = 'none';
	projectPort.style.display = 'none';
	wordSite.style.display = 'none';
	iOS.style.display = 'none';
	simplePort.style.display = 'none';
};

const projectCheck = (project) => {
	removePage();
	portNav.classList.add('active');
	removeMoreSection();
	more.style.display = 'inline';
	more.classList.add('readMore');
	switch (project) {
		case 'Scores':
			scoresApp.style.display = 'inline';
			selectedProj = 'Scores';
			break;
		case 'Face':
			faceApp.style.display = 'inline';
			selectedProj = 'Face';
			break;
		case 'Port':
			projectPort.style.display = 'inline';
			selectedProj = 'Port';
			break;
		case 'Word':
			wordSite.style.display = 'inline';
			selectedProj = 'Word';
			break;
		case 'iOS':
			iOS.style.display = 'inline';
			selectedProj = 'iOS';
			break;
		case 'Uni':
			simplePort.style.display = 'inline';
			selectedProj = 'Uni';
			break;
	}
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

readMoreScores.addEventListener('click', function() {
	projectCheck('Scores');
});
readMoreFace.addEventListener('click', function() {
	projectCheck('Face');
});
readMorePort.addEventListener('click', function() {
	projectCheck('Port');
});
readMoreWord.addEventListener('click', function() {
	projectCheck('Word');
});
readMoreIos.addEventListener('click', function() {
	projectCheck('iOS');
});
readMoreUniPort.addEventListener('click', function() {
	projectCheck('Uni');
});

const projects = [ 'Scores', 'Face', 'Port', 'Word', 'iOS', 'Uni' ];
let selectedProj;

let prev = document.getElementById('prev');
let next = document.getElementById('next');

const prevProj = (proj) => {
	let i = 0;
	projects.forEach(function(element) {
		if (proj === element) {
			if (i === 0) {
				i = projects.length;
			}
			projectCheck(projects[i - 1]);
		}
		i = i + 1;
	});
};

const nextProj = (proj) => {
	let i = 0;
	projects.forEach(function(element) {
		if (i + 1 === projects.length) {
			i = -1;
		}
		if (proj === element) {
			projectCheck(projects[i + 1]);
		}
		i = i + 1;
	});
};

prev.addEventListener('click', function() {
	prevProj(selectedProj);
});
next.addEventListener('click', function() {
	nextProj(selectedProj);
});

/////////////////////////Mobile Nav\\\\\\\\\\\\\\\\\\\\\\\\\

let hamburger = document.getElementById('hamburger');
let mobileCloseBtn = document.getElementById('mobileCloseBtn');
let mySidenav = document.getElementById('mySidenav');
let myMenu = document.querySelector(".menu");

const toggleClassMenu = () => {
	myMenu.classList.add("menu--animatable");   
	if(!myMenu.classList.contains("menu--visible")) {       
		myMenu.classList.add("menu--visible");
		hamburger.style.opacity = '0';
	} else {
		myMenu.classList.remove('menu--visible');
		hamburger.style.opacity = '1';      
	}
};

const OnTransitionEnd = () => {
    myMenu.classList.remove("menu--animatable");
};

const mobileCheck = (page) => {
	toggleClassMenu()
	if (page == 'Home') openHome();
	pageCheck(page);
};

myMenu.addEventListener('transitionend', function() {
	OnTransitionEnd();
});
hamburger.addEventListener('click', function() {
	toggleClassMenu();
});
mobileCloseBtn.addEventListener('click', function() {
	toggleClassMenu();
});

/////////////////////////Form Labels\\\\\\\\\\\\\\\\\\\\\\\\\

let nameTxt = document.getElementById('name');
let nameLbl = document.getElementById('nameLbl').classList;
let emailTxt = document.getElementById('email');
let emailLbl = document.getElementById('emailLbl').classList;
let messageTxt = document.getElementById('message');
let messageLbl = document.getElementById('messageLbl').classList;

const visible = (label) => {
	label.remove('invisible');
	label.add('visible');
};
const invisible = (label) => {
	label.remove('visible');
	label.add('invisible');
};

const checkFocus = (focus, label) => {
	if (focus === 'focus') {
		visible(label);
	} else if (focus === 'unfocus') {
		invisible(label);
	}
};

const check = (field, focus) => {
	let label;
	switch (field) {
		case 'name':
			label = nameLbl;
			checkFocus(focus, label);
			break;
		case 'email':
			label = emailLbl;
			checkFocus(focus, label);
			break;
		case 'message':
			label = messageLbl;
			checkFocus(focus, label);
			break;
	}
};

nameTxt.addEventListener('focus', function() {
	check('name', 'focus');
});
nameTxt.addEventListener('focusout', function() {
	check('name', 'unfocus');
});
emailTxt.addEventListener('focus', function() {
	check('email', 'focus');
});
emailTxt.addEventListener('focusout', function() {
	check('email', 'unfocus');
});
messageTxt.addEventListener('focus', function() {
	check('message', 'focus');
});
messageTxt.addEventListener('focusout', function() {
	check('message', 'unfocus');
});
