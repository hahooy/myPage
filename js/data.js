/* ------------------------------------
Data is stored in JSON objects. In this way
the website doesn't rely on DB and therefore
it can be hosted statically.
---------------------------------------- */


var resumeData = {
        bio: {
            name: "Yongzheng Huang",
            role: "Masters student majoring in Computer Science",
            contacts: {
                email: "huangyongzheng@wustl.edu",
                mobile: "(540) 239-8537",
                github: "https://github.com/hahooy",
                codepen: "http://codepen.io/hahooy",
                linkedin: "https://www.linkedin.com/in/yongzheng-huang-783aa399",
                location: "St Louis",
                resume: "https://drive.google.com/file/d/0B1uHglPYIL0yd1lmN1RfTktvalk/view?usp=sharing"
            },
            bioPic: "images/me-circle.png",
            welcomeMessage: "Welcome to my website! " +
                            "I am a software development enthusiast with experience in " +
                            "full-stack web and mobile application development. I am currently " +
                            "living in St. Louis and pursuing my Computer Science Masters degree " +
                            "at Washington University in St Louis. You might " +
                            "find out what I've been up to on this website (only if I " +
                            "am diligent enough updating it, which usually is not the case :-).) "
        },


        stack: {
            "categories": ["language", "web front end", "web framework", "database", "cloud",
                           "mobile", "data analytics", "agile"],
            "proficiencies": ["Proficient", "Familiar", "Basic Understanding"],
            "skills": [
                {'category': 'language', 'proficiency': 'Proficient', 'technologies': ['Python', 'Java', 'JavaScript', 'Swift']},
                {'category': 'language', 'proficiency': 'Familiar', 'technologies': ['C']},
                {'category': 'language', 'proficiency': 'Basic Understanding', 'technologies': ['C++', 'Standard ML', 'Perl']},
                {'category': 'web front end', 'proficiency': 'Proficient', 'technologies': ['HTML', 'CSS', 'Bootstrap', 'jQuery']},
                {'category': 'web front end', 'proficiency': 'Familiar', 'technologies': ['jade', 'handlebars']},
                {'category': 'web front end', 'proficiency': 'Basic Understanding', 'technologies': ['AngularJS', 'Knockout']},
                {'category': 'web framework', 'proficiency': 'Proficient', 'technologies': ['Django']},
                {'category': 'web framework', 'proficiency': 'Familiar', 'technologies': ['Node.js']},
                {'category': 'database', 'proficiency': 'Proficient', 'technologies': ['SQL', 'PostgreSQL']},
                {'category': 'database', 'proficiency': 'Familiar', 'technologies': ['DynamoDB']},
                {'category': 'database', 'proficiency': 'Basic Understanding', 'technologies': ['Firebase', 'MongoDB']},
                {'category': 'cloud', 'proficiency': 'Proficient', 'technologies': ['EC2', 'CloudWatch', 'S3', 'boto']},
                {'category': 'cloud', 'proficiency': 'Familiar', 'technologies': ['Heroku']},
                {'category': 'mobile', 'proficiency': 'Proficient', 'technologies': ['iOS development in Swift']},
                {'category': 'data analytics', 'proficiency': 'Familiar', 'technologies': ['SciPy Stack', 'Hadoop']},
                {'category': 'agile', 'proficiency': 'Proficient', 'technologies': ['Scrum']},
                {'category': 'agile', 'proficiency': 'Familiar', 'technologies': ['Kanban']}
            ]
        },


        schools:
            [
                {
                    name: "WashU",
                    city: "St. Louis, MO",
                    degree: "M.Eng.",
                    majors: "Computer Science and Engineering",
                    date: "Expected May 2017",
                    url: "http://wustl.edu",
                    description: ""
                },
                {
                    name: "Virginia Tech",
                    city: "Blacksburg, VA",
                    degree: "M.S.",
                    majors: "Chemistry",
                    date: "May 2015",
                    url: "https://www.vt.edu",
                    description: ""
                },
                {
                    name: "Chongqing University",
                    city: "Chongqing, China",
                    degree: "B.S.",
                    majors: "Applied Chemistry",
                    date: "June 2012",
                    url: "http://international.cqu.edu.cn",
                    description: ""
                }
            ],


        jobs:
            [
                {
                    employer: "Service Management Group",
                    website: "http://www.smg.com/",
                    title: "Software Engineering Intern",
                    location: "Boston, MA",
                    date: "Jun 2016 - Sep 2016",
                    description: "I worked as an intern at SMG's boston office, which is focusing on understanding customer behaviors using a big data solution. I was involved in a couple of projects and working collaboratively with senior software engineers in a fast paced, agile environment. I created new features to improve the back-end visit detection functionality for SurveyMini mobile app. I also developed web scrapers and used third-party APIs to mine the data we need for the backend system. To improve the reliability of back-end infrastructure, I was involved in debugging programs and developing utility scripts. I also implemented a dashboard web application to provide information to customer services."
                },
                {
                    employer: "Monsanto",
                    website: "http://www.monsanto.com/",
                    title: "Software Engineering Co-Op",
                    location: "St. Louis, MO",
                    date: "Jan 2016 - May 2016",
                    description: "I was working on the enterprise identity management team in Monsanto. One major project that I worked on was to develope a node.js based web application for employees' information lookup. I made significant contribution to the project and pushed the app to beta test stage by the time I left. A JavaScript library we developed for this app was published to npm as a open source package. Another project I worked on was to migrate employees to a new identity access management system. I implemented a Java program to automate the migration process (if I could do this over again I would develope it in a scripting language like Python...)."
                },
                {
                    employer: "Virginia Tech",
                    website: "https://www.vt.edu/",
                    title: "Teaching Assistant",
                    location: "Blacksburg, VA",
                    date: "Aug 2013 - May 2015",
                    description: "Gave lectures to undergraduate students in General Chemistry lab and Physical Chemistry lab."
                }
            ],


        projects:
            [
                {
                    title: "Angler Companian",
                    dates: "2016",
                    description: "Angler Companion is a photo and location sharing iOS social app for anglers. Featuring channels, real-time photo and location sharing, length measurement on photo and more. Recording your fishing spots and sharing your exciting moments have never been this easy!",
                    image: "images/locatorcam.jpg",
                    url: "http://hahooy.github.io/LocatorCam/"
                },
                {
                    title: "Amber",
                    dates: "2016",
                    description: "Amber is a web application I developed in Monsanto for employees’ information lookup. I made significant contribution to this site's user authentication, front-end functionalities and back-end data storage.",
                    image: "images/amber.png",
                    url: "https://radiant-citadel-90691.herokuapp.com"
                },
                {
                    title: "passport-ping-oauth2",
                    dates: "2016",
                    description: "I contributed to this open source project when I was an Co-Op in Monsanto. This npm library lets you authenticate using PingFederate's OAuth2 service in your node.js applications. You can find out more details about this project by clicking on the image below.",
                    image: "images/passport-ping-oauth2.png",
                    url: "https://www.npmjs.com/package/passport-ping-oauth2"
                },
                {
                    title: "UniSound",
                    dates: "2015",
                    description: "<strong>Awarded AT&T Prize for Best Mobile App at WUHack 2015</strong><br/>A social jukebox web app allowing users to share music to a group speaker system.",
                    image: "images/blackSquareLogo.png",
                    url: "http://hahooy.github.io/wuhack2015/"
                },
                {
                    title: "Movie Recommendation System",
                    dates: "2015",
                    description: "A movie recommendation system for predicting movie ratings of given users. The recommendation system is based on an item-item collabrative filtering algorithm implemented in Hadoop MapReduce. The training data set contains 3.25 million movie ratings provided by Netflix. How good is the algorithm? The root mean square error of the prediction is 0.92, which is the best among the class of 40+ students.",
                    image: "images/movie_ratings.png",
                    url: "https://github.com/hahooy/Item-Based-CF-Netflix/"
                },
                {
                    title: "Tic-Tac-Toe Online",
                    dates: "2015",
                    description: "Yet another tic tac toe? This is a somewhat arguably and debatable more advanced tic tac toe because it uses node.js and socket.io to enable real-time game states sharing among players. In other word, this is an online version! Simply share the link with your opponent and you are good to go!",
                    image: "images/tictactoe.png",
                    url: "http://tic-tac-toe-online.herokuapp.com"
                },
                {
                    title: "Promodoro Clock",
                    dates: "2015",
                    description: "",
                    image: "images/timer.png",
                    url: "http://codepen.io/hahooy/full/waQXav/"
                },
                {
                    title: "Local Weather App",
                    dates: "2015",
                    description: "",
                    image: "images/localWeather.png",
                    url: "http://codepen.io/hahooy/full/vOVoyj/"
                },
                {
                    title: "Catch Goblins",
                    dates: "2015",
                    description: "Ever want to catch some goblins? Try out this HTML5 game!",
                    image: "images/catchGoblins.png",
                    url: "http://hahooy.github.io/simple_canvas_game/"
                }
            ]
};