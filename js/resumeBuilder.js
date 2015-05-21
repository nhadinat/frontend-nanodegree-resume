var formattedName =
	HTMLheaderName.replace("%data%", "Nathan Hadinata");

var formattedRole =
	HTMLheaderRole.replace("%data%", "UX Designer");

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

var skills =
["UX/UI Design", "Google Adwords", "Adobe Creative Suite"]

var bio = {
	"name" : "Nathan",
	"role" : UX Designer,
	"contact info" : nathanhadinata@gmail.com,
	"picture URL" : "Nathan-Profile-150x150.jpg",
	"welcome message" : "Boom boom boom, a lemme hear you say wayo",
	"skills" : skills
};