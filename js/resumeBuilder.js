var formattedName =
	HTMLheaderName.replace("%data%", "Nathan Hadinata");

var formattedRole =
	HTMLheaderRole.replace("%data%", "UX Designer");

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);