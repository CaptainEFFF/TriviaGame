

var trivia = [
    {question: 'What type of jet did Maverick and Goose pilot?',
     answers:["F-18", "F-5e", "F-14", "Mig-28"],
     correctAnswer: "F-14",
     factoids:[
     "The F-18 the modern upgraded version of the F-14 and is still in use today.",
     "The Northrop F-5e is the model of plane used to represent the fictional MiG-28s in the movie",
     "Correct! The F-14 was the main jet seen in the movie, although piloted by professionals real actors were often in the rear seat.",
     "The MiG-28 is a fictional aircraft and were actually Nortrop F-5e",
     ],
     Image: ['assets/image/f18.jpg', 'assets/image/f5e.jpg','assets/image/f14.jpeg','assets/image/mig28.jpg']
    },
    {question:'What is the Callsign for Marvericks Jet?',
     answers:["Knight Rider", "Ghostrider", "Johny Blaze", "Space Ghost"],
     correctAnswer: "Ghostrider",
     factoids:[
     "Thats a negative Ghostrider, Knight Rider is the popular tv series staring David Hasselfoff",
     "Thats a positive Ghostrider, permission to buzz the tower",
     "Thats a negative Ghostrider, Johny Blaze is the identity to Marvels Ghost Rider",
     "Thats a negative Ghostrider, Space Ghost is a cartoon talk show host, you nerd",
     ],
     Image: ['assets/image/KnightRider', 'assets/image/ghost.jpeg','assets/image/ghostrider','assets/image/spaceghost.jpeg']

    },
    {question:'What is the corret quote from the movie?',
     answers:["It needs more power!", "I wanna go fast!", "Gotta go fast!", "I feel the need, the need for speed!" ],
     correctAnswer: "I feel the need, the need for speed!",
     factoids:[
     "Top Gear's Jeremy Clarkson is well known for his obsession with speed and POWER ",
     "Help me Jesus! Help me Jewish God! Help me Allah! Help me Tom Cruise! Tom Cruise use your witchcraft on me to get the fire off me! Help me Oprah Winfrey!” — Ricky Bobby Talladega Nights",
     "You're Too Slow!",
     "Feel the need.",
     ],
     Image: ['assets/image/morepower.jpg', 'assets/image/wannagofast','assets/image/Gotta_go_fast.png','assets/image/theneedforspeed.gif']

    },
    {question:'True or False| The custom F-5e jets called "MiG-28s" in the film were kept as Top Gun training jets?',
     answers:["True", "False"],
     correctAnswer: "True",
     factoids: [
     "The Top Gun School continued to use them as the 'enemy' jets just like in the movie",
     "The Top Gun School continued to use them as the 'enemy' jets just like in the movie",
     ],
     Image: ['assets/image/blackbunny.jpg', 'assets/image/blackbunny.jpg']

    },
    {question:'Who performed Top Guns iconic theme "Danger Zone"?',
     answers:["ToTo","Kenny Loggins", "Tom Whitlock", "Sterling Archer"],
     correctAnswer: "Kenny Loggins",
     factoids:[
     "ToTo was apporached to perfom the song but turned it down due to other reasons",
     "He actually refused to do it on several occasions but was finally conviced by the director Tony Scott",
     "Although he didn't perform the song he did write it specifically for the movie.",
     "You're in the Danger Zone",
     ],
     Image: ['assets/image/toto.jpg', 'assets/image/kennyloggins.jpeg','assets/image/tomwhitlock.jpeg','assets/image/archer.jpg']

    },
    {question:'True or False| Tom Cruise was an expert motocycle rider prior to making the movie?',
     answers:["True","False"],
     correctAnswer: "False",
     factoids:[
    "He actually went to House of Motorcycles in El Cajon, California to learn. They taught him in the parking lot of their shop.",
    "He actually went to House of Motorcycles in El Cajon, California to learn. They taught him in the parking lot of their shop.",
     ],
     Image: ['assets/image/motorcycle.jpg', 'assets/image/motorcycle.jpg']

    },
    {question:'Which callsign isnt from Top Gun?',
     answers:["Merlin", "Mailman", "Jester", "Iceman"],
     correctAnswer: "Mailman",
     factoids:[
     "Merlin was Cougars R.I.O. and later Mavericks",
     "Mailman is from the Top Gun parody Hot Shots",
     "Jester was one of the Top Gun intructors.",
     "Iceman is Mavericks rival throughout their training at Top Gun",
     ],
     Image: ['assets/image/Merlin.jpg', 'assets/image/mailman.jpg','assets/image/jester.jpg','assets/image/iceman.jpg']

    },
    {question:'What is the name of the aircraft carrier seen in the movie?',
     answers:["USS Midway 41", "USS Enterprise 1701", "USS Enterprise 65", "USS Geral R Ford 78"],
     correctAnswer: "USS Enterprise 65",
     factoids:[
     "The Midway is now a decomished carrier docked in San Diego and used as a Navy/Airforce museum.",
     "The Enterprise 1701 is the name of the space craft used in Star Trek",
     "Only the opening and closing sequences show the carrier from affar, the director Tony Scott wrote a check onboard the ship for the captain to get arial footage.",
     "The Gerarld R Ford is a brand new carrier that is one of the longest and most expensive naval vessel in history",
     ],
     Image: ['assets/image/midway.jpg', 'assets/image/startrek.jpg','assets/image/enterprise65.jpg','assets/image/geraldford.jpg']

    },
    {question:'True or False| The Top Gun school imposes a fine on any trainee or staff member that quotes the movie?',
     answers:["True", "False"],
     correctAnswer: "True",
     factiods:[
     "The fine is only $5...per quote.",
     "The fine is only $5...per quote.",
     ],
     Image: ['assets/image/ego.jpg', 'assets/image/ego.jpg']

    },
    {question:'Whos your wingman?',
     answers:["Maverick", "Goose", "Iceman", "Cougar"],
     correctAnswer: "Maverick",
     factoids:[
     "No, you're his wingman",
     "Sadly Goose can't be your wingman, but its the thought that counts",
     "You can be my wingman anytime!",
     "Really, you went with Cougar?",
     ],
     Image: ['assets/image/maverick.jpg', 'assets/image/goose.png','assets/image/iceman2.png','assets/image/cougar.jpg']

    },
    
]

var timer = 15;
var correct = 0;
var wrong = 0;
var answered = 0;
var x = 0;



function displayQuestion(){
    var q = trivia[x].question
    console.log(q);
    $('#trivia').empty();
    $('#trivia').html("<p>" + q + "</p>");
    var a = trivia[x].answers
    for (var i = 0; i < a.length; i++){
        console.log(a[i]);
        btn = $('<button>');
        btn.html(a[i]);
        btn.addClass('btn btn-primary btn-lg answer');
        $('#trivia').append(btn);
    }
}




// $(".answer").on("click",function answerClicked(){
    function checker(){
        console.log("Clicked")
        console.log($(this).text());
        console.log(trivia[x].correctAnswer)
        
        if ($(this).text() === trivia[x].correctAnswer){
            console.log("Correct!");
            console.log(trivia[x].answers.indexOf($(this).text()));
            var index = trivia[x].answers.indexOf($(this).text())
            console.log(trivia[x].factoids[index]);
            correct ++;
            $('#trivia').html("<p>" + trivia[x].factoids[index] + "</p> </br>");
            var photo = $('<img>')
            $(photo).attr("src",trivia[x].Image[index]);
            $(photo).addClass("photo");
            $('#trivia').append(photo);
            btn = $('<button>');
            btn.html("Next");
            btn.addClass('btn btn-primary btn-lg');
            $('#trivia').append(btn);
            x++;
        }
        
        else{
            console.log("Wrong");
            console.log(trivia[x].answers.indexOf($(this).text()));
            var index = trivia[x].answers.indexOf($(this).text())
            console.log(trivia[x].factoids[index]);
            wrong ++;
            $('#trivia').html("<p>" + trivia[x].factoids[index] + "</p>");
            var photo = $('<img>')
            $(photo).attr("src",trivia[x].Image[index]);
            $(photo).addClass("photo");
            $('#trivia').append(photo);
            x++;
            
        }
    };
    $(".start").on("click",function(){
        displayQuestion()
    });
    
    $(document).on("click",".answer",checker());
    
    
    