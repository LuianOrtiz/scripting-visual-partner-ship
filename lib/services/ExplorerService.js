class ExplorerService{
    
    /**
     * filter explorers by type of mission
     * @param {JSON} explorers 
     * @param {string} mission 
     * @returns xplorersInMission
     */
    static filterByMission(explorers, mission){
        const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInMission;
    }

    /**
     * get amount of explorers filtering by mission
     * @param {JSON} explorers 
     * @param {string} mission 
     * @returns explorersInMission.length
     */
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInMission.length;
    }

    /**
     * get explorer's username filtering by mission
     * @param {JSON} explorers 
     * @param {string} mission 
     * @returns explorerUsernameByMission
     */
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInMissionToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const explorerUsernameByMission = explorersInMissionToGetUsernames.map((explorer) => explorer.githubUsername);
        return explorerUsernameByMission; 
    }
    
}
module.exports = ExplorerService;
