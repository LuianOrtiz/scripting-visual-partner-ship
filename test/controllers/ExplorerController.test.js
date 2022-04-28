const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe(`Test ExplorerController testint`, () => {

    test(`1. getExplorersByMission`, () => {
        const mission = "node";
        const explorersInMission = ExplorerController.getExplorersByMission(mission)

        expect(explorersInMission[0].mission).toBe(mission)
    });

    test(`2. getExplorersUsernameByMission`, () => {
        const mission = "node";
        const explorersUsername = ExplorerController.getExplorersUsernameByMission(mission)
        
        expect(explorersUsername[0]).toBe("ajolonauta1")
    })

});