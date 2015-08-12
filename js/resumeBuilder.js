var bio = {
    name: "Yongzheng Huang",
    role: "Masters student majoring in Computer Science",
    contacts: {
	email: "huangyongzheng@wustl.edu",
	mobile: "(540) 239-8537",
	github: "hahooy",
	location: "St Louis"
    },
    bioPic: "images/fry.jpg",
    welcomeMessage: "hello",
    skills: ["Java", "JavaScript", "C", "HTML", "CSS", "Python"]
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
    ]
};

var work = {
    jobs: [
	{
	    employer: "Virginia Tech",
	    title: "Teaching Assistant",
	    location: "Blacksburg, VA",
	    date: "Aug 2013 - May 2015",
	    description: "Planed and delivered lectures to undergraduate students in General Chemistry lab and Physical Chemistry lab."
	}
    ]
};

var projects = {
    projects: [
	{
	    title: "promodoro clock",
	    dates: "2015",
	    description: "",
	    image: "images/timer.png",
	    url: "http://codepen.io/hahooy/full/waQXav/"
	}
    ]
};

function renderBio() {    
    $("div#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("div#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("div#header > ul#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("div#header > ul#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("div#header > ul#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("div#header > ul#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("div#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
    $("div#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("div#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {$("ul#skills").append(HTMLskills.replace("%data%", skill));});
};

renderBio();


education.schools.forEach(function(school) {
    $("div#education").append(HTMLschoolStart);
    $("div.education-entry:last").append(
	HTMLschoolName.replace("%data%", school.name).replace("#", school.url)
	    + HTMLschoolDegree.replace("%data%", school.degree));
    $("div.education-entry:last").append(HTMLschoolDates.replace("%data%", school.date));
    $("div.education-entry:last").append(HTMLschoolLocation.replace("%data%", school.city));
    $("div.education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors));    
});

work.jobs.forEach(function(job) {
    $("div#workExperience").append(HTMLworkStart);
    $("div.work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer) +
				    HTMLworkTitle.replace("%data%", job.title));
    $("div.work-entry:last").append(HTMLworkDates.replace("%data%", job.date));
    $("div.work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
    $("div.work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
});

projects.projects.forEach(function(project) {
    $("div#projects").append(HTMLprojectStart);
    $("div.project-entry").append(HTMLprojectTitle.replace("%data%", project.title));
    $("div.project-entry").append(HTMLprojectDates.replace("%data%", project.dates));
    $("div.project-entry").append(HTMLprojectDescription.replace("%data%", project.description));
    $("div.project-entry").append("<a href='"
				  + project.url + "'>"
				  + HTMLprojectImage.replace("%data%", project.image)
				  + "</a>");
});
