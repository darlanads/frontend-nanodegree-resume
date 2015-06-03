// $("#main").append("Darlan Araújo dos Santos");

var awesomeThoughts = "I am Darlan and I am AWESOME";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(awesomeThoughts);
console.log(funThoughts);

// $("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Darlan");
var formattedRole = HTMLheaderRole.replace("%data%", "Role");

$("#header").append(formattedName).prepend(formattedRole);