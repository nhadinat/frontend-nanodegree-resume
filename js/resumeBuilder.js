var formattedName =
	HTMLheaderName.replace("%data%", "Nathan Hadinata");

var formattedRole =
	HTMLheaderRole.replace("%data%", "UX Designer");

$("#header").append(formattedName);
$("#header").append(formattedRole);