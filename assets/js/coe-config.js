var config = {};

config.initMana = 0;
config.initPower = 0;

config.launchpad = {
    type: "environment",
    states: [
        {name: "default", representation: "<img src='assets/img/background_page01.jpg'/>"}
    ],
    locations: [
        {name: "instructions", states: [
            {name: "default", representation: " "}
        ]},
        {name: "start", states: [
            {name: "start-btn", representation: "<img src='assets/img/start_button1.png'><span>START!</span>"}
        ]}
    ]
};

config.mainPage = {
    type: "environment",
    states: [
        {
            name: "default",
            representation: "<img id='mainPageBg' src='assets/img/background_page02.jpg'/>"
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
            {name: "default", representation: "<img src='assets/img/about_task.png'><span>A cloud of darkness covers the city.To remove the clouds, turn on the switches for the statements that you think are true.</span>"},
            {name: "victory", representation: "<img src='assets/img/about_task.png'><span>You have freed us!!!The people of the city will forever remember you as their hero. Click here to continue.</span>"}
        ]},
        {name: "gameDisplay", states: [
            {name: "default", representation: "<img src='assets/img/snow_leopard_bg.png'>"}
        ]},
        {name: "smokes", states: [
            {name: "default", representation: "<img id='cageimg' src='assets/img/cage.png'>"},


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
                    {name: "default", representation: "<img src='assets/img/button_false.png'>"},
                    {name: "false", representation: "<img src='assets/img/button_false.png'>"},
                    {name: "true", representation: "<img src='assets/img/button_true.png'>"}
                ]});
        }
        return allLevels;
    }()
};


