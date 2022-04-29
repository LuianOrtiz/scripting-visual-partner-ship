const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test ExplorerController", () => {

    test("1. getExplorersByMission", () => {
        const mission = "node";
        const explorersInMission = ExplorerController.getExplorersByMission(mission);

        expect(explorersInMission[0].mission).toBe(mission);
    });

    test("2. get Explorers Username By Mission", () => {
        const mission = "node";
        const explorersUsername = ExplorerController.getExplorersUsernameByMission(mission);
        
        expect(explorersUsername[0]).toBe("ajolonauta1");
    });

    test(`3. get explorer's amount by mission`, () => {
        const mission = "node";
        const explorerAmount = ExplorerController.getExplorersAmountByMission(mission);
    
        expect(explorerAmount).toBe(10);
    });

});