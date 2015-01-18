//PERSONAL INFO
var bio = {
	name: "Kevin Williams",
	role: "Web Developer",
	contacts: {
		mobile: {text:"(487) 867-5309",url:"tel:14878675309",label:"mobile",icon:"fa-phone"},
		email: {text:"person@mail.com",url:"mailto:person@mail.com",label:"email",icon:"fa-at"},
		github: {text:"kmwillia",url:"https://github.com/kmwillia",label:"github",icon:"fa-github",newWindow:true},
		twitter: {text:"@kakkokevin",url:"https://twitter.com/@kakkokevin",label:"twitter",icon:"fa-twitter",newWindow:true},
		blog: {text:"kmwillia.com",url:"http://www.kmwillia.com",label:"blog",icon:"fa-pencil",newWindow:true},
		location: {text:"Massachusetts",url:"https://maps.google.com?q=Massachusetts",label:"location",icon:"fa-map-marker",newWindow:true}
	},
	welcomeMessage: "Gutenhello!",
	skills: ["JavaScript","CSS","HTML","Python","Interpretive Dance","Japanese","Archery"],
	biopic: "images/fry.jpg",
	display: function() {
		var $biobox = $('#biobox'),
		    $header = $('#header'),
			$contacts = $('#topContacts ul');
		//Contact Info
		for (contact in this.contacts) {
			$contacts.append(HTMLcontactGeneric(this.contacts[contact]))
		}
		$contacts.append(HTMLletsConnect);
		// $contacts.append(internationalizeButton);
		// $contacts.append(HTMLWelcomeMsg.replace('%data%', this.welcomeMessage));
		//Disabled in place of Generic call
		// $contacts.append(HTMLmobile.replace('%data%', this.contacts.mobile).replace('%data%', this.contacts.mobile));
		// $contacts.append(HTMLemail.replace('%data%', this.contacts.email));
		// $contacts.append(HTMLtwitter.replace('%data%', this.contacts.twitter).replace('%data%', this.contacts.twitter));
		// $contacts.append(HTMLgithub.replace('%data%', this.contacts.github).replace('%data%', this.contacts.github));
		// $contacts.append(HTMLblog.replace('%data%', this.contacts.blog).replace('%data%', this.contacts.blog));
		// $contacts.append(HTMLlocation.replace('%data%', this.contacts.location).replace('%data%', this.contacts.location));
		//Name, Image, Message
		$biobox.prepend(HTMLbioPic.replace('%data%', this.biopic));
		$biobox.append(HTMLheaderName.replace('%data%', this.name));
		$biobox.append(HTMLheaderRole.replace('%data%', this.role));
		//Skills
		$biobox.append(HTMLskillsStart);
		if(this.skills.length > 0) {
			var $skillsList = $('#skills');
			$.each(this.skills, function(index, skill) {
				$skillsList.append(HTMLskills.replace('%data%', skill));
			});
		}
	}
};

//WORK EXPERIENCE
var work = {
	jobs: [
		{
			employer: "Esteban's Border Tour and Catapult Experience",
			url: "http://www.esteban.com",
			title: "Chief Cannon Engineer",
			location: "Matamoros, Tamaulipas",
			dates: "2012-Present",
			description: "Bacon ipsum dolor amet prosciutto bacon ground round kevin kielbasa shank chuck. Bacon sausage shankle prosciutto meatball fatback, beef ribs beef shoulder bresaola. Drumstick ham hock ground round brisket, biltong ham pork sirloin meatloaf pork belly flank alcatra. Tail chuck cupim, tongue picanha frankfurter venison leberkas jerky turducken beef hamburger pork belly pig pork. Flank meatloaf kielbasa tail venison."
		},
		{
			employer: "Target",
			url: "http://www.target.com",
			title: "Hardlines Manager",
			location: "Dover, DE",
			dates: "2009-2012",
			description: "Chuck sausage shank ribeye corned beef t-bone jowl doner kevin pig venison tongue kielbasa spare ribs. Sausage kevin salami picanha. Tongue shank doner sausage turducken. Swine strip steak jerky, ham hock bresaola filet mignon ham kielbasa prosciutto spare ribs boudin pastrami capicola. Chuck cow tenderloin jowl andouille. Filet mignon beef jowl, bacon turkey sirloin corned beef brisket. Corned beef venison bacon andouille picanha."
		}
	],
	display: function() {
		var $work = $('#workExperience');
		if(this.jobs.length > 0) {
			$.each(this.jobs, function(index, job) {
				$work.append(HTMLworkStart);
				var $currWork = $work.children('.work-entry').last();
				$currWork.append(HTMLworkEmployer.replace('%data%', job.employer) + HTMLworkTitle.replace('%data%', job.title));
				$currWork.append(HTMLworkDates.replace('%data%', job.dates));
				$currWork.append(HTMLworkLocation.replace('%data%', job.location));
				$currWork.append(HTMLworkDescription.replace('%data%', job.description));
				$currWork.append('<br>');
			});
		}
	}
};

//PROJECTS
var projects = {
	projects: [
		{
			title: "Project A",
			dates: "2009-2011",
			description: "Corned beef tenderloin prosciutto frankfurter, chuck capicola beef doner tail brisket swine pastrami filet mignon pork chop. Swine jowl t-bone, andouille bresaola pork belly tenderloin sausage ham. Prosciutto biltong short ribs pig. Biltong tail t-bone corned beef ham sausage flank chuck leberkas spare ribs andouille shank porchetta pork chop. Rump short loin shankle, boudin pastrami bacon beef filet mignon turkey strip steak kevin shoulder ham cupim. Turducken shoulder ball tip tri-tip picanha hamburger. Ball tip ground round prosciutto leberkas turkey spare ribs andouille brisket kielbasa jowl drumstick fatback.",
			images: [
				"http://www.placecage.com/197/148",
				"http://www.placecage.com/197/149",
				"http://www.placecage.com/197/150"
			]
		},
		{
			title: "Bill F'ing Murray",
			dates: "1950-Present",
			description: "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
			images: [
				"http://www.fillmurray.com/197/148",
				"http://www.fillmurray.com/197/149",
				"http://www.fillmurray.com/197/150"
			]
		}
	],
	display: function() {
		var $projects = $('#projects');
		if(this.projects.length > 0) {
			$.each(this.projects, function(index, project) {
				$projects.append(HTMLprojectStart);
				var $currProject = $projects.children('.project-entry').last();
				$currProject.append(HTMLprojectTitle.replace('%data%', project.title));
				$currProject.append(HTMLprojectDates.replace('%data%', project.dates));
				$currProject.append(HTMLprojectDescription.replace('%data%', project.description));
				if(this.images.length > 0) {
					for(image in this.images) {
						$currProject.append(HTMLprojectImage.replace('%data%', this.images[image]));
					}
				}
			});
		}
	}
};


var education = {
	schools: [
		{
			name: "University of Louisiana",
			location: "Baton Rouge, Louisiana",
			degree: "Bachelor's",
			majors: ["Japanese"],
			dates: 2008,
			url: "http://www.Lou-U.edu"
		},
		{
			name: "Magical Mystery School",
			location: "Havana, Cuba",
			degree: "",
			majors: ["Japanese"],
			dates: 2007,
			url: "http://www.todai.ac.jp/"
		}
	],
	onlineCourses: [
		{
			title: "Front-End Web Developer Nanodegree",
			school: "Udacity",
			date: 2015,
			url: "https://www.udacity.com/course/nd001"
		}
	],
	display: function() {
		var $education = $('#education');
		//Schools
		if(this.schools.length > 0) {
			$.each(this.schools, function(index, school) {
				$education.append(HTMLschoolStart);
				var $currSchool = $education.children('.education-entry').last();
				$currSchool.append(HTMLschoolName.replace('%data%', school.name) + (school.degree ? HTMLschoolDegree.replace('%data%', school.degree) : ''));
				$currSchool.append(HTMLschoolDates.replace('%data%', school.dates));
				$currSchool.append(HTMLschoolLocation.replace('%data%', school.location));
				$currSchool.append(HTMLschoolMajor.replace('%data%', school.majors ? school.majors.join(', ') : ''));
				$currSchool.append('<br><br>');
			});
		}
		//Online Courses
		if(this.onlineCourses.length > 0) {
			$education.append(HTMLonlineClasses);
			$.each(this.onlineCourses, function(index, course) {
				$education.append(HTMLschoolStart);
				var $currCourse = $education.children('.education-entry').last();
				$currCourse.append(HTMLonlineTitle.replace('%data%', course.title) + HTMLonlineSchool.replace('%data%', course.school));
				$currCourse.append(HTMLonlineDates.replace('%data%', course.date));
				$currCourse.append(HTMLonlineURL.replace('%data%', course.url));
				$currCourse.append('<br>');
			});
		}
	}
};


bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);


function inName(name) {
	name = name.trim().split(' ');
	return name[0].slice(0,1).toUpperCase() + 
		   name[0].slice(1) + 
		   ' ' + 
		   name[1].toUpperCase();
}
