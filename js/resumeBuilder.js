
var bio = {
	name: "Jason Simmons",
	role: "Web Developer",
	contacts: {
		email: "jason_m_simmons@yahoo.com", 
		cellphone: "*****",
		location: "New York, NY"
	},
	welcomeMsg: "Welcome to my resume",
	expereince: "5 Years",
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
		
var work = {
          	jobs: [
                  	{
                  		"company": "CBS",
                  		"position": "Frontend Web Developer",
                  		"location": "Burbank, California",
                  		"description": "lorem ipsum",
                  		"dates": "10/3/99-"
                  	},
                  	{
                  		"company": "MyLife.com",
                  		"position": "Frontend Web Developer",
                  		"location": "Los Angeles, California",
                  		"description": "Westwood, California",
                  		"projects": "lorem ipsum",
                  		"dates": "10/3/99-"
                  	},
                  	{
                  		"company": "Ignition72",
                  		"position": "Frontend Web Developer",
                  		"location": "Baltimore, MD",
                  		"description": "Baltimore, Maryland",
                  		"projects": "lorem ipsum",
                  		"dates": "10/3/99-"
                  	}
            ]
}

var projects = {
	project: [
    				{
    					"name": "Holiday Gift Guide",
    					"date": "11/15",
    					"description": "Holiday gift guide",
    					"image": "",
    					"link": "http://",
    					"gitHub":""
    				},
    				{
    					"name": "sample",
    					"date": "11/15",
    					"description":"sample",
    					"image": "",
    					"link": "http://",
    					"gitHub":""
    				}
	],

	display: function(){
		$('#projects').append(HTMLprojectStart);
		
    for (i = 0; i < this.project.length; i++){	
			 var title   = HTMLprojectTitle.replace('%data%', this.project[i].name),
			 date        = HTMLprojectDates.replace('%data%', this.project[i].date),
			 description = HTMLprojectDescription.replace('%data%', this.project[i].description),
			 image       = HTMLprojectImage.replace('%data%', this.project[i].image),
			 link        = this.project[i].link,
			 gitHub      = this.project[i].gitHub;

			 $('.project-entry').append(title, date, description, image, link, gitHub);
		}
	}
}

var formattedName 	= HTMLheaderName.replace("%data%", "Json Simmons"),
formattedRole 		  = HTMLheaderRole.replace("%data%", "Frontend Web Developer"),
formattedSkills 	  = HTMLskills.replace("%data%", bio.skills.join(" ")),

formatedStart 		  = HTMLworkStart,
formattedEmployer 	= HTMLworkEmployer,
formattedTitle 		  = HTMLworkTitle,
formatedDates 		  = HTMLworkDates,
formattedLocation	  = HTMLworkLocation,
formattedDescription= HTMLworkDescription;


displayResume();
$('#mapDiv').append(googleMap)

function displayResume(){
	$("#main").append(internationalizeButton);
	$("#header").prepend(formattedName, formattedRole);
	$('#workExperience').append(formatedStart);
  $('#education').append(HTMLschoolStart);

	if(bio.skills.length > 0){
		$('#header').append(HTMLskillsStart);
		$('#skills-h3').append(formattedSkills);
	}

	for(job in work.jobs){
		$('.work-entry:last').append(formattedEmployer.replace('%data%', work.jobs[job].company) 
							   + formattedTitle.replace('%data%', work.jobs[job].position)
							   + formatedDates.replace('%data%', work.jobs[job].dates)
							   + formattedLocation.replace('%data%', work.jobs[job].location)
							   + formattedDescription.replace('%data%', work.jobs[job].description) 
		);
	}	
  for(var school in education.schools){
    $('.education-entry').append(HTMLschoolName.replace('%data%',education.schools[school].name) 
        + HTMLschoolDegree.replace('%data%',education.schools[school].degree),
        + HTMLschoolLocation.replace('%data%',education.schools[school].location)
    );
  }
  


  // var HTMLschoolStart = '<div class="education-entry"></div>';
// var HTMLschoolName = '<a href="#">%data%';
// var HTMLschoolDegree = ' -- %data%</a>';
// var HTMLschoolDates = '<div class="date-text">%data%</div>';
// var HTMLschoolLocation = '<div class="location-text">%data%</div>';
// var HTMLschoolMajor = '<em><br>Major: %data%</em>';

	projects.display();
}

function inName(name){
	var intName 	= name.split(" ");
	var newFirst 	= intName[0];
	var newLast		= intName[1];

	firstLetter = newFirst[0].toUpperCase();
	newFirst = firstLetter + newFirst.slice(1).toLowerCase(); 

	return newFirst + " " +  newLast.toUpperCase();
}





