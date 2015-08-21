var bio = {
    name: "Yongzheng Huang",
    role: "Masters student majoring in Computer Science",
    contacts: {
	Email: "huangyongzheng@wustl.edu",
	Mobile: "(540) 239-8537",
	GitHub: "https://github.com/hahooy",
	CodePen: "http://codepen.io/hahooy",
	Location: "St Louis"
    },
    bioPic: "images/me.jpg",
    welcomeMessage: "Hello, you have reached the web page of Yongzheng Huang. I live in St Louis. I am a computer science major graduate student at Washington University in St Louis.",
    skills: "Java, JavaScript, HTML, CSS, C, Python",
    renderBio: function() {
	// render header
	$("span#menu-btn").text("menu");
	$("span#name").text(this.name);
	$("p#welcome-msg").text(this.welcomeMessage);
	$("p#skills").text(this.skills);
	// render footer
	for (var key in this.contacts) {
	    var domElement = '<li class="flex-item"><span class="blue-text">' +
		    key +
		    '</span><span>' +
		    this.contacts[key] +
		    '</span></li>';
	    $("div#lets-connect > ul#footerContacts").append(domElement); 
	}
    }
};

var menu = {
    items: {
	Home: "http://hahooy.github.io/myPage/", // title: url
	Contact: "contact.html",
	Resume: "https://drive.google.com/open?id=0B1uHglPYIL0yUjV3SWh2ZVJvTTQ",
	Github: "https://github.com/hahooy/",
	CodePen: "http://codepen.io/hahooy/"
    },
    renderMenu: function() {
	for(var key in this.items) {
	    // append <a href="http://hahooy.github.io/myPage/">Home</a>
	    var link = "<a href='" + this.items[key] + "'>" +
		    key + "</a>";
	    $("div#menu-container").append(link);
	}
    }
};    

var education = {
    schools: [
	{
	    name: "Washington University in St. Louis",
	    city: "St. Louis, MO",
	    degree: "M.Eng.",
	    majors: "Computer Science and Engineering",
	    date: "Expected Dec 2016",
	    url: "http://wustl.edu"
	},
	{
	    name: "Virginia Tech",
	    city: "Blacksburg, VA",
	    degree: "M.S.",
	    majors: "Chemistry",
	    date: "May 2015",
	    url: "https://www.vt.edu"
	},
	{
	    name: "Chongqing University",
	    city: "Chongqing, China",
	    degree: "B.S.",
	    majors: "Applied Chemistry",
	    date: "June 2012",
	    url: "http://international.cqu.edu.cn"
	},
    ],
    renderSchools: function() {
	this.schools.forEach(function(school) {
	    $("div#education").append(HTMLschoolStart);
	    $("div.education-entry:last").append(
		HTMLschoolName.replace("%data%", school.name).replace("#", school.url)
		    + HTMLschoolDegree.replace("%data%", school.degree));
	    $("div.education-entry:last").append(HTMLschoolDates.replace("%data%", school.date));
	    $("div.education-entry:last").append(HTMLschoolLocation.replace("%data%", school.city));
	    $("div.education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors));    
	});	
    }
};

var work = {
    jobs: [
	{
	    employer: "Virginia Tech",
	    title: "Teaching Assistant",
	    location: "Blacksburg, VA",
	    date: "Aug 2013 - May 2015",
	    description: "Gave lectures to undergraduate students in General Chemistry lab and Physical Chemistry lab."
	}
    ],
    renderWork: function() {
	this.jobs.forEach(function(job) {
	    $("div#workExperience").append(HTMLworkStart);
	    $("div.work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer) +
					    HTMLworkTitle.replace("%data%", job.title));
	    $("div.work-entry:last").append(HTMLworkDates.replace("%data%", job.date));
	    $("div.work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
	    $("div.work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
	});
    }
};

var projects = {
    projects: [
	{
	    title: "Promodoro Clock",
	    dates: "2015",
	    description: "",
	    image: "images/timer.png",
	    url: "http://codepen.io/hahooy/full/waQXav/"
	},
	{
	    title: "Local Weather App",
	    dates: "2015",
	    description: "",
	    image: "images/localWeather.png",
	    url: "http://codepen.io/hahooy/full/vOVoyj/"
	},
	{
	    title: "Web Calculator",
	    dates: "2015",
	    description: "",
	    image: "images/calculator.png",
	    url: "http://codepen.io/hahooy/full/zGemeP/"
	},
	{
	    title: "Random Quote Generator",
	    dates: "2015",
	    description: "",
	    image: "images/quoteGen.png",
	    url: "http://codepen.io/hahooy/full/gpdWLM/"
	},
	{
	    title: "Cat Clicker",
	    dates: "2015",
	    description: "",
	    image: "images/catClicker.png",
	    url: "http://hahooy.github.io/catClicker/"
	},
	{
	    title: "Catch Goblins",
	    dates: "2015",
	    description: "",
	    image: "images/catchGoblins.png",
	    url: "http://hahooy.github.io/simple_canvas_game/"
	},
	{
	    title: "Arcade Game",
	    dates: "2015",
	    description: "",
	    image: "images/arcadeGame.png",
	    url: "http://hahooy.github.io/frontend-nanodegree-arcade-game/"
	}

    ],

    renderProjects: function() {
	this.projects.forEach(function(project) {
	    $("div#projects-wrapper").append(HTMLprojectStart);
	    $("div.project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
	    $("div.project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
	    $("div.project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
	    $("div.project-entry:last").append("<a href='"
					       + project.url + "'>"
					       + HTMLprojectImage.replace("%data%", project.image)
					       + "</a>");
	});
    }
};

function renderMap() {
    $("div#map-div").append(googleMap);
};

function menuHookUp() {
    $("div#menu-container > span#close, div#menu-cover").click(function() {
	$("div#menu-container, div#menu-cover").addClass("trans");
    });
    $("div#heading-wrapper > span#menu-btn").click(function() {
	$("div#menu-container, div#menu-cover").removeClass("trans");
    });
};

// navbar disappears when scroll down and shows up when scroll up
function headerScrollControl() {
    var isScrolled = false,
	lastScrollTop = 0,
	delta = 5,
	navbarHeight = $("div#heading-wrapper").outerHeight();

    $(window).scroll(function() {
	isScrolled = true;
    });

    window.setInterval(function() {
	if (isScrolled) {
	    changeNav();
	} else {
	    return;
	}
    }, 250);

    function changeNav() {
	var currentScrollTop = $(this).scrollTop(),
	    $navbar = $("div#heading-wrapper");

	// scroll down
	if (Math.abs(currentScrollTop - lastScrollTop) > delta &&
	    currentScrollTop > navbarHeight) {
	    $navbar.addClass("trans");
	}
	// scroll up
	if (currentScrollTop < lastScrollTop && lastScrollTop - currentScrollTop > delta) {
	    $navbar.removeClass("trans");
	}
	// update the scrollTop value of the element
	lastScrollTop = currentScrollTop;
    };
};

bio.renderBio();
work.renderWork();
education.renderSchools();
projects.renderProjects();
renderMap();
menuHookUp();
menu.renderMenu();
headerScrollControl();
