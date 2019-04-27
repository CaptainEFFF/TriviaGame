

var trivia = [
    {question: 'What type of jet did Maverick and Goose pilot?',
     answers:["F-18", "F-5e", "F-14", "Mig-28"],
     correctAnswer: "F-14",
     factoids:[
     "Wrong! The F-18 the modern upgraded version of the F-14 and is still in use today.",
     "Wrong! The Northrop F-5e is the model of plane used to represent the fictional MiG-28s in the movie",
     "Correct! The F-14 was the main jet seen in the movie, although piloted by professionals real actors were often in the rear seat.",
     "Wrong! The MiG-28 is a fictional aircraft and were actually Nortrop F-5e",
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
     Image: ['assets/image/KnightRider.jpg', 'assets/image/ghost.jpeg','assets/image/ghostrider.jpg','assets/image/spaceghost.jpeg']

    },
    {question:'What is the corret quote from the movie?',
     answers:["It needs more power!", "I wanna go fast!", "Gotta go fast!", "I feel the need, the need for speed!" ],
     correctAnswer: "I feel the need, the need for speed!",
     factoids:[
     "Wrong! Top Gear's Jeremy Clarkson is well known for his obsession with speed and POWER ",
     "Wrong! Help me Jesus! Help me Jewish God! Help me Allah! Help me Tom Cruise! Tom Cruise use your witchcraft on me to get the fire off me! Help me Oprah Winfrey!” — Ricky Bobby Talladega Nights",
     "Wrong! You're Too Slow!",
     "Correct! Feel the Need!",
     ],
     Image: ['assets/image/morepower.jpg', 'assets/image/wannagofast.jpg','assets/image/Gotta_go_fast.png','assets/image/theneedforspeed.gif']

    },
    {question:'True or False| The custom F-5e jets called "MiG-28s" in the film were kept as Top Gun training jets?',
     answers:["True", "False"],
     correctAnswer: "True",
     factoids: [
     "Correct! The Top Gun School continued to use them as the 'enemy' jets just like in the movie",
     "Wrong! The Top Gun School continued to use them as the 'enemy' jets just like in the movie",
     ],
     Image: ['assets/image/blackbunny.jpg', 'assets/image/blackbunny.jpg']

    },
    {question:'Who performed Top Guns iconic theme "Danger Zone"?',
     answers:["ToTo","Kenny Loggins", "Tom Whitlock", "Sterling Archer"],
     correctAnswer: "Kenny Loggins",
     factoids:[
     "Wrong! ToTo was apporached to perfom the song but turned it down due to other reasons",
     "Correct! He actually refused to do it on several occasions but was finally conviced by the director Tony Scott",
     "Wrong! Although he didn't perform the song he did write it specifically for the movie.",
     "Wrong! You're in the Danger Zone",
     ],
     Image: ['assets/image/toto.jpg', 'assets/image/kennyloggins.jpeg','assets/image/tomwhitlock.jpeg','assets/image/archer.jpg']

    },
    {question:'True or False| Tom Cruise was an expert motocycle rider prior to making the movie?',
     answers:["True","False"],
     correctAnswer: "False",
     factoids:[
    "Wrong! He actually went to House of Motorcycles in El Cajon, California to learn. They taught him in the parking lot of their shop.",
    "Correct! He actually went to House of Motorcycles in El Cajon, California to learn. They taught him in the parking lot of their shop.",
     ],
     Image: ['assets/image/motocycle.jpg', 'assets/image/motocycle.jpg']

    },
    {question:'Which callsign isnt from Top Gun?',
     answers:["Merlin", "Mailman", "Jester", "Iceman"],
     correctAnswer: "Mailman",
     factoids:[
     "Wrong! Merlin was Cougars R.I.O. and later Mavericks",
     "Correct! Mailman is from the Top Gun parody Hot Shots",
     "Wrong! Jester was one of the Top Gun intructors.",
     "Wrong! Iceman is Mavericks rival throughout their training at Top Gun",
     ],
     Image: ['assets/image/Merlin.jpg', 'assets/image/mailman.jpg','assets/image/jester.jpg','assets/image/iceman.jpg']

    },
    {question:'What is the name of the aircraft carrier seen in the movie?',
     answers:["USS Midway 41", "USS Enterprise 1701", "USS Enterprise 65", "USS Geral R Ford 78"],
     correctAnswer: "USS Enterprise 65",
     factoids:[
     "Wrong! The Midway is now a decomished carrier docked in San Diego and used as a Navy/Airforce museum.",
     "Wrong! The Enterprise 1701 is the name of the space craft used in Star Trek",
     "Correct! Only the opening and closing sequences show the carrier from affar, the director Tony Scott wrote a check onboard the ship for the captain to get arial footage.",
     "Wrong! The Gerarld R Ford is a brand new carrier that is one of the longest and most expensive naval vessel in history",
     ],
     Image: ['assets/image/midway.jpg', 'assets/image/startrek.jpg','assets/image/enterprise65.jpg','assets/image/geraldford.jpg']

    },
    {question:'True or False| The Top Gun school imposes a fine on any trainee or staff member that quotes the movie?',
     answers:["True", "False"],
     correctAnswer: "True",
     factoids:[
     "Correct! Though its a small fine thats only $5...per quote.",
     "Wrong! They fine $5 per quote.",
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

var timer = 10;
var time;
var correct = 0;
var wrong = 0;
var missed = 0;
var timerGoing = false;
var x = 0;


// Experimented with shuffleing the array for a random order, couldn't get it to work though.
// function shuffle(){
//     for(var i = trivia.Length -1 ; i > 0 ; i--){
//         var j = Math.floor(Math.random()*(i+1));
//         [trivia[i],trivia[j]]=[trivia[j],trivia[i]];
//     }
//     console.log(trivia)
// }

function timerStart(){

    if(!timerGoing){
    time = setInterval(timed,1000)
    timerGoing = true;
    }

}

function timed(){
    $("#time").html("<h1> Time: " + timer + "</h1>")
    timer --;

    if(timer < 0){
        timerStop();
        $("#trivia").empty();
        $('#trivia').html("<h1> Missed That One! </h1>");
        var index = trivia[x].answers.indexOf(trivia[x].correctAnswer);
        $('#trivia').append("<h3>" + trivia[x].factoids[index] + "</h3> </br>");
        var photo = $('<img>')
        $(photo).attr("src",trivia[x].Image[index]);
        $(photo).addClass("photo");
        $('#trivia').append(photo);
        setTimeout(displayQuestion,5000);
        x++;
        missed++;
    }
}

function timerStop(){
    timerGoing = false;
    timer = 10;
    clearInterval(time);
}


function resetGame(){
    $('#trivia').empty();
    $('#trivia').html("<h3> There are 10 questions and you will have 10 seconds each to answer them all, can you get all 10 right?</h3>");
    btn = $('</br> </br> <button>');
    btn.html("Start");
    btn.addClass('btn btn-primary btn-lg start');
    $('#trivia').append(btn);
    correct = 0;
    wrong = 0;
    missed = 0;
    x = 0;


}


function displayQuestion(){

    $("#logo").height(100);
    $("#logo").width('50%');
   
   if(x===10){
    $('#trivia').empty();
    $('#trivia').html("<h1> You got " + correct + " correct.</h1>");
    $('#trivia').append("<h1> You got " + wrong + " wrong.</h1>");
    $('#trivia').append("<h1> You missed " + missed + " questions.</h1>");
    btn = $('</br> </br> <button>');
    btn.html("Play Again?");
    btn.addClass('btn btn-primary btn-lg reset');
    $('#trivia').append(btn);
   }
   
   
   else{
    var q = trivia[x].question
    timerStart();
    $('#trivia').empty();
    $('#trivia').html("<h3>" + q + "</h3>");
    var a = trivia[x].answers
    for (var i = 0; i < a.length; i++){
        btn = $('<button>');
        btn.html(a[i]);
        btn.addClass('btn btn-primary btn-lg answer');
        btn.attr("data-name", a[i]);
        $('#trivia').append(btn);
    }
   }   
}




// $(".answer").on("click",function answerClicked(){
    function checker(){
        var clickedButton = $(this).attr("data-name")
       
        if ($(this).attr("data-name") === trivia[x].correctAnswer){
            timerStop();
            var index = trivia[x].answers.indexOf($(this).text())
            correct ++;
            $('#trivia').html("<h3>" + trivia[x].factoids[index] + "</h3> </br>");
            var photo = $('<img>')
            $(photo).attr("src",trivia[x].Image[index]);
            $(photo).addClass("photo");
            $('#trivia').append(photo);
            setTimeout(displayQuestion,5000);
            x++;
        }
        
        else{
            timerStop();
            var index = trivia[x].answers.indexOf($(this).text())
            wrong ++;
            $('#trivia').html("<h3>" + trivia[x].factoids[index] + "</h3>");
            var photo = $('<img>')
            $(photo).attr("src",trivia[x].Image[index]);
            $(photo).addClass("photo");
            $('#trivia').append(photo);
            setTimeout(displayQuestion,5000);
            x++;
            
        }
    };
    $(".start").on("click",function(){
        displayQuestion();
    });
    
    $(document).on("click",".answer",checker);
    $(document).on("click",".reset",resetGame,);
    $(document).on("click",".start",displayQuestion,);
    
    
    