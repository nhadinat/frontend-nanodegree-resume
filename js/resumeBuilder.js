
//
// Header
//

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

//Internationalize Button for Name
if (bio.name.length > 0) {
	$("#header").prepend(internationalizeButton);

	function inName(name) {
		var name = bio.name;
		name = name.trim().split(" ");
		name[1] = name[1].toUpperCase();
		name[0] = name[0].slice(0,1).toUpperCase() + 
			name[0].slice(1).toLowerCase();

		return name[0] + " " + name[1];
	}
}

function displayHeader() {
	
	//Append header content
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

	//Append skills content
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (var skill in bio.skills) {
			var formattedSkills =
			HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkills);
		}
	}
}
displayHeader();

//
// Work Experience
//

var work = {
	"jobs" : [
		{
			"title" : "Marketing Specialist",
			"employer" : "Landscape Communications, Inc.",
			"dates" : "March 2015 - Current",
			"location" : "Tustin, California",
			"description" : "I am a Marketing Specialist."
		},
		{
			"title" : "Digital Marketer",
			"employer" : "Bee Social, LLC",
			"dates" : "June 2014 - February 2015",
			"location" : "Orange, California",
			"description" : "I am a Digital Marketer."
		},
		{
			"title" : "Digital Marketing Intern",
			"employer" : "PurposeMatch.com",
			"dates" : "August 2013 - October 2014",
			"location" : "Austin, Texas",
			"description" : "I am a Digital Marketing Intern."
		},
		{
			"title" : "Employment Coach",
			"employer" : "Integrated Resources Institute",
			"dates" : "December 2012 - August 2014",
			"location" : "Irvine, California",
			"description" : "I am an Employment Coach."
		},
		{
			"title" : "Marketing Intern",
			"employer" : "Saddleback Church",
			"dates" : "December 2011 - November 2012",
			"location" : "Lake Forest, California",
			"description" : "I am a Marketing Intern."
		}
	]
}
function displayWork() {
	if (work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);
		for (var job in work.jobs) {
			var formattedworkEmployer =
			//	HTMLworkEmployer.replace("#", "http://www.landscapeonline.com/");
				HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedworkTitle =
				HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedworkEmployerTitle = formattedworkEmployer + formattedworkTitle
				$(".work-entry").append(formattedworkEmployerTitle);

			var formattedworkDates =
				HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry").append(formattedworkDates);
			var formattedworkLocation =
				HTMLworkLocation.replace("%data%", work.jobs[job].location);
				$(".work-entry").append(formattedworkLocation);
			var formattedworkDescription =
				HTMLworkDescription.replace("%data%", work.jobs[job].description);
				$(".work-entry").append(formattedworkDescription);
		}
	}
}
displayWork();

//
// Projects
//

var project = {}
	project.title = "Responsive Portfolio";
	project.dates = "May 2015";
	project.description = "This is a Responsive Portfolio";
	project.image = "images/fry.jpg";

$("#projects").append(HTMLprojectStart);
var formattedprojectTitle =
	HTMLprojectTitle.replace("%data%", project.title);
	$("#projects").append(formattedprojectTitle);
var formattedprojectDates =
	HTMLprojectDates.replace("%data%", project.dates);
	$("#projects").append(formattedprojectDates);
var formattedprojectDescription =
	HTMLprojectDescription.replace("%data%", project.description);
	$("#projects").append(formattedprojectDescription);
var formattedprojectImage =
	HTMLprojectImage.replace("%data%", project.image);
	$("#projects").append(formattedprojectImage);

//
// Education
//

var school = {}
	school["name"] = "UC Irvine";
	school["degree"] = "Bachelor of Arts";
	school["dates"] = "2006 - 2010";
	school["location"] = "Irvine, California";
	school["major"] = "Psychology and Social Behavior";

$("#education").append(HTMLschoolStart);
var formattedschoolName =
	HTMLschoolName.replace("%data%", school["name"]);
	$("#education").append(formattedschoolName);
var formattedschoolDegree =
	HTMLschoolDegree.replace("%data%", school["degree"]);
	$("#education").append(formattedschoolDegree);
var formattedschoolDates =
	HTMLschoolDates.replace("%data%", school["dates"]);
	$("#education").append(formattedschoolDates);
var formattedschoolLocation =
	HTMLschoolLocation.replace("%data%", school["location"]);
	$("#education").append(formattedschoolLocation);
var formattedschoolMajor =
	HTMLschoolMajor.replace("%data%", school["major"]);
	$("#education").append(formattedschoolMajor);