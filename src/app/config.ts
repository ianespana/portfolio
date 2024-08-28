/* Change this file to get your personal Porfolio */

// Website related settings
import {
	faAws,
	faCss3,
	faDocker,
	faGit,
	faGithub,
	faGitlab,
	faHtml5,
	faInstagram,
	faJava,
	faJs,
	faLinkedin,
	faNodeJs,
	faPhp,
	faPython,
	faReact,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Skill } from '@/interfaces/skill';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { Degree } from '@/interfaces/degree';

const faGraphQl: IconDefinition = {
	prefix: 'fac' as IconPrefix,
	iconName: 'graphql' as IconName, // Any name you like
	icon: [
		400, // width
		400, // height
		[], // ligatures
		'', // unicode (if relevant)
		'M57.468 302.66l-14.376-8.3 160.15-277.38 14.376 8.3z M39.8 272.2h320.3v16.6H39.8z M206.348 374.026l-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z M54.482 132.883l-8.3-14.375 160.21-92.5 8.3 14.376z M342.568 302.663l-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5zM330.9 107.5h16.6v185h-16.6z M203.522 367l-7.25-12.558 139.34-80.45 7.25 12.557z M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9', // svg path data
	],
};

const faCSharp: IconDefinition = {
	prefix: 'fac' as IconPrefix,
	iconName: 'csharp' as IconName, // Any name you like
	icon: [
		250, // width
		250, // height
		[], // ligatures
		'', // unicode (if relevant)
		[
			'M128.456752,48.625876 C163.600523,48.625876 194.283885,67.7121741 210.718562,96.0819435 L210.558192,95.808876 L169.209615,119.617159 C161.062959,105.823554 146.128136,96.5150717 128.996383,96.3233722 L128.456752,96.3203544 C102.331178,96.3203544 81.1506705,117.499743 81.1506705,143.625316 C81.1506705,152.168931 83.4284453,160.17752 87.3896469,167.094792 C95.543745,181.330045 110.872554,190.931398 128.456752,190.931398 C146.149522,190.931398 161.565636,181.208041 169.67832,166.820563 L169.481192,167.165876 L210.767678,191.083913 C194.51328,219.21347 164.25027,238.240861 129.514977,238.620102 L128.456752,238.625876 C93.2021701,238.625876 62.4315028,219.422052 46.0382398,190.902296 C38.0352471,176.979327 33.4561922,160.837907 33.4561922,143.625316 C33.4561922,91.1592636 75.9884604,48.625876 128.456752,48.625876 Z',
			'M201.892326,116.294008 L201.892326,129.767692 L215.36601,129.767692 L215.36601,116.294008 L222.102852,116.294008 L222.102852,129.767692 L235.576537,129.767692 L235.576537,136.504534 L222.102852,136.504534 L222.102852,149.978218 L235.576537,149.978218 L235.576537,156.71506 L222.102852,156.71506 L222.102852,170.188744 L215.36601,170.188744 L215.36601,156.71506 L201.892326,156.71506 L201.892326,170.188744 L195.155484,170.188744 L195.155484,156.71506 L181.6818,156.71506 L181.6818,149.978218 L195.155484,149.978218 L195.155484,136.504534 L181.6818,136.504534 L181.6818,129.767692 L195.155484,129.767692 L195.155484,116.294008 L201.892326,116.294008 Z M215.36601,136.504534 L201.892326,136.504534 L201.892326,149.978218 L215.36601,149.978218 L215.36601,136.504534 Z',
		], // svg path data
	],
};

const settings = {
	isSplash: true, // Change this to true if you want to use the splash screen.
	useCustomCursor: true, // Change this to false if you want the good'ol cursor
	googleTrackingID: 'UA-174238252-2',
};

//Home Page
const greeting = {
	title: 'Hello 👋.',
	fullName: 'Ian Ramírez',
	subTitle:
		'a software engineer with a knack for crafting backend solutions 🔥. Always learning.',
	aboutMe:
		"My days are spent deep in Node.js, TypeScript, and Java, working with SQL and NoSQL databases, and designing robust APIs with REST and GraphQL. I'm always eager to explore new technologies and stay ahead of the curve in the fast-paced world of software development.\n" +
		'\n' +
		"Driven by curiosity, I embrace challenges that push me to learn and grow. Whether it's mastering a new framework or optimizing an existing solution, I strive to use the best tools for every task at hand.\n" +
		'\n' +
		"When I'm not immersed in code, you'll find me in the kitchen, experimenting with new recipes and flavors.",
};

const socialMediaLinks = [
	{
		faClass: faGithub,
		href: 'https://github.com/ianespana',
		color: '#333333',
	},
	{
		faClass: faLinkedin,
		href: 'https://linkedin.com/in/ian-rec',
		color: '#0077b5',
	},
	{
		faClass: faInstagram,
		href: 'https://instagram.com/ianespana97',
		color: '#c13584',
	},
];

const skills: Skill[] = [
	{
		title: 'Backend Development',
		fileName: 'FullStackImg',
		skills: [
			'⚡ Design and implement scalable and efficient backend architectures for web and mobile applications',
			'⚡ Develop robust APIs using Node.js',
			'⚡ Integrate and manage databases, including SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, DynamoDB)',
			'⚡ Implement authentication, authorization, and security best practices in backend services',
			'⚡ Integrate third-party services and APIs, such as Firebase, AWS, and DigitalOcean',
			'⚡ Optimize backend performance and ensure high availability of services',
		],
		skillIcons: [
			{
				skillName: 'NodeJS',
				faClass: faNodeJs,
				style: {
					color: '#339933',
				},
			},
			{
				skillName: 'JavaScript',
				faClass: faJs,
				style: {
					color: '#F7DF1E',
				},
			},
			{
				skillName: 'ReactJS',
				faClass: faReact,
				style: {
					color: '#61DAFB',
				},
			},
			{
				skillName: 'GraphQL',
				faClass: faGraphQl,
				style: {
					color: '#DE33A6',
				},
			},
			{
				skillName: 'MySQL',
				faClass: faDatabase,
				style: {
					color: '#4479A1',
				},
			},
			/*{
				skillName: 'PostgreSQL',
				faClass: faDatabase,
				style: {
					color: '#336791',
				},
			},
			{
				skillName: 'MongoDB',
				faClass: faDatabase,
				style: {
					color: '#439743',
				},
			},*/
			{
				skillName: 'Git',
				faClass: faGit,
				style: {
					color: '#E94E32',
				},
			},
			{
				skillName: 'HTML5',
				faClass: faHtml5,
				style: {
					color: '#E34F26',
				},
			},
			{
				skillName: 'CSS3',
				faClass: faCss3,
				style: {
					color: '#1572B6',
				},
			},
			{
				skillName: 'PHP',
				faClass: faPhp,
				style: {
					color: '#7377AD',
				},
			},
			{
				skillName: 'C#',
				faClass: faCSharp,
				style: {
					color: '#c861e6',
				},
			},
			{
				skillName: 'Python',
				faClass: faPython,
				style: {
					color: '#3bab37',
				},
			},
			{
				skillName: 'Java',
				faClass: faJava,
				style: {
					color: '#f89820',
				},
			},
		],
	},
	{
		title: 'Cloud Infra-Architecture',
		fileName: 'CloudInfraImg',
		skills: [
			'⚡ Proficient in deploying and managing applications on various cloud platforms, including AWS',
			'⚡ Skilled in setting up and maintaining CI/CD pipelines for continuous integration and delivery',
			'⚡ Experienced in containerization and orchestration using Docker and Kubernetes',
			'⚡ Expertise in cloud infrastructure management, including automated scaling and monitoring',
		],
		skillIcons: [
			{
				skillName: 'AWS',
				faClass: faAws,
				style: {
					color: '#FF9900',
				},
			},
			{
				skillName: 'Docker',
				faClass: faDocker,
				style: {
					color: '#1488C6',
				},
			},
			{
				skillName: 'GitLab CI/CD',
				faClass: faGitlab,
				style: {
					color: '#FC6D26',
				},
			},
			{
				skillName: 'GitHub Actions',
				faClass: faGithub,
				style: {
					color: '#ffffff',
				},
			},
		],
	},
];

const degrees: Degree[] = [
	{
		title: 'Universidad Autónoma de Querétaro',
		subtitle: 'Bachelor in Software Engineering',
		logoPath: 'ssec.png',
		altName: 'UAQ',
		duration: '2020 - 2025',
		descriptions: [
			'⚡ I have studied core subjects like Machine Learning, Computer Vision, Advanced Web Development.',
			"⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
		],
		websiteLink: 'https://www.uaq.mx/',
	},
	{
		title: 'Instituto Tecnológico y de Estudios Superiores de Monterrey',
		subtitle: 'Bachelor in Mechatronics Engineering',
		logoPath: 'ssgandhy.png',
		altName: 'ITESM',
		duration: '2015 - 2019',
		descriptions: [
			'⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.',
			'⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.',
			"⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
			'⚡ I have secured 9.82 CGPA.',
		],
		websiteLink: 'https://tec.mx/es',
	},
];

const certifications = [
	{
		title: 'M0001: MongoDB Basics',
		subtitle: 'MongoDB University',
		logo_path: 'mongo.png',
		certificate_link:
			'https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing',
		alt_name: 'MongoDB University',
		// color_code: "#2AAFED",
		color_code: '#47A048',
	},
	{
		title: 'Hackathon',
		subtitle: 'Hack The Mountains',
		logo_path: 'hackathon1.svg',
		certificate_link:
			'https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing',
		alt_name: 'hackathon',
		color_code: '#E2405F',
	},
	{
		title: 'A300: Atlas Security',
		subtitle: 'MongoDB University',
		logo_path: 'mongo.png',
		certificate_link:
			'https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing',
		alt_name: 'MongoDB University',
		// color_code: "#F6B808",
		color_code: '#47A048',
	},
	{
		title: 'Cyber Security & Cyber Forensics',
		subtitle: 'Workshop at IIT Bombay',
		logo_path: 'iit.png',
		certificate_link:
			'https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing',
		alt_name: 'Workshop',
		color_code: '#2AAFED',
	},
	{
		title: 'MLH Local Hack Day: Build',
		subtitle: 'Major League Hacking',
		logo_path: 'mlh-logo.svg',
		certificate_link:
			'https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing',
		alt_name: 'Google',
		color_code: '#fe0037',
	},
	{
		title: 'Hack20',
		subtitle: 'Flutter International Hackathon',
		logo_path: 'flutter.png',
		certificate_link:
			'https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing',
		alt_name: 'Flutter International Hackathon',
		color_code: '#2AAFED',
	},
	{
		title: 'Postman Student Expert',
		subtitle: 'Postman',
		logo_path: 'postman.png',
		certificate_link:
			'https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g',
		alt_name: 'Postman',
		// color_code: "#f36c3d",
		color_code: '#fffbf3',
	},
	// color_code: "#8C151599",
	// color_code: "#7A7A7A",
	// color_code: "#0C9D5899",
	// color_code: "#C5E2EE",
	// color_code: "#ffc475",
	// color_code: "#g",
	// color_code: "#ffbfae",
	// color_code: "#fffbf3",
	// color_code: "#b190b0",
];

// Experience Page
const experience = {
	title: 'Experience',
	subtitle: 'Work, Internship and Volunteership',
	description:
		"As a Node.js Backend Developer, I have worked with real projects for over two years. I've mostly done projects on my own. I love organizing workshops to share my knowledge with others.",
	header_image_path: 'experience.svg',
	sections: [
		{
			title: 'Work Experience',
			experiences: [
				{
					title: 'SDE Intern',
					company: 'Crest Infosystems Pvt. Ltd.',
					company_url: 'https://www.crestinfosystems.com/',
					logo_path: 'crest.png',
					duration: 'Jan 2024 - Present',
					location: 'Surat, Gujarat',
					description: `As an SDE intern, my priorities include learning opportunities and professional development. Aiming for Backend Development proficiency.`,
					color: '#0071C5',
				},
				{
					title: 'Node.js Backend Developer',
					company: 'Valora Infotech',
					company_url: 'http://valorainfotech.com/',
					logo_path: 'valora.jpg',
					duration: 'Oct 2020 - Dec 2022',
					location: 'Surat, Gujarat',
					description: `Train, oversee, and mentor young software development employees. I created and managed the admin panel backend and a gambling application as a Node.js backend developer. I obtained knowledge in Web Socket, Payment Gateway Integration, and gaming legislation, while growing my industry experience and investigating new technologies.
          Focus on change request functions in close collaboration with the project manager and team leads.
          Developed new and maintained existing applications.
          Increased productivity and problem-solving technics by 20%.
          We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
          `,
					// "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
					color: '#0071C5',
				},
				// {
				//   title: "Node.js Backend Developer (Intern)",
				//   company: "Valora Infotech",
				//   company_url: "http://valorainfotech.com/",
				//   logo_path: "valora.jpg",
				//   duration: "Oct 2020 - Mar 2021",
				//   location: "Surat, Gujarat",
				//   description: `Focus on change request functions in close collaboration with the project manager and team leads.
				//   Developed new and maintained existing applications.
				//   Increased productivity and problem-solving technics by 20%.
				//   We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
				//   `,
				//   // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
				//   color: "#0071C5",
				// },
				{
					title: 'Full Stack Developer (Freelancer)',
					company: 'NightOwls',
					company_url: 'http://nightowls.company/',
					logo_path: 'nightowls.jpg',
					duration: 'Sep 2020 - Oct 2020',
					location: 'Work From Home',
					description: `Maintain close contact with the client and team when handling change requests.
          LAMP Stack was mostly utilised. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
          `,
					// "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
					color: '#ee3c26',
				},
			],
		},
		{
			title: 'Volunteerships',
			experiences: [
				{
					title: 'Community Lead',
					company: 'Bauddhik-Geeks',
					company_url: 'https://bauddhikgeeks.tech/',
					logo_path: 'bauddhikgeeks.png',
					duration: 'Sep 2021 - Present',
					location: 'Work From Home',
					description:
						'Help Tech-Geeks so they get exposure to the technical world and enlighten their skills. Hence, the programming club highlight all the skills of the individual members and help them develop and groom their skills in a meaningful way. Help community members to learn and grow.',
					color: '#FBBD18',
				},
				{
					title: 'Cross Winter of Code Mentor',
					company: 'CWOC',
					company_url: 'https://crosswoc.ieeedtu.in/',
					logo_path: 'cwoc.png',
					duration: 'Feb 2021 - Present',
					location: 'Work From Home',
					description:
						'Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.',
					color: '#4285F4',
				},
				// {
				//   title: "Campus Hustler",
				//   company: "Skillenza",
				//   company_url: "https://skillenza.com/",
				//   logo_path: "skillenza.png",
				//   duration: "Feb 2021 - Present",
				//   location: "Work from Home",
				//   description:
				//     "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
				//   color: "#196acf",
				// },
				{
					title: 'GDG Student Volunteer',
					company: 'Google Developer Groups',
					company_url: 'https://gdg.community.dev/',
					logo_path: 'gdg.png',
					duration: 'Feb 2021 - Present',
					location: 'Work From Home',
					description:
						'Google Developer Group Surat Student Volunteer and Member.',
					color: '#D83B01',
				},
				{
					title: 'Postman Student Expert',
					company: 'Postman',
					company_url: 'https://www.postman.com/',
					logo_path: 'postman.png',
					duration: 'Feb 2020 - Present',
					location: 'Work From Home',
					description:
						'Google Developer Group Surat Student Volunteer and Member.',
					color: '#D83B01',
				},
				{
					title: 'GitHub Student Developer',
					company: 'GitHub',
					company_url: 'https://github.com/',
					logo_path: 'github.png',
					duration: 'Nov 2019 - Present',
					location: 'Work from Home',
					description:
						'Contribute to Open Source Community and Open Source Project.',
					color: '#040f26',
				},
				{
					title: 'Google Local Guide',
					company: 'Google Map',
					company_url: 'https://maps.google.com/localguides/',
					logo_path: 'localguide.png',
					duration: 'Sep 2018 - Present',
					location: 'Work From Home',
					description:
						'Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.',
					color: '#D83B01',
				},
				{
					title: 'E. F. I. Student Volunteer',
					company: 'ENVIRONMENTALIST FOUNDATION OF INDIA',
					company_url: 'https://indiaenvironment.org/',
					logo_path: 'efi.png',
					duration: 'Apr 2017 - Present',
					location: 'Work From Home',
					description:
						'Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.',
					color: '#5a900f',
				},
			],
		},
	],
};

// Projects Page
const projectsHeader = {
	title: 'Projects',
	description:
		'My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.',
	avatar_image_path: 'projects_image.svg',
};

// Contact Page
const contactPageData = {
	contactSection: {
		title: 'Contact Me',
		profile_image_path: 'harikrushn.jpg',
		description:
			'You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ',
	},
	blogSection: {
		title: 'Blogs',
		subtitle:
			"I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
		link: 'https://twitter.com/Harikrushn9',
		avatar_image_path: 'blogs_image.svg',
	},
};

const projects = {
	data: [
		{
			id: '0',
			name: 'Keep Calm and Carry On',
			url: 'https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io',
			description:
				'This platform enables users to practice Augmented Reality meditation, play stress burster games, track task completion and engage in motivational exercises to cope with stress and anxiety at work.  ',
			languages: [
				{
					name: 'HTML5',
					iconifyClass: 'logos-html-5',
				},
				{
					name: 'CSS3',
					iconifyClass: 'logos-css-3',
				},
				{
					name: 'NodeJs',
					iconifyClass: 'logos-nodejs',
				},
				{
					name: 'Augmented Reality',
					iconifyClass: 'bi:badge-ar',
				},
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io',
					iconifyClass: 'ri:github-fill',
				},
				{
					name: 'Devpost',
					url: 'https://devpost.com/software/keep-calm-and-carry-on',
					iconifyClass: 'fluent:window-dev-edit-20-filled',
				},
				{
					name: 'Live Demo',
					url: 'https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/',
					iconifyClass: 'mdi:web',
				},
			],
		},
		{
			id: '1',
			name: 'YOG4LIFE SOCIAL APP',
			url: 'https://github.com/kevalvavaliya/Yog4Life',
			description:
				'An app for helping people their healthy life. Yog4Life Has a feed feature which is help to get information from the folks, Yog4Life has an anonymous chat room to get connected with the world.',
			languages: [
				{
					name: 'Flutter',
					iconifyClass: 'logos-flutter',
				},
				{
					name: 'NodeJs',
					iconifyClass: 'logos-nodejs',
				},
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/kevalvavaliya/Yog4Life',
					iconifyClass: 'ri:github-fill',
				},
				{
					name: 'Devfolio',
					url: 'https://devfolio.co/projects/yoglife-b20d',
					iconifyClass: 'fluent:window-dev-edit-20-filled',
				},
			],
		},
		{
			id: '2',
			name: 'Adoptisity',
			url: 'https://github.com/kevalvavaliya/Adoptisity',
			description:
				'Our mission is to spread awareness about the benefits of adoption and to support LGBT families so that everyone has the chance to have a loving home environment.',
			languages: [
				{
					name: 'HTML5',
					iconifyClass: 'logos-html-5',
				},
				{
					name: 'CSS3',
					iconifyClass: 'logos-css-3',
				},
				{
					name: 'JavaScript',
					iconifyClass: 'logos-javascript',
				},
				{
					name: 'Wix',
					iconifyClass: 'bxl:wix',
				},
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/harikanani/Adoptisity',
					iconifyClass: 'ri:github-fill',
				},
				{
					name: 'Devpost',
					url: 'https://devpost.com/software/adoptisity',
					iconifyClass: 'fluent:window-dev-edit-20-filled',
				},
				{
					name: 'Live Demo',
					url: 'https://rajmahadevwala1.wixsite.com/adoptisity',
					iconifyClass: 'mdi:web',
				},
			],
		},
		{
			id: '3',
			name: 'FinSplit',
			url: 'https://github.com/rajmahadev8/Fin-Split',
			description:
				'Split your bills with your friends without any hassle. Manage Group Expenses, Track your expenses, and much more.',
			languages: [
				{
					name: 'ReactJS',
					iconifyClass: 'logos-react',
				},
				{
					name: 'NodeJs',
					iconifyClass: 'logos-nodejs',
				},
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/rajmahadev8/Fin-Split',
					iconifyClass: 'ri:github-fill',
				},
				{
					name: 'Devpost',
					url: 'https://devpost.com/software/finsplit',
					iconifyClass: 'fluent:window-dev-edit-20-filled',
				},
			],
		},
		{
			id: '4',
			name: 'Emosic',
			url: 'https://github.com/kevalvavaliya/Emosic',
			description:
				'An app that plays music according to your mood. Created a playlist management UI and used SpotifyAPI to control player client based on mood detection using ml model.',
			languages: [
				{
					name: 'HTML5',
					iconifyClass: 'logos-html-5',
				},
				{
					name: 'CSS3',
					iconifyClass: 'logos-css-3',
				},
				{
					name: 'Python',
					iconifyClass: 'logos-python',
				},
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/kevalvavaliya/Emosic',
					iconifyClass: 'ri:github-fill',
				},
				{
					name: 'Devpost',
					url: 'https://devpost.com/software/emosic',
					iconifyClass: 'fluent:window-dev-edit-20-filled',
				},
			],
		},
		{
			id: '5',
			name: 'Fileblok',
			url: 'https://github.com/harikanani/Fileblok',
			description:
				'Keep your projects moving with seamless transfer experice. FileBlok is a file transfer app that allows you to transfer files from one device to another without any hassle. We built this app using Flutter, Node.js and StoryBlok.',
			languages: [
				{
					name: 'Flutter',
					iconifyClass: 'logos-flutter',
				},
				{
					name: 'NodeJs',
					iconifyClass: 'logos-nodejs',
				},
				{
					name: 'Storyblok',
					iconifyClass: 'logos-storyblok-icon',
				},
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/harikanani/Fileblok',
					iconifyClass: 'ri:github-fill',
				},
				{
					name: 'Devpost',
					url: 'https://devpost.com/software/fileblok',
					iconifyClass: 'fluent:window-dev-edit-20-filled',
				},
			],
		},
		{
			id: '6',
			name: 'BAUDDIK-GEEKS PORTFOLIO',
			url: 'https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io',
			description:
				'Awesome Community Portfolio website for Bauddhik-Geeks community',
			languages: [
				{
					name: 'HTML5',
					iconifyClass: 'vscode-icons:file-type-html',
				},
				{
					name: 'CSS3',
					iconifyClass: 'vscode-icons:file-type-css',
				},
				{
					name: 'JavaScript',
					iconifyClass: 'logos-javascript',
				},
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io',
					iconifyClass: 'ri:github-fill',
				},
				{
					name: 'Live Demo',
					url: 'https://bauddhikgeeks.co/',
					iconifyClass: 'mdi:web',
				},
			],
		},
		{
			id: '7',
			name: 'Votechain',
			url: 'https://github.com/abhigoyani/votechain',
			description:
				'Awesome Community Portfolio website for Bauddhik-Geeks community',
			languages: [
				{
					name: 'Flask',
					iconifyClass: 'logos-flask',
				},
				{
					name: 'Python',
					iconifyClass: 'logos-python',
				},
				{
					name: 'HTML5',
					iconifyClass: 'logos-html-5',
				},
				{
					name: 'CSS3',
					iconifyClass: 'logos-css-3',
				},
				{
					name: 'MongoDB',
					iconifyClass: 'logos-mongodb-icon',
				},
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/abhigoyani/votechain',
					iconifyClass: 'ri:github-fill',
				},
			],
		},
		{
			id: '8',
			name: 'Swag Store',
			url: 'https://github.com/harikanani/e-commerce-frontend',
			description:
				'An E-commerce website built using MERN[Mongo, Express, React, Node] stack and we have also added stripe payment gateway integration [in test mode].',
			languages: [
				{
					name: 'ReactJS',
					iconifyClass: 'logos-react',
				},
				{
					name: 'NodeJS',
					iconifyClass: 'logos-nodejs',
				},
				{
					name: 'MedusaJS',
					iconifyClass: 'logos-medusa-icon',
				},
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/harikanani/e-commerce-frontend',
					iconifyClass: 'ri:github-fill',
				},
			],
		},
		{
			id: '9',
			name: 'node-blockchain',
			url: 'https://github.com/harikanani/node-blockchain',
			description:
				'A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).',
			languages: [
				{
					name: 'NodeJS',
					iconifyClass: 'logos-nodejs',
				},
				{
					name: 'TypeScript',
					iconifyClass: 'skill-icons:typescript',
				},
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/harikanani/node-blockchain',
					iconifyClass: 'ri:github-fill',
				},
			],
		},
		{
			id: '10',
			name: 'Know Me Well',
			url: 'https://github.com/harikanani/personal-portfolio',
			description:
				'A simple command line interface based quiz app to know more about me :).',
			languages: [
				{
					name: 'JavaScript',
					iconifyClass: 'logos-javascript',
				},
				{
					name: 'NodeJS',
					iconifyClass: 'logos-nodejs',
				},
				{
					name: 'Repl.it',
					iconifyClass: 'logos-replit-icon',
				},
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/harikanani/personal-portfolio',
					iconifyClass: 'ri:github-fill',
				},
			],
		},
		{
			id: '11',
			name: 'Bloggify',
			url: 'https://github.com/harikanani/Bloggify',
			description: 'A Simple REST API for Blog Application.',
			languages: [
				{
					name: 'NodeJS',
					iconifyClass: 'logos-nodejs',
				},
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/harikanani/Bloggify',
					iconifyClass: 'ri:github-fill',
				},
			],
		},
		{
			id: '12',
			name: 'Stargazzers',
			url: 'https://github.com/harikanani/stargazers',
			description: 'An Unofficial API for GitHub Repo Stars Count',
			languages: [
				{
					name: 'NodeJs',
					iconifyClass: 'logos-nodejs',
				},
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/harikanani/stargazers',
					iconifyClass: 'ri:github-fill',
				},
			],
		},
		{
			id: '13',
			name: 'GitHub Theme Portfolio',
			url: 'https://github.com/harikanani/harikanani.github.io',
			description:
				'A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.',
			languages: [
				{
					name: 'HTML5',
					iconifyClass: 'vscode-icons:file-type-html',
				},
				{
					name: 'CSS3',
					iconifyClass: 'vscode-icons:file-type-css',
				},
				{
					name: 'JavaScript',
					iconifyClass: 'logos-javascript',
				},
				{
					name: 'SCSS',
					iconifyClass: 'vscode-icons:file-type-scss2',
				},
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/harikanani/harikanani.github.io',
					iconifyClass: 'ri:github-fill',
				},
				{
					name: 'Live Demo',
					url: 'https://harikanani.github.io/',
					iconifyClass: 'mdi:web',
				},
			],
		},
		// {
		//   id: "6",
		//   name: "Automate Attendace",
		//   url: "https://github.com/harikanani/Node_Python",
		//   description: "Automation of Online Attendance using node js and python",
		//   languages: [
		//     {
		//       name: "JavaScript",
		//       iconifyClass: "logos-javascript",
		//     },
		//     {
		//       name: "Python",
		//       iconifyClass: "logos-python",
		//     },
		//   ],
		//   links: [
		//     {
		//       name: "Github",
		//       url: "",
		//       iconifyClass: "ri:github-fill",
		//     },
		//     {
		//       name: "Devfolio",
		//       url: "",
		//       iconifyClass: "ri:github-fill",
		//     },
		//   ],
		// },
		// {
		//   id: "7",
		//   name: "Automate Discord Bot",
		//   url: "https://github.com/harikanani/AutomateDiscordBot",
		//   description:
		//     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
		//   languages: [
		//     {
		//       name: "Python",
		//       iconifyClass: "logos-python",
		//     },
		//     {
		//       name: "Python Selenium",
		//       iconifyClass: "logos-selenium",
		//     },
		//     {
		//       name: "Chromium Browser",
		//       iconifyClass: "openmoji-chromium",
		//     },
		//   ],
		//   links: [
		//     {
		//       name: "Github",
		//       url: "",
		//       iconifyClass: "ri:github-fill",
		//     },
		//     {
		//       name: "Devfolio",
		//       url: "",
		//       iconifyClass: "ri:github-fill",
		//     },
		//   ],
		// },
		// {
		//   id: "8",
		//   name: "Flask Blog",
		//   url: "https://github.com/harikanani/flask_blog",
		//   description: "A Simple Blog Web Application made using Flask Framework",
		//   languages: [
		//     {
		//       name: "Python",
		//       iconifyClass: "logos-python",
		//     },
		//     {
		//       name: "Flask",
		//       iconifyClass: "cib-flask",
		//     },
		//     {
		//       name: "HTML5",
		//       iconifyClass: "vscode-icons:file-type-html",
		//     },
		//     {
		//       name: "CSS3",
		//       iconifyClass: "vscode-icons:file-type-css",
		//     },
		//   ],
		//   links: [
		//     {
		//       name: "Github",
		//       url: "",
		//       iconifyClass: "ri:github-fill",
		//     },
		//     {
		//       name: "Devfolio",
		//       url: "",
		//       iconifyClass: "ri:github-fill",
		//     },
		//   ],
		// },
		// {
		//   id: "9",
		//   name: "Netflix top series",
		//   url: "https://github.com/harikanani/netflix-top-series",
		//   description: "List of Top Netflix Series which is deployed to vercel.",
		//   languages: [
		//     {
		//       name: "JavaScript",
		//       iconifyClass: "logos-javascript",
		//     },
		//     {
		//       name: "ReactJS",
		//       iconifyClass: "logos-react",
		//     },
		//     {
		//       name: "HTML5",
		//       iconifyClass: "logos-html-5",
		//     },
		//     {
		//       name: "CSS3",
		//       iconifyClass: "logos-css-3",
		//     },
		//   ],
		//   links: [
		//     {
		//       name: "Github",
		//       url: "",
		//       iconifyClass: "ri:github-fill",
		//     },
		//     {
		//       name: "Devfolio",
		//       url: "",
		//       iconifyClass: "ri:github-fill",
		//     },
		//   ],
		// },
		{
			id: '10',
			name: 'COVID-19 Tracker',
			url: 'https://github.com/harikanani/Covid19TrackerReact',
			description:
				'Simple Covid-19 Tracker made using React and deployed to Vercel.',
			languages: [
				{
					name: 'JavaScript',
					iconifyClass: 'logos-javascript',
				},
				{
					name: 'ReactJS',
					iconifyClass: 'logos-react',
				},
				{
					name: 'HTML5',
					iconifyClass: 'logos-html-5',
				},
				{
					name: 'CSS3',
					iconifyClass: 'logos-css-3',
				},
			],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/harikanani/Covid19TrackerReact',
					iconifyClass: 'ri:github-fill',
				},
			],
		},
		// {
		//   id: "11",
		//   name: "Food Order Static Website",
		//   url: "https://github.com/harikanani/food-order-website",
		//   description:
		//     "A simple static website related to food restaurants service. this is reasponsive as well.",
		//   languages: [
		//     {
		//       name: "HTML5",
		//       iconifyClass: "logos-html-5",
		//     },
		//     {
		//       name: "CSS3",
		//       iconifyClass: "logos-css-3",
		//     },
		//     {
		//       name: "JavaScript",
		//       iconifyClass: "logos-javascript",
		//     },
		//     {
		//       name: "PHP",
		//       iconifyClass: "logos-php",
		//     },
		//   ],
		//   links: [
		//     {
		//       name: "Github",
		//       url: "",
		//       iconifyClass: "ri:github-fill",
		//     },
		//     {
		//       name: "Devfolio",
		//       url: "",
		//       iconifyClass: "ri:github-fill",
		//     },
		//   ],
		// },
		// {
		//   id: "12",
		//   name: "NFT Launchpad",
		//   url: "https://deliquescent-cents.000webhostapp.com/",
		//   description: "NFT Launchpad crypto site portfolio",
		//   languages: [
		//     {
		//       name: "HTML5",
		//       iconifyClass: "logos-html-5",
		//     },
		//     {
		//       name: "CSS3",
		//       iconifyClass: "logos-css-3",
		//     },
		//     {
		//       name: "JavaScript",
		//       iconifyClass: "logos-javascript",
		//     },
		//     {
		//       name: "ReactJS",
		//       iconifyClass: "logos-react",
		//     },
		//   ],
		//   links: [
		//     {
		//       name: "Github",
		//       url: "https://github.com/harikanani/nft-launchpad",
		//       iconifyClass: "ri:github-fill",
		//     },
		//   ],
		// },
	],
};

export {
	settings,
	greeting,
	socialMediaLinks,
	skills,
	degrees,
	certifications,
	experience,
	projectsHeader,
	contactPageData,
	projects,
};
