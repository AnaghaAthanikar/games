var config = {};

config.initMana = 0;
config.initPower = 0;

config.launchpad = {
    type: "environment",
    states: [
        {name: "default", representation: "<img src='assets/img/background_pg01.jpg'/>"}
    ],
    locations: [
        {name: "instructions", states: [
            {name: "default", representation: " "}
        ]},
        {name: "start", states: [
            {name: "start-btn", representation: "<img src='assets/img/start_button.png'><span>START!</span>"}
        ]}
    ]
};

config.mainPage = {
    type: "environment",
    states: [
        {
            name: "default",
            representation: "<img id='mainPageBg' src='assets/img/caves.jpg'/>"
        }
    ]
};

config.leftPanel = {
    type: "environment",
    states: [
        {
            name: "default",
            representation: ""
        }
    ],
    locations: [
        {name: "statusPanel", states: [
            {name: "default", representation: "<img src='assets/img/about_task1.png'><span>A cloud of darkness covers the city.To remove the clouds, turn on the switches for the statements that you think are true.</span>"},

        ]},
        {name: "gameDisplay", states: [
            {name: "default", representation: "<img src='assets/img/caveman.png'>"}
        ]},
        {name: "smokes", states: [
            {name: "default", representation: "<div id='fog-holder'></div>"},
            {name: "0", representation: "<div class='st-0-op' id='fog-holder'></div>"},
            {name: "1", representation: "<div class='st-1-op' id='fog-holder'></div>"},
            {name: "2", representation: "<div class='st-2-op' id='fog-holder'></div>"},
            {name: "3", representation: "<div class='st-3-op' id='fog-holder'></div>"},
            {name: "4", representation: "<div class='st-4-op' id='fog-holder'></div>"},
            {name: "5", representation: "<div class='st-5-op' id='fog-holder'></div>"},
            {name: "6", representation: "<div class='st-6-op' id='fog-holder'></div>"},
            {name: "7", representation: "<div class='st-7-op' id='fog-holder'></div>"},
            {name: "8", representation: "<div class='st-8-op' id='fog-holder'></div>"},
            {name: "9", representation: "<div class='st-9-op' id='fog-holder'></div>"},
        ]}

    ]
};
config.switches = {
    type: "environment",
    states: [
        {
            name: "default",
            representation: ""
        }
    ],
    locations: function () {
        var allLevels = [];
        for (var i = 1; i <= 4; i++) {
            allLevels.push({
                name: "switch"+i,
                states: [
                    {name: "default", representation: "<img src='assets/img/button01.png'>"},
                    {name: "false", representation: "<img src='assets/img/button01.png'>"},
                    {name: "true", representation: "<img src='assets/img/button02.png'>"}
                ]});
        }
        return allLevels;
    }()
};


config.victoryState = {
    type: "environment",
    states: [
        {
            name: "default",
            representation: "<div class='victory-txt'>YOU Win</div>"
        }
    ]

};



