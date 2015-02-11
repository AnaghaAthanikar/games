var config = {};

config.initMana = 0;
config.initPower = 0;

config.launchpad = {
    type: "environment",
    states: [
        {name: "default", representation: "<img src='assets/img/back.jpg'/>"}
    ],
    locations: [
        {name: "instructions", states: [
            {name: "default", representation: " "}
        ]},
        {name: "start", states: [
            {name: "start-btn", representation: "<span>START!</span>"}
        ]}
    ]
};

config.mainPage = {
    type: "environment",
    states: [
        {
            name: "default",
            representation: "<img id='mainPageBg' src='assets/img/back.jpg'/>"
        }
    ]
};

config.victoryState = {
    type: "environment",
    states: [
        {
            name: "default",
            representation: ""
        }
    ]
};
config.processbar = {
    type: "environment",
    states: [
        {
            name: "default",
            representation: ""
        }
    ]

};



