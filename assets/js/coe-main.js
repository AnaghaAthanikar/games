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
        "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
    });
    return this;
};
var launchpad, mainPage,leftPanel, switches, opacityState= 1,quesbank=[],count=0;
$(function(){

   initGame();

});
function initGame() {
    launchpad = new Environment("launchpad");
    mainPage = new Environment("mainPage");
    leftPanel = new Environment("leftPanel");
    switches = new Environment("switches");


    loadConfig(launchpad);
    loadConfig(mainPage);
    loadConfig(leftPanel);
    loadConfig(switches);
    initQuiz();


    $("img").mousedown(function(){
        return false;
    });

    $("#start span").unbind('click').on("click", function() {
        $("#launchpad").fadeOut();
        $("#mainPage").fadeIn();
        paneldisplay();
    });


}

function paneldisplay() {
    $("#leftPanel").show();
    $("#statements").show();
    $("#switches").show();
    $("#statement-area").show();


    quesbank=shuffle(Question.getAllByWeight(1));
    leftPanel.statuspanel.setState("default");
    leftPanel.smokes.setState("default");
    playQuiz();

}


function playQuiz() {
    $("#switches").removeClass("no-click");
    for(var i=1; i<=4; i++) {
        switches["switch" + i].setState("true");
    }

    var dataset1 = [];
    var dataset2 = [];


    var question=quesbank.pop();

    for(i in question.options)
        dataset1.push(question.options[i].correct.toString());

    $("#quiz").fadeIn(500,function(){
        Question.showQuizPanel(quiz,question);
    });

    $(question).on('answered', function(e, data) {
        dataset2 = [];

        for(var i=0; i<switches.locations.length; i++)
            dataset2.push(switches["switch" + (i+1)].getState());

        var cagemargin=$("#smokes img").css("marginTop");
        cagemargin=parseInt(cagemargin.split('px')[0]);
        var switchobj = switches["switch" + (data.optionId+1)];
        if(switchobj.getState() == (data.correct).toString()) {

            cagemargin+=33.20 ;
        }
        else {
            cagemargin-=33.20 ;
        }





        $("#smokes img").css("marginTop", cagemargin + "px")

        if(dataset1.join()==dataset2.join())
        {
            count++;
            if(count==3) {
                leftPanel.statuspanel.setState("victory");
                $("#switches").addClass("no-click");
            }
            else
                $("#statement-area, #options, #switches").animate({
                        opacity: 0
                    },
                    {
                        start: function() { $("#switches").addClass("no-click");},
                        complete: function() {
                            $(this).animate({
                                opacity: 1
                        },
                            {
                                start: playQuiz,
                                complete: function() {
                                        $("#switches").removeClass("no-click");
                                            },
                                duration: 600
                            });
                        },
                        duration: 600
                    });
        }
    });
    $("#switches div").unbind('click').on("click",function(){
        var switchobj = switches[$(this).attr("id")];
        if(switchobj.getState()=="true")
            switchobj.setState("false");
        else
            switchobj.setState("true");

        var index = $(this).index();
        $("#option-block-" + index).trigger("click");
    });

}

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
