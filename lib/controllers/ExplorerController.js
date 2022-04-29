const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController{
    
    /**
     * filter explorers JSON by mission
     * @param {string} mission 
     * @returns explorersInMission
     */
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);
        return explorersInMission;
    }

    /**
     * get the explorer's username filter by mission
     * @param {string} mission 
     * @returns explorersUsernameByMission
     */
    static getExplorersUsernameByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersUsernameByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return explorersUsernameByMission;
    }

    /**
     * get explorers amount filter by mission
     * @param {string} mission 
     * @returns explorersAmount
     */
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersAmount = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return explorersAmount;
    }
}

module.exports = ExplorerController;
