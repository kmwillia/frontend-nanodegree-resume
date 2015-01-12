var bio = {
	name: "Kevin Williams",
	role: "Web Developer",
	contacts: {
		mobile: "(187) 555-1234",
		email: "person@mail.com",
		github: "kmwillia",
		twitter: "@kakkokevin",
		location: "Massachusetts"
	},
	welcomeMessage: "Gutenhello!",
	skills: ["JavaScript","CSS","HTML","Python","Interpretive Dance","Japanese","Archery"],
	biopic: "images/fry.jpg",
	display: function() {
		//Contact Info
		$contacts.append(HTMLmobile.replace('%data%', this.contacts.mobile));
		$contacts.append(HTMLemail.replace('%data%', this.contacts.email));
		$contacts.append(HTMLtwitter.replace('%data%', this.contacts.twitter));
		$contacts.append(HTMLgithub.replace('%data%', this.contacts.github));
		$contacts.append(HTMLlocation.replace('%data%', this.contacts.location));
		//Name, Image, Message
		$header.append(HTMLheaderName.replace('%data%', this.name));
		$header.append(HTMLheaderRole.replace('%data%', this.role));
		$header.append(HTMLbioPic.replace('%data%', this.biopic));
		$header.append(HTMLWelcomeMsg.replace('%data%', this.welcomeMessage));
		//Skills
		$header.append(HTMLskillsStart);
		var $skillsList = $('#skills');
		$.each(this.skills, function(index, skill) {
			$skillsList.append(HTMLskills.replace('%data%', skill));
		});
	}
};


var work = {
	jobs: [
		{
			employer: "Meditech",
			url: "http://www.meditech.com",
			title: "Development Programmer",
			location: "Massachusetts",
			dates: "2012-Present",
			description: "Development and Upkeep of new and existing medical software."
		},
		{
			employer: "Interac",
			website: "http://www.interac.co.jp",
			title: "Assistant Language Teacher",
			location: "Nagano, Japan",
			dates: "2009-2012",
			description: "Creation and instruction of lesson plans."
		}
	],
	display: function() {
		$.each(this.jobs, function(index, job) {
			$work.append(HTMLworkStart);
			var $currWork = $work.children('.work-entry').last();
			$currWork.append(HTMLworkEmployer.replace('%data%', job.employer) + HTMLworkTitle.replace('%data%', job.title));
			$currWork.append(HTMLworkDates.replace('%data%', job.dates));
			$currWork.append(HTMLworkLocation.replace('%data%', job.location));
			$currWork.append(HTMLworkDescription.replace('%data%', job.description));
		});
	}
};


var projects = {
	projects: [
		{
			title: "Project A",
			dates: "2009-2011",
			description: "Lorem ipsum dolor sit amet",
			images: [
				"http://www.placecage.com/197/148",
				"http://www.placecage.com/c/197/148",
				"http://www.placecage.com/g/197/148"
			]
		},
		{
			title: "Bill F'ing Murray",
			dates: "1950-Present",
			description: "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
			images: [
				"http://www.fillmurray.com/197/148",
				"http://www.fillmurray.com/197/149",
				"http://www.fillmurray.com/g/197/148"
			]
		}
	],
	display: function() {
		$.each(this.projects, function(index, project) {
			$projects.append(HTMLprojectStart);
			var $currProject = $projects.children('.project-entry').last();
			$currProject.append(HTMLprojectTitle.replace('%data%', project.title));
			$currProject.append(HTMLprojectDates.replace('%data%', project.dates));
			$currProject.append(HTMLprojectDescription.replace('%data%', project.description));
			for(image in this.images) {
				$currProject.append(HTMLprojectImage.replace('%data%', this.images[image]));
			}
		});
	}
};


var education = {
	schools: [
		{
			name: "University of Massachusetts",
			location: "Amherst, MA",
			degree: "Bachelor's",
			majors: ["Japanese"],
			dates: 2008,
			url: "http://www.umass.edu"
		},
		{
			name: "Nagasaki College of Foreign Languages",
			location: "Nagasaki, Japan",
			dates: 2007,
			url: "http://www.nagasaki-gaigo.ac.jp/"
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
		//Schools
		$.each(this.schools, function(index, school) {
			$education.append(HTMLschoolStart);
			var $currSchool = $education.children('.education-entry').last();
			$currSchool.append(HTMLschoolName.replace('%data%', school.name) + (school.degree ? HTMLschoolDegree.replace('%data%', school.degree) : ''));
			$currSchool.append(HTMLschoolDates.replace('%data%', school.dates));
			$currSchool.append(HTMLschoolLocation.replace('%data%', school.location));
			$currSchool.append(HTMLschoolMajor.replace('%data%', school.majors ? school.majors.join(', ') : ''));
		});
		//Online Courses
		$education.append(HTMLonlineClasses);
		$.each(this.onlineCourses, function(index, course) {
			$education.append(HTMLschoolStart);
			var $currCourse = $education.children('.education-entry').last();
			$currCourse.append(HTMLonlineTitle.replace('%data%', course.title) + HTMLonlineSchool.replace('%data%', course.school));
			$currCourse.append(HTMLonlineDates.replace('%data%', course.date));
			$currCourse.append('<br>');
		});
	}
};


var $header = $('#header');
var $contacts = $('#topContacts');
var $work = $('#workExperience');
var $education = $('#education');
var $projects = $('#projects');
var $map = $('#mapDiv');


bio.display();
work.display();
projects.display();
education.display();