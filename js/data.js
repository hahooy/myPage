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
                    name: "Washington University in St. Louis",
                    city: "St. Louis, MO",
                    degree: "M.Eng.",
                    majors: "Computer Science and Engineering",
                    date: "Expected Dec 2016",
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
                    description: "Created new features to improve the back-end visit detection functionality for SurveyMini mobile app."
                },
                {
                    employer: "Monsanto",
                    website: "http://www.monsanto.com/",
                    title: "Software Engineering Co-Op",
                    location: "St. Louis, MO",
                    date: "Jan 2016 - May 2016",
                    description: "Developed a Java program to automate Ping ID administration."
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
                    title: "UniSound",
                    dates: "2015",
                    description: "<strong>Awarded AT&T Prize for Best Mobile App at WUHack 2015</strong>",
                    image: "images/blackSquareLogo.png",
                    url: "http://hahooy.github.io/wuhack2015/"
                },
                {
                    title: "Tic-Tac-Toe Online",
                    dates: "2015",
                    description: "",
                    image: "images/tictactoe.png",
                    url: "http://tic-tac-toe-online.herokuapp.com"
                },
                {
                    title: "Web Calculator",
                    dates: "2015",
                    description: "",
                    image: "images/calculator.png",
                    url: "http://codepen.io/hahooy/full/zGemeP/"
                },
                {
                    title: "Random Quote Generator",
                    dates: "2015",
                    description: "",
                    image: "images/randomQuoteGen.png",
                    url: "http://codepen.io/hahooy/full/gpdWLM/"
                },
                {
                    title: "Cat Clicker",
                    dates: "2015",
                    description: "",
                    image: "images/catClicker.png",
                    url: "http://hahooy.github.io/catClicker/"
                },
                {
                    title: "Catch Goblins",
                    dates: "2015",
                    description: "",
                    image: "images/catchGoblins.png",
                    url: "http://hahooy.github.io/simple_canvas_game/"
                },
                {
                    title: "Arcade Game",
                    dates: "2015",
                    description: "",
                    image: "images/arcadeGame.png",
                    url: "http://hahooy.github.io/frontend-nanodegree-arcade-game/"
                }
            ]
};