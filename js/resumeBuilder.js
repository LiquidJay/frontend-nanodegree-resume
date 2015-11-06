/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	name: "Jason Simmons",
	role: "Web Developer",
	contact: {
		email: "jason_m_simmons@yahoo.com", 
		cellphone: "*****"
	},
	welcomeMsg: "Welcome to my resume",
	expereince: "5 Years"
	skills: ["HTML5", "CSS", "JavaScript","Photoshop"]
}

var education = {
	"schools" : [
		{
			"name" : "Florida State University",
			"location" : "Tallahassee, Florida",
			"degree" : "Masters"
		},
		{
			"name" : "Florida  A & M University",
			"location" : "Tallahassee, Florida",
			"degree" : "Bachelors of Science"
		}
	]
};
		
var workHistory = [
	{
		company: "CBS",
		positon: "Frontend Web Developer",
		location: "Burbank, California",
		projects: "lorem ipsum"
	},{
		company: "MyLife.com",
		positon: "Frontend Web Developer",
		location: "Westwood, California",
		projects: "lorem ipsum"
	},{
		company: "Ignition72",
		positon: "Frontend Web Developer",
		location: "Baltimore, Maryland",
		projects: "lorem ipsum"
	}
];



formattedName = HTMLheaderName.replace("%data%", "Json Simmons");
formattedRole = HTMLheaderRole.replace("%data%", "Frontend Web Developer");

$("#header").prepend(formattedName, formattedRole);

