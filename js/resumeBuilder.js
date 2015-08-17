var bio = {
    name: "Yongzheng Huang",
    role: "Masters student majoring in Computer Science",
    contacts: {
	email: "huangyongzheng@wustl.edu",
	mobile: "(540) 239-8537",
	github: "https://github.com/hahooy",
	codepen: "http://codepen.io/hahooy/",
	location: "St Louis"
    },
    bioPic: "images/fry.jpg",
    welcomeMessage: "hello",
    skills: ["Java", "JavaScript", "C", "HTML", "CSS", "Python"],
    renderBio: function() {    
	$("div#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("div#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("div#header > ul#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("div#header > ul#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("div#header > ul#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("div#header > ul#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.codepen).replace("github", "codepen"));
	$("div#header > ul#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	$("div#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
	$("div#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	$("div#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill) {$("ul#skills").append(HTMLskills.replace("%data%", skill));});
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
	education.schools.forEach(function(school) {
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
	work.jobs.forEach(function(job) {
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
	    url: "http://codepen.io/hahooy/full/zGameP/"
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
	projects.projects.forEach(function(project) {
	    $("div#projects").append(HTMLprojectStart);
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

bio.renderBio();
work.renderWork();
education.renderSchools();
projects.renderProjects();
renderMap();
