/*
//
// Header
//
*/

var bio = {
	"name" : "Nathan Hadinata",
	"role" : "UX Designer",
	"contacts" : {
		"mobile": "714-398-7073",
		"email": "nathanhadinata@gmail.com",
		"github" : "github.com/nhadinat",
		"twitter" : "@NathanHadinata",
		"location" : "Lake Forest, California"
	},
	"msg" : "Boom boom boom, a lemme hear you say wayo",
	"skills" : [
		"UX/UI Design", " Google Adwords", " Adobe Creative Suite"
	],
	"bioPic" : "images/Nathan-Profile-150x150.jpg",
}

var formattedName =
	HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);
var formattedRole =
	HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);

$("#header").append(HTMLcontactGeneric);
var formattedMobile =
	HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#header").append(formattedMobile);
var formattedEmail =
	HTMLemail.replace("%data%", bio.contacts.email);
	$("#header").append(formattedEmail);
var formattedGithub =
	HTMLgithub.replace("%data%", bio.contacts.github);
	$("#header").append(formattedGithub);
var formattedTwitter =
	HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#header").append(formattedTwitter);
var formattedLocation =
	HTMLlocation.replace("%data%", bio.contacts.location);
	$("#header").append(formattedLocation);

var formattedPic =
	HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);

var formattedMsg =
	HTMLwelcomeMsg.replace("%data%", bio.msg);
	$("#header").append(formattedMsg);

$("#header:last").append(HTMLskillsStart);
var formattedSkills =
	HTMLskills.replace("%data%", bio.skills);
	$("#header").append(formattedSkills);


/*
//
// Work Experience
//
*/

var work = {
	"workTitle" : "Marketing Specialist",
	"workEmployer" : "Landscape Communications, Inc.",
	"workDates" : "March 2015 - Current",
	"workLocation" : "Tustin, California"
}

$("#workExperience").append(HTMLworkStart);

var formattedworkEmployer =
//	HTMLworkEmployer.replace("#", "http://www.landscapeonline.com/");
	HTMLworkEmployer.replace("%data%", work.workEmployer);
	$("#workExperience").append(formattedworkEmployer);

var formattedworkTitle =
	HTMLworkTitle.replace("%data%", work.workTitle);
	$("#workExperience").append(formattedworkTitle);

var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';