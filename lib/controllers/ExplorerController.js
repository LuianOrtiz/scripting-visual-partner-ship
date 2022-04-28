const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController{
    
    /**
     * 
     * @param {string} mission 
     * @returns Explorer
     */
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);
        return explorersInMission;
    }

    /**
     * 
     * @param {string} mission 
     * @returns 
     */
    static getExplorersUsernameByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersUsernameByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return explorersUsernameByMission;
    }

    /**
     * 
     * @param {string} mission 
     * @returns 
     */
    static getExplorersAmonutByMission(mission){
        return explorersAmonut;
    }
}

module.exports = ExplorerController;