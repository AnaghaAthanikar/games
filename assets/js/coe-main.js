jQuery.fn.center = function(parent) {
    if (parent) {
        parent = this.parent();
    } else {
        parent = window;
    }
    this.css({
        "position": "absolute",
        "zIndex":   2,
        "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
        "left":((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
    });
    return this;
};
var launchpad, mainPage,leftPanel, switches, opacityState= 0,count= 0,quetime= 0,percentage= 0,quesbank=[];
var quelength=questionbank.questions.length, qno=0;

$(function(){
    initGame();
});

function initGame() {
    launchpad = new Environment("launchpad");
    mainPage = new Environment("mainPage");
    victoryState = new Environment("victoryState");
    processbar = new Environment("processbar");
    loadConfig(launchpad);
    loadConfig(mainPage);
    loadConfig(victoryState);
    loadConfig(processbar);
    initQuiz();
    $("img").mousedown(function(){
        return false;
    });
//    $('#start span').center(true);

    Question.all=shuffle(Question.all);
    for(var i=0; i<Question.all.length; i++)
        quesbank.push(Question.all[i]);

    initProgressBar();



//    $('#start span').center(true);
    $("#start").unbind('click').on("click", function() {
        $("#launchpad").fadeOut();
        $("#mainPage").fadeIn();
        paneldisplay();
    });
}

function paneldisplay() {

    $("#processbar").show();
    console.log("time"+quetime);

    if (quesbank.length==0) {
        $("#victoryState").show();
        victoryState.setState("default");
        $("#victoryState").append("<div class='victory-txt'>" + "You have successfully completed " + percentage.toFixed(2) + "% of game" + "</div>");
        $('.victory-txt').center(true);
    }
    else {
        var question = quesbank.pop();
        qno++;
        console.log(question);

        $("#quiz").fadeIn(500,function(){
            Question.showQuizPanel(quiz,question);
            for(i in question.options) {
                if(question.options[i].name=="" || question.options[i].name==undefined)
                    $("#option-block-" + i).hide();
            }
        });

        $(question).unbind('answered').on('answered', function (e, data) {
            processAnswer(data);
        });
    }
}

function processAnswer(data) {
    quetime++;
    if (data.correct === "true") {
        count++;
        processbar["barloc" + qno].setState("correct");
//        console.log("count" + count);
        percentage = (count / quelength) * 100;
        paneldisplay();
    }
    else {
        processbar["barloc" + qno].setState("incorrect");
        paneldisplay();
    }
}

function initProgressBar() {
    for(var i=1; i<=quelength; i++)
        processbar.addLocation("barloc"+i, i);

    for(var i=1; i<=quelength; i++) {
        processbar["barloc" + i].defineState("correct", "<div class='pgbd correct'></div>");
        processbar["barloc" + i].defineState("incorrect", "<div class='pgbd incorrect'></div>");
        processbar["barloc" + i].defineState("inactive", "<div class='pgbd inactive'></div>");
        processbar["barloc" + i].setState("inactive");
        $("#barloc" + i).css({width: Math.floor(100/quelength) + "%", position: "relative", display:"inline-block"})
    }

}

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
