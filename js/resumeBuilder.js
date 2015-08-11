var bio = {
    name: "Yongzheng Huang",
    role: "Web Developer",
    contacts: {
	email: "huangyongzheng@wustl.edu",
	mobile: "(540)239-8537",
	github: "hahooy",
	location: "St Louis"
    },
    bioPic: "images/fry.jpg",
    welcomeMessage: "hello",
    skills: ["Java", "JavaScript", "C", "HTML", "CSS", "Python"]
};
    
var formatedName = HTMLheaderName.replace("%data%", bio.name);
var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formatedEmail  = HTMLemail.replace("%data%", bio.contacts.email);
var formatedGithub  = HTMLgithub.replace("%data%", bio.contacts.github);
var formatedLocation  = HTMLlocation.replace("%data%", bio.contacts.location);
var formatedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formatedWelMes = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formatedSkills = HTMLskills.replace("%data%", bio.skills);

$("div#header").prepend(formatedRole);
$("div#header").prepend(formatedName);
$("div#header > ul#topContacts").append(formatedMobile);
$("div#header > ul#topContacts").append(formatedEmail);
$("div#header > ul#topContacts").append(formatedGithub);
$("div#header > ul#topContacts").append(formatedLocation);
$("div#header").append(formatedBioPic);
$("div#header").append(formatedWelMes);
$("div#header").append(HTMLskillsStart);
bio.skills.forEach(function(skill) {$("div#header").append(HTMLskills.replace("%data%", skill));});
$("div#workExperience").append("<div class='work-entry'>hello</div>");

