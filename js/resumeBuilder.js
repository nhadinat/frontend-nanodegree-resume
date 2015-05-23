var formattedName =
	HTMLheaderName.replace("%data%", "Nathan Hadinata");

var formattedRole =
	HTMLheaderRole.replace("%data%", "UX Designer");

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

//var skills =
//["UX/UI Design", "Google Adwords", "Adobe Creative Suite"]

/*var bio = {
	"name" : "Nathan",
	"role" : "UX Designer",
	"contacts" : {
		"mobile": "714-398-7073",
		"email": "nathanhadinata@gmail.com",
		"location" : "Lake Forest"
	},
	"welcome message" : "Boom boom boom, a lemme hear you say wayo",
	"skills" : [
		"UX/UI Design", "Google Adwords", "Adobe Creative Suite"
	],
	"bioPic" : "images/Nathan-Profile-150x150.jpg",
}

//$("#main").prepend(bio);

/*function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}